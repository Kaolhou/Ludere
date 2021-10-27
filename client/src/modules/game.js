import {useEffect, useState} from 'react';
import load from '../img/home/load.gif'
import web from "../img/icons/website.png"
import '../stylesheets/games.css'
import stars from './stars'
//import Aval from '../components/aval/aval';

function Game(){
    const [gameUni, setGameUni] = useState([])
    const [avaLocal, setAvaLocal] = useState([])
    const [platform, setPlatform] = useState()
    const [imgStar, setImgStar] = useState()
    //const [content, setContent] = useState({})

    
    //inicio de manuseamento de url
    const URL = window.location.href;
    var args = URL.slice(URL.indexOf("?")+1);
    //var game = window.location.origin + "/games";
    var query = args.split("&");
    var id;
    if(query.length > 1){id = query[0].toString()}else{id = query.toString()}
    id = id.slice(id.indexOf("=")+1)
    
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

                    switch(listL[0].stars){
                        case 1:
                            setImgStar(stars.one)
                        break;
                        case 2:
                            setImgStar(stars.two)
                        break;
                        case 3:
                            setImgStar(stars.three)
                        break;
                        case 4:
                            setImgStar(stars.four)
                        break;
                        case 5:
                            setImgStar(stars.five)
                        break;
                        default: return "error";
                    }

                    setAvaLocal(listL[0])
                } catch (error) {
                    console.error(error)
                }
            }
            loadAll();
            document.getElementById('content').innerText = avaLocal.descri
        },[id, avaLocal.descri])
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
                
                <div id="short-aval">
                    <span className="spanaval"><img src={imgStar} alt="bababoi" id="starsvg" /></span>
                    <span className="spanaval">{`"${avaLocal.fras}"`}</span>
                </div>

                <div id="content">
                    {//<Aval content={content} />
                    }
                    {avaLocal.descri}
                    {/*avaLocal.descri.map((item)=>(<p>{item}</p>))*/}
                </div>
                {/*<div id="requirements">
                    
                </div>*/}
                {gameUni.length <= 0 &&
                    <div className="loading">
                        <img src={load} alt="loading" />
                    </div>        
                }
                {console.log(gameUni)}
                {console.log(avaLocal)}
                {console.log(platform)}
            </div>
        )
}
export default Game