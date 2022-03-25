import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Inicial() {
  const params = useParams()
  const [filmes, setFilmes] = useState([]);
  console.log(params)

  useEffect(() => {
    const requisicao = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    requisicao.then((resposta) => {
      setFilmes(resposta.data);
      requisicao.catch((erro) => console.log(erro));
    });
  }, []);

  return (
    <main className="filmes">
      <section className="filmes__titulo">
        <p>Selecione o filme</p>
      </section>
      <section className="filmes__lista">
        <ul className="filmes__lista__itens">
          {filmes.map((filme) => (
            <Link to="./filme/" key={filme.id}>
              <li >
                <img src={filme.posterURL} alt={filme.title} />
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Inicial;
