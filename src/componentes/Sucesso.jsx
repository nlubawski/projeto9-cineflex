import { useLocation } from "react-router-dom";

function Sucesso() {
  const { state } = useLocation();
  console.log("assentos", state.assentos);
  const listaAssentos = [];
  state.ids.forEach((id) => {
    console.log('id',id)
    state.assentos.forEach((assento) => {
      console.log('assento ', assento)
      console.log('assento id ', assento.id)
      if (id === assento.id) {
        console.log(id === assento.id)
        console.log('assentnos', state.assentos)
        console.log('assentos espe', assento.name)
        listaAssentos.push(assento.name);
        console.log(listaAssentos)
      }
    });
  });
  console.log('lista assentos ',listaAssentos)
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
          <button>Voltar pra Home</button>
        </div>
      </main>
    </>
  );
}

export default Sucesso;
