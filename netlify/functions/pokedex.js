import fetch from 'node-fetch';

exports.handler = async function(){
    POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto';
    response = await fetch(POKE_API);
    data = await response.json();
    return{
        statusCode: 200,
        body: JSON.stringify(data)
    }
}