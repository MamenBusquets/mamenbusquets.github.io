// Selecciona la imagen de la portada por su id 
const img_portada = document.getElementById('img_portada');

// Al entrar el ratón: muestra mi foto
img_portada.addEventListener("mouseenter", () => {
  img_portada.src = "material/foto-mia.jpg";
  img_portada.alt = "Soc jo";
});

// Al salir el ratón: vuelve a la foto de la playa
img_portada.addEventListener("mouseleave", () => {
  img_portada.src = "material/foto_inici.jpeg";
  img_portada.alt = "Fotografia de la platja feta per mi";
});

// ===== Filtro de proyectos =====
const botonesFiltro = document.querySelectorAll('.filtro');
const proyectos = document.querySelectorAll('.tarjeta-proyecto');

botonesFiltro.forEach((boton) => {
  boton.addEventListener('click', () => {

    // 1) Quitar la clase "activo" de todos y ponérsela al pulsado
    botonesFiltro.forEach((b) => b.classList.remove('activo'));
    boton.classList.add('activo');

    // 2) Leer la categoría del botón pulsado
    const categoria = boton.dataset.filtro;

    // 3) Recorrer las tarjetas y mostrar/ocultar según su data-categoria
    proyectos.forEach((proyecto) => {
      const coincide =
        categoria === 'todos' || proyecto.dataset.categoria === categoria;

      proyecto.classList.toggle('oculto', !coincide);

      // Reinicia la animación cada vez que una tarjeta vuelve a mostrarse
      if (coincide) {
        proyecto.classList.remove('mostrar');
        void proyecto.offsetWidth; // fuerza al navegador a recalcular
        proyecto.classList.add('mostrar');
      }
    });
  });
});