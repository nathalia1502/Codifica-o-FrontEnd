function Cadastrar() {

    const nomeProprio = document.querySelector("#nome-proprio")
    const apelido = document.querySelector("#apelido")
    const nascimento = document.querySelector("#nascimento")
    const genero = document.querySelector("#genero")
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    
    const nomeProprioValue = nomeProprio.value;
    const apelidoValue = apelido.value;
    const nascimentoValue = nascimento.value;
    const generoValue = genero.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    
    if(nomeProprioValue === ""){
        nomeProprio.style.borderColor = "red"
        return
    }else{
        nomeProprio.style.borderColor = ""
    }
    
    if(apelidoValue === ""){
        apelido.style.borderColor = "red"
        return
    }else{
        apelido.style.borderColor = ""
    }
    
    if(nascimentoValue === ""){
        nascimento.style.borderColor = "red"
        return
    }else{
        nascimento.style.borderColor = ""
    }
    
    if(generoValue === ""){
        genero.style.borderColor = "red"
        return
    }else{
        genero.style.borderColor = ""
    }
    
    if(emailValue === ""){
        email.style.borderColor = "red"
        return
    }else{
        email.style.borderColor = ""
    }
    
    if(senhaValue === ""){
        senha.style.borderColor = "red"
        return
    }else{
        senha.style.borderColor = ""
    }
    
    
    
    
    }