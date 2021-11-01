import { useState, useEffect } from "react"
import "../stylesheets/home.css"
import Newsletter from "../components/Newsletter/Newsletter"

// eslint-disable-next-line import/no-anonymous-default-export
export default function (){
    const [noti, setNoti] = useState([])
    useEffect(()=>{
        async function news(){
            let prom = await fetch('/news')
            let news = await prom.json()
            console.log(await news)
            setNoti(news)
        }
        news()
    },[])
    return(
        <div>
            
            <h2>Quem somos nós</h2>
            <p>Nós somos um equipe pequena de programadores, pesquisadores e entusiastas do mundo dos games que busca a construção e o aperfeiçoamento dessa plataforma digital, presando única e exclusivamente pela verdade e a realidade.</p>
            <p>Nos últimos tempos, uma série de portais e sites famosos sobre videojogos tem realizado um trabalho péssimo quando se trata desta nova arte, seja com críticas esdruxulas e ilógicas sobre a arte dá obra, ou seja transmitindo informações falsas sobre a história de um determinado jogo e tantos outros erros que ainda persistem na mídia mainstream de videogames.
Por isso, nos buscamos realizar um trabalho sério, com analises sérias, buscando principalmente a opinião de gamers e youtubers que possuem experiencia no assunto.</p>

            <section>
                <Newsletter all={noti} />
            </section>
        </div>
    )
}
