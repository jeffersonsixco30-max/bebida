function calificar() {

    let respuestas = {
        p1: "c",
        p2: "a",
        p3: "b",
        p4: "a",
        p5: "a",
        p6: "b",
        p7: "a",
        p8: "a",
        p9: "b",
        p10: "a"
    };

    let puntos = 0;

    for (let pregunta in respuestas) {

        let seleccion = document.querySelector(
            'input[name="' + pregunta + '"]:checked'
        );

        if (seleccion && seleccion.value === respuestas[pregunta]) {
            puntos++;
        }
    }

    let resultado = document.getElementById("resultado");

    let porcentaje = puntos * 10;

    if (puntos >= 8) {

        resultado.innerHTML =
            "🎉 Excelente. Obtuviste " +
            puntos +
            "/10 (" +
            porcentaje +
            "%).";

        resultado.style.background = "#d8f3dc";
        resultado.style.color = "#1b4332";

    } else if (puntos >= 5) {

        resultado.innerHTML =
            "👍 Buen trabajo. Obtuviste " +
            puntos +
            "/10 (" +
            porcentaje +
            "%).";

        resultado.style.background = "#fff3cd";
        resultado.style.color = "#664d03";

    } else {

        resultado.innerHTML =
            "📚 Puedes repasar las páginas informativas. Obtuviste " +
            puntos +
            "/10 (" +
            porcentaje +
            "%).";

        resultado.style.background = "#f8d7da";
        resultado.style.color = "#842029";
    }

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}