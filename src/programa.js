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

// Referencia a un metodo de la profesora. La pagina es la impresa en el papel.
function pouillard(id, titulo, donde, detalle, indicaciones) {
  return {
    id,
    titulo,
    objetivo: detalle,
    indicaciones,
    partitura: {
      tipo: "referencia",
      metodo: "Hervé y Pouillard, Méthode de piano débutants",
      donde,
      detalle,
    },
  };
}

const CURSO_PENDIENTE = { ejercicios: [] };

export const NIVELES_PRACTICA = [
  {
    id: "principiante1",
    nombre: { es: "Principiante 1", fr: "Débutant 1" },
    objetivo: {
      es: "Colocar la mano y tocar con seguridad en posición de cinco dedos, con pulso estable. Manos por separado y primeras manos juntas.",
      fr: "Placer la main et jouer avec assurance en position de cinq doigts, avec une pulsation stable. Mains séparées, puis premières mains ensemble.",
    },
    cursos: [
      {
        titulo: { es: "La posición de cinco dedos", fr: "La position de cinq doigts" },
        objetivo: {
          es: "Que la mano encuentre sus cinco notas sin mirar el teclado.",
          fr: "Que la main trouve ses cinq notes sans regarder le clavier.",
        },
        ejercicios: [
          {
            id: "p1c1-md",
            titulo: { es: "Cinco dedos en redondas, mano derecha", fr: "Cinq doigts en rondes, main droite" },
            objetivo: {
              es: "Una nota por compás: tiempo de sobra para colocar el dedo y escuchar.",
              fr: "Une note par mesure : tout le temps de placer le doigt et d'écouter.",
            },
            indicaciones: {
              es: ["Cuenta cuatro en cada nota, en voz alta.", "Dedos curvos y muñeca a la altura de los nudillos."],
              fr: ["Compte quatre sur chaque note, à voix haute.", "Doigts arrondis et poignet à hauteur des articulations."],
            },
            partitura: CINCO_DEDOS_REDONDAS_MD,
          },
          {
            id: "p1c1-mi",
            titulo: { es: "Cinco dedos en redondas, mano izquierda", fr: "Cinq doigts en rondes, main gauche" },
            objetivo: {
              es: "Lo mismo con la izquierda, que empieza por el meñique.",
              fr: "La même chose à gauche, qui commence par l'auriculaire.",
            },
            indicaciones: {
              es: ["El 5 tiende a hundirse: mantenlo curvo.", "Mismo sonido que la derecha, ni más flojo ni más fuerte."],
              fr: ["Le 5 a tendance à s'affaisser : garde-le arrondi.", "Même son que la droite, ni plus faible ni plus fort."],
            },
            partitura: CINCO_DEDOS_REDONDAS_MI,
          },
          pouillard(
            "p1c1-ref1",
            { es: "Cómo sentarse y colocar la mano", fr: "S'asseoir et placer la main" },
            { es: "Presentación, págs. 4-6", fr: "Présentation, p. 4-6" },
            { es: "Sentarse al piano, posición del cuerpo y de la mano, y conocer el teclado.", fr: "S'asseoir au piano, position du corps et de la main, et connaître le clavier." },
            { es: ["Antes de tocar nada, revisa altura del taburete y distancia."], fr: ["Avant de jouer, vérifie la hauteur du tabouret et la distance."] }
          ),
          pouillard(
            "p1c1-ref2",
            { es: "La digitación", fr: "Le doigté" },
            { es: "Capítulo I, pág. 8", fr: "Chapitre I, p. 8" },
            { es: "Los números de los dedos y para qué sirven en la partitura.", fr: "Les numéros des doigts et à quoi ils servent sur la partition." },
            { es: ["Que sepa decir el número de cada dedo sin dudar."], fr: ["Qu'il sache dire le numéro de chaque doigt sans hésiter."] }
          ),
        ],
      },
      {
        titulo: { es: "El pulso", fr: "La pulsation" },
        objetivo: {
          es: "La misma posición, ahora contando: negras, blancas y redondas.",
          fr: "La même position, maintenant en comptant : noires, blanches et rondes.",
        },
        ejercicios: [
          {
            id: "p1c2-md",
            titulo: { es: "Cinco dedos en negras, mano derecha", fr: "Cinq doigts en noires, main droite" },
            objetivo: { es: "Subir y bajar sin parar entre nota y nota.", fr: "Monter et descendre sans s'arrêter entre les notes." },
            indicaciones: {
              es: ["Con metrónomo a 60, una negra por clic.", "Si tropiezas, baja a 50 antes que fallar."],
              fr: ["Au métronome à 60, une noire par clic.", "Si tu trébuches, descends à 50 plutôt que de te tromper."],
            },
            partitura: CINCO_DEDOS_DERECHA,
          },
          {
            id: "p1c2-mi",
            titulo: { es: "Cinco dedos en negras, mano izquierda", fr: "Cinq doigts en noires, main gauche" },
            objetivo: { es: "Lo mismo con la izquierda, a la misma velocidad.", fr: "La même chose à gauche, à la même vitesse." },
            indicaciones: {
              es: ["No la dejes ir más lenta que la derecha.", "Mira que el pulgar no se despegue del teclado."],
              fr: ["Ne la laisse pas aller plus lentement que la droite.", "Veille à ce que le pouce ne quitte pas le clavier."],
            },
            partitura: CINCO_DEDOS_IZQUIERDA,
          },
          {
            id: "p1c2-ritmo",
            titulo: { es: "Blancas y negras", fr: "Blanches et noires" },
            objetivo: { es: "Mezclar figuras de distinta duración sin perder el pulso.", fr: "Mélanger des figures de durées différentes sans perdre la pulsation." },
            indicaciones: {
              es: ["Cuenta en voz alta: la blanca dura dos.", "La redonda del final se sostiene, no se suelta antes."],
              fr: ["Compte à voix haute : la blanche dure deux.", "La ronde de la fin se tient, on ne la lâche pas avant."],
            },
            partitura: BLANCAS_Y_NEGRAS_MD,
          },
          pouillard(
            "p1c2-ref",
            { es: "Juego non legato", fr: "Jeu non legato" },
            { es: "Capítulo I, pág. 10", fr: "Chapitre I, p. 10" },
            { es: "El ataque separado, cada nota con su propio impulso.", fr: "L'attaque détachée, chaque note avec son propre élan." },
            { es: ["Es el ataque con el que se empieza, antes del legato."], fr: ["C'est l'attaque par laquelle on commence, avant le legato."] }
          ),
        ],
      },
      {
        titulo: { es: "Cada dedo suena igual", fr: "Chaque doigt sonne pareil" },
        objetivo: {
          es: "Igualar el sonido de los cinco dedos con notas repetidas.",
          fr: "Égaliser le son des cinq doigts avec des notes répétées.",
        },
        ejercicios: [
          {
            id: "p1c3-md",
            titulo: { es: "Notas repetidas, mano derecha", fr: "Notes répétées, main droite" },
            objetivo: { es: "Que el sonido salga del dedo y no del brazo.", fr: "Que le son vienne du doigt et non du bras." },
            indicaciones: {
              es: ["El brazo se queda quieto; sólo se mueve el dedo.", "Las dos notas iguales tienen que sonar iguales."],
              fr: ["Le bras reste immobile ; seul le doigt bouge.", "Les deux notes identiques doivent sonner pareil."],
            },
            partitura: NOTAS_REPETIDAS,
          },
          {
            id: "p1c3-mi",
            titulo: { es: "Notas repetidas, mano izquierda", fr: "Notes répétées, main gauche" },
            objetivo: { es: "Lo mismo en la izquierda, donde cuesta más igualar.", fr: "La même chose à gauche, où il est plus difficile d'égaliser." },
            indicaciones: {
              es: ["Escucha si la segunda nota sale más floja.", "El 5 y el 4 son los que se quedan atrás."],
              fr: ["Écoute si la deuxième note sort plus faible.", "Le 5 et le 4 sont ceux qui restent en arrière."],
            },
            partitura: NOTAS_REPETIDAS_MI,
          },
          pouillard(
            "p1c3-ref1",
            { es: "Preparación al legato", fr: "Préparation au jeu legato" },
            { es: "Capítulo I, pág. 9", fr: "Chapitre I, p. 9" },
            { es: "Fórmulas de dos notas seguidas para empezar a ligar.", fr: "Formules de deux notes conjointes pour commencer à lier." },
            { es: ["Un dedo se levanta cuando el otro ya ha bajado."], fr: ["Un doigt se lève quand l'autre est déjà descendu."] }
          ),
          pouillard(
            "p1c3-ref2",
            { es: "Melodías a 2, 3 y 4 dedos", fr: "Mélodies à 2, 3 et 4 doigts" },
            { es: "Capítulo I, págs. 11-13", fr: "Chapitre I, p. 11-13" },
            { es: "Las primeras piezas, con cada vez más dedos en juego.", fr: "Les premières pièces, avec de plus en plus de doigts en jeu." },
            { es: ["Una por semana; empieza por las de 2 dedos."], fr: ["Une par semaine ; commence par celles à 2 doigts."] }
          ),
        ],
      },
      {
        titulo: { es: "Saltos de tercera", fr: "Sauts de tierce" },
        objetivo: {
          es: "Dedos alternos: la mano deja de ir nota a nota.",
          fr: "Doigts alternés : la main cesse d'aller note à note.",
        },
        ejercicios: [
          {
            id: "p1c4-md",
            titulo: { es: "Terceras, mano derecha", fr: "Tierces, main droite" },
            objetivo: { es: "Saltar un dedo sin que la mano se mueva de sitio.", fr: "Sauter un doigt sans que la main bouge de place." },
            indicaciones: {
              es: ["Los dedos que no tocan se quedan sobre sus teclas.", "Muy lento al principio: el salto se prepara antes."],
              fr: ["Les doigts qui ne jouent pas restent sur leurs touches.", "Très lentement au début : le saut se prépare à l'avance."],
            },
            partitura: TERCERAS_MD,
          },
          {
            id: "p1c4-mi",
            titulo: { es: "Terceras, mano izquierda", fr: "Tierces, main gauche" },
            objetivo: { es: "Lo mismo en la izquierda.", fr: "La même chose à gauche." },
            indicaciones: {
              es: ["Vigila que la muñeca no gire en cada salto."],
              fr: ["Veille à ce que le poignet ne tourne pas à chaque saut."],
            },
            partitura: TERCERAS_MI,
          },
          pouillard(
            "p1c4-ref2",
            { es: "Matices, fraseo y registros", fr: "Nuances, phrasé et registres" },
            { es: "Capítulo II, pág. 22", fr: "Chapitre II, p. 22" },
            { es: "Tocar más fuerte o más flojo, y entender las frases.", fr: "Jouer plus fort ou plus doux, et comprendre les phrases." },
            { es: ["Con la mano ya suelta, es el momento de pedir matiz."], fr: ["La main étant déjà souple, c'est le moment de demander de la nuance."] }
          ),
          pouillard(
            "p1c4-ref",
            { es: "Juego legato", fr: "Jeu legato" },
            { es: "Capítulo II, pág. 16", fr: "Chapitre II, p. 16" },
            { es: "Ligar las notas de verdad, sin corte de sonido entre ellas.", fr: "Lier les notes pour de bon, sans coupure de son entre elles." },
            { es: ["Ya con la posición segura, es el momento del legato."], fr: ["La position étant sûre, c'est le moment du legato."] }
          ),
        ],
      },
      CURSO_PENDIENTE,
      {
        titulo: { es: "Manos juntas en paralelo", fr: "Mains ensemble en parallèle" },
        objetivo: {
          es: "Las dos manos tocando lo mismo a la vez, cada una en su octava.",
          fr: "Les deux mains jouant la même chose en même temps, chacune dans son octave.",
        },
        ejercicios: [
          {
            id: "p1c6-paralelo",
            titulo: { es: "Manos juntas en paralelo", fr: "Mains ensemble en parallèle" },
            objetivo: { es: "Coordinar las dos manos tocando lo mismo a la vez.", fr: "Coordonner les deux mains en jouant la même chose en même temps." },
            indicaciones: {
              es: ["Los dedos van cruzados: el 1 con el 5, el 2 con el 4.", "Si una mano se adelanta, vuelve a manos separadas."],
              fr: ["Les doigts vont croisés : le 1 avec le 5, le 2 avec le 4.", "Si une main prend de l'avance, reviens aux mains séparées."],
            },
            partitura: MANOS_JUNTAS,
          },
          pouillard(
            "p1c6-ref",
            { es: "Manos juntas, polifonía en do", fr: "Mains ensemble, polyphonie en do" },
            { es: "Capítulo II, pág. 18", fr: "Chapitre II, p. 18" },
            { es: "Primeras piezas a dos manos con las dos voces sonando.", fr: "Premières pièces à deux mains avec les deux voix qui sonnent." },
            { es: ["Monta cada mano por separado antes de juntarlas."], fr: ["Monte chaque main séparément avant de les réunir."] }
          ),
          pouillard(
            "p1c6-ref2",
            { es: "Independencia de manos", fr: "Indépendance des mains" },
            { es: "Capítulo III, pág. 26", fr: "Chapitre III, p. 26" },
            { es: "Que cada mano haga algo distinto sin arrastrar a la otra.", fr: "Que chaque main fasse quelque chose de différent sans entraîner l'autre." },
            { es: ["Empieza por una mano larga y la otra en notas sueltas."], fr: ["Commence par une main tenue et l'autre en notes détachées."] }
          ),
          pouillard(
            "p1c6-ref3",
            { es: "Los acordes", fr: "Les accords" },
            { es: "Capítulo III, pág. 28", fr: "Chapitre III, p. 28" },
            { es: "Primer contacto con dos y tres notas a la vez.", fr: "Premier contact avec deux et trois notes à la fois." },
            { es: ["Sólo el primer contacto; los acordes llegan en Principiante 2."], fr: ["Seulement le premier contact ; les accords arrivent en Débutant 2."] }
          ),
        ],
      },
      {
        titulo: { es: "Movimiento contrario", fr: "Mouvement contraire" },
        objetivo: {
          es: "Los dos pulgares en el do central y las manos hacia lados opuestos.",
          fr: "Les deux pouces sur le do central et les mains en sens opposé.",
        },
        ejercicios: [
          {
            id: "p1c7-contrario",
            titulo: { es: "Movimiento contrario", fr: "Mouvement contraire" },
            objetivo: { es: "Las manos hacen lo mismo pero hacia lados opuestos.", fr: "Les mains font la même chose mais en sens opposé." },
            indicaciones: {
              es: ["Los dos pulgares comparten el do central: cada uno toca el suyo.", "Es más fácil que el paralelo: los dedos van emparejados, 1 con 1."],
              fr: ["Les deux pouces partagent le do central : chacun joue le sien.", "C'est plus facile que le parallèle : les doigts vont par paires, 1 avec 1."],
            },
            partitura: MOVIMIENTO_CONTRARIO,
          },
          pouillard(
            "p1c7-ref",
            { es: "Manos juntas, polifonía en sol", fr: "Mains ensemble, polyphonie en sol" },
            { es: "Capítulo II, pág. 20", fr: "Chapitre II, p. 20" },
            { es: "Lo mismo trasladado a la posición de sol.", fr: "La même chose transposée à la position de sol." },
            { es: ["Buen momento para mover la mano fuera del do."], fr: ["Bon moment pour déplacer la main hors du do."] }
          ),
          pouillard(
            "p1c7-ref2",
            { es: "Cruce de manos", fr: "Croisement de mains" },
            { es: "Capítulo III, pág. 32", fr: "Chapitre III, p. 32" },
            { es: "Una mano pasa por encima de la otra: suele gustarles.", fr: "Une main passe par-dessus l'autre : en général ça leur plaît." },
            { es: ["Buen ejercicio para acabar el nivel con algo vistoso."], fr: ["Bon exercice pour finir le niveau avec quelque chose de spectaculaire."] }
          ),
          pouillard(
            "p1c7-ref3",
            { es: "Las alteraciones", fr: "Les altérations" },
            { es: "Capítulo III, pág. 30", fr: "Chapitre III, p. 30" },
            { es: "Sostenidos y bemoles: qué son y dónde están en el teclado.", fr: "Dièses et bémols : ce que c'est et où ils sont sur le clavier." },
            { es: ["Teoría, sin tocarlos todavía: preparan Principiante 2."], fr: ["Théorie, sans les jouer encore : ils préparent le Débutant 2."] }
          ),
        ],
      },
      CURSO_PENDIENTE,
    ],
  },
  {
    id: "principiante2",
    nombre: { es: "Principiante 2", fr: "Débutant 2" },
    objetivo: {
      es: "Salir de la posición fija: paso del pulgar, escala y arpegio de do mayor, y primeros acordes.",
      fr: "Sortir de la position fixe : passage du pouce, gamme et arpège de do majeur, et premiers accords.",
    },
    cursos: [
      {
        titulo: { es: "El paso del pulgar", fr: "Le passage du pouce" },
        objetivo: {
          es: "Lo que permite pasar de cinco notas a una octava entera.",
          fr: "Ce qui permet de passer de cinq notes à une octave entière.",
        },
        ejercicios: [
          {
            id: "p2c1-md",
            titulo: { es: "Escala de do mayor, mano derecha", fr: "Gamme de do majeur, main droite" },
            objetivo: { es: "El pulgar pasa por debajo del 3 para tocar el fa.", fr: "Le pouce passe sous le 3 pour jouer le fa." },
            indicaciones: {
              es: ["Prepara el pulgar mientras suenan el 2 y el 3.", "La mano no da tirones: el codo acompaña."],
              fr: ["Prépare le pouce pendant que sonnent le 2 et le 3.", "La main ne sursaute pas : le coude accompagne."],
            },
            partitura: ESCALA_DO_DERECHA,
          },
          {
            id: "p2c1-mi",
            titulo: { es: "Escala de do mayor, mano izquierda", fr: "Gamme de do majeur, main gauche" },
            objetivo: { es: "Aquí es el 3 el que cruza por encima del pulgar.", fr: "Ici c'est le 3 qui croise par-dessus le pouce." },
            indicaciones: {
              es: ["Después del pulgar en el sol, el 3 cruza para tocar el la.", "Muy lento hasta que el cruce no se oiga."],
              fr: ["Après le pouce sur le sol, le 3 croise pour jouer le la.", "Très lentement jusqu'à ce que le croisement ne s'entende plus."],
            },
            partitura: ESCALA_DO_IZQUIERDA,
          },
          pouillard(
            "p2c1-ref1",
            { es: "Paso del pulgar", fr: "Passage du pouce" },
            { es: "Capítulo IV, pág. 34", fr: "Chapitre IV, p. 34" },
            { es: "El mecanismo explicado y sus ejercicios preparatorios.", fr: "Le mécanisme expliqué et ses exercices préparatoires." },
            { es: ["Hazlo antes que la escala completa."], fr: ["À faire avant la gamme complète."] }
          ),
          pouillard(
            "p2c1-ref2",
            { es: "Escala de do mayor", fr: "Gamme de do majeur" },
            { es: "Capítulo IV, pág. 35", fr: "Chapitre IV, p. 35" },
            { es: "La escala con su digitación y sus aplicaciones.", fr: "La gamme avec son doigté et ses applications." },
            { es: ["Compara la digitación con la de la app: es la misma."], fr: ["Compare le doigté avec celui de l'app : c'est le même."] }
          ),
        ],
      },
      {
        titulo: { es: "Arpegios y acordes", fr: "Arpèges et accords" },
        objetivo: {
          es: "Abrir la mano más allá de los cinco dedos seguidos.",
          fr: "Ouvrir la main au-delà des cinq doigts consécutifs.",
        },
        ejercicios: [
          {
            id: "p2c2-arpegio",
            titulo: { es: "Arpegio de do mayor, mano derecha", fr: "Arpège de do majeur, main droite" },
            objetivo: { es: "El salto de sol a do lo hace el 5, no la muñeca.", fr: "Le saut de sol à do se fait avec le 5, pas avec le poignet." },
            indicaciones: {
              es: ["Las cuatro notas suenan igual de fuertes.", "Sin acelerar en la bajada."],
              fr: ["Les quatre notes sonnent aussi fort les unes que les autres.", "Sans accélérer à la descente."],
            },
            partitura: ARPEGIO_DO,
          },
          {
            id: "p2c2-acordes",
            titulo: { es: "Acordes de tres sonidos", fr: "Accords de trois sons" },
            objetivo: { es: "Tres notas a la vez, juntas y con el mismo peso.", fr: "Trois notes à la fois, ensemble et avec le même poids." },
            indicaciones: {
              es: ["Deja caer el brazo: el acorde no se aprieta con los dedos.", "Do, fa, sol y otra vez do: sostienen casi todo."],
              fr: ["Laisse tomber le bras : l'accord ne se serre pas avec les doigts.", "Do, fa, sol et de nouveau do : ils soutiennent presque tout."],
            },
            partitura: ACORDES_TRES_SONIDOS,
          },
          pouillard(
            "p2c2-ref",
            { es: "Acordes de tres sonidos", fr: "Accords de trois sons" },
            { es: "Capítulo IV, pág. 38", fr: "Chapitre IV, p. 38" },
            { es: "Los acordes en la partitura y cómo se enlazan.", fr: "Les accords sur la partition et comment ils s'enchaînent." },
            { es: ["Ver también Capítulo III, pág. 28, para el primer contacto."], fr: ["Voir aussi Chapitre III, p. 28, pour le premier contact."] }
          ),
        ],
      },
      CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE,
      CURSO_PENDIENTE, CURSO_PENDIENTE, CURSO_PENDIENTE,
    ],
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
