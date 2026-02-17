let matriz = [];

function cargarDatos() {
    matriz = [
        [1, "Laura Gómez", "Matemáticas", 4.5, "2026-02-12", "Buen desempeño"],
        [2, "Juan Pérez", "SQL", 3.8, "2026-02-10", "Mejorar consultas JOIN"],
    ];
    crearTabla();
}


function crearTabla() {
    let tbodyHtml = document.getElementById("tbodyNotas");
    let tbody = "";
    
    matriz.forEach((item) => {
        tbody += `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td><td>${item[3]}</td><td>${item[4]}</td><td>${item[5]}</td><td><button class="btn btn-primary btn-sm" onclick="editarNota(${item[0]})" data-bs-toggle="modal" data-bs-target="#modalNota">Editar</button><button class="btn btn-danger btn-sm" onclick="eliminarNota(${item[0]})">Eliminar</button></td></tr>`;
    });

    document.getElementById("gifContainer").style.display = "block";

    setTimeout(function () {
        tbodyHtml.innerHTML = tbody;
        document.getElementById("gifContainer").style.display = "none";
    }, 2000);
}

function eliminarNota(id) {
    const confirmar = confirm("¿Estás seguro de que deseas eliminar este registro?");

    if (confirmar) {
        matriz = matriz.filter((item) => item[0] !== id);
        crearTabla();
        alert("Registro eliminado exitosamente");
    } else {
        console.log("Eliminación cancelada");
    }
}

function guardarCambios() {
    const id = parseInt(document.getElementById("idModal").value);
    if (isNaN(id)) {
        agregarNota();
    } else {
        const estudiante = document.getElementById("estudianteModal").value;
        const asignatura = document.getElementById("asignaturaModal").value;
        const nota = parseFloat(document.getElementById("notaModal").value);
        const fecha = document.getElementById("fechaModal").value;
        const observaciones = document.getElementById("observacionesModal").value;
        matriz = matriz.map((item) => {
            if (item[0] === id) {
                return [id, estudiante, asignatura, nota, fecha, observaciones];
            }         return item;
        });
        crearTabla();
        alert("Nota actualizada exitosamente");
    }
}

function agregarNota() {
    const estudiante = document.getElementById("estudianteModal").value;
    const asignatura = document.getElementById("asignaturaModal").value;
    const nota = parseFloat(document.getElementById("notaModal").value);
    const fecha = document.getElementById("fechaModal").value;
    const observaciones = document.getElementById("observacionesModal").value;
    const id = matriz.length > 0 ? matriz[matriz.length - 1][0] + 1 : 1;
    matriz.push([id, estudiante, asignatura, nota, fecha, observaciones]);
    
    crearTabla();
    alert("Nota agregada exitosamente");
}

function editarNota(id) {
    const nota = matriz.find((item) => item[0] === id);
    if (nota) {
        document.getElementById("idModal").value = nota[0];
        document.getElementById("estudianteModal").value = nota[1];
        document.getElementById("asignaturaModal").value = nota[2];
        document.getElementById("notaModal").value = nota[3];
        document.getElementById("fechaModal").value = nota[4];
        document.getElementById("observacionesModal").value = nota[5];

        let modalTitle = document.getElementById("modalNotaLabel");
        modalTitle.textContent = "Editar Nota";
    }
}

function limpiarModal() {
    document.getElementById("idModal").value = "";
    document.getElementById("estudianteModal").value = "";
    document.getElementById("asignaturaModal").value = "";
    document.getElementById("notaModal").value = "";
    document.getElementById("fechaModal").value = "";
    document.getElementById("observacionesModal").value = "";
    let modalTitle = document.getElementById("modalNotaLabel");
    modalTitle.textContent = "Agregar Nota";
}