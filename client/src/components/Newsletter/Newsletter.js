
function Newsletter({all}){
    console.log(all)
    return(
        <div className="news-item" >
            {all.title}
        </div>
    )
}
export default Newsletter