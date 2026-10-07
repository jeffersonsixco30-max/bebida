```javascript
document.addEventListener("DOMContentLoaded", function () {

    console.log("GuaraFresh cargado correctamente.");


    /* =========================
       MODO OSCURO / CLARO
    ========================= */

    const botonModo = document.getElementById("modoOscuro");

    if (botonModo) {

        // Revisar si el usuario ya había elegido un modo

        const modoGuardado = localStorage.getItem("modo");

        if (modoGuardado === "oscuro") {

            document.body.classList.add("modo-oscuro");

            botonModo.innerHTML = "☀️";

        }


        botonModo.addEventListener("click", function () {

            document.body.classList.toggle("modo-oscuro");


            if (document.body.classList.contains("modo-oscuro")) {

                botonModo.innerHTML = "☀️";

                localStorage.setItem("modo", "oscuro");

            } else {

                botonModo.innerHTML = "🌙";

                localStorage.setItem("modo", "claro");

            }

        });

    }


    /* =========================
       ANIMACIONES AL HACER SCROLL
    ========================= */

    const elementos = document.querySelectorAll(
        ".card-info, .herramienta-card, .contenido"
    );


    elementos.forEach(function (elemento) {

        elemento.classList.add("animar");

    });


    const observer = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    elementos.forEach(function (elemento) {

        observer.observe(elemento);

    });


    /* =========================
       NAVEGACIÓN SUAVE
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            const destino = document.querySelector(
                this.getAttribute("href")
            );

            if (destino) {

                evento.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
```
