/* ==========================================================
   MiPrimerProyectoWeb · Comportamiento de la página
   Autor: German Andre Tirado Ariza
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Año actual en el pie de página
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Cambio entre modo claro y modo oscuro
  var themeButton = document.getElementById("theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var isDark = document.body.classList.toggle("dark");
      themeButton.textContent = isDark ? "☀️ Modo claro" : "🌙 Modo oscuro";
    });
  }

  // 3. Contador de visitas de la sesión (se guarda en la memoria de la página)
  var counter = 0;
  var counterText = document.getElementById("visit-counter");
  var counterButton = document.getElementById("counter-btn");
  if (counterText && counterButton) {
    counterButton.addEventListener("click", function () {
      counter += 1;
      counterText.textContent = counter;
    });
  }

  // 4. Mensaje de verificación para la consola del navegador (F12)
  console.log("MiPrimerProyectoWeb cargado correctamente.");
});
