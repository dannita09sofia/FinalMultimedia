const listaSuperiores = [
  "https://static.vecteezy.com/system/resources/thumbnails/045/848/725/small/a-red-gown-dress-isolated-on-transparent-background-png.png",
  "https://i.pinimg.com/736x/33/16/cf/3316cf42991f9e11c3815639d42e021f.jpg",
  "https://i.pinimg.com/736x/e6/49/c1/e649c19f12a765fbb51f2b6b898ae12d.jpg",
  "https://i.pinimg.com/1200x/df/5a/53/df5a539ebc7622e4b0bf01da26b3521d.jpg",
  "https://i.pinimg.com/1200x/8a/7a/26/8a7a2663f1297aeab23daae7ab420b57.jpg",
  "https://i.pinimg.com/736x/b8/b5/f7/b8b5f7f2d02f8361f0cab8be808fe3d0.jpg",
  "https://i.pinimg.com/1200x/c0/b6/39/c0b639578951e0ee10afb8ca8f6e867a.jpg",
  "https://i.pinimg.com/1200x/a0/d8/c9/a0d8c9cd3dd0ab489cb90eeef7968bba.jpg",
  "https://i.pinimg.com/1200x/ca/e8/98/cae898ba6c46c069460b859fb3ba6625.jpg"
];

const listaPantalones = [
  "https://i.pinimg.com/1200x/2c/17/cd/2c17cd3887992f20de7d0f4e6ff48871.jpg",
  "https://i.pinimg.com/736x/e3/94/bf/e394bf1019320eda006c5237993e9903.jpg",
  "https://i.pinimg.com/1200x/32/78/56/3278560d579fbbb0e7ea2b0cb11204c5.jpg",
  "https://i.pinimg.com/1200x/13/94/3a/13943a0d9fc3d898024f56136ff3c769.jpg",
  "https://i.pinimg.com/736x/fd/48/06/fd4806d9a78a2a7a0f86829c70597132.jpg",
  "https://i.pinimg.com/1200x/3d/66/31/3d6631b49192b0a13cc48a71a01bd7e3.jpg",
  "https://i.pinimg.com/1200x/4d/e8/88/4de888e8146d4a7bc450ea306e144431.jpg",
  "https://i.pinimg.com/1200x/1d/f9/9b/1df99bfdbcdc862eda701e9e624fbc31.jpg"
];

const listaZapatos = [
  "https://i.pinimg.com/736x/4f/e9/76/4fe976d617ad9b7d592d768d136f9cf5.jpg",
  "https://i.pinimg.com/736x/97/57/b2/9757b2c391104f8bab1a94785be1c40e.jpg",
  "https://i.pinimg.com/1200x/92/a7/04/92a704086afb38148028513f7d20509b.jpg",
  "https://i.pinimg.com/736x/33/e6/bc/33e6bc7b4e25c9c759891342c2819a82.jpg",
  "https://i.pinimg.com/1200x/a4/00/16/a400167a3d51090b46c8e8f98a870e37.jpg",
  "https://i.pinimg.com/1200x/49/36/26/4936268612760caff55d8669e43fa262.jpg"
];

const superior = document.getElementById("superior");
const pantalon = document.getElementById("pantalon");
const zapatos = document.getElementById("zapatos");
const boton = document.getElementById("boton");

function random(max) {
  return Math.floor(Math.random() * max);
}

function generarOutfit() {
  superior.src = listaSuperiores[random(listaSuperiores.length)];
  pantalon.src = listaPantalones[random(listaPantalones.length)];
  zapatos.src = listaZapatos[random(listaZapatos.length)];
}

boton.addEventListener("click", generarOutfit);

generarOutfit();