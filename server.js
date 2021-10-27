//express init
const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars')
const db = require('./modules/database')
const auth = require("./modules/auth");
const post = require('./modules/post');

app.engine('handlebars', handlebars({dafaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//dotenv init
require('dotenv').config()

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
    try {
        const id = req.params.id
        let game = await axios(`${API_BASE}/games/${id}?key=${API_KEY}`)
        res.send(game.data)
    } catch (error) {
        res.send(error)
    }
})

app.get('/local/:id', async(req,res)=>{
    const id = req.params.id
    db.sequelize.authenticate().then(async()=>{
        res.send(await post.findAll({
            where: {id}
        }))
    }).catch((err)=>{
        console.error(err)
    })
})


app.post('/add', async(req,res)=>{
    const id = req.body.Nid
    const title = req.body.Ntitle
    const aval = req.body.Naval.split('\r\n').join('\n')
    const url = req.body.Nyou
    /*aval.map((para)=>{
        console.log('- '+para)
    })*/
    try {
        post.create({
            id: id,
            title: title,
            descri: aval,
            youturl: url
        })
        res.send("post created")
    } catch (error) {
        res.send(error)
    }
})

app.post('/admin', async (req,res)=>{
    try {
        if(await auth(req.body.user, req.body.pass)){
            res.render('postman')
        }else{
            res.send('usuário ou senha incorretos')
        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/update?', async (req, res)=>{
    const url = req.query.url
    const title = req.query.title
    const id = req.query.id

    if(!id) return res.send("you must send an ID")
    if(!req.query.key == process.env.USER_KEY) return res.send("you didn't enter a valid KEY")
//    http://localhost:5000/update?key=eusla&title=terraria&id=422&url=https://www.youtube.com/watch?v=FYEqrVqgTxw
    try {
        const gameAllId = await post.findAll({
            where: {id}
        })
        console.log(gameAllId[0].id)
        if(!(url === undefined) || (url === "") || (url === null)){
            gameAllId[0].youturl = url
        }
        if(!(title === undefined) || (title === "") || (title === null)){
            gameAllId[0].title = title
        }
        await gameAllId[0].save()
        res.send("you have updated!!")
    } catch (error) {
        res.send(error)
    }
})

app.listen(port, ()=>{
    console.log(`server started at port ${port}`);
    console.log(`http://localhost:${port}`)
})