import {useEffect, useState} from 'react';
import load from '../img/home/load.gif'
import web from "../img/icons/website.png"
import '../stylesheets/games.css'
import stars from './stars'
import yout from '../img/icons/home/youtube.png'
//import Aval from '../components/aval/aval';

function Game(){
    const [gameUni, setGameUni] = useState([])
    const [avaLocal, setAvaLocal] = useState([])
    const [platform, setPlatform] = useState([{platform: 0}])
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
    
    //console.log("to no solo")
    useEffect(()=>{
        const loadAll = async ()=>{
            try {
                //api data
                const promG = await fetch(`/game/${id}`)
                var listG = await promG.json()
                setGameUni(listG)
                var plat = listG.platforms.filter((item)=>{
                    return item.platform.id === 4
                })
                
                console.log(plat)
                if(plat.length > 0){
                    setPlatform(plat)
                }
                
                //local data
                const promL = await fetch(`/local/${id}`)
                var listL = await promL.json()
                console.log(listL)

                //alteração de imagem para número de estrelas
                switch(listL[0].stars){
                    case 1: setImgStar(stars.one)
                    break;
                    case 2: setImgStar(stars.two)
                    break;
                    case 3: setImgStar(stars.three)
                    break;
                    case 4: setImgStar(stars.four)
                    break;
                    case 5: setImgStar(stars.five)
                    break;
                    default: return "error";
                }

                setAvaLocal(listL[0])
            } catch (error) {
                console.error(error)
            }
        }
        loadAll();
        //atualizar descrição do jogo
        document.getElementById('content').innerText = avaLocal.descri
    },[id, avaLocal.descri])

        //animação de scroll
        /*
        retiramos por um erro devido à permanência do addEventListener nas outras páginas, que na existência
        do id="img-main", resultava em erro
        */
        /*window.addEventListener('scroll', ()=>{
            //if(window.location.pathname === startsWith('/games')) return
            //condição para só execultar se estiver no caminho /games
            const windowTop = window.scrollY / 100
            if(windowTop > 3) return
            document.getElementById('img-main').style.filter = `blur(${windowTop}px)`
        })*/

        return(
            <div id="view">
                <div id="title-main-uni">
                    <h1>{gameUni.name}</h1> 
                </div>
                
                <header>
                    <div id="gameheader">
                        <div className="local-photo-init">
                            <img src={`${gameUni.background_image}`} alt={gameUni.name} id="img-main" />
                        </div>
                        <div id="short-aval">
                            <span className="spanaval"><img src={imgStar} alt="imgStars" id="starsvg" /></span>
                            <span className="spanaval">{`"${avaLocal.fras}"`}</span>
                        </div>
                    </div>
                    {platform[0].platform.id === 4 && platform[0].requirements.minimum && platform[0].requirements.recommended &&
                        <div id="requirements">
                            <strong>Requisitos para PC:</strong>
                            <p>{platform[0].requirements.minimum}</p>
                            <p>{platform[0].requirements.recommended}</p>
                        </div>
                    }
                </header>

                <div id="content">
                    {avaLocal.descri}
                </div>

                <div id="icons">
                    {(gameUni.website || avaLocal.youturl !== "") && 
                        <div id="website">
                            {gameUni.website &&
                                <span className="webimg"><a href={gameUni.website} target="_blank" rel="noreferrer"><img src={web} alt={gameUni.slug} className="websiteLogo" /></a></span>
                            }
                            {avaLocal.youturl !== "" &&
                                <span className="webimg"><a href={avaLocal.youturl} target="_blank" rel="noreferrer"><img src={yout} alt={gameUni.slug} className="websiteLogo" /></a></span>
                            }
                        </div>
                    }
                </div>

                {gameUni.length <= 0 && avaLocal.length <= 0 &&
                    <div className="loading">
                        <img src={load} alt="loading" />
                    </div>        
                }



                {/*console.log(gameUni)}
                {console.log(avaLocal)}
            {console.log(platform)*/}
            </div>
        )
}
export default Game