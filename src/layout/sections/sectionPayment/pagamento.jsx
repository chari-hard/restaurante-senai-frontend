import { Link } from "react-router-dom"
import "./style.css"
import paoComOvo from "../../../assets/img/pao-com-ovo.svg";
import setaParaBaixo from "../../../assets/img/seta-para-baixo.svg";
import visaIcon from "../../../assets/img/visa-icon.svg";
import botaoX from "../../../assets/img/botao-x.svg";

export const SectionPagamento = () => {
    return (
        <section className="section-pagamento">
            <div className="container-pagamento">


                <Link to="/cardapio">
                    <img src={botaoX} alt="" className="botao-de-sair"/>
                </Link>

                <div className="content-pagamento">

                    <div className="pagamento-box-top">
                        <h2>ESCOLHA A FORMA DE PAGAMENTO</h2>
                        <div>
                            <div className="box-select">
                                <p>CARTÃO DE CRÉDITO</p>
                                <img src={setaParaBaixo} alt="seta de selecionar" />
                            </div>

                            <div className="box-select-visa">
                                <img src={visaIcon} alt="icone da visa" />
                                <p>**** **** **** 9829</p>
                            </div>
                        </div>

                    </div>

                    <div className="pagamento-box-mid">
                        <h2>COMO DESEJA PAGAR?</h2>
                        <div className="box-select">
                            <p>Á VISTA</p>
                            <img src={setaParaBaixo} alt="seta de selecionar" />
                        </div>
                    </div>

                    <div className="pagamento-box-bot">
                        <div className="info-pagamento">
                            <img src={paoComOvo} alt="" />
                            <div className="nome-do-produto-e-preco">
                                <h3>PÃO COM OVO</h3>
                                <div className="precos">
                                    <p>R$ 78,99</p>
                                    <span>R$ 79,99</span>
                                </div>
                            </div>
                        </div>

                        <div className="descricao-produto">
                            <p>INGREDIENTES: PÃO, OVO(BEM PASSADO E SEM CASCA)</p>
                        </div>

                        <Link to="/finalizar">
                            <button className="btn-primary-red">Finalizar pagamento</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}