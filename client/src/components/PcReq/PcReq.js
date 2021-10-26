

const PcReq = ({item})=>{
    //const arrobj = item[0]

    /*const minimum = arrobj.requirements.minimum.split("\n")
    const recommended = arrobj.requirements.recommended.split("\n")*/
    //console.log(minimum)
    return (
        <>
            <p className="reqpar">{/*minimum.map((item, key)=>{
                return (
                    <p key={key} className="requi">{item}</p>
                ) 
            })*/}</p>
            <p className="reqpar">{/*recommended.map((item, key)=>{
                return (
                    <p key={key} className="requi">{item}</p>
                ) 
            })*/}</p>
        </>
    )
}
export default PcReq