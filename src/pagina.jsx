import React from 'react'
import './pagina.css'

export default function Perguntas() {
    return (
    <section>
        <div>
            <div className="text"><h1>JOGO DE PERGUNTAS</h1></div>
            <div className="btn">
                <button className="botao"> CLICA AI </button>
            </div>
            <div className="gerator">
                <div>
                    <p className='legenda'>SALVE</p>
                </div>   
            </div>
        </div>
    </section>
    )
}
function primaryRequest() {
    const valores = fetch('https://opentdb.com/api.php?amount=30&category=15').then(pergunta=>{
        pergunta.json().then(site=>{
            console.log(site.data)

            var btn=document.querySelector('.botao')

            btn.addEventListener('click',()=>{
                var perguntas =document.querySelector('.perguntas')

                perguntas.src=site.data.perguntas[Math.floor(Math.random()*100)].url
                Resposta()
            })
        })
        })

}
function Resposta(){
    fetch('https://opentdb.com/api.php?amount=30&category=15').then(resposta=> resposta.json()
    .then(dados=>{
        var resposta = document.querySelector(".resposta")

        resposta.innerHTML = `${dados.content}`
    }))
}
primaryRequest()