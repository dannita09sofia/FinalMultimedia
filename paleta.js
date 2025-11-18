/* paleta.js */
// Estado para saber si cada color está bloqueado
const locked = {
c1: false,
c2: false,
c3: false,
c4: false,
};


// Función para generar color random
function randomColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Al presionar SPACE cambia colores que NO estén bloqueados


document.addEventListener("keydown", (e) => {
if (e.code === "Space") {
["c1", "c2", "c3", "c4"].forEach((id) => {
if (!locked[id]) {
document.getElementById(id).style.background = randomColor();
}
});
}
});


// Click para bloquear/desbloquear un color
["c1", "c2", "c3", "c4"].forEach((id) => {
const box = document.getElementById(id);


box.addEventListener("click", () => {
locked[id] = !locked[id]; // alterna estado


if (locked[id]) {
box.style.outline = "5px solid var(--vinotinto)"; // borde para indicar bloqueo
} else {
box.style.outline = "none";
}
});
});