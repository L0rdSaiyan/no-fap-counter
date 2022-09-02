function frase() {

    //Array contendo as frases que serão apresentadas no Alertify.
    const array = ["Continue firme, soldado!", "O seu pau pode estar mole, mas a sua honra está intacta.", "NÃO PEÇA O LINK! NÃO SE CORROMPA POR ESSA PRAGA!", "O MAIOORRRR!!!", "Até o diabo tem medo de você agora!", "Desativa essa guia anônima aí que eu to vendo kkkkk", "E esse nuds aí no teu celular hein? kkkk apaga saporrakkkkk", "Calma garotão, essa vontade é temporária, o orgulho de ganhar é eterno!", "Prohibido el modo sexo... Primer aviso!", "Quem perder o No Fap será banido do Grupo."]
    //Variável que recebe a quantidade de dias informada pelo usuário.
    let entrada = document.getElementById("entrada").value
    //Variável que recebe um número aleatório para ser o indice do Array para apresentar a frase aleatoriamente.
    let frase = Math.floor(Math.random() * 10)
    

    //Estruturas condicionais para validar os dias.
    if (entrada.length == 0) {

        alertify.error("Insira a quantidade de dias!")

    } else if (entrada < 0) {

        alertify.error("Valores negativos são inválidos!")

    }

    else {

        alertify.alert(entrada + " dias", array[frase],
            function () {
                alertify.message("LEMBRE-SE: COM 30 DIAS VOCÊ SE TORNA UMA LENDA")
            });
    }
}


