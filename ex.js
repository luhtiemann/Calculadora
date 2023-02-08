 function somar(){
    var valor1=parseInt(document.getElementById("valor1").value);
    var valor2=parseInt(document.getElementById("valor2").value);
    var soma=valor1+valor2;
    document.getElementById("resultado").value=soma;  
 }

 function subtrair(){
    var valor1=parseInt(document.getElementById("valor1").value);
    var valor2=parseInt(document.getElementById("valor2").value);
    var subtracao=valor1-valor2;
    document.getElementById("resultado").value=subtracao;
 }

 function dividir(){
    var valor1=parseInt(document.getElementById("valor1").value);
    var valor2=parseInt(document.getElementById("valor2").value);
    var divisao=valor1/valor2;
    document.getElementById("resultado").value=divisao;  
 }

 function multiplicar(){
    var valor1=parseInt(document.getElementById("valor1").value);
    var valor2=parseInt(document.getElementById("valor2").value);
    var multiplicacao=valor1*valor2;
    document.getElementById("resultado").value=multiplicacao;
 }

 function limpar(){
    document.getElementById("valor1").value="";
    document.getElementById("valor2").value="";
    document.getElementById("resultado").value="";
 }

 function resultado(){
    var valor1=parseInt(document.getElementById("valor1").value);
    var valor2=parseInt(document.getElementById("valor2").value);
    var operacao=document.getElementById("operacao").value;

    if(operacao=="+"){
        document.getElementById("resultado").value=valor1+valor2;}
    else if(operacao=="-"){
        document.getElementById("resultado").value=valor1-valor2;}
    else if(operacao=="/"){
        document.getElementById("resultado").value=valor1/valor2;}
    else if(operacao=="*"){
        document.getElementById("resultado").value=valor1*valor2;}
    }
 