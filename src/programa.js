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
        donde: { es: "pág. 5, «Mélodies à 2, 3 et 4 doigts»", fr: "p. 5, « Mélodies à 2, 3 et 4 doigts »" },
        detalle: { es: "nº 1 Promenade y nº 2 Petite Danse", fr: "nº 1 Promenade et nº 2 Petite Danse" },
      },
    ],
  },
  {
    id: "principiante2",
    nombre: { es: "Principiante 2", fr: "Débutant 2" },
    objetivo: {
      es: "Manos juntas con independencia, paso del pulgar y primeras escalas.",
      fr: "Mains ensemble avec indépendance, passage du pouce et premières gammes.",
    },
    ejercicios: [],
    referencias: [],
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
