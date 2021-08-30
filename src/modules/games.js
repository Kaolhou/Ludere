//biblioteca
import {useEffect, useState} from 'react';
import gmdb from '../gmdb'
import GameRow from '../components/GameRow';
import "../stylesheets/games.css"
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
          <img src="https://pbs.twimg.com/profile_images/1299064083300470787/aSjHSvCZ_400x400.jpg" alt="laitoba" />
        </div>        
      }
    </div>
  )
}