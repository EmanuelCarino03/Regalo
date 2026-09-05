const botonAbrir = document.getElementById("btnAbrir");

botonAbrir.addEventListener("click", function () {
    // 1. Evitar clics múltiples
    botonAbrir.disabled = true;

    // 2. Activar la animación visual del sobre
    botonAbrir.classList.add("abriendo");

    // 3. Dar la orden inicial de que la música debe sonar
    localStorage.setItem("reproducirMusica", "true");

    // 4. Redirigir a la página de inicio tras la animación
    setTimeout(function () {
        window.location.href = "pages/inicio.html";
    }, 1200);
});