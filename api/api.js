const axios = require('axios');
require('dotenv').config()

API_KEY = process.env.KEY

const dataRpg = axios.create({
    baseURL: `https://api.rawg.io/api/games?key=${API_KEY}&genres=5&ordering=-added&page_size=10`
})

const dataShoot = axios.create({
    baseURL: `https://api.rawg.io/api/games?key=${API_KEY}&genres=2&page_size=10`
})

const dataIndi = axios.create({
    baseURL: `https://api.rawg.io/api/games?key=${API_KEY}&genres=51&page_size=10`
})

const dataAdv = axios.create({
    baseURL: `https://api.rawg.io/api/games?key=${API_KEY}&genres=3&page_size=10&page=3`
})

const dataAct = axios.create({
    baseURL: `https://api.rawg.io/api/games?key=${API_KEY}&genres=4&page_size=10&page=2`
})

module.exports = [dataRpg, dataShoot, dataIndi, dataAdv, dataAct]