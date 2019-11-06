const got = require("got")

module.exports.handler = async (event, context) =>
  got(`https://photos.app.goo.gl/${event.queryStringParameters.album}`)
    .then(res => ({
      statusCode: 200,
      body: JSON.stringify(extractPhotos(res.body))
    }))
    .catch(err => ({
      statusCode: 422,
      body: JSON.stringify(err)
    }))

function extractPhotos(content) {
  const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g
  const links = []
  let match
  while ((match = regex.exec(content))) {
    links.push(match[1])
  }
  return links
}
