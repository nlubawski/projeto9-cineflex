import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Sessao() {
  const params = useParams();
  const [sessao, setSessao] = useState([]);

  const [comprador, setComprador] = useState("")

  const [cpf, setCpf] = useState("")

  function reservar(){
    console.log("comprador: ", comprador)
    console.log("cpf: ", cpf)
    console.log("assentos selecionados ", selecionados)

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

  const [selecionados, setSelecionados] = useState([])

  function selecao(numero){
  
    const achouIndice = selecionados.findIndex(num => num === numero.toString())

    if (achouIndice !== -1){
      const auxiliar = [...selecionados]
      auxiliar.splice(achouIndice,1)
      setSelecionados(auxiliar)
    }else{
      setSelecionados([...selecionados, numero])
    }          
  }

  console.log("selecionadaos ", selecionados) 

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
                  <div onClick={() => {
                    //css = `sessao__assentos__unidade${(selecionados.findIndex(num => `${num}` === `${num.name}`) !== -1) ? "-selecionada" : ""}`
                    selecionados.findIndex(num => console.log(`${num}` === num.name) !== -1)   
                    selecao(num.name)
                  }
                  } className={"sessao__assentos__unidade"}>
                    <p>{num.name}</p>
                  </div>
                ) : (
                  <div onClick={() => alert("Esse assento não está disponível")} className="sessao__assentos__unidade-ocupada">
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
          <form action="">
          <div className="sessao__comprador">
            <p>Nome do comprador:</p>
            <input onChange={(event) => setComprador(event.target.value)} value={comprador} required type="text" />
          </div>
          <div className="sessao__cpf">
            <p>CPF do comprador:</p>
            <input onChange={(event) => setCpf(event.target.value)} value={cpf} required type="text" />
          </div>
          <div className="sessao__botao">
            <button onClick={() => reservar()}>Reservar Acentos</button>
          </div>
          </form>
        </section>
      </main>
      <footer>
        {sessao.movie !== undefined ? (
          <>
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
