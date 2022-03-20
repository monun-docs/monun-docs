const fetch = require("node-fetch")

exports.handler = async (event, context) => {
    let uri = `https://repo.maven.apache.org/maven2/${event.queryStringParameters.group.replaceAll(".","/")}/${event.queryStringParameters.artifact}/maven-metadata.xml`
    console.log(uri)
    let response = await fetch(uri)
    let text = await response.text()
    return {
        statusCode: 200,
        body: text.match(/(?<=<latest>)(.*?)(?=<\/latest>)/)[0]
    }
}