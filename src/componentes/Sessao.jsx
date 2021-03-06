import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Sessao() {
  const params = useParams();
  const [sessao, setSessao] = useState([]);
  const [selecionados, setSelecionados] = useState([]);
  const navegacao = useNavigate();

  const [comprador, setComprador] = useState("");
  const [cpf, setCpf] = useState("");

  function reservar(event) {
    event.preventDefault();

    const promessa = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        ids: selecionados,
        name: comprador,
        cpf: cpf,
      }
    );

    promessa.then(() =>
      navegacao("/sucesso", {
        state: {
          ids: selecionados,
          assentos: sessao.seats,
          movie: sessao.movie.title,
          time: sessao.name,
          date: sessao.day.date,
          name: comprador,
          cpf: cpf,
        },
      })
    );
    promessa.catch((erro) => console.log(erro));
  }

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`
    );

    requisicao.then((resposta) => {
      setSessao(resposta.data);
      requisicao.catch((erro) => console.log(erro));
    });
  }, []);

  function selecao(numero) {
    if (selecionados.includes(numero)) {
      const achouIndice = selecionados.findIndex((num) => num === numero);
      const auxiliar = [...selecionados];
      auxiliar.splice(achouIndice, 1);
      setSelecionados(auxiliar);
    } else {
      setSelecionados([...selecionados, numero]);
    }
  }

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
                return num.isAvailable ? (
                  selecionados.includes(num.id) ? (
                    <div
                      key={num.id}
                      onClick={() => {
                        selecao(num.id);
                      }}
                      className={"sessao__assentos__unidade-selecionada"}
                    >
                      <p>{num.name}</p>
                    </div>
                  ) : (
                    <div
                      key={num.id}
                      onClick={() => {
                        selecao(num.id);
                      }}
                      className={"sessao__assentos__unidade"}
                    >
                      <p>{num.name}</p>
                    </div>
                  )
                ) : (
                  <div
                    key={num.id}
                    onClick={() => alert("Esse assento n??o est?? dispon??vel")}
                    className="sessao__assentos__unidade-ocupada"
                  >
                    <p>{num.name}</p>
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </section>
        <section className="sessao__legenda">
          <div className="sessao__legenda__caixa">
            <div className="sessao__legenda__selecionado"></div>
            <p>Selecionado</p>
          </div>
          <div className="sessao__legenda__caixa">
            <div className="sessao__legenda__disponivel"></div>
            <p>Dispon??vel</p>
          </div>
          <div className="sessao__legenda__caixa">
            <div className="sessao__legenda__indisponivel"></div>
            <p>Indispon??vel</p>
          </div>
        </section>
        <section className="sessao__dados">
          <form onSubmit={reservar} action="./Sucesso">
            <div className="sessao__comprador">
              <p>Nome do comprador:</p>
              <input
                placeholder="Digite seu nome"
                onChange={(event) => setComprador(event.target.value)}
                value={comprador}
                required
                type="text"
              />
            </div>
            <div className="sessao__cpf">
              <p>CPF do comprador:</p>
              <input
                placeholder="Digite seu CPF"
                onChange={(event) => setCpf(event.target.value)}
                value={cpf}
                required
                type="text"
              />
            </div>
            <div className="sessao__botao">
              {/* <Link to={"/sucesso"}>
                <button type="submit">Reservar Acentos</button>
              </Link> */}
              <button type="submit">Reservar Acentos</button>
            </div>
          </form>
        </section>
      </main>
      <footer className="sessao__rodape">
        {sessao.movie !== undefined ? (
          <>
            <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
            <div>
              <p>{sessao.movie.title}</p>
              <p>
                {sessao.day.weekday} - {sessao.name}
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </footer>
    </>
  );
}

export default Sessao;
