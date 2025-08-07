let listaAmigos = [];
let totalAmigos;
let indice;
let amigo;

function adicionarAmigo() {
  const campo = document.querySelector("#amigo");
  const nome = campo.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  if (listaAmigos.includes(nome)) {
  alert("Esse nome já foi adicionado!");
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

function sortearAmigo(){
    if(listaAmigos.length == 0){
        alert("Adicione um amigo!")
    }else{
        totalAmigos = listaAmigos.length;
        indice = Math.floor(Math.random() * totalAmigos);
        amigo = listaAmigos[indice];
        document.getElementById("resultado").innerHTML = `Seu amigo secreto é: <strong>${amigo}</strong>`;
    }
}