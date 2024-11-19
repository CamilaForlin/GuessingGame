var numero, chute, resposta;
numero = 9;

function pedidoChute() {
  chute = parseInt(prompt("Digite um número entre 1 e 9."));
  if (chute < 0 || chute > 9) {
    alert("Número digitado inválido, digite um número entre 1 e 9");
  }
}

function continuar() {
  resposta = prompt("Deseja continuar?S/N");
  if (resposta = "N") {
    alert("Foi bom jogar com você! Até a próxima!");
  } else {
    pedidoChute()
  }
}

pedidoChute();

for (cont = 1; chute != numero; cont++) {
    
    if (chute==numero){
      alert("Você acertou na "+cont+" tentativa")
      }else{pedidoChute()}
  }while (chute > 0 || chute < 9);
  
continuar();