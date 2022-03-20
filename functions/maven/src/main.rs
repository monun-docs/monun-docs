use aws_lambda_events::event::apigw::{ApiGatewayProxyRequest, ApiGatewayProxyResponse};
use aws_lambda_events::encodings::Body;
use curl::easy::Easy;
use http::header::HeaderMap;
use lambda_runtime::{handler_fn, Context, Error};
use log::LevelFilter;
use simple_logger::SimpleLogger;

#[tokio::main]
async fn main() -> Result<(), Error> {
    SimpleLogger::new().with_level(LevelFilter::Info).init().unwrap();

    let func = handler_fn(my_handler);
    lambda_runtime::run(func).await?;
    Ok(())
}

pub(crate) async fn my_handler(event: ApiGatewayProxyRequest, _ctx: Context) -> Result<ApiGatewayProxyResponse, Error> {
    let format = format!("https://repo.maven.apache.org/maven2/{}/{}/maven-metadata.xml", event.query_string_parameters.get("group").unwrap().replace(".", "/"), event.query_string_parameters.get("artifact").unwrap());

    let mut body_bytes = String::new();

    let mut easy = Easy::new();
    easy.url(format.as_str()).unwrap();
    {
        let mut transfer = easy.transfer();
        transfer.write_function(|data| {
            body_bytes.push_str(String::from_utf8(data.to_vec()).unwrap().as_str());
            Ok(data.len())
        }).unwrap();
        transfer.perform().unwrap();
    }

    let regex = fancy_regex::Regex::new(r#"(?<=<latest>)(.*?)(?=<\/latest>)"#)?;

    let resp = ApiGatewayProxyResponse {
        status_code: 200,
        headers: HeaderMap::new(),
        multi_value_headers: HeaderMap::new(),
        body: Some(Body::Text(format!("{}", regex.find(body_bytes.as_str()).unwrap().unwrap().as_str()))),
        is_base64_encoded: Some(false),
    };

    Ok(resp)
}