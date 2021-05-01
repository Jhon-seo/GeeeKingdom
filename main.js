var menu = document.getElementById('botonMenu');

var equis = document.getElementById('botonEquis');

var menuContenido = document.getElementById('menuDeContenido');

menu.addEventListener("click",mostrarMenu);

equis.addEventListener("click",ocultarMenu);


function mostrarMenu () {
  
  menu.classList.remove('botonMuestraMenu');
  menu.classList.add('botonOcultaMenu');

menuContenido.classList.remove("Menu_horizontal_no_desplegado");
menuContenido.classList.add("Menu_horizontal_desplegado");

  equis.classList.remove('botonOcultaMenu');
  equis.classList.add('botonMuestramenu');

}

function ocultarMenu() {
  
  equis.classList.remove('botonMuestraMenu');
  equis.classList.add('botonOcultaMenu');

menuContenido.classList.add("Menu_horizontal_no_desplegado");
menuContenido.classList.remove("Menu_horizontal_desplegado");

  menu.classList.remove('botonOcultaMenu');
  menu.classList.add('botonMuestramenu');

}


