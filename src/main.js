import { Renderer, Stave, StaveNote, Formatter, Annotation, BarNote, StaveConnector, Accidental, Beam, Dot, StaveTie } from "vexflow";
import { NIVELES_PRACTICA } from "./programa.js";
import * as Tone from "tone";
import "./style.css";

// Las siete notas de la escala. El indice coincide con LETRAS, que es como
// las nombra VexFlow. "id" es el identificador interno, nunca se traduce.
const ESCALA = ["do", "re", "mi", "fa", "sol", "la", "si"];
const LETRAS = ["c", "d", "e", "f", "g", "a", "b"];

// Numero de orden de una nota escrita, contando grados de la escala desde el
// do de la octava 0. Sirve para construir rangos y para saber a que altura se
// dibuja cada nota sobre el pentagrama.
function gradoDeNota(vexKey) {
  const [letra, octava] = vexKey.split("/");
  return Number(octava) * 7 + LETRAS.indexOf(letra);
}

function notaDeGrado(grado) {
  const posicion = grado % 7;
  return { id: ESCALA[posicion], vex: `${LETRAS[posicion]}/${Math.floor(grado / 7)}` };
}

// Todas las notas entre dos extremos, ambos incluidos.
function construirRango(desde, hasta) {
  const notas = [];
  for (let grado = gradoDeNota(desde); grado <= gradoDeNota(hasta); grado += 1) {
    notas.push(notaDeGrado(grado));
  }
  return notas;
}

// Nota que cae sobre la linea inferior del pentagrama en cada clave.
const LINEA_INFERIOR = { treble: "e/4", bass: "g/2" };

// Las dos claves y sus cuatro niveles. Se puede entrar directamente a
// cualquier nivel: no hay nada que desbloquear.
const CLAVES = [
  {
    id: "fa",
    clef: "bass",
    niveles: [
      { id: "inicial1", desde: "f/3", hasta: "c/4" },
      { id: "inicial2", desde: "c/3", hasta: "g/3" },
      { id: "intermedio", desde: "f/2", hasta: "c/3" },
      { id: "avanzado1", desde: "c/4", hasta: "g/4" },
      { id: "avanzado2", desde: "c/2", hasta: "f/2" },
    ],
  },
  {
    id: "sol",
    clef: "treble",
    niveles: [
      { id: "inicial1", desde: "c/4", hasta: "g/4" },
      { id: "inicial2", desde: "g/4", hasta: "c/5" },
      { id: "intermedio", desde: "c/5", hasta: "g/5" },
      { id: "avanzado1", desde: "g/5", hasta: "e/6" },
      { id: "avanzado2", desde: "g/3", hasta: "c/4" },
    ],
  },
];

let claveActual = CLAVES[0];
let nivelActual = claveActual.niveles[0];
// Notas del nivel que se esta practicando.
let notasNivel = construirRango(nivelActual.desde, nivelActual.hasta);

// Botones de respuesta: las siete notas (identificadores internos, orden base).
const BOTONES_ID = ["do", "re", "mi", "fa", "sol", "la", "si"];

const NOTAS_POR_RONDA = 10;
const EJERCICIOS_POR_SERIE = 3;
const TOTAL_SERIES = 2;
const TOTAL_EJERCICIOS = TOTAL_SERIES * EJERCICIOS_POR_SERIE;

const IDIOMA_GUARDADO_KEY = "piano-lectura-idioma";

const TRADUCCIONES = {
  es: {
    tituloPagina: "Clase de piano",
    programaTitulo: "Aprende y mejora tu técnica de piano con Alicia",
    programas: {
      lectura: { nombre: "Lectura", descripcion: "Leer notas en el pentagrama" },
      practica: { nombre: "Lecciones de piano", descripcion: "Teoría, lectura, técnica y repertorio" },
    },
    practicaNivelTitulo: "Elige un nivel",
    practicaEnPreparacion: "En preparación",
    practicaCursoTitulo: (n) => `Curso ${n}`,
    practicaCuentaCursos: (n, total) => `${n} de ${total} cursos preparados`,
    referenciaEn: "En tu método",
    teoriaTitulo: "Teoría",
    clases: { teoria: "Teoría", dibujada: "Técnica", referencia: "Método", lectura: "Lectura" },
    conceptosTitulo: "Conceptos",
    tecnicaTitulo: "Ejercicios de piano",
    ejercicioAnterior: "Anterior",
    ejercicioSiguiente: "Siguiente",
    ejercicioPosicion: (n, total) => `${n} de ${total}`,
    compasArriba: "cuántos tiempos hay en cada compás",
    compasAbajo: "qué figura vale un tiempo",
    compasEquivalencia: "El número de abajo, figura por figura:",
    manos: { izquierda: "Mano izquierda", derecha: "Mano derecha" },
    nombresFiguras: {
      redonda: ["redonda", "redondas"], blanca: ["blanca", "blancas"], negra: ["negra", "negras"],
      corchea: ["corchea", "corcheas"], semicorchea: ["semicorchea", "semicorcheas"],
    },
    nombresSilencios: {
      redonda: ["de redonda", "de redonda"], blanca: ["de blanca", "de blanca"],
      negra: ["de negra", "de negra"], corchea: ["de corchea", "de corchea"],
      semicorchea: ["de semicorchea", "de semicorchea"],
    },
    tiemposFiguras: {
      redonda: "4 tiempos", blanca: "2 tiempos", negra: "1 tiempo",
      corchea: "medio tiempo", semicorchea: "un cuarto de tiempo",
    },
    irALectura: "Practicar en Lectura",
    lecturaEn: (clave, nivel) => `${clave} · ${nivel}`,
    lecturaPapel: { nuevas: "Notas nuevas", afianzar: "Afianzar" },
    comoTrabajarlo: "Cómo trabajarlo",
    portadaTitulo: "Ejercicios de lectura",
    portadaObjetivo:
      "Reconocer de un vistazo el nombre de cada nota escrita, sin contar líneas. Es la base para leer una partitura con soltura.",
    consisteTitulo: "En qué consiste",
    consisteTexto:
      "Ves una nota en el pentagrama y pulsas su nombre. Si aciertas, la oyes sonar y llega la siguiente. Si fallas, se queda hasta que la encuentres.",
    sesionTitulo: "Cómo es una sesión",
    sesionLista: [
      "10 segundos para memorizar las notas del nivel",
      "2 series de 3 ejercicios, 10 notas cada uno",
      "La serie 2 sube el listón: saltos mayores y botones desordenados",
      "Al final, una tabla con el resultado de los 6",
    ],
    medidasTitulo: "Qué puedes mejorar",
    medidasLista: ["Precisión", "Tiempo", "Racha", "Estrellas"],
    menuClaveTitulo: "¿Qué clave quieres practicar?",
    menuNivelTitulo: "Elige un nivel",
    atras: "Atrás",
    claves: { sol: "Clave de sol", fa: "Clave de fa" },
    cuentaNiveles: (n) => `${n} niveles`,
    niveles: {
      inicial1: "Inicial 1",
      inicial2: "Inicial 2",
      intermedio: "Intermedio",
      avanzado1: "Avanzado 1",
      avanzado2: "Avanzado 2",
    },
    rangos: {
      sol: {
        inicial1: "do central a sol",
        inicial2: "sol a do alto",
        intermedio: "do alto a sol alto",
        avanzado1: "sol alto a mi, con líneas adicionales",
        avanzado2: "sol grave a do central",
      },
      fa: {
        inicial1: "fa a do central",
        inicial2: "do a sol",
        intermedio: "fa grave a do",
        avanzado1: "do central a sol, con líneas adicionales",
        avanzado2: "do grave a fa grave",
      },
    },
    aciertos: "Aciertos",
    fallos: "Fallos",
    racha: "Racha",
    iniciarSesion: "Empezar",
    pausar: "Pausar",
    reanudar: "Reanudar",
    reiniciarSesion: "Reiniciar",
    indicadorEjercicio: (n, total, serie) => `Ejercicio ${n} de ${total} (Serie ${serie})`,
    memorizaTitulo: "Memoriza estas notas",
    ejercicioCompletado: (n, total) => `Ejercicio ${n} de ${total} completado`,
    serieCompletada: (n) => `¡Serie ${n} completada!`,
    sesionCompletada: "¡Sesión completada!",
    siguienteEjercicio: "Siguiente ejercicio",
    empezarSerie: (n) => `Empezar serie ${n}`,
    leyendaEstrellas: "0 fallos = 3 estrellas · 1-2 fallos = 2 · 3-4 fallos = 1",
    otraVez: "Otra vez",
    notas: { do: "do", re: "re", mi: "mi", fa: "fa", sol: "sol", la: "la", si: "si" },
    precision: (p) => `Precisión: ${p}%`,
    detalle: (n, f) => `(${n} notas, ${f} fallos)`,
    tiempo: (texto) => `Tiempo: ${texto}`,
    rachaMaxima: (r) => `Racha máxima: ${r}`,
    tiempoMin: (m, s) => `${m} min ${s} s`,
    tiempoSeg: (s) => `${s} s`,
    columnaSerie: "Serie",
    columnaEjercicio: "Ejercicio",
    columnaAciertos: "Aciertos",
    columnaFallos: "Fallos",
    columnaEstrellas: "Estrellas",
    columnaTiempo: "Tiempo",
    total: "Total",
  },
  fr: {
    tituloPagina: "Cours de piano",
    programaTitulo: "Apprends et améliore ta technique de piano avec Alicia",
    programas: {
      lectura: { nombre: "Lecture", descripcion: "Reconnaître les notes sur la portée" },
      practica: { nombre: "Leçons de piano", descripcion: "Théorie, lecture, technique et répertoire" },
    },
    practicaNivelTitulo: "Choisis un niveau",
    practicaEnPreparacion: "En préparation",
    practicaCursoTitulo: (n) => `Cours ${n}`,
    practicaCuentaCursos: (n, total) => `${n} cours sur ${total} disponibles`,
    referenciaEn: "Dans ta méthode",
    teoriaTitulo: "Théorie",
    clases: { teoria: "Théorie", dibujada: "Technique", referencia: "Méthode", lectura: "Lecture" },
    conceptosTitulo: "Notions",
    tecnicaTitulo: "Exercices au piano",
    ejercicioAnterior: "Précédent",
    ejercicioSiguiente: "Suivant",
    ejercicioPosicion: (n, total) => `${n} sur ${total}`,
    compasArriba: "combien de temps par mesure",
    compasAbajo: "quelle figure vaut un temps",
    compasEquivalencia: "Le chiffre du bas, figure par figure :",
    manos: { izquierda: "Main gauche", derecha: "Main droite" },
    nombresFiguras: {
      redonda: ["ronde", "rondes"], blanca: ["blanche", "blanches"], negra: ["noire", "noires"],
      corchea: ["croche", "croches"], semicorchea: ["double croche", "doubles croches"],
    },
    nombresSilencios: {
      redonda: ["de ronde", "de ronde"], blanca: ["de blanche", "de blanche"],
      negra: ["de noire", "de noire"], corchea: ["de croche", "de croche"],
      semicorchea: ["de double croche", "de double croche"],
    },
    tiemposFiguras: {
      redonda: "4 temps", blanca: "2 temps", negra: "1 temps",
      corchea: "un demi-temps", semicorchea: "un quart de temps",
    },
    irALectura: "Passer à la lecture",
    lecturaEn: (clave, nivel) => `${clave} · ${nivel}`,
    lecturaPapel: { nuevas: "Notes nouvelles", afianzar: "Consolider" },
    comoTrabajarlo: "Comment le travailler",
    portadaTitulo: "Exercices de lecture",
    portadaObjetivo:
      "Reconnaître d'un coup d'œil le nom de chaque note écrite, sans avoir à compter les lignes. C'est ce qui permet de lire une partition avec aisance.",
    consisteTitulo: "Le principe",
    consisteTexto:
      "Une note apparaît sur la portée ; tu appuies sur le bouton portant son nom. Si tu as juste, tu l'entends sonner et la suivante arrive. Sinon, elle reste affichée jusqu'à ce que tu la trouves.",
    sesionTitulo: "Le déroulement",
    sesionLista: [
      "10 secondes pour mémoriser les notes du niveau",
      "2 séries de 3 exercices, 10 notes chacun",
      "La série 2 monte d'un cran : intervalles plus larges et boutons dans le désordre",
      "Un tableau récapitulatif des six exercices pour finir",
    ],
    medidasTitulo: "Tes progrès",
    medidasLista: ["Précision", "Temps", "Enchaînement", "Étoiles"],
    menuClaveTitulo: "Quelle clé veux-tu travailler ?",
    menuNivelTitulo: "Choisis un niveau",
    atras: "Retour",
    claves: { sol: "Clé de sol", fa: "Clé de fa" },
    cuentaNiveles: (n) => `${n} niveaux`,
    niveles: {
      inicial1: "Débutant 1",
      inicial2: "Débutant 2",
      intermedio: "Intermédiaire",
      avanzado1: "Avancé 1",
      avanzado2: "Avancé 2",
    },
    rangos: {
      sol: {
        inicial1: "du do central au sol",
        inicial2: "du sol au do aigu",
        intermedio: "du do aigu au sol aigu",
        avanzado1: "du sol aigu au mi, avec lignes supplémentaires",
        avanzado2: "du sol grave au do central",
      },
      fa: {
        inicial1: "du fa au do central",
        inicial2: "du do au sol",
        intermedio: "du fa grave au do",
        avanzado1: "du do central au sol, avec lignes supplémentaires",
        avanzado2: "du do grave au fa grave",
      },
    },
    aciertos: "Réussites",
    fallos: "Erreurs",
    racha: "Enchaînement",
    iniciarSesion: "Commencer",
    pausar: "Pause",
    reanudar: "Reprendre",
    reiniciarSesion: "Recommencer",
    indicadorEjercicio: (n, total, serie) => `Exercice ${n} sur ${total} (Série ${serie})`,
    memorizaTitulo: "Mémorise ces notes",
    ejercicioCompletado: (n, total) => `Exercice ${n} sur ${total} terminé`,
    serieCompletada: (n) => `Série ${n} terminée !`,
    sesionCompletada: "Session terminée !",
    siguienteEjercicio: "Exercice suivant",
    empezarSerie: (n) => `Commencer la série ${n}`,
    leyendaEstrellas: "0 erreur = 3 étoiles · 1 ou 2 erreurs = 2 · 3 ou 4 erreurs = 1",
    otraVez: "Encore",
    notas: { do: "do", re: "ré", mi: "mi", fa: "fa", sol: "sol", la: "la", si: "si" },
    precision: (p) => `Précision : ${p}%`,
    detalle: (n, f) => `(${n} notes, ${f} erreurs)`,
    tiempo: (texto) => `Temps : ${texto}`,
    rachaMaxima: (r) => `Meilleur enchaînement : ${r}`,
    tiempoMin: (m, s) => `${m} min ${s} s`,
    tiempoSeg: (s) => `${s} s`,
    columnaSerie: "Série",
    columnaEjercicio: "Exercice",
    columnaAciertos: "Réussites",
    columnaFallos: "Erreurs",
    columnaEstrellas: "Étoiles",
    columnaTiempo: "Temps",
    total: "Total",
  },
};

let idioma = localStorage.getItem(IDIOMA_GUARDADO_KEY) || "es";

function t() {
  return TRADUCCIONES[idioma];
}

const botonesIdioma = document.querySelectorAll(".boton-idioma");
const etiquetaAciertosEl = document.getElementById("etiqueta-aciertos");
const etiquetaFallosEl = document.getElementById("etiqueta-fallos");
const etiquetaRachaEl = document.getElementById("etiqueta-racha");
const contenedorPentagrama = document.getElementById("pentagrama");
const contenedorBotones = document.getElementById("botones");
const contadorAciertosEl = document.getElementById("contador-aciertos");
const contadorFallosEl = document.getElementById("contador-fallos");
const contadorRachaEl = document.getElementById("contador-racha");
const indicadorEjercicioEl = document.getElementById("indicador-ejercicio");
const marcadorEl = document.getElementById("marcador");
const indicadorNivelEl = document.getElementById("indicador-nivel");
const menuClaveEl = document.getElementById("menu-clave");
const menuProgramaEl = document.getElementById("menu-programa");
const programaTituloEl = document.getElementById("programa-titulo");
const menuProgramaOpcionesEl = document.getElementById("menu-programa-opciones");
const practicaNivelEl = document.getElementById("practica-nivel");
const practicaNivelTituloEl = document.getElementById("practica-nivel-titulo");
const practicaNivelOpcionesEl = document.getElementById("practica-nivel-opciones");
const practicaCursoEl = document.getElementById("practica-curso");
const practicaCursoTituloEl = document.getElementById("practica-curso-titulo");
const practicaCursoOpcionesEl = document.getElementById("practica-curso-opciones");
const practicaListaEl = document.getElementById("practica-lista");
const practicaListaTituloEl = document.getElementById("practica-lista-titulo");
const practicaListaEjerciciosEl = document.getElementById("practica-lista-ejercicios");
const practicaEjercicioEl = document.getElementById("practica-ejercicio");
const ejercicioTituloEl = document.getElementById("ejercicio-titulo");
const ejercicioClaseEl = document.getElementById("ejercicio-clase");
const ejercicioContenidoEl = document.getElementById("ejercicio-contenido");
const ejercicioNavegacionEl = document.getElementById("ejercicio-navegacion");
const portadaTituloEl = document.getElementById("portada-titulo");
const portadaObjetivoEl = document.getElementById("portada-objetivo");
const consisteTituloEl = document.getElementById("portada-consiste-titulo");
const consisteTextoEl = document.getElementById("portada-consiste-texto");
const sesionTituloEl = document.getElementById("portada-sesion-titulo");
const sesionListaEl = document.getElementById("portada-sesion-lista");
const medidasTituloEl = document.getElementById("portada-medidas-titulo");
const medidasListaEl = document.getElementById("portada-medidas-lista");
const menuClaveTituloEl = document.getElementById("menu-clave-titulo");
const menuClaveOpcionesEl = document.getElementById("menu-clave-opciones");
const menuNivelEl = document.getElementById("menu-nivel");
const menuNivelTituloEl = document.getElementById("menu-nivel-titulo");
const menuNivelOpcionesEl = document.getElementById("menu-nivel-opciones");
const botonAtras = document.getElementById("boton-atras");
const progresoPuntosEl = document.getElementById("progreso-puntos");
const botonEstado = document.getElementById("boton-estado");
const botonReiniciarSesion = document.getElementById("boton-reiniciar-sesion");
const memorizacionEl = document.getElementById("memorizacion");
const memorizacionTextoEl = document.getElementById("memorizacion-texto");
const contadorRegresivoEl = document.getElementById("contador-regresivo");
const zonaEjercicio = document.getElementById("zona-ejercicio");
const resultadoEl = document.getElementById("resultado");
const resultadoTituloEl = document.getElementById("resultado-titulo");
const resultadoEstrellasEl = document.getElementById("resultado-estrellas");
const leyendaEstrellasEl = document.getElementById("leyenda-estrellas");
const resultadoPrecisionEl = document.getElementById("resultado-precision");
const resultadoDetalleEl = document.getElementById("resultado-detalle");
const resultadoTiempoEl = document.getElementById("resultado-tiempo");
const resultadoRachaEl = document.getElementById("resultado-racha");
const tablaSesionContenedorEl = document.getElementById("tabla-sesion-contenedor");
const botonContinuar = document.getElementById("boton-continuar");
const feedbackIconoEl = document.getElementById("feedback-icono");

const DURACION_FEEDBACK = 500;
const SEGUNDOS_MEMORIZACION = 10;

// estados posibles:
//   "menu-programa"                      raiz: lectura o practica
//   "menu-clave", "menu-nivel", "inicio", "memorizando", "jugando",
//   "pausado", "terminado"               programa de lectura
//   "practica-nivel", "practica-curso", "practica-lista", "practica-ejercicio"
let estado = "menu-programa";

let nivelPractica = null;
let cursoPractica = null;
// Si se entra a la lectura desde un curso de practica, se guarda para poder
// volver a el desde cualquier pantalla del ejercicio.
let origenLectura = null;
let ejercicioPractica = null;
// Que fila de la lista del curso se esta viendo, para poder ir adelante y atras.
let filaPractica = 0;
let cuentaAtrasIntervalId = null;

let aciertos = 0;
let fallos = 0;
let notasCompletadas = 0;
let racha = 0;
let rachaMaxima = 0;
let notaActual = null;
let notaActualIndice = null;
let botonesNota = [];
let ordenBotonesVisible = [...BOTONES_ID];
let puntosProgreso = [];
// Guarda como se resolvio cada nota de la ronda ("limpio" o "con-fallo") para
// pintar los puntos de progreso.
let resultadosRonda = [];
let falloEnNotaActual = false;

let serieActual = 1;
let ejercicioActual = 1;
let indiceEjercicioGlobal = 0;
let resultadosSesion = [];

let tiempoInicio = null;
let tiempoPausadoAcumulado = 0;
let tiempoPausaInicio = null;

const synth = new Tone.Synth().toDestination();
const synthFallo = new Tone.Synth({
  oscillator: { type: "sine" },
  envelope: { attack: 0.005, decay: 0.1, sustain: 0, release: 0.1 },
}).toDestination();
let audioListo = false;

async function asegurarAudio() {
  if (audioListo) return;

  // El sonido es un extra. Si el navegador no deja arrancarlo, o tarda, la
  // partida tiene que seguir igualmente: nunca nos quedamos esperando.
  try {
    await Promise.race([
      Tone.start(),
      new Promise((listo) => setTimeout(listo, 1000)),
    ]);
  } catch (error) {
    console.warn("No se ha podido arrancar el audio:", error);
  }

  audioListo = true;
}

function vibrar(duracionMs) {
  if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
    navigator.vibrate(duracionMs);
  }
}

function barajar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Cada 5 notas se permite un salto más grande entre la nota anterior y la
// siguiente. La serie 2 es más difícil: empieza directamente dos niveles
// más arriba, sin la fase inicial fácil de solo notas vecinas.
function saltoMaximoPermitido(indiceNota) {
  const nivelBase = serieActual === 2 ? 2 : 0;
  const nivel = nivelBase + Math.floor(indiceNota / 5);
  return Math.min(nivel + 1, notasNivel.length - 1);
}

function elegirSiguienteNotaIndice(indiceAnterior, indiceRonda) {
  if (indiceAnterior === null) {
    return Math.floor(Math.random() * notasNivel.length);
  }

  const saltoMaximo = saltoMaximoPermitido(indiceRonda);
  const candidatos = [];
  for (let i = 0; i < notasNivel.length; i += 1) {
    if (i === indiceAnterior) continue;
    if (Math.abs(i - indiceAnterior) <= saltoMaximo) candidatos.push(i);
  }

  return candidatos[Math.floor(Math.random() * candidatos.length)];
}

function elegirSiguienteNota() {
  notaActualIndice = elegirSiguienteNotaIndice(notaActualIndice, notasCompletadas);
  notaActual = notasNivel[notaActualIndice];
  falloEnNotaActual = false;
}

// Recorta el dibujo a la zona util (clave, lineas y notas) y lo deja sin
// medidas fijas, para que la tarjeta lo agrande hasta llenarla. Los margenes
// se calculan desde las lineas del pentagrama, asi que la posicion es siempre
// la misma aunque cambie la nota.
const MARGEN_CLAVE = 22; // lo que sobresale el dibujo de la clave
const MARGEN_NOTA = 14; // cabeza de la nota y su linea adicional

// El silencio de redonda cuelga de la cuarta linea y el resto se apoyan en la
// central, contando siempre desde la linea inferior de la clave que sea.
function alturaSilencio(figura, clef) {
  const pasos = figura === "w" ? 6 : 4;
  return notaDeGrado(gradoDeNota(LINEA_INFERIOR[clef]) + pasos).vex;
}

// Altura a la que cae una nota escrita sobre este pentagrama.
function yDeNota(pentagrama, vexKey, clef) {
  const pasos = gradoDeNota(vexKey) - gradoDeNota(LINEA_INFERIOR[clef]);
  return pentagrama.getYForLine(4) - pasos * 5;
}

function encuadrarPentagrama(contenedor, pentagrama, opciones = {}) {
  const { notas = notasNivel, clef = claveActual.clef, margenAbajoExtra = 0 } = opciones;
  const svg = contenedor.querySelector("svg");
  if (!svg) return;

  // El encuadre se calcula con las notas extremas del nivel, nunca con la
  // nota que toca ahora: asi el pentagrama no salta entre preguntas aunque
  // unas notas esten mucho mas altas que otras.
  let arriba = pentagrama.getYForLine(0) - MARGEN_CLAVE;
  let abajo = pentagrama.getYForLine(4) + MARGEN_CLAVE;

  if (notas.length > 0) {
    const yMasAguda = yDeNota(pentagrama, notas[notas.length - 1].vex, clef);
    const yMasGrave = yDeNota(pentagrama, notas[0].vex, clef);
    arriba = Math.min(arriba, yMasAguda - MARGEN_NOTA);
    abajo = Math.max(abajo, yMasGrave + MARGEN_NOTA);
  }

  abajo += margenAbajoExtra;
  const izquierda = pentagrama.getX() - 6;
  const ancho = pentagrama.getWidth() + 12;

  svg.setAttribute("viewBox", `${izquierda} ${arriba} ${ancho} ${abajo - arriba}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.removeAttribute("width");
  svg.removeAttribute("height");
  // VexFlow deja un ancho y alto fijos en el propio elemento; los quitamos
  // para que mande el CSS y el dibujo se estire hasta llenar la tarjeta.
  svg.style.width = "100%";
  svg.style.height = "auto";
}

function dibujarPentagrama() {
  contenedorPentagrama.innerHTML = "";
  contenedorPentagrama.classList.remove("fallo", "acierto");

  const renderer = new Renderer(contenedorPentagrama, Renderer.Backends.SVG);
  renderer.resize(500, 240);
  const contexto = renderer.getContext();

  const pentagrama = new Stave(0, 40, 155);
  pentagrama.addClef(claveActual.clef);
  pentagrama.setContext(contexto).draw();

  // La clave hay que indicarsela tambien a la nota: si no, VexFlow la coloca
  // en la altura que le tocaria en clave de sol.
  const nota = new StaveNote({
    keys: [notaActual.vex],
    duration: "w",
    clef: claveActual.clef,
  });

  Formatter.FormatAndDraw(contexto, pentagrama, [nota]);
  encuadrarPentagrama(contenedorPentagrama, pentagrama);
}

// Muestra todas las notas del nivel a la vez, con su nombre debajo, para que
// el alumno las memorice antes de empezar el ejercicio.
function mostrarPentagramaCompleto() {
  contenedorPentagrama.innerHTML = "";
  contenedorPentagrama.classList.remove("fallo", "acierto");

  const renderer = new Renderer(contenedorPentagrama, Renderer.Backends.SVG);
  renderer.resize(500, 260);
  const contexto = renderer.getContext();

  // El ancho crece con el numero de notas del nivel, que no siempre son cinco.
  const pentagrama = new Stave(0, 40, 60 + notasNivel.length * 56);
  pentagrama.addClef(claveActual.clef);
  pentagrama.setContext(contexto).draw();

  const notasStave = notasNivel.map((nota) => {
    const staveNote = new StaveNote({
      keys: [nota.vex],
      duration: "q",
      clef: claveActual.clef,
    });
    const etiqueta = new Annotation(t().notas[nota.id]);
    etiqueta.setVerticalJustification(Annotation.VerticalJustify.BOTTOM);
    etiqueta.setFont("Arial, sans-serif", 16, "normal");
    etiqueta.setStyle({ fillStyle: "#3a322c", strokeStyle: "#3a322c" });
    // Un poco de aire para que el nombre no toque la cabeza de la nota en los
    // niveles cuyas notas caen por debajo del pentagrama.
    etiqueta.setYShift(10);
    staveNote.addModifier(etiqueta, 0);
    return staveNote;
  });

  Formatter.FormatAndDraw(contexto, pentagrama, notasStave);
  // Sitio extra abajo para los nombres que van bajo las notas.
  encuadrarPentagrama(contenedorPentagrama, pentagrama, { margenAbajoExtra: 46 });
}

// Pentagrama en miniatura con solo la clave, para los botones del menu.
function dibujarMiniaturaClave(contenedor, clef) {
  contenedor.innerHTML = "";

  const renderer = new Renderer(contenedor, Renderer.Backends.SVG);
  renderer.resize(200, 200);
  const contexto = renderer.getContext();

  const pentagrama = new Stave(0, 40, 90);
  pentagrama.addClef(clef);
  pentagrama.setContext(contexto).draw();

  encuadrarPentagrama(contenedor, pentagrama, { notas: [], clef });
}

function iniciarCuentaAtras(segundos, alTerminar) {
  if (cuentaAtrasIntervalId !== null) {
    clearInterval(cuentaAtrasIntervalId);
  }

  let restante = segundos;
  contadorRegresivoEl.textContent = restante;

  cuentaAtrasIntervalId = setInterval(() => {
    restante -= 1;
    if (restante <= 0) {
      clearInterval(cuentaAtrasIntervalId);
      cuentaAtrasIntervalId = null;
      alTerminar();
    } else {
      contadorRegresivoEl.textContent = restante;
    }
  }, 1000);
}

function crearBotones(orden) {
  ordenBotonesVisible = orden;
  contenedorBotones.innerHTML = "";
  botonesNota = orden.map((idNota) => {
    const boton = document.createElement("button");
    boton.className = "boton-nota";
    boton.textContent = t().notas[idNota];
    boton.addEventListener("click", () => manejarRespuesta(idNota, boton));
    contenedorBotones.appendChild(boton);
    return boton;
  });
}

function actualizarNombresBotonesNota() {
  botonesNota.forEach((boton, indice) => {
    boton.textContent = t().notas[ordenBotonesVisible[indice]];
  });
}

function crearPuntosProgreso() {
  resultadosRonda = [];
  falloEnNotaActual = false;
  progresoPuntosEl.innerHTML = "";
  puntosProgreso = Array.from({ length: NOTAS_POR_RONDA }, () => {
    const punto = document.createElement("span");
    punto.className = "punto";
    progresoPuntosEl.appendChild(punto);
    return punto;
  });
}

function actualizarMarcador() {
  contadorAciertosEl.textContent = aciertos;
  contadorFallosEl.textContent = fallos;
  contadorRachaEl.textContent = racha;
}

function actualizarProgreso() {
  puntosProgreso.forEach((punto, indice) => {
    punto.className = "punto";
    if (resultadosRonda[indice]) {
      punto.classList.add(resultadosRonda[indice]);
    } else if (indice === resultadosRonda.length) {
      punto.classList.add("actual");
    }
  });
}

function actualizarIndicadorEjercicio() {
  indicadorEjercicioEl.textContent = t().indicadorEjercicio(
    indiceEjercicioGlobal + 1,
    TOTAL_EJERCICIOS,
    serieActual
  );
}

async function manejarRespuesta(idNota, boton) {
  if (estado !== "jugando") return;

  vibrar(15);
  await asegurarAudio();

  if (idNota === notaActual.id) {
    aciertos += 1;
    notasCompletadas += 1;
    resultadosRonda.push(falloEnNotaActual ? "con-fallo" : "limpio");
    racha += 1;
    rachaMaxima = Math.max(rachaMaxima, racha);
    actualizarMarcador();
    actualizarProgreso();
    sonarNota(notaActual.vex);
    mostrarAcierto();
    habilitarBotonesNota(false);

    setTimeout(() => {
      if (notasCompletadas >= NOTAS_POR_RONDA) {
        finalizarEjercicioActual();
      } else {
        elegirSiguienteNota();
        dibujarPentagrama();
        habilitarBotonesNota(estado === "jugando");
      }
    }, DURACION_FEEDBACK);
  } else {
    fallos += 1;
    racha = 0;
    falloEnNotaActual = true;
    actualizarMarcador();
    mostrarFallo(boton);
  }
}

// Cada sintetizador es monofonico: si se le piden dos notas en el mismo
// instante, Tone.js lanza una excepcion. Guardamos el ultimo instante usado
// por cada uno para programar siempre estrictamente despues.
const SEPARACION_MINIMA = 0.02;
const ultimoInstante = new Map();

function instanteLibre(sintetizador) {
  const instante = Math.max(Tone.now(), (ultimoInstante.get(sintetizador) ?? 0) + SEPARACION_MINIMA);
  ultimoInstante.set(sintetizador, instante);
  return instante;
}

// Red de seguridad: un problema de sonido no puede cortar la partida. Sin
// esto, una excepcion aqui dejaba el ejercicio congelado en la nota actual,
// porque se saltaba el feedback y la orden de pasar a la siguiente.
function reproducir(sonido) {
  try {
    sonido();
  } catch (error) {
    console.warn("No se ha podido reproducir el sonido:", error);
  }
}

function sonarNota(vexKey) {
  // vexKey tiene forma "c/4" -> Tone.js espera "C4"
  const [letra, octava] = vexKey.split("/");
  reproducir(() => {
    synth.triggerAttackRelease(`${letra.toUpperCase()}${octava}`, "8n", instanteLibre(synth));
  });
}

function sonarFallo() {
  // Sonido corto y descendente, amistoso, no de castigo.
  reproducir(() => {
    const inicio = instanteLibre(synthFallo);
    synthFallo.triggerAttackRelease("E3", "16n", inicio);
    synthFallo.triggerAttackRelease("C3", "16n", inicio + 0.09);
    ultimoInstante.set(synthFallo, inicio + 0.09);
  });
}

function mostrarIcono(simbolo, tipo) {
  feedbackIconoEl.textContent = simbolo;
  feedbackIconoEl.classList.remove("acierto", "fallo");
  feedbackIconoEl.classList.add(tipo, "visible");
}

function ocultarIcono() {
  feedbackIconoEl.classList.remove("visible");
}

function mostrarAcierto() {
  contenedorPentagrama.classList.remove("fallo");
  contenedorPentagrama.classList.add("acierto");
  mostrarIcono("✓", "acierto");
  setTimeout(() => {
    contenedorPentagrama.classList.remove("acierto");
    ocultarIcono();
  }, DURACION_FEEDBACK);
}

function mostrarFallo(boton) {
  contenedorPentagrama.classList.add("fallo");
  boton.classList.add("fallo");
  mostrarIcono("✕", "fallo");
  sonarFallo();
  setTimeout(() => {
    contenedorPentagrama.classList.remove("fallo");
    boton.classList.remove("fallo");
    ocultarIcono();
  }, DURACION_FEEDBACK);
}

function habilitarBotonesNota(habilitar) {
  botonesNota.forEach((boton) => {
    boton.disabled = !habilitar;
  });
}

function iniciarSesion() {
  serieActual = 1;
  ejercicioActual = 1;
  indiceEjercicioGlobal = 0;
  resultadosSesion = [];
  iniciarEjercicioActual(BOTONES_ID);
}

function iniciarEjercicioActual(ordenBotones) {
  aciertos = 0;
  fallos = 0;
  notasCompletadas = 0;
  racha = 0;
  rachaMaxima = 0;
  notaActualIndice = null;
  estado = "memorizando";

  actualizarMarcador();
  crearPuntosProgreso();
  actualizarProgreso();
  actualizarIndicadorEjercicio();
  mostrarPentagramaCompleto();
  actualizarUI();

  iniciarCuentaAtras(SEGUNDOS_MEMORIZACION, () => comenzarRondaReal(ordenBotones));
}

function comenzarRondaReal(ordenBotones) {
  estado = "jugando";
  crearBotones(ordenBotones);
  elegirSiguienteNota();

  tiempoInicio = Date.now();
  tiempoPausadoAcumulado = 0;
  tiempoPausaInicio = null;

  dibujarPentagrama();
  actualizarUI();
}

function avanzarSiguienteEjercicio() {
  indiceEjercicioGlobal += 1;
  ejercicioActual += 1;

  let ordenBotones = ordenBotonesVisible;
  if (ejercicioActual > EJERCICIOS_POR_SERIE) {
    ejercicioActual = 1;
    serieActual += 1;
    ordenBotones = barajar(BOTONES_ID);
  }

  iniciarEjercicioActual(ordenBotones);
}

function detenerCuentaAtras() {
  if (cuentaAtrasIntervalId !== null) {
    clearInterval(cuentaAtrasIntervalId);
    cuentaAtrasIntervalId = null;
  }
}

function volverAInicio() {
  detenerCuentaAtras();
  estado = "inicio";
  actualizarUI();
}

// --- Menu de navegacion: primero la clave, despues el nivel ---------------

// Portada de la primera pantalla: que es esto, para que sirve y como esta
// organizada una sesion. Se vuelve a pintar al cambiar de idioma.
function renderizarPortada() {
  portadaTituloEl.textContent = t().portadaTitulo;
  portadaObjetivoEl.textContent = t().portadaObjetivo;
  consisteTituloEl.textContent = t().consisteTitulo;
  consisteTextoEl.textContent = t().consisteTexto;
  sesionTituloEl.textContent = t().sesionTitulo;
  medidasTituloEl.textContent = t().medidasTitulo;

  sesionListaEl.innerHTML = "";
  t().sesionLista.forEach((texto) => {
    const punto = document.createElement("li");
    punto.textContent = texto;
    sesionListaEl.appendChild(punto);
  });

  medidasListaEl.innerHTML = "";
  t().medidasLista.forEach((texto) => {
    const ficha = document.createElement("span");
    ficha.className = "medida-chip";
    ficha.textContent = texto;
    medidasListaEl.appendChild(ficha);
  });
}

function renderizarMenuClave() {
  menuClaveOpcionesEl.innerHTML = "";

  CLAVES.forEach((clave) => {
    const boton = document.createElement("button");
    boton.className = "boton-menu boton-clave";

    const miniatura = document.createElement("span");
    miniatura.className = "miniatura-clave";
    boton.appendChild(miniatura);

    const nombre = document.createElement("span");
    nombre.className = "menu-nombre";
    nombre.textContent = t().claves[clave.id];
    boton.appendChild(nombre);

    const cuenta = document.createElement("span");
    cuenta.className = "menu-rango";
    cuenta.textContent = t().cuentaNiveles(clave.niveles.length);
    boton.appendChild(cuenta);

    boton.addEventListener("click", () => {
      vibrar(15);
      origenLectura = null;
      seleccionarClave(clave);
    });

    menuClaveOpcionesEl.appendChild(boton);
    dibujarMiniaturaClave(miniatura, clave.clef);
  });
}

function renderizarMenuNivel() {
  menuNivelOpcionesEl.innerHTML = "";

  claveActual.niveles.forEach((nivel) => {
    const boton = document.createElement("button");
    boton.className = "boton-menu boton-nivel";

    const nombre = document.createElement("span");
    nombre.className = "menu-nombre";
    nombre.textContent = t().niveles[nivel.id];
    boton.appendChild(nombre);

    const rango = document.createElement("span");
    rango.className = "menu-rango";
    rango.textContent = t().rangos[claveActual.id][nivel.id];
    boton.appendChild(rango);

    boton.addEventListener("click", () => {
      vibrar(15);
      seleccionarNivel(nivel);
    });

    menuNivelOpcionesEl.appendChild(boton);
  });
}

// --- Programa de practica ------------------------------------------------

// Los textos del catalogo vienen en los dos idiomas.
function txt(valor) {
  return valor && typeof valor === "object" && !Array.isArray(valor) ? valor[idioma] : valor;
}

const SEPARACION_SISTEMAS = 95;

function dibujarPartituraEjercicio(contenedor, partitura) {
  contenedor.innerHTML = "";

  const cuentaNotas = partitura.sistemas[0].notas.filter((nota) => !nota.barra).length;

  // Si las notas llevan su nombre debajo, cada una necesita el ancho del
  // rotulo, o el texto se sale del dibujo y se pisa con el de al lado.
  const nombres = partitura.sistemas.flatMap((sistema) => sistema.notas.map((nota) => nota.t)).filter(Boolean);
  const hayNombres = nombres.length > 0;
  const rotuloMasLargo = hayNombres ? Math.max(...nombres.map((texto) => texto.length * 8 + 20)) : 0;
  const porNota = Math.max(42, rotuloMasLargo);
  const ancho = 70 + cuentaNotas * porNota;

  // Los nombres del sistema de arriba caen en el hueco entre los dos.
  const separacion = hayNombres ? SEPARACION_SISTEMAS + 42 : SEPARACION_SISTEMAS;

  const renderer = new Renderer(contenedor, Renderer.Backends.SVG);
  renderer.resize(ancho + 40, 160 + partitura.sistemas.length * separacion);
  const contexto = renderer.getContext();

  const pentagramas = partitura.sistemas.map((sistema, indice) => {
    const pentagrama = new Stave(0, 40 + indice * separacion, ancho);
    pentagrama.addClef(sistema.clef);
    // La armadura va entre la clave y el compas, y es la que dice que notas
    // estan alteradas en toda la pieza.
    const armadura = sistema.armadura || partitura.armadura;
    if (armadura) pentagrama.addKeySignature(armadura);
    const compas = sistema.compas || partitura.compas;
    if (compas) pentagrama.addTimeSignature(compas);
    pentagrama.setContext(contexto).draw();
    return pentagrama;
  });

  // Manos juntas: llave y linea que unen los dos pentagramas.
  if (pentagramas.length > 1) {
    const primero = pentagramas[0];
    const ultimo = pentagramas[pentagramas.length - 1];
    new StaveConnector(primero, ultimo).setType(StaveConnector.type.BRACE).setContext(contexto).draw();
    new StaveConnector(primero, ultimo).setType(StaveConnector.type.SINGLE_LEFT).setContext(contexto).draw();
  }

  const digitaciones = [];
  const marcas = [];
  let pintadas = 0;

  partitura.sistemas.forEach((sistema, indice) => {
    const notas = sistema.notas.map((nota) => {
      if (nota.barra) return new BarNote();

      // "n" es una nota suelta o, en los acordes, varias a la vez.
      const staveNote = new StaveNote({
        keys: nota.silencio ? [alturaSilencio(nota.f, sistema.clef)] : Array.isArray(nota.n) ? nota.n : [nota.n],
        duration: nota.silencio ? `${nota.f || "q"}r` : nota.f || "q",
        clef: sistema.clef,
      });
      if (nota.alt) staveNote.addModifier(new Accidental(nota.alt), 0);
      // El puntillo se pide aparte: la duracion "hd" se entiende, pero el
      // punto no se dibuja solo.
      if (String(nota.f || "").includes("d")) Dot.buildAndAttach([staveNote], { all: true });

      // "t" es el nombre de la nota y va siempre debajo; "d" es la digitacion.
      if (nota.t) {
        const nombre = new Annotation(nota.t);
        nombre.setVerticalJustification(Annotation.VerticalJustify.BOTTOM);
        nombre.setFont("Nunito, sans-serif", 14, "normal");
        nombre.setStyle({ fillStyle: "#3a322c", strokeStyle: "#3a322c" });
        nombre.setYShift(12);
        staveNote.addModifier(nombre, 0);
      }

      return staveNote;
    });

    // Las barras de union se construyen antes de formatear, porque cambian la
    // direccion de los palos, y se pintan despues.
    const barras = gruposDeBarra(sistema, sistema.compas || partitura.compas)
      .map((grupo) => new Beam(grupo.map((i) => notas[i])));

    Formatter.FormatAndDraw(contexto, pentagramas[indice], notas);
    barras.forEach((barra) => barra.setContext(contexto).draw());

    // "ligado" ata una nota a la siguiente: es la ligadura de prolongacion,
    // que suma las dos duraciones en un solo sonido.
    sistema.notas.forEach((nota, i) => {
      if (!nota.ligado) return;
      const siguiente = sistema.notas.findIndex((n, j) => j > i && !n.barra);
      if (siguiente === -1) return;
      new StaveTie({ firstNote: notas[i], lastNote: notas[siguiente], firstIndices: [0], lastIndices: [0] })
        .setContext(contexto)
        .draw();
    });

    // La digitacion se pinta aparte. Puesta como anotacion de VexFlow queda
    // pegada a la cabeza de la nota, y en las redondas, que no tienen palo,
    // acaba dentro del pentagrama. Asi van todas a la misma altura: encima
    // del pentagrama en la mano derecha y debajo en la izquierda.
    sistema.notas
      .filter((nota) => !nota.barra)
      .forEach((nota, i) => {
        if (nota.d) digitaciones.push({ texto: nota.d, sistema: indice, orden: pintadas + i });
        if (nota.marca) marcas.push({ nota: nota.n, sistema: indice, orden: pintadas + i });
      });
    pintadas += sistema.notas.filter((nota) => !nota.barra).length;
  });

  const svg = contenedor.querySelector("svg");
  if (!svg) return;

  const cabezas = [...svg.querySelectorAll(".vf-stavenote")].map((grupo) => {
    const texto = grupo.querySelector("text");
    return texto ? +texto.getAttribute("x") + 5 : null;
  });

  // Recuadro para senalar una nota concreta, como el do central en cada clave.
  marcas.forEach((marca) => {
    const x = cabezas[marca.orden];
    if (x === null || x === undefined) return;
    const pentagrama = pentagramas[marca.sistema];
    const y = yDeNota(pentagrama, marca.nota, partitura.sistemas[marca.sistema].clef);

    const recuadro = document.createElementNS(SVG_NS, "rect");
    recuadro.setAttribute("x", x - 17);
    recuadro.setAttribute("y", y - 13);
    recuadro.setAttribute("width", 34);
    recuadro.setAttribute("height", 26);
    recuadro.setAttribute("rx", 7);
    recuadro.setAttribute("fill", "none");
    recuadro.setAttribute("stroke", "var(--color-primario)");
    recuadro.setAttribute("stroke-width", 2.5);
    svg.appendChild(recuadro);
  });

  digitaciones.forEach((dedo) => {
    const x = cabezas[dedo.orden];
    if (x === null || x === undefined) return;
    const pentagrama = pentagramas[dedo.sistema];
    const esGrave = partitura.sistemas[dedo.sistema].clef === "bass";

    const texto = document.createElementNS(SVG_NS, "text");
    texto.setAttribute("x", x);
    texto.setAttribute("y", esGrave ? pentagrama.getYForLine(4) + 26 : pentagrama.getYForLine(0) - 12);
    texto.setAttribute("text-anchor", "middle");
    texto.setAttribute("font-family", "Nunito, sans-serif");
    texto.setAttribute("font-size", 13);
    texto.setAttribute("font-weight", 700);
    texto.setAttribute("fill", "#3a322c");
    texto.textContent = dedo.texto;
    svg.appendChild(texto);
  });

  const arriba = pentagramas[0].getYForLine(0) - 42;
  const abajo = pentagramas[pentagramas.length - 1].getYForLine(4) + (hayNombres ? 62 : 42);
  svg.setAttribute("viewBox", `-6 ${arriba} ${ancho + 12} ${abajo - arriba}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.removeAttribute("width");
  svg.removeAttribute("height");
  svg.style.width = "100%";
  svg.style.height = "auto";
  // Un ejemplo de dos notas no puede estirarse hasta llenar la tarjeta. Se
  // limita cuanto crece cada unidad del dibujo y, para los que son estrechos
  // y altos, tambien cuanto puede medir de alto.
  const anchoVista = ancho + 12;
  const altoVista = abajo - arriba;
  // El tope de alto va por pentagrama: si no, un ejercicio de una sola mano,
  // que es la mitad de alto, se estira al doble que uno de dos.
  const altoTope = Math.min(ALTO_MAXIMO_DIBUJO, 170 * partitura.sistemas.length);
  svg.style.maxWidth = `${Math.round(Math.min(anchoVista * 2.4, (altoTope * anchoVista) / altoVista))}px`;
}

const SVG_NS = "http://www.w3.org/2000/svg";

// Cuanto vale cada figura en tiempos. La "d" del final es el puntillo, que
// anade la mitad.
const VALOR_FIGURA = { w: 4, h: 2, q: 1, 8: 0.5, 16: 0.25 };
function duracionDe(figura) {
  const base = VALOR_FIGURA[(figura || "q").replace("d", "")] || 1;
  return String(figura).includes("d") ? base * 1.5 : base;
}

// VexFlow no une las corcheas por su cuenta: hay que agrupar y pintar las
// barras a mano. Se agrupan por tiempo, que es como se leen: en los compases
// de subdivision ternaria (6/8, 9/8, 12/8) el tiempo son tres corcheas, y en
// los demas una negra.
function gruposDeBarra(sistema, compas) {
  const [arriba, abajo] = String(compas || "4/4").split("/").map(Number);
  const porGrupo = abajo === 8 && arriba % 3 === 0 ? 1.5 : 1;
  const grupos = [];
  let actual = [];
  let suma = 0;
  const cerrar = () => {
    if (actual.length > 1) grupos.push(actual);
    actual = [];
    suma = 0;
  };
  sistema.notas.forEach((nota, i) => {
    const ligable = !nota.barra && !nota.silencio && (nota.f === "8" || nota.f === "16");
    if (!ligable) return cerrar();
    actual.push(i);
    suma += duracionDe(nota.f);
    if (suma >= porGrupo - 1e-9) cerrar();
  });
  cerrar();
  return grupos;
}
// Alto maximo de cualquier ilustracion, en px: por encima de esto se come la
// pantalla y hay que hacer scroll para leer el texto que la acompana.
const ALTO_MAXIMO_DIBUJO = 340;

// Teclado de piano dibujado a mano: el renderizador de partituras no sirve
// para esto y es justo lo que hace falta para situar las notas en las teclas.
// Medidas reales de la tinta de Bravura, la fuente musical de VexFlow, tomadas
// con canvas a 100 px: getBBox() sobre un glifo devuelve la caja de la fuente,
// que es mucho mas alta que el dibujo, y no sirve para colocarlo.
const GLIFO_CLAVE = {
  treble: { signo: "\uE050", arriba: 109.8, abajo: 66.1, izquierda: 0, ancho: 67.1 },
  bass: { signo: "\uE062", arriba: 26.2, abajo: 63.5, izquierda: 0.5, ancho: 68.9 },
};
const TAMANO_CLAVE = 28;
const ALTO_CLAVE = ((GLIFO_CLAVE.treble.arriba + GLIFO_CLAVE.treble.abajo) * TAMANO_CLAVE) / 100;

// Una clave suelta, sin pentagrama: centrada en centroX y apoyada en abajoY.
function pintarClave(svg, clef, centroX, abajoY, color) {
  const g = GLIFO_CLAVE[clef];
  const k = TAMANO_CLAVE / 100;
  const texto = document.createElementNS(SVG_NS, "text");
  texto.setAttribute("x", centroX - (g.ancho / 2 - g.izquierda) * k);
  texto.setAttribute("y", abajoY - g.abajo * k);
  texto.setAttribute("font-family", "Bravura, Academico, serif");
  texto.setAttribute("font-size", TAMANO_CLAVE);
  texto.setAttribute("fill", color);
  texto.textContent = g.signo;
  svg.appendChild(texto);
}

function dibujarTeclado(contenedor, teclado) {
  contenedor.innerHTML = "";

  const ANCHO_BLANCA = 26;
  const ALTO_BLANCA = 116;
  const ANCHO_NEGRA = 15;
  const ALTO_NEGRA = 72;
  const RADIO = 3;
  // Dentro de una octava, las negras van detras de la 1.ª, 2.ª, 4.ª, 5.ª y 6.ª.
  const CON_NEGRA = [0, 1, 3, 4, 5];
  const NOMBRES = ["do", "re", "mi", "fa", "sol", "la", "si"];
  const COLOR_MANO = { derecha: "var(--color-primario)", izquierda: "var(--color-mano-izquierda)" };

  const blancas = teclado.octavas * 7;
  const ancho = blancas * ANCHO_BLANCA;
  const claves = teclado.claves || [];
  const intervalos = teclado.intervalos || [];
  const negras = teclado.negras || [];
  // Los nombres de las teclas negras van en una segunda fila, debajo de los de
  // las blancas, con una guia que sube hasta su tecla.
  // Los nombres de las blancas van siempre a la misma altura; los de las
  // negras, una fila mas abajo, y esa fila es la que estira el dibujo.
  const filaNombres = ALTO_BLANCA + 20;
  const filaNegras = filaNombres + 22;
  const alto = (negras.some((n) => n.texto) ? filaNegras : filaNombres) + 6;
  // Sitio por encima del teclado para las claves o para los corchetes de
  // intervalo, segun lo que lleve.
  const arriba = Math.max(
    claves.length ? Math.ceil(ALTO_CLAVE) + 16 : 0,
    intervalos.length ? 36 : 0
  );

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", `-1 ${-arriba - 1} ${ancho + 2} ${alto + arriba + 2}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.style.width = "100%";
  svg.style.height = "auto";
  // Con las claves encima el dibujo es mas alto: se limita como las partituras,
  // por altura, para que no se coma la pantalla.
  svg.style.maxWidth = `${Math.round(((ancho + 2) * ALTO_MAXIMO_DIBUJO) / (alto + arriba + 2))}px`;

  const marcadas = new Map((teclado.marcadas || []).map((m) => [m.indice, m]));
  const colorDe = (marca) => marca.color || COLOR_MANO[[].concat(marca.mano || "derecha")[0]];
  const centro = (i) => i * ANCHO_BLANCA + ANCHO_BLANCA / 2;
  // La negra que sigue a la blanca i se dibuja a caballo entre las dos.
  const centroNegra = (i) => (i + 1) * ANCHO_BLANCA;
  const tecla = (x) => {
    const r = document.createElementNS(SVG_NS, "rect");
    r.setAttribute("x", x);
    r.setAttribute("y", 0);
    r.setAttribute("width", ANCHO_BLANCA);
    r.setAttribute("height", ALTO_BLANCA);
    r.setAttribute("rx", RADIO);
    return r;
  };

  for (let i = 0; i < blancas; i += 1) {
    const marca = marcadas.get(i);
    const manos = marca ? [].concat(marca.mano || "derecha") : [];
    const x = i * ANCHO_BLANCA;

    const fondo = tecla(x);
    fondo.setAttribute("fill", marca ? colorDe(marca) : "#ffffff");
    svg.appendChild(fondo);

    // El do central pertenece a las dos claves: la tecla se parte por la mitad
    // y cada lado lleva el color de su mano.
    if (manos.length > 1) {
      const d = x + ANCHO_BLANCA;
      const mitad = document.createElementNS(SVG_NS, "path");
      mitad.setAttribute("d", `M ${x + ANCHO_BLANCA / 2} 0 H ${d - RADIO} A ${RADIO} ${RADIO} 0 0 1 ${d} ${RADIO} V ${ALTO_BLANCA - RADIO} A ${RADIO} ${RADIO} 0 0 1 ${d - RADIO} ${ALTO_BLANCA} H ${x + ANCHO_BLANCA / 2} Z`);
      mitad.setAttribute("fill", COLOR_MANO[manos[1]]);
      svg.appendChild(mitad);
    }

    const borde = tecla(x);
    borde.setAttribute("fill", "none");
    borde.setAttribute("stroke", "#3a322c");
    borde.setAttribute("stroke-width", 1.5);
    svg.appendChild(borde);

    if (marca) {
      const texto = document.createElementNS(SVG_NS, "text");
      texto.setAttribute("x", x + ANCHO_BLANCA / 2);
      texto.setAttribute("y", filaNombres);
      texto.setAttribute("text-anchor", "middle");
      texto.setAttribute("font-family", "Nunito, sans-serif");
      texto.setAttribute("font-size", 15);
      texto.setAttribute("font-weight", 800);
      texto.setAttribute("fill", "#3a322c");
      texto.textContent = marca.texto ? txt(marca.texto) : NOMBRES[i % 7];
      svg.appendChild(texto);
    }
  }

  const negrasMarcadas = new Map(negras.map((n) => [n.indice, n]));

  for (let i = 0; i < blancas; i += 1) {
    if (!CON_NEGRA.includes(i % 7) || i === blancas - 1) continue;
    const marca = negrasMarcadas.get(i);
    const negra = document.createElementNS(SVG_NS, "rect");
    negra.setAttribute("x", centroNegra(i) - ANCHO_NEGRA / 2);
    negra.setAttribute("y", 0);
    negra.setAttribute("width", ANCHO_NEGRA);
    negra.setAttribute("height", ALTO_NEGRA);
    negra.setAttribute("rx", 2);
    negra.setAttribute("fill", marca ? colorDe(marca) : "#3a322c");
    if (marca) {
      negra.setAttribute("stroke", "#3a322c");
      negra.setAttribute("stroke-width", 1.5);
    }
    svg.appendChild(negra);
  }

  // El nombre de una tecla negra va en su propia fila, con una guia que sube
  // hasta ella para que se vea de cual se habla.
  negras.filter((n) => n.texto).forEach((n) => {
    const x = centroNegra(n.indice);
    const guia = document.createElementNS(SVG_NS, "line");
    guia.setAttribute("x1", x);
    guia.setAttribute("y1", ALTO_NEGRA);
    guia.setAttribute("x2", x);
    guia.setAttribute("y2", filaNegras - 12);
    guia.setAttribute("stroke", colorDe(n));
    guia.setAttribute("stroke-width", 2);
    guia.setAttribute("stroke-dasharray", "3 3");
    svg.appendChild(guia);

    const texto = document.createElementNS(SVG_NS, "text");
    texto.setAttribute("x", x);
    texto.setAttribute("y", filaNegras);
    texto.setAttribute("text-anchor", "middle");
    texto.setAttribute("font-family", "Nunito, sans-serif");
    texto.setAttribute("font-size", 15);
    texto.setAttribute("font-weight", 800);
    texto.setAttribute("fill", colorDe(n));
    texto.textContent = txt(n.texto);
    svg.appendChild(texto);
  });

  // Un corchete por encima de las teclas, con el nombre de la distancia que
  // hay entre ellas: un tono, un semitono.
  intervalos.forEach((intervalo) => {
    const x1 = centro(intervalo.desde);
    const x2 = centro(intervalo.hasta);
    const y = -14;

    const corchete = document.createElementNS(SVG_NS, "path");
    corchete.setAttribute("d", `M ${x1} ${y + 7} V ${y} H ${x2} V ${y + 7}`);
    corchete.setAttribute("fill", "none");
    corchete.setAttribute("stroke", intervalo.color);
    corchete.setAttribute("stroke-width", 2.5);
    corchete.setAttribute("stroke-linecap", "round");
    svg.appendChild(corchete);

    const texto = document.createElementNS(SVG_NS, "text");
    texto.setAttribute("x", (x1 + x2) / 2);
    texto.setAttribute("y", y - 7);
    texto.setAttribute("text-anchor", "middle");
    texto.setAttribute("font-family", "Nunito, sans-serif");
    texto.setAttribute("font-size", 15);
    texto.setAttribute("font-weight", 800);
    texto.setAttribute("fill", intervalo.color);
    texto.textContent = txt(intervalo.texto);
    svg.appendChild(texto);
  });

  // Cada clave, encima de la tecla en la que empieza su grupo de notas.
  claves.forEach((c) => {
    pintarClave(svg, c.clef, centro(c.indice), -10, COLOR_MANO[c.mano]);
  });

  contenedor.appendChild(svg);
}

// Arbol de duraciones: cada figura vale dos de la siguiente. Se puede pedir
// el trozo que interese, porque la corchea y la semicorchea no se ven hasta
// los cursos mas avanzados.
const ANCHO_ARBOL = 760;
const IZQUIERDA_ARBOL = 132;
const DERECHA_ARBOL = 122;
const TREE_ARBOL = ANCHO_ARBOL - IZQUIERDA_ARBOL - DERECHA_ARBOL;
const ALTO_FILA = 74;

function filasArbol(figuras) {
  return figuras.map((figura, i) => ({ figura, cantidad: 2 ** i, y: 36 + i * ALTO_FILA }));
}

function posicionArbol(fila, i) {
  return IZQUIERDA_ARBOL + (TREE_ARBOL / fila.cantidad) * (i + 0.5);
}

function svgArbol(filas) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${ANCHO_ARBOL} ${filas[filas.length - 1].y + 34}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.style.width = "100%";
  svg.style.height = "auto";
  return svg;
}

// Ramas y textos. Se insertan al principio del SVG para que las ramas queden
// por detras de las figuras.
function ramasYEtiquetasArbol(svg, filas, silencios) {
  const piezas = [];

  filas.slice(0, -1).forEach((fila, f) => {
    const hija = filas[f + 1];
    for (let i = 0; i < fila.cantidad; i += 1) {
      const px = posicionArbol(fila, i);
      const izq = posicionArbol(hija, i * 2);
      const der = posicionArbol(hija, i * 2 + 1);
      [
        [px, fila.y + 12, px, fila.y + 28],
        [izq, fila.y + 28, der, fila.y + 28],
        [izq, fila.y + 28, izq, hija.y - 34],
        [der, fila.y + 28, der, hija.y - 34],
      ].forEach(([x1, y1, x2, y2]) => {
        const l = document.createElementNS(SVG_NS, "line");
        l.setAttribute("x1", x1); l.setAttribute("y1", y1);
        l.setAttribute("x2", x2); l.setAttribute("y2", y2);
        l.setAttribute("stroke", "#c9b8a3");
        l.setAttribute("stroke-width", 2);
        piezas.push(l);
      });
    }
  });

  filas.forEach((fila) => {
    const nombres = silencios ? t().nombresSilencios : t().nombresFiguras;
    const par = nombres[fila.figura];

    const etiqueta = document.createElementNS(SVG_NS, "text");
    etiqueta.setAttribute("x", 0);
    etiqueta.setAttribute("y", fila.y + 6);
    etiqueta.setAttribute("font-family", "Nunito, sans-serif");
    etiqueta.setAttribute("font-size", 17);
    etiqueta.setAttribute("font-weight", 800);
    etiqueta.setAttribute("fill", "#3a322c");
    etiqueta.textContent = `${fila.cantidad} ${fila.cantidad === 1 ? par[0] : par[1]}`;
    piezas.push(etiqueta);

    const tiempos = document.createElementNS(SVG_NS, "text");
    tiempos.setAttribute("x", ANCHO_ARBOL);
    tiempos.setAttribute("y", fila.y + 6);
    tiempos.setAttribute("text-anchor", "end");
    tiempos.setAttribute("font-family", "Nunito, sans-serif");
    tiempos.setAttribute("font-size", 15);
    tiempos.setAttribute("fill", "#8a7f72");
    tiempos.textContent = t().tiemposFiguras[fila.figura];
    piezas.push(tiempos);
  });

  piezas.reverse().forEach((pieza) => svg.insertBefore(pieza, svg.firstChild));
}

// Una figura suelta: cabeza, palo y corchetes. La usan el arbol y el esquema
// del compas.
function pintarFigura(svg, cx, cy, figura) {
  const tinta = "#3a322c";
  const hueca = figura === "redonda" || figura === "blanca";

  const cabeza = document.createElementNS(SVG_NS, "ellipse");
  cabeza.setAttribute("cx", cx);
  cabeza.setAttribute("cy", cy);
  cabeza.setAttribute("rx", figura === "redonda" ? 9 : 7.5);
  cabeza.setAttribute("ry", 5.5);
  cabeza.setAttribute("transform", `rotate(-20 ${cx} ${cy})`);
  cabeza.setAttribute("fill", hueca ? "none" : tinta);
  cabeza.setAttribute("stroke", tinta);
  cabeza.setAttribute("stroke-width", figura === "redonda" ? 3 : 2);
  svg.appendChild(cabeza);

  if (figura === "redonda") return;

  const palo = document.createElementNS(SVG_NS, "line");
  palo.setAttribute("x1", cx + 7);
  palo.setAttribute("y1", cy - 1);
  palo.setAttribute("x2", cx + 7);
  palo.setAttribute("y2", cy - 30);
  palo.setAttribute("stroke", tinta);
  palo.setAttribute("stroke-width", 2);
  svg.appendChild(palo);

  const corchetes = { corchea: 1, semicorchea: 2 }[figura] || 0;
  for (let c = 0; c < corchetes; c += 1) {
    const corchete = document.createElementNS(SVG_NS, "path");
    corchete.setAttribute("d", `M${cx + 7} ${cy - 30 + c * 9} q 10 6 9 16 q -2 -8 -9 -10 z`);
    corchete.setAttribute("fill", tinta);
    svg.appendChild(corchete);
  }
}

// Esquema del compas: que dice el numero de arriba y que dice el de abajo, y
// la equivalencia del de abajo con cada figura.
function dibujarCompas(contenedor, cifra) {
  contenedor.innerHTML = "";
  const [arriba, abajo] = cifra.split("/");
  const EQUIVALENCIAS = [["2", "blanca"], ["4", "negra"], ["8", "corchea"]];

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 700 330");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.style.width = "100%";
  svg.style.height = "auto";
  svg.style.maxWidth = "700px";

  const texto = (x, y, contenido, opciones = {}) => {
    const t = document.createElementNS(SVG_NS, "text");
    t.setAttribute("x", x);
    t.setAttribute("y", y);
    t.setAttribute("font-family", "Nunito, sans-serif");
    t.setAttribute("font-size", opciones.tamano || 17);
    t.setAttribute("font-weight", opciones.peso || 400);
    t.setAttribute("fill", opciones.color || "#3a322c");
    if (opciones.centrado) t.setAttribute("text-anchor", "middle");
    t.textContent = contenido;
    svg.appendChild(t);
    return t;
  };

  const flecha = (x1, y, x2) => {
    const l = document.createElementNS(SVG_NS, "path");
    l.setAttribute("d", `M${x1} ${y} L${x2 - 9} ${y} M${x2 - 9} ${y - 5} L${x2} ${y} L${x2 - 9} ${y + 5}`);
    l.setAttribute("stroke", "var(--color-primario)");
    l.setAttribute("stroke-width", 2.5);
    l.setAttribute("fill", "none");
    svg.appendChild(l);
  };

  texto(66, 74, arriba, { tamano: 58, peso: 800, centrado: true });
  texto(66, 138, abajo, { tamano: 58, peso: 800, centrado: true });

  flecha(108, 56, 172);
  texto(184, 62, t().compasArriba, { peso: 700 });
  flecha(108, 120, 172);
  texto(184, 126, t().compasAbajo, { peso: 700 });

  const separador = document.createElementNS(SVG_NS, "line");
  separador.setAttribute("x1", 40);
  separador.setAttribute("y1", 176);
  separador.setAttribute("x2", 660);
  separador.setAttribute("y2", 176);
  separador.setAttribute("stroke", "var(--color-boton-borde)");
  separador.setAttribute("stroke-width", 2);
  svg.appendChild(separador);

  texto(40, 208, t().compasEquivalencia, { peso: 700 });

  EQUIVALENCIAS.forEach(([numero, figura], i) => {
    const x = 90 + i * 210;
    texto(x, 288, numero, { tamano: 40, peso: 800, centrado: true });
    texto(x + 34, 282, "=", { tamano: 24, color: "var(--color-texto-tenue)" });
    pintarFigura(svg, x + 82, 278, figura);
    texto(x + 82, 312, t().nombresFiguras[figura][0], { centrado: true, color: "var(--color-texto-tenue)" });
  });

  contenedor.appendChild(svg);
}

function dibujarArbolFiguras(contenedor, figuras) {
  contenedor.innerHTML = "";
  const filas = filasArbol(figuras);
  const svg = svgArbol(filas);

  filas.forEach((fila) => {
    for (let i = 0; i < fila.cantidad; i += 1) {
      pintarFigura(svg, posicionArbol(fila, i), fila.y, fila.figura);
    }
  });

  ramasYEtiquetasArbol(svg, filas, false);
  contenedor.appendChild(svg);
}

// Los silencios se dibujan con VexFlow sobre pentagramas que no se pintan:
// asi salen con su grafia real, que a mano no sale bien.
function dibujarArbolSilencios(contenedor, figuras) {
  contenedor.innerHTML = "";
  const filas = filasArbol(figuras);
  const DURACION = { redonda: "w", blanca: "h", negra: "q", corchea: "8", semicorchea: "16" };

  const renderer = new Renderer(contenedor, Renderer.Backends.SVG);
  renderer.resize(ANCHO_ARBOL, filas[filas.length - 1].y + 34);
  const contexto = renderer.getContext();

  const objetivos = [];

  filas.forEach((fila) => {
    // Cada silencio tiene su linea: el de redonda cuelga de ella y el de
    // blanca se apoya encima. Se coloca el pentagrama (que no se pinta) de
    // forma que esa linea caiga justo en la altura de la fila.
    const desdeArriba = fila.figura === "redonda" ? 1 : 2;
    const pentagrama = new Stave(IZQUIERDA_ARBOL - 24, fila.y - 40 - desdeArriba * 10, TREE_ARBOL + 48);
    const silencios = Array.from({ length: fila.cantidad }, () =>
      new StaveNote({ keys: [alturaSilencio(DURACION[fila.figura], "treble")], duration: `${DURACION[fila.figura]}r` })
    );
    pentagrama.setContext(contexto);
    Formatter.FormatAndDraw(contexto, pentagrama, silencios);

    for (let i = 0; i < fila.cantidad; i += 1) objetivos.push(posicionArbol(fila, i));
  });

  const svg = contenedor.querySelector("svg");

  // El formateador reparte los silencios a su manera; se recolocan uno a uno
  // para que queden centrados bajo su rama.
  [...svg.querySelectorAll(".vf-stavenote")].forEach((grupo, i) => {
    const caja = grupo.getBBox();
    grupo.setAttribute("transform", `translate(${objetivos[i] - (caja.x + caja.width / 2)} 0)`);
  });

  // La linea de referencia de la que cuelga o sobre la que se apoya la barra.
  filas.forEach((fila) => {
    if (fila.figura !== "redonda" && fila.figura !== "blanca") return;
    for (let i = 0; i < fila.cantidad; i += 1) {
      const x = posicionArbol(fila, i);
      const l = document.createElementNS(SVG_NS, "line");
      l.setAttribute("x1", x - 16); l.setAttribute("y1", fila.y);
      l.setAttribute("x2", x + 16); l.setAttribute("y2", fila.y);
      l.setAttribute("stroke", "#3a322c");
      l.setAttribute("stroke-width", 1.5);
      svg.appendChild(l);
    }
  });
  svg.setAttribute("viewBox", `0 0 ${ANCHO_ARBOL} ${filas[filas.length - 1].y + 34}`);
  svg.removeAttribute("width");
  svg.removeAttribute("height");
  svg.style.width = "100%";
  svg.style.height = "auto";
  ramasYEtiquetasArbol(svg, filas, true);
}

// Las dos manos vistas desde arriba, con el numero de cada dedo. El pulgar es
// el 1 en las dos, asi que los numeros van en espejo: es lo que hay que ver.
const ANCHO_MANO = 150;
const ALTO_MANO = 200;

function dibujarManos(contenedor) {
  contenedor.innerHTML = "";

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${ANCHO_MANO * 2 + 40} ${ALTO_MANO}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.style.width = "100%";
  svg.style.height = "auto";

  // Dedos largos del 2 al 5, medidos sobre la mano derecha.
  const DEDOS = [
    { numero: 2, cx: 61, punta: 30, ancho: 19 },
    { numero: 3, cx: 83, punta: 18, ancho: 20 },
    { numero: 4, cx: 105, punta: 26, ancho: 19 },
    { numero: 5, cx: 125, punta: 50, ancho: 17 },
  ];
  const PULGAR = { x: 4, y: 100, largo: 50, ancho: 19, giro: -22, pivoteX: 54, pivoteY: 109.5 };

  const girar = (x, y, cx, cy, grados) => {
    const a = (grados * Math.PI) / 180;
    const dx = x - cx;
    const dy = y - cy;
    return [cx + dx * Math.cos(a) - dy * Math.sin(a), cy + dx * Math.sin(a) + dy * Math.cos(a)];
  };

  ["izquierda", "derecha"].forEach((mano, indice) => {
    const base = indice * (ANCHO_MANO + 40);
    const espejo = mano === "izquierda";
    // En la izquierda todo se refleja dentro de su propia caja.
    const ex = (x) => base + (espejo ? ANCHO_MANO - x : x);

    const grupo = document.createElementNS(SVG_NS, "g");

    const palma = document.createElementNS(SVG_NS, "rect");
    palma.setAttribute("x", ex(espejo ? 137 : 45));
    palma.setAttribute("y", 82);
    palma.setAttribute("width", 92);
    palma.setAttribute("height", 78);
    palma.setAttribute("rx", 18);
    palma.setAttribute("fill", "#ffffff");
    palma.setAttribute("stroke", "#3a322c");
    palma.setAttribute("stroke-width", 2);
    grupo.appendChild(palma);

    const numeros = [];

    DEDOS.forEach((dedo) => {
      const izquierdaDedo = dedo.cx - dedo.ancho / 2;
      const dedoEl = document.createElementNS(SVG_NS, "rect");
      dedoEl.setAttribute("x", ex(espejo ? izquierdaDedo + dedo.ancho : izquierdaDedo));
      dedoEl.setAttribute("y", dedo.punta);
      dedoEl.setAttribute("width", dedo.ancho);
      dedoEl.setAttribute("height", 105 - dedo.punta);
      dedoEl.setAttribute("rx", dedo.ancho / 2);
      dedoEl.setAttribute("fill", "#ffffff");
      dedoEl.setAttribute("stroke", "#3a322c");
      dedoEl.setAttribute("stroke-width", 2);
      grupo.appendChild(dedoEl);

      numeros.push({ x: ex(dedo.cx), y: dedo.punta + 16, texto: dedo.numero });
    });

    const pulgar = document.createElementNS(SVG_NS, "rect");
    pulgar.setAttribute("x", ex(espejo ? PULGAR.x + PULGAR.largo : PULGAR.x));
    pulgar.setAttribute("y", PULGAR.y);
    pulgar.setAttribute("width", PULGAR.largo);
    pulgar.setAttribute("height", PULGAR.ancho);
    pulgar.setAttribute("rx", PULGAR.ancho / 2);
    pulgar.setAttribute("fill", "#ffffff");
    pulgar.setAttribute("stroke", "#3a322c");
    pulgar.setAttribute("stroke-width", 2);
    const giro = espejo ? -PULGAR.giro : PULGAR.giro;
    pulgar.setAttribute("transform", `rotate(${giro} ${ex(PULGAR.pivoteX)} ${PULGAR.pivoteY})`);
    grupo.appendChild(pulgar);

    // La punta del pulgar es un punto, no un rectangulo: "ex" ya la refleja.
    const [px, py] = girar(
      ex(PULGAR.x + 14),
      PULGAR.y + PULGAR.ancho / 2,
      ex(PULGAR.pivoteX),
      PULGAR.pivoteY,
      giro
    );
    numeros.push({ x: px, y: py, texto: 1 });

    numeros.forEach((n) => {
      const circulo = document.createElementNS(SVG_NS, "circle");
      circulo.setAttribute("cx", n.x);
      circulo.setAttribute("cy", n.y);
      circulo.setAttribute("r", 12);
      circulo.setAttribute("fill", "var(--color-primario)");
      grupo.appendChild(circulo);

      const texto = document.createElementNS(SVG_NS, "text");
      texto.setAttribute("x", n.x);
      texto.setAttribute("y", n.y + 5);
      texto.setAttribute("text-anchor", "middle");
      texto.setAttribute("font-family", "Nunito, sans-serif");
      texto.setAttribute("font-size", 15);
      texto.setAttribute("font-weight", 800);
      texto.setAttribute("fill", "#ffffff");
      texto.textContent = n.texto;
      grupo.appendChild(texto);
    });

    const nombre = document.createElementNS(SVG_NS, "text");
    nombre.setAttribute("x", base + ANCHO_MANO / 2);
    nombre.setAttribute("y", ALTO_MANO - 8);
    nombre.setAttribute("text-anchor", "middle");
    nombre.setAttribute("font-family", "Nunito, sans-serif");
    nombre.setAttribute("font-size", 16);
    nombre.setAttribute("font-weight", 800);
    nombre.setAttribute("fill", "#3a322c");
    nombre.textContent = t().manos[mano];
    grupo.appendChild(nombre);

    svg.appendChild(grupo);
  });

  contenedor.appendChild(svg);
}

function renderizarMenuPrograma() {
  programaTituloEl.textContent = t().programaTitulo;
  menuProgramaOpcionesEl.innerHTML = "";

  const opciones = [
    { id: "lectura", alPulsar: volverAlMenuClave },
    { id: "practica", alPulsar: irAPracticaNivel },
  ];

  opciones.forEach((opcion) => {
    const boton = document.createElement("button");
    boton.className = "boton-menu boton-programa";

    const nombre = document.createElement("span");
    nombre.className = "menu-nombre";
    nombre.textContent = t().programas[opcion.id].nombre;
    boton.appendChild(nombre);

    const descripcion = document.createElement("span");
    descripcion.className = "menu-rango";
    descripcion.textContent = t().programas[opcion.id].descripcion;
    boton.appendChild(descripcion);

    boton.addEventListener("click", () => {
      vibrar(15);
      opcion.alPulsar();
    });

    menuProgramaOpcionesEl.appendChild(boton);
  });
}

function renderizarPracticaNiveles() {
  practicaNivelTituloEl.textContent = t().practicaNivelTitulo;
  practicaNivelOpcionesEl.innerHTML = "";

  NIVELES_PRACTICA.forEach((nivel) => {
    const boton = document.createElement("button");
    boton.className = "boton-menu boton-nivel";

    const nombre = document.createElement("span");
    nombre.className = "menu-nombre";
    nombre.textContent = txt(nivel.nombre);
    boton.appendChild(nombre);

    const preparados = nivel.cursos.filter((curso) => curso.ejercicios.length > 0).length;
    boton.disabled = preparados === 0;

    const detalle = document.createElement("span");
    detalle.className = "menu-rango";
    detalle.textContent = preparados ? t().practicaCuentaCursos(preparados, nivel.cursos.length) : t().practicaEnPreparacion;
    boton.appendChild(detalle);

    boton.addEventListener("click", () => {
      vibrar(15);
      irAPracticaCurso(nivel);
    });

    practicaNivelOpcionesEl.appendChild(boton);
  });
}

function renderizarPracticaCursos() {
  if (!nivelPractica) return;

  practicaCursoTituloEl.textContent = txt(nivelPractica.nombre);
  practicaCursoOpcionesEl.innerHTML = "";

  nivelPractica.cursos.forEach((curso, indice) => {
    const preparado = curso.ejercicios.length > 0;
    const boton = document.createElement("button");
    boton.className = "boton-menu boton-nivel";
    boton.disabled = !preparado;

    const nombre = document.createElement("span");
    nombre.className = "menu-nombre";
    nombre.textContent = t().practicaCursoTitulo(indice + 1);
    boton.appendChild(nombre);

    const detalle = document.createElement("span");
    detalle.className = "menu-rango";
    detalle.textContent = preparado ? txt(curso.titulo) : t().practicaEnPreparacion;
    boton.appendChild(detalle);

    boton.addEventListener("click", () => {
      vibrar(15);
      irAPracticaLista(curso, indice + 1);
    });

    practicaCursoOpcionesEl.appendChild(boton);
  });
}

// Las lecciones de un curso, tal como se listan: los ejercicios de piano van
// todos juntos en una sola fila, que es la rutina tecnica de la clase, y el
// resto de bloques ocupan una fila cada uno.
function filasDelCurso(curso) {
  const tecnica = curso.ejercicios.filter((e) => e.partitura.tipo === "dibujada");
  const filas = [];
  let tecnicaPuesta = false;
  curso.ejercicios.forEach((ejercicio) => {
    if (ejercicio.partitura.tipo === "dibujada") {
      if (!tecnicaPuesta && tecnica.length > 0) {
        filas.push({
          grupo: tecnica,
          titulo: { es: t().tecnicaTitulo, fr: t().tecnicaTitulo },
          tipo: "dibujada",
        });
        tecnicaPuesta = true;
      }
      return;
    }
    filas.push({ grupo: [ejercicio], titulo: ejercicio.titulo, tipo: ejercicio.partitura.tipo });
  });
  return filas;
}

// El curso preparado que hay antes o despues del que se esta viendo, para
// poder encadenar los cursos sin volver al menu.
function cursoVecino(paso) {
  if (!nivelPractica || !cursoPractica) return null;
  for (let i = cursoPractica.numero - 1 + paso; i >= 0 && i < nivelPractica.cursos.length; i += paso) {
    if (nivelPractica.cursos[i].ejercicios.length > 0) return { curso: nivelPractica.cursos[i], numero: i + 1 };
  }
  return null;
}

function renderizarPracticaLista() {
  if (!cursoPractica) return;

  practicaListaTituloEl.textContent = `${t().practicaCursoTitulo(cursoPractica.numero)} · ${txt(cursoPractica.titulo)}`;
  practicaListaEjerciciosEl.innerHTML = "";

  filasDelCurso(cursoPractica).forEach((fila, indice) => {
    const boton = document.createElement("button");
    boton.className = "ejercicio-fila";

    const numero = document.createElement("span");
    numero.className = "ejercicio-numero";
    numero.textContent = indice + 1;
    boton.appendChild(numero);

    const texto = document.createElement("span");
    texto.className = "ejercicio-texto";

    const cabecera = document.createElement("span");
    cabecera.className = "ejercicio-cabecera";

    const titulo = document.createElement("span");
    titulo.className = "ejercicio-nombre";
    titulo.textContent = txt(fila.titulo);
    cabecera.appendChild(titulo);

    // Que se vea de un vistazo si toca teoria, piano, lectura o metodo.
    const clase = document.createElement("span");
    clase.className = `ejercicio-clase clase-${fila.tipo}`;
    clase.textContent = t().clases[fila.tipo];
    cabecera.appendChild(clase);

    texto.appendChild(cabecera);
    boton.appendChild(texto);

    boton.addEventListener("click", () => {
      vibrar(15);
      irAPracticaEjercicio(indice);
    });

    practicaListaEjerciciosEl.appendChild(boton);
  });

}

function renderizarPracticaEjercicio() {
  if (!ejercicioPractica || ejercicioPractica.length === 0) return;

  const varios = ejercicioPractica.length > 1;
  const tipo = ejercicioPractica[0].partitura.tipo;

  ejercicioTituloEl.textContent = varios ? t().tecnicaTitulo : txt(ejercicioPractica[0].titulo);
  ejercicioClaseEl.className = `ejercicio-clase clase-${tipo}`;
  ejercicioClaseEl.textContent = t().clases[tipo];

  ejercicioContenidoEl.innerHTML = "";
  ejercicioPractica.forEach((ejercicio, indice) => {
    ejercicioContenidoEl.appendChild(pintarEjercicio(ejercicio, varios, indice + 1));
  });

  pintarNavegacionEjercicio();
}

// Adelante y atras por las lecciones del curso. En los extremos, el salto
// encadena con el curso preparado anterior o siguiente, para poder recorrer
// el nivel entero sin volver al menu.
function pintarNavegacionEjercicio() {
  ejercicioNavegacionEl.innerHTML = "";
  if (!cursoPractica) return;

  const filas = filasDelCurso(cursoPractica);

  const boton = (texto, alPulsar) => {
    const b = document.createElement("button");
    b.className = "boton-control compacto ejercicio-paso";
    b.textContent = texto;
    b.addEventListener("click", () => {
      vibrar(15);
      alPulsar();
    });
    return b;
  };

  const irAlCurso = (vecino, cual) => {
    cursoPractica = { ...vecino.curso, numero: vecino.numero };
    irAPracticaEjercicio(cual === "ultima" ? filasDelCurso(cursoPractica).length - 1 : 0);
  };

  if (filaPractica > 0) {
    ejercicioNavegacionEl.appendChild(boton(`← ${t().ejercicioAnterior}`, () => irAPracticaEjercicio(filaPractica - 1)));
  } else {
    const previo = cursoVecino(-1);
    if (previo) {
      ejercicioNavegacionEl.appendChild(boton(`← ${t().practicaCursoTitulo(previo.numero)}`, () => irAlCurso(previo, "ultima")));
    }
  }

  const posicion = document.createElement("span");
  posicion.className = "ejercicio-posicion";
  posicion.textContent = t().ejercicioPosicion(filaPractica + 1, filas.length);
  ejercicioNavegacionEl.appendChild(posicion);

  if (filaPractica < filas.length - 1) {
    ejercicioNavegacionEl.appendChild(boton(`${t().ejercicioSiguiente} →`, () => irAPracticaEjercicio(filaPractica + 1)));
  } else {
    const siguiente = cursoVecino(1);
    if (siguiente) {
      ejercicioNavegacionEl.appendChild(boton(`${t().practicaCursoTitulo(siguiente.numero)} →`, () => irAlCurso(siguiente, "primera")));
    }
  }
}

// Una ficha completa: su titulo si van varias juntas, el objetivo, la
// ilustracion que le toque y las indicaciones.
function pintarEjercicio(ejercicio, conTitulo, numero) {
  const partitura = ejercicio.partitura;
  const bloque = document.createElement("article");
  bloque.className = "ficha-ejercicio";

  if (conTitulo) {
    const titulo = document.createElement("h3");
    titulo.className = "ficha-titulo";
    titulo.textContent = `${numero}. ${txt(ejercicio.titulo)}`;
    bloque.appendChild(titulo);
  }

  const caja = (clase) => {
    const div = document.createElement("div");
    if (clase) div.className = clase;
    bloque.appendChild(div);
    return div;
  };

  // El esquema del compas va delante, porque explica lo que luego se ve en el
  // pentagrama.
  if (partitura.compasEsquema) {
    dibujarCompas(caja("ficha-partitura"), partitura.compasEsquema);
  }

  // El teclado va delante del pentagrama: primero se ven las teclas y despues
  // como se escribe lo que suena en ellas.
  if (partitura.teclado) {
    dibujarTeclado(caja("ficha-partitura"), partitura.teclado);
  }
  if (partitura.sistemas) {
    dibujarPartituraEjercicio(caja("ficha-partitura"), partitura);
  }
  if (partitura.manos) {
    dibujarManos(caja("ficha-partitura"));
  }

  if (partitura.arbol) {
    const contenedorArbol = caja("ficha-partitura arbol-figuras");
    const dibujar = partitura.arbol.silencios ? dibujarArbolSilencios : dibujarArbolFiguras;
    dibujar(contenedorArbol, partitura.arbol.figuras);
  }

  if (partitura.tipo === "teoria") {
    const texto = caja("ficha-teoria");

    // El texto puede ser un parrafo suelto o una lista: el primer elemento
    // entra, y el resto van en puntos, para que no quede un ladrillo.
    const contenido = txt(partitura.texto);
    const partes = Array.isArray(contenido) ? contenido : [contenido];

    const parrafo = document.createElement("p");
    parrafo.textContent = partes[0];
    texto.appendChild(parrafo);

    if (partes.length > 1) {
      const puntos = document.createElement("ul");
      partes.slice(1).forEach((linea) => {
        const punto = document.createElement("li");
        punto.textContent = linea;
        puntos.appendChild(punto);
      });
      texto.appendChild(puntos);
    }

    if (partitura.conceptos) {
      const titulo = document.createElement("h3");
      titulo.textContent = t().conceptosTitulo;
      texto.appendChild(titulo);

      const lista = document.createElement("dl");
      partitura.conceptos.forEach((entrada) => {
        const termino = document.createElement("dt");
        termino.textContent = txt(entrada.termino);
        lista.appendChild(termino);
        const definicion = document.createElement("dd");
        definicion.textContent = txt(entrada.definicion);
        lista.appendChild(definicion);
      });
      texto.appendChild(lista);
    }
  } else if (partitura.tipo === "lectura") {
    // Un curso manda a varias sesiones de lectura: las dos claves van siempre
    // al mismo nivel, y cada fila dice si trae notas nuevas o si es repaso.
    const destinoCaja = caja("ficha-lectura");

    partitura.sesiones.forEach((sesion) => {
      const clave = CLAVES.find((c) => c.id === sesion.clave);
      const nivel = clave.niveles.find((n) => n.id === sesion.nivel);

      const fila = document.createElement("button");
      fila.className = "lectura-sesion";

      const papel = document.createElement("span");
      papel.className = `lectura-papel lectura-papel-${sesion.papel}`;
      papel.textContent = t().lecturaPapel[sesion.papel];
      fila.appendChild(papel);

      const destino = document.createElement("span");
      destino.className = "referencia-donde";
      destino.textContent = t().lecturaEn(t().claves[clave.id], t().niveles[nivel.id]);
      fila.appendChild(destino);

      fila.addEventListener("click", () => {
        vibrar(15);
        origenLectura = cursoPractica;
        seleccionarClave(clave);
        seleccionarNivel(nivel);
      });
      destinoCaja.appendChild(fila);
    });
  } else if (partitura.tipo === "referencia") {
    const refCaja = caja("ficha-referencia");
    const etiqueta = document.createElement("span");
    etiqueta.className = "referencia-etiqueta";
    etiqueta.textContent = t().referenciaEn;
    refCaja.appendChild(etiqueta);

    partitura.fuentes.forEach((fuente) => {
      const linea = document.createElement("span");
      linea.className = "referencia-fuente";

      const metodo = document.createElement("strong");
      metodo.className = "referencia-metodo";
      metodo.textContent = fuente.metodo;
      linea.appendChild(metodo);

      const donde = document.createElement("span");
      donde.className = "referencia-donde";
      donde.textContent = txt(fuente.donde);
      linea.appendChild(donde);

      refCaja.appendChild(linea);
    });
  }

  const indicaciones = caja("ficha-indicaciones");
  const tituloIndicaciones = document.createElement("h3");
  tituloIndicaciones.textContent = t().comoTrabajarlo;
  indicaciones.appendChild(tituloIndicaciones);

  const lista = document.createElement("ul");
  txt(ejercicio.indicaciones).forEach((indicacion) => {
    const punto = document.createElement("li");
    punto.textContent = indicacion;
    lista.appendChild(punto);
  });
  indicaciones.appendChild(lista);

  return bloque;
}

function irAMenuPrograma() {
  detenerCuentaAtras();
  origenLectura = null;
  estado = "menu-programa";
  renderizarMenuPrograma();
  actualizarUI();
}

function irAPracticaNivel() {
  estado = "practica-nivel";
  renderizarPracticaNiveles();
  actualizarUI();
}

function irAPracticaCurso(nivel) {
  nivelPractica = nivel;
  estado = "practica-curso";
  renderizarPracticaCursos();
  actualizarUI();
}

function irAPracticaLista(curso, numero) {
  cursoPractica = { ...curso, numero: numero ?? cursoPractica?.numero ?? 1 };
  estado = "practica-lista";
  renderizarPracticaLista();
  actualizarUI();
}

function irAPracticaEjercicio(indice) {
  const filas = filasDelCurso(cursoPractica);
  filaPractica = Math.max(0, Math.min(indice, filas.length - 1));
  ejercicioPractica = filas[filaPractica].grupo;
  estado = "practica-ejercicio";
  // Se muestra la ficha antes de dibujarla: medir un elemento oculto da cero,
  // y el arbol de silencios necesita medir para centrarlos.
  actualizarUI();
  renderizarPracticaEjercicio();
}

// --- Programa de lectura -------------------------------------------------

function seleccionarClave(clave) {
  claveActual = clave;
  estado = "menu-nivel";
  renderizarMenuNivel();
  actualizarUI();
}

function seleccionarNivel(nivel) {
  nivelActual = nivel;
  notasNivel = construirRango(nivel.desde, nivel.hasta);
  estado = "inicio";
  actualizarIndicadorNivel();
  actualizarUI();
}

function volverAlMenuClave() {
  detenerCuentaAtras();
  estado = "menu-clave";
  renderizarMenuClave();
  actualizarUI();
}

function volverAlMenuNivel() {
  detenerCuentaAtras();
  estado = "menu-nivel";
  renderizarMenuNivel();
  actualizarUI();
}

// Un unico boton de volver, siempre en el mismo sitio: deshace el ultimo paso
// que dio el alumno. La raiz es la eleccion de programa, que ya no tiene nada
// detras.
const PANTALLA_ANTERIOR = {
  "menu-clave": volverAlMenuClave,
  "menu-nivel": volverAlMenuClave,
  "practica-nivel": irAMenuPrograma,
  "practica-curso": irAPracticaNivel,
  "practica-lista": () => irAPracticaCurso(nivelPractica),
  "practica-ejercicio": () => irAPracticaLista(cursoPractica),
};

function volverAtras() {
  if (estado === "menu-programa") return;
  if (estado === "menu-clave") {
    irAMenuPrograma();
  } else if (PANTALLA_ANTERIOR[estado]) {
    PANTALLA_ANTERIOR[estado]();
  } else if (origenLectura) {
    // Se entro a leer desde un curso: se vuelve a ese curso, desde cualquier
    // pantalla del ejercicio y sin pasar por los menus de lectura.
    detenerCuentaAtras();
    const curso = origenLectura;
    origenLectura = null;
    irAPracticaLista(curso, curso.numero);
  } else {
    // Cualquier pantalla del ejercicio de lectura vuelve a la lista de niveles.
    volverAlMenuNivel();
  }
}

function actualizarIndicadorNivel() {
  indicadorNivelEl.textContent = `${t().claves[claveActual.id]} · ${t().niveles[nivelActual.id]}`;
}

function pausar() {
  estado = "pausado";
  tiempoPausaInicio = Date.now();
  actualizarUI();
}

function reanudar() {
  estado = "jugando";
  tiempoPausadoAcumulado += Date.now() - tiempoPausaInicio;
  tiempoPausaInicio = null;
  actualizarUI();
}

function formatearTiempo(milisegundos) {
  const segundosTotales = Math.round(milisegundos / 1000);
  const minutos = Math.floor(segundosTotales / 60);
  const segundos = segundosTotales % 60;
  return minutos > 0 ? t().tiempoMin(minutos, segundos) : t().tiempoSeg(segundos);
}

// Basado en el número de fallos, no en el porcentaje: es más fácil de
// entender para el alumno ("cero fallos = 3 estrellas").
function calcularEstrellas(fallosRonda) {
  if (fallosRonda === 0) return 3;
  if (fallosRonda <= 2) return 2;
  if (fallosRonda <= 4) return 1;
  return 0;
}

function mostrarEstrellas(cantidad) {
  resultadoEstrellasEl.innerHTML = "";
  for (let i = 0; i < 3; i += 1) {
    const estrella = document.createElement("span");
    estrella.className = i < cantidad ? "estrella llena" : "estrella";
    estrella.textContent = "★";
    resultadoEstrellasEl.appendChild(estrella);
  }
}

function renderizarTablaSesion() {
  let totalAciertos = 0;
  let totalFallos = 0;
  let totalEstrellas = 0;
  let totalTiempo = 0;

  const filas = resultadosSesion
    .map((r) => {
      totalAciertos += r.aciertos;
      totalFallos += r.fallos;
      totalEstrellas += r.estrellas;
      totalTiempo += r.tiempo;
      const estrellasTexto = "★".repeat(r.estrellas) + "☆".repeat(3 - r.estrellas);
      return `<tr>
        <td>${r.serie}</td>
        <td>${r.ejercicio}</td>
        <td>${r.aciertos}</td>
        <td>${r.fallos}</td>
        <td>${estrellasTexto}</td>
        <td>${formatearTiempo(r.tiempo)}</td>
      </tr>`;
    })
    .join("");

  tablaSesionContenedorEl.innerHTML = `
    <table id="tabla-sesion">
      <thead>
        <tr>
          <th>${t().columnaSerie}</th>
          <th>${t().columnaEjercicio}</th>
          <th>${t().columnaAciertos}</th>
          <th>${t().columnaFallos}</th>
          <th>${t().columnaEstrellas}</th>
          <th>${t().columnaTiempo}</th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
      <tfoot>
        <tr>
          <td colspan="2">${t().total}</td>
          <td>${totalAciertos}</td>
          <td>${totalFallos}</td>
          <td>${totalEstrellas} / ${resultadosSesion.length * 3}</td>
          <td>${formatearTiempo(totalTiempo)}</td>
        </tr>
      </tfoot>
    </table>
  `;
}

function actualizarTextosResultado() {
  const resultado = resultadosSesion[resultadosSesion.length - 1];
  const esUltimoEjercicio = indiceEjercicioGlobal === TOTAL_EJERCICIOS - 1;
  const esFinDeSerie = ejercicioActual === EJERCICIOS_POR_SERIE;

  if (esUltimoEjercicio) {
    resultadoTituloEl.textContent = t().sesionCompletada;
    botonContinuar.textContent = t().otraVez;
  } else if (esFinDeSerie) {
    resultadoTituloEl.textContent = t().serieCompletada(serieActual);
    botonContinuar.textContent = t().empezarSerie(serieActual + 1);
  } else {
    resultadoTituloEl.textContent = t().ejercicioCompletado(indiceEjercicioGlobal + 1, TOTAL_EJERCICIOS);
    botonContinuar.textContent = t().siguienteEjercicio;
  }

  leyendaEstrellasEl.textContent = t().leyendaEstrellas;
  resultadoPrecisionEl.textContent = t().precision(
    Math.round((resultado.aciertos / (resultado.aciertos + resultado.fallos)) * 100)
  );
  resultadoDetalleEl.textContent = t().detalle(NOTAS_POR_RONDA, resultado.fallos);
  resultadoTiempoEl.textContent = t().tiempo(formatearTiempo(resultado.tiempo));
  resultadoRachaEl.textContent = t().rachaMaxima(rachaMaxima);

  resultadoEl.classList.toggle("ancho", esUltimoEjercicio);
  tablaSesionContenedorEl.classList.toggle("oculto", !esUltimoEjercicio);
  if (esUltimoEjercicio) {
    renderizarTablaSesion();
  }
}

function finalizarEjercicioActual() {
  const tiempoEjercicio = Date.now() - tiempoInicio - tiempoPausadoAcumulado;
  const estrellasEjercicio = calcularEstrellas(fallos);

  resultadosSesion.push({
    serie: serieActual,
    ejercicio: ejercicioActual,
    aciertos,
    fallos,
    estrellas: estrellasEjercicio,
    tiempo: tiempoEjercicio,
  });

  estado = "terminado";
  mostrarEstrellas(estrellasEjercicio);
  actualizarTextosResultado();
  actualizarUI();
}

function actualizarUI() {
  const enMemorizacion = estado === "memorizando";
  const enProgreso = estado === "memorizando" || estado === "jugando" || estado === "pausado";
  const enLectura = enProgreso || estado === "inicio" || estado === "terminado";
  const enMenu = !enLectura;

  // El estado tambien va en el body para que el CSS pueda centrar las
  // pantallas que no tienen la zona de juego (menus, inicio y resumen).
  document.body.dataset.estado = estado;

  menuProgramaEl.classList.toggle("oculto", estado !== "menu-programa");
  menuClaveEl.classList.toggle("oculto", estado !== "menu-clave");
  menuNivelEl.classList.toggle("oculto", estado !== "menu-nivel");
  practicaNivelEl.classList.toggle("oculto", estado !== "practica-nivel");
  practicaCursoEl.classList.toggle("oculto", estado !== "practica-curso");
  practicaListaEl.classList.toggle("oculto", estado !== "practica-lista");
  practicaEjercicioEl.classList.toggle("oculto", estado !== "practica-ejercicio");
  indicadorNivelEl.classList.toggle("oculto", !enLectura);
  botonAtras.classList.toggle("oculto", estado === "menu-programa");
  botonAtras.textContent =
    origenLectura && enLectura
      ? `← ${t().practicaCursoTitulo(origenLectura.numero)}`
      : `← ${t().atras}`;

  // El marcador no aporta nada antes de empezar (todo a cero) ni en el
  // resumen (la tarjeta ya da esos datos).
  marcadorEl.classList.toggle("oculto", enMenu || estado === "inicio" || estado === "terminado");

  indicadorEjercicioEl.classList.toggle("oculto", !enProgreso);
  progresoPuntosEl.classList.toggle("oculto", !enProgreso);
  memorizacionEl.classList.toggle("oculto", !enMemorizacion);
  zonaEjercicio.classList.toggle("oculto", !enProgreso);
  zonaEjercicio.classList.toggle("pausada", estado === "pausado");
  contenedorBotones.classList.toggle("oculto", enMemorizacion);
  resultadoEl.classList.toggle("oculto", estado !== "terminado");
  botonEstado.classList.toggle("oculto", enMenu || estado === "terminado" || enMemorizacion);
  botonReiniciarSesion.classList.toggle("oculto", !enProgreso);

  habilitarBotonesNota(estado === "jugando");

  // En la pantalla inicial es el boton principal; durante el ejercicio se
  // vuelve pequeno para no competir con el pentagrama.
  botonEstado.classList.toggle("compacto", estado === "jugando" || estado === "pausado");

  if (estado === "inicio") {
    botonEstado.textContent = t().iniciarSesion;
  } else if (estado === "jugando") {
    botonEstado.textContent = t().pausar;
  } else if (estado === "pausado") {
    botonEstado.textContent = t().reanudar;
  }
}

function actualizarBotonesIdiomaActivo() {
  botonesIdioma.forEach((boton) => {
    boton.classList.toggle("activo", boton.dataset.lang === idioma);
  });
}

function aplicarIdioma(nuevoIdioma) {
  idioma = nuevoIdioma;
  localStorage.setItem(IDIOMA_GUARDADO_KEY, idioma);

  document.title = t().tituloPagina;
  etiquetaAciertosEl.textContent = t().aciertos;
  etiquetaFallosEl.textContent = t().fallos;
  etiquetaRachaEl.textContent = t().racha;
  memorizacionTextoEl.textContent = t().memorizaTitulo;
  botonReiniciarSesion.textContent = t().reiniciarSesion;
  menuClaveTituloEl.textContent = t().menuClaveTitulo;
  menuNivelTituloEl.textContent = t().menuNivelTitulo;
  renderizarPortada();
  renderizarMenuPrograma();
  renderizarMenuClave();
  renderizarMenuNivel();
  renderizarPracticaNiveles();
  if (nivelPractica) renderizarPracticaCursos();
  if (cursoPractica) renderizarPracticaLista();
  if (estado === "practica-ejercicio") renderizarPracticaEjercicio();
  actualizarIndicadorNivel();

  actualizarNombresBotonesNota();
  actualizarBotonesIdiomaActivo();
  actualizarUI();

  if (estado === "memorizando" || estado === "jugando" || estado === "pausado") {
    actualizarIndicadorEjercicio();
  }

  if (estado === "terminado") {
    actualizarTextosResultado();
  } else if (estado === "memorizando") {
    mostrarPentagramaCompleto();
  }
}

botonesIdioma.forEach((boton) => {
  boton.addEventListener("click", () => {
    vibrar(15);
    aplicarIdioma(boton.dataset.lang);
  });
});

botonEstado.addEventListener("click", () => {
  vibrar(15);
  if (estado === "inicio") {
    iniciarSesion();
  } else if (estado === "jugando") {
    pausar();
  } else if (estado === "pausado") {
    reanudar();
  }
});

botonAtras.addEventListener("click", () => {
  vibrar(15);
  volverAtras();
});

botonReiniciarSesion.addEventListener("click", () => {
  vibrar(15);
  volverAInicio();
});

botonContinuar.addEventListener("click", () => {
  vibrar(15);
  if (indiceEjercicioGlobal === TOTAL_EJERCICIOS - 1) {
    iniciarSesion();
  } else {
    avanzarSiguienteEjercicio();
  }
});

crearBotones(BOTONES_ID);
actualizarMarcador();
aplicarIdioma(idioma);
