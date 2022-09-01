
function frase(){

    const array = ["Continue firme, soldado!", "O seu pau pode estar mole, mas a sua honra está intacta.", "NÃO PEÇA O LINK! NÃO SE CORROMPA POR ESSA PRAGA!", "O MAIOORRRR!!!", "Até o diabo tem medo de você agora!", "Desativa essa guia anônima aí que eu to vendo kkkkk", "E esse nuds aí no teu celular hein? kkkk apaga saporrakkkkk", "Calma garotão, essa vontade é temporária, o orgulho de ganhar é eterno!", "Prohibido el modo sexo... Primer aviso!"]
    let entrada = document.getElementById("entrada").value
    let frase = Math.floor(Math.random()*7)
    alertify.alert(entrada+" dias",array[frase], 
    function(){
        alertify.message("LEMBRE-SE: COM 30 DIAS VOCÊ SE TORNA UMA LENDA")
    });

}


