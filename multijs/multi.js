document.addEventListener("DOMContentLoaded", function() {
    const multiplicarBtn = document.getElementById("multiplicarBtn");
    const numero1Input = document.getElementById("numero1");
    const numero2Input = document.getElementById("numero2");

    multiplicarBtn.addEventListener("click", function() {
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const resultado = num1 * num2;
            console.log(resultado);
        }
    });
});