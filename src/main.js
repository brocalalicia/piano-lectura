import { Renderer, Stave, StaveNote, Formatter, Annotation } from "vexflow";
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
    tituloPagina: "Lectura musical",
    portadaTitulo: "Ejercicios de lectura",
    portadaObjetivo:
      "Reconocer de un vistazo el nombre de cada nota escrita, sin contar líneas. Es la base para leer una partitura con soltura.",
    consisteTitulo: "En qué consiste",
    consisteTexto:
      "Aparece una nota en el pentagrama y eliges su nombre entre los siete botones. Si aciertas, la escuchas sonar y viene la siguiente. Si fallas, la nota se queda ahí hasta que la encuentres.",
    sesionTitulo: "Cómo es una sesión",
    sesionLista: [
      "10 segundos para memorizar las notas del nivel",
      "2 series de 3 ejercicios, 10 notas cada uno",
      "La serie 2 es más difícil: saltos más grandes y los botones cambian de orden",
      "Al final, una tabla con los 6 ejercicios",
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
    tituloPagina: "Lecture musicale",
    portadaTitulo: "Exercices de lecture",
    portadaObjetivo:
      "Reconnaître d'un coup d'œil le nom de chaque note écrite, sans compter les lignes. C'est la base pour lire une partition avec aisance.",
    consisteTitulo: "En quoi ça consiste",
    consisteTexto:
      "Une note apparaît sur la portée et tu choisis son nom parmi les sept boutons. Si tu as raison, tu l'entends sonner et la suivante arrive. Si tu te trompes, la note reste là jusqu'à ce que tu la trouves.",
    sesionTitulo: "Comment se passe une session",
    sesionLista: [
      "10 secondes pour mémoriser les notes du niveau",
      "2 séries de 3 exercices, 10 notes chacun",
      "La série 2 est plus difficile : sauts plus grands et boutons dans un autre ordre",
      "À la fin, un tableau avec les 6 exercices",
    ],
    medidasTitulo: "Ce que tu peux améliorer",
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
    leyendaEstrellas: "0 erreur = 3 étoiles · 1-2 erreurs = 2 · 3-4 erreurs = 1",
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

// estados posibles: "menu-clave", "menu-nivel", "inicio", "memorizando",
// "jugando", "pausado", "terminado"
let estado = "menu-clave";
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
  if (!audioListo) {
    await Tone.start();
    audioListo = true;
  }
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

function sonarNota(vexKey) {
  // vexKey tiene forma "c/4" -> Tone.js espera "C4"
  const [letra, octava] = vexKey.split("/");
  synth.triggerAttackRelease(`${letra.toUpperCase()}${octava}`, "8n");
}

function sonarFallo() {
  // Sonido corto y descendente, amistoso, no de castigo.
  const ahora = Tone.now();
  synthFallo.triggerAttackRelease("E3", "16n", ahora);
  synthFallo.triggerAttackRelease("C3", "16n", ahora + 0.09);
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
// que dio el alumno. Desde la eleccion de clave ya no hay nada detras.
function volverAtras() {
  if (estado === "menu-nivel") {
    volverAlMenuClave();
  } else if (estado !== "menu-clave") {
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
  const enMenu = estado === "menu-clave" || estado === "menu-nivel";

  // El estado tambien va en el body para que el CSS pueda centrar las
  // pantallas que no tienen la zona de juego (menus, inicio y resumen).
  document.body.dataset.estado = estado;

  menuClaveEl.classList.toggle("oculto", estado !== "menu-clave");
  menuNivelEl.classList.toggle("oculto", estado !== "menu-nivel");
  indicadorNivelEl.classList.toggle("oculto", enMenu);
  botonAtras.classList.toggle("oculto", estado === "menu-clave");

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
  botonAtras.textContent = `← ${t().atras}`;
  menuClaveTituloEl.textContent = t().menuClaveTitulo;
  menuNivelTituloEl.textContent = t().menuNivelTitulo;
  renderizarPortada();
  renderizarMenuClave();
  renderizarMenuNivel();
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
