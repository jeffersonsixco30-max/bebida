```javascript
document.addEventListener("DOMContentLoaded", function () {
    const botonModo = document.getElementById("modoOscuro");
    const cuerpo = document.body;

    // Recuperar el tema guardado
    const temaGuardado = localStorage.getItem("modo");
    if (temaGuardado === "oscuro") {
        cuerpo.classList.add("modo-oscuro");
    }

    function actualizarBoton() {
        if (!botonModo) return;

        const oscuro = cuerpo.classList.contains("modo-oscuro");
        botonModo.textContent = oscuro ? "☀️" : "🌙";
        botonModo.setAttribute(
            "aria-label",
            oscuro ? "Activar modo claro" : "Activar modo oscuro"
        );
    }

    actualizarBoton();

    // Cambiar tema
    if (botonModo) {
        botonModo.addEventListener("click", function () {
            cuerpo.classList.toggle("modo-oscuro");

            const tema = cuerpo.classList.contains("modo-oscuro")
                ? "oscuro"
                : "claro";

            localStorage.setItem("modo", tema);
            actualizarBoton();
        });
    }

    // Animaciones de entrada
    const elementos = document.querySelectorAll(
        ".card-info, .contenido, .herramienta-card, .ia-card, .animar"
    );

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.12 });

        elementos.forEach(function (elemento) {
            elemento.classList.add("animar");
            observador.observe(elemento);
        });
    } else {
        elementos.forEach(function (elemento) {
            elemento.classList.add("visible");
        });
    }

    // Navegación suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {
        enlace.addEventListener("click", function (evento) {
            const selector = enlace.getAttribute("href");

            if (!selector || selector === "#") return;

            const destino = document.querySelector(selector);

            if (destino) {
                evento.preventDefault();
                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
```
