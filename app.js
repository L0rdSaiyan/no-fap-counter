
function frase() {

    //Array contendo as frases que serão apresentadas no Alertify.
    const array = ["Continue firme, soldado!", "O seu pau pode estar mole, mas a sua honra está intacta.", "NÃO PEÇA O LINK! NÃO SE CORROMPA POR ESSA PRAGA!", "O MAIOORRRR!!!", "Até o diabo tem medo de você agora!", "Desativa essa guia anônima aí que eu to vendo kkkkk", "E esse nuds aí no teu celular hein? kkkk apaga saporrakkkkk", "Calma garotão, essa vontade é temporária, o orgulho de ganhar é eterno!", "Prohibido el modo sexo... Primer aviso!", "Quem perder o No Fap será banido do Grupo."]
    //Variável que recebe a quantidade de dias informada pelo usuário.
    let entrada = document.getElementById("entrada").value
    //Variável que recebe um número aleatório para ser o indice do Array para apresentar a frase aleatoriamente.
    let frase = Math.floor(Math.random() * 10)
    console.log(array.length)
    //Vídeo que será apresentado no caso do usuário completar os 30 dias
    let video = document.getElementById("easteregg")


    //Estruturas condicionais para validar os dias.
    if (entrada.length == 0) {

        alertify.error("Insira a quantidade de dias!")
        entrada.append()

    } else if (entrada < 0) {

        alertify.error("Valores negativos são inválidos!")

    } else if (entrada >= 30) {

        alertify.alert(`${entrada} dias!`, "Parabéns, você ganhou o NoFap!", function () {

            alertify.message("VOCÊ SE TORNOU UMA LENDA MAIS CONHECIDA QUE O ROCKY BALBOA!")

        })

        setTimeout(ativar => {

            video.style.visibility = 'visible'
            video.play()

        }, 2000);

        setTimeout(desativar => {

            video.style.visibility = 'hidden'


        }, 32000)

    } else {

        alertify.alert(`${entrada}`, array[frase],
            function () {
                alertify.message("LEMBRE-SE: COM 30 DIAS VOCÊ SE TORNA UMA LENDA")
            });
    }


}


//FUNÇÃO PARA ATIVAR O VÍDEO POR MEIO DE EASTEREGG.

let arrayEG = []

function surprise(event) {
    let video = document.getElementById("easteregg")

    let x = event.keyCode
    let y = String.fromCharCode(x)

    arrayEG.push(y)
    console.table(arrayEG)

    if (arrayEG[0] == "t" && arrayEG[1] == "e" && arrayEG[2] == "s" && arrayEG[3] == "t") {

        video.style.visibility = 'visible'
        video.play()

    }

}