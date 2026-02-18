import "./style.css"
import { Link } from "react-router-dom"
import emojiTriste from "../../../assets/img/emoji-triste.svg";
import emojiApontando from "../../../assets/img/emoji-apontando.svg";
import emojiMorrendo from "../../../assets/img/emoji-morrend.svg";

export const SectionNotFound = () => {
    return (
        <section className="section-not-found">
            <div className="container-not-found">

                <div className="main-not-found">
                    <img src={emojiMorrendo} alt="" />
                    <h2>ERRO 404: PÁGINA NÃO ENCONTRADA.</h2>
                </div>

                <div className="nao-existe-not-found">
                    <p>Ops... Perece que essa página não existe ou ainda não foi feita... </p>
                    <img src={emojiTriste} alt="" />
                </div>

                <div className="retornar-not-found">
                    <Link to="/home">
                        <button className="btn-primary-red">Retornar</button>
                    </Link>
                    <img src={emojiApontando} alt="" />
                    <p>Mas você pode navegar de volta pela nossa página clicando aqui</p>
                </div>
            </div>
        </section>
    )
}