# Course Notes

## Sección 3 - Analizar el rendimiento de arreglos y objetos

### Objetivos
- Comprender cómo funcionan los objetos y los arreglos a través de la lente de Big-O.
- Explicar por qué agregar elementos al comienzo de un arreglo en costoso y hablar sobre por qué es así, cómo funciona y si hay alternativas o una mejor manera de insertar.
- Comparar y contrastar el tiempo de ejecución para arreglos y objetos, pero también están integrados en métodos. Hay muchos de estos métodos que obtenemos de forma gratuita.

### El Big-O de los Objetos
Comencemos hablando de objetos que hablan de ellos a través de la lente de Big-O y el rendimiento.
Lo principal es que los objetos son estructuras de datos desordenadas y todo se almacena en pares clave-valor.
Por ejemplo, como este objeto literal que estamos almacenando en una variable llamada instructor:
```
let instructor = {
  fistName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [ 1, 2, 3, 4 ]
}
```

Los objetos funcionan bien cuando no necesitamos orden, y cuando deseamos acceder rápido, insertar y extraer.
Cuando hablamos de "rápido", estamos hablando del tiempo constante para la eliminación, inserción y acceso a los datos.
- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(1)

Cuando no necesitas orden, los objetos son una excelente opción.

### Big-O de los métodos de objetos
- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty - O(1)

En resumen, los objetos son realmente rápidos para casi todo. Sin embargo, no hay orden y veremos la aparición de arreglos. 
Los arreglos pueden ser bastante rápidos para muchas cosas, pero el orden tambíen puede relentizarlos dependiendo de lo que estamos haciendo.
A nedida que el objeto crece, también lo hace el número de operaciones, la cantidad de tiempo que lleva compilarlas.

### Algunas preguntas
1. ¿Cuál es el Big-O para agregar una clave y un valor a un objeto?
R: O(1)

2. ¿Cuál es el Big-O para acceder a una clave en un objeto?
R: O(1)

3. ¿Cuál es el Big-O para quitar una clave en un objeto?
R: O(1)


## ¿Cuándo son lentos los arreglos?
El gran punto de venta de los arreglos, por supuesto, es que están ordenados porque hay un orden intrínseco a los datos a diferencia de un objeto donde las cosas flotan en una masa gelatinosa. Y eso a menudo es muy útil si necesitamos un pedido, pero puede tener un costo para algunas de las operaciones.

```
let names = [ 'Michael', 'Melissa', 'Andres' ];
let values = [ true, {}, [], 2, 'awesome' ];
```
De todos modos, aquí hay dos arreglos diferentes, por supuesto, puede almacenar lo que quiera y hay diferentes tipos de datos. Cada elemento tiene un índice, un valor que le corresponde.

### ¿Cuándo utilizar Arreglos?
- Cuando necesitamos un orden: Si no necesita un orden, entonces probablemente no quiera usar un arreglo si solo está tratando de almacenar datos aleatorios juntos. Se podría usar un arreglo, pero si realmente está tratando de optimizar el rendimiento, hay otras opciones. E incluso si necesita orden, veremos algunas otras estructuras surgiendo como una lista individualmente vinculada y una lista doblemente vinculada que todavía codifica el orden. Es una estructura de lista donde cada elemento está en un lugar particular y todos están conectados en un orden. Pero a veces pueden funcionar mejor que los arreglos, según lo que necesite. Por lo tanto, los arreglos no son la única estructura de datos de orden en la tierra. Son solo los únicos que obtenemos de forma gratuita en JavaScript, de todos modos, el enlace viene más adelante. 
- Cuando necesita acceso / inserción y extracción rápidos: Cuando necesite un pedido, puede usar una variedad, por supuesto, pero a menudo puede tener un conto dependiendo de lo que intente hacer, especialmente en lo que respect a la inserción y extracción, puede complicar las cosas. Por lo tanto, acceder a los datos en un arreglo siempre es muy rápido. Puede ver aquí. El acceso es O(1) exactamente igual que cuando hablamos en un objeto
* Insertion - depende...
* Removal - depende...
* Searching - O(N)
* Access - O(1)

```
                0            1          2
let names = [ 'Michael', 'Melissa', 'Andres' ];
```
Cuando hablamos de acceso, lo que quiere decir es que si tenemos este arreglo con con tres elementos llamado names. Si pido nombres de 2, es un tiempo constante de darme "Andrea". Entonces, una idea errónea que he visto que muchos estudiantes tienen cuando tienes un arreglo de 10000 elementos y piden el elemento 9000, digamos que JavaScript no está pasando por cada elemento al contar hasta 9000 y acceder a cada elemento y luego obtener el que necesita y dárselo. Puedes pensar que hay un atajo directo a cada elemento. El arreglo puede saltar inmediatamente a los datos, por lo tanto, no importa cuánto dura el arreglo, no importa si está mirando el último elemento, el elemento central o el primer elemento. El tiempo es constante.

```
                 0           1          2       3
let names = [ 'Michael', 'Melissa', 'Andres', 'Raj' ];
```
Hablemos de inserción y extracción. Realmente depende de dónde estamos insertando. Comenzando con la inserción, tiene que ver con este orden como se ha mencionado. Cada elemento tiene un índice que le corresponde y si quiero agregar algo pero decir que quiero agregar el nombre "Raj", si lo agrego hasta el final, como en el ejemplo, presionando sobre este arreglo, el tiempo constante es O(1) y eso es porque realmente no hay nada, podemos agregar al final del arreglo y le damos un nuevo índice. Es algo así como agregar a un objeto, es tiempo constante, es muy simple. El problema surge cuando intentamos insertar al comienzo de un arreglo y la razón tiene que ver con estos índices.

```
                0       1          2         3
let names = [ 'Raj', 'Michael', 'Melissa', 'Andres' ];
```
Si ententamos insertar a Raj al inicio, ya se puede ver lo que pasa. Michael ya no es el elemento 0, Melissa no es el elemento 1 y Andrea ya no es el elemento 2. Por lo tanto, tenemos que volver a indexar cada elemento del arreglo y esto es simple para un arreglo de 4 elementos. Pero si estamos hablando de miles y miles de elementos, reindexar cada uno de ellos no es una tarea trivial.
Entonces, si estamos insertando al comienzo de un arreglo, estamos hablando del O del tiempo final porque tenemos que hacer algo una vez aproximadamente por cada elemento. La cantidad de tiempo que tarda aproximadamente crece en proporción con el tamaño del arreglo. Así que insertando al principio es problemático. Lo mismo vale para eliminar desde el principio. Entonces, si tenemos Raj al pricipio, digamos que esta es nuestra configuración. Tenemos que volver a indexar nuevamente en la otra dirección que necesitamos para establecer el índice de Michael a 0 y todos los siguientes bajan un índice. Agregar o eliminar desde el principio de un arreglo es mejor evitarlo si se puede. Pero a menudo es significativo agregar al comienzo de un arrglo. Si está tratando de poner algo al comienzo del pedido, por ejemplo, es posible que deba decir que no estoy diciendo que deba evitarlo a toda costa. Es bueno tener en cuenta que no es tan eficiente como tener la eliminación al final. Push y Pop simpre serán más rápidos que shift y unshift. A menos, por supuesto, que sea un arreglo vacío, en cuyo caso agregar al principio o al final es lo mismo.

Entonces, la inserción y extracción depende de dónde estamos insertando, siempre insertar o quitar desde el principio es peor que al final. El acceso es rápido sin importar dónde. Si estamos hablando de 10000 elementos, acceder al elemento medio es tan rápido cmomo acceder al segundo elemento y luego buscar lo más rápido que podemos es O(N), discutiremos esto en la sección de búsqueda. Todos escribimos nuestra propia búsqueda básica en JavaScript si estamos hablando de un arreglo no ordenada donde no hay orden en los datos. Si queremos saber si hubiera otros 10000 nombres aquí y quisiera saber si "Robbie" estaba allí, tenemos que verificar potencialmente cada elemento. Entonces, a medida que la cantidad de elementos crece en es Arreglo, tambíen lo hace ele tiempo potencialmente necesario para encontrar ese elemento. La búsqueda crece O(N). Igualmente, pasaremos mucho más tiempo hablando sobre la búsqueda y las posibles optimizaciones que puede hacer especificamente cuando se ordenan sus datos, pero eso surge más tarde.

### El Big-O de los métodos de los arreglos
En este punto, vamos a tocar algunos de los métodos de Arreglos integrados. Hay muchos de ellos y quiero enfatizar que no necesita saber ni memorizar ninguna de esta información, pero espero que tenga sentido cómo llegamos a los números cuando hablamos de notación Big-O.

#### Big-O de operaciones sobre arreglos
- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N * log N)
- forEach/map/filter/reduce/etc - O(N)

No necesita saber todo esto, pero echemos un vistazo. Los primeros cuatro que ya hemos discutido tal vez no por su nombre, pero push y pop son constantes agregando y eliminando datos al final del arreglo de cualquier arreglo, ya sea un elemento o 10000 o 1000000 de elementos, es constante. Es fácil, no hay reindexación involucrada. Simplemente lo ponemos al final y le damos un lugar. Por otro lado, shift y unshift son un poco más problemáticos porque potencialmente tenemos que volver a indexar, no necesariamente tendremos que volver a indexar cada elemento del arreglo si está agregando al principio o eliminando desde el principio. Entonces, a medida que la cantidad de elementos aumenta a 1000 o a 1000000, la cantidad de elementos que tenemos que volver a indexar es directamente proporcional.

A continuación tenemos esta pequeña porción de concat, slice y splice.
#### Concat
Concat toma múltiples arreglos y los combina. Así que el tiempo que tomará crece en proporción al tamaño total del nuevo arreglo al final.

#### Slice
El Slice devolverá una copia de una parte de un arreglo o la totalidad si así lo desea. Entonces, en este caso, se refiere al hecho de que si tratamos de copiar 10 elementos de 1000 elementos de un arreglo, la cantidad de tiempo que toma aumenta en proporción con ese tamaño. Qué tan grande de una copia o cuántos elementos estamos tratando de copiar.

#### Splice
El splice va a eliminar y agregar nuevos elementos y es un poco diferente porque es bastante versátil. Entonces podemos insertar al comienzo de un arreglo, también podemos insertar al final de un arreglo y podemos reemplazar elementos. Pero en general es O(N), si insertamos en medio del arreglo eso significa cambiar y volver a indexar todo lo que viene después. Entonces, en general, muchas de las cosas que funcionan con arreglos son O(N).

Por lo tanto, puede ver casi todo lo que podríamos hacer con un arreglo, todos los métodos incorporados, no todos, sino todos los que se enumeran aquí.
Y la clasificación lleva más tiempo y luego push y pop son súper rápidos al igual que el acceso básico usando un índice, es un tiempo constante y son mucho más rápidos que agregar o eliminar desde el pricipio.

Recapitulando, no es necesrio saber todo esto, realmente las principales conclusiones entre los objetos y los arreglos.
1. Los objetos son más rápidos en casi todo, pero no hay orden.
2. Los Arreglos son geniales cuando necesite un orden. pero aún así tenga en cuenta que es mejor si puede hacerlo para agregar o eliminar desde el final y evitar agregar y eliminar del inicio porque eso inicia este efecto cascada. Lo mismo se aplica a la adición o eliminación desde el medio

Esto es realmente una introducción para más adelante y llegamos a cosas como la clasificación o cuando hablemos de listas de longitud y cómo también son una estructura de datos ordenada. Pero podemos agregar y eliminar desde el principio y no hay problema, es tiempo constante

### Algunas preguntas
1. ¿Cuál es el Big-O para insertar en un arrelog (push)?
R: O(1)

2. ¿Cuál es el Big-O para cambiar un arreglo (shift)?
R: O(N)

3. ¿Cuál es el Big-O para la función forEach?
R: O(N)
