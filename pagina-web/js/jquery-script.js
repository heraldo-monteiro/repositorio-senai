/* ESCONDER FORMULÁRIO*/

$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#sessao-login").slideToggle("slow");
        $("#botao-cadastrar").hide();

    });

});


//document.getElementById("botao-cadastrar").click() //comando em JavaScript
