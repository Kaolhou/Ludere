import "../stylesheets/about.css"
import andre from "../img/profile/andre.jpg"
import jonas from "../img/profile/jonas.png"
import bruno from "../img/profile/bruno.jpg"
import marco from "../img/profile/MarcoR.jpg"
import leandro from "../img/profile/leandro.jpg"
import kaio from "../img/profile/kaio.jpg"
import faceicon from "../img/icons/face128128.svg"
import githubicon from "../img/icons/github128128.svg"
import instaicon from "../img/icons/insta128128.svg"
import twittericon from "../img/icons/twitter128128.svg"

// eslint-disable-next-line import/no-anonymous-default-export
export default function (){
    return(
        <div className="main">
            <div className="imgs">
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={andre} alt="aoba" className="person"/>
                        </div>
                        <div className="content">
                            <h2>André Mendes da Rocha</h2>
                            <p>Programador Full-Stack</p>
                            <p>
                                <a href="https://www.facebook.com/profile.php?id=100009522850054" target="_blank" rel="noreferrer" className="icon">
                                    <img src={faceicon} alt="face" />
                                </a> 
                                <a href="https://github.com/Kaolhou" target="_blank" rel="noreferrer" className="icon">
                                    <img src={githubicon} alt="github" />
                                </a> 
                                <a href="https://www.instagram.com/andre._.mendess/" target="_blank" rel="noreferrer" className="icon">
                                    <img src={instaicon} alt="insta" />
                                </a>
                                <a href="https://twitter.com/Kaolhou" target="_blank" rel="noreferrer" className="icon">
                                    <img src={twittericon} alt="face" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={bruno} alt="aoba" className="person"/>
                        </div>
                        <div className="content">
                            <h2>Bruno Guilherme Queiroz</h2>
                            <p>
                                <a href="https://www.facebook.com/bruno.queiroz.92351995" target="_blank" rel="noreferrer" className="icon">
                                    <img src={faceicon} alt="face" />
                                </a> 
                                <a href="https://github.com/Brunoqrzslva" target="_blank" rel="noreferrer" className="icon">
                                    <img src={githubicon} alt="github" />
                                </a> 
                                <a href="https://www.instagram.com/qrzslv/?hl=pt-br" target="_blank" rel="noreferrer" className="icon">
                                    <img src={instaicon} alt="insta" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={jonas} alt="aoba" className="person"/>
                        </div>
                        <div className="content">
                            <h2>Jonas Viana Sales</h2>
                            <p>Programador Full-Stack:</p>
                            <p>
                                <a href="https://www.facebook.com/jonas.viana.739" target="_blank" rel="noreferrer" className="icon">
                                    <img src={faceicon} alt="face" />
                                </a> 
                                <a href="https://github.com/JonasVSales" target="_blank" rel="noreferrer" className="icon">
                                    <img src={githubicon} alt="github" />
                                </a> 
                                <a href="https://www.instagram.com/jonasv.sales/" target="_blank" rel="noreferrer" className="icon">
                                    <img src={instaicon} alt="insta" />
                                </a>
                                <a href="https://twitter.com/BOMBERMANBART" target="_blank" rel="noreferrer" className="icon">
                                    <img src={twittericon} alt="face" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={kaio} alt="aoba" className="person"/>
                        </div>
                        <div className="content">
                        <h2>Kaio Pereira Araújo</h2>
                            <p>Programador Full-Stack:</p>
                            <p>
                                <a href="https://www.facebook.com/kaio.pereira.127201" target="_blank" rel="noreferrer" className="icon">
                                    <img src={faceicon} alt="face" />
                                </a> 
                                <a href="https://github.com/KaioPereira" target="_blank" rel="noreferrer" className="icon">
                                    <img src={githubicon} alt="github" />
                                </a> 
                                <a href="https://www.instagram.com/kaiop7k/" target="_blank" rel="noreferrer" className="icon">
                                    <img src={instaicon} alt="insta" />
                                </a>
                                <a href="https://twitter.com/kaioP7k" target="_blank" rel="noreferrer" className="icon">
                                    <img src={twittericon} alt="face" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={leandro} alt="aoba" className="person"/>
                        </div>
                        <div className="content">
                        <h2>Leandro Reis Santana</h2>
                            <p>Programador Full-Stack:</p>
                            <p>
                                <a href="https://www.facebook.com/leandrorinho.silva" target="_blank" rel="noreferrer" className="icon">
                                    <img src={faceicon} alt="face" />
                                </a> 
                                <a href="https://github.com/LeandroReisSan" target="_blank" rel="noreferrer" className="icon">
                                    <img src={githubicon} alt="github" />
                                </a> 
                                <a href="https://www.instagram.com/lyon.re/" target="_blank" rel="noreferrer" className="icon">
                                    <img src={instaicon} alt="insta" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={marco} alt="aoba" className="person"/>
                        </div>
                        <div className="content">
                        <h2>Marco Antônio Romagnoli Leme</h2>
                            <p>Programador Full-Stack:</p>
                            <p>
                                <a href="https://www.facebook.com/profile.php?id=100033250624062" target="_blank" rel="noreferrer" className="icon">
                                    <img src={faceicon} alt="face" />
                                </a> 
                                <a href="https://github.com/MarcoAntonio574" target="_blank" rel="noreferrer" className="icon">
                                    <img src={githubicon} alt="github" />
                                </a> 
                                <a href="https://www.instagram.com/marcor0ma69_/" target="_blank" rel="noreferrer" className="icon">
                                    <img src={instaicon} alt="insta" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
