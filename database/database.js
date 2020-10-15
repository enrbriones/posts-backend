
const { Client } = require('pg')
const conString = process.env.CONSTRING

const client = new Client(conString)
client.connect()
module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  },
}