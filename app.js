let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("valoramigo");
  let valorDeUsuario = input.value.trim();

  if (valorDeUsuario === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(valorDeUsuario);
  input.value = "";

  mostrarLista();
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  // Validar que haya al menos un amigo
  if (amigos.length === 0) {
    resultado.innerHTML = "No hay amigos para sortear.";
    return;
  }

  // Generar índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre correspondiente
  let nombreSorteado = amigos[indice];

  // Mostrar el resultado
  resultado.innerHTML = `Amigo sorteado: ${nombreSorteado}`;
}