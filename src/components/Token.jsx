import React, { useEffect, useState } from "react";

function Token() {
    const [estadoToken, setEstadoToken] = useState(false)
    const [tokenAtivo, setTokenAtivo] = useState(null)
    const [contador, setCounter] = useState(60)
    const [stateAnimation, setAnimation] = useState(true)
    useEffect(() => {
        let intervalo;

        if (estadoToken && contador > 0) {
            intervalo = setInterval(() => {
                setCounter((prev) => prev - 1);
            }, 1000);
        }


        if (contador === 0 || !estadoToken) {
            tokenGenerate()

        }

        return () => clearInterval(intervalo);
    }, [estadoToken, contador])
    

    function tokenGenerate() {
        const novoToken = Math.floor(Math.random() * 1000000)
        setTokenAtivo(novoToken)
        setEstadoToken(true)
        setAnimation(true)
        setCounter(60)
        console.log(novoToken)
        console.log(stateAnimation)
    }



    return (

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
    )
}

export default Token


