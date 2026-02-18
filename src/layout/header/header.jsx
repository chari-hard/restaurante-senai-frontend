import "./style.css";
import logoSenai from "../../assets/img/senai-logo-menu.svg";
import userIcon from "../../assets/img/user-menu.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>

      <Link to="/home">
        <img className="logo-senai-nav" src={logoSenai} alt="logo-senai" />
      </Link>

      <nav className="nav-header">
        <ul className="list-nav-header">
          <Link to="/home" className='item-list-nav'> INÍCIO </Link>
          <Link to="/cardapio"className='item-list-nav'> CARDÁPIO</Link>
          <Link to="/historico" className='item-list-nav'> HISTÓRICO </Link>
          <Link to="/horários" className='item-list-nav'> HORÁRIOS DE INTERVALO </Link>
        </ul>
      </nav>

      <div className="user-header">
        <Link to="/perfil">
          <img src={userIcon} alt="" />
        
        <div className="user-header-info">
          <p className="name-user-header" >Kaique Pereira</p>
          <p className="user-type-header">Aluno</p>
        </div>
        </Link>
      </div>

    </header>
  );
};
