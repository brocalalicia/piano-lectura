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

const MANOS_JUNTAS = {
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

// Los dos pulgares sobre el do central: las manos se separan y se juntan.
const MOVIMIENTO_CONTRARIO = {
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
    {
      clef: "bass",
      notas: [
        { n: "c/4", d: "1" }, { n: "b/3", d: "2" }, { n: "a/3", d: "3" }, { n: "g/3", d: "4" },
        { barra: true },
        { n: "f/3", d: "5" }, { n: "g/3", d: "4" }, { n: "a/3", d: "3" }, { n: "b/3", d: "2" },
        { barra: true },
        { n: "c/4", d: "1", f: "w" },
      ],
    },
  ],
};

const ESCALA_DO_DERECHA = {
  tipo: "dibujada",
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

const CINCO_DEDOS_REDONDAS_MI = {
  tipo: "dibujada",
  compas: "4/4",
  sistemas: [
    {
      clef: "bass",
      notas: [
        { n: "c/3", d: "5", f: "w" }, { barra: true },
        { n: "d/3", d: "4", f: "w" }, { barra: true },
        { n: "e/3", d: "3", f: "w" }, { barra: true },
        { n: "f/3", d: "2", f: "w" }, { barra: true },
        { n: "g/3", d: "1", f: "w" },
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

// La derecha lleva la melodia y la izquierda acompana, de fa a do.
const MELODIA_Y_ACOMPANAMIENTO = {
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
    {
      clef: "bass",
      notas: [
        { n: "c/4", d: "1" }, { n: "c/4", d: "1" }, { n: "a/3", d: "3" }, { n: "a/3", d: "3" },
        { barra: true },
        { n: "f/3", d: "5" }, { n: "f/3", d: "5" }, { n: "a/3", d: "3" }, { n: "a/3", d: "3" },
        { barra: true },
        { n: "f/3", d: "5", f: "w" },
      ],
    },
  ],
};

// --- Ejercicios con silencios (curso 2) ---------------------------------

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

// Un compas de negras y otro de corcheas: el doble de notas en el mismo sitio.
const CORCHEAS = {
  compas: "4/4",
  arbol: { figuras: ["redonda", "blanca", "negra", "corchea"] },
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4" }, { n: "d/4" }, { n: "e/4" }, { n: "f/4" },
        { barra: true },
        { n: "c/4", f: "8" }, { n: "c/4", f: "8" }, { n: "d/4", f: "8" }, { n: "d/4", f: "8" },
        { n: "e/4", f: "8" }, { n: "e/4", f: "8" }, { n: "f/4", f: "8" }, { n: "f/4", f: "8" },
      ],
    },
  ],
};

const SEMICORCHEAS = {
  arbol: { figuras: ["negra", "corchea", "semicorchea"] },
};

const ALTERACIONES = {
  tipo: "teoria",
  compas: "4/4",
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

const DOS_NOTAS = {
  tipo: "dibujada",
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

// Las manos empiezan separadas y se juntan en el do central.
const CONTRARIO_HACIA_DENTRO = aDosManos(
  {
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
  },
  {
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
  }
);

// El pulgar pasa por debajo en la derecha; en la izquierda cruza el 3.
const PREPARACION_PULGAR = aDosManos(
  {
    tipo: "dibujada",
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

// --- Las de una mano, ya unificadas --------------------------------------
const CINCO_DEDOS_REDONDAS = aDosManos(CINCO_DEDOS_REDONDAS_MD, CINCO_DEDOS_REDONDAS_MI);
const CINCO_DEDOS_NEGRAS = aDosManos(CINCO_DEDOS_DERECHA, CINCO_DEDOS_IZQUIERDA);
const NOTAS_REPETIDAS_DOS = aDosManos(NOTAS_REPETIDAS, NOTAS_REPETIDAS_MI);
const TERCERAS = aDosManos(TERCERAS_MD, TERCERAS_MI);
const BLANCAS_Y_NEGRAS = aDosManos(BLANCAS_Y_NEGRAS_MD, BLANCAS_Y_NEGRAS_MI);
const TOCAR_Y_CALLAR_DOS = aDosManos(TOCAR_Y_CALLAR, TOCAR_Y_CALLAR_MI);
const SILENCIO_LARGO_DOS = aDosManos(SILENCIO_LARGO, SILENCIO_LARGO_MI);
const DOS_NOTAS_DOS = aDosManos(DOS_NOTAS, DOS_NOTAS_MI);
const ESCALA_DO = aDosManos(ESCALA_DO_DERECHA, ESCALA_DO_IZQUIERDA);
const ARPEGIO_DO_DOS = aDosManos(ARPEGIO_DO, ARPEGIO_DO_MI);
const ACORDES_DOS = aDosManos(ACORDES_TRES_SONIDOS, ACORDES_TRES_SONIDOS_MI);

// --- Ilustraciones de teoria -------------------------------------------

// Las cinco primeras notas sobre el pentagrama, con su nombre debajo.
const PENTAGRAMA_DO_SOL = {
  sistemas: [
    {
      clef: "treble",
      notas: [
        { n: "c/4", t: "do", f: "w" }, { n: "d/4", t: "re", f: "w" },
        { n: "e/4", t: "mi", f: "w" }, { n: "f/4", t: "fa", f: "w" },
        { n: "g/4", t: "sol", f: "w" },
      ],
    },
  ],
};

// Dos octavas de teclado con las cinco notas marcadas: los grupos de dos y
// tres teclas negras son la referencia para encontrarlas.
const TECLADO_DO_SOL = {
  teclado: {
    octavas: 2,
    marcadas: [{ indice: 7 }, { indice: 8 }, { indice: 9 }, { indice: 10 }, { indice: 11 }],
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
  const cortar = (t) => `${t.split(". ")[0]}.`;
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
function lectura(id, clave, nivel, titulo, objetivo, indicaciones) {
  return { id, titulo, objetivo, indicaciones, partitura: { tipo: "lectura", clave, nivel } };
}

// Referencia a un metodo de la profesora. La pagina es la impresa en el papel.
// Principiante va con el metodo de adultos de Alfred, que junta leccion,
// teoria y tecnica en un solo libro.
// Un bloque de metodo puede citar mas de un libro: se usan los dos y se
// complementan. El Alfred lleva la leccion, la teoria y las canciones; el
// Pouillard aporta la tecnica clasica que el Alfred no toca en su nivel 1,
// como el paso del pulgar y la escala.
const alfred = (donde) => ({ metodo: "Alfred's Basic Adult All-in-One Course, nivel 1", donde });
const pouillard = (donde) => ({ metodo: "Hervé y Pouillard, Méthode de piano débutants", donde });
const chornet = (donde) => ({ metodo: "Chornet, Ejercicios, estudios y obras para piano", donde });

function referencia(id, titulo, fuentes, detalle, indicaciones) {
  return {
    id,
    titulo,
    objetivo: detalle,
    indicaciones,
    partitura: { tipo: "referencia", fuentes, detalle },
  };
}

const CURSO_PENDIENTE = { ejercicios: [] };

const NIVELES = [
  {
    id: "principiante1",
    nombre: { es: "Principiante 1", fr: "Débutant 1" },
    objetivo: {
      es: "Colocar la mano y tocar con seguridad en posición de cinco dedos, con pulso estable. Manos por separado y primeras manos juntas.",
      fr: "Placer la main et jouer avec assurance en position de cinq doigts, avec une pulsation stable. Mains séparées, puis premières mains ensemble.",
    },
    cursos: [
      {
        titulo: { es: "La mano, el teclado y las primeras notas", fr: "La main, le clavier et les premières notes" },
        objetivo: {
          es: "Colocarse, encontrar el do, tocar los cinco dedos y leer sus primeras notas.",
          fr: "S'installer au piano, repérer le do, jouer les cinq doigts et lire ses premières notes.",
        },
        ejercicios: [
          ejercicio("p1c1-md", { es: "Cinco dedos en redondas", fr: "Cinq doigts en rondes" },
            { es: "Una nota por compás: tiempo de sobra para colocar el dedo y escuchar.", fr: "Une note par mesure : tout le temps de placer le doigt et d'écouter le son." },
            { es: ["Primero la mano derecha, después la izquierda. Todavía no a la vez.", "Cuenta cuatro en cada nota, en voz alta, y dedos curvos."], fr: ["D'abord la main droite, ensuite la gauche. Pas encore ensemble.", "Compte quatre sur chaque note, à voix haute, et garde les doigts arrondis."] },
            CINCO_DEDOS_REDONDAS),
          ejercicio("p1c1-negras", { es: "Cinco dedos en negras", fr: "Cinq doigts en noires" },
            { es: "Subir y bajar sin parar entre nota y nota.", fr: "Monter et descendre sans s'arrêter entre les notes." },
            { es: ["Metrónomo a 60, una negra por clic.", "Una mano y después la otra, a la misma velocidad las dos."], fr: ["Métronome à 60, une noire par clic.", "Une main puis l'autre, à la même vitesse toutes les deux."] },
            CINCO_DEDOS_NEGRAS),
          ejercicio("p1c1-repetidas", { es: "Notas repetidas", fr: "Notes répétées" },
            { es: "Que el sonido salga del dedo y no del brazo.", fr: "Que le son vienne du doigt et non du bras." },
            { es: ["El brazo se queda quieto; sólo se mueve el dedo.", "Las dos notas iguales tienen que sonar iguales."], fr: ["Le bras reste immobile ; seul le doigt bouge.", "Les deux notes identiques doivent sonner de la même façon."] },
            NOTAS_REPETIDAS_DOS),
          teoria("p1c1-pentagrama", { es: "El pentagrama y las notas de do a sol", fr: "La portée et les notes de do à sol" },
            { es: "La música se escribe sobre cinco líneas y cuatro espacios: el pentagrama. La clave de sol, al principio, fija que la segunda línea es el sol, y a partir de ahí se cuenta todo lo demás pasando de línea a espacio. Tus cinco primeras notas son do, re, mi, fa y sol: el do va en una línea adicional por debajo del pentagrama y el sol en la segunda línea.", fr: "La musique s'écrit sur une portée : cinq lignes et quatre interlignes. La clé de sol, placée au début, situe le sol sur la deuxième ligne ; tout le reste se déduit de ce repère, en montant de ligne en interligne. Tes cinq premières notes sont do, ré, mi, fa et sol : le do se place sur une ligne supplémentaire sous la portée, et le sol sur la deuxième ligne." },
            { es: ["Señala el sol en el papel antes de leer nada más.", "Sube y baja nombrando las notas en voz alta, sin tocar."], fr: ["Montre le sol sur le papier avant de lire autre chose.", "Monte et descends en nommant les notes à voix haute, sans jouer."] },
            PENTAGRAMA_DO_SOL,
            [
              concepto({ es: "Pentagrama", fr: "Portée" }, { es: "Las cinco líneas y los cuatro espacios sobre los que se escribe la música.", fr: "Les cinq lignes et les quatre interlignes sur lesquels s'écrit la musique." }),
              concepto({ es: "Clave de sol", fr: "Clé de sol" }, { es: "El signo del principio, que fija que la segunda línea es el sol.", fr: "Le signe placé au début, qui situe le sol sur la deuxième ligne." }),
              concepto({ es: "Línea adicional", fr: "Ligne supplémentaire" }, { es: "Una línea corta que se añade para las notas que no caben en el pentagrama, como el do central.", fr: "Une petite ligne ajoutée pour les notes qui ne tiennent pas sur la portée, comme le do central." }),
              concepto({ es: "Grado conjunto", fr: "Degré conjoint" }, { es: "Pasar de una línea al espacio siguiente, sin saltarse ninguna nota: do, re, mi, fa, sol.", fr: "Passer d'une ligne à l'interligne voisin, sans sauter de note : do, ré, mi, fa, sol." }),
            ]),
          teoria("p1c1-teclado", { es: "Del pentagrama al teclado", fr: "De la portée au clavier" },
            { es: "Cada nota escrita es una tecla concreta. El do central está a la izquierda del grupo de dos teclas negras, hacia la mitad del piano; re, mi, fa y sol son las cuatro teclas blancas siguientes hacia la derecha. El orden es siempre el mismo: lee la nota, dila en voz alta y sólo entonces búscala en el teclado.", fr: "Chaque note écrite correspond à une touche précise. Le do central se trouve immédiatement à gauche du groupe de deux touches noires, vers le milieu du clavier ; ré, mi, fa et sol sont les quatre touches blanches qui suivent vers la droite. Procède toujours dans le même ordre : lis la note, nomme-la à voix haute, puis cherche-la sur le clavier." },
            { es: ["Busca todos los do del piano sin contar.", "Después, todos los fa: a la izquierda del grupo de tres."], fr: ["Trouve tous les do du piano sans compter.", "Ensuite tous les fa : à gauche du groupe de trois."] },
            TECLADO_DO_SOL,
            [
              concepto({ es: "Do central", fr: "Do central" }, { es: "El do que queda hacia el centro del piano, a la izquierda de un grupo de dos teclas negras.", fr: "Le do situé vers le centre du piano, à gauche d'un groupe de deux touches noires." }),
              concepto({ es: "Teclas negras", fr: "Touches noires" }, { es: "Van en grupos de dos y de tres, y sirven para orientarse sin contar desde el extremo.", fr: "Groupées par deux et par trois, elles servent de repères : inutile de compter depuis l'extrémité du clavier." }),
            ]),
          teoria("p1c1-figuras", { es: "Redonda, blanca y negra", fr: "Ronde, blanche et noire" },
            { es: "La redonda dura cuatro tiempos, la blanca dos y la negra uno. Los tres compases del ejemplo duran lo mismo.", fr: "La ronde vaut quatre temps, la blanche deux et la noire un. Les trois mesures de l'exemple ont donc la même durée, bien qu'elles ne contiennent pas le même nombre de notes. L'arbre ci-dessous le résume : chaque figure vaut deux fois celle qui la suit." },
            { es: ["Da palmas contando en voz alta antes de tocarlo.", "Hoy sólo redondas; las negras llegan en el curso 2."], fr: ["Frappe dans les mains en comptant à voix haute avant de jouer.", "Aujourd'hui seulement des rondes ; les noires arrivent au cours 2."] },
            FIGURAS_Y_ARBOL,
            [
              concepto({ es: "Redonda", fr: "Ronde" }, { es: "Cuatro tiempos. Se escribe hueca y sin palo.", fr: "Quatre temps. Tête vide, sans queue." }),
              concepto({ es: "Blanca", fr: "Blanche" }, { es: "Dos tiempos. Hueca y con palo.", fr: "Deux temps. Tête vide, avec une queue." }),
              concepto({ es: "Negra", fr: "Noire" }, { es: "Un tiempo. Rellena y con palo.", fr: "Un temps. Tête pleine, avec une queue." }),
              concepto({ es: "Tiempo", fr: "Temps" }, { es: "La unidad del pulso, lo que marcas con el pie o el metrónomo.", fr: "L'unité de la pulsation : ce que tu bats du pied, ou ce que marque le métronome." }),
            ]),
          teoria("p1c1-digitacion", { es: "La digitación: qué dedo es cada número", fr: "Le doigté : quel doigt pour chaque numéro" },
            { es: "Los dedos se numeran del 1 al 5 empezando por el pulgar, y es igual en las dos manos: el pulgar siempre es el 1 y el meñique siempre el 5. Por eso los números van en espejo, y los dos pulgares se encuentran en el centro del teclado. En la partitura, el número pequeño junto a la nota dice con qué dedo tocarla.", fr: "Les doigts se numérotent de 1 à 5 en partant du pouce, et la règle vaut pour les deux mains : le pouce est toujours le 1, l'auriculaire toujours le 5. Les numéros se lisent donc en miroir, et les deux pouces se rejoignent au centre du clavier. Sur la partition, le petit chiffre placé près de la note indique le doigt à employer." },
            { es: ["Que sepas decir el número de cada dedo sin mirar el dibujo.", "Cuidado: no es el orden de izquierda a derecha, es desde el pulgar."], fr: ["Sache dire le numéro de chaque doigt sans regarder le dessin.", "Attention : ce n'est pas l'ordre de gauche à droite, c'est à partir du pouce."] },
            MANOS,
            [
              concepto({ es: "Pulgar, el 1", fr: "Pouce, le 1" }, { es: "En la mano derecha queda a la izquierda; en la izquierda, a la derecha. Los dos hacia el centro.", fr: "À la main droite il se trouve à gauche, à la main gauche il se trouve à droite : l'un et l'autre tournés vers le centre." }),
              concepto({ es: "Meñique, el 5", fr: "Auriculaire, le 5" }, { es: "El dedo más corto y el más débil: es el que hay que vigilar para que no se hunda.", fr: "Le doigt le plus court et le plus faible : c'est lui qu'il faut surveiller pour qu'il ne s'affaisse pas." }),
            ]),
          referencia("p1c1-ref", { es: "Sentarse, digitación y primeras melodías", fr: "S'asseoir, doigté et premières mélodies" },
            [alfred({ es: "págs. 4-12", fr: "p. 4-12" }), pouillard({ es: "Presentación págs. 4-6 y cap. I pág. 8", fr: "Présentation p. 4-6 et chap. I p. 8" }), chornet({ es: "págs. 7 y 11", fr: "p. 7 et 11" })],
            { es: "Ejercicios preliminares, cómo sentarse, los números de los dedos, el teclado y la posición de do de la derecha.", fr: "Position du corps et de la main, les numéros des doigts et les mélodies à 2, 3 et 4 doigts." },
            { es: ["Revisa altura del taburete antes de nada.", "Del Alfred, hasta la posición de do de la derecha en esta clase."], fr: ["Vérifie la hauteur du tabouret avant tout.", "De l'Alfred, jusqu'à la position de do de la main droite dans ce cours."] }),
          lectura("p1c1-lectura", "sol", "inicial1",
            { es: "Leer las notas de do a sol", fr: "Lire les notes de do à sol" },
            { es: "Las mismas cinco notas que acabas de tocar, ahora leyéndolas.", fr: "Les cinq mêmes notes que tu viens de jouer, cette fois à lire." },
            { es: ["Una sesión completa al final de la clase.", "Apunta el tiempo: es tu punto de partida."], fr: ["Une session complète à la fin du cours.", "Note le temps : c'est ton point de départ."] }),
        ],
      },
      {
        titulo: { es: "El pulso, los dedos iguales y el legato", fr: "La pulsation, l'égalité des doigts et le legato" },
        objetivo: {
          es: "Tocar contando, igualar el sonido de los cinco dedos y empezar a ligar.",
          fr: "Jouer en comptant, égaliser le son des cinq doigts et commencer à lier les notes.",
        },
        ejercicios: [
          teoria("p1c2-compas", { es: "El compás y la barra de compás", fr: "La mesure et la barre de mesure" },
            { es: "La barra de compás corta la música en compases de la misma duración. Al principio, dos números puestos uno encima de otro dicen cómo son. El de arriba cuenta: cuántos tiempos entran en cada compás. El de abajo nombra: qué figura vale un tiempo, y no es un número cualquiera, dice en cuántas partes se ha dividido la redonda. Un 4 significa negra, porque cuatro negras hacen una redonda; un 2 es la blanca y un 8 la corchea. Así que 4/4 se lee «cuatro negras por compás». El primer tiempo va algo más apoyado: es lo que da sensación de orden.", fr: "La barre de mesure découpe la musique en mesures de même durée. Au début, deux chiffres superposés indiquent comment elles sont faites. Celui du haut compte : combien de temps entrent dans chaque mesure. Celui du bas nomme : quelle figure vaut un temps — et ce n'est pas un chiffre arbitraire, il dit en combien de parts la ronde a été divisée. Un 4 désigne la noire, puisque quatre noires font une ronde ; un 2 désigne la blanche et un 8 la croche. Le 4/4 se lit donc « quatre noires par mesure ». Le premier temps est un peu plus appuyé : c'est lui qui donne la sensation d'ordre." },
            { es: ["Cuenta 1-2-3-4 en cada compás y marca el primero con el pie.", "Truco: el número de abajo es el mismo que en el árbol de duraciones."], fr: ["Compte 1-2-3-4 dans chaque mesure et marque le premier du pied.", "Astuce : le chiffre du bas est le même que dans l'arbre des durées."] },
            COMPAS_CUATRO,
            [
              concepto({ es: "Compás", fr: "Mesure" }, { es: "Cada trozo de música entre dos barras. Todos duran lo mismo.", fr: "Chaque portion de musique comprise entre deux barres. Toutes ont la même durée." }),
              concepto({ es: "Barra de compás", fr: "Barre de mesure" }, { es: "La línea vertical que separa un compás del siguiente.", fr: "La ligne verticale qui sépare une mesure de la suivante." }),
              concepto({ es: "Número de arriba", fr: "Chiffre du haut" }, { es: "Cuántos tiempos hay en cada compás: 2, 3 o 4 en los compases que vas a ver ahora.", fr: "Combien de temps compte chaque mesure : 2, 3 ou 4 dans les mesures que tu verras pour l'instant." }),
              concepto({ es: "Número de abajo", fr: "Chiffre du bas" }, { es: "Qué figura vale un tiempo: 2 es la blanca, 4 la negra y 8 la corchea. Es la redonda dividida en esas partes.", fr: "Quelle figure vaut un temps : 2 pour la blanche, 4 pour la noire, 8 pour la croche. C'est la ronde divisée en autant de parts." }),
            ]),
          teoria("p1c2-silencios", { es: "Los silencios", fr: "Les silences" },
            { es: "El silencio dice cuánto rato se calla la música, y se cuenta igual que una nota aunque no suene nada. Cada figura tiene el suyo y dura lo mismo: el de redonda cuatro tiempos, el de blanca dos y el de negra uno.", fr: "Le silence indique combien de temps la musique se tait ; il se compte exactement comme une note, même si rien ne sonne. À chaque figure correspond un silence de même durée : quatre temps pour celui de ronde, deux pour celui de blanche, un pour celui de noire." },
            { es: ["Cuenta el silencio en voz alta, igual que cuentas las notas.", "Las manos se quedan sobre las teclas: el silencio no es soltar."], fr: ["Compte le silence à voix haute, comme tu comptes les notes.", "Les mains restent sur les touches : le silence n'est pas un relâchement."] },
            SILENCIOS,
            [
              concepto({ es: "Silencio de redonda", fr: "Silence de ronde" }, { es: "Cuatro tiempos callados. Es un rectángulo colgando de la cuarta línea.", fr: "Quatre temps de silence. Un rectangle suspendu sous la quatrième ligne." }),
              concepto({ es: "Silencio de blanca", fr: "Silence de blanche" }, { es: "Dos tiempos. El mismo rectángulo, pero apoyado encima de la tercera línea.", fr: "Deux temps. Le même rectangle, mais posé sur la troisième ligne." }),
              concepto({ es: "Silencio de negra", fr: "Silence de noire" }, { es: "Un tiempo. Es el garabato que ocupa el centro del pentagrama.", fr: "Un temps. C'est le signe en zigzag au centre de la portée." }),
            ]),
          ejercicio("p1c2-callar", { es: "Tocar y callar", fr: "Jouer et se taire" },
            { es: "Levantar el dedo justo a tiempo: el silencio dura tanto como la nota.", fr: "Lever le doigt juste à temps : le silence dure autant que la note." },
            { es: ["Cuenta 1-2-3-4 en voz alta y no dejes de contar en el silencio.", "El dedo se levanta en el tiempo, no antes ni después."], fr: ["Compte 1-2-3-4 à voix haute et ne t'arrête pas de compter pendant le silence.", "Le doigt se lève sur le temps, ni avant, ni après."] },
            TOCAR_Y_CALLAR_DOS),
          ejercicio("p1c2-silencio-largo", { es: "El silencio de blanca", fr: "Le silence de blanche" },
            { es: "Aguantar dos tiempos callado sin adelantar la entrada siguiente.", fr: "Tenir deux temps de silence sans anticiper l'entrée suivante." },
            { es: ["Es más difícil callar dos tiempos que uno: sigue contando.", "La mano se queda quieta sobre las teclas mientras callas."], fr: ["Se taire deux temps est plus difficile qu'un seul : continue de compter.", "La main reste immobile sur les touches pendant le silence."] },
            SILENCIO_LARGO_DOS),
          ejercicio("p1c2-alternas", { es: "Manos alternas", fr: "Mains alternées" },
            { es: "Mientras una mano toca, la otra calla: el primer reparto entre las dos.", fr: "Pendant qu'une main joue, l'autre se tait : c'est le premier partage du travail entre les deux." },
            { es: ["La mano que calla se queda preparada sobre sus teclas.", "El paso de una mano a otra no puede notarse: sin hueco ni tropiezo."], fr: ["La main qui se tait reste prête sur ses touches.", "Le passage d'une main à l'autre ne doit pas s'entendre : ni trou, ni accroc."] },
            MANOS_ALTERNAS),
          ejercicio("p1c2-terceras", { es: "Terceras", fr: "Tierces" },
            { es: "Saltar un dedo sin que la mano se mueva de sitio.", fr: "Sauter un doigt sans que la main bouge de place." },
            { es: ["Los dedos que no tocan se quedan sobre sus teclas.", "El salto se prepara antes, no en el último momento."], fr: ["Les doigts qui ne jouent pas restent sur leurs touches.", "Le saut se prépare à l'avance, pas au dernier moment."] },
            TERCERAS),
          referencia("p1c2-ref", { es: "Legato, matices y fraseo", fr: "Legato, nuances et phrasé" },
            [alfred({ es: "págs. 13-17", fr: "p. 13-17" }), pouillard({ es: "cap. I págs. 9-13", fr: "chap. I p. 9-13" }), chornet({ es: "págs. 17, 22 y 29", fr: "p. 17, 22 et 29" })],
            { es: "Negras, blancas y redonda, el compás y la clave de sol, con Ode to Joy y Aura Lee.", fr: "La préparation au legato, lier pour de bon et les premières indications de nuance." },
            { es: ["Un dedo se levanta cuando el otro ya ha bajado.", "Toca el mismo ejercicio en f y en p."], fr: ["Un doigt se lève quand l'autre est déjà descendu.", "Joue le même exercice en f puis en p."] }),
          lectura("p1c2-lectura", "sol", "inicial2",
            { es: "Ampliar de sol a do agudo", fr: "Élargir du sol au do aigu" },
            { es: "Las notas que quedan por encima de la posición de cinco dedos.", fr: "Les notes au-dessus de la position de cinq doigts." },
            { es: ["Si fallas mucho, vuelve a Inicial 1 y sube la semana siguiente."], fr: ["Si tu te trompes beaucoup, reviens à Débutant 1 et monte la semaine suivante."] }),
        ],
      },
      {
        titulo: { es: "Manos juntas y la clave de fa", fr: "Mains ensemble et clé de fa" },
        objetivo: {
          es: "Las dos manos a la vez, y leer la mano izquierda en su propia clave.",
          fr: "Jouer des deux mains à la fois et lire la main gauche dans sa propre clé.",
        },
        ejercicios: [
          ejercicio("p1c3-paralelo", { es: "Manos juntas en paralelo", fr: "Mains ensemble en parallèle" },
            { es: "Coordinar las dos manos tocando lo mismo a la vez.", fr: "Coordonner les deux mains en jouant la même chose en même temps." },
            { es: ["Los dedos van cruzados: el 1 con el 5, el 2 con el 4.", "Si una mano se adelanta, vuelve a manos separadas."], fr: ["Les doigts se répondent en miroir : le 1 avec le 5, le 2 avec le 4.", "Si une main prend de l'avance, reviens aux mains séparées."] },
            MANOS_JUNTAS),
          teoria("p1c3-clavefa", { es: "La clave de fa y el do central", fr: "La clé de fa et le do central" },
            { es: "El piano abarca demasiadas notas para un solo pentagrama: la mano izquierda necesitaría tantas líneas adicionales que no habría quien lo leyera. Por eso hay dos claves, una para cada mano. La clave es el signo del principio y fija qué nota va en qué línea: la de sol pone el sol en la segunda línea, y la de fa pone el fa en la cuarta. Con ese punto de partida, el mismo pentagrama de cinco líneas sirve para dos registros distintos, y el do central queda justo entre los dos.", fr: "L'étendue du piano est trop vaste pour tenir sur une seule portée : la main gauche exigerait tant de lignes supplémentaires que la lecture en deviendrait impossible. D'où l'usage de deux clés, une par main. La clé, placée au début de la portée, fixe une note de référence : celle de sol situe le sol sur la deuxième ligne, celle de fa situe le fa sur la quatrième. À partir de ce repère, les mêmes cinq lignes servent à deux registres différents, et le do central se trouve exactement entre les deux." },
            { es: ["Mira el recuadro: arriba el do central es la primera nota y abajo la última, pero es la misma tecla.", "En clave de sol cuelga por debajo del pentagrama; en clave de fa asoma por encima."], fr: ["Regarde le cadre : en haut le do central est la première note et en bas la dernière, mais c'est la même touche.", "En clé de sol il pend sous la portée ; en clé de fa il dépasse au-dessus."] },
            NOTAS_DE_LAS_DOS_CLAVES,
            [
              concepto({ es: "Clave", fr: "Clé" }, { es: "El signo del principio del pentagrama. Fija qué nota va en qué línea; a partir de ahí se cuentan todas las demás.", fr: "Le signe au début de la portée. Il fixe quelle note va sur quelle ligne ; tout le reste se compte à partir de là." }),
              concepto({ es: "Por qué hay dos", fr: "Pourquoi il y en a deux" }, { es: "Para no llenar la partitura de líneas adicionales. Cada clave coloca el pentagrama en un registro distinto del piano.", fr: "Pour éviter d'accumuler les lignes supplémentaires : chaque clé installe la portée dans un registre différent du clavier." }),
              concepto({ es: "Do central", fr: "Do central" }, { es: "La nota que comparten las dos claves: una sola tecla, escrita de dos maneras.", fr: "La note que les deux clés partagent : une seule touche, écrite de deux façons." }),
            ]),
          ejercicio("p1c3-blancasnegras", { es: "Manos juntas: blancas y negras", fr: "Mains ensemble : blanches et noires" },
            { es: "Juntar las manos cuando las figuras no son todas iguales.", fr: "Réunir les mains lorsque les figures n'ont pas toutes la même durée." },
            { es: ["Cuenta en voz alta: la blanca dura dos y no se suelta antes.", "Si una mano se adelanta, vuelve a manos separadas y sube el tempo despacio."], fr: ["Compte à voix haute : la blanche dure deux temps et ne se lâche pas avant.", "Si une main prend de l'avance, reviens aux mains séparées et augmente le tempo progressivement."] },
            BLANCAS_Y_NEGRAS),
          ejercicio("p1c3-posicionsol", { es: "La posición de sol", fr: "La position de sol" },
            { es: "Sacar la mano del do: la misma fórmula, cinco notas más arriba.", fr: "Quitter la position de do : la même formule, cinq notes plus haut." },
            { es: ["Mira primero dónde cae el sol en el teclado y en el papel.", "Es la posición del nivel de lectura que trabajas ahora."], fr: ["Repère d'abord le sol, sur le clavier comme sur le papier.", "C'est la position du niveau de lecture que tu travailles en ce moment."] },
            POSICION_SOL),
          referencia("p1c3-ref", { es: "Manos juntas, polifonía en do y en sol", fr: "Mains ensemble, polyphonie en do et en sol" },
            [alfred({ es: "págs. 16-20", fr: "p. 16-20" }), pouillard({ es: "cap. II págs. 18-20", fr: "chap. II p. 18-20" }), chornet({ es: "pág. 14", fr: "p. 14" })],
            { es: "Posición de do de la izquierda, la clave de fa y el sistema de dos pentagramas.", fr: "Premières pièces à deux mains, avec les deux voix qui sonnent." },
            { es: ["Monta cada mano por separado antes de juntarlas."], fr: ["Monte chaque main séparément avant de les réunir."] }),
          lectura("p1c3-lectura", "fa", "inicial1",
            { es: "Leer en clave de fa", fr: "Lire en clé de fa" },
            { es: "De fa a do central: lo que acabas de tocar con la izquierda.", fr: "Du fa au do central : ce que tu viens de jouer de la main gauche." },
            { es: ["Es normal ir más lento que en clave de sol.", "Alterna las dos claves a partir de ahora."], fr: ["Il est normal d'être plus lent qu'en clé de sol.", "Alterne les deux clés à partir de maintenant."] }),
        ],
      },
      {
        titulo: { es: "Movimiento contrario e independencia", fr: "Mouvement contraire et indépendance" },
        objetivo: {
          es: "Que cada mano vaya a lo suyo sin arrastrar a la otra.",
          fr: "Que chaque main suive son chemin sans entraîner l'autre.",
        },
        ejercicios: [
          ejercicio("p1c4-contrario", { es: "Movimiento contrario", fr: "Mouvement contraire" },
            { es: "Las manos hacen lo mismo pero hacia lados opuestos.", fr: "Les mains font la même chose mais en sens opposé." },
            { es: ["Los dos pulgares comparten el do central: cada uno toca el suyo.", "Es más fácil que el paralelo: los dedos van emparejados, 1 con 1."], fr: ["Les deux pouces partagent le do central : chacun joue le sien.", "C'est plus facile que le parallèle : les doigts vont par paires, 1 avec 1."] },
            MOVIMIENTO_CONTRARIO),
          teoria("p1c4-independencia", { es: "Cada mano, un papel", fr: "Chaque main, un rôle" },
            { es: "Casi siempre una mano lleva la melodía y la otra acompaña. La que acompaña suena más floja: no toca menos, pesa menos.", fr: "Le plus souvent, une main porte la mélodie et l'autre l'accompagne. L'accompagnement se joue plus doucement : il ne comporte pas moins de notes, il pèse moins." },
            { es: ["Toca la melodía en f y el acompañamiento en p.", "La izquierda se mueve poco y repite: es su papel, no es que toque menos."], fr: ["Joue la mélodie en f et l'accompagnement en p.", "La gauche bouge peu et répète : c'est son rôle, pas qu'elle joue moins."] },
            MELODIA_Y_ACOMPANAMIENTO),
          teoria("p1c4-corchea", { es: "La corchea", fr: "La croche" },
            { es: "Hasta ahora la figura más corta era la negra, de un tiempo. La corchea dura la mitad, así que entran dos en cada negra: se cuenta uno-y, dos-y. Se escribe como la negra pero con un corchete en el palo.", fr: "Jusqu'ici, la figure la plus brève était la noire, qui vaut un temps. La croche en vaut la moitié : il en faut deux pour remplir une noire, et l'on compte un-et, deux-et. Elle s'écrit comme la noire, avec un crochet au bout de la queue." },
            { es: ["Cuenta uno-y dos-y tres-y cuatro-y sin cambiar la velocidad del pie.", "Con las manos ya juntas, es el momento de partir el tiempo."], fr: ["Compte un-et deux-et trois-et quatre-et sans changer la vitesse du pied.", "Les mains étant déjà ensemble, c'est le moment de partager le temps."] },
            CORCHEAS,
            [
              concepto({ es: "Corchea", fr: "Croche" }, { es: "Medio tiempo. Dos corcheas ocupan lo mismo que una negra.", fr: "Un demi-temps. Deux croches valent une noire." }),
              concepto({ es: "Corchete", fr: "Crochet" }, { es: "El rabito del palo que distingue la corchea de la negra.", fr: "Le petit appendice recourbé au bout de la queue, qui distingue la croche de la noire." }),
              concepto({ es: "Barra de unión", fr: "Barre de ligature" }, { es: "Cuando van varias corcheas seguidas, los corchetes se sustituyen por una barra que las agrupa por tiempos.", fr: "Quand plusieurs croches se suivent, les crochets cèdent la place à une barre qui les regroupe par temps." }),
            ]),
          ejercicio("p1c4-hacia-dentro", { es: "Contrario hacia dentro", fr: "Contraire vers l'intérieur" },
            { es: "Al revés que el anterior: las manos empiezan separadas y se encuentran en el do central.", fr: "À l'inverse du précédent : les mains partent écartées et se rejoignent sur le do central." },
            { es: ["Los dos pulgares llegan al do central a la vez, en el mismo tiempo.", "Cuesta más que hacia fuera: ahí es donde se nota la independencia."], fr: ["Les deux pouces arrivent au do central en même temps, sur le même temps.", "Plus difficile que vers l'extérieur : c'est là que se mesure l'indépendance."] },
            CONTRARIO_HACIA_DENTRO),
          referencia("p1c4-ref", { es: "Independencia de manos", fr: "Indépendance des mains" },
            [alfred({ es: "págs. 21-23", fr: "p. 21-23" }), pouillard({ es: "cap. III pág. 26", fr: "chap. III p. 26" }), chornet({ es: "pág. 17", fr: "p. 17" })],
            { es: "Tocar de do a sol sobre los dos pentagramas, con Lightly Row y Aunt Rhody.", fr: "Que chaque main fasse quelque chose de différent sans entraîner l'autre." },
            { es: ["Empieza por una mano tenida y la otra en notas sueltas."], fr: ["Commence par une main tenue et l'autre en notes détachées."] }),
          lectura("p1c4-lectura", "fa", "inicial2",
            { es: "Ampliar en clave de fa", fr: "Élargir en clé de fa" },
            { es: "De do a sol, por encima del pentagrama de la izquierda.", fr: "Du do au sol, au-dessus de la portée de la main gauche." },
            { es: ["Alterna con clave de sol para no perder ninguna."], fr: ["Alterne avec la clé de sol pour n'en perdre aucune."] }),
        ],
      },
      {
        titulo: { es: "Acordes y alteraciones", fr: "Accords et altérations" },
        objetivo: {
          es: "Dos notas a la vez, las teclas negras en la partitura y otros compases.",
          fr: "Deux notes à la fois, les touches noires sur la partition et de nouveaux chiffrages de mesure.",
        },
        ejercicios: [
          ejercicio("p1c5-dosnotas", { es: "Dos notas a la vez", fr: "Deux notes à la fois" },
            { es: "Que las dos suenen exactamente juntas y con el mismo peso.", fr: "Que les deux sonnent exactement ensemble et avec le même poids." },
            { es: ["Deja caer el brazo; no aprietes con los dedos.", "Escucha si una de las dos se adelanta."], fr: ["Laisse tomber le bras ; ne serre pas avec les doigts.", "Écoute si l'une des deux devance l'autre."] },
            DOS_NOTAS_DOS),
          teoria("p1c5-alteraciones", { es: "Sostenidos y bemoles", fr: "Dièses et bémols" },
            { es: "El sostenido sube la nota a la tecla de al lado, hacia la derecha; el bemol la baja hacia la izquierda. Casi siempre son las teclas negras.", fr: "Le dièse élève la note d'un demi-ton, vers la touche voisine de droite ; le bémol l'abaisse d'un demi-ton, vers la gauche. Dans la plupart des cas, il s'agit d'une touche noire." },
            { es: ["Fa sostenido y si bemol son los dos primeros que te vas a encontrar.", "Sólo reconocerlos: tocarlos llega con las escalas."], fr: ["Fa dièse et si bémol sont les deux premières que tu rencontreras.", "Seulement les reconnaître : les jouer viendra avec les gammes."] },
            ALTERACIONES),
          teoria("p1c5-compases", { es: "Los compases de 3/4 y 2/4", fr: "Les mesures à 3/4 et 2/4" },
            { es: "El número de abajo dice qué figura vale un tiempo y el de arriba cuántos hay por compás. En 3/4 se cuenta 1-2-3, como un vals.", fr: "Le chiffre du bas indique quelle figure vaut un temps, celui du haut combien de temps compte chaque mesure. À 3/4, on compte 1-2-3, comme une valse." },
            { es: ["Da palmas en 3/4 y en 2/4 antes de tocarlo."], fr: ["Frappe dans les mains à 3/4 et à 2/4 avant de jouer."] },
            COMPASES_TRES_DOS),
          referencia("p1c5-ref", { es: "Los acordes y las alteraciones", fr: "Les accords et les altérations" },
            [alfred({ es: "págs. 24-31", fr: "p. 24-31" }), pouillard({ es: "cap. III págs. 28-30", fr: "chap. III p. 28-30" }), chornet({ es: "págs. 26 y 30", fr: "p. 26 et 30" })],
            { es: "Intervalos melódicos y armónicos, de segunda a quinta, y los primeros matices.", fr: "Premier contact avec deux et trois notes ensemble, et avec les altérations." },
            { es: ["Los acordes de tres sonidos completos llegan en el curso 8."], fr: ["Les accords de trois sons complets arrivent au cours 8."] }),
          lectura("p1c5-lectura", "sol", "inicial2",
            { es: "Lectura mezclando las dos claves", fr: "Lecture en mêlant les deux clés" },
            { es: "Una sesión de cada clave, seguidas.", fr: "Une session de chaque clé, à la suite." },
            { es: ["Compara las estrellas de las dos: dónde flojeas."], fr: ["Compare les étoiles des deux : où tu faiblis."] }),
        ],
      },
      {
        titulo: { es: "Primeras piezas", fr: "Premières pièces" },
        objetivo: {
          es: "Juntarlo todo en una pieza de verdad, y saber abordar una partitura nueva.",
          fr: "Réunir tout l'acquis dans une vraie pièce et savoir aborder une nouvelle partition.",
        },
        ejercicios: [
          ejercicio("p1c6-repaso", { es: "Repaso: manos juntas", fr: "Révision : mains ensemble" },
            { es: "Calentar con lo que ya sabe antes de leer algo nuevo.", fr: "S'échauffer avec ce que tu sais déjà avant d'aborder du nouveau." },
            { es: ["Paralelo y contrario seguidos, sin parar entre ellos."], fr: ["Parallèle et contraire à la suite, sans s'arrêter entre les deux."] },
            MOVIMIENTO_CONTRARIO),
          teoria("p1c6-leer", { es: "Cómo empezar una partitura nueva", fr: "Comment aborder une nouvelle partition" },
            { es: "Antes de tocar: mirar la clave, el compás, dónde empieza cada mano y si hay alteraciones. Después, solfear el ritmo con palmas.", fr: "Avant de jouer, examine la clé, le chiffrage de mesure, la note de départ de chaque main et les altérations éventuelles. Solfie ensuite le rythme en frappant dans les mains. Jouer vient en dernier." },
            { es: ["Este orden, siempre el mismo, hasta que te salga solo.", "Tocar es lo último, no lo primero."], fr: ["Cet ordre, toujours le même, jusqu'à ce qu'il vienne tout seul.", "Jouer est la dernière étape, pas la première."] }),
          teoria("p1c6-semicorchea", { es: "La semicorchea", fr: "La double croche" },
            { es: "La semicorchea dura la mitad que la corchea, así que entran cuatro en cada negra. Lleva dos corchetes en vez de uno. Aparece en cuanto empiezas a tocar piezas de verdad, aunque sea de paso.", fr: "La double croche vaut la moitié d'une croche : il en faut quatre pour remplir une noire. Elle porte deux crochets au lieu d'un. Tu la rencontreras dès tes premières vraies pièces, ne serait-ce qu'au détour d'une mesure." },
            { es: ["Reconocerla es suficiente por ahora: cuéntala despacio antes de tocarla.", "Si una pieza va llena de ellas, todavía no te toca."], fr: ["La reconnaître suffit pour l'instant : compte-la lentement avant de la jouer.", "Si un morceau en est plein, ce n'est pas encore pour toi."] },
            SEMICORCHEAS,
            [
              concepto({ es: "Semicorchea", fr: "Double croche" }, { es: "Un cuarto de tiempo. Cuatro semicorcheas ocupan lo mismo que una negra.", fr: "Un quart de temps. Quatre doubles croches valent une noire." }),
            ]),
          referencia("p1c6-ref1", { es: "Estudios progresivos y piezas", fr: "Études progressives et pièces" },
            [alfred({ es: "págs. 32-37 y 42-43", fr: "p. 32-37 et 42-43" }), pouillard({ es: "cap. VII págs. 64-68", fr: "chap. VII p. 64-68" }), chornet({ es: "págs. 33-36, Czerny op. 599 nº 1-8", fr: "p. 33-36, Czerny op. 599 nº 1-8" })],
            { es: "El acorde de do mayor, las ligaduras y el legato, con Brother John y Mary Ann.", fr: "Le répertoire de la méthode, avec tout ce qui a été appris jusqu'ici." },
            { es: ["Elige una pieza que te guste: es tu primera pieza de verdad."], fr: ["Choisis une pièce qui te plaît : c'est ta première vraie pièce."] }),
          lectura("p1c6-lectura", "fa", "inicial2",
            { es: "Repaso de lectura", fr: "Révision de lecture" },
            { es: "Una sesión completa de cada clave para ver dónde está.", fr: "Une session complète de chaque clé pour voir où il en est." },
            { es: ["Apunta precisión y tiempo: sirven para medir los cursos 7 y 8."], fr: ["Note la précision et le temps : ils servent à mesurer les cours 7 et 8."] }),
        ],
      },
      {
        titulo: { es: "El paso del pulgar", fr: "Le passage du pouce" },
        objetivo: {
          es: "Salir de la posición fija: la escala de do mayor en las dos manos.",
          fr: "Sortir de la position fixe : la gamme de do majeur aux deux mains.",
        },
        ejercicios: [
          ejercicio("p1c7-preparacion", { es: "Preparación del paso del pulgar", fr: "Préparation du passage du pouce" },
            { es: "Sólo el movimiento del cruce, sin la escala entera.", fr: "Seulement le mouvement du croisement, sans la gamme entière." },
            { es: ["Derecha: el pulgar pasa por debajo del 3. Izquierda: el 3 cruza por encima del pulgar.", "Muy lento y repetido, hasta que el cruce no se oiga."], fr: ["Droite : le pouce passe sous le 3. Gauche : le 3 croise par-dessus le pouce.", "Très lentement, en répétant, jusqu'à ce que le croisement ne s'entende plus."] },
            PREPARACION_PULGAR),
          ejercicio("p1c7-md", { es: "Escala de do mayor", fr: "Gamme de do majeur" },
            { es: "El pulgar pasa por debajo del 3 para tocar el fa.", fr: "Le pouce passe sous le 3 pour jouer le fa." },
            { es: ["Prepara el pulgar mientras suenan el 2 y el 3.", "La mano no da tirones: el codo acompaña."], fr: ["Prépare le pouce pendant que sonnent le 2 et le 3.", "La main ne doit pas sursauter : le coude accompagne le mouvement."] },
            ESCALA_DO),
          teoria("p1c7-escala", { es: "Por qué la escala se digita así", fr: "Pourquoi la gamme se doigte ainsi" },
            { es: "La mano tiene cinco dedos y la escala ocho notas, así que hay que pasar el pulgar una vez. Se pasa donde menos se nota, entre el mi y el fa.", fr: "La main compte cinq doigts, la gamme huit notes : il faut donc passer le pouce une fois. Ce passage se place là où il s'entend le moins, entre le mi et le fa." },
            { es: ["Dilo en voz alta antes de tocar: dónde pasa el pulgar y por qué.", "La digitación es la misma en todas las escalas de teclas blancas."], fr: ["Dis-le à voix haute avant de jouer : où passe le pouce et pourquoi.", "Le doigté est le même dans toutes les gammes de touches blanches."] },
            ESCALA_DO_DERECHA),
          referencia("p1c7-ref", { es: "Paso del pulgar y escala de do mayor", fr: "Passage du pouce et gamme de do majeur" },
            [alfred({ es: "págs. 56-57", fr: "p. 56-57" }), pouillard({ es: "cap. IV págs. 34-35", fr: "chap. IV p. 34-35" }), chornet({ es: "págs. 43-46, preparatorios y escalas", fr: "p. 43-46, préparatoires et gammes" })],
            { es: "El Alfred trabaja la igualdad de los dedos; la escala y el paso del pulgar los da el Pouillard, que el Alfred no toca en su nivel 1.", fr: "Le mécanisme expliqué, ses exercices préparatoires et la gamme complète." },
            { es: ["Los preparatorios antes que la escala entera."], fr: ["Les préparatoires avant la gamme entière."] }),
          lectura("p1c7-lectura", "sol", "intermedio",
            { es: "Leer de do agudo a sol agudo", fr: "Lire du do aigu au sol aigu" },
            { es: "La octava de arriba, que es donde acaba de llegar con la escala.", fr: "L'octave du dessus, où il vient d'arriver avec la gamme." },
            { es: ["Si vas justo, quédate en Inicial 2 una semana más."], fr: ["Si c'est juste, reste à Débutant 2 une semaine de plus."] }),
        ],
      },
      {
        titulo: { es: "Arpegios y acordes de tres sonidos", fr: "Arpèges et accords de trois sons" },
        objetivo: {
          es: "Abrir la mano más allá de los cinco dedos seguidos y cerrar el nivel.",
          fr: "Ouvrir la main au-delà des cinq doigts consécutifs et achever le niveau.",
        },
        ejercicios: [
          ejercicio("p1c8-arpegio", { es: "Arpegio de do mayor", fr: "Arpège de do majeur" },
            { es: "El salto de sol a do lo hace el 5, no la muñeca.", fr: "Le saut de sol à do se fait avec le 5, pas avec le poignet." },
            { es: ["Las cuatro notas suenan igual de fuertes.", "Sin acelerar en la bajada."], fr: ["Les quatre notes doivent sonner avec la même intensité.", "Sans accélérer à la descente."] },
            ARPEGIO_DO_DOS),
          ejercicio("p1c8-acordes", { es: "Acordes de tres sonidos", fr: "Accords de trois sons" },
            { es: "Tres notas a la vez, juntas y con el mismo peso.", fr: "Trois notes à la fois, ensemble et avec le même poids." },
            { es: ["Deja caer el brazo: el acorde no se aprieta con los dedos.", "Escucha si alguna de las tres suena más floja."], fr: ["Laisse tomber le bras : l'accord ne se serre pas avec les doigts.", "Écoute si l'une des trois sonne plus faible."] },
            ACORDES_DOS),
          teoria("p1c8-acorde", { es: "Qué es un acorde de tres sonidos", fr: "Qu'est-ce qu'un accord de trois sons" },
            { es: "Se toma una nota y se le añaden la tercera y la quinta por encima, saltando una tecla blanca cada vez. Do, fa y sol son los tres acordes que sostienen casi toda la música que va a tocar.", fr: "On part d'une note et l'on ajoute au-dessus la tierce, puis la quinte, en sautant une touche blanche à chaque fois. Do, fa et sol forment les trois accords qui soutiennent presque toute la musique que tu vas jouer." },
            { es: ["Construye tú el acorde de re y el de mi.", "El arpegio es el mismo acorde, nota a nota."], fr: ["Construis l'accord de ré et celui de mi toi-même.", "L'arpège est le même accord, note par note."] },
            ACORDE_CONSTRUCCION),
          referencia("p1c8-ref", { es: "Acordes de tres sonidos", fr: "Accords de trois sons" },
            [alfred({ es: "págs. 44-49 y 60", fr: "p. 44-49 et 60" }), pouillard({ es: "cap. IV pág. 38 y cap. V págs. 51-52", fr: "chap. IV p. 38 et chap. V p. 51-52" }), chornet({ es: "págs. 51 y 59, Bach y Mozart", fr: "p. 51 et 59, Bach et Mozart" })],
            { es: "Los acordes de do, fa y sol, y la diferencia entre acorde y acorde quebrado.", fr: "Les accords sur la partition et comment ils s'enchaînent." },
            { es: ["Con esto cerrado, estás listo para Principiante 2."], fr: ["Une fois cela acquis, tu es prêt pour le Débutant 2."] }),
          lectura("p1c8-lectura", "fa", "intermedio",
            { es: "Evaluación: las dos claves ampliadas", fr: "Évaluation : les deux clés élargies" },
            { es: "Una sesión de cada clave, en el nivel más alto que aguantes.", fr: "Une session de chaque clé, au niveau le plus haut que tu tiennes." },
            { es: ["Compara con los tiempos del curso 1: ahí se ve el camino hecho."], fr: ["Compare avec les temps du cours 1 : c'est là qu'on voit le chemin parcouru."] }),
        ],
      },
    ],
  },
  {
    id: "principiante2",
    nombre: { es: "Principiante 2", fr: "Débutant 2" },
    objetivo: {
      es: "Escalas de sol, re y fa mayor, el cromatismo, los arpegios y las inversiones del acorde perfecto.",
      fr: "Gammes de sol, ré et fa majeur, le chromatisme, les arpèges et les renversements de l'accord parfait.",
    },
    cursos: [CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE,
             CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE],
  },
  {
    id: "intermedio1",
    nombre: { es: "Intermedio 1", fr: "Intermédiaire 1" },
    objetivo: {
      es: "Escalas y arpegios hasta tres alteraciones, estudios de agilidad.",
      fr: "Gammes et arpèges jusqu'à trois altérations, études d'agilité.",
    },
    cursos: [CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE,
             CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE],
  },
  {
    id: "intermedio2",
    nombre: { es: "Intermedio 2", fr: "Intermédiaire 2" },
    objetivo: {
      es: "Velocidad, terceras y todas las tonalidades.",
      fr: "Vitesse, tierces et toutes les tonalités.",
    },
    cursos: [CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE,
             CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE],
  },
];

export const NIVELES_PRACTICA = ordenarClase(NIVELES);
