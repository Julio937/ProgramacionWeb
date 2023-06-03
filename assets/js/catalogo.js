const cargar = (document.querySelector("body").onload = function() {
    const p1 = leerproducto();
});

function leerproducto() {
    var contenido1 = document.querySelector("#contenido1");
    fetch("assets/data/catalogo.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // console.log(data.catalogo['0'].producto.colores[0]);
            var referencia =
                `<p>Referencia: ${data.catalogo["0"].producto.referencia}</p>`;
            var producto =
                "<h2 class='name'>Nombre: " +
                data.catalogo["1"].producto.nombre +
                "</h2>";
            var precio =
                "<p>Precio: $ " + data.catalogo["1"].producto.precio + "</p>";
            var fabricante =
                "<p>Fabricante: " + data.catalogo["1"].producto.fabricante + "</p>";
            var descripcion =
                "<p class='description'>Descripcion: " +
                data.catalogo["1"].producto.descripcion +
                "</p>";
            var foto1 =
                "<img src=" +
                data.catalogo["1"].producto.fotos[1] +
                " alt='Foto' width='250px' class ='img-fluid rounded-circle'>";
            var foto2 =
                "<img src=" +
                data.catalogo["1"].producto.fotos[2] +
                " alt='Foto' width='250px' class ='img-fluid rounded-circle'>";
            var btn1 = "<button class='btn'>Comprar</button>";
            var control1 = dibujarcontrol();
            /* var nombre = "<p>Nombre: " + data.results['0'].name.title + " " + data.results['0'].name.first + " " + data.results['0'].name.last; + "</p>"
                               var nombre = "<p>Nombre: " + data.results['0'].name.title + " " + data.results['0'].name.first + " " + data.results['0'].name.last; + "</p>"
                                 var foto ="<img src=" + data.results['0'].picture.large + " alt='Foto' width='100px' class ='img-fluid rounded-circle'>"
                                 var correo = "<p>Email: " + data.results['0'].email + "</p>" */
            contenido1.innerHTML =
                referencia +
                producto +
                precio +
                fabricante +
                descripcion +
                foto1 +
                foto2 +
                control1 +
                btn1;
        });
}

function contadorcantidad(sentido, estado) {
    var elem = document.getElementById("cantidad"); // ambito local
    //var contador = 0;
    contador = estado + 1; // contador = contador + 1;
    //console.log(contador);
    alert(contador);
    elem.textContent = contador;
    //var elem2 = document.getElementById("cantidad");
    //elem2.textContent = mensaje + " " + contador;
}

function dibujarcontrol() {
    var l1 = "<div class='control' id='control' >";
    var l2 =
        "<button class='btn' id='btnmenos' onclick='contadorcantidad('decremento', estado);'>-</button>";
    var l3 = "<span class='caja1' id='cantidad'>1</span>";
    var l4 =
        "<button class='btn' id='btnmas' onclick='contadorcantidad('incremento', estado);'>+</button> </div>";
    var control = l1 + l2 + l3 + l4;
    return control;
}

document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  });