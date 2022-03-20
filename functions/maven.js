const axios  = require("axios")

exports.handler = async (event, context) => {
    let uri = `https://repo.maven.apache.org/maven2/${event.queryStringParameters.group}/${event.queryStringParameters.artifact}/maven-metadata.xml`
    console.log(uri)
    let response = await axios.get(uri)

    return {
        statusCode: 200,
        body: response.data.match(/(?<=<latest>)(.*?)(?=<\/latest>)/)[0]
    }
}