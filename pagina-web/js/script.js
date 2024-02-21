/* fUNÇÃO PARA RETORNAR AO TOPO DA PÁGINA */
function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

/* VALIDAÇÃO DE LOGIN */
function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == '123456'){
        window.location = "index.html"
        logado = 1;

    }else if(logado == 0){        
        alert("Usuário ou Senha Invalido!");

    }

}

// Ativar alert no botão Cadastrar

function cadastro(){
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html"
}



