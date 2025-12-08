# Desafío Fullstack Entry / Jr 2025


- [Objetivo](#objetivo)
- [Entregable](#entregable)
- [¿Qué debe hacer tu app?](#qué-debe-hacer-tu-app)
- [Código base](#código-base)
- [Especificaciones](#especificaciones)
  - [Contexto: ¿Qué hace Bloom Reuse?](#contexto-qué-hace-bloom-reuse)
  - [Marcas a implementar](#marcas-a-implementar)
  - [Preguntas frecuentes a implementar](#preguntas-frecuentes-a-implementar)
- [¿Dudas?](#dudas)



## Objetivo

Debes crear una app que al seleccionar una marca, muestre la sección de **preguntas frecuentes para vendedores** según su configuración. Dentro del repo encontrarás el código base de frontend y backend que debes modificar.


## Entregable

1. **Código:** haz un fork, súbelo a tu GitHub y agrega a `@fvr1` y `@imant1`. Envía el link a `devs@bloomreuse.com` con tu nombre en el asunto.

2. **Explicación:** en el README agrega una explicación cortita respondiendo las siguientes preguntas:

   * ¿Qué archivos/componentes creaste y qué hacen?
   * ¿Qué te gustó y qué mejorarías?
   * ¿Qué harías distinto para escalar mejor?

3. **Plazo:** 7 días desde que recibes esta tarea.

4. **Criterios de evaluación:** Correcta visualización de preguntas frecuentes por marca. Separación clara de responsabilidades, carpetas y archivos en tu código. Capacidad de análisis técnico: pros, contras, mejoras.

5. **Bonus:** Agrega un video o link demo mostrando la solución.

> ⚠️ Siéntete libre de modificar / refactorizar / agregar / eliminar lo que sea.




## ¿Qué debe hacer tu app?

1. Al abrir, el usuario selecciona una marca.
2. Luego, se muestran las preguntas frecuentes correspondientes a esa marca.
3. El contenido debe variar según lo definido en las siguientes [especificaciones](#marcas-a-implementar).

Se debería ver algo como esto:

<img src="./example.png" height="200" />




## Código base

Puedes modificar libremente cualquier archivo del proyecto, agregar librerías, usar tu IA favorita para programar. Lo importante es que entregues una **versión 0.1 funcional**, y luego nos expliques tu solución. El código base incluye:

#### Backend

Express + TS. Estructura del backend:

* `/data`: **simula** la base de datos.
* `/models`: define los tipos. Simula el modelo de una tabla en la base de datos.
* `/services`: contiene lógica de negocios y para leer los datos.
* `/api`: endpoints. Contiene `GET /brands` para listar de marcas y `GET /brands/:id` para obtener la configuración de una marca.

Deberás crear un modelo `BrandSetting` para configurar cada marca y completar los datos según tu modelo.

#### Frontend

Template de App Next.js con React y Tailwind. Debes:

1. Permitir selección de marca.
2. Mostrar las preguntas frecuentes según configuración.




## Especificaciones

### Contexto: ¿Qué hace Bloom Reuse?

Levantamos y administramos el recommerce (resale+ecommerce) de distintas marcas. Cada app web que creamos tiene una configuración, lógica e interfaz de usuario específica para cada marca. Pero todo esto se logra utilizando el mismo código de frontend y backend para todas las marcas. 

El flujo principal para hacer una venta a través de unas de las marcas de Bloom es el siguiente:
1. El vendedor crea una cuenta y publica un producto para la venta, el cual primero debe ser aprobado por el equipo de Bloom.
1. Cuando se vende, el vendedor completa un formulario con los datos de envío y cómo quiere recibir el pago. Envía el paquete al comprador.
1. Al confirmarse la recepción del paquete por parte del comprador, se realiza el pago al vendedor.
1. En caso que el comprador quiera una devolución, se envía el producto devuelta al vendedor y no se realiza el pago.


### Marcas a implementar

1. [Karyn Coo](https://karyncoo.bloomreuse.com/help/faq?view=seller): reventa de ropa, el producto se envía directamente al comprador. El envío puede ser con retiro a domicilio o por Blue Express. El vendedor puede recibir el pago por el 100% en un cupón de descuento (créditos) o el 80% por transferencia bancaria. 

2. [Andesgear](https://circular.andesgear.cl/help/faq?view=seller): reventa outdoor, el producto se envía directamente al comprador. El envío puede ser con retiro a domicilio o por Blue Express. El vendedor únicamente puede recibir el pago por transferencia bancaria.

3. [Roda](https://rodamarket.cl/help/faq?view=seller): reventa de bicicletas para niños. Solo existe la opción de retiro a domicilio como forma de envío; no se puede enviar el producto por Blue express. El vendedor puede recibir el pago por el 100% en un cupón de descuento (créditos) o el 80% por transferencia bancaria.

4. [Kokoro](https://vintage.kokoro.cl/help/faq?view=seller): reventa de ropa, el producto **siempre** debe pasar por el taller de Kokoro para su revisión. En caso que no esté limpio,  el costo de la tintorería se descuenta del pago al vendedor. El envío puede ser con retiro a domicilio o por Blue Express. El vendedor puede recibir el pago por el 100% en un cupón de descuento (créditos) o el 80% por transferencia bancaria.

**Nota:** para efectos de este desafío, el texto a implementar puede ser levemente distinto a lo que aparece en producción. En ese caso, usa el criterio que aparece en el enunciado del desafío.

### Preguntas frecuentes a implementar

1. ¿Cómo puedo publicar un producto para la venta?

* Modalidad: Única para todas las marcas.
* Respuesta: ¡Publicar tu producto es muy fácil! Simplemente haz clic en "Vender", crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, la publicación será revisada por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. Después de ser revisada y aprobada, se hará pública. Si hay algún problema, recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada.

2. ¿Cómo envío mi artículo después de que alguien lo compra?

* Respuesta: *Depende de logística de cada marca.*

3. ¿Cómo y cuándo recibo el pago?

* Respuesta: *Depende de la opción de pago al vendedor que está habilitada.*

4. ¿Hay cobros adicionales por vender mi producto por acá?

* Respuesta: *Depende de la logística de la marca .*

5. Política de uso de cupones

* Modalidad: La pregunta únicamente se muestra para las marcas que tengan habilitados los cupones como método de pago. La respuesta es igual para todas las marcas.
* Respuesta: Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones:
  a. Se pueden utilizar únicamente para compras en el sitio web `[URL de la marca]`.
  b. Tiene un tiempo máximo para ser utilizado de 6 meses.
  c. Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + \$1.000 CLP.

---

## ¿Dudas?

Escríbenos a [florencia@bloomreuse.com](mailto:florencia@bloomreuse.com) o por Telegram a [@fvr01](https://t.me/fvr01).

## Solución
### Ejecución
Para ejecutar la app se deben correr los siguientes comandos en cada una de las carpetas (`/backend` y `/frontend`):
```sh
npm i
npm run build
npm start
```

Importante! Si se inicia el front y se visita home sin levantar el servidor, la página quedará colgada. Se puede refrescar la página una vez levantado el servidor (backend) para arreglarlo.
### ¿Qué archivos/componentes creaste y qué hacen?
#### Frontend:
* `utils/*`: Carpeta donde cree `faqs.tsx` para armar las preguntas dependiendo de la marca. Esto ayuda a reducir el largo del archivo del componente visual de las preguntas frecuentes (`frequently-asked/[id]/page.tsx`), a separar responsabilidades y también ayuda al debugging y readability del codigo, al tener la creación de las preguntas en su propio archivo. En esta carpeta también cree interfaces de typescript para enforzar tipado en algunas variables, lo cual también permite al linter sugerir las estructuras correctas de los objetos al programar. En el futuro esta carpeta puede ser usada para crear archivos de utilidad general o que contengan funciones y variables que se usen en múltiples componentes.

* `src/app/frequently-asked/[id]/page.tsx`: Componente visual de las preguntas frecuentes. Contiene también la lógica del fetch al backend. No es la mejor práctica tener el url hardcoded, pero funciona para esta versión 0.1.

* `src/app/sell/page.tsx`: Página mock donde un usuario podrá vender sus productos. Es super simple, pero se deja para permitir flujo futuro necesitado en la app.

* **Modificaciones:** Se modifican múltiples archivos como `home.tsx` y `global.css` para mostrar las marcas necesarias en home y dar estilos adicionales a los componentes respectivamente. Decidí usar una combinación de css con tailwind para permitir distintos estilos más complejos como animaciones y generalizar estilos para algunos componentes comunes (como `li`). También agregué la librería `react-icons` y añadí las imágenes de las marcas pedidas a `public/images`.

#### Backend
* **Modelos y datos**: Modifiqué las estructuras de Brand y BrandSettings:
  ```ts
  type Brand = {
    id: string;
    name: string;
    url: string;
    img: string;
    settings?: BrandSettings;
  };

  interface BrandSettings = {
    brandId: string,
    hasCoupons: boolean,
    hasTransferPayment: boolean,
    blueExpress: boolean,
    homePickup: boolean,
    transferPaymentPercentage: number | null,
    couponPercentage: number | null,
  };
  ```
  Hay datos que a primera vista pueden parecer innecesarios como `transferPaymentPercentage`, pero decidí dejarlo implementado para generalizar el funcionamiento de las faqs. Este tipo de variable permite modificar en un futuro el porcentaje del pago que recibiría un cliente por ocupar transferencia en vez de cupones. Lo mismo con `couponPercentage`. Ambas podrían haber sido eliminadas y el código se habría simplificado un poco, pero opté por la flexibilidad a futuro.

* También tuve que modificar el tsconfig.json para que el build usara correctamente la carpeta dist/ como output.

### ¿Qué te gustó y qué mejorarías?
* Me gustó que el backend quedó super minimal. Creo que se podría mejorar generalizando aun más las marcas. Para este desafío claramente no fue necesario, pero a futuro tal vez se necesitarían más datos de cada marca, por lo que armar un modelo de datos y definir las relaciones correctas es algo esencial. Por ejemplo, BrandSettings podría perfectamente caber dentro del mismo modelo de brands. Aunque quede un poco más "sucio", al momento de pasar a un modelo sql (por ejemplo) nos ahorramos una tabla completa y un join, sacrificando el tamaño del modelo de brands.
* También me gustó que me di la libertad de añadir un par de estilos en el front para que quedara interactivo para el cliente. El estilo en general es super básico, pero pude añadir animaciones simples, lo que le da un feeling más dinámico a la página. También me gustó que pude completar el desafío solo usando un componente de preguntas, como se pedía. La función `getFaqsWithConfigs` permite generalizar las preguntas, armando el texto dependiendo de la configuración de una marca. Aún así, siento que el código se puede limpiar un poco más. La funcionalidad quedó bien y la dejé generalizada para que acepte otros casos (como distintos porcentajes de retorno del pago o configuraciones que quedaron mal puestas), pero me gustaría refactorizar para mejorar la legibilidad del código un poco más. También, estoy seguro que hay casos borde que no consideré, por lo que también se podría mejorar el manejo de errores, específicamente en la creación de las preguntas frecuentes.
* Por último, este build 0.1 aún puede mejorar también en el proceso de levantado. Si se planea funcionar como un monolito se puede perfectamente crear un docker compose o un shell script para correr el build y levantar el ambiente con un solo comando. Con esto también se facilita la futura implementación de un CI/CD.

### ¿Qué harías distinto para escalar mejor?
* En primer lugar, como mencioné en el punto anterior, revisaría el modelo de datos. Para escalar sin problemas es esencial tener claro desde el inicio qué modelos y relaciones serán necesarias para construir la app, tanto en un corto como en un mediano plazo. Es evidente que con el desarrollo salgan otros requerimientos, pero si se tiene clara la estructura desde el inicio, es más facil mapear el desarrollo y modificar las ideas iniciales para ajustarse a las necesidades del negocio.
* Lo segundo sería revisar el proceso de build y puesta en producción. Armar un CI/CD cuando la app es pequeña acelera mucho el crecimiento, ya que levantar una pipeline simple que haga build y empuje a produccion, con tests automáticos ojalá, es un proceso relativamente corto y que puede ahorrar muchos dolores de cabeza. Además, es mejor construir algo pequeño e ir construyendo sobre eso que levantar un pipeline cuando la app se complejiza.
* Por último, impondría buenas prácticas de código, como checks en las PR, Code reviews necesarias para pasar a producción, la construcción de tests a nivel de app (al menos) para chequear que nuevos cambios no rompan la app. Sería aún mejor tener tests unitarios y de integracion, pero se entiende que en una startup lo primordial es sacar features rápidas, por lo que no siempre será conveniente hacer tests al mismo tiempo que las features por el tiempo que consume, por lo menos en el ambiente de una startup. Aún así, tener un buen equilibrio entre testing y desarrollo rápido es primordial.
