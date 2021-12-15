import '../stylesheets/footer.css'
//import spacer from '../img/home/layered-waves-haikei.svg'
// eslint-disable-next-line import/no-anonymous-default-export
export default function (){
    return(
        <div id="footer">
            <div className="spacer"></div>

            <div className="content-foot">
                <div>
                    Integrantes:
                    <ul>
                        <li>André Mendes da Rocha</li>
                        <li>Bruno Guilherme Queiroz da Silva </li>
                        <li>Jonas Viana Sales</li>
                        <li>Kaio Pereira de Araújo</li>
                        <li>Leandro Reis Santana</li>
                        <li>Marco Antônio Romagnoli Leme</li>
                    </ul>
                </div>
                <div id="agrade">
                    Agradecimentos:
                    <ul>
                        <li>Etec Parque Belém</li>
                        <li>Todos os Professores que <br />moldaram nosso conhecimento</li>
                        <li><a href="https://rawg.io" target="_blank" rel="noreferrer">Rawg.Io</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
