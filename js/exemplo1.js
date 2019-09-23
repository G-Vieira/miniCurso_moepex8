var linhas = 1;

document.getElementById("botao_calcular").addEventListener("click", function(){
  var materia_nome = document.getElementById("materia_nome").value;
  var nota1 = document.getElementById("nota1").value;
  var nota2 = document.getElementById("nota2").value;
  var nota3 = document.getElementById("nota3").value;

  var ok = true;
  if(materia_nome == ""){
    ok = false;
    alert("Erro, precisa do nome da materia!");
  }else if(nota1 == "" || nota2 == "" || nota3 == ""){
    ok = false;
    alert("Erro, insira as três notas!");
  }

  if(ok){
    var tabela = document.getElementById("tabela"); 
    var linha = tabela.insertRow(linhas); 
    (linha.insertCell(0)).innerHTML = materia_nome;
    (linha.insertCell(1)).innerHTML = nota1;
    (linha.insertCell(2)).innerHTML = nota2;
    (linha.insertCell(3)).innerHTML = nota3;

    if( parseInt(nota1) + parseInt(nota2) + parseInt(nota3) > 10){
      (linha.insertCell(4)).innerHTML = "PASSOU";
    }else{
      (linha.insertCell(4)).innerHTML = "NÃO PASSOU";
    }
    linhas++;
  }

});