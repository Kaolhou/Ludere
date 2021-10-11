//express init
const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('./modules/database')
const auth = require("./modules/auth");
const { sequelize } = require('./modules/database');


//dotenv init
require('dotenv').config()

//import database
/*const db = require('./database/index.json')
const dbgames = db.games;*/

//sequelize
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


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
    const resu = {
        "rpg": await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.rpg}&ordering=-added&page_size=10`),
        "action": await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.action}&page_size=10`),
        "indie": await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.indie}&page_size=10`),
        "adventure": await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.adventure}&page_size=10&page=3`),
        "shoot": await axios(`${API_BASE}/games?key=${API_KEY}&genres=${search.shooter}&page_size=10&page=2`)
    }
    const games = [
        {
            slug : "rpg",
            name : "RPG",
            items: resu.rpg.data
        },
        {
            slug : "action",
            name : "Ação",
            items: resu.action.data
        },
        {
            slug : "indie",
            name : "Indie",
            items: resu.indie.data
        },
        {
            slug : "adventure",
            name : "Aventura",
            items: resu.adventure.data
        },
        {
            slug : "shooter",
            name : "Tiro",
            items: resu.shoot.data
        }
    ]
    try {
        res.send(games)
    } catch (error) {
        res.send(error)
        console.error(error)
    }
})

app.get('/game/:id', async(req, res)=>{
    const id = req.params.id
    let game = await axios(`${API_BASE}/games/${id}?key=${API_KEY}`)
    res.send(game.data)
})

app.get('/local/:id', async(req,res)=>{
    const id = req.params.id
    db.sequelize.authenticate().then(()=>{
        console.log("conectado com sucesso")
    }).catch((err)=>{
        console.error(err)
    })
    
    /*let response = dbgames.filter((item)=>{
        if(item.id === id) return item;
    })
    res.send(response)*/
})




app.post('/admin', async (req,res)=>{
    res.send(await auth(req.body.user, req.body.pass))

})

app.listen(port, ()=>{
    console.log(`server started at port ${port}`);
    console.log(`http://localhost:${port}`)
})