//importar dados de configurções
const conf = require('./config.json')
const API_KEY = conf[0].KEY;
const API_BASE = 'https://api.rawg.io/api';
//armazenar id de generos de jogos
const search = {
    "rpg": "5",
    "shooter": "2",
    "action": "4",
    "indie": "51",
    "adventure": "3"
}

//função de fetch
const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    //console.log(req)
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getHomeList: async () => {
        return[
            {
                slug : "rpg",
                name : "RPG",
                items: await basicFetch(`/games?key=${API_KEY}&genres=${search.rpg}&ordering=-added&page_size=10`)
            },
            {
                slug : "action",
                name : "Ação",
                items: await basicFetch(`/games?key=${API_KEY}&genres=${search.action}&page_size=10`)
            },
            
            {
                slug : "indie",
                name : "Indie",
                items: await basicFetch(`/games?key=${API_KEY}&genres=${search.indie}&page_size=10`)
            },
            {
                slug : "adventure",
                name : "Aventura",
                items: await basicFetch(`/games?key=${API_KEY}&genres=${search.adventure}&page_size=10&page=3`)
            },
            {
                slug : "shooter",
                name : "Tiro",
                items: await basicFetch(`/games?key=${API_KEY}&genres=${search.shooter}&page_size=10&page=2`)
            },
        ]
    }
}