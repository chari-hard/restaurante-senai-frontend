import "./style.css";
import ellipseGreen from "../../../assets/img/Ellipse 3.svg";
import spaghetti from "../../../assets/img/spaghetti.svg";
import { Link } from "react-router-dom";

export const SectionDishOfTheDay = () => {
  return (
    <section className="section-dish-of-the-day">
      <div className="container-img-dish">
        <img src={spaghetti} alt="" />
      </div>

      <div className="container-text">
        <h2>PRATO DO DIA</h2>
        <h3>Espaguete à Bolonhesa</h3>
        <p>
          Nosso <strong>Espaguete à Bolonhesa</strong> é preparado com massa
          cozida no ponto ideal, envolvida em um ragu de carne bovina
          selecionada, cozido com tomates, ervas aromáticas e temperos da casa.
        </p>
        <h3>R$35,00</h3>
        <div className="available">
          <img src={ellipseGreen} alt="" className="dot" />
          <p>Disponível</p>
        </div>
        <Link to='/cardapio'>
          <button className="btn-primary-red">Ver Cardápio</button>
        </Link>
      </div>
    </section>
  );
};
