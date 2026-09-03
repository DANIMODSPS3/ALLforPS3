// Buscador simple - PS3 DANIMODS ALL
// Compatible con JavaScript basico del navegador de PS3

function buscarTema() {
  var input = document.getElementById("searchInput");
  if (!input) return;
  var texto = input.value.toLowerCase();
  var cajas = document.getElementsByClassName("theme-box");
  for (var i = 0; i < cajas.length; i++) {
    var celda = cajas[i].parentNode;
    var titulo = cajas[i].getElementsByTagName("h3")[0].innerHTML.toLowerCase();
    if (titulo.indexOf(texto) !== -1) {
      celda.style.display = "";
    } else {
      celda.style.display = "none";
    }
  }
}
