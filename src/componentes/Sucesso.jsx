//import {useLocation} from "react-router-dom"

function Sucesso() {
  // const {info} = useLocation()
  // console.log('info ', info)
  return (
    <>
      <main className="sucesso">
        <section className="sucesso__titulo">
          <p>Pedido Feito com Sucesso!</p>
        </section>
        <section className="sucesso__filme">
          <p>Filme e sessão</p>
          <div className="sucesso__info">
            <p>Nome do filme</p>
            <p>Dia e horario</p>
          </div>
        </section>
        <section className="sucesso__ingressos">
          <p>Ingressos</p>
          <div className="sucesso__info">
            <p>Assento x</p>
            <p>Assento y</p>
          </div>
        </section>
        <section className="sucesso__comprador">
          <p>Comprador</p>
          <div className="sucesso__info">
            <p>Nome: nome</p>
            <p>CPF: numero</p>
          </div>
        </section>
        <div className="sucesso__botao">
          <button>Voltar pra Home</button>
        </div>
      </main>
    </>
  );
}

export default Sucesso;
