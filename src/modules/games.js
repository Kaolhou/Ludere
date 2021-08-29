//biblioteca
import {useEffect, useState} from 'react';
import gmdb from '../gmdb'
import GameRow from '../components/GameRow';
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
    </div>
  )
}