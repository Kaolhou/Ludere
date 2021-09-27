//express init
const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');

//dotenv init
require('dotenv').config()

//api bases
const API_KEY = process.env.KEY;
const API_BASE = 'https://api.rawg.io/api';

//search base data
const search = {
    "rpg": "5",
    "shooter": "2",
    "action": "4",
    "indie": "51",
    "adventure": "3"
}

app.get('/games', async (req, res)=>{
    const prom = [
        {
            slug : "rpg",
            name : "RPG",
            items: await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.rpg}&ordering=-added&page_size=10`)
        },
        {
            slug : "action",
            name : "Ação",
            items: await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.action}&page_size=10`)
        },
        {
            slug : "indie",
            name : "Indie",
            items: await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.indie}&page_size=10`)
        },
        {
            slug : "adventure",
            name : "Aventura",
            items: await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.adventure}&page_size=10&page=3`)
        },
        {
            slug : "shooter",
            name : "Tiro",
            items: await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.shooter}&page_size=10&page=2`)
        }
    ]
    //JSON.stringify(prom)
    try {
        let games = []
        //console.log(prom[0].items.data)
        for(let i in prom){
            games.push(prom[i].items.data)
        }
        res.send(games)
        //res.send(prom)
    } catch (error) {
        res.send(error)
        console.error(error)
    }
})

app.listen(port, ()=>{
    console.log(`server started at port ${port}`);
    //console.log(API_KEY)
})