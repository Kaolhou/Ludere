//biblioteca
import {useEffect, useState} from 'react';
import gmdb from '../gmdb'
import GameRow from '../components/GameRow';
import "../stylesheets/games.css"
import load from '../img/home/load.gif'

//const data = require("../db.json")

//módulo
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
  //inicio de manuseamento de url
  const URL = window.location.href;
  var args = URL.slice(URL.indexOf("?")+1);
  var game = window.location.origin + "/games";
  var query = args.split("&");
  var id;
  if(query.length > 1){id = query[0].toString()}else{id = query.toString()}
  id = id.slice(id.indexOf("=")+1)
  
  //variáveis de API
  const [gameList, setGameList] = useState([])
  const [gameUni, setGameUni] = useState([])

  if(args === game){
    useEffect(()=>{
      const loadAll = async () =>{
        let list = await gmdb.getHomeList() 
        //console.log(list)
        setGameList(list)
        
      }
      loadAll()
    }, [])
    return(
      <div className="page">
        <section className="lists">
          {gameList.map((item, key) => (
              <GameRow key={key} title={item.name} item={item.items} fcla={item.slug}/>
          ))}
        </section>
        {gameList.length <= 0 &&
          <div className="loading">
            <img src={load} alt="laitoba" />
          </div>        
        }
      </div>
    )
  }else{
    useEffect(()=>{
      const loadOne = async () =>{
        let listG = await gmdb.getGameInfo(id)
        //console.log(listG)
        setGameUni(listG);
      }
      loadOne()
    }, [id])
  
    return(
      <div className="page">
        <img src={gameUni.background_image} alt={gameUni.slug} />
        {//<div>{data.id.${id}}</div>
        }
      </div>
    )
  }
}