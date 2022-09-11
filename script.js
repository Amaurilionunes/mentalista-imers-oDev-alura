function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    console.log("Você Acertou Parabéns");
  } else if (chute > 10 || chute < 0) {
    console.log("Seu chute deve ser de 0 até 10");
  } else {
    console.log("Você Errou o numero era " + numeroSecreto);
  }
}
