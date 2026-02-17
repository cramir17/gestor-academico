let matriz = [];

function cargarDatos() {
  matriz = [
    [1, "Matematicas", 3, "Prof. Eduardo García", "Activa"],
    [2, "Java - Javascript", 4, "Prof. Yeison Betancur", "Activa"],
    [3, "Inglés", 3, "Prof. Ana Martínez", "Inactiva"],
    [4, "Habilidades Blandas", 2, "Prof. Carlos Mendoza", "Activa"],
    [5, "SQL", 3, "Prof. Ana Martínez", "Activa"],
  ];

  crearTabla();
}

function crearTabla() {
  let tbodyHtml = document.getElementById("tbodyAsignaturas");
  let tbody = "";

  matriz.forEach((item) => {
    tbody += `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td><td>${item[3]}</td><td>${item[4]}</td><td><button class="btn btn-primary btn-sm" onclick="editarAsignatura(${item[0]})" data-bs-toggle="modal"
            data-bs-target="#modalAsignatura">Editar</button><button class="btn btn-danger btn-sm" onclick="eliminarAsignatura(${item[0]})">Eliminar</button></td></tr>`;
  });

  document.getElementById("gifContainer").style.display = "block";

  setTimeout(function () {
    tbodyHtml.innerHTML = tbody;
    document.getElementById("gifContainer").style.display = "none";
  }, 2000);
}

function eliminarAsignatura(id) {
  const confirmar = confirm(
    "¿Estás seguro de que deseas eliminar este registro?",
  );

  if (confirmar) {
    // Aquí va la lógica de eliminación
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
    agregarAsignatura();
  } else {
    const nombre = document.getElementById("nombreModal").value;
    const creditos = parseInt(document.getElementById("creditosModal").value);
    const profesor = document.getElementById("docenteModal").value;
    const estado = document.getElementById("estadoModal").value;
    matriz = matriz.map((item) => {
      if (item[0] === id) {
        return [id, nombre, creditos, profesor, estado];
      }
      return item;
    });
    crearTabla();
    alert("Asignatura actualizada exitosamente");
  }
}

function agregarAsignatura() {
  const nombre = document.getElementById("nombreModal").value;
  const creditos = parseInt(document.getElementById("creditosModal").value);
  const profesor = document.getElementById("docenteModal").value;
  const estado = document.getElementById("estadoModal").value;
  const id = matriz.length > 0 ? matriz[matriz.length - 1][0] + 1 : 1;
  matriz.push([id, nombre, creditos, profesor, estado]);

  crearTabla();
  alert("Asignatura agregada exitosamente");
}

function editarAsignatura(id) {
  let asignatura = matriz.find((item) => item[0] === id);
  if (asignatura) {
    document.getElementById("idModal").value = asignatura[0];
    document.getElementById("nombreModal").value = asignatura[1];
    document.getElementById("creditosModal").value = asignatura[2];
    document.getElementById("docenteModal").value = asignatura[3];
    document.getElementById("estadoModal").value = asignatura[4];

    let modalTitle = document.getElementById("modalAsignaturaLabel");
    modalTitle.textContent = "Editar asignatura";
  }
}

function limpiarModal() {
  document.getElementById("idModal").value = "";
  document.getElementById("nombreModal").value = "";
  document.getElementById("creditosModal").value = "";
  document.getElementById("docenteModal").value = "";
  document.getElementById("estadoModal").value = "Activa";
  let modalTitle = document.getElementById("modalAsignaturaLabel");
  modalTitle.textContent = "Agregar asignatura";
}
