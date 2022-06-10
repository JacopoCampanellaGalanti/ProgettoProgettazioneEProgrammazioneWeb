/*Funzione che scorre di uno in uno in avanti automaticamente foto e testo con un certo valore di ritardo*/
/**/function cambiaFotoInAutomatico() {
/**/
/**/  try {
/**/
/**/    if (automatico) {
/**/      cambiaFoto(+1);
/**/      setTimeout(cambiaFotoInAutomatico, RITARDO);
/**/    }
/**/
/**/  } catch (e) {
/**/    alert("cambiaFotoInAutomatico " + e);
/**/  }
/**/}

//Funzione che inizia o interrompe lo scorrimento automatico di foto e testo
/**/function gestoreClickStartStop() {
/**/
/**/  try {
/**/
/**/    if (automatico) {
/**/      nodoStartStop.value = "Scorri automaticamente";
/**/      automatico = false;
/**/
/**/    } else {
/**/      nodoStartStop.value = "Stop";
/**/      automatico = true;
/**/      cambiaFotoInAutomatico();
/**/    }
/**/
/**/   } catch (e) {
/**/     alert("gestoreClickStartStop " + e);
/**/   }
/**/}

/*Funzione che scorre le foto e il testo all'indietro di uno se non è abilitato lo scorrimento automatico*/
/**/function gestoreClickIndietro() {
/**/
/**/  try {
/**/
/**/    if (!automatico) {
/**/      cambiaFoto(-1);
/**/    }
/**/
/**/  } catch (e) {
/**/    alert("gestoreClickIndietro " + e);
/**/  }
/**/}

/*Funzione che scorre le foto e il testo in avanti di uno se non è abilitato lo scorrimento automatico*/
/**/function gestoreClickAvanti() {
/**/
/**/  try {
/**/    if (!automatico) {
/**/      cambiaFoto(+1);
/**/    }
/**/
/**/  } catch (e) {
/**/    alert("gestoreClickAvanti " + e);
/**/  }
/**/}

//Funzione che seleziona la foto e il testo in base all'indice corrente
/**/function cambiaFoto(x) {
/**/
/**/  indiceFoto += x;
/**/
/**/  if (indiceFoto == numeroFoto) {
/**/    indiceFoto = 0;
/**/  }
/**/
/**/  if (indiceFoto < 0) {
/**/    indiceFoto = numeroFoto - 1;
/**/  }
/**/
      var nomiCorrenti = nomi[indiceFoto];
      var descrizioniCorrenti = descrizioni[indiceFoto];
/**/  nodoFoto.setAttribute("src", galleria[indiceFoto]);
      nodoNomi.firstChild.nodeValue = nomiCorrenti;
      nodoDescrizioni.firstChild.nodeValue = descrizioniCorrenti;
/**/}

/**/const RITARDO = 2000;
/**/var indiceFoto;
/**/var numeroFoto;
/**/var automatico;
/**/var nodoAvanti;
/**/var nodoIndietro;
/**/var nodoStartStop;
/**/var nodoFoto;
    var nodoNomi;
    var nodoDescrizioni;
    
/*Funzione che inizializza le variabili globali con i nodi presenti nel documento HTML e chiama le rispettive funzioni che danno luogo all'interazione*/
/**/function gestoreLoad() {
/**/
/**/  try {
/**/
/**/    nodoAvanti = document.getElementById("avanti");
/**/    nodoIndietro = document.getElementById("indietro");
/**/    nodoStartStop = document.getElementById("startStop");
/**/    nodoFoto = document.getElementById("foto");
        nodoNomi = document.getElementById("nomi");
        var nodoTestoVuoto1 = document.createTextNode("");
        nodoNomi.appendChild(nodoTestoVuoto1);
        nodoDescrizioni = document.getElementById("descrizioni");
        var nodoTestoVuoto2 = document.createTextNode("");
        nodoDescrizioni.appendChild(nodoTestoVuoto2);
/**/
/**/    nodoAvanti.onclick = gestoreClickAvanti;
/**/    nodoIndietro.onclick = gestoreClickIndietro;
/**/    nodoStartStop.onclick = gestoreClickStartStop;
/**/
/**/    nodoStartStop.value = "Scorri automaticamente";
/**/
/**/    numeroFoto = galleria.length;
/**/    automatico = false;
/**/    indiceFoto = 0;
/**/
/**/    cambiaFoto(0);
/**/    
/**/  } catch (e) {
/**/    alert("gestoreLoad " + e);    
/**/  }
/**/}

/**/window.onload = gestoreLoad;

//Contenuti
var galleria = [
  "images/jinx.jpg",
  "images/vi.jpg",
  "images/jayce.jpg",
  "images/caitlyn.jpg",
  "images/vander.jpg",
  "images/mel.jpg",
  "images/viktor.jpg",
  "images/silco.jpg"
]

var nomi = [
  "Jinx",
  "Vi",
  "Jayce",
  "Caitlyn",
  "Vander",
  "Mel",
  "Viktor",
  "Silco"
]

var descrizioni = [
  "Nata a Zaun con la sorella Vi, Jinx era una ragazzina tranquilla e pacifica. Dopo la morte dei genitori per mano dei soldati di Piltover, lei e la sorella vengono cresciute da Vander per le strade della città sotterranea. Inizia a condurre una vita tutto sommato tranquilla (se tranquilla si può definire la vita a Zaun), circondata dall'affetto della sorella e del padre putativo, fino alla catastrofe. Nel tentativo di salvare Vander e i suoi amici, Jinx finisce per lasciare una scia di morte che traumatizzerà la sua già fragile psiche e che la porterà, sotto la guida di Silco, a diventare una spietata assassina.",
  "Sorella maggiore di Jinx, Vi è sempre stata più forte sia caratterialmente che fisicamente della piccola Jinx. Fin da bambina, e soprattutto dopo la tragica morte dei genitori, ha sempre condotto una vita segnata da risse di strada e piccoli furti. Nonostante le sue malefatte è sempre rimasta una ragazza di buon cuore, molto protettiva nei confronti della sorella e dei suoi amici con cui aveva composto una piccola gang a Zaun. Dopo la morte dei suoi compagni e dell'amato padre adottivo Vander a causa di Jinx, Vi ha lasciato Zaun per vivere a Piltover, nella speranza, prima o poi, di riuscire a riportare alla ragione la sorella Jinx.",
  "Jayce è l'esempio perfetto di cittadino modello a Piltover. Intelligente, acuto, coraggioso, è considerato una delle promesse migliori dell'Accademia. Ben presto però si troverà a combattere con una delle più antiche nemiche dell'uomo: l'ambizione. Con l'aiuto dell'amico Viktor e con i consigli dell'amata Mel riuscirà a scavalcare i ranghi della politica e a fare scoperte che cambieranno il futuro della stessa Piltover. Ma tutto ha un prezzo e presto capirà a sue spese che le scelte determinano conseguenze non sempre prevedibili.",
  "Caitlyn proviene da una ricca famiglia di Piltover e questo l'ha sempre condizionata molto. Ha cercato continuamente di farsi valere per le sue capacità e non per i suoi soldi. Non a caso ambisce a diventare una delle più grandi sceriffe della città del progresso e per farlo è partita dai ranghi più bassi delle forze di polizia. Amica fin dall'infanzia di Jayce, presto la sua vita verrà sconvolta dall'entrata di Vi nella sua vita. Le due, così diverse, diverranno con il tempo sempre più affiatate fino a stringere un legame molto forte. Insieme cercheranno di fermare i disastri portati dalla follia di Jinx e i piani di conquista orditi da Silco.",
  "Uomo temprato dalla dura vita a Zaun, Vander trova Vi e Jinx dopo la morte dei loro genitori e decide di tenerle con sè. Famoso in tutta la città per la sua fermezza ma anche bontà, fa di tutto per cercare di tenere a freno le tensioni che si respirano tra gli abitanti della città di sopra e quella di sotto. Pian piano però, nonostante i suoi sforzi, la situazione andrà sempre a peggiorare anche a causa delle azioni del suo vecchio amico Silco, uomo bramoso di potere e di vendetta.",
  "Di nobili origini, Mel è un'abile politica e come tale nasconde luci ed ombre. Famosa per la sua imperscrutabilità, l'unico che riuscirà a penetrare la sua corazza emotiva è Jayce, in cui Mel ripone le speranze per un futuro migliore a Piltover. Cercherà in tutti i modi di mantenere la pace al crescere delle tensioni tra le due città, traumatizzata fin da piccola dagli orrori della guerra e userà la sua influenza per convincere il Consiglio ad avviarsi verso una pace duratura con Zaun. Purtroppo però sarà Jinx a scombinare tutti i piani.",
  "Viktor è cresciuto tra i fumi di Zaun, continuamente afflitto da problemi di salute. Dove il corpo non poteva arrivare però, arrivava la sua geniale mente e ben presto lascierà la città d'origine per studiare nella prestigiosa Accademia di Piltover. Non ci vorrà molto prima che Viktor stringa con Jayce un'amicizia duratura nonostante le grandi differenze caratteriali, grazie soprattutto alla complicità nata tra le aule dell'Accademia dove le loro menti fuori dal comune potevano esprimersi al meglio. Insieme riusciranno a scoprire un qualcosa di incredibile che cambierà la vita della città di Piltover e la loro stessa vita in maniera inaspettata.",
  "Un tempo Silco si considerava quasi un fratello di Vander, adesso lo guarda con odio. Insieme avevano a lungo combattuto per la città di Zaun e per evitare gli abusi che spesso venivano perpetrati dalla polizia di Piltover sugli abitanti della città sotteranea. A un certo punto però gli ideali di Silco e Vander cominciarono a divergere, l'uno spinto verso l'ambizione e la voglia di prevaricare a tutti i costi su Piltover, l'altro verso una soluzione più diplomatica. Vander arrivò quasi a ucciderlo, ma Silco sopravvisse, anche se rimase sfigurato per sempre. La sua strada si incrocierà con quella di Jinx, grazie alla quale proverà un sentimento mai provato prima, l'affetto per una figlia."
]
