import './Newsletter.css'

function Newsletter({all}){

    
    return(
        <div className="news-list" >
            <h2 className="staa">Notícias</h2>
            {all.map((item, key)=>(
                <a href={`/news?id=${item.id}`} key={key}>
                    <div className="news-list-item">
                        <h3>{item.titulo}</h3>
                        <h4>{item.destaque}</h4>
                    </div>
                </a>
            ))}
        </div>
    )
}
export default Newsletter