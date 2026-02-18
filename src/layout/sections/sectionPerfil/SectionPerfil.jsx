import './style.css'
import imagemProvisoriaPerfil from "../../../assets/img/prato-de-comida-perfil.svg"

export const SectionPerfil = () => {
    return (
        <section className='section-perfil'>
            <div className='container-perfil'>
                <div className='informacoes-perfil'>
                    <div className='foto-nome-perfil'>
                        <h2>JULIO C.</h2>
                        <img src="https://avatars.githubusercontent.com/u/167234043?v=4" alt=" foto-de-perfil" />
                    </div>

                    <button className='btn-login'>ENVIAR NOVA FOTO</button>

                    <div className='container-cursos'>
                        <h2>CURSOS(S):</h2>
                        <div className='curso1'>
                            <h3>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</h3>
                            <h4>SEGUNDA A SEXTA - 14HS ÀS 17H15</h4>
                        </div>

                        <div className='curso2'>
                            <h3>DESIGN UX / UI</h3>
                            <h4>SÁBADO - 8HS ÀS 17HS</h4>
                        </div>
                    </div>

                </div>

                <div className='container-info-usuario'>

                    <h2>INFORMAÇÕES DO USUÁRIO</h2>

                    <form className='forms-grid'>
                        <div className='id-name-form'>
                            <h3>ID</h3>
                            <input type="number" />
                        </div>
                        <div className='id-name-form'>
                            <h3>NOME COMPLETO</h3>
                            <input type="text" />
                        </div>
                        <div className='form-grid'>
                            <h3>EMAIL</h3>
                            <input type="email" />
                        </div>
                        <div className='form-grid'>
                            <h3>CONFIRMAÇÃO DE EMAIL</h3>
                            <input type="email" />
                        </div>
                        <div className='form-grid'>
                            <h3>SENHA</h3>
                            <input type="password" />
                        </div>
                        <div className='form-grid'>
                            <h3>CONFIRMAÇÃO DE SENHA</h3>
                            <input type="password" />
                        </div>
                    </form>

                    <button className='btn-login'>ATUALIZAR</button>
                </div>
            </div>
        </section>

    )
}