import './style.css'
import carrot from '../../../assets/img/carrotBenefitsSection.svg'
import clock from '../../../assets/img/clockBenefitsSection.svg'
import apple from '../../../assets/img/appleBenefitsSection.svg'

export const SectionBenefits = () =>{
    return(
        <section className='benefits-section'>
            <div className='benefit-card'>
                <img src={carrot} alt="carrot" />
                <h3>Ingredientes Selecionados</h3>
                <p>Utilizamos ingredientes frescos e de alta qualidade para garantir sabor e nutrição em cada refeição.</p>
            </div>
            <div className='benefit-card'>
                <img src={clock} alt="clock" />
                <h3>Agilidade no atendimento</h3>
                <p>Refeições preparadas com eficiência para que você aproveite melhor o seu tempo no intervalo.</p>
            </div>
            <div className='benefit-card'>
                <img src={apple} alt="apple" />
                <h3> Alimentação Balanceada</h3>
                <p>Cardápio pensado para oferecer energia, equilíbrio e bem-estar durante sua rotina de estudos.</p>
            </div>
        </section>

    )
}