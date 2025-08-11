// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lógica principal del desafío Amigo Secreto
// Requisitos cubiertos:
// 1) Agregar nombres con validación
// 2) Visualizar la lista en pantalla
// 3) Sortear un nombre al azar y mostrar el resultado
// 4) UX: Enter para agregar, foco, mensajes claros

const amigos = [];

function $(id) {
  return document.getElementById(id);
}

function normalizarNombre(texto) {
  return texto.trim().replace(/\s+/g, " ");
}

function renderLista() {
  const ul = $("listaAmigos");
  ul.innerHTML = "";

  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

function mostrarResultado(mensaje) {
  const ul = $("resultado");
  ul.innerHTML = "";
  const li = document.createElement("li");
  li.innerHTML = mensaje;
  ul.appendChild(li);
}

function limpiarResultado() {
  $("resultado").innerHTML = "";
}

// Agregar amigo
function agregarAmigo() {
  const input = $("amigo");
  const nombre = normalizarNombre(input.value);

  if (!nombre) {
    alert("Por favor, ingresa un nombre válido.");
    input.focus();
    return;
  }

  // Evitar duplicados exactos (opcional pero útil)
  const existe = amigos.some((n) => n.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert("Ese nombre ya está en la lista.");
    input.select();
    return;
  }

  amigos.push(nombre);
  input.value = "";
  input.focus();
  limpiarResultado();
  renderLista();
}

// Sorteo aleatorio
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    $("amigo").focus();
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const seleccionado = amigos[indice];
  mostrarResultado(`🎉 El amigo secreto es: <strong>${seleccionado}</strong>`);
}

// Accesibilidad: Enter para agregar
window.addEventListener("DOMContentLoaded", () => {
  const input = $("amigo");
  input.focus();
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      agregarAmigo();
    }
  });
});

// Exponer funciones al scope global para uso desde HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
