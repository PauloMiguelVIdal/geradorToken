import React, { useState } from "react";


function Token() {
    const [estadoToken, novoEstado] = useState(true)

    function tokenGenerate() {
        const novoToken = Math.floor(Math.random() * 100000)
    }


    // function iniciarGerador(){
    // if(estadoToken==false){
    //     estadoToken = true 
    //     tokenGenerate()
    // } else {
    //     estadoToken = false
    // }
    // }

    // const gerador = useState



    return (
        <div>
            <h1>
                token
            </h1>
        </div>
    )
}

export default Token 
