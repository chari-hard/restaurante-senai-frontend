import './style.css'

const Pedidos = [
    { id: 1, dataHora: "15.02/2026 12:10", nome: "Kaique", pedido: "Arroz com Bife " + "+" + " Coca-Cola Lata", valor: 36.99, pagamento: "Via PIX", status: "Pedido Confirmado" },
    { id: 2, dataHora: "15.02/2026 12:10", nome: "Julio", pedido: "Arroz com Salsicha " + "+" + " Garrafa de água", valor: 29.99, pagamento: "Via PIX", status: "Pedido Recusado" },
    { id: 3, dataHora: "15.02/2026 12:10", nome: "Sasuke", pedido: "Macarrão com Ovo", valor: 24.99, pagamento: "Cartão de Débito", status: "Pedido Confirmado" },
    { id: 4, dataHora: "15.02/2026 12:10", nome: "Pablo", pedido: "Salgado Coxinha " + "+" + " Suco", valor: 11.99, pagamento: "Via PIX", status: "Pedido Confirmado" }
]

console.log(Pedidos.map(() => Pedidos))

export const SectionHistorico = () => {
    return (
        <div className='container-historico'>

            <h2>HISTÓRICO DE GASTOS</h2>

            <h3 className='data-historico'>DE 01/01/2026 ATÉ 01/02/2026</h3>

            <ul className='lista-historico-header'>
                <li>DATA / HORA </li>
                <li>PEDIDO</li>
                <li>VALOR</li>
                <li>PAGAMENTO</li>
                <li>STATUS</li>
            </ul>


            {Pedidos.map((pedido) => (
                <ul className="lista-historico" key={pedido.id}>
                    <li>{pedido.dataHora}</li>
                    <li>{pedido.pedido}</li>
                    <li> R$ {pedido.valor.toFixed(2)}</li>
                    <li>{pedido.pagamento}</li>
                    <li style={{ color: pedido.status == "Pedido Confirmado" ? "green" : "red" }}> {pedido.status} </li>
                </ul>

            ))}
        </div>
    )
}