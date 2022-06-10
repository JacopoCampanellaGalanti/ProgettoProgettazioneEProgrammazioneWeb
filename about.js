/*Funzione che sostituisce il nodo di testo vuoto con la citazione in base alla foto cliccata*/
function gestoreFoto() {

  try {
    
    var idFoto = this.id;
    var testo = FotoTesto[idFoto];
    nodoTesto.firstChild.firstChild.nodeValue = testo;
    
  } catch (e) {
    alert ("gestoreFoto " + e);
  }
}

var nodoFoto1;
var nodoFoto2;
var nodoFoto3;
var nodoTesto;
var FotoTesto;

/*Funzione che inizializza le variabili globali con i nodi presenti nel documento HTML e chiama la rispettiva funzione che dà luogo all'interazione*/
function gestoreLoad() {

  try {

    nodoFoto1 = document.getElementById("foto1");
    nodoFoto2 = document.getElementById("foto2");
    nodoFoto3 = document.getElementById("foto3");
    nodoTesto = document.getElementById("citazioni");
    nodoFoto1.onclick = gestoreFoto;
    nodoFoto2.onclick = gestoreFoto;
    nodoFoto3.onclick = gestoreFoto;

    FotoTesto = {
      foto1 : "\"L’arte narrativa è la forza culturale che predomina nel mondo. A sua volta l’arte cinematografica ne è il mezzo espressivo prevalente.\" Robert McKee",
      foto2 : "\"Il mondo possibile della narrativa è l’unico universo in cui noi possiamo essere assolutamente sicuri di qualcosa, e che ci fornisce un'idea molto forte di Verità.\" Umberto Eco",
      foto3 : "\"Non riuscirai mai a uccidere la narrazione perché è connaturata nell'uomo. Nasciamo con essa.\" Margaret Atwood"
    }
    var nodoCitazioni = document.createElement("blockquote");
    nodoTesto.appendChild(nodoCitazioni);
    var nodoTestoVuoto = document.createTextNode("");
    nodoCitazioni.appendChild(nodoTestoVuoto);
    
  } catch (e) {
    alert("gestoreLoad " + e);
  }
}

window.onload = gestoreLoad;