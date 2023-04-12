// VARIÁVEIS => ESPACO DA MEMORIA DO PC QUE GUARDAMOS ALGO ( NUMERO, LETRA, TEXTO, IMAGEM)
// FUNÇÃO = TRECHO DE CÓDIGO AQUE SÓ É EXECUTADO QUANDO É CHAMADO

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocaNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = ("Umidade: ") + (dados.main.humidity) + "%"
    

}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade +
     "&appid=" + 
     chave +
     "&lang=pt_br" +
     "&units=metric"
     )
    .then(resposta => resposta.json())

    colocaNaTela(dados)

}



function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}