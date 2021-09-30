import {useEffect, useState} from 'react';
import "../stylesheets/games.css"
import GameRow from '../components/gamerow/GameRow';
import load from '../img/home/load.gif'

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
    console.log(id)

    const [gameList, setGameList] = useState([])
    //const [gameUni, setGameUni] = useState([])

    if(args === game){
        useEffect(()=>{
            const loadAll = async ()=>{
                try {
                    let prom = await fetch('/games')
                    var list = await prom.json()
                    setGameList(list)
                    console.log(list)
                } catch (error) {
                    console.error(error)
                }
            }
            loadAll();
        },[])
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
        return(
            <>
                tchau
            </>
        )
    }
}