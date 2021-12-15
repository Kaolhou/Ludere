import {/*useEffect,*/ useState} from 'react'

function Test(){
    const [Test, setTest] = useState('')
    
        fetch('/test').then((prom)=>{
            prom.json().then((item)=>{
                console.log('1')
                setTest(item)
            })
        })
    
    return(
        <div>
            {Test}
        </div>
    )
}
export default Test