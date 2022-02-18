const fetch = require('node-fetch');
exports.handler = async function(){
    return{
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!'
        })
    }
}