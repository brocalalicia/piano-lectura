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

## Estructura de juego
- Antes de cada ejercicio, 5 segundos para memorizar las notas del rango
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