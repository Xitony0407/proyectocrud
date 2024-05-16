let formulario = document.getElementById("formulario");
let formularioEditar = document.getElementById("formularioEditar");
let artista = document.getElementById("artista");
let fecha = document.getElementById("duracion");
let video = document.getElementById("video");
let audio = document.getElementById("audio");
let imagen = document.getElementById("imagen");
let idTarea = document.getElementById("idTarea");
let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById("btnGuardar");
let btnGuardarEditar = document.getElementById("btnGuardarEditar");


let tareas = [
    {
        artista: "Artista: Ricardo Arjona",
        duracion: "Duracion: 3:45",
        video: "videoricardoarjona.mp4",
        audio: "/Ricardo Arjona – Mujeres.mp3",
        imagen: "recursos/ricardo.jpeg"
    }
];



let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, index) => {
        listaTareas.innerHTML += `
        <div class='row'>
            <div class='col-1 border p-3 m-0.5'>
            <strong>${tarea.artista}</strong>
            </div>
            <div class='col-1 border p-3'>
            <strong>${tarea.duracion}</strong>
            </div>
            <div class='col-3 border p-3 text-center'>
                <video width="100%" height="100%" controls>
                    <source src="${tarea.video}" type="video/mp4">
                </video>
            </div>
            <div class='col-2 border p-3 text-center'>
                <img src="${tarea.imagen}" class="img-fluid">
            </div>
            <div class='col-2 border p-3 text-center'>
                <audio controls>
                    <source src="${tarea.audio}" type="audio/mpeg">
                </audio>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick='editarTarea(${index})'>Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
            <button class='btn btn-danger' onclick='borrarTarea(${index})'>Eliminar</button>
            </div>
        </div>
        `;
    });
}
mostrarTareas();
let AgregarDatos = () => {
    let datos = {
        artista: artista.value,
        duracion: duracion.value,
        video: video.value,
        audio: audio.value,
        imagen: imagen.value
    };
    console.log(datos);
    tareas.push(datos);
    mostrarTareas();

}

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
}

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
}

let borrarTarea = (index) => {
    tareas.splice(index, 1);
    mostrarTareas();
}

let editarTarea = (index) => {
    artistaEditar.value = tareas[index].artista;
    duracionEditar.value = tareas[index].duracion;
    videoEditar.value = tareas[index].video;
    audioEditar.value = tareas[index].audio;
    imagenEditar.value = tareas[index].imagen;
    idTarea.value = index;
}

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].artista = artistaEditar.value;
    tareas[indice].duracion = duracionEditar.value;
    tareas[indice].video = videoEditar.value;
    tareas[indice].audio = audioEditar.value;
    tareas[indice].imagen = imagenEditar.value;
    cerrarModalEditar();
    mostrarTareas();
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    AgregarDatos();
    cerrarModal();
    formulario.reset();
});
