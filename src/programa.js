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

function ejercicio(id, titulo, objetivo, indicaciones, partitura) {
  return { id, titulo, objetivo, indicaciones, partitura };
}

// En la lista de ejercicios solo cabe una linea, asi que de la explicacion de
// teoria se muestra la primera frase.
function primeraFrase(texto) {
  const cortar = (t) => `${t.split(". ")[0]}.`;
  return { es: cortar(texto.es), fr: cortar(texto.fr) };
}

function teoria(id, titulo, texto, indicaciones, ejemplo) {
  return {
    id,
    titulo,
    objetivo: primeraFrase(texto),
    indicaciones,
    partitura: {
      tipo: "teoria",
      texto,
      ...(ejemplo ? { compas: ejemplo.compas, sistemas: ejemplo.sistemas } : {}),
    },
  };
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
        titulo: { es: "La mano, el teclado y las primeras notas", fr: "La main, le clavier et les premières notes" },
        objetivo: {
          es: "Colocarse, encontrar el do, tocar los cinco dedos y leer sus primeras notas.",
          fr: "Se placer, trouver le do, jouer les cinq doigts et lire ses premières notes.",
        },
        ejercicios: [
          ejercicio("p1c1-md", { es: "Cinco dedos en redondas, mano derecha", fr: "Cinq doigts en rondes, main droite" },
            { es: "Una nota por compás: tiempo de sobra para colocar el dedo y escuchar.", fr: "Une note par mesure : tout le temps de placer le doigt et d'écouter." },
            { es: ["Cuenta cuatro en cada nota, en voz alta.", "Dedos curvos y muñeca a la altura de los nudillos."], fr: ["Compte quatre sur chaque note, à voix haute.", "Doigts arrondis et poignet à hauteur des articulations."] },
            CINCO_DEDOS_REDONDAS_MD),
          ejercicio("p1c1-mi", { es: "Cinco dedos en redondas, mano izquierda", fr: "Cinq doigts en rondes, main gauche" },
            { es: "Lo mismo con la izquierda, que empieza por el meñique.", fr: "La même chose à gauche, qui commence par l'auriculaire." },
            { es: ["El 5 tiende a hundirse: mantenlo curvo.", "Fíjate en que ya estás leyendo en clave de fa."], fr: ["Le 5 a tendance à s'affaisser : garde-le arrondi.", "Remarque que tu lis déjà en clé de fa."] },
            CINCO_DEDOS_REDONDAS_MI),
          teoria("p1c1-teclado", { es: "El teclado: encontrar el do", fr: "Le clavier : trouver le do" },
            { es: "Las teclas negras van en grupos de dos y de tres. El do está siempre a la izquierda del grupo de dos.", fr: "Les touches noires vont par groupes de deux et de trois. Le do est toujours à gauche du groupe de deux." },
            { es: ["Busca todos los do del piano sin contar.", "Después, todos los fa: a la izquierda del grupo de tres."], fr: ["Trouve tous les do du piano sans compter.", "Ensuite tous les fa : à gauche du groupe de trois."] }),
          teoria("p1c1-figuras", { es: "Redonda, blanca y negra", fr: "Ronde, blanche et noire" },
            { es: "La redonda dura cuatro tiempos, la blanca dos y la negra uno. Los tres compases del ejemplo duran lo mismo.", fr: "La ronde dure quatre temps, la blanche deux et la noire un. Les trois mesures de l'exemple durent la même chose." },
            { es: ["Dar palmas contando en voz alta antes de tocarlo.", "Hoy sólo redondas; las negras llegan en el curso 2."], fr: ["Frapper dans les mains en comptant à voix haute avant de jouer.", "Aujourd'hui seulement des rondes ; les noires arrivent au cours 2."] },
            FIGURAS),
          referencia("p1c1-ref", { es: "Sentarse, digitación y primeras melodías", fr: "S'asseoir, doigté et premières mélodies" },
            [alfred({ es: "págs. 4-12", fr: "p. 4-12" }), pouillard({ es: "Presentación págs. 4-6 y cap. I pág. 8", fr: "Présentation p. 4-6 et chap. I p. 8" }), chornet({ es: "págs. 7 y 11", fr: "p. 7 et 11" })],
            { es: "Ejercicios preliminares, cómo sentarse, los números de los dedos, el teclado y la posición de do de la derecha.", fr: "Position du corps et de la main, les numéros des doigts et les mélodies à 2, 3 et 4 doigts." },
            { es: ["Revisa altura del taburete antes de nada.", "Del Alfred, hasta la posición de do de la derecha en esta clase."], fr: ["Vérifie la hauteur du tabouret avant tout.", "De l'Alfred, jusqu'à la position de do de la main droite dans ce cours."] }),
          lectura("p1c1-lectura", "sol", "inicial1",
            { es: "Leer las notas de do a sol", fr: "Lire les notes de do à sol" },
            { es: "Las mismas cinco notas que acaba de tocar, ahora leyéndolas.", fr: "Les mêmes cinq notes qu'il vient de jouer, maintenant en les lisant." },
            { es: ["Una sesión completa al final de la clase.", "Apunta el tiempo: es tu punto de partida."], fr: ["Une session complète à la fin du cours.", "Note le temps : c'est ton point de départ."] }),
        ],
      },
      {
        titulo: { es: "El pulso, los dedos iguales y el legato", fr: "La pulsation, les doigts égaux et le legato" },
        objetivo: {
          es: "Tocar contando, igualar el sonido de los cinco dedos y empezar a ligar.",
          fr: "Jouer en comptant, égaliser le son des cinq doigts et commencer à lier.",
        },
        ejercicios: [
          ejercicio("p1c2-negras", { es: "Cinco dedos en negras, mano derecha", fr: "Cinq doigts en noires, main droite" },
            { es: "Subir y bajar sin parar entre nota y nota.", fr: "Monter et descendre sans s'arrêter entre les notes." },
            { es: ["Metrónomo a 60, una negra por clic.", "Después, lo mismo con la izquierda."], fr: ["Métronome à 60, une noire par clic.", "Ensuite, la même chose à gauche."] },
            CINCO_DEDOS_DERECHA),
          ejercicio("p1c2-repetidas", { es: "Notas repetidas", fr: "Notes répétées" },
            { es: "Que el sonido salga del dedo y no del brazo.", fr: "Que le son vienne du doigt et non du bras." },
            { es: ["El brazo se queda quieto; sólo se mueve el dedo.", "Las dos notas iguales tienen que sonar iguales."], fr: ["Le bras reste immobile ; seul le doigt bouge.", "Les deux notes identiques doivent sonner pareil."] },
            NOTAS_REPETIDAS),
          ejercicio("p1c2-terceras", { es: "Terceras", fr: "Tierces" },
            { es: "Saltar un dedo sin que la mano se mueva de sitio.", fr: "Sauter un doigt sans que la main bouge de place." },
            { es: ["Los dedos que no tocan se quedan sobre sus teclas.", "El salto se prepara antes, no en el último momento."], fr: ["Les doigts qui ne jouent pas restent sur leurs touches.", "Le saut se prépare à l'avance, pas au dernier moment."] },
            TERCERAS_MD),
          teoria("p1c2-compas", { es: "El compás y el pentagrama", fr: "La mesure et la portée" },
            { es: "La barra vertical corta la música en compases iguales y el 4/4 dice que caben cuatro negras. En el pentagrama, la clave de sol marca que la segunda línea es el sol.", fr: "La barre verticale coupe la musique en mesures égales et le 4/4 dit que quatre noires y tiennent. Sur la portée, la clé de sol indique que la deuxième ligne est le sol." },
            { es: ["Cuenta 1-2-3-4 en cada compás mientras tocas.", "Señala el sol en el papel antes de leer nada."], fr: ["Compte 1-2-3-4 dans chaque mesure en jouant.", "Montre le sol sur le papier avant de lire quoi que ce soit."] }),
          referencia("p1c2-ref", { es: "Legato, matices y fraseo", fr: "Legato, nuances et phrasé" },
            [alfred({ es: "págs. 13-17", fr: "p. 13-17" }), pouillard({ es: "cap. I págs. 9-13", fr: "chap. I p. 9-13" }), chornet({ es: "págs. 22 y 29", fr: "p. 22 et 29" })],
            { es: "Negras, blancas y redonda, el compás y la clave de sol, con Ode to Joy y Aura Lee.", fr: "La préparation au legato, lier pour de bon et les premières indications de nuance." },
            { es: ["Un dedo se levanta cuando el otro ya ha bajado.", "Toca el mismo ejercicio en f y en p."], fr: ["Un doigt se lève quand l'autre est déjà descendu.", "Joue le même exercice en f puis en p."] }),
          lectura("p1c2-lectura", "sol", "inicial2",
            { es: "Ampliar de sol a do agudo", fr: "Élargir du sol au do aigu" },
            { es: "Las notas que quedan por encima de la posición de cinco dedos.", fr: "Les notes au-dessus de la position de cinq doigts." },
            { es: ["Si fallas mucho, vuelve a Inicial 1 y sube la semana siguiente."], fr: ["Si tu te trompes beaucoup, reviens à Débutant 1 et monte la semaine suivante."] }),
        ],
      },
      {
        titulo: { es: "Manos juntas y la clave de fa", fr: "Mains ensemble et la clé de fa" },
        objetivo: {
          es: "Las dos manos a la vez, y leer la mano izquierda en su propia clave.",
          fr: "Les deux mains à la fois, et lire la main gauche dans sa propre clé.",
        },
        ejercicios: [
          ejercicio("p1c3-mi", { es: "Cinco dedos en negras, mano izquierda", fr: "Cinq doigts en noires, main gauche" },
            { es: "Poner la izquierda a la altura de la derecha antes de juntarlas.", fr: "Mettre la gauche au niveau de la droite avant de les réunir." },
            { es: ["No la dejes ir más lenta que la derecha.", "Mira que el pulgar no se despegue del teclado."], fr: ["Ne la laisse pas aller plus lentement que la droite.", "Veille à ce que le pouce ne quitte pas le clavier."] },
            CINCO_DEDOS_IZQUIERDA),
          ejercicio("p1c3-repetidas", { es: "Notas repetidas, mano izquierda", fr: "Notes répétées, main gauche" },
            { es: "Igualar los dedos de la izquierda, donde cuesta más.", fr: "Égaliser les doigts de la gauche, où c'est plus difficile." },
            { es: ["El 5 y el 4 son los que se quedan atrás."], fr: ["Le 5 et le 4 sont ceux qui restent en arrière."] },
            NOTAS_REPETIDAS_MI),
          ejercicio("p1c3-paralelo", { es: "Manos juntas en paralelo", fr: "Mains ensemble en parallèle" },
            { es: "Coordinar las dos manos tocando lo mismo a la vez.", fr: "Coordonner les deux mains en jouant la même chose en même temps." },
            { es: ["Los dedos van cruzados: el 1 con el 5, el 2 con el 4.", "Si una mano se adelanta, vuelve a manos separadas."], fr: ["Les doigts vont croisés : le 1 avec le 5, le 2 avec le 4.", "Si une main prend de l'avance, reviens aux mains séparées."] },
            MANOS_JUNTAS),
          teoria("p1c3-clavefa", { es: "La clave de fa y el do central", fr: "La clé de fa et le do central" },
            { es: "La mano izquierda se escribe en clave de fa, donde la cuarta línea es el fa. El do central queda justo encima del pentagrama, en su línea adicional.", fr: "La main gauche s'écrit en clé de fa, où la quatrième ligne est le fa. Le do central se place juste au-dessus de la portée, sur sa ligne supplémentaire." },
            { es: ["La llevas viendo desde el primer día en tus ejercicios.", "El do central es una sola tecla, escrita de dos maneras."], fr: ["Tu la vois depuis le premier jour dans tes exercices.", "Le do central est une seule touche, écrite de deux façons."] }),
          referencia("p1c3-ref", { es: "Manos juntas, polifonía en do y en sol", fr: "Mains ensemble, polyphonie en do et en sol" },
            [alfred({ es: "págs. 16-20", fr: "p. 16-20" }), pouillard({ es: "cap. II págs. 18-20", fr: "chap. II p. 18-20" }), chornet({ es: "pág. 14", fr: "p. 14" })],
            { es: "Posición de do de la izquierda, la clave de fa y el sistema de dos pentagramas.", fr: "Premières pièces à deux mains, avec les deux voix qui sonnent." },
            { es: ["Monta cada mano por separado antes de juntarlas."], fr: ["Monte chaque main séparément avant de les réunir."] }),
          lectura("p1c3-lectura", "fa", "inicial1",
            { es: "Leer en clave de fa", fr: "Lire en clé de fa" },
            { es: "De fa a do central, que es lo que acaba de tocar con la izquierda.", fr: "Du fa au do central, ce qu'il vient de jouer de la main gauche." },
            { es: ["Es normal ir más lento que en clave de sol.", "Alterna las dos claves a partir de ahora."], fr: ["Il est normal d'être plus lent qu'en clé de sol.", "Alterne les deux clés à partir de maintenant."] }),
        ],
      },
      {
        titulo: { es: "Movimiento contrario e independencia", fr: "Mouvement contraire et indépendance" },
        objetivo: {
          es: "Que cada mano vaya a lo suyo sin arrastrar a la otra.",
          fr: "Que chaque main aille de son côté sans entraîner l'autre.",
        },
        ejercicios: [
          ejercicio("p1c4-contrario", { es: "Movimiento contrario", fr: "Mouvement contraire" },
            { es: "Las manos hacen lo mismo pero hacia lados opuestos.", fr: "Les mains font la même chose mais en sens opposé." },
            { es: ["Los dos pulgares comparten el do central: cada uno toca el suyo.", "Es más fácil que el paralelo: los dedos van emparejados, 1 con 1."], fr: ["Les deux pouces partagent le do central : chacun joue le sien.", "C'est plus facile que le parallèle : les doigts vont par paires, 1 avec 1."] },
            MOVIMIENTO_CONTRARIO),
          ejercicio("p1c4-terceras", { es: "Terceras, mano izquierda", fr: "Tierces, main gauche" },
            { es: "Dedos alternos también en la izquierda.", fr: "Doigts alternés aussi à la gauche." },
            { es: ["Vigila que la muñeca no gire en cada salto."], fr: ["Veille à ce que le poignet ne tourne pas à chaque saut."] },
            TERCERAS_MI),
          teoria("p1c4-independencia", { es: "Cada mano, un papel", fr: "Chaque main, un rôle" },
            { es: "Casi siempre una mano lleva la melodía y la otra acompaña. La que acompaña suena más floja: no toca menos, pesa menos.", fr: "Presque toujours une main porte la mélodie et l'autre accompagne. Celle qui accompagne sonne plus doux : elle ne joue pas moins, elle pèse moins." },
            { es: ["Toca la melodía en f y el acompañamiento en p."], fr: ["Joue la mélodie en f et l'accompagnement en p."] }),
          referencia("p1c4-ref", { es: "Independencia de manos", fr: "Indépendance des mains" },
            [alfred({ es: "págs. 21-23", fr: "p. 21-23" }), pouillard({ es: "cap. III pág. 26", fr: "chap. III p. 26" }), chornet({ es: "pág. 17", fr: "p. 17" })],
            { es: "Tocar de do a sol sobre los dos pentagramas, con Lightly Row y Aunt Rhody.", fr: "Que chaque main fasse quelque chose de différent sans entraîner l'autre." },
            { es: ["Empieza por una mano tenida y la otra en notas sueltas."], fr: ["Commence par une main tenue et l'autre en notes détachées."] }),
          lectura("p1c4-lectura", "fa", "inicial2",
            { es: "Ampliar en clave de fa", fr: "Élargir en clé de fa" },
            { es: "De do a sol, por encima del pentagrama de la izquierda.", fr: "Du do au sol, au-dessus de la portée de la main gauche." },
            { es: ["Alterna con clave de sol para que no pierda ninguna."], fr: ["Alterne avec la clé de sol pour qu'il n'en perde aucune."] }),
        ],
      },
      {
        titulo: { es: "Acordes y alteraciones", fr: "Accords et altérations" },
        objetivo: {
          es: "Dos notas a la vez, las teclas negras en la partitura y otros compases.",
          fr: "Deux notes à la fois, les touches noires sur la partition et d'autres mesures.",
        },
        ejercicios: [
          ejercicio("p1c5-dosnotas", { es: "Dos notas a la vez", fr: "Deux notes à la fois" },
            { es: "Que las dos suenen exactamente juntas y con el mismo peso.", fr: "Que les deux sonnent exactement ensemble et avec le même poids." },
            { es: ["Deja caer el brazo; no aprietes con los dedos.", "Escucha si una de las dos se adelanta."], fr: ["Laisse tomber le bras ; ne serre pas avec les doigts.", "Écoute si l'une des deux est en avance."] },
            DOS_NOTAS),
          teoria("p1c5-alteraciones", { es: "Sostenidos y bemoles", fr: "Dièses et bémols" },
            { es: "El sostenido sube la nota a la tecla de al lado, hacia la derecha; el bemol la baja hacia la izquierda. Casi siempre son las teclas negras.", fr: "Le dièse monte la note à la touche voisine, vers la droite ; le bémol la descend vers la gauche. Ce sont presque toujours les touches noires." },
            { es: ["Fa sostenido y si bemol son los dos primeros que se encuentra.", "Sólo reconocerlos: tocarlos llega con las escalas."], fr: ["Fa dièse et si bémol sont les deux premiers qu'il rencontre.", "Seulement les reconnaître : les jouer viendra avec les gammes."] },
            ALTERACIONES),
          teoria("p1c5-compases", { es: "Los compases de 3/4 y 2/4", fr: "Les mesures à 3/4 et 2/4" },
            { es: "El número de abajo dice qué figura vale un tiempo y el de arriba cuántos hay por compás. En 3/4 se cuenta 1-2-3, como un vals.", fr: "Le chiffre du bas dit quelle figure vaut un temps et celui du haut combien il y en a par mesure. À 3/4 on compte 1-2-3, comme une valse." },
            { es: ["Dar palmas en 3/4 y en 2/4 antes de tocarlo."], fr: ["Frapper dans les mains à 3/4 et à 2/4 avant de jouer."] }),
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
          fr: "Tout réunir dans une vraie pièce, et savoir aborder une partition nouvelle.",
        },
        ejercicios: [
          ejercicio("p1c6-repaso", { es: "Repaso: manos juntas", fr: "Révision : mains ensemble" },
            { es: "Calentar con lo que ya sabe antes de leer algo nuevo.", fr: "S'échauffer avec ce qu'il sait avant de lire du nouveau." },
            { es: ["Paralelo y contrario seguidos, sin parar entre ellos."], fr: ["Parallèle et contraire à la suite, sans s'arrêter entre les deux."] },
            MOVIMIENTO_CONTRARIO),
          teoria("p1c6-leer", { es: "Cómo empezar una partitura nueva", fr: "Comment aborder une partition nouvelle" },
            { es: "Antes de tocar: mirar la clave, el compás, dónde empieza cada mano y si hay alteraciones. Después, solfear el ritmo con palmas.", fr: "Avant de jouer : regarder la clé, la mesure, où commence chaque main et s'il y a des altérations. Ensuite, solfier le rythme en frappant dans les mains." },
            { es: ["Este orden, siempre el mismo, hasta que le salga solo.", "Tocar es lo último, no lo primero."], fr: ["Cet ordre, toujours le même, jusqu'à ce qu'il vienne tout seul.", "Jouer est la dernière étape, pas la première."] }),
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
          ejercicio("p1c7-md", { es: "Escala de do mayor, mano derecha", fr: "Gamme de do majeur, main droite" },
            { es: "El pulgar pasa por debajo del 3 para tocar el fa.", fr: "Le pouce passe sous le 3 pour jouer le fa." },
            { es: ["Prepara el pulgar mientras suenan el 2 y el 3.", "La mano no da tirones: el codo acompaña."], fr: ["Prépare le pouce pendant que sonnent le 2 et le 3.", "La main ne sursaute pas : le coude accompagne."] },
            ESCALA_DO_DERECHA),
          ejercicio("p1c7-mi", { es: "Escala de do mayor, mano izquierda", fr: "Gamme de do majeur, main gauche" },
            { es: "Aquí es el 3 el que cruza por encima del pulgar.", fr: "Ici c'est le 3 qui croise par-dessus le pouce." },
            { es: ["Después del pulgar en el sol, el 3 cruza para tocar el la.", "Muy lento hasta que el cruce no se oiga."], fr: ["Après le pouce sur le sol, le 3 croise pour jouer le la.", "Très lentement jusqu'à ce que le croisement ne s'entende plus."] },
            ESCALA_DO_IZQUIERDA),
          teoria("p1c7-escala", { es: "Por qué la escala se digita así", fr: "Pourquoi la gamme se doigte ainsi" },
            { es: "La mano tiene cinco dedos y la escala ocho notas, así que hay que pasar el pulgar una vez. Se pasa donde menos se nota, entre el mi y el fa.", fr: "La main a cinq doigts et la gamme huit notes, il faut donc passer le pouce une fois. On le passe là où ça s'entend le moins, entre le mi et le fa." },
            { es: ["Dilo en voz alta antes de tocar: dónde pasa el pulgar y por qué.", "La digitación es la misma en todas las escalas de teclas blancas."], fr: ["Dis-le à voix haute avant de jouer : où passe le pouce et pourquoi.", "Le doigté est le même dans toutes les gammes de touches blanches."] }),
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
          fr: "Ouvrir la main au-delà des cinq doigts consécutifs et clore le niveau.",
        },
        ejercicios: [
          ejercicio("p1c8-arpegio", { es: "Arpegio de do mayor, mano derecha", fr: "Arpège de do majeur, main droite" },
            { es: "El salto de sol a do lo hace el 5, no la muñeca.", fr: "Le saut de sol à do se fait avec le 5, pas avec le poignet." },
            { es: ["Las cuatro notas suenan igual de fuertes.", "Sin acelerar en la bajada."], fr: ["Les quatre notes sonnent aussi fort les unes que les autres.", "Sans accélérer à la descente."] },
            ARPEGIO_DO),
          ejercicio("p1c8-acordes", { es: "Acordes de tres sonidos", fr: "Accords de trois sons" },
            { es: "Tres notas a la vez, juntas y con el mismo peso.", fr: "Trois notes à la fois, ensemble et avec le même poids." },
            { es: ["Deja caer el brazo: el acorde no se aprieta con los dedos.", "Escucha si alguna de las tres suena más floja."], fr: ["Laisse tomber le bras : l'accord ne se serre pas avec les doigts.", "Écoute si l'une des trois sonne plus faible."] },
            ACORDES_TRES_SONIDOS),
          teoria("p1c8-acorde", { es: "Qué es un acorde de tres sonidos", fr: "Qu'est-ce qu'un accord de trois sons" },
            { es: "Se toma una nota y se le añaden la tercera y la quinta por encima, saltando una tecla blanca cada vez. Do, fa y sol son los tres acordes que sostienen casi toda la música que va a tocar.", fr: "On prend une note et on ajoute la tierce et la quinte au-dessus, en sautant une touche blanche à chaque fois. Do, fa et sol sont les trois accords qui soutiennent presque toute la musique qu'il va jouer." },
            { es: ["Construye tú el acorde de re y el de mi.", "El arpegio es el mismo acorde, nota a nota."], fr: ["Construis l'accord de ré et celui de mi toi-même.", "L'arpège est le même accord, note par note."] }),
          referencia("p1c8-ref", { es: "Acordes de tres sonidos", fr: "Accords de trois sons" },
            [alfred({ es: "págs. 44-49 y 60", fr: "p. 44-49 et 60" }), pouillard({ es: "cap. IV pág. 38 y cap. V págs. 51-52", fr: "chap. IV p. 38 et chap. V p. 51-52" }), chornet({ es: "págs. 51 y 59, Bach y Mozart", fr: "p. 51 et 59, Bach et Mozart" })],
            { es: "Los acordes de do, fa y sol, y la diferencia entre acorde y acorde quebrado.", fr: "Les accords sur la partition et comment ils s'enchaînent." },
            { es: ["Con esto cerrado, estás listo para Principiante 2."], fr: ["Une fois cela acquis, tu es prêt pour le Débutant 2."] }),
          lectura("p1c8-lectura", "fa", "intermedio",
            { es: "Evaluación: las dos claves ampliadas", fr: "Évaluation : les deux clés élargies" },
            { es: "Una sesión de cada clave en el nivel más alto que aguante.", fr: "Une session de chaque clé au niveau le plus haut qu'il tienne." },
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
