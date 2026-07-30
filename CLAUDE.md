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
- Todo en español.
- Nombres de notas en español: do, re, mi, fa, sol, la, si. Nunca C, D, E...
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