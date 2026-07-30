import { Renderer, Stave, StaveNote, Formatter } from "vexflow";
import * as Tone from "tone";
import "./style.css";

// Notas que se pueden practicar en esta pantalla: do central a sol.
const NOTAS = [
  { nombre: "do", vex: "c/4" },
  { nombre: "re", vex: "d/4" },
  { nombre: "mi", vex: "e/4" },
  { nombre: "fa", vex: "f/4" },
  { nombre: "sol", vex: "g/4" },
];

// Botones de respuesta: las siete notas.
const BOTONES = ["do", "re", "mi", "fa", "sol", "la", "si"];

const contenedorPentagrama = document.getElementById("pentagrama");
const contenedorBotones = document.getElementById("botones");
const contadorAciertosEl = document.getElementById("contador-aciertos");
const contadorFallosEl = document.getElementById("contador-fallos");

let aciertos = 0;
let fallos = 0;
let notaActual = elegirNotaAleatoria();

const synth = new Tone.Synth().toDestination();
let audioListo = false;

async function asegurarAudio() {
  if (!audioListo) {
    await Tone.start();
    audioListo = true;
  }
}

function elegirNotaAleatoria() {
  return NOTAS[Math.floor(Math.random() * NOTAS.length)];
}

function dibujarPentagrama() {
  contenedorPentagrama.innerHTML = "";
  contenedorPentagrama.classList.remove("fallo");

  const renderer = new Renderer(contenedorPentagrama, Renderer.Backends.SVG);
  renderer.resize(300, 160);
  const contexto = renderer.getContext();

  const pentagrama = new Stave(10, 20, 260);
  pentagrama.addClef("treble");
  pentagrama.setContext(contexto).draw();

  const nota = new StaveNote({
    keys: [notaActual.vex],
    duration: "w",
  });

  Formatter.FormatAndDraw(contexto, pentagrama, [nota]);
}

function crearBotones() {
  contenedorBotones.innerHTML = "";
  BOTONES.forEach((nombreNota) => {
    const boton = document.createElement("button");
    boton.className = "boton-nota";
    boton.textContent = nombreNota;
    boton.addEventListener("click", () => manejarRespuesta(nombreNota, boton));
    contenedorBotones.appendChild(boton);
  });
}

function actualizarMarcador() {
  contadorAciertosEl.textContent = aciertos;
  contadorFallosEl.textContent = fallos;
}

async function manejarRespuesta(nombreNota, boton) {
  await asegurarAudio();

  if (nombreNota === notaActual.nombre) {
    aciertos += 1;
    actualizarMarcador();
    sonarNota(notaActual.vex);
    notaActual = elegirNotaAleatoria();
    dibujarPentagrama();
  } else {
    fallos += 1;
    actualizarMarcador();
    mostrarFallo(boton);
  }
}

function sonarNota(vexKey) {
  // vexKey tiene forma "c/4" -> Tone.js espera "C4"
  const [letra, octava] = vexKey.split("/");
  synth.triggerAttackRelease(`${letra.toUpperCase()}${octava}`, "8n");
}

function mostrarFallo(boton) {
  contenedorPentagrama.classList.add("fallo");
  boton.classList.add("fallo");
  setTimeout(() => {
    contenedorPentagrama.classList.remove("fallo");
    boton.classList.remove("fallo");
  }, 400);
}

crearBotones();
dibujarPentagrama();
actualizarMarcador();
