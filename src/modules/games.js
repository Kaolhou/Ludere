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
  useEffect(() => {
    document.title = "Portal Abstract"
    /*var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = "./src/img/favicon.ico";
    document.getElementsByTagName('head')[0].appendChild(link);*/
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