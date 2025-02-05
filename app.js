// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar un array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución si el campo está vacío
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Iterar sobre el arreglo de amigos y crear elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista. Agrega al menos un amigo.");
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

