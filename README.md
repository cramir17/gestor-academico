# gestor-academico  
Proyecto de aprendizaje de programación - Java-UdeA

---

## 🎓 Gestor Académico

## 📌 Descripción

**Gestor Académico** es una aplicación web diseñada para administrar información de:

- Estudiantes  
- Asignaturas  
- Notas  

El proyecto fue desarrollado en dos fases: primero la estructura visual y luego la funcionalidad completa en el navegador.

---

## 🧱 Fase 1 – Estructura y Diseño

En esta fase se construyó la base del proyecto:

- Organización del repositorio en GitHub  
- Creación de vistas HTML  
- Diseño con estilos coherentes  
- Navegación clara entre módulos  

En esta etapa no se implementó lógica con JavaScript. El enfoque estuvo en la estructura, el orden y las buenas prácticas de maquetación.

---

## ⚙️ Fase 2 – Funcionalidad con JavaScript

En esta fase el sistema pasó de ser una maqueta visual a una aplicación funcional.

Se implementó:

- Carga automática de datos iniciales  
- Operaciones para agregar, editar y eliminar registros  
- Actualización dinámica de tablas  
- Uso de modales  
- Simulación de procesos con overlay de carga ("Loading...")  

Esto permitió conectar correctamente el HTML con JavaScript y manejar la información en memoria de forma organizada.

---

## 📁 Estructura de Carpetas

gestor-academico/
│
├── index.html
├── README.md
│
├── pages/
│ ├── estudiantes.html
│ ├── asignaturas.html
│ └── notas.html
│
├── src/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ ├── estudiantes.js
│ │ ├── asignaturas.js
│ │ └── notas.js
│ └── assets/
│ └── images/



---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

git clone https://github.com/tu-usuario/gestor-academico.git



2. Abrir la carpeta del proyecto.

3. Ejecutar `index.html` en el navegador.  
   (Puedes usar Live Server en VS Code si lo prefieres).

No requiere instalación adicional.

---

## 📸 Capturas de Pantalla

### Vista Principal
![Vista Principal](src/assets/images/home.png)

### Módulo Estudiantes
![Módulo Estudiantes](src/assets/images/estudiantes.png)

### Módulo Asignaturas
![Módulo Asignaturas](src/assets/images/asignaturas.png)

### Módulo Notas
![Módulo Notas](src/assets/images/notas.png)
