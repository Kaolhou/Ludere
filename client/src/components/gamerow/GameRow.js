import React, {useState} from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './GameRow.css'

function GameRow({title, item, fcla}){
    const [scrollX, setScrollX] = useState(0);
    //const [numScroll, setNumScroll] = useState(0)
    return(
        <div className={fcla}>
            <h2 className="pop">{title}</h2>
            <div className="gameRow--left" onClick={()=>{
                let x = scrollX + 200
                //console.log(Math.round(window.innerWidth / 2))
                if(x > 0){
                    x = 0;
                }
                
                setScrollX(x)
            }}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="gameRow--right" onClick={()=>{
                let x = scrollX - 200;
                let listW = item.results.length * 200;

                if (window.innerWidth - listW > x){
                    x = (window.innerWidth - listW)- 50
                }
                setScrollX(x);
            }}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            
            <div className={`gameRow--listarea ${fcla}`} style={{marginLeft: scrollX}}>
                {item.results.length > 0 && item.results.map((item, key) =>(
                    <a href={`game?id=${item.id}`} key={key} className="gameRow--itemLink">
                        <div className="gameRow--itemarea" key={key}>
                            <div className="image-div-conteiner-games">
                                <div className="image">
                                    <img src={`${item.background_image}`} alt={`${item.name}`}/>
                                    
                                </div>
                                <span className="title">{item.name}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default GameRow