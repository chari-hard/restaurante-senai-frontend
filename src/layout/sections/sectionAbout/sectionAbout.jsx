import "./style.css";
import restaurantSenai from "../../../assets/img/restaurant-senai.svg";

export const SectionAbout = () => {
  return (
    <section className="section-about">
      <div className="container-text">
        <h2>
          Alimentação de <span className="highlight">qualidade</span> dentro do
          SENAI
        </h2>
        <p>
          Nosso restaurante foi pensado para oferecer refeições equilibradas,
          saborosas e acessíveis. Trabalhamos com ingredientes selecionados e
          preparo diário para garantir frescor e qualidade em cada prato.
        </p>
      </div>
      <div className="container-img-about">
        <img src={restaurantSenai} alt="" />
      </div>
    </section>
  );
};
