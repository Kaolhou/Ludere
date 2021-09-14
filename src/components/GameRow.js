import React from 'react';
import './GameRow.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, item})=>{
    return(
        <div>
            <h2>{title}</h2>
            <div className="gameRow--listarea">
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