const obras = document.querySelectorAll(".obra");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

                observador.unobserve(entrada.target);
            }

        });

    },
    {
        threshold: 0.2
    }
);

obras.forEach((obra) => {
    observador.observe(obra);
});