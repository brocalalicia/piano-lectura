# Proyecto: App de lectura musical para alumnos de piano

## Contexto
Soy profesor de piano para principiantes. Esta es una app web para que mis
alumnos practiquen lectura de clave de sol y clave de fa, y solfeo rítmico.
Usuarios: niños y adultos principiantes, sobre todo en tablet y móvil.
No soy programador.

## Stack técnico
- Vite + JavaScript vanilla. Sin React ni frameworks pesados.
- VexFlow para renderizar el pentagrama.
  NUNCA dibujar las notas a mano ni usar imágenes de pentagramas.
- Tone.js para el sonido.
- Sin backend ni cuentas de usuario por ahora.

## Cómo quiero que trabajes conmigo
- Explícame los cambios en lenguaje sencillo. No asumas conocimientos técnicos.
- Antes de tocar varios archivos, dime qué vas a hacer y espera mi visto bueno.
- Un cambio por vez. No te adelantes a fases futuras.
- Haz commit de Git cada vez que algo funcione, con mensaje descriptivo.
- Si algo no funciona, dime cómo comprobarlo yo mismo en el navegador.

## Interfaz
- La primera pantalla es una portada: título, objetivo, en qué consiste, cómo
  es una sesión y qué variables puede mejorar el alumno. Debajo, la elección
  de clave. No hay otra explicación del juego: si cambia la estructura de la
  sesión, hay que actualizar esa portada.
- El francés lo leen adultos y va escrito con cuidado editorial: nada de calcos
  del español, terminología musical francesa correcta (interligne, barre de
  ligature, chiffrage de mesure) y espacio fino antes de : ; ? !
- Español por defecto, con selector de idioma (ES/FR) arriba a la derecha.
  La preferencia se guarda en el navegador (localStorage).
- Nombres de notas en solfeo: do, re, mi, fa, sol, la, si (ré en francés).
  Nunca C, D, E...
- Botones grandes, pensados para dedos de niño en una tablet.
- Diseño limpio y sin distracciones. Nada de animaciones llamativas.

## Criterios pedagógicos (importante, no los cambies sin preguntarme)
- El rango de notas siempre debe ser configurable, nunca fijo.
- Se empieza por do central a sol; se amplía progresivamente.
- Clave de sol y clave de fa se practican por separado antes de mezclarse.
- Precisión antes que velocidad. El cronómetro es opcional y va desactivado
  por defecto.
- Feedback sonoro inmediato en cada respuesta, acierto o fallo.
- Al fallar, la nota se queda en pantalla hasta que se acierta. No se salta.

## Diseño visual
Estilo: juego de tablet cálido y amable, no aplicación de escritorio.
Referencias de sensación: Duolingo, Toca Boca. Nada de estética corporativa.

- Tipografía Nunito (Google Fonts), redondeada, a juego con los botones con
  relieve. Si no carga, cae en la del sistema y todo sigue funcionando.
- Fondo cálido (crema / melocotón suave). El pentagrama va sobre una tarjeta
  blanca redondeada que destaca como una "isla".
- Pentagrama siempre negro sobre blanco, y en posición fija entre preguntas.
- Esquinas redondeadas generosas (14-16px) en todo.
- Botones con volumen: borde inferior grueso de 4px que desaparece al pulsar,
  y el botón baja 4px. Deben parecer teclas físicas.
- Mínimo 68px de alto en los botones de nota.
- Vibración (navigator.vibrate) al pulsar, en dispositivos que la soporten.
- Feedback triple siempre: color + icono + sonido. Nunca solo color (daltonismo).
- Micro-animaciones rápidas (bajo 200ms). Nada que bloquee al alumno.

## Programa de práctica
## Progreso de los alumnos
- La app puede hablar con una **API propia** (`api/`, ver su README) que guarda
  el progreso en Postgres. La dirección se fija al construir con **`VITE_API`**;
  sin esa variable la app funciona sola, sin guardar nada y sin pedir código.
- **Nada de `src/api.js` puede romper la app.** Si no hay servidor, si el alumno
  no ha metido código o si la red falla, todo devuelve `null` y se sigue como
  siempre. Ninguna función lanza. En particular, **si el servidor no contesta se
  deja todo abierto**: más vale que el alumno pueda estudiar de más a que se
  quede fuera de su clase.
- El alumno entra con un **código de ocho letras** que le da la profesora y que
  queda en `localStorage`. La profesora entra con una clave, que va en el mismo
  sitio.
- Los cursos que el alumno tiene abiertos los decide la profesora. Es una guía,
  no un candado: sin código se ve todo.
- Las sesiones se mandan al acabar **el último de los seis ejercicios**, que es
  la unidad que le sirve a la profesora, y cada apertura de una lección se
  registra por separado.
- Para probar todo esto sin base de datos: `node api/dev/servidor-memoria.js`
  levanta la API contra un Postgres en memoria con datos de ejemplo, y basta con
  poner `VITE_API=http://localhost:3001` en un `.env.local`.

## Interfaz
- La app tiene dos programas: **Lectura** (leer notas) y **Lecciones de piano**
  (ejercicios técnicos, en francés «Leçons de piano»). Se eligen en la primera
  pantalla, bajo el título «Aprende y mejora tu técnica de piano con Alicia».
  En el
  código el segundo programa sigue llamándose `practica`.
- Lecciones de piano: nivel → curso → lista de bloques → ficha. **Los ejercicios de
  piano de un curso van todos en una sola página**, que es la rutina técnica
  de la clase; el resto de bloques ocupan una fila cada uno. **Tres niveles**,
  con dificultad progresiva de un curso al
  siguiente: **Primeros pasos** (`primeros-pasos`, 11 cursos), **Tomando vuelo**
  (`tomando-vuelo`) y **En escena** (`en-escena`). Sólo el primero está
  preparado; los otros dos salen en el menú con el botón sombreado y
  «En preparación», que es lo que hace `boton.disabled` cuando un nivel no
  tiene ningún curso con ejercicios. Lo normal son
  5 o 6 bloques por curso, 7 como mucho: en cuanto un curso pasa de ahí, se
  parte en dos.
- El catálogo vive en `src/programa.js`, separado del resto para poder editarlo
  sin tocar la lógica. Cada ejercicio lleva sus textos en español y francés.
- **Derechos de autor, importante**: la app se publica en internet, así que
  sólo puede mostrar partituras en dominio público (Czerny, Hanon, Beyer,
  Burgmüller, Duvernoy, Le Couppey...). Los métodos con derechos —Pouillard,
  Faber, Aaron, Hal Leonard, Chornet, los de la carpeta «Programme Piano»—
  se citan indicando dónde mirarlos, nunca reproduciendo la página.
- Al citar un método, la página es **la impresa en el papel**, no la del PDF:
  en el Pouillard hay seis de diferencia y ya provocó una referencia mal puesta.
- Un curso es **una clase de una hora**, así que lleva bloques de distinto
  tipo, no sólo técnica. Cada ejercicio es de uno de estos cuatro:
  `dibujada` (fórmula técnica hecha con VexFlow), `teoria` (explicación, con
  ejemplo dibujado si ayuda), `referencia` (dónde mirarlo en los métodos de la
  profesora, con página impresa y sin copiar nada) y `lectura` (manda al
  programa de Lectura de la propia app, a la clave y nivel que toca ese curso).
- **El orden de los bloques dentro de un curso no se toca a mano**: lo impone
  `ordenarClase()` en `programa.js`, y sale del método de la profesora —
  primero se lee la nota, después se sitúa en el teclado, luego se piensa el
  dedo y al final el ritmo. El orden es: **la teoría que abre → lectura → el
  resto de la teoría → piano → métodos**. La lectura va pegada a la teoría que
  la explica, no al final de toda la teoría. **La teoría que abre son todos los
  bloques de teoría que van seguidos al principio del catálogo**, no sólo el
  primero: una lección que se explica en dos o tres pasos no se parte con la
  lectura en medio. Un curso empieza por teoría y
  acaba en el piano, nunca al revés.
- Cada bloque lleva su etiqueta visible: Teoría, Lectura, Técnica o Método.
- **En la lista de un curso, cada lección es sólo su título y su etiqueta.**
  Nada de líneas de resumen debajo. El `objetivo` sigue en el catálogo para
  saber de qué va cada bloque, pero no se pinta.
- **Los bloques de Método no llevan indicaciones propias.** Su «Cómo trabajarlo»
  es siempre `COMO_TRABAJAR`, el método de la profesora, igual en todos los
  cursos: se monta a manos separadas y se juntan después, y cada nota se
  resuelve siempre en el mismo orden — **qué nota es → dónde cae en el teclado →
  con qué dedo se toca → cuánto dura**. `referencia()` lo pone solo; no acepta
  indicaciones. Lo que sea propio de un curso va en el detalle, que describe las
  páginas, no cómo se trabajan.
- La explicación de teoría puede ser un párrafo o una lista: si es una lista,
  el primer elemento entra como párrafo y el resto van en puntos. Los textos
  largos van así, que de seguido quedan ilegibles.
- Los bloques de teoría pueden llevar, además de la explicación, una lista de
  **conceptos con su definición** y una ilustración. La ilustración es un
  pentagrama dibujado con VexFlow, **un teclado de piano**, **las dos manos con
  los dedos numerados** o el **árbol de duraciones**. Todo lo que no es
  notación sobre un pentagrama se dibuja aparte, en SVG. Un ejemplo de varios
  pentagramas que no son las dos manos —tres armaduras, por ejemplo— lleva
  `sinLlave: true` para que no se dibuje la llave, y el rótulo `t` de una nota
  admite los dos idiomas. **Un bloque puede
  llevar más de una ilustración, y el teclado va siempre delante del
  pentagrama**: primero se ven las teclas y después cómo se escribe lo que
  suena en ellas.
- El teclado sabe marcar teclas blancas (`marcadas`, con `mano` o `color`) y
  **negras** (`negras`, con su nombre y una guía que sube hasta la tecla),
  dibujar **corchetes de intervalo** con su nombre (`intervalos`, con `fila`
  para apilarlos cuando van seguidos) y poner **claves** encima (`claves`).
- **Un dibujo, una idea.** El teclado del tono y el semitono marca sólo teclas
  blancas: meter ahí además las alteradas mezclaba dos lecciones y se entendía
  peor. `negras` sigue disponible para un dibujo que trate de eso.
- En el teclado, **cada mano lleva su color**: la derecha va en
  `--color-primario` y la izquierda en `--color-mano-izquierda`. El do central
  sale partido por la mitad, con los dos colores, porque pertenece a las dos
  claves. Las claves sueltas (sin pentagrama) se pintan con la fuente Bravura
  que carga VexFlow, colocadas por las medidas de tinta de `GLIFO_CLAVE`:
  `getBBox()` sobre un glifo devuelve la caja de la fuente, no la del dibujo.
- Ninguna ilustración pasa de `ALTO_MAXIMO_DIBUJO` px de alto.
- **Toda la técnica se practica con las dos manos, pero el formato depende del
  curso.** Donde las manos tocan a la vez —del curso 3 en adelante— el
  ejercicio lleva los dos pentagramas unidos por la llave, y se montan con
  `aDosManos()`: los dos sistemas deben tener el **mismo número de figuras** o
  no quedan alineados. Donde se toca a manos separadas, **cada mano va en su
  propio ejercicio** con `unaMano()`, uno detrás de otro: las dos manos no
  hacen lo mismo, y verlas bajo una llave hace pensar que suenan a la vez.
  Juntas y al unísono llegan en el curso 3, e independientes a partir del 4.
- **La digitación se va retirando a lo largo del nivel**, para que el alumno no
  se acostumbre a leer el número en vez de la nota: entera en el curso 1, sólo
  la nota de salida de cada mano en el 2 y el 3, y ninguna del 4 en adelante.
  Lo hace `podarDigitacion()` sobre el catálogo ya montado, así que no hay que
  editar fórmula por fórmula. Una fórmula con `digitacion: true` se libra,
  porque ahí la digitación **es** el contenido: los acordes, el arpegio y el
  paso del pulgar del curso 7. Cuando la digitación deja de estar escrita pero
  no es obvia, se dice con palabras en las indicaciones.
- En las partituras, `d` es la digitación y va encima; `t` es el nombre de la
  nota y va debajo; `silencio: true` la convierte en silencio; `alt` pone un
  sostenido (`"#"`), un bemol (`"b"`) o un becuadro (`"n"`); una `d` al final de
  la figura (`"hd"`, `"qd"`) es el puntillo; y `ligado: true` ata la nota con la
  siguiente con una ligadura de prolongación, también por encima de la línea
  divisoria. `armadura` (`"G"`, `"F"`…) pinta la armadura entre la clave y el
  compás.
- **Las barras de unión se dibujan a mano**: VexFlow no une las corcheas por su
  cuenta. `gruposDeBarra()` las agrupa por tiempo —tres corcheas en los compases
  de subdivisión ternaria, una negra en los demás— y las barras se construyen
  antes de formatear, porque cambian la dirección de los palos, y se pintan
  después.
- **Temario de Primeros pasos, curso a curso**: 1 el pentagrama y las dos
  claves · 2 las figuras · 3 el compás y la línea divisoria · 4 los silencios ·
  5 la corchea y su silencio · 6 sostenidos y bemoles · 7 las tonalidades ·
  8 los acordes y la escala · 9 las semicorcheas y su silencio · 10 el puntillo
  y la ligadura de prolongación · 11 compases binarios y ternarios.
- **Una clase no aguanta más de dos bloques de teoría.** El curso 6 llegó a
  tener tres —el semitono, las tonalidades y las accidentales, catorce
  conceptos— y dejó de entenderse: se partió en dos cursos.
- El **paso del pulgar y la escala de do** no son un curso aparte: van como
  técnica del curso 7, junto a los acordes, porque el acorde y la escala son
  las dos maneras de salir de la posición de cinco dedos.
- **Una figura nueva entra siempre con su silencio**, y el curso siguiente se
  apoya en la anterior: el puntillo del 9 es lo que permite entender el tiempo
  de 6/8 del 10.
- **Una figura nueva entra con su silencio, y los ejercicios del curso la usan
  de verdad.** No vale presentarla en la teoría y dejar la técnica en lo de
  antes: el curso 5 son cuatro ejercicios de corcheas, uno de ellos con las
  manos alternándose en el hueco que deja el silencio de corchea.
- **Compases, orden de aparición**: 4/4 desde el principio, y el 3/4 y el 2/4
  en el curso 3, en la misma clase en que se explica qué son los dos números.
  Un compás nuevo entra con ejercicios que lo usen, no sólo con la teoría, y el
  6/8 llega en el curso 10.
- **El título de un bloque de lectura dice el nivel y las notas**, con las
  mismas palabras que usa el menú de Lectura en `t().rangos`. Nada de títulos
  evocadores: si el curso trae nivel nuevo, se nombra ese nivel con su rango;
  si es repaso, se dice de qué nivel.
- **Dos ejercicios no pueden llevar las mismas notas.** Dentro de una posición
  de cinco dedos la variedad sale del ritmo, de la dirección (empezar por el
  pulgar o por el meñique), del compás y de la posición de la mano, no de
  inventar notas que todavía no se leen.
- **El programa de práctica está pensado para adultos**: el texto le habla al
  alumno de tú, no al profesor sobre un niño.
- Un bloque `referencia` cita **varios métodos a la vez**, porque en clase se
  combinan. Los **tres métodos fijos**, presentes en todos los cursos y siempre
  en este orden: **Hervé y Pouillard** (la progresión técnica clásica), **Chornet**
  (fórmulas por bloques: manos separadas, unísono, alternadas, dedos libres,
  acordes, legato/staccato, escalas, Czerny op. 599) y **Michael Aaron, grado 1**
  (lectura y piezas cortas). El **Alfred no es referencia continua**: sólo piezas
  sueltas, y únicamente cuando la profesora lo pida.
- El bloque de método de cada curso sigue esta progresión de manos, que da su
  título: cursos 1 y 2 **manos separadas**, curso 3 **manos juntas al unísono**,
  y del curso 4 en adelante **manos independientes** (alternadas en el 4, dedos
  libres en el 5) y después por contenido (acordes, legato/staccato, escalas).
- **Las dos claves van siempre juntas y al mismo nivel**: nunca se avanza una
  y se deja la otra atrás. Un curso puede llevar varias sesiones de lectura, y
  cada una dice si trae **notas nuevas** o si es para **afianzar** lo anterior,
  con `dosClaves(nivel, papel)`. La otra regla es que el bloque de lectura
  cubra las notas que toca la técnica de ese mismo curso, no menos.
  **Lo recién presentado se afianza en las clases siguientes**, no lo más
  antiguo: el nivel nuevo se lleva los dos cursos que vienen detrás, primero
  buscando precisión y después velocidad. Después se va repasando hacia atrás,
  de lo más reciente a lo más antiguo. El reparto de Primeros pasos: inicial 1
  nuevas (c1) → inicial 1 afianzar + inicial 2 nuevas (c2) → inicial 2 afianzar
  + intermedio nuevas (c3) → intermedio, precisión (c4) y velocidad (c5) →
  inicial 2 (c6) → inicial 1 (c7) → las líneas del centro, nuevas (c8) → esas
  mismas, afianzar (c9) → inicial 2 a velocidad (c10) → las ocho sesiones como
  evaluación (c11).
- **Ojo con los nombres de los niveles avanzados: no son simétricos.** En clave
  de sol, Avanzado 1 es el extremo agudo y Avanzado 2 baja al do central; en
  clave de fa es al revés, Avanzado 1 sube al do central y Avanzado 2 es el
  extremo grave. Por eso el par que cruza el centro se escribe con
  `lineasDelCentro()` y no con `dosClaves()`. Los dos extremos de verdad (sol
  Avanzado 1 y fa Avanzado 2) no entran en Primeros pasos.
- **A partir del curso 6 cada clase lleva un bloque de repertorio**, sacado de
  *Essential Piano Repertoire, Preparatory Level* (Keith Snell), en el orden
  progresivo del propio libro.
- **No se enlaza a partituras de fuera**: o está dibujada dentro de la app, o
  remite a un libro que ella ya tiene.
- Los dos programas están conectados: la práctica manda a la lectura. Si se
  añaden niveles de lectura, revisar a dónde apuntan los bloques `lectura`.
- Si se entra a la lectura desde un curso, el botón de volver regresa **a ese
  curso** desde cualquier pantalla del ejercicio, y lo dice: «← Curso 3».
- La ficha de una lección lleva al pie **Anterior / posición / Siguiente**. En
  la primera y la última lección del curso, el botón del extremo salta al curso
  preparado anterior o siguiente («← Curso 2», «Curso 4 →»), de modo que el
  nivel entero se recorre en cadena sin volver al menú. En los dos extremos del
  nivel, ese botón no se pinta. Las filas se calculan al vuelo con
  `filasDelCurso()`, nunca se guardan: llevan textos traducidos y se quedarían
  obsoletas al cambiar de idioma.
  Entrando por el menú de Lectura, vuelve a los menús como siempre.

## Niveles
- Se entra por un menú: primero la clave (sol o fa) y después el nivel.
  Cualquier alumno puede ir directo al nivel que quiera; no se desbloquea nada.
- Cinco niveles por clave. Entre todos cubren el rango sin dejar ninguna nota
  sin practicar; si se cambia un rango, hay que comprobar que no se abre un
  hueco (fue lo que pasó con la línea central de cada pentagrama).
- Clave de sol: Inicial 1 (do central a sol), Inicial 2 (sol a do alto),
  Intermedio (do alto a sol alto), Avanzado 1 (sol alto a mi, en líneas
  adicionales por encima) y Avanzado 2 (sol grave a do central, por debajo).
- Clave de fa: Inicial 1 (fa a do central), Inicial 2 (do a sol, en mitad del
  pentagrama), Intermedio (fa grave a do), Avanzado 1 (do central a sol, en
  líneas adicionales por encima) y Avanzado 2 (do grave a fa grave, por
  debajo).
- Los botones de respuesta son siempre las siete notas, aunque el nivel tenga
  cuatro, cinco o seis: las que sobran hacen de señuelo.
- Todos los niveles funcionan igual: memorización, 2 series de 3 ejercicios
  y tabla final.

## Estructura de juego
- Antes de cada ejercicio, 10 segundos para memorizar las notas del nivel
  (pentagrama con todas las notas a la vez y su nombre debajo).
- Una sesión son 2 series de 3 ejercicios (6 en total), 10 notas cada uno,
  con puntos de progreso e indicador "Ejercicio X de 6 (Serie Y)" arriba.
- La serie 2 es más difícil: saltos entre notas más grandes desde el
  principio, y los botones de nota aparecen en un orden barajado (fijo
  durante toda la serie 2, no se rebaraja en cada ejercicio).
- Contador de racha de aciertos seguidos (se reinicia en cada ejercicio).
- Al terminar cada ejercicio (excepto el último): estrellas según el número
  de fallos (más fácil de entender para el alumno que un porcentaje),
  precisión, tiempo y racha máxima de ESE ejercicio, con botón para
  continuar al siguiente ejercicio o serie.
- Al terminar el ejercicio 6: pantalla "Sesión completada" con una tabla
  de los 6 ejercicios (serie, ejercicio, aciertos, fallos, estrellas,
  tiempo) y una fila de totales, más un botón "Otra vez" que reinicia
  toda la sesión desde el ejercicio 1.
- Durante la lectura de una nota, cero elementos decorativos compitiendo.
- Sonido de interfaz propio para acierto y para fallo. El fallo nunca suena
  a castigo.