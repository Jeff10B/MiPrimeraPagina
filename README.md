# Taller: Introducción a las Aplicaciones Web


## 1. ¿Qué es HTML y cuál es su función en la web?

**HTML** (*HyperText Markup Language* o Lenguaje de Marcado de Hipertexto) es el código estándar que se utiliza para estructurar y desplegar una página web y sus contenidos.

No es un lenguaje de programación, sino un lenguaje de marcado que le dice al navegador web cómo debe organizar los elementos (párrafos, imágenes, enlaces, tablas, etc.) dentro de la pantalla.

### Función principal en la web
* **Definir la estructura:** Funciona como el "esqueleto" de un sitio web.
* **Organizar el contenido:** Utiliza etiquetas (`<p>`, `<h1>`, `<img>`) para indicar qué parte es un título, qué parte es un texto o dónde va una imagen.
* **Conectar páginas:** Permite crear enlaces (hipervínculos) para navegar de una página a otra.

---

## 2. ¿Qué es una etiqueta HTML y cuáles son las más comunes?

Una **etiqueta HTML** es el elemento fundamental que se utiliza para estructurar y definir el contenido de una página web. Las etiquetas le indican al navegador web qué tipo de contenido está procesando y cómo debe mostrarlo.

### Etiquetas HTML más comunes
* `<html>`: La etiqueta raíz que envuelve todo el documento web.
* `<head>`: Contiene metadatos e información del documento (título de la pestaña, enlaces a hojas de estilo CSS, etc.).
* `<body>`: Contiene todo el contenido visible de la página (textos, imágenes, botones).
* `<h1>` a `<h6>`: Encabezados o títulos principales y secundarios (siendo `<h1>` el más importante).
* `<p>`: Define un párrafo de texto.
* `<a>`: Crea hipervínculos para navegar hacia otras páginas o recursos.
* `<img>`: Inserta imágenes (es una etiqueta autoevaluada o sin cierre, por ejemplo: `<img src="imagen.jpg" alt="Descripción">`).
* `<div>`: Define una división o sección genérica para agrupar otros elementos.
* `<ul>` y `<li>`: Crean listas no ordenadas con viñetas.
* `<button>`: Define un botón con el que el usuario puede interactuar.

---

## 3. ¿Qué es un atributo de una etiqueta HTML y cuáles son los más comunes?

Un **atributo HTML** es un valor adicional que se agrega a la etiqueta de apertura para modificar su comportamiento, proporcionar información extra o configurar cómo debe funcionar o verse ese elemento.

### Atributos HTML más comunes
* `id`: Asigna un identificador único a un elemento en toda la página.
* `class`: Asigna una o más clases a un elemento para agruparlo y aplicarle estilos con CSS o scripts con JavaScript.
* `src`: Especifica la ruta de un archivo externo (utilizado en imágenes `<img>` o scripts `<script>`).
* `href`: Indica la URL o destino al que apunta un enlace (`<a>`).
* `alt`: Proporciona un texto alternativo para una imagen si esta no se puede cargar o para lectores de pantalla.
* `style`: Permite añadir reglas de estilo CSS directamente en el elemento.
* `title`: Muestra un pequeño texto descriptivo (*tooltip*) cuando el usuario pasa el cursor sobre el elemento.
* `type`: Define el tipo de un elemento de entrada en formularios (`<input type="text">`, `<input type="checkbox">`).

---

## 4. ¿Qué es CSS y cómo se utiliza para el diseño web?

**CSS** (*Cascading Style Sheets* o Hojas de Estilo en Cascada) es el lenguaje que se utiliza para definir la presentación visual de un documento estructurado en HTML.

> *Si HTML es el esqueleto de una página web (los huesos y la estructura), CSS es la apariencia visual (la piel, el color de ojos, la ropa y el peinado).*

### Funciones principales de CSS
* **Dar estilo:** Define colores de fondo, tipos de letra, tamaños y bordes.
* **Organizar el diseño (*Layout*):** Controla la posición de los elementos en la pantalla (centrado, columnas, grillas).
* **Adaptabilidad (*Responsive Design*):** Permite que una página web se vea bien tanto en un teléfono móvil como en una computadora de escritorio.
* **Interactividad:** Crea efectos visuales cuando el usuario pasa el cursor sobre un elemento o hace clic en él.

---

## 5. ¿Qué es una propiedad en CSS y cuáles son las más comunes?

Una **propiedad en CSS** es un atributo o característica específica que se desea modificar en uno o varios elementos HTML para cambiar su aspecto o comportamiento visual.

En la sintaxis de CSS, las propiedades van acompañadas de un valor y terminan con un punto y coma `;`. Forman parte del bloque de declaración dentro de las llaves `{}` de un selector.

### Categorías de propiedades CSS más comunes

####  Texto y Tipografía
* `color`: Cambia el color del texto.
* `font-family`: Define la tipografía o fuente del texto (ej. `Arial`, `Roboto`, `sans-serif`).
* `font-size`: Controla el tamaño de la letra (ej. `16px`, `1.2rem`).
* `font-weight`: Establece el grosor de la letra (`bold`, `normal`, `600`).
* `text-align`: Alinea el texto dentro de su contenedor (`left`, `center`, `right`, `justify`).

####  Modelo de Caja (Espaciado y Tamaño)
* `width` / `height`: Establecen el ancho y el alto de un elemento.
* `padding`: Espacio interno entre el contenido del elemento y su borde.
* `margin`: Espacio externo que separa al elemento de otros elementos vecinos.
* `border`: Define el borde del elemento (grosor, estilo y color; ej. `1px solid black`).
* `background-color`: Define el color de fondo.

####  Disposición y Maquetación (*Layout*)
* `display`: Define cómo se comporta y se muestra el elemento en pantalla (`block`, `inline-block`, `flex`, `grid`, `none`).
* `flex-direction`: Define la dirección de los elementos dentro de un contenedor Flexbox (`row`, `column`).
* `justify-content`: Alinea los elementos horizontalmente en Flexbox (`center`, `space-between`).
* `align-items`: Alinea los elementos verticalmente en Flexbox (`center`, `stretch`).

---

## 6. ¿Qué es un selector en CSS y qué tipos existen?

Un **selector en CSS** es el patrón o la regla que le indica al navegador a qué elemento o conjunto de elementos de la página HTML se le deben aplicar los estilos visuales. Funciona como una "dirección" que busca y encuentra las etiquetas específicas dentro del documento.

### Tipos de selectores en CSS

#### Selectores básicos
* **Selector universal (`*`):** Selecciona absolutamente todos los elementos de la página.
* **Selector de tipo o etiqueta (`p`, `h1`, `div`):** Selecciona todas las etiquetas HTML que coincidan con ese nombre.
* **Selector de clase (`.nombre-clase`):** Selecciona los elementos que tengan el atributo `class="nombre-clase"`. Se utiliza un punto (`.`) al inicio.
* **Selector de ID (`#nombre-id`):** Selecciona el elemento único que tenga el atributo `id="nombre-id"`. Se utiliza un numeral (`#`) al inicio.

#### Selectores combinadores
* **Descendiente (espacio):** Selecciona elementos dentro de otros (sin importar el nivel de profundidad).
* **Hijo directo (`>`):** Selecciona solo los elementos que son hijos directos de otro.

#### Pseudo-clases y Pseudo-elementos
* **Pseudo-clases (`:hover`, `:focus`, `:first-child`):** Estilizan elementos según un estado específico o interacción del usuario.
* **Pseudo-elementos (`::before`, `::after`):** Permiten insertar o estilizar una parte específica de un elemento.

---

## 7. ¿Qué es JavaScript y cómo añade interactividad a las páginas web?

**JavaScript** es el lenguaje de programación estándar que se ejecuta directamente en los navegadores web. Mientras que HTML se encarga de la estructura de una página y CSS del diseño visual, JavaScript le otorga comportamiento dinámico e interactividad en tiempo real sin necesidad de recargar la página.

### Mecanismos de interactividad
1. **Manipulación del DOM (*Document Object Model*):** El navegador representa el archivo HTML como un árbol de objetos. JavaScript puede seleccionar, modificar, agregar o eliminar cualquier elemento, texto o estilo CSS de forma dinámica.
2. **Manejo de eventos:** Escucha las acciones del usuario (clic en un botón, mover el cursor, presionar una tecla, desplazar la página) y ejecuta bloques de código específicos en respuesta a esas acciones.
3. **Peticiones asíncronas (AJAX / Fetch API):** Permite enviar o recibir datos desde un servidor web en segundo plano para actualizar partes específicas de la pantalla sin refrescar la pestaña.

---

## 8. ¿Cuáles son los tipos de datos primitivos en JavaScript?

* `String` (Cadena de texto): Representa texto delimitado por comillas simples, dobles o invertidas.
* `Number` (Número): Representa números enteros y de punto flotante (decimales).
* `Boolean` (Booleano): Representa un valor lógico que solo puede ser verdadero o falso (`true` o `false`).
* `Undefined` (No definido): Es el valor asignado automáticamente a una variable que ha sido declarada pero aún no tiene un valor asignado.
* `Null` (Nulo): Representa la ausencia intencional de cualquier valor o referencia de objeto.
* `BigInt` (Entero grande): Se utiliza para representar números enteros arbitrariamente grandes que superan el límite del tipo `Number`.
* `Symbol` (Símbolo): Produce un valor único e inmutable, utilizado principalmente para crear claves únicas en objetos.

---

## 9. ¿Cómo funcionan las estructuras de control de flujo en JavaScript?

Por defecto, JavaScript lee y ejecuta el código en orden, de arriba hacia abajo. Las estructuras de control rompen o dirigen esa secuencia lineal:

* **Condicionales (`if`, `else if`, `else`):** Evalúan si una condición es verdadera (`true`) o falsa (`false`). Si es verdadera, ejecutan un bloque de código; si no, pasan de largo o ejecutan un bloque alternativo.
* **Selección múltiple (`switch`):** Evalúa una sola variable y la compara contra múltiples casos posibles (`case`). Es ideal cuando tienes muchas opciones fijas para evitar usar demasiados `if` anidados.
* **Bucles (`for`, `while`):** Repiten un bloque de código varias veces. El bucle `for` se usa cuando sabes de antemano cuántas veces quieres repetir la acción; `while` se usa cuando quieres repetir algo mientras se cumpla una condición.

---

## 10. ¿Por qué es importante usar nombres significativos para variables y métodos?

Usar nombres significativos es fundamental porque **el código se lee muchas más veces de las que se escribe**. Un código con nombres claros se vuelve autodocumentado, lo que facilita su lectura, mantenimiento y corrección.

### Beneficios principales
* **Legibilidad:** Explica la intención del programador sin necesidad de agregar comentarios excesivos.
* **Mantenibilidad:** Facilita que tú u otros desarrolladores hagan cambios o solucionen errores en el futuro rápidamente.
* **Reducción de errores:** Evita confusiones entre datos de distinto tipo o propósito.

---

## 11. ¿Qué es una variable de entorno y por qué es importante?

Una **variable de entorno** es un valor dinámico que se almacena directamente en el sistema operativo o en el servidor donde se ejecuta una aplicación, en lugar de escribirse directamente en el código fuente.

### Importancia
*  **Seguridad:** Protegen datos sensibles (claves API, contraseñas de bases de datos, tokens). Evitan subir credenciales accidentalmente a repositorios públicos de GitHub.
*  **Portabilidad y Ambientes:** Permite que el mismo código se comporte diferente según el entorno (Desarrollo, Pruebas o Producción) cambiando únicamente la configuración externa.
*  **Mantenibilidad:** Si un parámetro cambia, solo modificas la variable de entorno sin necesidad de alterar el código fuente.

---

## 12. ¿Qué son las herramientas de desarrollo de Chrome y cómo se accede a ellas?

Las **Chrome DevTools** son un conjunto de utilidades integradas directamente en el navegador Google Chrome. Permiten inspeccionar el código HTML, editar estilos CSS en tiempo real, depurar código JavaScript, monitorear el rendimiento y analizar las peticiones de red.

### Formas de acceso
* **Atajo de teclado (Windows / Linux):** Presiona `F12` o `Control + Shift + I`.
* **Atajo de teclado (Mac):** Presiona `Command + Option + I`.
* **Menú contextual:** Clic derecho sobre cualquier elemento de la página -> **Inspeccionar**.
* **Menú de Chrome:** Tres puntos verticales (superior derecha) -> **Más herramientas** -> **Herramientas para desarrolladores**.

---

## 13. ¿Qué se puede hacer en el panel "Elements" de las DevTools?

El panel **Elements** es la herramienta principal para inspeccionar y manipular la estructura visual de una página web en tiempo real.

### Principales acciones
1. **Inspeccionar y editar el HTML:** Doble clic en cualquier etiqueta o texto para modificarlo al instante.
2. **Modificar y probar estilos CSS:** En el panel lateral (*Styles*), puedes añadir o cambiar propiedades de CSS para ver los resultados en vivo.
3. **Inspeccionar el Modelo de Caja (*Box Model*):** Permite ver gráficamente los valores de `margin`, `border`, `padding` y `width`/`height`.
4. **Simular estados de interacción:** Permite forzar estados visuales como `:hover`, `:focus` o `:active`.

---

## 14. ¿Cómo se utiliza el panel "Console" y para qué es útil?

El panel **Console** es un entorno interactivo de ejecución de JavaScript dentro del navegador. Funciona como un canal de comunicación directo entre tu código y tú.

### Utilidad principal
* **Depurar errores (*Debugging*):** Muestra errores de sintaxis, rutas fallidas o fallos de ejecución.
* **Probar código al instante:** Permite ejecutar fragmentos de JavaScript directamente en el navegador.
* **Monitorear valores:** Muestra información y variables mediante comandos como `console.log()`.

---

## 15. ¿Qué información se puede obtener del panel "Network" y por qué es importante?

El panel **Network** registra todas las peticiones y respuestas de red que realiza la página web desde que empieza a cargar o cuando interactúas con ella.

### Información clave
* **Archivos descargados:** Muestra cada recurso cargado (HTML, CSS, JS, imágenes, fuentes y peticiones a APIs).
* **Estado de la respuesta (*Status Code*):** Indica si la petición fue exitosa (`200 OK`), si no se encontró (`404 Not Found`) o si hubo un error de servidor (`500 Internal Server Error`).
* **Tiempos de carga y rendimiento:** Muestra gráficos (*Waterfalls*) que indican cuánto tarda en descargarse cada archivo.
