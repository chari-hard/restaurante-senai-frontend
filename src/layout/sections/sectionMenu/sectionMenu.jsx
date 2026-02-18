import "./style.css";
import bannerMenu from "../../../assets/img/banner-menu.svg";
import { CardMenu } from "../../../components/cardMenu/cardMenu";
import spaghetti from "../../../assets/img/spaghetti.jpg";
import paoDeQueijo from "../../../assets/img/pao-de-queijo.jpg";
import coxinha from "../../../assets/img/coxinha.jpg";
import porcaoDeBatata from "../../../assets/img/porcao-batata-frita.jpg";
import xSalada from "../../../assets/img/x-salada.jpg";
import cocaCola from "../../../assets/img/coca-cola.png";
import sucoDeLaranja from "../../../assets/img/suco-de-laranja.jpg";
import sucoDeAbacaxi from "../../../assets/img/suco-de-abacaxi.jpg";
import { Link } from "react-router-dom";

export const SectionMenu = () => {
  const menu = {
    pratosDoDia: [{ id: 1, nome: "Spaghetti", preco: 35.0, img: spaghetti }],

    lanche: [
      { id: 1, nome: "Pão de Queijo", preco: 4.0, img: paoDeQueijo },
      { id: 2, nome: "Coxinha", preco: 7.0, img: coxinha },
      {
        id: 3,
        nome: "Porção de Batata Frita",
        preco: 20.0,
        img: porcaoDeBatata,
      },
      { id: 4, nome: "X-Salada", preco: 6.0, img: xSalada },
    ],

    bebidas: [
      { id: 1, nome: "Coca-Cola Lata", preco: 8.0, img: cocaCola },
      {
        id: 2,
        nome: "Suco Natural de Laranja",
        preco: 9.0,
        img: sucoDeLaranja,
      },
      {
        id: 3,
        nome: "Suco Natural de Abacaxi",
        preco: 9.0,
        img: sucoDeAbacaxi,
      },
    ],
  };

  return (
    <section className="section-menu">
      <div className="banner-menu">
        <img src={bannerMenu} alt="" />
      </div>

      <div className="container-menus">
        <h2>Prato do dia</h2>

        <div className="cards-grid-menu">
          <Link to='/pagamento'>
            {menu.pratosDoDia.map((item) => (
              <CardMenu
                key={item.id}
                nome={item.nome}
                preco={item.preco}
                img={item.img}
              />
            ))}
          </Link>
        </div>
      </div>

      <div className="container-menus">
        <h2>Lanches</h2>
        <div className="cards-grid-menu">
            <Link to='/pagamento'>
              {menu.lanche.map((item) => (
                <CardMenu
                  key={item.id}
                  nome={item.nome}
                  preco={item.preco}
                  img={item.img}
                />
              ))}
            </Link>
        </div>
      </div>

      <div className="container-menus">
        <h2>Bebidas</h2>
        <div className="cards-grid-menu">
            <Link to='/pagamento'>
              {menu.bebidas.map((item) => (
                <CardMenu
                  key={item.id}
                  nome={item.nome}
                  preco={item.preco}
                  img={item.img}
                />
              ))}
            </Link>
        </div>
      </div>
    </section>
  );
};
