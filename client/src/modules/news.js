import { useState, useEffect } from "react";
import '../stylesheets/news.css'


function News(){
    const [newsInfo, setNewsInfo] = useState([{titulo: "", destaque: "", cont: ""}])

    const URL = window.location.href;
    var args = URL.slice(URL.indexOf("?")+1);
    var query = args.split("&");
    var id;
    if(query.length > 1){id = query[0].toString()}else{id = query.toString()}
    id = id.slice(id.indexOf("=")+1)

    useEffect(()=>{
        async function exe(){
            const prom = await fetch(`/news/${id}`)
            setNewsInfo(await prom.json())
            
        }
        exe()
    },[id])
    console.log(newsInfo[0])
    return(
        <div id="content-info">
            <h1>{newsInfo[0].titulo}</h1>
            <h2>{newsInfo[0].destaque}</h2>
            <article>
                {newsInfo[0].cont}
            </article>
        </div>
    )
}
export default News