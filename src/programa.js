// Catalogo del programa de practica. Pensado para editarse a mano: cada
// ejercicio es una ficha independiente y el orden de la lista es el orden en
// que aparecen.
//
// Cada ejercicio lleva su partitura en una de estas tres formas:
//   dibujada   -> se dibuja dentro de la app (formulas tecnicas)
//   enlace     -> obra en dominio publico, enlazada a IMSLP
//   referencia -> metodo con derechos: se indica donde mirarlo, no se copia

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

export const NIVELES_PRACTICA = [
  {
    id: "principiante1",
    nombre: { es: "Principiante 1", fr: "Débutant 1" },
    objetivo: {
      es: "Colocar la mano y tocar con seguridad en posición de cinco dedos, con pulso estable. Manos por separado y primeras manos juntas.",
      fr: "Placer la main et jouer avec assurance en position de cinq doigts, avec une pulsation stable. Mains séparées, puis premières mains ensemble.",
    },
    ejercicios: [
      {
        id: "cinco-dedos-md",
        titulo: { es: "Cinco dedos, mano derecha", fr: "Cinq doigts, main droite" },
        objetivo: {
          es: "Que cada dedo suene con la misma fuerza, sin mover la mano de sitio.",
          fr: "Que chaque doigt sonne avec la même force, sans déplacer la main.",
        },
        indicaciones: {
          es: [
            "Muñeca suelta y dedos curvos, como sujetando una pelota.",
            "Primero muy lento, nombrando la nota antes de tocarla.",
            "Cuando salga seguro, con metrónomo a 60.",
          ],
          fr: [
            "Poignet souple et doigts arrondis, comme s'ils tenaient une balle.",
            "D'abord très lentement, en nommant la note avant de la jouer.",
            "Quand c'est sûr, au métronome à 60.",
          ],
        },
        partitura: CINCO_DEDOS_DERECHA,
      },
      {
        id: "cinco-dedos-mi",
        titulo: { es: "Cinco dedos, mano izquierda", fr: "Cinq doigts, main gauche" },
        objetivo: {
          es: "Lo mismo con la izquierda, que suele ir por detrás. Ojo al meñique.",
          fr: "La même chose à gauche, qui est souvent en retard. Attention à l'auriculaire.",
        },
        indicaciones: {
          es: [
            "El 5 tiende a hundirse: mantenlo curvo.",
            "Misma velocidad que la derecha, no más lento.",
          ],
          fr: [
            "Le 5 a tendance à s'affaisser : garde-le arrondi.",
            "Même vitesse que la droite, pas plus lent.",
          ],
        },
        partitura: CINCO_DEDOS_IZQUIERDA,
      },
      {
        id: "notas-repetidas",
        titulo: { es: "Notas repetidas", fr: "Notes répétées" },
        objetivo: {
          es: "Que el sonido salga del dedo y no del brazo.",
          fr: "Que le son vienne du doigt et non du bras.",
        },
        indicaciones: {
          es: [
            "El brazo se queda quieto; sólo se mueve el dedo.",
            "Las dos notas iguales tienen que sonar iguales.",
          ],
          fr: [
            "Le bras reste immobile ; seul le doigt bouge.",
            "Les deux notes identiques doivent sonner pareil.",
          ],
        },
        partitura: NOTAS_REPETIDAS,
      },
      {
        id: "manos-juntas",
        titulo: { es: "Manos juntas en paralelo", fr: "Mains ensemble en parallèle" },
        objetivo: {
          es: "Coordinar las dos manos tocando lo mismo a la vez.",
          fr: "Coordonner les deux mains en jouant la même chose en même temps.",
        },
        indicaciones: {
          es: [
            "Antes de tocar, mira las dos manos: los dedos que se mueven a la vez son el 1 con el 5, el 2 con el 4...",
            "Si una mano se adelanta, vuelve a manos separadas.",
          ],
          fr: [
            "Avant de jouer, regarde les deux mains : les doigts qui bougent ensemble sont le 1 avec le 5, le 2 avec le 4...",
            "Si une main prend de l'avance, reviens aux mains séparées.",
          ],
        },
        partitura: MANOS_JUNTAS,
      },
      {
        id: "movimiento-contrario",
        titulo: { es: "Movimiento contrario", fr: "Mouvement contraire" },
        objetivo: {
          es: "Los dos pulgares en el do central. Las manos hacen lo mismo pero hacia lados opuestos.",
          fr: "Les deux pouces sur le do central. Les mains font la même chose mais en sens opposé.",
        },
        indicaciones: {
          es: [
            "Los dos pulgares comparten el do central: cada uno toca el suyo.",
            "Es más fácil que el paralelo porque los dedos van emparejados: 1 con 1, 2 con 2.",
          ],
          fr: [
            "Les deux pouces partagent le do central : chacun joue le sien.",
            "C'est plus facile que le parallèle car les doigts vont par paires : 1 avec 1, 2 avec 2.",
          ],
        },
        partitura: MOVIMIENTO_CONTRARIO,
      },
      {
        id: "le-couppey-17",
        titulo: { es: "Le Couppey, «L'Alphabet» op. 17, nº 1-3", fr: "Le Couppey, « L'Alphabet » op. 17, nº 1-3" },
        objetivo: {
          es: "Primeros estudios de verdad, todavía en posición fija.",
          fr: "Premières vraies études, encore en position fixe.",
        },
        indicaciones: {
          es: ["Uno por semana, sin correr.", "Cuenta en voz alta mientras tocas."],
          fr: ["Une par semaine, sans se presser.", "Compte à voix haute en jouant."],
        },
        partitura: {
          tipo: "enlace",
          fuente: "IMSLP",
          url: "https://imslp.org/wiki/L'Alphabet,_Op.17_(Le_Couppey,_Félix)",
        },
      },
      {
        id: "beyer-101",
        titulo: { es: "Beyer op. 101, nº 1-8", fr: "Beyer op. 101, nº 1-8" },
        objetivo: {
          es: "Método clásico de iniciación. Los primeros números son de mano sola con acompañamiento del profesor.",
          fr: "Méthode classique d'initiation. Les premiers numéros sont à une main avec accompagnement du professeur.",
        },
        indicaciones: {
          es: ["Toca tú el acompañamiento en clase; en casa, la parte del alumno sola."],
          fr: ["Joue l'accompagnement en cours ; à la maison, la partie de l'élève seule."],
        },
        partitura: {
          tipo: "enlace",
          fuente: "IMSLP",
          url: "https://imslp.org/wiki/Vorschule_im_Klavierspiel,_Op.101_(Beyer,_Ferdinand)",
        },
      },
      {
        id: "czerny-599",
        titulo: { es: "Czerny op. 599, nº 1-5", fr: "Czerny op. 599, nº 1-5" },
        objetivo: {
          es: "Manos juntas en posición de cinco dedos, ya con forma de estudio.",
          fr: "Mains ensemble en position de cinq doigts, déjà sous forme d'étude.",
        },
        indicaciones: {
          es: ["Cuando los cuatro primeros ejercicios de esta lista salgan solos."],
          fr: ["Quand les quatre premiers exercices de cette liste sortent tout seuls."],
        },
        partitura: {
          tipo: "enlace",
          fuente: "IMSLP",
          url: "https://imslp.org/wiki/Practical_Method_for_Beginners,_Op.599_(Czerny,_Carl)",
        },
      },
    ],
    referencias: [
      {
        metodo: "Hervé y Pouillard, Méthode de piano débutants",
        donde: { es: "Presentación, págs. 4-6", fr: "Présentation, p. 4-6" },
        detalle: { es: "sentarse al piano, posición de la mano y el teclado", fr: "s'asseoir au piano, position de la main et le clavier" },
      },
      {
        metodo: "Hervé y Pouillard, Méthode de piano débutants",
        donde: { es: "Capítulo I, págs. 8-13", fr: "Chapitre I, p. 8-13" },
        detalle: { es: "digitación, preparación al legato, juego non legato y melodías a 2, 3 y 4 dedos", fr: "doigté, préparation au legato, jeu non legato et mélodies à 2, 3 et 4 doigts" },
      },
    ],
  },
  {
    id: "principiante2",
    nombre: { es: "Principiante 2", fr: "Débutant 2" },
    objetivo: {
      es: "Salir de la posición fija: paso del pulgar, escala y arpegio de do mayor, y primeros acordes de tres sonidos.",
      fr: "Sortir de la position fixe : passage du pouce, gamme et arpège de do majeur, et premiers accords de trois sons.",
    },
    ejercicios: [
      {
        id: "escala-do-md",
        titulo: { es: "Escala de do mayor, mano derecha", fr: "Gamme de do majeur, main droite" },
        objetivo: {
          es: "El paso del pulgar por debajo, que es lo que permite pasar de cinco notas a una octava.",
          fr: "Le passage du pouce en dessous, qui permet de passer de cinq notes à une octave.",
        },
        indicaciones: {
          es: [
            "Subiendo, el pulgar pasa por debajo del 3 para tocar el fa.",
            "Prepara el pulgar mientras suenan el 2 y el 3, no en el último momento.",
            "La mano no da tirones: el codo acompaña.",
          ],
          fr: [
            "En montant, le pouce passe sous le 3 pour jouer le fa.",
            "Prépare le pouce pendant que sonnent le 2 et le 3, pas au dernier moment.",
            "La main ne doit pas sursauter : le coude accompagne.",
          ],
        },
        partitura: ESCALA_DO_DERECHA,
      },
      {
        id: "escala-do-mi",
        titulo: { es: "Escala de do mayor, mano izquierda", fr: "Gamme de do majeur, main gauche" },
        objetivo: {
          es: "Lo mismo al revés: aquí es el 3 el que cruza por encima del pulgar.",
          fr: "La même chose à l'envers : ici c'est le 3 qui croise par-dessus le pouce.",
        },
        indicaciones: {
          es: [
            "Subiendo, después del pulgar en el sol, el 3 cruza por encima para tocar el la.",
            "Empieza muy lento y sin metrónomo hasta que el cruce no se oiga.",
          ],
          fr: [
            "En montant, après le pouce sur le sol, le 3 croise par-dessus pour jouer le la.",
            "Commence très lentement et sans métronome jusqu'à ce que le croisement ne s'entende plus.",
          ],
        },
        partitura: ESCALA_DO_IZQUIERDA,
      },
      {
        id: "arpegio-do",
        titulo: { es: "Arpegio de do mayor, mano derecha", fr: "Arpège de do majeur, main droite" },
        objetivo: {
          es: "Abrir la mano más allá de los cinco dedos seguidos.",
          fr: "Ouvrir la main au-delà des cinq doigts consécutifs.",
        },
        indicaciones: {
          es: [
            "El salto de sol a do lo hace el 5, no la muñeca.",
            "Las cuatro notas tienen que sonar igual de fuertes.",
          ],
          fr: [
            "Le saut de sol à do se fait avec le 5, pas avec le poignet.",
            "Les quatre notes doivent sonner aussi fort les unes que les autres.",
          ],
        },
        partitura: ARPEGIO_DO,
      },
      {
        id: "acordes-tres-sonidos",
        titulo: { es: "Acordes de tres sonidos", fr: "Accords de trois sons" },
        objetivo: {
          es: "Tocar tres notas a la vez y que suenen juntas y con el mismo peso.",
          fr: "Jouer trois notes à la fois et qu'elles sonnent ensemble et avec le même poids.",
        },
        indicaciones: {
          es: [
            "Deja caer el brazo: el acorde no se aprieta con los dedos.",
            "Escucha si alguna de las tres notas se adelanta o suena más floja.",
            "Do, fa, sol y otra vez do: son los tres acordes que sostienen casi todo.",
          ],
          fr: [
            "Laisse tomber le bras : l'accord ne se serre pas avec les doigts.",
            "Écoute si l'une des trois notes est en avance ou sonne plus faible.",
            "Do, fa, sol et de nouveau do : ce sont les trois accords qui soutiennent presque tout.",
          ],
        },
        partitura: ACORDES_TRES_SONIDOS,
      },
      {
        id: "beyer-101-b",
        titulo: { es: "Beyer op. 101, nº 9-30", fr: "Beyer op. 101, nº 9-30" },
        objetivo: {
          es: "Manos juntas de verdad, ya fuera de la posición fija.",
          fr: "Mains ensemble pour de bon, déjà hors de la position fixe.",
        },
        indicaciones: {
          es: ["Van subiendo de dificultad muy poco a poco: haz uno por semana."],
          fr: ["Ils montent en difficulté très progressivement : un par semaine."],
        },
        partitura: {
          tipo: "enlace",
          fuente: "IMSLP",
          url: "https://imslp.org/wiki/Vorschule_im_Klavierspiel,_Op.101_(Beyer,_Ferdinand)",
        },
      },
      {
        id: "czerny-599-b",
        titulo: { es: "Czerny op. 599, nº 6-20", fr: "Czerny op. 599, nº 6-20" },
        objetivo: {
          es: "Estudios de agilidad con la escala ya aprendida.",
          fr: "Études d'agilité avec la gamme déjà apprise.",
        },
        indicaciones: {
          es: ["No pases al siguiente hasta que el anterior salga sin pensar en los dedos."],
          fr: ["Ne passe au suivant que lorsque le précédent sort sans penser aux doigts."],
        },
        partitura: {
          tipo: "enlace",
          fuente: "IMSLP",
          url: "https://imslp.org/wiki/Practical_Method_for_Beginners,_Op.599_(Czerny,_Carl)",
        },
      },
    ],
    referencias: [
      {
        metodo: "Hervé y Pouillard, Méthode de piano débutants",
        donde: { es: "Capítulo II, págs. 16-22", fr: "Chapitre II, p. 16-22" },
        detalle: { es: "juego legato y manos juntas, polifonía en do y en sol", fr: "jeu legato et mains ensemble, polyphonie en do et en sol" },
      },
      {
        metodo: "Hervé y Pouillard, Méthode de piano débutants",
        donde: { es: "Capítulo III, págs. 26-32", fr: "Chapitre III, p. 26-32" },
        detalle: { es: "independencia de manos, acordes, alteraciones y cruce de manos", fr: "indépendance des mains, accords, altérations et croisement de mains" },
      },
      {
        metodo: "Hervé y Pouillard, Méthode de piano débutants",
        donde: { es: "Capítulo IV, págs. 34-38", fr: "Chapitre IV, p. 34-38" },
        detalle: { es: "paso del pulgar, escala de do mayor y acordes de tres sonidos", fr: "passage du pouce, gamme de do majeur et accords de trois sons" },
      },
    ],
  },
  {
    id: "intermedio1",
    nombre: { es: "Intermedio 1", fr: "Intermédiaire 1" },
    objetivo: {
      es: "Escalas y arpegios hasta tres alteraciones, estudios de agilidad.",
      fr: "Gammes et arpèges jusqu'à trois altérations, études d'agilité.",
    },
    ejercicios: [],
    referencias: [],
  },
  {
    id: "intermedio2",
    nombre: { es: "Intermedio 2", fr: "Intermédiaire 2" },
    objetivo: {
      es: "Velocidad, terceras y todas las tonalidades.",
      fr: "Vitesse, tierces et toutes les tonalités.",
    },
    ejercicios: [],
    referencias: [],
  },
];
