import { Renderer, Stave, StaveNote, Formatter, Annotation } from "vexflow";
import * as Tone from "tone";
import "./style.css";

// Notas que se pueden practicar en esta pantalla: do central a sol.
// "id" es el identificador interno (siempre el mismo, no se traduce).
const NOTAS = [
  { id: "do", vex: "c/4" },
  { id: "re", vex: "d/4" },
  { id: "mi", vex: "e/4" },
  { id: "fa", vex: "f/4" },
  { id: "sol", vex: "g/4" },
];

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
    aciertos: "Aciertos",
    fallos: "Fallos",
    racha: "Racha",
    iniciarSesion: "Iniciar sesión",
    pausar: "Pausar",
    reanudar: "Reanudar",
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
    aciertos: "Réussites",
    fallos: "Erreurs",
    racha: "Série",
    iniciarSesion: "Démarrer la session",
    pausar: "Pause",
    reanudar: "Reprendre",
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
    rachaMaxima: (r) => `Série maximale : ${r}`,
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
const progresoPuntosEl = document.getElementById("progreso-puntos");
const botonEstado = document.getElementById("boton-estado");
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
const SEGUNDOS_MEMORIZACION = 5;

// estado posibles: "inicio", "memorizando", "jugando", "pausado", "terminado"
let estado = "inicio";
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
  return Math.min(nivel + 1, NOTAS.length - 1);
}

function elegirSiguienteNotaIndice(indiceAnterior, indiceRonda) {
  if (indiceAnterior === null) {
    return Math.floor(Math.random() * NOTAS.length);
  }

  const saltoMaximo = saltoMaximoPermitido(indiceRonda);
  const candidatos = [];
  for (let i = 0; i < NOTAS.length; i += 1) {
    if (i === indiceAnterior) continue;
    if (Math.abs(i - indiceAnterior) <= saltoMaximo) candidatos.push(i);
  }

  return candidatos[Math.floor(Math.random() * candidatos.length)];
}

function elegirSiguienteNota() {
  notaActualIndice = elegirSiguienteNotaIndice(notaActualIndice, notasCompletadas);
  notaActual = NOTAS[notaActualIndice];
}

function dibujarPentagrama() {
  contenedorPentagrama.innerHTML = "";
  contenedorPentagrama.classList.remove("fallo", "acierto");

  const renderer = new Renderer(contenedorPentagrama, Renderer.Backends.SVG);
  renderer.resize(500, 240);
  const contexto = renderer.getContext();

  const pentagrama = new Stave(20, 40, 450);
  pentagrama.addClef("treble");
  pentagrama.setContext(contexto).draw();

  const nota = new StaveNote({
    keys: [notaActual.vex],
    duration: "w",
  });

  Formatter.FormatAndDraw(contexto, pentagrama, [nota]);
}

// Muestra las 5 notas del rango a la vez, con su nombre debajo, para que
// el alumno las memorice antes de empezar el ejercicio.
function mostrarPentagramaCompleto() {
  contenedorPentagrama.innerHTML = "";
  contenedorPentagrama.classList.remove("fallo", "acierto");

  const renderer = new Renderer(contenedorPentagrama, Renderer.Backends.SVG);
  renderer.resize(500, 260);
  const contexto = renderer.getContext();

  const pentagrama = new Stave(20, 40, 450);
  pentagrama.addClef("treble");
  pentagrama.setContext(contexto).draw();

  const notasStave = NOTAS.map((nota) => {
    const staveNote = new StaveNote({ keys: [nota.vex], duration: "q" });
    const etiqueta = new Annotation(t().notas[nota.id]);
    etiqueta.setVerticalJustification(Annotation.VerticalJustify.BOTTOM);
    etiqueta.setFont("Arial, sans-serif", 16, "normal");
    etiqueta.setStyle({ fillStyle: "#3a322c", strokeStyle: "#3a322c" });
    staveNote.addModifier(etiqueta, 0);
    return staveNote;
  });

  Formatter.FormatAndDraw(contexto, pentagrama, notasStave);
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
    punto.classList.toggle("completado", indice < notasCompletadas);
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

  indicadorEjercicioEl.classList.toggle("oculto", !enProgreso);
  progresoPuntosEl.classList.toggle("oculto", !enProgreso);
  memorizacionEl.classList.toggle("oculto", !enMemorizacion);
  zonaEjercicio.classList.toggle("oculto", estado === "inicio" || estado === "terminado");
  zonaEjercicio.classList.toggle("pausada", estado === "pausado");
  contenedorBotones.classList.toggle("oculto", enMemorizacion);
  resultadoEl.classList.toggle("oculto", estado !== "terminado");
  botonEstado.classList.toggle("oculto", estado === "terminado" || enMemorizacion);

  habilitarBotonesNota(estado === "jugando");

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
