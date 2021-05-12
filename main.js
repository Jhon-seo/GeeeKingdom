var menu = document.getElementById('botonMenu');

var equis = document.getElementById('botonEquis');

var menuContenido = document.getElementById('menuDeContenido');

var comics = document.querySelectorAll('.contenedorDeComic');

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

function mostrarOpciconesDelComic(identificador) {
  var botonDeOpciones = document.getElementById(identificador);
  botonDeOpciones.classList.remove('noMostrarOpciones');
  botonDeOpciones.classList.add('mostrarOpciones');
  
  botonDeOpciones.addEventListener('click', opcionesDeComic)

}

function noMostrarOpciconesDelComic(identificador) {
  var botonDeOpciones = document.getElementById(identificador);
  botonDeOpciones.classList.remove('mostrarOpciones');
  botonDeOpciones.classList.add('noMostrarOpciones');
  
}

function  opcionesDeComic () {
  var opciones = document.getElementById('opciones');
  opciones.classList.remove('noMostrarOpciones');
  var ocultarOpciones = document.getElementById('ocultarOpciones');

  ocultarOpciones.addEventListener('click', function () {
    opciones.classList.add('noMostrarOpciones');
  })
}
window.onload = function(){

for (let i= 0; i < comics.length; i++) {

  comics[i].addEventListener("mouseover", function() {
    mostrarOpciconesDelComic(i)
  } );

  comics[i].addEventListener("mouseout",function(){
     noMostrarOpciconesDelComic(i)});

}



}

