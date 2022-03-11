var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    if (chute > numeroSecreto) {
      elementoResultado.innerHTML = "Você errou, tente um número menor!";
    } else {
      elementoResultado.innerHTML = "Você errou, tente um número maior!";
    }
  }
}