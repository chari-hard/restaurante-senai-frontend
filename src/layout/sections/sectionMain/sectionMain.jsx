import "./style.css";
import fraseMain from "../../../assets/img/frase-main.svg"
import { Link } from 'react-router-dom';

export const SectionMain = () => {
    return (
        <section className="section-main">

            <div className="container-main">
                <img src={fraseMain} alt="" />
                <Link to="/cardapio">
                    <button className="btn-primary-red">VER CARDÁPIO</button>
                </Link>
            </div>

        </section>
    )
}