//biblioteca
import {useEffect, useState} from 'react';
import gmdb from '../gmdb'
import GameRow from '../components/GameRow';
import "../stylesheets/games.css"
import load from '../img/home/load.gif'
//módulo
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    const [gameList, setGameList] = useState([])

  useEffect(()=>{
    const loadAll = async () =>{
      let list = await gmdb.getHomeList() 
      console.log(list)
      setGameList(list)
      
    }
    loadAll()
  }, [])

  return(
    <div className="page">
      
      <section className="lists">
        {gameList.map((item, key) => (

            <GameRow key={key} title={item.name} item={item.items}/>
          
        ))}
      </section>
      {gameList.length <= 0 &&
        <div className="loading">
          <img src={load} alt="laitoba" />
        </div>        
      }
    </div>
  )
}