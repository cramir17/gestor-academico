let matriz = [];

function cargarDatos() {
  matriz = [
    [
      1,
      "Mark Johnson",
      "1111",
      "mark.johnson@gmail.com",
      "Ingeniería de Sistemas",
      "Activo",
    ],
    [
      2,
      "Laura Gómez",
      "2222",
      "laura.gomez@gmail.com",
      "Administración de Empresas",
      "Activo",
    ],
    [
      3,
      "Juan Pérez",
      "3333",
      "juan.perez@gmail.com",
      "Contaduría Pública",
      "Inactivo",
    ],
    [
      4,
      "Camila Torres",
      "4444",
      "camila.torres@gmail.com",
      "Diseño Gráfico",
      "Activo",
    ],
    [
      5,
      "Andrés Ramírez",
      "5555",
      "andres.ramirez@gmail.com",
      "Ingeniería Industrial",
      "Suspendido",
    ],
  ];
  crearTabla();
}

function crearTabla() {
  const tbody = document.getElementById("tbodyEstudiantes");
  let tbodyHtml = "";
  matriz.forEach((item) => {
    tbodyHtml += `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td><td>${item[3]}</td><td>${item[4]}</td><td>${item[5]}</td><td><button class="btn btn-primary btn-sm" onclick="editarEstudiante(${item[0]})" data-bs-toggle="modal" data-bs-target="#modalEstudiante">Editar</button><button class="btn btn-danger btn-sm" onclick="eliminarEstudiante(${item[0]})">Eliminar</button></td></tr>`;
  });

  document.getElementById("gifContainer").style.display = "block";

  setTimeout(function () {
    tbody.innerHTML = tbodyHtml;
    document.getElementById("gifContainer").style.display = "none";
  }, 2000);
}

function eliminarEstudiante(id) {
  const confirmar = confirm(
    "¿Estás seguro de que deseas eliminar este registro?",
  );
  if (confirmar) {
    matriz = matriz.filter((item) => item[0] !== id);
    crearTabla();
    alert("Registro eliminado exitosamente");
  } else {
    console.log("Eliminación cancelada");
  }
}

function guardarCambios() {
  const id = parseInt(document.getElementById("idEstudianteModal").value);
  if (isNaN(id)) {
    agregarEstudiante();
  } else {
    const nombre = document.getElementById("nombreEstudianteModal").value;
    const documento = document.getElementById("documentoEstudianteModal").value;
    const email = document.getElementById("emailEstudianteModal").value;
    const programa = document.getElementById("programaEstudianteModal").value;
    const estado = document.getElementById("estadoEstudianteModal").value;

    matriz = matriz.map((item) => {
      if (item[0] === id) {
        return [id, nombre, documento, email, programa, estado];
      }
      return item;
    });
    crearTabla();
    alert("Estudiante actualizado exitosamente");
  }
}

function agregarEstudiante() {
  const nombre = document.getElementById("nombreEstudianteModal").value;
  const matricula = document.getElementById("documentoEstudianteModal").value;
  const email = document.getElementById("emailEstudianteModal").value;
  const carrera = document.getElementById("programaEstudianteModal").value;
  const estado = document.getElementById("estadoEstudianteModal").value;
  const id = matriz.length > 0 ? matriz[matriz.length - 1][0] + 1 : 1;
  matriz.push([id, nombre, matricula, email, carrera, estado]);
  crearTabla();
  alert("Estudiante agregado exitosamente");
}

function editarEstudiante(id) {
  const estudiante = matriz.find((item) => item[0] === id);
  if (estudiante) {
    document.getElementById("idEstudianteModal").value = estudiante[0];
    document.getElementById("nombreEstudianteModal").value = estudiante[1];
    document.getElementById("documentoEstudianteModal").value = estudiante[2];
    document.getElementById("emailEstudianteModal").value = estudiante[3];
    document.getElementById("programaEstudianteModal").value = estudiante[4];
    document.getElementById("estadoEstudianteModal").value = estudiante[5];

    let modalTitle = document.getElementById("modalEstudianteLabel");
    modalTitle.textContent = "Editar Estudiante";
  }
}

function limpiarModal() {
  document.getElementById("idEstudianteModal").value = "";
  document.getElementById("nombreEstudianteModal").value = "";
  document.getElementById("documentoEstudianteModal").value = "";
  document.getElementById("emailEstudianteModal").value = "";
  document.getElementById("programaEstudianteModal").value = "";
  document.getElementById("estadoEstudianteModal").value = "Activo";

  let modalTitle = document.getElementById("modalEstudianteLabel");
  modalTitle.textContent = "Agregar Estudiante";
}
