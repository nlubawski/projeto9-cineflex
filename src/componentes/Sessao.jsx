import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Sessao() {
  const params = useParams();
  const [sessao, setSessao] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`
    );

    requisicao.then((resposta) => {
      setSessao(resposta.data);
      requisicao.catch((erro) => console.log(erro));
    });
  }, []);

  return (
    <>
      <main className="sessao">
        <section className="sessao__titulo">
          <p>Selecione o(s) assento(s)</p>
        </section>
        <section className="sessao__assentos">
          {sessao.movie !== undefined ? (
            <>
              {sessao.seats.map((num) => {
                return (
                  <div className="sessao__assentos__unidade">
                    <p>{num.name}</p>
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </section>
        <section className="sessao__legenda">legendas aqui</section>
        <section>
          <div className="sessao__comprador">
            <p>Nome do comprador:</p>
            <input type="text" />
          </div>
          <div className="sessao__cpf">
            <p>CPF do comprador:</p>
            <input type="text" />
          </div>
          <div className="sessao__botao">
              <button>Reservar Acentos</button>
          </div>
          
        </section>
      </main>
      <footer>
        {sessao.movie !== undefined ? (
          <>
            {console.log(sessao.seats)}
            <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
            <p>{sessao.movie.title}</p>
          </>
        ) : (
          <></>
        )}
      </footer>
    </>
  );
}

export default Sessao;
