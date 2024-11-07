/*Crie uma função chamada verificarMaiorIdade que receba a idade de uma pessoa como argumento e retorne "Maior de idade" se a idade for igual ou superior a 18, e"Menor de idade" caso contrário.*/

function verificarMaiorIdade(idade){

    if(idade >= 18){
        return alert("Maior de idade")
    }else{
        return alert ("Menor de idade")
    }
}

function alteraBackGround(){
     
    const botao = document.querySelector("body")
    body.style.backgroundColor = "#f2c2f5"
}