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
- La app tiene dos programas: **Lectura** (leer notas) y **Práctica**
  (ejercicios técnicos). Se elige en la primera pantalla.
- Práctica: nivel → curso → lista de bloques → ficha. **Los ejercicios de
  piano de un curso van todos en una sola página**, que es la rutina técnica
  de la clase; el resto de bloques ocupan una fila cada uno. Cuatro niveles
  (Principiante 1 y 2, Intermedio 1 y 2) y **8 cursos cada uno**, con
  dificultad progresiva de un curso al siguiente. Lo normal son 5 o 6 bloques
  por curso; el 1 tiene más porque agrupa toda la posición de cinco dedos.
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
  la explica, no al final de toda la teoría. Un curso empieza por teoría y
  acaba en el piano, nunca al revés.
- Cada bloque lleva su etiqueta visible: Teoría, Lectura, Técnica o Método.
- La explicación de teoría puede ser un párrafo o una lista: si es una lista,
  el primer elemento entra como párrafo y el resto van en puntos. Los textos
  largos van así, que de seguido quedan ilegibles.
- Los bloques de teoría pueden llevar, además de la explicación, una lista de
  **conceptos con su definición** y una ilustración. La ilustración es un
  pentagrama dibujado con VexFlow, **un teclado de piano**, **las dos manos con
  los dedos numerados** o el **árbol de duraciones**. Todo lo que no es
  notación sobre un pentagrama se dibuja aparte, en SVG.
- **Toda la técnica se practica con las dos manos**: cada ejercicio lleva los
  dos pentagramas, no hay fichas de una sola mano. Se juntan con `aDosManos()`,
  y los dos sistemas deben tener el **mismo número de figuras** o no quedan
  alineados. En los primeros cursos las indicaciones dicen que se toque una
  mano y después la otra; juntas llegan en el curso 3.
- En las partituras, `d` es la digitación y va encima; `t` es el nombre de la
  nota y va debajo; `silencio: true` la convierte en silencio.
- **Ritmo, orden de aparición**: redonda, blanca y negra en el curso 1; los
  silencios de esas tres en el 2; la corchea en el 4, cuando las manos ya van
  juntas y tiene sentido partir el tiempo; y la semicorchea en el 6, antes del
  repertorio, sólo para reconocerla. Nada de corcheas antes del curso 4.
- **El programa Principiante está pensado para adultos**: el texto le habla al
  alumno de tú, no al profesor sobre un niño.
- Un bloque `referencia` cita **varios métodos a la vez**, porque en clase se
  combinan. Los **tres métodos fijos**, presentes en todos los cursos y siempre
  en este orden: **Hervé y Pouillard** (la progresión técnica clásica), **Chornet**
  (fórmulas por bloques: manos separadas, unísono, alternadas, dedos libres,
  acordes, legato/staccato, escalas, Czerny op. 599) y **Michael Aaron, grado 1**
  (lectura y piezas cortas). El **Alfred no es referencia continua**: sólo piezas
  sueltas, y únicamente cuando la profesora lo pida.
- El bloque de método de cada curso sigue esta progresión de manos, que da su
  título: curso 1 **manos separadas**, curso 2 **manos juntas al unísono**, y del
  curso 3 en adelante **manos independientes** (alternadas en el 3, dedos libres
  en el 4) y después por contenido (acordes, legato/staccato, escalas).
- **A partir del curso 5 cada clase lleva un bloque de repertorio**, sacado de
  *Essential Piano Repertoire, Preparatory Level* (Keith Snell), en el orden
  progresivo del propio libro.
- **No se enlaza a partituras de fuera**: o está dibujada dentro de la app, o
  remite a un libro que ella ya tiene.
- Los dos programas están conectados: la práctica manda a la lectura. Si se
  añaden niveles de lectura, revisar a dónde apuntan los bloques `lectura`.
- Si se entra a la lectura desde un curso, el botón de volver regresa **a ese
  curso** desde cualquier pantalla del ejercicio, y lo dice: «← Curso 3».
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