//express init
const express = require('express');
const app = express();
const port = 5000;

//dotenv init
require('dotenv').config()

//api bases
const API_KEY = process.env.KEY;
const API_BASE = 'https://api.rawg.io/api';

const api = require('./api/api');

//search base data
const search = {
    "rpg": "5",
    "shooter": "2",
    "action": "4",
    "indie": "51",
    "adventure": "3"
}
const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    //console.log(req)
    return json;
}

//server.use(express.json())

app.get('/games', async (req, res)=>{
    try {
        const aoba = await api.get('')
        return aoba
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, ()=>{
    console.log(`server started at port ${port}`);
    console.log(API_KEY)
})