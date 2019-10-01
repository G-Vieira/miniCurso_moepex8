var linhas = 1;

document.getElementById("botao_calcular").addEventListener("click", function(){
  var progresso = document.getElementById("progresso");
  var materia_nome = document.getElementById("materia_nome");
  var nota1 = document.getElementById("nota1");
  var nota2 = document.getElementById("nota2");
  var nota3 = document.getElementById("nota3");

  if(progresso.value == 100){
    alert("Limite alcançado");
    return false;
  }

  var ok = true;
  if(materia_nome.value == ""){
    ok = false;
    alert("Erro, precisa do nome da materia!");
  }else if(nota1.value == "" || nota2.value == "" || nota3.value == ""){
    ok = false;
    alert("Erro, insira as três notas!");
  }

  if(ok){
    var tabela = document.getElementById("tabela"); 
    var linha = tabela.insertRow(linhas); 
    var res = parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value);
    
    (linha.insertCell(0)).innerHTML = materia_nome.value;
    (linha.insertCell(1)).innerHTML = nota1.value;
    (linha.insertCell(2)).innerHTML = nota2.value;
    (linha.insertCell(3)).innerHTML = nota3.value;
    (linha.insertCell(4)).innerHTML = res;
    
    if( res > "3.5"){
      (linha.insertCell(5)).innerHTML = "PASSOU";
    }else{
      (linha.insertCell(5)).innerHTML = "NÃO PASSOU";
    }
    linhas++;
  }
  
  
  //LIMPANDO OS DADOS
  materia_nome.value = "";
  nota1.value = "";
  nota2.value = "";
  nota3.value = "";
  
  //ATUALIZANDO A BARRA DE PROGRESSO
  progresso.value = progresso.value + 10;
  
  

});
