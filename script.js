function combaterVirus() {
  const mensagens = [
    "O vírus foi neutralizado!",
    "Boa! O teu anticorpo venceu!",
    "Missão cumprida com sucesso!",
    "Patógeno eliminado!"
  ];
  const aleatorio = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("mensagem").innerText = aleatorio;
}
