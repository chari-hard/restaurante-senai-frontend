import "./style.css";
import senaiLogo from "../../../assets/img/senai_logo.svg";
import { Link } from 'react-router-dom';

export const SectionLogin = () => {
  return (
    <section className="section-login">
      <div className="container-login">
        <img src={senaiLogo} alt="" />

        <h3>Faça seu login!</h3>
        <div>
          <form className="form-login">
            <input type="number" placeholder="CPF ou ID" />
            <input type="password" placeholder="Senha"/>
          </form>
        </div>
        <div className="card-action">
            <Link to="/inicio">
              <button className="btn-login">ENTRAR</button>
            </Link>
            <Link to="cadastro">
              <p>Esqueceu a senha?</p>
            </Link>
        </div>
      </div>
    </section>
  );
};
