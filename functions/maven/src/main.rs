use aws_lambda_events::event::apigw::{ApiGatewayProxyRequest, ApiGatewayProxyResponse};
use aws_lambda_events::encodings::Body;
use http::header::HeaderMap;
use hyper::{Client, body};
use hyper_tls::HttpsConnector;
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
    let https = HttpsConnector::new();

    let client = Client::builder().build::<_, hyper::Body>(https);

    let format = format!("https://repo.maven.apache.org/maven2/{}/{}/maven-metadata.xml", event.query_string_parameters.get("group").unwrap().replace(".", "/"), event.query_string_parameters.get("artifact").unwrap());

    let uri = format.parse()?;

    let response = client.get(uri).await?;

    let body_bytes = body::to_bytes(response.into_body()).await?;

    let str = String::from_utf8(body_bytes.to_vec())?;

    let regex = fancy_regex::Regex::new(r#"(?<=<latest>)(.*?)(?=<\/latest>)"#)?;

    let resp = ApiGatewayProxyResponse {
        status_code: 200,
        headers: HeaderMap::new(),
        multi_value_headers: HeaderMap::new(),
        body: Some(Body::Text(format!("{}", regex.find(str.as_str()).unwrap().unwrap().as_str()))),
        is_base64_encoded: Some(false),
    };

    Ok(resp)
}