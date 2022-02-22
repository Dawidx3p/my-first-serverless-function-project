/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

console.log(process.env.FAUNADB_ADMIN_SECRET);

exports.handler = (event, context) => {
  console.log('creating test data')
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_ADMIN_SECRET
  }) 
  return client.query(
    q.Create(
      q.Collection('test'),
      { data: { testField: 'testValue' } }
    )
  )
  .then(response => response.json())
  .catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
