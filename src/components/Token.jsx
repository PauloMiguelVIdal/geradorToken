import React, { useEffect, useState } from "react";

function Token() {
  const [estadoToken, setEstadoToken] = useState(false);
  const [tokenAtivo, setTokenAtivo] = useState(null);
  const [contador, setCounter] = useState(60);
  const [stateAnimation, setAnimation] = useState(true);

  useEffect(() => {
    let intervalo;

    if (estadoToken && contador > 0) {
      intervalo = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    }

    if (contador === 0 || !estadoToken) {
      tokenGenerate();
    }

    return () => clearInterval(intervalo);
  }, [estadoToken, contador]);

  function tokenGenerate() {
    const novoToken = Math.floor(Math.random() * 1000000); // Gera um token aleatório
    setTokenAtivo(novoToken);
    setEstadoToken(true);
    setAnimation(true);
    setCounter(60);

    // Envia o token gerado para o servidor
    fetch("http://localhost:3000/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: novoToken }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.mensagem); // Mensagem de confirmação
      })
      .catch((error) => {
        console.error("Erro ao enviar token:", error);
      });
  }

  // Recupera o token armazenado no servidor
  function fetchStoredToken() {
    fetch("http://localhost:3000/api/token")
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          console.log("Token recuperado do servidor:", data.token);
        } else {
          console.log("Nenhum token armazenado!");
        }
      })
      .catch((error) => {
        console.error("Erro ao recuperar token:", error);
      });
  }

  return (
    <div className="circular">
      <div className="inner"></div>
      <div className="numb">{tokenAtivo}</div>
      <div className="circle">
        <div className="bar left">
          <div
            className={`progress ${stateAnimation ? "AnimationLeft" : ""}`}
          ></div>
        </div>
        <div className="bar right">
          <div
            className={`progress ${stateAnimation ? "AnimationRight" : ""}`}
          ></div>
        </div>
      </div>
      <button onClick={fetchStoredToken}>Recuperar Token do Servidor</button>
    </div>
  );
}

export default Token;