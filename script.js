document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const grado = document.getElementById("grado").value;
  const mensaje = document.getElementById("mensaje").value;

  const sugerencias = JSON.parse(localStorage.getItem("sugerencias")) || [];

  sugerencias.push({
    nombre,
    grado,
    mensaje,
    fecha: new Date().toLocaleString()
  });

  localStorage.setItem("sugerencias", JSON.stringify(sugerencias));

  document.getElementById("mensajeExito").textContent =
    "¡Gracias por tu sugerencia!";

  document.getElementById("formulario").reset();
});