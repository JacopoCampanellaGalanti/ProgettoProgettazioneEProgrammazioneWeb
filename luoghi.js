//Funzione che cambia lo stile del cursore se passa su un'area cliccabile
/**/function gestoreCursore() {
/**/
/**/  try {
/**/
/**/    this.style.cursor = "pointer";
/**/
/**/  } catch (e) {
/**/    alert("gestoreCursore " + e);
/**/  }
/**/}

//Funzione che sostituisce il nodo di testo vuoto con i contenuti
/**/function scriviMessaggio(nodo, messaggio) { 
/**/
/**/     var nodoTesto = document.createTextNode(messaggio);
/**/
/**/     nodo.replaceChild(nodoTesto, nodo.firstChild);
         nodo.style.animation = "slideIn 3s";
/**/}

//Funzione che restituisce il contenuto in base all'area cliccata
/**/function gestoreClickArea() {
/**/
/**/  try {
/**/
/**/    scriviMessaggio(nodoNomi, nomi[this.id]);
/**/       
        var nodoImg = document.createElement("img");
        nodoFoto.appendChild(nodoImg);
        nodoImg.src = foto[this.id];
        nodoImg.alt = "Immagine del luogo";
        nodoFoto.replaceChild(nodoImg, nodoFoto.firstChild);

        scriviMessaggio(nodoDescrizioni, descrizioni[this.id]); 
/**/
/**/  } catch (e) {
/**/    alert("gestoreClickArea " + e);
/**/  }
/**/}

/*Funzione che riadatta le coordinate delle aree cliccabili in base alla dimensione della finestra*/
/**/function gestoreResize() {
/**/
/**/  try {
/**/
/**/    var attualeDimensioneFoto = nodoAmbienti.width;
/**/    var ratio = attualeDimensioneFoto / dimensioneFoto;
/**/
/**/    for (var i = 0; i < nodiArea.length; i++) {
/**/      for (var j = 0; j < coordinateAree[i].length; j++) {
/**/        coordinateAree[i][j] *= ratio;
/**/      }
/**/      nodiArea[i].coords = coordinateAree[i].join(',');
/**/    }
/**/
/**/    dimensioneFoto = attualeDimensioneFoto;
/**/
/**/  } catch (e) {
/**/    alert("gestoreResize " + e);
/**/  }
/**/}

/**/const LARGHEZZA_FOTO = 600;
/**/var nodoAmbienti;
/**/var nodoNomi;
    var nodoFoto;
    var nodoDescrizioni;
/**/var nodiArea;
/**/var coordinateAree;
/**/var dimensioneFoto;

/*Funzione che inizializza le variabili globali con i nodi presenti nel documento HTML e chiama le rispettive funzioni che danno luogo all'interazione*/
/**/function gestoreLoad() {
/**/
/**/  try {
/**/
/**/    nodiArea = document.getElementsByTagName("area");
/**/    nodoAmbienti = document.getElementById("ambienti");
/**/    nodoNomi = document.getElementById("nomi");
        nodoFoto = document.getElementById("foto");
        nodoDescrizioni = document.getElementById("descrizioni");
/**/
/**/    coordinateAree = [];
/**/    for (var i = 0; i < nodiArea.length; i++) {
/**/      var nodoArea = nodiArea[i];
/**/      nodoArea.onclick = gestoreClickArea;
/**/      nodoArea.onmouseover = gestoreCursore;
/**/      coordinateAree[i] = nodoArea.coords.split(',');
/**/    }
/**/
/**/    dimensioneFoto = LARGHEZZA_FOTO;
/**/    var nodoTesto1 = document.createTextNode("");
/**/    nodoNomi.appendChild(nodoTesto1);
        var nodoTesto2 = document.createTextNode("");
        nodoDescrizioni.appendChild(nodoTesto2);
/**/
/**/    window.onresize = gestoreResize;
/**/    gestoreResize();
/**/
/**/  } catch (e) {
/**/    alert("gestoreLoad " + e);
/**/  }
/**/}

/**/window.onload = gestoreLoad;

//Contenuti
var nomi = [
  "Fabbrica di Shimmer",
  "Rifugio di Silco",
  "Laboratorio",
  "Sede del Consiglio",
  "Locanda di Vander",
  "Casa di Caitlyn",
  "Accademia",
  "Prigione di Piltover"
]

var foto = [
  "images/fabbrica.jpg", 
  "images/rifugio.jpg",
  "images/laboratorio.jpg",
  "images/consiglio.jpg",
  "images/locanda.jpg",
  "images/casa.jpg",
  "images/accademia.jpg",
  "images/prigione.jpg"
]

var descrizioni = [
    "Sede principale della creazione e distribuzione di Shimmer, una nuova droga che aumenta le capacità fisiche temporaneamente al costo di un degradamento fisico graduale. Silco ne produce in massa al fine di creare un esercito personale mentre pianifica un'invasione di Piltover. Purtroppo però la droga finisce per i vicoli di Zaun aumentando la disperazione di una popolazione già afflitta dalla miseria.",
    "Luogo principale delle attività di Silco. Apparentemente sembra un normale bar ma è sul retro che si concentra la maggior parte del reale lavoro. Corruzione, inganno e minacce sono all'ordine del giorno. Jinx verrà ospitata qui da Silco dopo la sua separazione dalla sorella Vi.",
    "Qui è stato scoperto lo Shimmer, la nuova droga di Zaun, ma anche altre terribili armi chimiche. Gli studi che avvengono nel Laboratorio sono in gran parte finanziati da Silco e da altri potenti baroni di Zaun. Chi passa vicino al laboratorio spesso crede di sentire delle urla tremende e chi è così coraggioso (o così sciocco) da avventurarsi all'interno spesso non fa ritorno.",
    "Punto focale dell'attività politica di Piltover. Qui si riuniscono i senatori per prendere le maggiori decisioni relative alla politica cittadina. Luogo sfarzoso tanto quanto gli abiti di cammina per quelle sale, è visto come una meraviglia architettonica e tecnologica. È situato al centro della città ed è il punto più alto, scelta sicuramente non casuale.",
    "L'accogliente locanda di Vander famosa in tutta Zaun. È uno dei pochi luoghi rimasti dove si può trovare pace e tranquillità. Vi e Jinx verranno a vivere qui dopo la morte dei genitori e formeranno con altri ragazzi locali una piccola gang per le loro scorribande. Non è raro vedere agenti di polizia di Piltover prendere da bere e rifocillarsi dopo i loro frequenti pattugliamenti nella città sotteranea.",
    "Casa della ricca famiglia Kiramman, o per meglio dire, villa. Nelle enormi stanze così ben arredate, Caitlyn si è sempre sentita sola ed esclusa dal mondo. Solo quando incontrerà Jayce alle porte della villa per la prima volta troverà qualcuno con cui condividere qualcosa. Alla casa dei Kiramman farà visita successivamente Jinx, con intenzioni tutt'altro che nobili.",
    "Tutte le migliori menti di Piltover si sono formate all'Accademia. Luogo spesso considerato elitario, in realtà garantisce l'accesso agli studi a tutti coloro che ne dimostrino le capacità, come ad esempio è successo con Viktor. Qui Viktor e Jayce condurrano molti degli esperimenti che porteranno a un'incredibile evoluzione tecnologica Piltover. Spesso i membri dell'Accademia fanno anche parte del Consiglio, cosa che non viene vista di buon occhio da chi crede nell'imparzialità della ricerca scientifica.",
    "Anche la più buia cella della prigione a Piltover non è paragonabile a un vicolo di Zaun. Almeno questo è quello che ha pensato Vi dopo essere stata arrestata a causa delle trame di Silco. L'ampiezza della prigione è impressionante ed è tatticamente situata in un'isola separata dalla città. L'unica cosa che la collega è un ponte strettamente sorvegliato dalle forze di polizia, dove tragicamente hanno perso la vita molti abitanti di Zaun, tra cui i genitori di Jinx e Vi."
]
