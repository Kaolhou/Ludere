import './Newsletter.css'

function Newsletter({all}){

    
    return(
        <div className="news-list" >
            {all.map((item, key)=>(
                <a href="/news" key={key}>
                    <div className="news-list-item">
                        {item.title}
                    </div>
                </a>
            ))}
        </div>
    )
}
export default Newsletter