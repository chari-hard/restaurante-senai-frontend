import "./style.css";

export const CardMenu = ({ nome, preco, img }) => {
  return (
    <div className="card-menu">
      <div className="text-card-menu">
        <h3>{nome}</h3>
        <p>
          {preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div className="img-card-menu">
        <img src={img} alt="produtos" />
      </div>
    </div>
  );
};
