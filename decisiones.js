const decidirBtn = document.getElementById("decidirBtn");
const resultado = document.getElementById("resultado");

function decidir() {
    const op1 = document.getElementById("op1").value.trim();
    const op2 = document.getElementById("op2").value.trim();
    const op3 = document.getElementById("op3").value.trim();

    // Validación gerencial
    const opciones = [op1, op2, op3].filter(op => op !== "");

    if (opciones.length === 0) {
        resultado.textContent = "Escribe al menos una opción 💗";
        return;
    }

    const randomIndex = Math.floor(Math.random() * opciones.length);
    resultado.textContent = opciones[randomIndex];
}

decidirBtn.addEventListener("click", decidir);