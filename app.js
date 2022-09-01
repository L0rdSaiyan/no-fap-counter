
function frase(){

    const array = ["Continue firme, soldado!", "O seu pau pode estar mole, mas a sua honra está intacta.", "NÃO PEÇA O LINK! NÃO SE CORROMPA POR ESSA PRAGA!", "O MAIOORRRR!!!"]
    let entrada = document.getElementById("entrada").value
    let frase = Math.floor(Math.random()*2)
    alertify.alert(entrada+" dias",array[frase], 
    function(){
        alertify.sucess("LEMBRE-SE: COM 30 DIAS VOCÊ SE TORNA UMA LENDA")
    });

}


