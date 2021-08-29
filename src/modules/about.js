//bibliotecas
import "../stylesheets/about.css"
import andre from "../img/profile/andre.jpg"
import jonas from "../img/profile/jonas.png"
import bruno from "../img/profile/bruno.jpg"

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
                            <p>Programador Full-Stack:</p>
                            <p>Júnior JavaScript, Json, PHP e MySQL</p>
                            <p>Desenvolvedor Front-end:</p>
                            <p>HTML5 e CSS3</p>
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
                            <p>Júnior JavaScript, Json, PHP e MySQL</p>
                            <p>Desenvolvedor Front-end:</p>
                            <p>HTML5 e CSS3</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={andre} alt="aoba" className="person"/>
                        </div>
                        <div className="content">
                            <h2>Card One</h2>
                            <p>dfmgh ikdfg iousdb fgoi sdbnfi gobnsdu ify bvy adfv bidb fiv bsdif vniudsfiu vn dfmgh ikdfg iousdb fgoi sdbnfi gobnsdu ify bvy adfv bidb fiv bsdif vniudsfiu vn</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={andre} alt="aoba" className="person"/>
                        </div>
                        <div className="content">
                            <h2>Card One</h2>
                            <p>dfmgh ikdfg iousdb fgoi sdbnfi gobnsdu ify bvy adfv bidb fiv bsdif vniudsfiu vn dfmgh ikdfg iousdb fgoi sdbnfi gobnsdu ify bvy adfv bidb fiv bsdif vniudsfiu vn</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={andre} alt="aoba" className="person"/>
                        </div>
                        <div className="content">
                            <h2>Card One</h2>
                            <p>dfmgh ikdfg iousdb fgoi sdbnfi gobnsdu ify bvy adfv bidb fiv bsdif vniudsfiu vn dfmgh ikdfg iousdb fgoi sdbnfi gobnsdu ify bvy adfv bidb fiv bsdif vniudsfiu vn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
