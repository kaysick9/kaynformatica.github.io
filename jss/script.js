const categoria = document.getElementById("categoria");
const lista = document.getElementById("lista");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const enviar = document.getElementById("enviar");
const resultado = document.querySelector(".resultado")

var hi = function() {
    let elemento = document.getElementById("hi");
}

var getData = function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    console.log(name + " " + email + " " + message);

}

var stx = function(titulo, a) {
    let rmpl = document.getElementById("select");
    rmpl.innerHTML = titulo;
    parf(a);
}
var parf = function(a) {
    var frame = document.getElementById("frame");
    if (a == 1) {
        frame.src = 'intro.html'
        console.log("1")
    }
    if (a == 2) {
        frame.src = 'comenzar.html'
        console.log("2")
    }
    if (a == 3) {
        frame.src = 'sintx.html'
        console.log("3")
    }
}

















inicio.addEventListener("click", (e) => {
    e.preventDefault();
    tom();
})


categoria.addEventListener("click", () => {
    alert("Categoria")
})

lista.addEventListener("click", () => {
    alert("Lista")
})