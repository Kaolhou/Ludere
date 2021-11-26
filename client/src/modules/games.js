import {useEffect, useState} from 'react';
import "../stylesheets/games.css"
import GameRow from '../components/gamerow/GameRow';
import load from '../img/home/load.gif'
/*import web from "../img/icons/website.png"
import Aval from '../components/aval/aval';*/

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    const [gameList, setGameList] = useState([])

    useEffect(()=>{
        fetch('/games').then(response=>{
            response.json().then(data=>{
                setGameList(data)
            })
        })
    },[])
    //console.log("to no multi")
    
    return(
        <div className="page">
            <section className="lists">
                {gameList.map((item, key) => (
                    
                    <GameRow key={key} title={item.name} item={item.items} fcla={item.slug}/>
                    
                ))}
            </section>
            {gameList.length <= 0 &&
                <div className="loading">
                    <img src={load} alt="loading" />
                </div>        
            }
        </div>
    )
}