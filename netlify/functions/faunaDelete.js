/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query
const getId = require('./utils/getId');

exports.handler = (event, context) => {
  console.log('creating test data')
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_ADMIN_SECRET
  }) 
  const id = getId(event.path)
  console.log(`Function 'todo-delete' invoked. delete id: ${id}`)
  return client.query(q.Delete(q.Ref(`classes/test/${id}`)))
    .then((response) => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
