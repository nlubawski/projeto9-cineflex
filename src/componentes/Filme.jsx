import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Filme() {
  const { idFilme } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    const promessa = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promessa.then((resposta) => {
      const { data } = resposta;
      setFilme(data);
    });
  }, []);

  const { title, posterURL, days } = filme;

  return (
    <>
      <main className="filmes">
        <section className="filmes__titulo">
          <p>Selecione o horário</p>
        </section>
        <section className="filmes__sessoes">
          {days !== undefined ? (
            days.map((dia) => {
              return (
                <div key={dia.id}>
                  <p className="filmes__sessoes__texto">
                    {dia.weekday} - {dia.date}
                  </p>
                  <div className="filmes__sessoes-botoes">
                    {dia.showtimes.map((hora) => {
                      return (
                        <Link to={`/sessao/${hora.id}`} key={hora.id}>
                          <button>{hora.name}</button>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </section>
      </main>
      <footer>
        <img src={posterURL} alt={title} />
        <p>{title}</p>
      </footer>
    </>
  );
}

export default Filme;
