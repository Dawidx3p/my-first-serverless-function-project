/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

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
  .then(response => {
    return{
      statusCode: 200,
      body: JSON.stringify(response)
  }
  })
  .catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
