
        const imagenesCarrusel = [
        "imagenes tp prog/amarok.jpeg",
        "imagenes tp prog/renegade_trailhawk_0112.jpg",
        "imagenes tp prog/grande_34999.jpg"
        ];

    let indexImagenesCarrusel = 0;
    const imaCarrusel = document.getElementById("imaCarrusel");

    
    imaCarrusel.src = imagenesCarrusel[indexImagenesCarrusel];

    function botonDerecha() {
    indexImagenesCarrusel++;
    if (indexImagenesCarrusel >= imagenesCarrusel.length) {
      indexImagenesCarrusel = 0;
    }
    imaCarrusel.src = imagenesCarrusel[indexImagenesCarrusel];
    }

    function botonIzquierda() {
  indexImagenesCarrusel--;
  if (indexImagenesCarrusel < 0) {
    indexImagenesCarrusel = imagenesCarrusel.length - 1;
  }
  imaCarrusel.src = imagenesCarrusel[indexImagenesCarrusel];
}