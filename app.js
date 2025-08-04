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

  // Agora sim! Atualiza a lista visual logo após adicionar
  const ul = document.querySelector("#listaAmigos");
  ul.innerHTML = "";

  listaAmigos.forEach(function(amigo) {
    const item = document.createElement("li");
    item.textContent = amigo;
    ul.appendChild(item);
  });
}