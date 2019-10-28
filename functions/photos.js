const got = require("got")

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g // the only difference is the [ at the beginning
function extractPhotos(content) {
  const links = []
  let match
  while ((match = regex.exec(content))) {
    links.push(match[1])
  }
  return links
}

module.exports.handler = (event, context, callback) => {
  console.log("queryStringParameters", event.queryStringParameters)
  got(`https://photos.app.goo.gl/${event.queryStringParameters.album}`).then(
    res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(extractPhotos(res.body))
      })
    }
  )
}
