import React, { useEffect, useState } from "react";

function Token() {
    const [estadoToken, setEstadoToken] = useState(false)
    const [tokenAtivo, setTokenAtivo] = useState(null)
    const [contador, setCounter] = useState(60)

    useEffect(() => {
        let intervalo;

        if (estadoToken && contador > 0) {
            intervalo = setInterval(() => {
                setCounter((prev) => prev - 1);
            }, 1000);
        }


        if (contador === 0 || !estadoToken) {
            //     clearInterval(intervalo);
            // setEstadoToken(false)
            tokenGenerate()
        }

        return () => clearInterval(intervalo);
    }, [estadoToken, contador])


    function tokenGenerate() {
        const novoToken = Math.floor(Math.random() * 1000000)
        setTokenAtivo(novoToken)
        setEstadoToken(true)
        setCounter(60)
    }

    function decrement() {
        if (contador > 0) setCounter(contador - 1);
    }



    return (
        // <div className="testeCircle">

        <div>
            {/* <div className="containerExterno">

                <div className="containerCentral">
                    <h1>
                        token: {tokenAtivo}
                        <br />
                        tempo: {contador}
                        <br></br>
                        <button onClick={tokenGenerate}>iniciar</button>
                        <br />
                    </h1>
                </div>
            </div> */}
<div class="circular">
  <div class="inner"></div>
  <div className="numb">{tokenAtivo}</div>
  {/* tempo: {contador} */}
  <div class="circle">
    <div class="bar left">
      <div class="progress"></div>
    </div>
    <div class="bar right">
      <div class="progress"></div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Token


