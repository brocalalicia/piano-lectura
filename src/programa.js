// Catalogo del programa de practica.
//
//   nivel  ->  8 cursos  ->  4-6 ejercicios por curso
//
// Cada ejercicio es de uno de estos dos tipos:
//   dibujada   -> formula tecnica, se dibuja dentro de la app
//   referencia -> uno de los metodos de la profesora: se dice donde mirarlo,
//                 nunca se copia la pagina (tienen derechos de autor)
//
// Pensado para editarse a mano: el orden de las listas es el orden en que
// aparecen en pantalla.

const CINCO_DEDOS_DERECHA = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "d/4", d: "2" }, { n: "e/4", d: "3" }, { n: "f/4", d: "4" },
        { barra: true },
        { n: "g/4", d: "5" }, { n: "f/4", d: "4" }, { n: "e/4", d: "3" }, { n: "d/4", d: "2" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const CINCO_DEDOS_IZQUIERDA = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "d/3", d: "4" }, { n: "e/3", d: "3" }, { n: "f/3", d: "2" },
        { barra: true },
        { n: "g/3", d: "1" }, { n: "f/3", d: "2" }, { n: "e/3", d: "3" }, { n: "d/3", d: "4" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

const NOTAS_REPETIDAS = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "c/4", d: "1" }, { n: "d/4", d: "2" }, { n: "d/4", d: "2" },
        { barra: true },
        { n: "e/4", d: "3" }, { n: "e/4", d: "3" }, { n: "f/4", d: "4" }, { n: "f/4", d: "4" },
        { barra: true },
        { n: "g/4", d: "5", f: "h" }, { n: "g/4", d: "5", f: "h" },
      ],
    },
  ],
};


const ESCALA_DO_DERECHA = {
  tipo: "dibujada",
  digitacion: true,
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "d/4", d: "2" }, { n: "e/4", d: "3" }, { n: "f/4", d: "1" },
        { barra: true },
        { n: "g/4", d: "2" }, { n: "a/4", d: "3" }, { n: "b/4", d: "4" }, { n: "c/5", d: "5" },
        { barra: true },
        { n: "b/4", d: "4" }, { n: "a/4", d: "3" }, { n: "g/4", d: "2" }, { n: "f/4", d: "1" },
        { barra: true },
        { n: "e/4", d: "3" }, { n: "d/4", d: "2" }, { n: "c/4", d: "1", f: "h" },
      ],
    },
  ],
};

const ESCALA_DO_IZQUIERDA = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "d/3", d: "4" }, { n: "e/3", d: "3" }, { n: "f/3", d: "2" },
        { barra: true },
        { n: "g/3", d: "1" }, { n: "a/3", d: "3" }, { n: "b/3", d: "2" }, { n: "c/4", d: "1" },
        { barra: true },
        { n: "b/3", d: "2" }, { n: "a/3", d: "3" }, { n: "g/3", d: "1" }, { n: "f/3", d: "2" },
        { barra: true },
        { n: "e/3", d: "3" }, { n: "d/3", d: "4" }, { n: "c/3", d: "5", f: "h" },
      ],
    },
  ],
};

const ARPEGIO_DO = {
  tipo: "dibujada",
  digitacion: true,
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "e/4", d: "2" }, { n: "g/4", d: "3" }, { n: "c/5", d: "5" },
        { barra: true },
        { n: "g/4", d: "3" }, { n: "e/4", d: "2" }, { n: "c/4", d: "1", f: "h" },
      ],
    },
  ],
};

const ACORDES_TRES_SONIDOS = {
  tipo: "dibujada",
  digitacion: true,
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: ["c/4", "e/4", "g/4"], d: "1-3-5", f: "w" },
        { barra: true },
        { n: ["f/4", "a/4", "c/5"], d: "1-3-5", f: "w" },
        { barra: true },
        { n: ["g/4", "b/4", "d/5"], d: "1-3-5", f: "w" },
        { barra: true },
        { n: ["c/4", "e/4", "g/4"], d: "1-3-5", f: "w" },
      ],
    },
  ],
};


const CINCO_DEDOS_REDONDAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "w" }, { barra: true },
        { n: "d/4", d: "2", f: "w" }, { barra: true },
        { n: "e/4", d: "3", f: "w" }, { barra: true },
        { n: "f/4", d: "4", f: "w" }, { barra: true },
        { n: "g/4", d: "5", f: "w" },
      ],
    },
  ],
};

// La izquierda sube de fa a do central, que son las cinco notas de clave de fa
// del curso 1, y acaba con el pulgar en el do que comparte con la derecha.
const CINCO_DEDOS_REDONDAS_MI = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "f/3", d: "5", f: "w" }, { barra: true },
        { n: "g/3", d: "4", f: "w" }, { barra: true },
        { n: "a/3", d: "3", f: "w" }, { barra: true },
        { n: "b/3", d: "2", f: "w" }, { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const BLANCAS_Y_NEGRAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "h" }, { n: "d/4", d: "2", f: "h" },
        { barra: true },
        { n: "e/4", d: "3" }, { n: "f/4", d: "4" }, { n: "g/4", d: "5", f: "h" },
        { barra: true },
        { n: "g/4", d: "5" }, { n: "f/4", d: "4" }, { n: "e/4", d: "3" }, { n: "d/4", d: "2" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const NOTAS_REPETIDAS_MI = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "c/3", d: "5" }, { n: "d/3", d: "4" }, { n: "d/3", d: "4" },
        { barra: true },
        { n: "e/3", d: "3" }, { n: "e/3", d: "3" }, { n: "f/3", d: "2" }, { n: "f/3", d: "2" },
        { barra: true },
        { n: "g/3", d: "1", f: "h" }, { n: "g/3", d: "1", f: "h" },
      ],
    },
  ],
};

const TERCERAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "e/4", d: "3" }, { n: "d/4", d: "2" }, { n: "f/4", d: "4" },
        { barra: true },
        { n: "e/4", d: "3" }, { n: "g/4", d: "5" }, { n: "f/4", d: "4" }, { n: "d/4", d: "2" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const TERCERAS_MI = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "e/3", d: "3" }, { n: "d/3", d: "4" }, { n: "f/3", d: "2" },
        { barra: true },
        { n: "e/3", d: "3" }, { n: "g/3", d: "1" }, { n: "f/3", d: "2" }, { n: "d/3", d: "4" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

// Ejemplos para los bloques de teoria.
const FIGURAS = {
  tipo: "teoria",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "g/4", f: "w" }, { barra: true },
        { n: "g/4", f: "h" }, { n: "g/4", f: "h" }, { barra: true },
        { n: "g/4" }, { n: "g/4" }, { n: "g/4" }, { n: "g/4" },
      ],
    },
  ],
};

// El mismo ejemplo, mas el arbol de duraciones debajo.
const FIGURAS_Y_ARBOL = { ...FIGURAS, arbol: { figuras: ["redonda", "blanca", "negra"] } };

// Los mismos tres compases, pero callados.
const MANOS = { manos: true };

// --- Ejercicios con silencios (curso 4) ---------------------------------

const TOCAR_Y_CALLAR = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { silencio: true }, { n: "d/4", d: "2" }, { silencio: true },
        { barra: true },
        { n: "e/4", d: "3" }, { silencio: true }, { n: "f/4", d: "4" }, { silencio: true },
        { barra: true },
        { n: "g/4", d: "5", f: "h" }, { silencio: true, f: "h" },
      ],
    },
  ],
};

const SILENCIO_LARGO = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "h" }, { silencio: true, f: "h" },
        { barra: true },
        { n: "e/4", d: "3", f: "h" }, { silencio: true, f: "h" },
        { barra: true },
        { n: "g/4", d: "5", f: "h" }, { silencio: true, f: "h" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const MANOS_ALTERNAS = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "d/4", d: "2" }, { n: "e/4", d: "3" }, { n: "f/4", d: "4" },
        { barra: true },
        { silencio: true }, { silencio: true }, { silencio: true }, { silencio: true },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
    {
      clef: "bass",
      notas: [
        { silencio: true }, { silencio: true }, { silencio: true }, { silencio: true },
        { barra: true },
        { n: "c/3", d: "5" }, { n: "d/3", d: "4" }, { n: "e/3", d: "3" }, { n: "f/3", d: "2" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

const SILENCIOS = {
  compas: "4/4",
  arbol: { silencios: true, figuras: ["redonda", "blanca", "negra"] },
  sistemas: [
    {
      clef: "treble",
      notas: [
        { silencio: true, f: "w" }, { barra: true },
        { silencio: true, f: "h" }, { silencio: true, f: "h" }, { barra: true },
        { silencio: true }, { silencio: true }, { silencio: true }, { silencio: true },
      ],
    },
  ],
};

// Tres compases que cuentan la historia entera: negras, las mismas notas en
// corcheas (el doble en el mismo sitio) y la corchea alternando con su
// silencio, que dura lo mismo que ella.
// Va en 2/4 a proposito: los tres compases caben en una linea corta y las
// notas se siguen leyendo en el movil.
const CORCHEAS = {
  compas: "2/4",
  arbol: { figuras: ["redonda", "blanca", "negra", "corchea"] },
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4" }, { n: "d/4" },
        { barra: true },
        { n: "c/4", f: "8" }, { n: "c/4", f: "8" }, { n: "d/4", f: "8" }, { n: "d/4", f: "8" },
        { barra: true },
        { n: "c/4", f: "8" }, { silencio: true, f: "8" }, { n: "d/4", f: "8" }, { silencio: true, f: "8" },
      ],
    },
  ],
};

// --- Curso 5: las corcheas y su silencio ---------------------------------

const CORCHEAS_SEGUIDAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "8" }, { n: "d/4", d: "2", f: "8" }, { n: "e/4", d: "3", f: "8" }, { n: "f/4", d: "4", f: "8" },
        { n: "g/4", d: "5", f: "8" }, { n: "f/4", d: "4", f: "8" }, { n: "e/4", d: "3", f: "8" }, { n: "d/4", d: "2", f: "8" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const CORCHEAS_SEGUIDAS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "8" }, { n: "d/3", d: "4", f: "8" }, { n: "e/3", d: "3", f: "8" }, { n: "f/3", d: "2", f: "8" },
        { n: "g/3", d: "1", f: "8" }, { n: "f/3", d: "2", f: "8" }, { n: "e/3", d: "3", f: "8" }, { n: "d/3", d: "4", f: "8" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

const NEGRAS_Y_CORCHEAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "d/4", d: "2" },
        { n: "e/4", d: "3", f: "8" }, { n: "f/4", d: "4", f: "8" }, { n: "g/4", d: "5", f: "8" }, { n: "f/4", d: "4", f: "8" },
        { barra: true },
        { n: "e/4", d: "3" }, { n: "d/4", d: "2" }, { n: "c/4", d: "1", f: "h" },
      ],
    },
  ],
};

const NEGRAS_Y_CORCHEAS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "d/3", d: "4" },
        { n: "e/3", d: "3", f: "8" }, { n: "f/3", d: "2", f: "8" }, { n: "g/3", d: "1", f: "8" }, { n: "f/3", d: "2", f: "8" },
        { barra: true },
        { n: "e/3", d: "3" }, { n: "d/3", d: "4" }, { n: "c/3", d: "5", f: "h" },
      ],
    },
  ],
};

const CORCHEA_Y_SILENCIO_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "8" }, { silencio: true, f: "8" }, { n: "d/4", d: "2", f: "8" }, { silencio: true, f: "8" },
        { n: "e/4", d: "3", f: "8" }, { silencio: true, f: "8" }, { n: "f/4", d: "4", f: "8" }, { silencio: true, f: "8" },
        { barra: true },
        { n: "g/4", d: "5", f: "h" }, { silencio: true, f: "h" },
      ],
    },
  ],
};

const CORCHEA_Y_SILENCIO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "8" }, { silencio: true, f: "8" }, { n: "d/3", d: "4", f: "8" }, { silencio: true, f: "8" },
        { n: "e/3", d: "3", f: "8" }, { silencio: true, f: "8" }, { n: "f/3", d: "2", f: "8" }, { silencio: true, f: "8" },
        { barra: true },
        { n: "g/3", d: "1", f: "h" }, { silencio: true, f: "h" },
      ],
    },
  ],
};

// La izquierda toca justo donde calla la derecha: el silencio de corchea es lo
// que deja el hueco, asi que hay que contarlo para entrar a tiempo.
const ALTERNAS_EN_CORCHEAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "8" }, { silencio: true, f: "8" }, { n: "d/4", d: "2", f: "8" }, { silencio: true, f: "8" },
        { n: "e/4", d: "3", f: "8" }, { silencio: true, f: "8" }, { n: "f/4", d: "4", f: "8" }, { silencio: true, f: "8" },
        { barra: true },
        { n: "g/4", d: "5", f: "w" },
      ],
    },
  ],
};

const ALTERNAS_EN_CORCHEAS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { silencio: true, f: "8" }, { n: "c/3", d: "5", f: "8" }, { silencio: true, f: "8" }, { n: "d/3", d: "4", f: "8" },
        { silencio: true, f: "8" }, { n: "e/3", d: "3", f: "8" }, { silencio: true, f: "8" }, { n: "f/3", d: "2", f: "8" },
        { barra: true },
        { n: "g/3", d: "1", f: "w" },
      ],
    },
  ],
};

const SEMICORCHEAS = {
  compas: "2/4",
  arbol: { figuras: ["negra", "corchea", "semicorchea"] },
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", f: "16" }, { n: "c/4", f: "16" }, { n: "c/4", f: "16" }, { n: "c/4", f: "16" },
        { n: "d/4", f: "16" }, { n: "d/4", f: "16" }, { n: "d/4", f: "16" }, { n: "d/4", f: "16" },
        { barra: true },
        { n: "c/4", f: "16" }, { silencio: true, f: "16" }, { n: "d/4", f: "16" }, { silencio: true, f: "16" },
        { n: "e/4", f: "16" }, { silencio: true, f: "16" }, { n: "f/4", f: "16" }, { silencio: true, f: "16" },
      ],
    },
  ],
};

// La misma duracion escrita de dos maneras: blanca ligada a negra y blanca con
// puntillo suenan igual.
const PUNTILLO_Y_LIGADURA = {
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", f: "h", ligado: true }, { n: "c/4" }, { n: "d/4" },
        { barra: true },
        { n: "c/4", f: "hd" }, { n: "d/4" },
      ],
    },
  ],
};

// En 6/8 el compas tiene dos tiempos y cada uno se parte en tres corcheas.
const COMPAS_TERNARIO = {
  compas: "6/8",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", f: "8" }, { n: "d/4", f: "8" }, { n: "e/4", f: "8" },
        { n: "f/4", f: "8" }, { n: "e/4", f: "8" }, { n: "d/4", f: "8" },
        { barra: true },
        { n: "c/4", f: "qd" }, { n: "e/4", f: "qd" },
      ],
    },
  ],
};

// El pentagrama con el sostenido y el bemol, y debajo el teclado con los dos
// unicos sitios donde dos teclas blancas son vecinas sin negra en medio:
// mi-fa y si-do estan a un semitono, todas las demas a un tono.
const COLOR_TONO = "var(--color-mano-izquierda)";
const COLOR_SEMITONO = "var(--color-primario)";

// El teclado con las dos distancias marcadas y nombradas: do-re es un tono,
// porque hay una negra en medio, y mi-fa un semitono, porque no la hay. Debajo,
// las dos teclas negras que se van a leer alteradas, con su nombre.
const ALTERACIONES = {
  tipo: "teoria",
  teclado: {
    octavas: 2,
    marcadas: [
      { indice: 0, color: COLOR_TONO }, { indice: 1, color: COLOR_TONO },
      { indice: 9, color: COLOR_SEMITONO }, { indice: 10, color: COLOR_SEMITONO },
    ],
    intervalos: [
      { desde: 0, hasta: 1, texto: { es: "tono", fr: "ton" }, color: COLOR_TONO },
      { desde: 9, hasta: 10, texto: { es: "semitono", fr: "demi-ton" }, color: COLOR_SEMITONO },
    ],
    negras: [
      { indice: 10, texto: { es: "fa♯", fr: "fa♯" }, color: COLOR_SEMITONO },
      { indice: 12, texto: { es: "si♭", fr: "si♭" }, color: COLOR_SEMITONO },
    ],
  },
  compas: "2/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "f/4" }, { n: "f/4", alt: "#" }, { barra: true },
        { n: "b/4" }, { n: "b/4", alt: "b" },
      ],
    },
  ],
};

// Tres compases con armadura de sol, que lleva un fa sostenido. En el primero
// los fa suenan sostenidos sin que se escriba nada; en el segundo un becuadro
// los vuelve naturales hasta el final del compas; en el tercero la linea
// divisoria ha borrado el becuadro y vuelve a mandar la armadura.
const ARMADURA_Y_ACCIDENTALES = {
  compas: "2/4",
  armadura: "G",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "f/4", t: "fa#" }, { n: "f/4", t: "fa#" },
        { barra: true },
        { n: "f/4", t: "fa#" }, { n: "f/4", alt: "n", t: "fa" },
        { barra: true },
        { n: "f/4", t: "fa#" }, { n: "f/4", t: "fa#" },
      ],
    },
  ],
};

const DOS_NOTAS = {
  tipo: "dibujada",
  digitacion: true,
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: ["c/4", "e/4"], d: "1-3", f: "h" }, { n: ["d/4", "f/4"], d: "2-4", f: "h" },
        { barra: true },
        { n: ["e/4", "g/4"], d: "3-5", f: "h" }, { n: ["c/4", "e/4"], d: "1-3", f: "h" },
      ],
    },
  ],
};


// --- Las dos manos en una sola ficha -------------------------------------
//
// Toda la tecnica se practica con las dos manos, asi que cada ejercicio lleva
// los dos pentagramas. Primero una mano, despues la otra y, cuando las dos
// salgan, juntas. Los dos sistemas tienen que llevar el mismo numero de
// figuras, o no quedan alineados.
function aDosManos(derecha, izquierda) {
  return { ...derecha, sistemas: [derecha.sistemas[0], izquierda.sistemas[0]] };
}

// En los cursos de manos separadas cada mano va en su propio ejercicio. Las dos
// manos no tocan lo mismo, y ponerlas en un solo sistema, con su llave, hace
// pensar que suenan a la vez. Ademas, para una primera clase son demasiadas
// notas de golpe.
const unaMano = (formula) => ({ tipo: "dibujada", compas: "4/4", ...formula });

const TOCAR_Y_CALLAR_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { silencio: true }, { n: "d/3", d: "4" }, { silencio: true },
        { barra: true },
        { n: "e/3", d: "3" }, { silencio: true }, { n: "f/3", d: "2" }, { silencio: true },
        { barra: true },
        { n: "g/3", d: "1", f: "h" }, { silencio: true, f: "h" },
      ],
    },
  ],
};

const SILENCIO_LARGO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "h" }, { silencio: true, f: "h" },
        { barra: true },
        { n: "e/3", d: "3", f: "h" }, { silencio: true, f: "h" },
        { barra: true },
        { n: "g/3", d: "1", f: "h" }, { silencio: true, f: "h" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

const BLANCAS_Y_NEGRAS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "h" }, { n: "d/3", d: "4", f: "h" },
        { barra: true },
        { n: "e/3", d: "3" }, { n: "f/3", d: "2" }, { n: "g/3", d: "1", f: "h" },
        { barra: true },
        { n: "g/3", d: "1" }, { n: "f/3", d: "2" }, { n: "e/3", d: "3" }, { n: "d/3", d: "4" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

const DOS_NOTAS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: ["c/3", "e/3"], d: "5-3", f: "h" }, { n: ["d/3", "f/3"], d: "4-2", f: "h" },
        { barra: true },
        { n: ["e/3", "g/3"], d: "3-1", f: "h" }, { n: ["c/3", "e/3"], d: "5-3", f: "h" },
      ],
    },
  ],
};

const ARPEGIO_DO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "e/3", d: "3" }, { n: "g/3", d: "2" }, { n: "c/4", d: "1" },
        { barra: true },
        { n: "g/3", d: "2" }, { n: "e/3", d: "3" }, { n: "c/3", d: "5", f: "h" },
      ],
    },
  ],
};

const ACORDES_TRES_SONIDOS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: ["c/3", "e/3", "g/3"], d: "5-3-1", f: "w" },
        { barra: true },
        { n: ["f/3", "a/3", "c/4"], d: "5-3-1", f: "w" },
        { barra: true },
        { n: ["g/3", "b/3", "d/4"], d: "5-3-1", f: "w" },
        { barra: true },
        { n: ["c/3", "e/3", "g/3"], d: "5-3-1", f: "w" },
      ],
    },
  ],
};

// --- Ejercicios nuevos de los cursos avanzados ---------------------------

// La misma posicion, trasladada al sol: sacar la mano del do.
const POSICION_SOL = aDosManos(
  {
    tipo: "dibujada",
    compas: "4/4",
    sistemas: [
      {
        clef: "treble",
        notas: [
          { n: "g/4", d: "1" }, { n: "a/4", d: "2" }, { n: "b/4", d: "3" }, { n: "c/5", d: "4" },
          { barra: true },
          { n: "d/5", d: "5" }, { n: "c/5", d: "4" }, { n: "b/4", d: "3" }, { n: "a/4", d: "2" },
          { barra: true },
          { n: "g/4", d: "1", f: "w" },
        ],
      },
    ],
  },
  {
    sistemas: [
      {
        clef: "bass",
        notas: [
          { n: "g/2", d: "5" }, { n: "a/2", d: "4" }, { n: "b/2", d: "3" }, { n: "c/3", d: "2" },
          { barra: true },
          { n: "d/3", d: "1" }, { n: "c/3", d: "2" }, { n: "b/2", d: "3" }, { n: "a/2", d: "4" },
          { barra: true },
          { n: "g/2", d: "5", f: "w" },
        ],
      },
    ],
  }
);

// El pulgar pasa por debajo en la derecha; en la izquierda cruza el 3.
const PREPARACION_PULGAR = aDosManos(
  {
    tipo: "dibujada",
    digitacion: true,
    compas: "4/4",
    sistemas: [
      {
        clef: "treble",
        notas: [
          { n: "c/4", d: "1" }, { n: "d/4", d: "2" }, { n: "e/4", d: "3" }, { n: "f/4", d: "1" },
          { barra: true },
          { n: "f/4", d: "1" }, { n: "e/4", d: "3" }, { n: "d/4", d: "2" }, { n: "c/4", d: "1" },
          { barra: true },
          { n: "c/4", d: "1", f: "w" },
        ],
      },
    ],
  },
  {
    sistemas: [
      {
        clef: "bass",
        notas: [
          { n: "g/3", d: "1" }, { n: "a/3", d: "3" }, { n: "b/3", d: "2" }, { n: "c/4", d: "1" },
          { barra: true },
          { n: "c/4", d: "1" }, { n: "b/3", d: "2" }, { n: "a/3", d: "3" }, { n: "g/3", d: "1" },
          { barra: true },
          { n: "g/3", d: "1", f: "w" },
        ],
      },
    ],
  }
);

// Curso 1: el mismo recorrido de Cinco dedos en redondas pero al reves, que
// obliga a leer de arriba abajo y a invertir la digitacion.
const BAJAR_REDONDAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "g/4", d: "5", f: "w" }, { barra: true },
        { n: "f/4", d: "4", f: "w" }, { barra: true },
        { n: "e/4", d: "3", f: "w" }, { barra: true },
        { n: "d/4", d: "2", f: "w" }, { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const BAJAR_REDONDAS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/4", d: "1", f: "w" }, { barra: true },
        { n: "b/3", d: "2", f: "w" }, { barra: true },
        { n: "a/3", d: "3", f: "w" }, { barra: true },
        { n: "g/3", d: "4", f: "w" }, { barra: true },
        { n: "f/3", d: "5", f: "w" },
      ],
    },
  ],
};

// Curso 1: las dos manos salen del do central con el pulgar y se alejan de el.
// Es la misma tecla escrita en las dos claves, que es lo que explica la teoria
// de esta clase.
const PULGARES_DO_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "w" }, { barra: true },
        { n: "d/4", d: "2", f: "w" }, { barra: true },
        { n: "e/4", d: "3", f: "w" }, { barra: true },
        { n: "d/4", d: "2", f: "w" }, { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const PULGARES_DO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/4", d: "1", f: "w" }, { barra: true },
        { n: "b/3", d: "2", f: "w" }, { barra: true },
        { n: "a/3", d: "3", f: "w" }, { barra: true },
        { n: "b/3", d: "2", f: "w" }, { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

// Curso 2: las tres figuras en el mismo ejercicio, en la posicion de do
// central, para que la variedad este en el ritmo y no en las notas.
const MEZCLA_FIGURAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "h" }, { n: "d/4", d: "2" }, { n: "e/4", d: "3" },
        { barra: true },
        { n: "f/4", d: "4", f: "h" }, { n: "g/4", d: "5", f: "h" },
        { barra: true },
        { n: "g/4", d: "5" }, { n: "f/4", d: "4" }, { n: "e/4", d: "3", f: "h" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const MEZCLA_FIGURAS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "f/3", d: "5", f: "h" }, { n: "g/3", d: "4" }, { n: "a/3", d: "3" },
        { barra: true },
        { n: "b/3", d: "2", f: "h" }, { n: "c/4", d: "1", f: "h" },
        { barra: true },
        { n: "c/4", d: "1" }, { n: "b/3", d: "2" }, { n: "a/3", d: "3", f: "h" },
        { barra: true },
        { n: "f/3", d: "5", f: "w" },
      ],
    },
  ],
};

// Curso 2: las dos manos arrancan por el dedo mas debil, el 5, en vez de por
// el pulgar como en todo lo anterior.
const DESDE_EL_MENIQUE_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "g/4", d: "5" }, { n: "f/4", d: "4" }, { n: "e/4", d: "3" }, { n: "d/4", d: "2" },
        { barra: true },
        { n: "c/4", d: "1" }, { n: "d/4", d: "2" }, { n: "e/4", d: "3" }, { n: "f/4", d: "4" },
        { barra: true },
        { n: "g/4", d: "5", f: "w" },
      ],
    },
  ],
};

const DESDE_EL_MENIQUE_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "f/3", d: "5" }, { n: "g/3", d: "4" }, { n: "a/3", d: "3" }, { n: "b/3", d: "2" },
        { barra: true },
        { n: "c/4", d: "1" }, { n: "b/3", d: "2" }, { n: "a/3", d: "3" }, { n: "g/3", d: "4" },
        { barra: true },
        { n: "f/3", d: "5", f: "w" },
      ],
    },
  ],
};

// Curso 3: el unisono en 3/4, tres tiempos por compas.
const JUNTAS_TRES_CUARTOS_MD = {
  tipo: "dibujada",
  compas: "3/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "h" }, { n: "d/4", d: "2" },
        { barra: true },
        { n: "e/4", d: "3", f: "h" }, { n: "f/4", d: "4" },
        { barra: true },
        { n: "g/4", d: "5" }, { n: "f/4", d: "4" }, { n: "e/4", d: "3" },
        { barra: true },
        { n: "d/4", d: "2" }, { n: "c/4", d: "1", f: "h" },
      ],
    },
  ],
};

const JUNTAS_TRES_CUARTOS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "h" }, { n: "d/3", d: "4" },
        { barra: true },
        { n: "e/3", d: "3", f: "h" }, { n: "f/3", d: "2" },
        { barra: true },
        { n: "g/3", d: "1" }, { n: "f/3", d: "2" }, { n: "e/3", d: "3" },
        { barra: true },
        { n: "d/3", d: "4" }, { n: "c/3", d: "5", f: "h" },
      ],
    },
  ],
};

// Curso 3: el unisono en 2/4, donde la blanca llena el compas entero.
const JUNTAS_DOS_CUARTOS_MD = {
  tipo: "dibujada",
  compas: "2/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "d/4", d: "2" },
        { barra: true },
        { n: "e/4", d: "3", f: "h" },
        { barra: true },
        { n: "f/4", d: "4" }, { n: "e/4", d: "3" },
        { barra: true },
        { n: "d/4", d: "2", f: "h" },
        { barra: true },
        { n: "c/4", d: "1", f: "h" },
      ],
    },
  ],
};

const JUNTAS_DOS_CUARTOS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "d/3", d: "4" },
        { barra: true },
        { n: "e/3", d: "3", f: "h" },
        { barra: true },
        { n: "f/3", d: "2" }, { n: "e/3", d: "3" },
        { barra: true },
        { n: "d/3", d: "4", f: "h" },
        { barra: true },
        { n: "c/3", d: "5", f: "h" },
      ],
    },
  ],
};

// --- Curso 6: sostenidos y bemoles ---------------------------------------

// La misma tecla blanca y la negra que tiene al lado, una y otra vez: es la
// distancia mas corta que hay en el piano.
const MEDIO_TONO_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "c/4", alt: "#", d: "2" }, { n: "c/4", d: "1" }, { n: "c/4", alt: "#", d: "2" },
        { barra: true },
        { n: "d/4", d: "2" }, { n: "d/4", alt: "#", d: "3" }, { n: "d/4", d: "2" }, { n: "d/4", alt: "#", d: "3" },
        { barra: true },
        { n: "e/4", d: "3", f: "w" },
      ],
    },
  ],
};

const MEDIO_TONO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "c/3", alt: "#", d: "4" }, { n: "c/3", d: "5" }, { n: "c/3", alt: "#", d: "4" },
        { barra: true },
        { n: "d/3", d: "4" }, { n: "d/3", alt: "#", d: "3" }, { n: "d/3", d: "4" }, { n: "d/3", alt: "#", d: "3" },
        { barra: true },
        { n: "e/3", d: "3", f: "w" },
      ],
    },
  ],
};

// Los mismos cinco dedos con el fa natural y con el fa sostenido, para oir en
// que cambia. Con el sostenido es la posicion de sol mayor.
const FA_SOSTENIDO_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "d/4", d: "2" }, { n: "e/4", d: "3" }, { n: "f/4", d: "4" },
        { barra: true },
        { n: "g/4", d: "5", f: "w" },
        { barra: true },
        { n: "c/4", d: "1" }, { n: "d/4", d: "2" }, { n: "e/4", d: "3" }, { n: "f/4", alt: "#", d: "4" },
        { barra: true },
        { n: "g/4", d: "5", f: "w" },
      ],
    },
  ],
};

const FA_SOSTENIDO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "d/3", d: "4" }, { n: "e/3", d: "3" }, { n: "f/3", d: "2" },
        { barra: true },
        { n: "g/3", d: "1", f: "w" },
        { barra: true },
        { n: "c/3", d: "5" }, { n: "d/3", d: "4" }, { n: "e/3", d: "3" }, { n: "f/3", alt: "#", d: "2" },
        { barra: true },
        { n: "g/3", d: "1", f: "w" },
      ],
    },
  ],
};

// Lo mismo desde el fa: con el si bemol es la posicion de fa mayor.
const SI_BEMOL_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "f/4", d: "1" }, { n: "g/4", d: "2" }, { n: "a/4", d: "3" }, { n: "b/4", d: "4" },
        { barra: true },
        { n: "c/5", d: "5", f: "w" },
        { barra: true },
        { n: "f/4", d: "1" }, { n: "g/4", d: "2" }, { n: "a/4", d: "3" }, { n: "b/4", alt: "b", d: "4" },
        { barra: true },
        { n: "c/5", d: "5", f: "w" },
      ],
    },
  ],
};

const SI_BEMOL_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "f/3", d: "5" }, { n: "g/3", d: "4" }, { n: "a/3", d: "3" }, { n: "b/3", d: "2" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
        { barra: true },
        { n: "f/3", d: "5" }, { n: "g/3", d: "4" }, { n: "a/3", d: "3" }, { n: "b/3", alt: "b", d: "2" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

// --- Curso 8: las semicorcheas y su silencio -----------------------------

const SEMICORCHEAS_SEGUIDAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "16" }, { n: "d/4", d: "2", f: "16" }, { n: "e/4", d: "3", f: "16" }, { n: "f/4", d: "4", f: "16" },
        { n: "g/4", d: "5", f: "16" }, { n: "f/4", d: "4", f: "16" }, { n: "e/4", d: "3", f: "16" }, { n: "d/4", d: "2", f: "16" },
        { n: "c/4", d: "1", f: "h" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const SEMICORCHEAS_SEGUIDAS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "16" }, { n: "d/3", d: "4", f: "16" }, { n: "e/3", d: "3", f: "16" }, { n: "f/3", d: "2", f: "16" },
        { n: "g/3", d: "1", f: "16" }, { n: "f/3", d: "2", f: "16" }, { n: "e/3", d: "3", f: "16" }, { n: "d/3", d: "4", f: "16" },
        { n: "c/3", d: "5", f: "h" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

const NEGRAS_Y_SEMICORCHEAS_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1" }, { n: "d/4", d: "2" },
        { n: "e/4", d: "3", f: "16" }, { n: "f/4", d: "4", f: "16" }, { n: "g/4", d: "5", f: "16" }, { n: "f/4", d: "4", f: "16" },
        { n: "e/4", d: "3" },
        { barra: true },
        { n: "d/4", d: "2", f: "h" }, { n: "c/4", d: "1", f: "h" },
      ],
    },
  ],
};

const NEGRAS_Y_SEMICORCHEAS_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5" }, { n: "d/3", d: "4" },
        { n: "e/3", d: "3", f: "16" }, { n: "f/3", d: "2", f: "16" }, { n: "g/3", d: "1", f: "16" }, { n: "f/3", d: "2", f: "16" },
        { n: "e/3", d: "3" },
        { barra: true },
        { n: "d/3", d: "4", f: "h" }, { n: "c/3", d: "5", f: "h" },
      ],
    },
  ],
};

const SEMICORCHEA_Y_SILENCIO_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "16" }, { silencio: true, f: "16" }, { n: "d/4", d: "2", f: "16" }, { silencio: true, f: "16" },
        { n: "e/4", d: "3", f: "16" }, { silencio: true, f: "16" }, { n: "f/4", d: "4", f: "16" }, { silencio: true, f: "16" },
        { n: "g/4", d: "5", f: "h" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const SEMICORCHEA_Y_SILENCIO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "16" }, { silencio: true, f: "16" }, { n: "d/3", d: "4", f: "16" }, { silencio: true, f: "16" },
        { n: "e/3", d: "3", f: "16" }, { silencio: true, f: "16" }, { n: "f/3", d: "2", f: "16" }, { silencio: true, f: "16" },
        { n: "g/3", d: "1", f: "h" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

// --- Curso 9: el puntillo y la ligadura de prolongacion ------------------

const PUNTILLO_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "hd" }, { n: "d/4", d: "2" },
        { barra: true },
        { n: "e/4", d: "3", f: "qd" }, { n: "f/4", d: "4", f: "8" }, { n: "g/4", d: "5", f: "h" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const PUNTILLO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "hd" }, { n: "d/3", d: "4" },
        { barra: true },
        { n: "e/3", d: "3", f: "qd" }, { n: "f/3", d: "2", f: "8" }, { n: "g/3", d: "1", f: "h" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

// "ligado" ata la nota con la siguiente: suenan como una sola, tambien por
// encima de la linea divisoria.
const LIGADURA_MD = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "h" }, { n: "c/4", d: "1", f: "h", ligado: true },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
        { barra: true },
        { n: "e/4", d: "3", ligado: true }, { n: "e/4", d: "3", f: "h" }, { n: "d/4", d: "2" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const LIGADURA_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "h" }, { n: "c/3", d: "5", f: "h", ligado: true },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
        { barra: true },
        { n: "e/3", d: "3", ligado: true }, { n: "e/3", d: "3", f: "h" }, { n: "d/3", d: "4" },
        { barra: true },
        { n: "c/3", d: "5", f: "w" },
      ],
    },
  ],
};

// --- Curso 10: compases binarios y ternarios -----------------------------

// En 6/8 el compas tiene dos tiempos y cada uno se parte en tres corcheas,
// que es lo que agrupa la barra de union.
const SEIS_OCHO_MD = {
  tipo: "dibujada",
  compas: "6/8",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "8" }, { n: "d/4", d: "2", f: "8" }, { n: "e/4", d: "3", f: "8" },
        { n: "f/4", d: "4", f: "8" }, { n: "e/4", d: "3", f: "8" }, { n: "d/4", d: "2", f: "8" },
        { barra: true },
        { n: "c/4", d: "1", f: "8" }, { n: "d/4", d: "2", f: "8" }, { n: "e/4", d: "3", f: "8" },
        { n: "f/4", d: "4", f: "8" }, { n: "g/4", d: "5", f: "8" }, { n: "f/4", d: "4", f: "8" },
        { barra: true },
        { n: "e/4", d: "3", f: "qd" }, { n: "c/4", d: "1", f: "qd" },
      ],
    },
  ],
};

const SEIS_OCHO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "8" }, { n: "d/3", d: "4", f: "8" }, { n: "e/3", d: "3", f: "8" },
        { n: "f/3", d: "2", f: "8" }, { n: "e/3", d: "3", f: "8" }, { n: "d/3", d: "4", f: "8" },
        { barra: true },
        { n: "c/3", d: "5", f: "8" }, { n: "d/3", d: "4", f: "8" }, { n: "e/3", d: "3", f: "8" },
        { n: "f/3", d: "2", f: "8" }, { n: "g/3", d: "1", f: "8" }, { n: "f/3", d: "2", f: "8" },
        { barra: true },
        { n: "e/3", d: "3", f: "qd" }, { n: "c/3", d: "5", f: "qd" },
      ],
    },
  ],
};

// El tiempo de 6/8 es una negra con puntillo: aqui se alterna el tiempo
// entero con sus tres corcheas, para sentir que duran lo mismo.
const TIEMPO_CON_PUNTILLO_MD = {
  tipo: "dibujada",
  compas: "6/8",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", d: "1", f: "qd" },
        { n: "c/4", d: "1", f: "8" }, { n: "d/4", d: "2", f: "8" }, { n: "e/4", d: "3", f: "8" },
        { barra: true },
        { n: "f/4", d: "4", f: "qd" },
        { n: "f/4", d: "4", f: "8" }, { n: "e/4", d: "3", f: "8" }, { n: "d/4", d: "2", f: "8" },
        { barra: true },
        { n: "c/4", d: "1", f: "8" }, { n: "d/4", d: "2", f: "8" }, { n: "e/4", d: "3", f: "8" },
        { n: "c/4", d: "1", f: "qd" },
      ],
    },
  ],
};

const TIEMPO_CON_PUNTILLO_MI = {
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "qd" },
        { n: "c/3", d: "5", f: "8" }, { n: "d/3", d: "4", f: "8" }, { n: "e/3", d: "3", f: "8" },
        { barra: true },
        { n: "f/3", d: "2", f: "qd" },
        { n: "f/3", d: "2", f: "8" }, { n: "e/3", d: "3", f: "8" }, { n: "d/3", d: "4", f: "8" },
        { barra: true },
        { n: "c/3", d: "5", f: "8" }, { n: "d/3", d: "4", f: "8" }, { n: "e/3", d: "3", f: "8" },
        { n: "c/3", d: "5", f: "qd" },
      ],
    },
  ],
};

// --- Las de una mano, ya unificadas --------------------------------------
const JUNTAS_TRES_CUARTOS = aDosManos(JUNTAS_TRES_CUARTOS_MD, JUNTAS_TRES_CUARTOS_MI);
const JUNTAS_DOS_CUARTOS = aDosManos(JUNTAS_DOS_CUARTOS_MD, JUNTAS_DOS_CUARTOS_MI);
const TERCERAS = aDosManos(TERCERAS_MD, TERCERAS_MI);
const BLANCAS_Y_NEGRAS = aDosManos(BLANCAS_Y_NEGRAS_MD, BLANCAS_Y_NEGRAS_MI);
const TOCAR_Y_CALLAR_DOS = aDosManos(TOCAR_Y_CALLAR, TOCAR_Y_CALLAR_MI);
const SILENCIO_LARGO_DOS = aDosManos(SILENCIO_LARGO, SILENCIO_LARGO_MI);
const DOS_NOTAS_DOS = aDosManos(DOS_NOTAS, DOS_NOTAS_MI);
const ESCALA_DO = aDosManos(ESCALA_DO_DERECHA, ESCALA_DO_IZQUIERDA);
const ARPEGIO_DO_DOS = aDosManos(ARPEGIO_DO, ARPEGIO_DO_MI);
const ACORDES_DOS = aDosManos(ACORDES_TRES_SONIDOS, ACORDES_TRES_SONIDOS_MI);
const CORCHEAS_SEGUIDAS = aDosManos(CORCHEAS_SEGUIDAS_MD, CORCHEAS_SEGUIDAS_MI);
const MEDIO_TONO = aDosManos(MEDIO_TONO_MD, MEDIO_TONO_MI);
const FA_SOSTENIDO = aDosManos(FA_SOSTENIDO_MD, FA_SOSTENIDO_MI);
const SI_BEMOL = aDosManos(SI_BEMOL_MD, SI_BEMOL_MI);
const SEMICORCHEAS_SEGUIDAS = aDosManos(SEMICORCHEAS_SEGUIDAS_MD, SEMICORCHEAS_SEGUIDAS_MI);
const NEGRAS_Y_SEMICORCHEAS = aDosManos(NEGRAS_Y_SEMICORCHEAS_MD, NEGRAS_Y_SEMICORCHEAS_MI);
const SEMICORCHEA_Y_SILENCIO = aDosManos(SEMICORCHEA_Y_SILENCIO_MD, SEMICORCHEA_Y_SILENCIO_MI);
const PUNTILLO = aDosManos(PUNTILLO_MD, PUNTILLO_MI);
const LIGADURA = aDosManos(LIGADURA_MD, LIGADURA_MI);
const SEIS_OCHO = aDosManos(SEIS_OCHO_MD, SEIS_OCHO_MI);
const TIEMPO_CON_PUNTILLO = aDosManos(TIEMPO_CON_PUNTILLO_MD, TIEMPO_CON_PUNTILLO_MI);
const NEGRAS_Y_CORCHEAS = aDosManos(NEGRAS_Y_CORCHEAS_MD, NEGRAS_Y_CORCHEAS_MI);
const CORCHEA_Y_SILENCIO = aDosManos(CORCHEA_Y_SILENCIO_MD, CORCHEA_Y_SILENCIO_MI);
const ALTERNAS_EN_CORCHEAS = aDosManos(ALTERNAS_EN_CORCHEAS_MD, ALTERNAS_EN_CORCHEAS_MI);

// --- Ilustraciones de teoria -------------------------------------------

// Dos octavas de teclado con las notas de las dos claves marcadas, cada mano
// de su color, y la clave al principio de cada grupo. El indice 7 es el do
// central: cierra el grupo de la izquierda y abre el de la derecha, asi que la
// tecla sale partida en dos colores.
const TECLADO_DOS_CLAVES = {
  teclado: {
    octavas: 2,
    marcadas: [
      { indice: 3, mano: "izquierda" },
      { indice: 4, mano: "izquierda" },
      { indice: 5, mano: "izquierda" },
      { indice: 6, mano: "izquierda" },
      { indice: 7, mano: ["izquierda", "derecha"] },
      { indice: 8, mano: "derecha" },
      { indice: 9, mano: "derecha" },
      { indice: 10, mano: "derecha" },
      { indice: 11, mano: "derecha" },
    ],
    claves: [
      { indice: 3, clef: "bass", mano: "izquierda" },
      { indice: 7, clef: "treble", mano: "derecha" },
    ],
  },
};

// Las notas que ya lee en cada clave, con el do central recuadrado en las dos:
// arriba es la primera y abajo la ultima, pero es la misma tecla.
const NOTAS_DE_LAS_DOS_CLAVES = {
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", t: "do central", f: "w", marca: true },
        { n: "d/4", t: "re", f: "w" },
        { n: "e/4", t: "mi", f: "w" },
        { n: "f/4", t: "fa", f: "w" },
        { n: "g/4", t: "sol", f: "w" },
      ],
    },
    {
      clef: "bass",
      notas: [
        { n: "f/3", t: "fa", f: "w" },
        { n: "g/3", t: "sol", f: "w" },
        { n: "a/3", t: "la", f: "w" },
        { n: "b/3", t: "si", f: "w" },
        { n: "c/4", t: "do central", f: "w", marca: true },
      ],
    },
  ],
};

// El compas: el esquema de los dos numeros y, debajo, las notas agrupadas.
const COMPAS_CUATRO = {
  compas: "4/4",
  compasEsquema: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4" }, { n: "d/4" }, { n: "e/4" }, { n: "f/4" },
        { barra: true },
        { n: "g/4" }, { n: "f/4" }, { n: "e/4" }, { n: "d/4" },
      ],
    },
  ],
};

// Tres tiempos arriba, dos abajo: se cuenta distinto.
const COMPASES_TRES_DOS = {
  sistemas: [
    {
      clef: "treble",
      compas: "3/4",
      notas: [{ n: "c/4" }, { n: "d/4" }, { n: "e/4" }, { barra: true }, { n: "d/4" }, { n: "c/4", f: "h" }],
    },
    {
      clef: "treble",
      compas: "2/4",
      notas: [{ n: "c/4" }, { n: "e/4" }, { barra: true }, { n: "d/4" }, { n: "c/4" }],
    },
  ],
};

// El acorde se construye por terceras: primero la nota, luego la de encima.
const ACORDE_CONSTRUCCION = {
  compas: "4/4",
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", t: "do", f: "w" }, { barra: true },
        { n: ["c/4", "e/4"], t: "do + mi", f: "w" }, { barra: true },
        { n: ["c/4", "e/4", "g/4"], t: "do + mi + sol", f: "w" },
      ],
    },
  ],
};


function ejercicio(id, titulo, objetivo, indicaciones, partitura) {
  return { id, titulo, objetivo, indicaciones, partitura };
}

// En la lista de ejercicios solo cabe una linea, asi que de la explicacion de
// teoria se muestra la primera frase.
function primeraFrase(texto) {
  const cortar = (t) => `${(Array.isArray(t) ? t[0] : t).split(". ")[0]}.`;
  return { es: cortar(texto.es), fr: cortar(texto.fr) };
}

function teoria(id, titulo, texto, indicaciones, ejemplo, conceptos) {
  return {
    id,
    titulo,
    objetivo: primeraFrase(texto),
    indicaciones,
    partitura: {
      tipo: "teoria",
      texto,
      ...(conceptos ? { conceptos } : {}),
      ...(ejemplo && ejemplo.teclado ? { teclado: ejemplo.teclado } : {}),
      ...(ejemplo && ejemplo.manos ? { manos: true } : {}),
      ...(ejemplo && ejemplo.compasEsquema ? { compasEsquema: ejemplo.compasEsquema } : {}),
      ...(ejemplo && ejemplo.arbol ? { arbol: ejemplo.arbol } : {}),
      ...(ejemplo && ejemplo.sistemas ? { compas: ejemplo.compas, sistemas: ejemplo.sistemas } : {}),
      ...(ejemplo && ejemplo.armadura ? { armadura: ejemplo.armadura } : {}),
    },
  };
}

// Un concepto con su definicion, para el bloque de teoria.
const concepto = (termino, definicion) => ({ termino, definicion });

// El orden de la clase sale del metodo de la profesora: primero se lee la nota,
// despues se situa en el teclado, luego se piensa el dedo y al final el ritmo.
//
// La lectura no va al final de toda la teoria, sino pegada a la teoria que la
// abre: se explica como se lee y se lee ahi mismo. Despues viene el resto de
// la teoria, luego el piano y al final los metodos.
function ordenarClase(niveles) {
  niveles.forEach((nivel) => {
    nivel.cursos.forEach((curso) => {
      if (curso.ejercicios.length === 0) return;
      const de = (tipo) => curso.ejercicios.filter((e) => e.partitura.tipo === tipo);
      const teoria = de("teoria");
      curso.ejercicios = [
        ...teoria.slice(0, 1),
        ...de("lectura"),
        ...teoria.slice(1),
        ...de("dibujada"),
        ...de("referencia"),
      ];
    });
  });
  return niveles;
}

// Manda al otro programa de la app, al nivel de lectura que toca ese curso.
// Un bloque de lectura manda a una o varias sesiones del programa de Lectura.
// Las dos claves van siempre al mismo nivel y en el mismo curso: primero se
// afianza lo de la clase anterior y despues entran las notas nuevas.
function lectura(id, sesiones, titulo, objetivo, indicaciones) {
  return { id, titulo, objetivo, indicaciones, partitura: { tipo: "lectura", sesiones } };
}

const dosClaves = (nivel, papel) => [
  { clave: "sol", nivel, papel },
  { clave: "fa", nivel, papel },
];

// Las notas que cruzan el centro: la derecha por debajo del do central y la
// izquierda por encima, las dos con lineas adicionales. En el catalogo de
// lectura no se llaman igual en las dos claves (en sol es Avanzado 2 y en fa
// Avanzado 1), asi que el par se escribe a mano y no con dosClaves().
const lineasDelCentro = (papel) => [
  { clave: "sol", nivel: "avanzado2", papel },
  { clave: "fa", nivel: "avanzado1", papel },
];

// Referencia a un metodo de la profesora. La pagina es la impresa en el papel.
// Los tres metodos de referencia se usan en todos los cursos y se complementan:
// el Pouillard lleva la progresion tecnica clasica, el Chornet aporta las
// formulas por bloques (manos separadas, unisono, alternadas, dedos libres) y
// el Aaron pone la lectura y las piezas cortas. El repertorio entra a partir
// del curso 6. El Alfred no es una referencia continua: solo piezas sueltas
// cuando la profesora lo indique.
const pouillard = (donde) => ({ metodo: "Hervé y Pouillard, Méthode de piano débutants", donde });
const chornet = (donde) => ({ metodo: "Chornet, Ejercicios, estudios y obras para piano", donde });
const aaron = (donde) => ({ metodo: "Michael Aaron, curso para piano, grado 1", donde });
const repertorio = (donde) => ({ metodo: "Essential Piano Repertoire, Preparatory Level (Keith Snell)", donde });

// El metodo de trabajo de la profesora. Es el mismo en todos los cursos, asi
// que ningun bloque de metodo lleva indicaciones propias: se monta a manos
// separadas y se juntan despues, y cada nota se resuelve siempre en el mismo
// orden, nota -> teclado -> dedo -> duracion. Lo que sea propio de un curso va
// en el detalle, que es lo que describe las paginas, no como se trabajan.
const COMO_TRABAJAR = {
  es: [
    "Trabaja primero a manos separadas y júntalas sólo cuando cada una vaya sola.",
    "En cada nota, siempre el mismo orden: qué nota es, dónde cae en el teclado, con qué dedo se toca y, por último, cuánto dura.",
  ],
  fr: [
    "Travaille d'abord en mains séparées et ne les réunis que lorsque chacune tient toute seule.",
    "Sur chaque note, toujours le même ordre : quelle note c'est, où elle tombe sur le clavier, avec quel doigt la jouer et, pour finir, combien de temps elle dure.",
  ],
};

function referencia(id, titulo, fuentes, detalle) {
  return {
    id,
    titulo,
    objetivo: detalle,
    indicaciones: COMO_TRABAJAR,
    partitura: { tipo: "referencia", fuentes, detalle },
  };
}

const CURSO_PENDIENTE = { ejercicios: [] };

const NIVELES = [
  {
    id: "primeros-pasos",
    nombre: { es: "Primeros pasos", fr: "Premiers pas" },
    objetivo: {
      es: "Colocar la mano y tocar con seguridad en posición de cinco dedos, con pulso estable. Manos por separado y primeras manos juntas.",
      fr: "Placer la main et jouer avec assurance en position de cinq doigts, avec une pulsation stable. Mains séparées, puis premières mains ensemble.",
    },
    cursos: [
      {
        titulo: { es: "El pentagrama, las dos claves y el teclado", fr: "La portée, les deux clés et le clavier" },
        objetivo: {
          es: "Leer las primeras notas en las dos claves, encontrarlas en el teclado y tocarlas con los cinco dedos.",
          fr: "Lire ses premières notes dans les deux clés, les retrouver sur le clavier et les jouer des cinq doigts.",
        },
        ejercicios: [
          teoria("p1c1-pentagrama", { es: "El pentagrama, las claves y las primeras notas", fr: "La portée, les clés et les premières notes" },
            {
              es: [
                "La música se escribe sobre un pentagrama: cinco líneas y cuatro espacios. Al principio va la clave, que fija qué nota ocupa qué línea; a partir de ese punto se cuenta todo lo demás, pasando de línea a espacio sin saltarse nada.",
                "Hay dos claves porque el piano abarca demasiadas notas para un solo pentagrama: la mano izquierda necesitaría tantas líneas adicionales que no habría quien lo leyera.",
                "La clave de sol pone el sol en la segunda línea, y con ella lees la mano derecha: do, re, mi, fa y sol, con el do colgando de una línea adicional por debajo del pentagrama.",
                "La clave de fa pone el fa en la cuarta línea, y con ella lees la mano izquierda: fa, sol, la, si y do.",
                "El do central es la misma tecla en las dos claves: cuelga por debajo de la de sol y asoma por encima de la de fa. Por eso está recuadrado en los dos pentagramas.",
              ],
              fr: [
                "La musique s'écrit sur une portée : cinq lignes et quatre interlignes. La clé, placée au début, fixe quelle note occupe quelle ligne ; tout le reste se déduit de ce repère, en montant de ligne en interligne sans rien sauter.",
                "S'il existe deux clés, c'est que l'étendue du piano est trop vaste pour une seule portée : la main gauche exigerait tant de lignes supplémentaires que la lecture en deviendrait impossible.",
                "La clé de sol situe le sol sur la deuxième ligne ; c'est avec elle que se lit la main droite : do, ré, mi, fa et sol, le do suspendu à une ligne supplémentaire sous la portée.",
                "La clé de fa situe le fa sur la quatrième ligne ; c'est avec elle que se lit la main gauche : fa, sol, la, si et do.",
                "Le do central est la même touche dans les deux clés : il pend sous celle de sol et dépasse au-dessus de celle de fa. D'où le cadre qui l'entoure sur les deux portées.",
              ],
            },
            { es: ["Señala la clave y su nota de referencia antes de leer nada más.", "Mira el recuadro: el do central es la última nota de abajo y la primera de arriba, pero es la misma tecla.", "Sube y baja nombrando las notas en voz alta, sin tocar."], fr: ["Repère la clé et sa note de référence avant de lire quoi que ce soit.", "Regarde le cadre : le do central est la dernière note en bas et la première en haut, mais c'est la même touche.", "Monte et descends en nommant les notes à voix haute, sans jouer."] },
            NOTAS_DE_LAS_DOS_CLAVES,
            [
              concepto({ es: "Pentagrama", fr: "Portée" }, { es: "Las cinco líneas y los cuatro espacios sobre los que se escribe la música.", fr: "Les cinq lignes et les quatre interlignes sur lesquels s'écrit la musique." }),
              concepto({ es: "Clave", fr: "Clé" }, { es: "El signo del principio del pentagrama. Fija qué nota va en qué línea; a partir de ahí se cuentan todas las demás.", fr: "Le signe au début de la portée. Il fixe quelle note va sur quelle ligne ; tout le reste se compte à partir de là." }),
              concepto({ es: "Por qué hay dos", fr: "Pourquoi il y en a deux" }, { es: "Para no llenar la partitura de líneas adicionales. Cada clave coloca el pentagrama en un registro distinto del piano.", fr: "Pour éviter d'accumuler les lignes supplémentaires : chaque clé installe la portée dans un registre différent du clavier." }),
              concepto({ es: "Clave de sol", fr: "Clé de sol" }, { es: "Pone el sol en la segunda línea. Es la clave de la mano derecha.", fr: "Elle situe le sol sur la deuxième ligne. C'est la clé de la main droite." }),
              concepto({ es: "Clave de fa", fr: "Clé de fa" }, { es: "Pone el fa en la cuarta línea. Es la clave de la mano izquierda.", fr: "Elle situe le fa sur la quatrième ligne. C'est la clé de la main gauche." }),
              concepto({ es: "Línea adicional", fr: "Ligne supplémentaire" }, { es: "Una línea corta que se añade para las notas que no caben en el pentagrama, como el do central.", fr: "Une petite ligne ajoutée pour les notes qui ne tiennent pas sur la portée, comme le do central." }),
              concepto({ es: "Do central", fr: "Do central" }, { es: "La nota que comparten las dos claves: una sola tecla, escrita de dos maneras.", fr: "La note que les deux clés partagent : une seule touche, écrite de deux façons." }),
              concepto({ es: "Grado conjunto", fr: "Degré conjoint" }, { es: "Pasar de una línea al espacio siguiente, sin saltarse ninguna nota: do, re, mi, fa, sol.", fr: "Passer d'une ligne à l'interligne voisin, sans sauter de note : do, ré, mi, fa, sol." }),
            ]),
          lectura("p1c1-lectura", dosClaves("inicial1", "nuevas"),
            { es: "Inicial 1: de do central a sol y de fa a do central", fr: "Débutant 1 : du do central au sol et du fa au do central" },
            { es: "De do a sol en clave de sol y de fa a do central en clave de fa: lo que acabas de tocar con cada mano.", fr: "De do à sol en clé de sol et de fa à do central en clé de fa : ce que tu viens de jouer de chaque main." },
            { es: ["Una sesión de cada clave, seguidas, al final de la clase.", "Apunta los dos tiempos: son tu punto de partida."], fr: ["Une session de chaque clé, à la suite, à la fin du cours.", "Note les deux temps : c'est ton point de départ."] }),
teoria("p1c1-teclado", { es: "Del pentagrama al teclado", fr: "De la portée au clavier" },
            {
              es: [
                "Cada nota escrita es una tecla concreta. Para encontrarla te orientas por los grupos de teclas negras, nunca contando desde el extremo del piano.",
                "El do central está a la izquierda del grupo de dos teclas negras, hacia la mitad del teclado.",
                "Hacia la derecha vienen re, mi, fa y sol: es lo que lee la mano derecha en clave de sol.",
                "Hacia la izquierda están si, la, sol y fa: es lo que lee la mano izquierda en clave de fa.",
                "El do central pertenece a las dos, y por eso sale con los dos colores: cierra el grupo de la izquierda y abre el de la derecha.",
                "El orden es siempre el mismo: lee la nota, dila en voz alta y sólo entonces búscala en el teclado.",
              ],
              fr: [
                "Chaque note écrite correspond à une touche précise. Pour la trouver, on se repère aux groupes de touches noires, jamais en comptant depuis l'extrémité du clavier.",
                "Le do central se trouve immédiatement à gauche du groupe de deux touches noires, vers le milieu du clavier.",
                "Vers la droite viennent ré, mi, fa et sol : c'est ce que lit la main droite en clé de sol.",
                "Vers la gauche se trouvent si, la, sol et fa : c'est ce que lit la main gauche en clé de fa.",
                "Le do central appartient aux deux, d'où ses deux couleurs : il ferme le groupe de gauche et ouvre celui de droite.",
                "Procède toujours dans le même ordre : lis la note, nomme-la à voix haute, puis cherche-la sur le clavier.",
              ],
            },
            { es: ["Busca todos los do del piano sin contar.", "Después, todos los fa: a la izquierda del grupo de tres.", "Di en voz alta de qué mano es cada nota antes de tocarla."], fr: ["Trouve tous les do du piano sans compter.", "Ensuite tous les fa : à gauche du groupe de trois.", "Dis à voix haute de quelle main est chaque note avant de la jouer."] },
            TECLADO_DOS_CLAVES,
            [
              concepto({ es: "Do central", fr: "Do central" }, { es: "El do que queda hacia el centro del piano, a la izquierda de un grupo de dos teclas negras. Es la frontera entre las dos claves.", fr: "Le do situé vers le centre du piano, à gauche d'un groupe de deux touches noires. C'est la frontière entre les deux clés." }),
              concepto({ es: "Teclas negras", fr: "Touches noires" }, { es: "Van en grupos de dos y de tres, y sirven para orientarse sin contar desde el extremo.", fr: "Groupées par deux et par trois, elles servent de repères : inutile de compter depuis l'extrémité du clavier." }),
              concepto({ es: "Registro", fr: "Registre" }, { es: "La zona del teclado que cubre cada clave: la de fa a la izquierda del do central, la de sol a la derecha.", fr: "La zone du clavier que couvre chaque clé : celle de fa à gauche du do central, celle de sol à droite." }),
            ]),
          teoria("p1c1-digitacion", { es: "Digitación", fr: "Doigté" },
            { es: "Los dedos se numeran del 1 al 5 empezando por el pulgar, y es igual en las dos manos: el pulgar siempre es el 1 y el meñique siempre el 5. Por eso los números van en espejo, y los dos pulgares se encuentran en el centro del teclado. En la partitura, el número pequeño junto a la nota dice con qué dedo tocarla.", fr: "Les doigts se numérotent de 1 à 5 en partant du pouce, et la règle vaut pour les deux mains : le pouce est toujours le 1, l'auriculaire toujours le 5. Les numéros se lisent donc en miroir, et les deux pouces se rejoignent au centre du clavier. Sur la partition, le petit chiffre placé près de la note indique le doigt à employer." },
            { es: ["Que sepas decir el número de cada dedo sin mirar el dibujo.", "Cuidado: no es el orden de izquierda a derecha, es desde el pulgar."], fr: ["Sache dire le numéro de chaque doigt sans regarder le dessin.", "Attention : ce n'est pas l'ordre de gauche à droite, c'est à partir du pouce."] },
            MANOS,
            [
              concepto({ es: "Pulgar, el 1", fr: "Pouce, le 1" }, { es: "En la mano derecha queda a la izquierda; en la izquierda, a la derecha. Los dos hacia el centro.", fr: "À la main droite il se trouve à gauche, à la main gauche il se trouve à droite : l'un et l'autre tournés vers le centre." }),
              concepto({ es: "Meñique, el 5", fr: "Auriculaire, le 5" }, { es: "El dedo más corto y el más débil: es el que hay que vigilar para que no se hunda.", fr: "Le doigt le plus court et le plus faible : c'est lui qu'il faut surveiller pour qu'il ne s'affaisse pas." }),
            ]),
          ejercicio("p1c1-md", { es: "Cinco dedos en redondas, mano derecha", fr: "Cinq doigts en rondes, main droite" },
            { es: "Una nota por compás: tiempo de sobra para colocar el dedo y escuchar.", fr: "Une note par mesure : tout le temps de placer le doigt et d'écouter le son." },
            { es: ["Cuenta cuatro en cada nota, en voz alta, y dedos curvos.", "Del do central hacia arriba, con el pulgar en el do."], fr: ["Compte quatre sur chaque note, à voix haute, et garde les doigts arrondis.", "Du do central vers le haut, le pouce sur le do."] },
            unaMano(CINCO_DEDOS_REDONDAS_MD)),
          ejercicio("p1c1-mi", { es: "Cinco dedos en redondas, mano izquierda", fr: "Cinq doigts en rondes, main gauche" },
            { es: "La misma fórmula con la izquierda, subiendo del fa al do central.", fr: "La même formule à la main gauche, du fa au do central." },
            { es: ["Cuenta cuatro en cada nota, igual que con la derecha.", "Aquí el pulgar es el que llega arriba, al do central: la misma tecla en la que empieza la derecha."], fr: ["Compte quatre sur chaque note, comme à la main droite.", "Ici c'est le pouce qui arrive en haut, sur le do central : la touche même où commence la main droite."] },
            unaMano(CINCO_DEDOS_REDONDAS_MI)),
          ejercicio("p1c1-bajar-md", { es: "Bajar de sol a do, mano derecha", fr: "Descendre du sol au do, main droite" },
            { es: "El mismo camino al revés: la lectura va de arriba abajo y los dedos, del 5 al 1.", fr: "Le même chemin à l'envers : la lecture va de haut en bas et les doigts, du 5 au 1." },
            { es: ["Bajar cuesta más que subir: ve más despacio de lo que crees.", "Acabas en el do central, con el pulgar."], fr: ["Descendre est plus difficile que monter : va plus lentement que tu ne le crois.", "Tu finis sur le do central, au pouce."] },
            unaMano(BAJAR_REDONDAS_MD)),
          ejercicio("p1c1-bajar-mi", { es: "Bajar de do a fa, mano izquierda", fr: "Descendre du do au fa, main gauche" },
            { es: "La izquierda baja del do central al fa, del pulgar al meñique.", fr: "La main gauche descend du do central au fa, du pouce à l'auriculaire." },
            { es: ["Empieza donde acaba la derecha: en el do central.", "El meñique llega al fa: vigila que no se hunda y que suene igual que los demás."], fr: ["Commence là où finit la main droite : sur le do central.", "L'auriculaire arrive sur le fa : veille à ce qu'il ne s'affaisse pas et sonne comme les autres."] },
            unaMano(BAJAR_REDONDAS_MI)),
          ejercicio("p1c1-pulgar-md", { es: "El do central con el pulgar, mano derecha", fr: "Le do central au pouce, main droite" },
            { es: "Salir del do central, alejarse tres notas y volver a él.", fr: "Partir du do central, s'en éloigner de trois notes et y revenir." },
            { es: ["Es la primera nota y la última: el pulgar no se mueve de su tecla.", "La izquierda hace lo mismo en el ejercicio siguiente, desde esa misma tecla."], fr: ["C'est la première note et la dernière : le pouce ne quitte pas sa touche.", "La main gauche fait de même dans l'exercice suivant, depuis cette même touche."] },
            unaMano(PULGARES_DO_MD)),
          ejercicio("p1c1-pulgar-mi", { es: "El do central con el pulgar, mano izquierda", fr: "Le do central au pouce, main gauche" },
            { es: "La izquierda sale del mismo do central, también con el pulgar, pero hacia abajo.", fr: "La main gauche part du même do central, au pouce également, mais vers le bas." },
            { es: ["Es la tecla del ejercicio anterior escrita en clave de fa: allí colgaba por debajo del pentagrama y aquí asoma por encima.", "El mismo número de dedo cae en una tecla distinta que en la derecha: por eso los dos pulgares se miran."], fr: ["C'est la touche de l'exercice précédent écrite en clé de fa : là elle pendait sous la portée, ici elle dépasse au-dessus.", "Le même numéro de doigt tombe sur une autre touche qu'à la main droite : c'est pourquoi les deux pouces se font face."] },
            unaMano(PULGARES_DO_MI)),
          referencia("p1c1-ref", { es: "Práctica a manos separadas", fr: "Travail en mains séparées" },
            [
              pouillard({ es: "Presentación págs. 4-6 y cap. I pág. 8", fr: "Présentation p. 4-6 et chap. I p. 8" }),
              chornet({ es: "pág. 11", fr: "p. 11" }),
              aaron({ es: "págs. 6-7", fr: "p. 6-7" }),
            ],
            { es: "Cómo sentarse al piano, la numeración de los dedos y las primeras melodías a 2 dedos.", fr: "Comment s'asseoir au piano, la numérotation des doigts et les premières mélodies à 2 doigts." }),
        ],
      },
      {
        titulo: { es: "Las figuras y los cinco dedos", fr: "Les figures et les cinq doigts" },
        objetivo: {
          es: "Poner duración a las notas que ya lees, e igualar el sonido de los cinco dedos.",
          fr: "Donner une durée aux notes que tu sais déjà lire et égaliser le son des cinq doigts.",
        },
        ejercicios: [
          teoria("p1c2-figuras", { es: "Redonda, blanca y negra", fr: "Ronde, blanche et noire" },
            { es: "La redonda dura cuatro tiempos, la blanca dos y la negra uno. Los tres compases del ejemplo duran lo mismo.", fr: "La ronde vaut quatre temps, la blanche deux et la noire un. Les trois mesures de l'exemple ont donc la même durée, bien qu'elles ne contiennent pas le même nombre de notes. L'arbre ci-dessous le résume : chaque figure vaut deux fois celle qui la suit." },
            { es: ["Da palmas contando en voz alta antes de tocarlo.", "La redonda ya la tocaste en el curso 1; hoy entran la blanca y la negra."], fr: ["Frappe dans les mains en comptant à voix haute avant de jouer.", "Tu as déjà joué la ronde au cours 1 ; aujourd'hui arrivent la blanche et la noire."] },
            FIGURAS_Y_ARBOL,
            [
              concepto({ es: "Redonda", fr: "Ronde" }, { es: "Cuatro tiempos. Se escribe hueca y sin palo.", fr: "Quatre temps. Tête vide, sans queue." }),
              concepto({ es: "Blanca", fr: "Blanche" }, { es: "Dos tiempos. Hueca y con palo.", fr: "Deux temps. Tête vide, avec une queue." }),
              concepto({ es: "Negra", fr: "Noire" }, { es: "Un tiempo. Rellena y con palo.", fr: "Un temps. Tête pleine, avec une queue." }),
              concepto({ es: "Tiempo", fr: "Temps" }, { es: "La unidad del pulso, lo que marcas con el pie o el metrónomo.", fr: "L'unité de la pulsation : ce que tu bats du pied, ou ce que marque le métronome." }),
            ]),
          lectura("p1c2-lectura", [...dosClaves("inicial1", "afianzar"), ...dosClaves("inicial2", "nuevas")],
            { es: "Inicial 2: de sol a do alto y de do a sol grave", fr: "Débutant 2 : du sol au do aigu et du do au sol grave" },
            { es: "De sol a do agudo por arriba y de do a sol grave por abajo: las notas que rodean la posición de cinco dedos.", fr: "De sol à do aigu vers le haut et de do à sol grave vers le bas : les notes qui entourent la position de cinq doigts." },
            { es: ["Empieza afianzando Inicial 1 en las dos claves y sigue con Inicial 2.", "En clave de fa, ojo con el do: en el curso 1 estaba arriba, en su línea adicional, y aquí está en el segundo espacio."], fr: ["Commence par consolider le Débutant 1 dans les deux clés, puis passe au Débutant 2.", "En clé de fa, attention au do : au cours 1 il était en haut, sur sa ligne supplémentaire, et ici il est au deuxième interligne."] }),
          ejercicio("p1c2-negras", { es: "Cinco dedos en negras, mano derecha", fr: "Cinq doigts en noires, main droite" },
            { es: "Subir y bajar sin parar entre nota y nota.", fr: "Monter et descendre sans s'arrêter entre les notes." },
            { es: ["Metrónomo a 60, una negra por clic.", "Los cinco dedos igual de fuertes: el 4 y el 5 tienden a quedarse cortos."], fr: ["Métronome à 60, une noire par clic.", "Les cinq doigts aussi forts les uns que les autres : le 4 et le 5 ont tendance à rester faibles."] },
            unaMano(CINCO_DEDOS_DERECHA)),
          ejercicio("p1c2-negras-mi", { es: "Cinco dedos en negras, mano izquierda", fr: "Cinq doigts en noires, main gauche" },
            { es: "Lo mismo con la izquierda, en la posición de do grave.", fr: "La même chose à la main gauche, en position de do grave." },
            { es: ["El mismo tempo que la derecha: si no llega, baja el metrónomo para las dos.", "Aquí el meñique empieza en el do, una octava por debajo del do central."], fr: ["Le même tempo qu'à la main droite : si elle ne suit pas, baisse le métronome pour les deux.", "Ici l'auriculaire part du do, une octave sous le do central."] },
            unaMano(CINCO_DEDOS_IZQUIERDA)),
          ejercicio("p1c2-mezcla", { es: "Mezclar las tres figuras, mano derecha", fr: "Mêler les trois figures, main droite" },
            { es: "Redonda, blanca y negra en el mismo ejercicio: hay que contar de verdad.", fr: "Ronde, blanche et noire dans le même exercice : il faut compter pour de bon." },
            { es: ["Cuenta 1-2-3-4 en voz alta de principio a fin, sin parar entre compases.", "La blanca dura dos: no la sueltes cuando entra la siguiente."], fr: ["Compte 1-2-3-4 à voix haute du début à la fin, sans t'arrêter entre les mesures.", "La blanche dure deux temps : ne la lâche pas quand la suivante arrive."] },
            unaMano(MEZCLA_FIGURAS_MD)),
          ejercicio("p1c2-mezcla-mi", { es: "Mezclar las tres figuras, mano izquierda", fr: "Mêler les trois figures, main gauche" },
            { es: "El mismo ritmo con la izquierda, en la posición de do central.", fr: "Le même rythme à la main gauche, en position de do central." },
            { es: ["Cuenta en voz alta igual que con la derecha, sin mirar el teclado.", "Aquí el pulgar es el que llega arriba, al do central."], fr: ["Compte à voix haute comme à la main droite, sans regarder le clavier.", "Ici c'est le pouce qui arrive en haut, sur le do central."] },
            unaMano(MEZCLA_FIGURAS_MI)),
          ejercicio("p1c2-menique", { es: "Empezar por el meñique, mano derecha", fr: "Commencer par l'auriculaire, main droite" },
            { es: "Arrancar por el dedo más débil en vez de por el pulgar.", fr: "Démarrer par le doigt le plus faible au lieu du pouce." },
            { es: ["El meñique tiende a hundirse: vigila que su nota suene igual de fuerte que las demás.", "Empieza en el sol, baja hasta el do central y vuelve."], fr: ["L'auriculaire a tendance à s'affaisser : veille à ce que sa note sonne aussi fort que les autres.", "Pars du sol, descends jusqu'au do central et remonte."] },
            unaMano(DESDE_EL_MENIQUE_MD)),
          ejercicio("p1c2-menique-mi", { es: "Empezar por el meñique, mano izquierda", fr: "Commencer par l'auriculaire, main gauche" },
            { es: "La izquierda también arranca por su 5, que aquí está en el fa.", fr: "La main gauche démarre elle aussi par son 5, qui se trouve ici sur le fa." },
            { es: ["Empieza en el fa, sube hasta el do central y vuelve.", "El mismo cuidado con el meñique que en la derecha."], fr: ["Pars du fa, monte jusqu'au do central et redescends.", "Le même soin pour l'auriculaire qu'à la main droite."] },
            unaMano(DESDE_EL_MENIQUE_MI)),
          ejercicio("p1c2-repetidas", { es: "Notas repetidas, mano derecha", fr: "Notes répétées, main droite" },
            { es: "Que el sonido salga del dedo y no del brazo.", fr: "Que le son vienne du doigt et non du bras." },
            { es: ["El brazo se queda quieto; sólo se mueve el dedo.", "Las dos notas iguales tienen que sonar iguales."], fr: ["Le bras reste immobile ; seul le doigt bouge.", "Les deux notes identiques doivent sonner de la même façon."] },
            unaMano(NOTAS_REPETIDAS)),
          ejercicio("p1c2-repetidas-mi", { es: "Notas repetidas, mano izquierda", fr: "Notes répétées, main gauche" },
            { es: "Lo mismo con la izquierda, donde cuesta más igualar las dos notas.", fr: "La même chose à la main gauche, où il est plus difficile d'égaliser les deux notes." },
            { es: ["El brazo se queda quieto; sólo se mueve el dedo.", "Escucha las dos notas: con la izquierda la segunda suele salir más floja."], fr: ["Le bras reste immobile ; seul le doigt bouge.", "Écoute les deux notes : à la main gauche, la seconde sort souvent plus faible."] },
            unaMano(NOTAS_REPETIDAS_MI)),
          referencia("p1c2-ref", { es: "Primeras melodías a manos separadas", fr: "Premières mélodies en mains séparées" },
            [
              pouillard({ es: "cap. I págs. 11-14", fr: "chap. I p. 11-14" }),
              chornet({ es: "págs. 12-13", fr: "p. 12-13" }),
              aaron({ es: "págs. 8-10", fr: "p. 8-10" }),
            ],
            { es: "Melodías a 3, 4 y 5 dedos, cada mano por separado y ya con negras.", fr: "Mélodies à 3, 4 et 5 doigts, chaque main séparément et déjà en noires." }),
        ],
      },
      {
        titulo: { es: "Manos juntas al unísono", fr: "Mains ensemble à l'unisson" },
        objetivo: {
          es: "Las dos manos a la vez haciendo lo mismo, con el pulso contado y el compás entendido.",
          fr: "Les deux mains en même temps, faisant la même chose, avec la pulsation comptée et la mesure comprise.",
        },
        ejercicios: [
          teoria("p1c3-compas", { es: "El compás y la línea divisoria", fr: "La mesure et la barre de mesure" },
            {
              es: [
                "La línea divisoria corta la música en compases de la misma duración. Al principio, dos números puestos uno encima de otro dicen cómo son.",
                "El de arriba cuenta: cuántos tiempos entran en cada compás.",
                "El de abajo nombra: qué figura vale un tiempo. Y no es un número cualquiera: dice en cuántas partes se ha dividido la redonda. Un 4 es la negra, porque cuatro negras hacen una redonda; un 2 es la blanca y un 8 la corchea.",
                "Así que 4/4 se lee «cuatro negras por compás».",
                "El primer tiempo se apoya un poco más que los demás, y ese acento es lo que deja oír dónde empieza cada compás: la barra se ve en el papel, el acento se oye.",
              ],
              fr: [
                "La barre de mesure découpe la musique en mesures de même durée. Au début, deux chiffres superposés indiquent comment elles sont faites.",
                "Celui du haut compte : combien de temps entrent dans chaque mesure.",
                "Celui du bas nomme : quelle figure vaut un temps. Ce n'est pas un chiffre arbitraire : il dit en combien de parts la ronde a été divisée. Un 4 désigne la noire, puisque quatre noires font une ronde ; un 2 désigne la blanche et un 8 la croche.",
                "Le 4/4 se lit donc « quatre noires par mesure ».",
                "Le premier temps s'appuie un peu plus que les autres, et cet accent permet d'entendre où commence chaque mesure : la barre se voit sur le papier, l'accent s'entend.",
              ],
            },
            { es: ["Cuenta 1-2-3-4 en cada compás y marca el primero con el pie.", "Truco: el número de abajo es el mismo que en el árbol de duraciones."], fr: ["Compte 1-2-3-4 dans chaque mesure et marque le premier du pied.", "Astuce : le chiffre du bas est le même que dans l'arbre des durées."] },
            COMPAS_CUATRO,
            [
              concepto({ es: "Compás", fr: "Mesure" }, { es: "Cada trozo de música entre dos líneas divisorias. Todos duran lo mismo.", fr: "Chaque portion de musique comprise entre deux barres. Toutes ont la même durée." }),
              concepto({ es: "Línea divisoria", fr: "Barre de mesure" }, { es: "La línea vertical que separa un compás del siguiente.", fr: "La ligne verticale qui sépare une mesure de la suivante." }),
              concepto({ es: "Indicación de compás", fr: "Chiffrage de mesure" }, { es: "Los dos números del principio, uno encima del otro. En español se les llama también «el compás»: 4/4, 3/4, 2/4.", fr: "Les deux chiffres du début, l'un au-dessus de l'autre. On dit aussi signature rythmique : 4/4, 3/4, 2/4." }),
              concepto({ es: "Número de arriba", fr: "Chiffre du haut" }, { es: "Cuántos tiempos hay en cada compás: 2, 3 o 4 en los compases que vas a ver ahora.", fr: "Combien de temps compte chaque mesure : 2, 3 ou 4 dans les mesures que tu verras pour l'instant." }),
              concepto({ es: "Número de abajo", fr: "Chiffre du bas" }, { es: "Qué figura vale un tiempo: 2 es la blanca, 4 la negra y 8 la corchea. Es la redonda dividida en esas partes.", fr: "Quelle figure vaut un temps : 2 pour la blanche, 4 pour la noire, 8 pour la croche. C'est la ronde divisée en autant de parts." }),
            ]),
          teoria("p1c3-compases", { es: "Los compases de 3/4 y 2/4", fr: "Les mesures à 3/4 et 2/4" },
            { es: "No todos los compases tienen cuatro tiempos. Con el mismo número de abajo, el 4, que sigue diciendo que la negra vale un tiempo, el de arriba cambia la cuenta: en 3/4 se cuenta 1-2-3, como un vals, y en 2/4 se cuenta 1-2, como una marcha. Las notas pueden ser las mismas y la música suena distinta, porque el apoyo del primer tiempo cae en otro sitio.", fr: "Toutes les mesures ne comptent pas quatre temps. Avec le même chiffre du bas, le 4, qui continue d'indiquer que la noire vaut un temps, celui du haut change le compte : à 3/4 on compte 1-2-3, comme une valse, et à 2/4 on compte 1-2, comme une marche. Les notes peuvent être les mêmes et la musique sonne autrement, parce que l'appui du premier temps tombe ailleurs." },
            { es: ["Da palmas en 3/4 y en 2/4 antes de tocar nada.", "Los dos ejercicios de hoy llevan las mismas notas: lo único que cambia es el compás."], fr: ["Frappe dans les mains à 3/4 puis à 2/4 avant de jouer quoi que ce soit.", "Les deux exercices du jour ont les mêmes notes : seule la mesure change."] },
            COMPASES_TRES_DOS),
          lectura("p1c3-lectura", [...dosClaves("inicial2", "afianzar"), ...dosClaves("intermedio", "nuevas")],
            { es: "Intermedio: de do alto a sol alto y de fa grave a do", fr: "Intermédiaire : du do aigu au sol aigu et du fa grave au do" },
            { es: "De do agudo a sol agudo por arriba y de fa grave a do por abajo: hasta donde llegan las manos en la posición de sol.", fr: "De do aigu à sol aigu vers le haut et de fa grave à do vers le bas : jusqu'où vont les mains dans la position de sol." },
            { es: ["Afianza Inicial 2 en las dos claves antes de entrar en Intermedio.", "Son las notas de la posición de sol: las lees justo el día que las tocas."], fr: ["Consolide le Débutant 2 dans les deux clés avant d'aborder l'Intermédiaire.", "Ce sont les notes de la position de sol : tu les lis le jour même où tu les joues."] }),
          ejercicio("p1c3-tresquartos", { es: "Manos juntas en 3/4", fr: "Mains ensemble à 3/4" },
            { es: "El unísono en compás de tres tiempos, con el apoyo siempre en el primero.", fr: "L'unisson à trois temps, avec l'appui toujours sur le premier." },
            { es: ["Cuenta 1-2-3 en voz alta y apoya el 1: es lo que hace que suene a vals.", "Los dedos van cruzados: el 1 con el 5, el 2 con el 4."], fr: ["Compte 1-2-3 à voix haute et appuie le 1 : c'est ce qui donne l'allure de valse.", "Les doigts se répondent en miroir : le 1 avec le 5, le 2 avec le 4."] },
            JUNTAS_TRES_CUARTOS),
          ejercicio("p1c3-doscuartos", { es: "Manos juntas en 2/4", fr: "Mains ensemble à 2/4" },
            { es: "Dos tiempos por compás: la blanca llena el compás entero ella sola.", fr: "Deux temps par mesure : la blanche remplit à elle seule toute la mesure." },
            { es: ["Cuenta 1-2 y marca el 1 con el pie.", "Compáralo con el de 3/4: son las mismas notas y suenan distinto."], fr: ["Compte 1-2 et marque le 1 du pied.", "Compare-le à celui à 3/4 : ce sont les mêmes notes et elles sonnent autrement."] },
            JUNTAS_DOS_CUARTOS),
          ejercicio("p1c3-blancasnegras", { es: "Manos juntas: blancas y negras", fr: "Mains ensemble : blanches et noires" },
            { es: "Juntar las manos cuando las figuras no son todas iguales.", fr: "Réunir les mains lorsque les figures n'ont pas toutes la même durée." },
            { es: ["Cuenta en voz alta: la blanca dura dos y no se suelta antes.", "Si una mano se adelanta, vuelve a manos separadas y sube el tempo despacio."], fr: ["Compte à voix haute : la blanche dure deux temps et ne se lâche pas avant.", "Si une main prend de l'avance, reviens aux mains séparées et augmente le tempo progressivement."] },
            BLANCAS_Y_NEGRAS),
          ejercicio("p1c3-posicionsol", { es: "La posición de sol", fr: "La position de sol" },
            { es: "Sacar la mano del do: la misma fórmula, cinco notas más arriba.", fr: "Quitter la position de do : la même formule, cinq notes plus haut." },
            { es: ["Mira primero dónde cae el sol en el teclado y en el papel.", "Es la posición del nivel de lectura que trabajas ahora."], fr: ["Repère d'abord le sol, sur le clavier comme sur le papier.", "C'est la position du niveau de lecture que tu travailles en ce moment."] },
            POSICION_SOL),
          referencia("p1c3-ref", { es: "Práctica a manos juntas, al unísono", fr: "Travail en mains ensemble, à l'unisson" },
            [
              pouillard({ es: "cap. II págs. 16-19", fr: "chap. II p. 16-19" }),
              chornet({ es: "págs. 14-16, manos juntas al unísono", fr: "p. 14-16, mains ensemble à l'unisson" }),
              aaron({ es: "págs. 17-18", fr: "p. 17-18" }),
            ],
            { es: "Las dos manos tocan lo mismo a la vez, separadas por una octava, y aparecen las primeras ligaduras.", fr: "Les deux mains jouent la même chose en même temps, à l'octave, et les premières liaisons apparaissent." }),
        ],
      },
      {
        titulo: { es: "Los silencios y las manos alternadas", fr: "Les silences et les mains alternées" },
        objetivo: {
          es: "Contar lo que no suena y repartir el trabajo entre las dos manos.",
          fr: "Compter ce qui ne sonne pas et partager le travail entre les deux mains.",
        },
        ejercicios: [
          teoria("p1c4-silencios", { es: "Los silencios", fr: "Les silences" },
            { es: "El silencio dice cuánto rato se calla la música, y se cuenta igual que una nota aunque no suene nada. Cada figura tiene el suyo y dura lo mismo: el de redonda cuatro tiempos, el de blanca dos y el de negra uno.", fr: "Le silence indique combien de temps la musique se tait ; il se compte exactement comme une note, même si rien ne sonne. À chaque figure correspond un silence de même durée : quatre temps pour celui de ronde, deux pour celui de blanche, un pour celui de noire." },
            { es: ["Cuenta el silencio en voz alta, igual que cuentas las notas.", "Las manos se quedan sobre las teclas: el silencio no es soltar."], fr: ["Compte le silence à voix haute, comme tu comptes les notes.", "Les mains restent sur les touches : le silence n'est pas un relâchement."] },
            SILENCIOS,
            [
              concepto({ es: "Silencio de redonda", fr: "Silence de ronde" }, { es: "Cuatro tiempos callados. Es un rectángulo colgando de la cuarta línea.", fr: "Quatre temps de silence. Un rectangle suspendu sous la quatrième ligne." }),
              concepto({ es: "Silencio de blanca", fr: "Silence de blanche" }, { es: "Dos tiempos. El mismo rectángulo, pero apoyado encima de la tercera línea.", fr: "Deux temps. Le même rectangle, mais posé sur la troisième ligne." }),
              concepto({ es: "Silencio de negra", fr: "Silence de noire" }, { es: "Un tiempo. Es el garabato que ocupa el centro del pentagrama.", fr: "Un temps. C'est le signe en zigzag au centre de la portée." }),
            ]),
          lectura("p1c4-lectura", dosClaves("intermedio", "afianzar"),
            { es: "Repaso del Intermedio", fr: "Révision de l'Intermédiaire" },
            { es: "Lo más agudo y lo más grave, recién presentado: hoy importa no fallar, no ir rápido.", fr: "Le plus aigu et le plus grave, tout juste présentés : aujourd'hui l'important est de ne pas se tromper, pas d'aller vite." },
            { es: ["Cuenta las líneas adicionales en voz alta antes de responder.", "Si fallas más de dos por serie, repite la sesión antes de seguir."], fr: ["Compte les lignes supplémentaires à voix haute avant de répondre.", "Si tu fais plus de deux fautes par série, refais la session avant de continuer."] }),
          ejercicio("p1c4-callar", { es: "Tocar y callar", fr: "Jouer et se taire" },
            { es: "Levantar el dedo justo a tiempo: el silencio dura tanto como la nota.", fr: "Lever le doigt juste à temps : le silence dure autant que la note." },
            { es: ["Cuenta 1-2-3-4 en voz alta y no dejes de contar en el silencio.", "El dedo se levanta en el tiempo, no antes ni después."], fr: ["Compte 1-2-3-4 à voix haute et ne t'arrête pas de compter pendant le silence.", "Le doigt se lève sur le temps, ni avant, ni après."] },
            TOCAR_Y_CALLAR_DOS),
          ejercicio("p1c4-silencio-largo", { es: "El silencio de blanca", fr: "Le silence de blanche" },
            { es: "Aguantar dos tiempos callado sin adelantar la entrada siguiente.", fr: "Tenir deux temps de silence sans anticiper l'entrée suivante." },
            { es: ["Es más difícil callar dos tiempos que uno: sigue contando.", "La mano se queda quieta sobre las teclas mientras callas."], fr: ["Se taire deux temps est plus difficile qu'un seul : continue de compter.", "La main reste immobile sur les touches pendant le silence."] },
            SILENCIO_LARGO_DOS),
          ejercicio("p1c4-alternas", { es: "Manos alternas", fr: "Mains alternées" },
            { es: "Mientras una mano toca, la otra calla: el primer reparto entre las dos.", fr: "Pendant qu'une main joue, l'autre se tait : c'est le premier partage du travail entre les deux." },
            { es: ["La mano que calla se queda preparada sobre sus teclas.", "El paso de una mano a otra no puede notarse: sin hueco ni tropiezo."], fr: ["La main qui se tait reste prête sur ses touches.", "Le passage d'une main à l'autre ne doit pas s'entendre : ni trou, ni accroc."] },
            MANOS_ALTERNAS),
          ejercicio("p1c4-terceras", { es: "Terceras", fr: "Tierces" },
            { es: "Saltar un dedo sin que la mano se mueva de sitio.", fr: "Sauter un doigt sans que la main bouge de place." },
            { es: ["Los saltos van 1-3, 2-4 y 3-5: dilo en voz alta antes de tocar, que ya no está escrito.", "Los dedos que no tocan se quedan sobre sus teclas.", "El salto se prepara antes, no en el último momento."], fr: ["Les sauts se font 1-3, 2-4 et 3-5 : dis-le à voix haute avant de jouer, ce n'est plus écrit.", "Les doigts qui ne jouent pas restent sur leurs touches.", "Le saut se prépare à l'avance, pas au dernier moment."] },
            TERCERAS),
          referencia("p1c4-ref", { es: "Ganando independencia: manos alternadas", fr: "Gagner en indépendance : mains alternées" },
            [
              pouillard({ es: "cap. II págs. 20-22", fr: "chap. II p. 20-22" }),
              chornet({ es: "págs. 17-21, manos alternadas", fr: "p. 17-21, mains alternées" }),
              aaron({ es: "págs. 19 y 29-30", fr: "p. 19 et 29-30" }),
            ],
            { es: "Las manos dejan de ir al unísono: se van pasando la melodía sobre el sistema de dos pentagramas.", fr: "Les mains cessent d'aller à l'unisson : elles se passent la mélodie sur le système de deux portées." }),
        ],
      },
      {
        titulo: { es: "La corchea y su silencio", fr: "La croche et son silence" },
        objetivo: {
          es: "Partir el tiempo en dos: dos notas donde antes había una, y medio tiempo de silencio.",
          fr: "Partager le temps en deux : deux notes là où il n'y en avait qu'une, et un demi-temps de silence.",
        },
        ejercicios: [
          teoria("p1c5-corchea", { es: "La corchea y su silencio", fr: "La croche et son silence" },
            {
              es: [
                "Hasta ahora la figura más corta era la negra, de un tiempo. La corchea dura la mitad, así que entran dos en cada negra: se cuenta uno-y, dos-y.",
                "Se escribe como la negra pero con un corchete en el palo, y cuando van varias seguidas los corchetes se sustituyen por una barra que las agrupa por tiempos.",
                "El silencio de corchea calla exactamente lo mismo, medio tiempo, y se escribe con un solo garabato apoyado en el centro del pentagrama.",
                "En el ejemplo: primero un compás de negras, después las mismas notas en corcheas —el doble en el mismo sitio— y al final la corchea alternando con su silencio.",
              ],
              fr: [
                "Jusqu'ici, la figure la plus brève était la noire, qui vaut un temps. La croche en vaut la moitié : il en faut deux pour remplir une noire, et l'on compte un-et, deux-et.",
                "Elle s'écrit comme la noire, avec un crochet au bout de la queue ; quand plusieurs croches se suivent, les crochets cèdent la place à une barre qui les regroupe par temps.",
                "Le silence de croche fait taire exactement la même durée, un demi-temps, et s'écrit d'un seul signe posé au centre de la portée.",
                "Dans l'exemple : d'abord une mesure de noires, puis les mêmes notes en croches — deux fois plus dans le même espace — et enfin la croche alternant avec son silence.",
              ],
            },
            { es: ["Cuenta uno-y dos-y tres-y cuatro-y sin cambiar la velocidad del pie.", "El silencio de corchea se cuenta igual que la corchea: el «y» sigue estando ahí aunque no suene."], fr: ["Compte un-et deux-et trois-et quatre-et sans changer la vitesse du pied.", "Le silence de croche se compte comme la croche : le « et » est toujours là, même s'il ne sonne pas."] },
            CORCHEAS,
            [
              concepto({ es: "Corchea", fr: "Croche" }, { es: "Medio tiempo. Dos corcheas ocupan lo mismo que una negra.", fr: "Un demi-temps. Deux croches valent une noire." }),
              concepto({ es: "Corchete", fr: "Crochet" }, { es: "El rabito del palo que distingue la corchea de la negra.", fr: "Le petit appendice recourbé au bout de la queue, qui distingue la croche de la noire." }),
              concepto({ es: "Barra de unión", fr: "Barre de ligature" }, { es: "Cuando van varias corcheas seguidas, los corchetes se sustituyen por una barra que las agrupa por tiempos.", fr: "Quand plusieurs croches se suivent, les crochets cèdent la place à une barre qui les regroupe par temps." }),
              concepto({ es: "Silencio de corchea", fr: "Silence de croche" }, { es: "Medio tiempo callado, lo que dura una corchea. Se apoya en el centro del pentagrama.", fr: "Un demi-temps de silence, la durée d'une croche. Il se pose au centre de la portée." }),
            ]),
          lectura("p1c5-lectura", dosClaves("intermedio", "afianzar"),
            { es: "Repaso del Intermedio, a velocidad", fr: "Révision de l'Intermédiaire, en vitesse" },
            { es: "El mismo registro que la clase anterior, ahora bajando el tiempo.", fr: "Le même registre que la semaine passée, cette fois en baissant le temps." },
            { es: ["Compara el tiempo con el del curso 4: hoy es la única medida que cuenta.", "Si por correr fallas más, vuelve al ritmo de antes."], fr: ["Compare le temps avec celui du cours 4 : c'est aujourd'hui la seule mesure qui compte.", "Si la vitesse te fait faire plus de fautes, reviens à l'allure précédente."] }),
          ejercicio("p1c5-seguidas", { es: "Dos corcheas por tiempo", fr: "Deux croches par temps" },
            { es: "Ocho notas donde antes cabían cuatro, sin que el pulso se mueva.", fr: "Huit notes là où il n'en tenait que quatre, sans que la pulsation bouge." },
            { es: ["Métrónomo a 60 y dos notas por clic: el pie no acelera, las manos sí.", "Si te enredas, toca el compás en negras y después dóblalo."], fr: ["Métronome à 60 et deux notes par clic : le pied n'accélère pas, les mains si.", "Si tu t'emmêles, joue la mesure en noires puis double-la."] },
            CORCHEAS_SEGUIDAS),
          ejercicio("p1c5-negras-corcheas", { es: "Negras y corcheas en el mismo compás", fr: "Noires et croches dans la même mesure" },
            { es: "Cambiar de figura sin cambiar de velocidad, que es lo que de verdad cuesta.", fr: "Changer de figure sans changer de vitesse, ce qui est le vrai difficile." },
            { es: ["Cuenta uno-y dos-y en voz alta durante todo el ejercicio, también en las negras.", "El error típico es correr en las corcheas: son la mitad de una negra, ni más ni menos."], fr: ["Compte un-et deux-et à voix haute d'un bout à l'autre, y compris sur les noires.", "L'erreur classique est de précipiter les croches : elles valent la moitié d'une noire, ni plus ni moins."] },
            NEGRAS_Y_CORCHEAS),
          ejercicio("p1c5-silencio", { es: "Corchea y silencio de corchea", fr: "Croche et silence de croche" },
            { es: "Tocar en el tiempo y callar en el «y», con las dos manos a la vez.", fr: "Jouer sur le temps et se taire sur le « et », des deux mains à la fois." },
            { es: ["El dedo se levanta justo en el «y»: el silencio empieza cuando acaba la nota, no después.", "Sigue contando en voz alta durante el silencio."], fr: ["Le doigt se lève juste sur le « et » : le silence commence quand la note finit, pas après.", "Continue de compter à voix haute pendant le silence."] },
            CORCHEA_Y_SILENCIO),
          ejercicio("p1c5-alternas", { es: "Manos alternas en corcheas", fr: "Mains alternées en croches" },
            { es: "La izquierda toca justo en el hueco que deja la derecha.", fr: "La main gauche joue exactement dans le trou que laisse la droite." },
            { es: ["Muy despacio: aquí el silencio de corchea es lo que marca la entrada de la otra mano.", "Monta cada mano sola contando en voz alta y júntalas sólo cuando las dos entren a tiempo."], fr: ["Très lentement : ici c'est le silence de croche qui donne l'entrée de l'autre main.", "Monte chaque main seule en comptant à voix haute et ne les réunis que lorsque les deux entrent à temps."] },
            ALTERNAS_EN_CORCHEAS),
          referencia("p1c5-ref", { es: "Ganando independencia: dedos libres", fr: "Gagner en indépendance : doigts libres" },
            [
              pouillard({ es: "cap. III págs. 26-27", fr: "chap. III p. 26-27" }),
              chornet({ es: "págs. 22-25, dedos libres", fr: "p. 22-25, doigts libres" }),
              aaron({ es: "págs. 31-32", fr: "p. 31-32" }),
            ],
            { es: "Cada mano hace algo distinto sin arrastrar a la otra, y dentro de cada mano unos dedos tocan mientras los demás se quedan quietos.", fr: "Chaque main fait quelque chose de différent sans entraîner l'autre, et dans chaque main certains doigts jouent pendant que les autres restent en place." }),
        ],
      },
      {
        titulo: { es: "Sostenidos y bemoles", fr: "Dièses et bémols" },
        objetivo: {
          es: "El tono y el semitono, y los signos que suben o bajan una nota un semitono.",
          fr: "Le ton et le demi-ton, et les signes qui montent ou descendent une note d'un demi-ton.",
        },
        ejercicios: [
          teoria("p1c6-alteraciones", { es: "Sostenidos y bemoles", fr: "Dièses et bémols" },
            {
              es: [
                "La distancia más corta que hay en el piano es el semitono: pasar a la tecla de al lado sin saltarse ninguna, contando también las negras. También se le llama medio tono.",
                "Dos semitonos seguidos hacen un tono. Do y re están a un tono, porque entre los dos queda una tecla negra.",
                "Pero no siempre hay negra en medio: entre mi y fa, y entre si y do, no hay ninguna, así que esos dos pares de teclas blancas están a un semitono. Son los dos únicos sitios del teclado donde pasa. En el dibujo tienes las dos distancias marcadas: do-re en azul es un tono, mi-fa en naranja es un semitono.",
                "El sostenido sube la nota un semitono, a la tecla de al lado hacia la derecha; el bemol la baja un semitono, hacia la izquierda. Casi siempre esa vecina es una tecla negra, y por eso las alteraciones son la puerta de entrada a las teclas negras.",
                "Debajo del teclado están señaladas las dos que vas a leer: el fa♯ es la negra que hay justo encima del fa, y el si♭ la que hay justo debajo del si. En el pentagrama son las dos notas del ejemplo.",
                "El becuadro deshace la alteración y devuelve la nota a su tecla blanca.",
                "La alteración vale hasta el final del compás: si la nota vuelve a aparecer en ese mismo compás, sigue alterada aunque no lleve el signo.",
              ],
              fr: [
                "Le plus petit écart du piano est le demi-ton : passer à la touche voisine sans en sauter aucune, touches noires comprises.",
                "Deux demi-tons consécutifs font un ton. Do et ré sont distants d'un ton, puisqu'une touche noire les sépare.",
                "Mais il n'y a pas toujours de noire entre deux : entre mi et fa, et entre si et do, il n'y en a aucune, si bien que ces deux paires de touches blanches sont à un demi-ton. Ce sont les deux seuls endroits du clavier où cela se produit. Le dessin montre les deux écarts : do-ré en bleu est un ton, mi-fa en orange un demi-ton.",
                "Le dièse élève la note d'un demi-ton, vers la touche voisine de droite ; le bémol l'abaisse d'un demi-ton, vers la gauche. Cette voisine est presque toujours une touche noire : les altérations sont donc la porte d'entrée des touches noires.",
                "Sous le clavier sont repérées les deux que tu vas lire : le fa♯ est la noire juste au-dessus du fa, et le si♭ celle qui est juste en dessous du si. Sur la portée, ce sont les deux notes de l'exemple.",
                "Le bécarre annule l'altération et ramène la note à sa touche blanche.",
                "Une altération vaut jusqu'à la fin de la mesure : si la note revient dans cette même mesure, elle reste altérée même sans le signe.",
              ],
            },
            { es: ["Busca en el teclado los dos sitios donde dos blancas son vecinas: mi-fa y si-do.", "Lee la nota en el pentagrama y señálala en el teclado del dibujo antes de tocarla.", "Antes de tocar, di en voz alta qué tecla es: «fa sostenido, la negra de la derecha»."], fr: ["Cherche sur le clavier les deux endroits où deux blanches se touchent : mi-fa et si-do.", "Lis la note sur la portée et montre-la sur le clavier du dessin avant de la jouer.", "Avant de jouer, dis à voix haute de quelle touche il s'agit : « fa dièse, la noire de droite »."] },
            ALTERACIONES,
            [
              concepto({ es: "Semitono", fr: "Demi-ton" }, { es: "La distancia entre una tecla y la de al lado, contando también las negras. Es la más corta del piano; también se le llama medio tono.", fr: "L'écart entre une touche et sa voisine immédiate, touches noires comprises. C'est le plus petit du clavier." }),
              concepto({ es: "Tono", fr: "Ton" }, { es: "Dos semitonos. Entre las dos teclas queda otra en medio, casi siempre negra: do y re están a un tono.", fr: "Deux demi-tons. Une touche s'intercale entre les deux, presque toujours noire : do et ré sont distants d'un ton." }),
              concepto({ es: "Mi-fa y si-do", fr: "Mi-fa et si-do" }, { es: "Los dos únicos pares de teclas blancas sin negra en medio. Están a un semitono, no a un tono.", fr: "Les deux seules paires de touches blanches sans noire entre elles. Elles sont distantes d'un demi-ton, non d'un ton." }),
              concepto({ es: "Sostenido", fr: "Dièse" }, { es: "Sube la nota un semitono: la tecla de al lado hacia la derecha.", fr: "Élève la note d'un demi-ton : la touche voisine de droite." }),
              concepto({ es: "Bemol", fr: "Bémol" }, { es: "Baja la nota un semitono: la tecla de al lado hacia la izquierda.", fr: "Abaisse la note d'un demi-ton : la touche voisine de gauche." }),
              concepto({ es: "Becuadro", fr: "Bécarre" }, { es: "Anula el sostenido o el bemol y devuelve la nota a su tecla blanca.", fr: "Annule le dièse ou le bémol et ramène la note à sa touche blanche." }),
            ]),
          teoria("p1c6-armadura", { es: "La armadura y las alteraciones accidentales", fr: "L'armure et les altérations accidentelles" },
            {
              es: [
                "Un sostenido o un bemol casi nunca aparecen por capricho: pertenecen a una tonalidad, que es el conjunto de notas sobre el que está construida la pieza. Do mayor no lleva ninguna alteración, sol mayor lleva fa sostenido y fa mayor lleva si bemol.",
                "Las alteraciones de la tonalidad se escriben una sola vez, al principio de cada pentagrama y justo después de la clave: eso es la armadura. Valen para toda la pieza y en todas las octavas, aunque no se vuelvan a escribir.",
                "En el ejemplo la armadura lleva un fa sostenido, así que todos los fa suenan sostenidos sin que haya que marcar ninguno.",
                "Una alteración accidental es la que aparece suelta en mitad de la pieza, delante de una nota. No está en la armadura: es una excepción de ese momento.",
                "La accidental vale hasta la línea divisoria. Desde que se escribe, esa misma nota queda alterada durante el resto del compás aunque no se repita el signo, y un becuadro dentro del compás la anula: a partir de ahí vuelve a ser natural hasta que el compás acabe.",
                "En el compás siguiente ya no vale nada de eso: la línea divisoria borra las accidentales y la nota vuelve a lo que diga la armadura. Por eso el tercer compás del ejemplo suena otra vez con fa sostenido.",
                "Dos excepciones que conviene conocer: si una nota alterada está ligada por encima de la línea divisoria, la ligadura mantiene la alteración hasta que la nota acaba; y muchas ediciones vuelven a escribir el signo en el compás siguiente, a veces entre paréntesis, sólo como recordatorio. Es una alteración de precaución y no cambia nada.",
              ],
              fr: [
                "Un dièse ou un bémol n'apparaissent presque jamais par hasard : ils appartiennent à une tonalité, l'ensemble de notes sur lequel le morceau est bâti. Do majeur ne porte aucune altération, sol majeur porte un fa dièse et fa majeur un si bémol.",
                "Les altérations de la tonalité s'écrivent une seule fois, au début de chaque portée et juste après la clé : c'est l'armure. Elles valent pour tout le morceau et à toutes les octaves, même si on ne les réécrit pas.",
                "Dans l'exemple, l'armure porte un fa dièse : tous les fa sonnent donc dièse sans qu'il faille en marquer aucun.",
                "Une altération accidentelle est celle qui surgit isolément au milieu du morceau, devant une note. Elle n'est pas à l'armure : c'est une exception du moment.",
                "L'accidentelle vaut jusqu'à la barre de mesure. Dès qu'elle est écrite, cette même note reste altérée jusqu'à la fin de la mesure même si le signe ne se répète pas, et un bécarre placé dans la mesure l'annule : à partir de là, la note redevient naturelle jusqu'à la fin de la mesure.",
                "À la mesure suivante, plus rien de tout cela ne vaut : la barre de mesure efface les accidentelles et la note revient à ce que dit l'armure. C'est pourquoi la troisième mesure de l'exemple sonne de nouveau avec un fa dièse.",
                "Deux exceptions à connaître : si une note altérée est liée par-dessus la barre de mesure, la liaison conserve l'altération jusqu'à la fin de la note ; et bien des éditions réécrivent le signe à la mesure suivante, parfois entre parenthèses, en simple rappel. C'est une altération de précaution, elle ne change rien.",
              ],
            },
            { es: ["Mira siempre la armadura antes de tocar: es lo primero que hay después de la clave.", "Si dudas dentro de un compás, vuelve al principio del compás y léelo entero de nuevo.", "Regla corta: la armadura manda en toda la pieza, la accidental sólo hasta la línea divisoria."], fr: ["Regarde toujours l'armure avant de jouer : c'est ce qui suit immédiatement la clé.", "En cas de doute dans une mesure, reprends-la depuis son début et relis-la en entier.", "Règle courte : l'armure vaut pour tout le morceau, l'accidentelle seulement jusqu'à la barre de mesure."] },
            ARMADURA_Y_ACCIDENTALES,
            [
              concepto({ es: "Tonalidad", fr: "Tonalité" }, { es: "El conjunto de notas sobre el que está construida una pieza. Cada tonalidad tiene sus alteraciones fijas.", fr: "L'ensemble de notes sur lequel un morceau est bâti. Chaque tonalité a ses altérations fixes." }),
              concepto({ es: "Armadura", fr: "Armure" }, { es: "Las alteraciones de la tonalidad, escritas al principio de cada pentagrama después de la clave. Valen para toda la pieza y en todas las octavas.", fr: "Les altérations de la tonalité, écrites au début de chaque portée après la clé. Elles valent pour tout le morceau et à toutes les octaves." }),
              concepto({ es: "Alteración accidental", fr: "Altération accidentelle" }, { es: "La que aparece suelta delante de una nota. Vale desde ahí hasta la línea divisoria, y no más allá.", fr: "Celle qui surgit isolément devant une note. Elle vaut de là jusqu'à la barre de mesure, et pas au-delà." }),
              concepto({ es: "Alteración de precaución", fr: "Altération de précaution" }, { es: "El mismo signo repetido en el compás siguiente, a veces entre paréntesis, sólo para recordarlo. No cambia nada.", fr: "Le même signe répété à la mesure suivante, parfois entre parenthèses, en simple rappel. Il ne change rien." }),
            ]),
          lectura("p1c6-lectura", dosClaves("inicial2", "afianzar"),
            { es: "Repaso del Inicial 2", fr: "Révision du Débutant 2" },
            { es: "De sol a do agudo y de do a sol grave, que llevan tres clases sin tocarse.", fr: "De sol à do aigu et de do à sol grave, qu'on n'a pas revus depuis trois cours." },
            { es: ["Lo que no se repasa se olvida: por eso vuelven cada pocas clases.", "Si una clave va por detrás de la otra, dedícale dos sesiones seguidas."], fr: ["Ce qu'on ne révise pas s'oublie : d'où ce retour toutes les quelques séances.", "Si une clé est en retard sur l'autre, consacre-lui deux sessions d'affilée."] }),
          ejercicio("p1c6-mediotono", { es: "El semitono", fr: "Le demi-ton" },
            { es: "Ir y venir entre una tecla blanca y la negra que tiene al lado.", fr: "Aller et venir entre une touche blanche et la noire qui la jouxte." },
            { es: ["Con la derecha, 1-2 en el primer compás y 2-3 en el segundo; con la izquierda, 5-4 y 4-3.", "El dedo entra un poco más adentro para llegar a la negra, y la mano no gira.", "Escucha lo cerca que están las dos notas: eso es un semitono, la distancia más corta del piano."], fr: ["À la main droite, 1-2 dans la première mesure et 2-3 dans la seconde ; à la main gauche, 5-4 puis 4-3.", "Le doigt avance un peu vers le fond pour atteindre la noire, et la main ne pivote pas.", "Écoute comme les deux notes sont proches : voilà un demi-ton, le plus petit écart du piano."] },
            MEDIO_TONO),
          ejercicio("p1c6-fasostenido", { es: "Con fa sostenido", fr: "Avec le fa dièse" },
            { es: "Los mismos cinco dedos, primero con el fa natural y después con el fa sostenido.", fr: "Les mêmes cinq doigts, d'abord avec le fa naturel puis avec le fa dièse." },
            { es: ["Toca los dos compases seguidos: sólo cambia una nota y la posición suena distinta.", "Con el fa sostenido tienes la posición de sol mayor, que usarás mucho."], fr: ["Joue les deux mesures à la suite : une seule note change et la position sonne autrement.", "Avec le fa dièse tu tiens la position de sol majeur, que tu emploieras souvent."] },
            FA_SOSTENIDO),
          ejercicio("p1c6-sibemol", { es: "Con si bemol", fr: "Avec le si bémol" },
            { es: "Lo mismo desde el fa: primero con el si natural y después con el si bemol.", fr: "La même chose à partir du fa : d'abord avec le si naturel puis avec le si bémol." },
            { es: ["El 4 baja a la negra sin que se muevan los demás dedos.", "Con el si bemol tienes la posición de fa mayor."], fr: ["Le 4 descend sur la noire sans que les autres doigts bougent.", "Avec le si bémol tu tiens la position de fa majeur."] },
            SI_BEMOL),
          referencia("p1c6-ref", { es: "Las alteraciones", fr: "Les altérations" },
            [
              pouillard({ es: "cap. III págs. 28-31", fr: "chap. III p. 28-31" }),
              aaron({ es: "págs. 20-22, el medio tono, el sostenido, el bemol y el becuadro", fr: "p. 20-22, le demi-ton, le dièse, le bémol et le bécarre" }),
            ],
            { es: "El tono y el semitono, los tres signos que alteran una nota, y las primeras piezas que salen de la posición de do.", fr: "Le ton et le demi-ton, les trois signes qui altèrent une note, et les premières pièces qui quittent la position de do." }),
          referencia("p1c6-rep", { es: "Repertorio", fr: "Répertoire" },
            [repertorio({ es: "Bagpipe (anónimo, s. XVII), pág. 4, y Old German Dance (Praetorius), pág. 5", fr: "Bagpipe (anonyme, XVIIe s.), p. 4, et Old German Dance (Praetorius), p. 5" })],
            { es: "La primera pieza de repertorio de verdad: dos danzas antiguas, cortas y en posición fija. Se elige una y se trabaja hasta el final del nivel.", fr: "La première vraie pièce de répertoire : deux danses anciennes, courtes et en position fixe. On en choisit une et on la travaille jusqu'à la fin du niveau." }),
        ],
      },
      {
        titulo: { es: "Los acordes y la escala", fr: "Les accords et la gamme" },
        objetivo: {
          es: "Salir de la posición de cinco dedos: por saltos con el acorde y paso a paso con la escala.",
          fr: "Quitter la position de cinq doigts : par sauts avec l'accord et pas à pas avec la gamme.",
        },
        ejercicios: [
          teoria("p1c7-acorde", { es: "Qué es un acorde de tres sonidos", fr: "Qu'est-ce qu'un accord de trois sons" },
            { es: "Se toma una nota y se le añaden la tercera y la quinta por encima, saltando una tecla blanca cada vez. Do, fa y sol son los tres acordes que sostienen casi toda la música que va a tocar.", fr: "On part d'une note et l'on ajoute au-dessus la tierce, puis la quinte, en sautant une touche blanche à chaque fois. Do, fa et sol forment les trois accords qui soutiennent presque toute la musique que tu vas jouer." },
            { es: ["Construye tú el acorde de re y el de mi.", "El arpegio es el mismo acorde, nota a nota."], fr: ["Construis l'accord de ré et celui de mi toi-même.", "L'arpège est le même accord, note par note."] },
            ACORDE_CONSTRUCCION),
          teoria("p1c7-escala", { es: "Por qué la escala se digita así", fr: "Pourquoi la gamme se doigte ainsi" },
            { es: "La mano tiene cinco dedos y la escala ocho notas, así que hay que pasar el pulgar una vez. Se pasa donde menos se nota, entre el mi y el fa.", fr: "La main compte cinq doigts, la gamme huit notes : il faut donc passer le pouce une fois. Ce passage se place là où il s'entend le moins, entre le mi et le fa." },
            { es: ["Dilo en voz alta antes de tocar: dónde pasa el pulgar y por qué.", "La digitación es la misma en todas las escalas de teclas blancas."], fr: ["Dis-le à voix haute avant de jouer : où passe le pouce et pourquoi.", "Le doigté est le même dans toutes les gammes de touches blanches."] },
            ESCALA_DO_DERECHA),
          lectura("p1c7-lectura", lineasDelCentro("nuevas"),
            { es: "Avanzado: de sol grave a do central y de do central a sol", fr: "Avancé : du sol grave au do central et du do central au sol" },
            { es: "La derecha por debajo del do central y la izquierda por encima: las notas que cada mano toma prestadas de la otra clave.", fr: "La droite sous le do central et la gauche au-dessus : les notes que chaque main emprunte à l'autre clé." },
            { es: ["Son las mismas teclas que ya tocas, sólo que escritas en la otra clave.", "En clave de sol se llama Avanzado 2 y en clave de fa Avanzado 1: es el mismo salto, uno hacia abajo y otro hacia arriba."], fr: ["Ce sont les mêmes touches que tu joues déjà, simplement écrites dans l'autre clé.", "En clé de sol cela s'appelle Avancé 2 et en clé de fa Avancé 1 : c'est le même écart, l'un vers le bas et l'autre vers le haut."] }),
          ejercicio("p1c7-dosnotas", { es: "Dos notas a la vez", fr: "Deux notes à la fois" },
            { es: "Que las dos suenen exactamente juntas y con el mismo peso.", fr: "Que les deux sonnent exactement ensemble et avec le même poids." },
            { es: ["Deja caer el brazo; no aprietes con los dedos.", "Escucha si una de las dos se adelanta."], fr: ["Laisse tomber le bras ; ne serre pas avec les doigts.", "Écoute si l'une des deux devance l'autre."] },
            DOS_NOTAS_DOS),
          ejercicio("p1c7-arpegio", { es: "Arpegio de do mayor", fr: "Arpège de do majeur" },
            { es: "El acorde nota a nota, para oír de qué está hecho.", fr: "L'accord note par note, pour entendre de quoi il est fait." },
            { es: ["Los dedos que ya han tocado se quedan sobre sus teclas.", "Sube y baja sin acelerar al llegar arriba."], fr: ["Les doigts qui ont déjà joué restent sur leurs touches.", "Monte et descends sans accélérer en arrivant en haut."] },
            ARPEGIO_DO_DOS),
          ejercicio("p1c7-acordes", { es: "Acordes de tres sonidos", fr: "Accords de trois sons" },
            { es: "Do, fa y sol: los tres acordes, con las tres notas a la vez.", fr: "Do, fa et sol : les trois accords, les trois notes ensemble." },
            { es: ["Las tres notas caen a la vez: si una se adelanta, prepara la mano antes de bajar.", "Cambia de acorde sin mirar: la mano ya sabe la forma."], fr: ["Les trois notes tombent ensemble : si l'une devance, prépare la main avant de descendre.", "Change d'accord sans regarder : la main connaît déjà la forme."] },
            ACORDES_DOS),
          ejercicio("p1c7-preparacion", { es: "Preparación del paso del pulgar", fr: "Préparation du passage du pouce" },
            { es: "Sólo el movimiento del cruce, sin la escala entera.", fr: "Seulement le mouvement du croisement, sans la gamme entière." },
            { es: ["Derecha: el pulgar pasa por debajo del 3. Izquierda: el 3 cruza por encima del pulgar.", "Muy lento y repetido, hasta que el cruce no se oiga."], fr: ["Droite : le pouce passe sous le 3. Gauche : le 3 croise par-dessus le pouce.", "Très lentement, en répétant, jusqu'à ce que le croisement ne s'entende plus."] },
            PREPARACION_PULGAR),
          ejercicio("p1c7-escala-tec", { es: "Escala de do mayor", fr: "Gamme de do majeur" },
            { es: "El pulgar pasa por debajo del 3 para tocar el fa.", fr: "Le pouce passe sous le 3 pour jouer le fa." },
            { es: ["Prepara el pulgar mientras suenan el 2 y el 3.", "La mano no da tirones: el codo acompaña."], fr: ["Prépare le pouce pendant que sonnent le 2 et le 3.", "La main ne doit pas sursauter : le coude accompagne le mouvement."] },
            ESCALA_DO),
          referencia("p1c7-ref", { es: "Los acordes y las escalas", fr: "Les accords et les gammes" },
            [
              pouillard({ es: "cap. IV págs. 34-35 y 38, y cap. V págs. 51-52", fr: "chap. IV p. 34-35 et 38, et chap. V p. 51-52" }),
              chornet({ es: "págs. 26-28, primeros acordes, y págs. 43-46, preparatorios y escalas", fr: "p. 26-28, premiers accords, et p. 43-46, préparatoires et gammes" }),
              aaron({ es: "págs. 33-34 y 36, tríadas, y págs. 51, 53 y 61-62, escalas", fr: "p. 33-34 et 36, triades, et p. 51, 53 et 61-62, gammes" }),
            ],
            { es: "Las tríadas de do, fa y sol, el paso del pulgar con sus preparatorios —antes que la escala entera— y la escala completa, con la tabla de digitaciones del Aaron para consultarla.", fr: "Les triades de do, fa et sol, le passage du pouce avec ses préparatoires — avant la gamme entière — et la gamme complète, avec le tableau de doigtés de l'Aaron pour référence." }),
          referencia("p1c7-rep", { es: "Repertorio", fr: "Répertoire" },
            [repertorio({ es: "Two Marches (Türk), pág. 6, y March in F (Türk), pág. 7", fr: "Two Marches (Türk), p. 6, et March in F (Türk), p. 7" })],
            { es: "Dos marchas clásicas: pulso firme, frases de cuatro compases y manos que ya no van al unísono.", fr: "Deux marches classiques : pulsation ferme, phrases de quatre mesures et mains qui ne vont plus à l'unisson." }),
        ],
      },
      {
        titulo: { es: "Las semicorcheas y su silencio", fr: "Les doubles croches et leur silence" },
        objetivo: {
          es: "Partir el tiempo en cuatro, tocando y callando a un cuarto de tiempo.",
          fr: "Partager le temps en quatre, en jouant et en se taisant au quart de temps.",
        },
        ejercicios: [
          teoria("p1c8-semicorchea", { es: "La semicorchea y su silencio", fr: "La double croche et son silence" },
            {
              es: [
                "La semicorchea dura la mitad que la corchea, así que entran cuatro en cada negra: se cuenta uno-e-y-a, dos-e-y-a.",
                "Lleva dos corchetes en vez de uno, y cuando van seguidas se agrupan con doble barra de unión.",
                "El silencio de semicorchea calla lo mismo, un cuarto de tiempo, y lleva también dos ganchos.",
                "En el ejemplo: primero un compás de semicorcheas seguidas y después la semicorchea alternando con su silencio.",
              ],
              fr: [
                "La double croche vaut la moitié d'une croche : il en faut quatre pour remplir une noire, et l'on compte un-e-et-eu, deux-e-et-eu.",
                "Elle porte deux crochets au lieu d'un, et lorsqu'elles se suivent elles se regroupent sous une double barre de ligature.",
                "Le silence de double croche fait taire la même durée, un quart de temps, et porte lui aussi deux crochets.",
                "Dans l'exemple : d'abord une mesure de doubles croches à la suite, puis la double croche alternant avec son silence.",
              ],
            },
            { es: ["Cuéntala despacio antes de tocarla: cuatro golpes por cada negra.", "Empieza a la mitad de velocidad de lo que crees que puedes."], fr: ["Compte-la lentement avant de la jouer : quatre coups pour chaque noire.", "Commence à la moitié de la vitesse que tu crois pouvoir tenir."] },
            SEMICORCHEAS,
            [
              concepto({ es: "Semicorchea", fr: "Double croche" }, { es: "Un cuarto de tiempo. Cuatro semicorcheas ocupan lo mismo que una negra, y dos lo mismo que una corchea.", fr: "Un quart de temps. Quatre doubles croches valent une noire, et deux valent une croche." }),
              concepto({ es: "Silencio de semicorchea", fr: "Silence de double croche" }, { es: "Un cuarto de tiempo callado. Se escribe con dos ganchos, apoyado en el centro del pentagrama.", fr: "Un quart de temps de silence. Il s'écrit avec deux crochets, posé au centre de la portée." }),
              concepto({ es: "Doble barra de unión", fr: "Double barre de ligature" }, { es: "Las semicorcheas seguidas se agrupan con dos barras, una por cada corchete.", fr: "Les doubles croches qui se suivent se regroupent sous deux barres, une par crochet." }),
            ]),
          lectura("p1c8-lectura", [...lineasDelCentro("afianzar"), ...dosClaves("inicial1", "afianzar")],
            { es: "Repaso del Avanzado y del Inicial 1", fr: "Révision de l'Avancé et du Débutant 1" },
            { es: "Todo lo que rodea el do central, escrito en las dos claves: es lo que más se confunde.", fr: "Tout ce qui entoure le do central, écrit dans les deux clés : c'est ce qui se confond le plus." },
            { es: ["El acorde de sol lleva la izquierda por encima del do central: aquí lo preparas.", "Apunta precisión y tiempo: sirven para medir la evaluación del final."], fr: ["L'accord de sol conduit la main gauche au-dessus du do central : tu le prépares ici.", "Note la précision et le temps : ils serviront à mesurer l'évaluation finale."] }),
          ejercicio("p1c8-seguidas", { es: "Cuatro semicorcheas por tiempo", fr: "Quatre doubles croches par temps" },
            { es: "Dieciséis notas donde antes cabían cuatro, sin que el pulso se mueva.", fr: "Seize notes là où il n'en tenait que quatre, sans que la pulsation bouge." },
            { es: ["Metrónomo a 50 y cuatro notas por clic; sube de cinco en cinco cuando salga limpio.", "Si se enreda, tócalo en corcheas primero y después dóblalo."], fr: ["Métronome à 50 et quatre notes par clic ; monte de cinq en cinq quand c'est net.", "Si ça s'emmêle, joue-le d'abord en croches puis double."] },
            SEMICORCHEAS_SEGUIDAS),
          ejercicio("p1c8-negras", { es: "Negras y semicorcheas en el mismo compás", fr: "Noires et doubles croches dans la même mesure" },
            { es: "Pasar de una nota por tiempo a cuatro sin cambiar la velocidad del pie.", fr: "Passer d'une note par temps à quatre sans changer la vitesse du pied." },
            { es: ["El pie sigue marcando negras: son las manos las que van al cuádruple.", "Cuenta uno-e-y-a en voz alta también durante las negras."], fr: ["Le pied continue de marquer les noires : ce sont les mains qui vont quatre fois plus vite.", "Compte un-e-et-eu à voix haute, y compris pendant les noires."] },
            NEGRAS_Y_SEMICORCHEAS),
          ejercicio("p1c8-silencio", { es: "Semicorchea y silencio de semicorchea", fr: "Double croche et silence de double croche" },
            { es: "Un cuarto de tiempo sonando y un cuarto callado, una y otra vez.", fr: "Un quart de temps qui sonne et un quart qui se tait, encore et encore." },
            { es: ["El dedo se levanta enseguida: aquí el silencio es tan corto como la nota.", "Despacio, o el silencio desaparece y todo suena ligado."], fr: ["Le doigt se lève aussitôt : ici le silence est aussi bref que la note.", "Lentement, sinon le silence disparaît et tout sonne lié."] },
            SEMICORCHEA_Y_SILENCIO),
          referencia("p1c8-ref", { es: "Legato, staccato y matices", fr: "Legato, staccato et nuances" },
            [
              pouillard({ es: "cap. VII págs. 64-68", fr: "chap. VII p. 64-68" }),
              chornet({ es: "págs. 29-32, legato y staccato, y págs. 33-36, Czerny op. 599 nº 1-8", fr: "p. 29-32, legato et staccato, et p. 33-36, Czerny op. 599 nº 1-8" }),
              aaron({ es: "págs. 25-27", fr: "p. 25-27" }),
            ],
            { es: "Los dos ataques básicos, ligado y picado, y las primeras indicaciones de matiz sobre estudios cortos.", fr: "Les deux attaques de base, lié et piqué, et les premières indications de nuance sur de courtes études." }),
          referencia("p1c8-rep", { es: "Repertorio", fr: "Répertoire" },
            [repertorio({ es: "March in G (Türk), pág. 7, y Minuet (Reinagle), pág. 8", fr: "March in G (Türk), p. 7, et Minuet (Reinagle), p. 8" })],
            { es: "Un minueto clásico en 3/4: el mismo compás del curso 3, ahora dentro de una pieza.", fr: "Un menuet classique à 3/4 : la mesure vue au cours 3, cette fois dans une pièce." }),
        ],
      },
      {
        titulo: { es: "El puntillo y la ligadura", fr: "Le point et la liaison" },
        objetivo: {
          es: "Alargar una nota: con un punto a su derecha o atándola a la siguiente.",
          fr: "Allonger une note : par un point à sa droite ou en la liant à la suivante.",
        },
        ejercicios: [
          teoria("p1c9-puntillo", { es: "El puntillo y la ligadura de prolongación", fr: "Le point et la liaison de prolongation" },
            {
              es: [
                "Hasta ahora cada figura duraba lo que dice su nombre. Hay dos maneras de alargarla.",
                "El puntillo es un punto a la derecha de la nota y le añade la mitad de lo que vale: una blanca con puntillo dura tres tiempos, y una negra con puntillo, uno y medio.",
                "La ligadura de prolongación es una curva que une dos notas de la misma altura: no se toca la segunda, se suman las dos duraciones en un solo sonido.",
                "Sirve, entre otras cosas, para alargar una nota por encima de la línea divisoria, que es lo único que no puede hacer el puntillo.",
                "En el ejemplo, los dos compases suenan exactamente igual: blanca ligada a negra y blanca con puntillo son la misma duración escrita de dos maneras.",
              ],
              fr: [
                "Jusqu'ici, chaque figure durait ce que dit son nom. Il existe deux façons de l'allonger.",
                "Le point se place à droite de la note et lui ajoute la moitié de sa valeur : une blanche pointée dure trois temps, une noire pointée, un temps et demi.",
                "La liaison de prolongation est une courbe qui unit deux notes de même hauteur : on ne rejoue pas la seconde, on additionne les deux durées en un seul son.",
                "Elle sert notamment à prolonger une note par-dessus la barre de mesure, ce que le point ne peut pas faire.",
                "Dans l'exemple, les deux mesures sonnent exactement pareil : blanche liée à une noire et blanche pointée sont la même durée écrite de deux façons.",
              ],
            },
            { es: ["Cuenta en voz alta la nota larga entera: uno, dos, tres.", "No confundas esta curva con la de fraseo: la de prolongación une dos notas iguales."], fr: ["Compte à voix haute toute la durée de la note longue : un, deux, trois.", "Ne confonds pas cette courbe avec celle du phrasé : la liaison de prolongation unit deux notes identiques."] },
            PUNTILLO_Y_LIGADURA,
            [
              concepto({ es: "Puntillo", fr: "Point" }, { es: "Un punto a la derecha de la nota. Le añade la mitad de su valor.", fr: "Un point à droite de la note. Il lui ajoute la moitié de sa valeur." }),
              concepto({ es: "Blanca con puntillo", fr: "Blanche pointée" }, { es: "Tres tiempos: dos de la blanca y uno del puntillo.", fr: "Trois temps : deux pour la blanche et un pour le point." }),
              concepto({ es: "Negra con puntillo", fr: "Noire pointée" }, { es: "Un tiempo y medio: uno de la negra y medio del puntillo.", fr: "Un temps et demi : un pour la noire et un demi pour le point." }),
              concepto({ es: "Ligadura de prolongación", fr: "Liaison de prolongation" }, { es: "Une dos notas de la misma altura en un solo sonido. La segunda no se vuelve a tocar.", fr: "Elle unit deux notes de même hauteur en un seul son. La seconde ne se rejoue pas." }),
            ]),
          lectura("p1c9-lectura", dosClaves("inicial2", "afianzar"),
            { es: "Repaso del Inicial 2, a velocidad", fr: "Révision du Débutant 2, en vitesse" },
            { es: "De sol a do agudo y de do a sol grave, ahora buscando el tiempo.", fr: "De sol à do aigu et de do à sol grave, cette fois en cherchant le temps." },
            { es: ["Compara con el tiempo del curso 6: es el mismo nivel, cinco clases después."], fr: ["Compare avec le temps du cours 6 : c'est le même niveau, cinq séances plus tard."] }),
          ejercicio("p1c9-puntillo-tec", { es: "Notas con puntillo", fr: "Notes pointées" },
            { es: "Sostener tres tiempos y tiempo y medio sin quedarse corto.", fr: "Tenir trois temps, puis un temps et demi, sans écourter." },
            { es: ["Cuenta en voz alta toda la nota larga: el error típico es soltarla antes.", "La negra con puntillo acaba en el «y»: la corchea que viene detrás entra ahí."], fr: ["Compte à voix haute toute la note longue : l'erreur classique est de la lâcher trop tôt.", "La noire pointée finit sur le « et » : la croche qui suit entre là."] },
            PUNTILLO),
          ejercicio("p1c9-ligadura", { es: "Ligaduras de prolongación", fr: "Liaisons de prolongation" },
            { es: "Una sola nota larga escrita con dos figuras, también por encima de la línea divisoria.", fr: "Une seule note longue écrite avec deux figures, y compris par-dessus la barre de mesure." },
            { es: ["La segunda nota no se toca: el dedo se queda hundido y sigues contando.", "Si vuelves a tocarla, se oye. Grábate y compruébalo."], fr: ["La seconde note ne se joue pas : le doigt reste enfoncé et tu continues de compter.", "Si tu la rejoues, cela s'entend. Enregistre-toi et vérifie."] },
            LIGADURA),
          referencia("p1c9-ref", { es: "El puntillo y las ligaduras", fr: "Le point et les liaisons" },
            [
              pouillard({ es: "cap. VI págs. 54-62", fr: "chap. VI p. 54-62" }),
              chornet({ es: "págs. 37-38, Czerny op. 139", fr: "p. 37-38, Czerny op. 139" }),
              aaron({ es: "pág. 15, ligaduras, y pág. 30, negras con puntillo", fr: "p. 15, liaisons, et p. 30, noires pointées" }),
            ],
            { es: "Las dos maneras de alargar una nota, sobre piezas donde ya no todas las figuras duran lo mismo.", fr: "Les deux façons d'allonger une note, sur des pièces où les figures n'ont plus toutes la même durée." }),
          referencia("p1c9-rep", { es: "Repertorio", fr: "Répertoire" },
            [repertorio({ es: "Promenade (Reinagle), pág. 9", fr: "Promenade (Reinagle), p. 9" })],
            { es: "Una pieza con las dos manos independientes, donde la izquierda sostiene notas largas mientras la derecha se mueve.", fr: "Une pièce aux deux mains indépendantes, où la gauche tient des notes longues pendant que la droite bouge." }),
        ],
      },
      {
        titulo: { es: "Compases binarios y ternarios", fr: "Mesures binaires et ternaires" },
        objetivo: {
          es: "El tiempo se puede partir en dos o en tres, y eso cambia el compás entero.",
          fr: "Le temps peut se diviser en deux ou en trois, et cela change toute la mesure.",
        },
        ejercicios: [
          teoria("p1c10-compases", { es: "Compases binarios y ternarios", fr: "Mesures binaires et ternaires" },
            {
              es: [
                "Todos los compases que has visto hasta ahora —4/4, 3/4, 2/4— tienen algo en común: cada tiempo se parte en dos. Son compases de subdivisión binaria.",
                "Hay otros en los que cada tiempo se parte en tres. El más común es el 6/8: seis corcheas por compás, agrupadas de tres en tres, o sea dos tiempos de tres corcheas cada uno.",
                "Por eso en 6/8 el tiempo no es una negra sino una negra con puntillo, que es justo lo que vale tres corcheas. De ahí que el puntillo del curso anterior haga falta aquí.",
                "El número de arriba, 6, cuenta corcheas; pero se siente en dos, no en seis. Se cuenta un-dos-tres, dos-dos-tres.",
                "La barra de unión lo deja ver: agrupa las corcheas de tres en tres, y cada grupo es un tiempo.",
              ],
              fr: [
                "Toutes les mesures vues jusqu'ici — 4/4, 3/4, 2/4 — ont un point commun : chaque temps se divise en deux. Ce sont des mesures à subdivision binaire.",
                "Il en existe d'autres où chaque temps se divise en trois. La plus courante est le 6/8 : six croches par mesure, groupées trois par trois, soit deux temps de trois croches.",
                "C'est pourquoi, à 6/8, le temps n'est pas une noire mais une noire pointée, qui vaut précisément trois croches. D'où l'utilité du point vu au cours précédent.",
                "Le chiffre du haut, 6, compte des croches ; mais la mesure se ressent à deux, pas à six. On compte un-deux-trois, deux-deux-trois.",
                "La barre de ligature le rend visible : elle groupe les croches trois par trois, et chaque groupe est un temps.",
              ],
            },
            { es: ["Da palmas en 6/8 marcando sólo los dos tiempos, y cuenta las tres corcheas por dentro.", "Compáralo con el 3/4: tres tiempos con dos corcheas cada uno, que no es lo mismo aunque haya seis corcheas."], fr: ["Frappe dans les mains à 6/8 en ne marquant que les deux temps, et compte les trois croches intérieurement.", "Compare avec le 3/4 : trois temps de deux croches chacun, ce qui n'est pas la même chose bien qu'il y ait six croches."] },
            COMPAS_TERNARIO,
            [
              concepto({ es: "Subdivisión binaria", fr: "Subdivision binaire" }, { es: "Cada tiempo se parte en dos. Es lo que pasa en 4/4, 3/4 y 2/4.", fr: "Chaque temps se divise en deux. C'est le cas du 4/4, du 3/4 et du 2/4." }),
              concepto({ es: "Subdivisión ternaria", fr: "Subdivision ternaire" }, { es: "Cada tiempo se parte en tres. Es lo que pasa en 6/8, 9/8 y 12/8.", fr: "Chaque temps se divise en trois. C'est le cas du 6/8, du 9/8 et du 12/8." }),
              concepto({ es: "El 6/8", fr: "Le 6/8" }, { es: "Seis corcheas por compás agrupadas de tres en tres: dos tiempos, y cada tiempo es una negra con puntillo.", fr: "Six croches par mesure groupées trois par trois : deux temps, et chaque temps est une noire pointée." }),
            ]),
          lectura("p1c10-lectura", [...dosClaves("inicial1", "afianzar"), ...dosClaves("inicial2", "afianzar"), ...dosClaves("intermedio", "afianzar"), ...lineasDelCentro("afianzar")],
            { es: "Evaluación: los cuatro niveles en las dos claves", fr: "Évaluation : les quatre niveaux dans les deux clés" },
            { es: "Las ocho sesiones del nivel, una detrás de otra: es la foto de dónde estás.", fr: "Les huit sessions du niveau, l'une après l'autre : c'est la photo de là où tu en es." },
            { es: ["Repártelas en dos sesiones de estudio, no las hagas todas de un tirón.", "Compara con los tiempos del curso 1: ahí se ve el camino hecho.", "Si las ocho salen sueltas, estás listo para Tomando vuelo."], fr: ["Répartis-les sur deux séances de travail, ne les enchaîne pas toutes d'un coup.", "Compare avec les temps du cours 1 : c'est là qu'on voit le chemin parcouru.", "Si les huit sont fluides, tu es prêt pour Prendre son envol."] }),
          ejercicio("p1c10-seisocho", { es: "Seis corcheas por compás", fr: "Six croches par mesure" },
            { es: "Sentir el compás en dos tiempos aunque haya seis corcheas.", fr: "Ressentir la mesure à deux temps bien qu'elle compte six croches." },
            { es: ["Marca con el pie sólo dos veces por compás, en la primera corchea de cada grupo.", "Apoya la primera de cada tres: eso es lo que hace que se oiga en dos y no en seis."], fr: ["Bats du pied deux fois seulement par mesure, sur la première croche de chaque groupe.", "Appuie la première de chaque groupe de trois : c'est ce qui fait entendre deux temps et non six."] },
            SEIS_OCHO),
          ejercicio("p1c10-puntillo", { es: "El tiempo con puntillo", fr: "Le temps pointé" },
            { es: "La negra con puntillo dura exactamente lo mismo que sus tres corcheas.", fr: "La noire pointée dure exactement autant que ses trois croches." },
            { es: ["Alterna los dos compases sin parar: el pie no cambia de velocidad.", "Si la negra con puntillo se queda corta, cuenta sus tres corcheas por dentro."], fr: ["Alterne les deux mesures sans t'arrêter : le pied ne change pas de vitesse.", "Si la noire pointée est écourtée, compte ses trois croches intérieurement."] },
            TIEMPO_CON_PUNTILLO),
          referencia("p1c10-ref", { es: "Compases nuevos", fr: "Nouvelles mesures" },
            [
              pouillard({ es: "cap. VII págs. 70-76", fr: "chap. VII p. 70-76" }),
              chornet({ es: "págs. 33-36, Czerny op. 599 nº 1-8", fr: "p. 33-36, Czerny op. 599 nº 1-8" }),
              aaron({ es: "págs. 37 y 39, compás nuevo y Dance of the Wooden Shoes", fr: "p. 37 et 39, nouvelle mesure et Dance of the Wooden Shoes" }),
            ],
            { es: "Piezas fuera del 4/4, donde el compás se cuenta de otra manera y el acento cae en otro sitio.", fr: "Des pièces hors du 4/4, où la mesure se compte autrement et où l'accent tombe ailleurs." }),
          referencia("p1c10-rep", { es: "Repertorio", fr: "Répertoire" },
            [repertorio({ es: "Sonatina (Wilton): I. Allegro moderato, pág. 10, y II. Minuet, pág. 11", fr: "Sonatine (Wilton) : I. Allegro moderato, p. 10, et II. Menuet, p. 11" })],
            { es: "La pieza que cierra el nivel: una sonatina en dos movimientos, con las dos manos independientes y acordes en la izquierda. El minueto es el que tocarás delante de alguien.", fr: "La pièce qui clôt le niveau : une sonatine en deux mouvements, aux deux mains indépendantes et avec des accords à la main gauche. C'est le menuet que tu joueras devant quelqu'un." }),
        ],
      },
    ],
  },
  {
    id: "tomando-vuelo",
    nombre: { es: "Tomando vuelo", fr: "Prendre son envol" },
    objetivo: {
      es: "Las escalas de sol, re y fa mayor, el cromatismo, los arpegios, las inversiones del acorde perfecto y los primeros estudios de agilidad.",
      fr: "Les gammes de sol, ré et fa majeur, le chromatisme, les arpèges, les renversements de l'accord parfait et les premières études d'agilité.",
    },
    cursos: [CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE,
             CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE],
  },
  {
    id: "en-escena",
    nombre: { es: "En escena", fr: "En scène" },
    objetivo: {
      es: "Escalas y arpegios en todas las tonalidades, velocidad y terceras, y las piezas que se tocan delante de alguien.",
      fr: "Gammes et arpèges dans toutes les tonalités, vitesse et tierces, et les pièces que l'on joue devant quelqu'un.",
    },
    cursos: [CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE,
             CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE],
  },
];

// La digitacion se va retirando a medida que avanza el nivel, para que el
// alumno no se acostumbre a leer el numero en vez de la nota: en el curso 1 va
// entera, en el 2 y el 3 solo queda la nota de salida de cada mano, y del 4 en
// adelante no queda ninguna. Se respeta entera donde la digitacion es el
// contenido del ejercicio, que lo dice la formula con "digitacion: true".
function podarDigitacion(niveles) {
  niveles.forEach((nivel) => {
    nivel.cursos.forEach((curso, indice) => {
      if (indice === 0) return;
      const soloSalida = indice <= 2;
      curso.ejercicios.forEach((ejercicio) => {
        const partitura = ejercicio.partitura;
        if (partitura.tipo !== "dibujada" || partitura.digitacion) return;
        ejercicio.partitura = {
          ...partitura,
          sistemas: partitura.sistemas.map((sistema) => {
            let quedaSalida = soloSalida;
            return {
              ...sistema,
              notas: sistema.notas.map((nota) => {
                if (nota.barra || nota.silencio || !nota.d) return nota;
                if (quedaSalida) {
                  quedaSalida = false;
                  return nota;
                }
                const { d, ...resto } = nota;
                return resto;
              }),
            };
          }),
        };
      });
    });
  });
  return niveles;
}

export const NIVELES_PRACTICA = podarDigitacion(ordenarClase(NIVELES));
