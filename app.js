let listaAmigos = [];

function adicionarAmigo() {
  const campo = document.querySelector("#amigo");
  const nome = campo.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  listaAmigos.push(nome);
  campo.value = "";

  exibirListaDeAmigos();
}

function exibirListaDeAmigos() {
  const ul = document.querySelector("#listaAmigos");

  ul.innerHTML = "";

  for (let i = 0; i < listaAmigos.length; i++) {
    ul.innerHTML += `<li>${listaAmigos[i]}</li>`;
  }
}