import {useEffect, useState} from 'react';
import "../stylesheets/games.css"
import GameRow from '../components/gamerow/GameRow';
import load from '../img/home/load.gif'
import web from "../img/icons/website.png"
import Aval from '../components/aval/aval';

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

    const [gameList, setGameList] = useState([])
    const [gameUni, setGameUni] = useState([])
    const [avaLocal, setAvaLocal] = useState([])
    const [platform, setPlatform] = useState()
    const [content, setContent] = useState([])

    if(args === game){
        console.log("to no multi")
        useEffect(()=>{
            const loadAll = async ()=>{
                try {
                    let prom = await fetch('/games')
                    var list = await prom.json()
                    setGameList(list)
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
        console.log("to no solo")
        useEffect(()=>{
            const loadAll = async ()=>{
                try {
                    //api data
                    const promG = await fetch(`/game/${id}`)
                    var listG = await promG.json()
                    setGameUni(listG)
                    var sla = listG.platforms.filter((item)=>{
                        return item.platform.id === 4
                    })
                    
                    console.log(sla[0])
                    setPlatform(sla)
                    
                    //local data
                    const promL = await fetch(`/local/${id}`)
                    var listL = await promL.json()
                    setContent(listL[0].descri.join(";"))
                    setAvaLocal(listL[0])
                } catch (error) {
                    console.error(error)
                }
            }
            loadAll();
        },[id])
        //animação de scroll
        window.addEventListener('scroll', ()=>{
            const windowTop = window.scrollY / 100
            if(windowTop > 3) return
            document.getElementById('img-main').style.filter = `blur(${windowTop}px)`
        })
        return(
            <div id="view">
                <h1 id="title-main-uni">{gameUni.name} {gameUni.website && 
                    <div id="website">
                        <a href={gameUni.website} target="_blank" rel="noreferrer"><img src={web} alt={gameUni.slug} className="websiteLogo" /></a>
                    </div>
                }</h1>
                <div className="local-photo-init">
                    <img src={`${gameUni.background_image}`} alt={gameUni.name} id="img-main" />
                </div>
                
                <div id="content">
                    <Aval content={content} />
                    {/*avaLocal.descri.map((item)=>(<p>{item}</p>))*/}

                </div>
                {/*<div id="requirements">
                    
                </div>*/}
                {gameUni.length <= 0 &&
                    <div className="loading">
                        <img src={load} alt="laitoba" />
                    </div>        
                }
                {console.log(gameUni)}
                {console.log(avaLocal)}
                {console.log(platform)}
            </div>
        )
    }
}