import './stylesheets/adm.css'
import Footer from './modules/footer'

/*const filt = ()=>{
    const user = document.getElementById('user')
    const pass = document.getElementById('pass')

    if(user) return;
    if(!pass) return false;
}*/

const Adm = ()=>{
    return(
        <div id="inter">
            <form target="/admin" method="post"/* onSubmit={filt}*/>
                <h2>Login</h2>
                <p className="input inp1"><label htmlFor="user"><span className="text">User: </span><span className="input"><input type="text" id="user" required  name="user"/></span></label></p>
                <p className="input inp2"><label htmlFor="pass"><span className="text">Pass: </span><span className="input"><input type="password" id="pass" required name="pass"/></span></label></p>
                <p id="sub"><input type="submit" value="Enviar" className="btn" /><input type="reset" value="Limpar" className="btn" /></p>
            </form>
            <Footer />
        </div>
    )
}
export default Adm;