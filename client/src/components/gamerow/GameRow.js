import React, {useState} from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './GameRow.css'

function GameRow({title, item, fcla}){
    const [scrollX, setScrollX] = useState(0);
    
    return(
        <div className={fcla}>
            <h2>{title}</h2>
            <div className="gameRow--left" onClick={()=>{
                let x = scrollX + 500;
                if(x > 0){
                    x = 0;
                }
                setScrollX(x);
            }}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="gameRow--right" onClick={()=>{
                let x = scrollX - 500;

                setScrollX(x);
            }}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
                

            <div className="gameRow--listarea" style={{marginLeft: scrollX}}>
                {item.results.length > 0 && item.results.map((item, key) =>(
                    <a href={`games?id=${item.id}`} key={key} className="gameRow--itemLink">
                        <div className="gameRow--itemarea" key={key}>
                            <div className="image">
                                <img src={`${item.background_image}`} alt={`${item.name}`}/>
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