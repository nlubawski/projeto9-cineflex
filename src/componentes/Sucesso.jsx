import { useLocation, Link } from "react-router-dom";

function Sucesso() {
  const { state } = useLocation();
  const listaAssentos = [];
  state.ids.forEach((id) => {
    state.assentos.forEach((assento) => {
      if (id === assento.id) {
        listaAssentos.push(assento.name);
      }
    });
  });
  return (
    <>
      <main className="sucesso">
        <section className="sucesso__titulo">
          <p>Pedido Feito com Sucesso!</p>
        </section>
        <section className="sucesso__filme">
          <p>Filme e sessão</p>
          <div className="sucesso__info">
            <p>{state.movie}</p>
            <p>
              {state.date} - {state.time}
            </p>
          </div>
        </section>
        <section className="sucesso__ingressos">
          <p>Ingressos</p>
          <div className="sucesso__info">
            {listaAssentos.map((assento) => (
              <p>Assento {assento}</p>
            ))}
          </div>
        </section>
        <section className="sucesso__comprador">
          <p>Comprador</p>
          <div className="sucesso__info">
            <p>Nome: {state.name}</p>
            <p>CPF: {state.cpf}</p>
          </div>
        </section>
        <div className="sucesso__botao">
          <Link to={"/"}>
            <button>Voltar pra Home</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Sucesso;
