
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Sessao(){
    const params = useParams()
    const [sessao, setSessao] = useState([]);
    console.log(params.idSessao)

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`
    );

    requisicao.then((resposta) => {
      console.log(resposta.data)
      setSessao(resposta.data);
      requisicao.catch((erro) => console.log(erro));
    });
  }, []);

    return <></>
//   return (
//       <>
//     <main className="sessao">
//       <section className="sessao__titulo">
//         <p>Selecione o(s) assento(s)</p>
//       </section>
//       <section className="sessao__lista">
//         <ul className="sessao__lista__itens">
//           {filmes.map((filme) => (
//             <Link to={`/filme/${filme.id}`} key={filme.id}>
//               <li >
//                 <img src={filme.posterURL} alt={filme.title} />
//               </li>
//             </Link>
//           ))}
//         </ul>
//       </section>
//     </main>
//             <footer>
//             <img src={posterURL} alt={title} />
//             <p>{title}</p>
//           </footer>
//           </>
//   );
}

export default Sessao

