
        const imagenesCarrusel = [
        "imagenes tp prog/amroki.png",
        "imagenes tp prog/renegade.png",
        "imagenes tp prog/208.png"
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