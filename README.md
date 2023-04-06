---
## Tabla de contenidos

1. [Integrantes del Equipo](#Integrantes-del-Equipo)
2. [Información General](#Información-General)
3. [Ejecución y Configuración del Proyecto](#Ejecución-y-Configuración-del-Proyecto)
---

### 1. Integrantes del Equipo <a name="Integrantes-del-Equipo"></a>

1.  Integrantes del Equipo

Equipo: NerdDigital

Integrantes:

- Manuel Fernando Pinot Friz https://github.com/Manpif/calculadora.frontend 
- Soledad Manríquez Godoy https://github.com/soledad-manriquez/calculadora.frontend
- Gonzalo Alonzo
- Nehemias Marvic Muñoz Monsalves https://github.com/Nehemias-Munoz/calculadora.frontend

---

### 2. Información General <a name="Información-General"></a>

Nombre del proyecto
Sprint Módulo 2: "Yo Quiero Otro Mundo”
Proyecto enfocado en la creación de una calculadora funcional, con operaciones matemáticas básicas como la suma, resta, multiplicación y división.
Ademas de funciones como borrar todo o solo el ultimo caracter.

---

### 3. Ejecución y Configuración del Proyecto <a name="Ejecución-y-Configuración-del-Proyecto"></a>

Este código es una parte de la implementación de la funcionalidad de una calculadora en una aplicación web. A continuación, se explicará qué hace cada parte del código:

- let botones = document.getElementsByClassName("btn-outline-info");: Esta línea de código busca todos los elementos HTML que tienen la clase "btn-outline-info" y los almacena en un array llamado "botones".

- let botones_operadores = document.getElementsByClassName("operator");: Esta línea de código busca todos los elementos HTML que tienen la clase "operator" y los almacena en un array llamado "botones_operadores".

- let result = document.getElementById("result");: Esta línea de código busca el elemento HTML que tiene el id "result" y lo almacena en la variable "result".

- let data = [];: Esta línea de código crea un array vacío llamado "data" que se utiliza para almacenar los valores introducidos en la calculadora.

- El siguiente bloque de código utiliza dos bucles "for" para recorrer los arrays "botones" y "botones_operadores" y añadir un evento "click" a cada elemento. Este evento llama a la función "addCharacter()" y pasa como parámetro el texto del botón que se ha pulsado.

- function addCharacter(char): Esta función recibe un carácter como parámetro y lo añade al array "data" si el último elemento del array no es un punto ".". Si el último elemento del array es un punto y se introduce otro punto, no se añade al array. Después de añadir el carácter al array, se llama a la función "refresh()" para actualizar la pantalla de la calculadora.

- function clearTotalChars(): Esta función vacía el array "data" y llama a la función "refresh()" para actualizar la pantalla de la calculadora.

- function clearOneChar(): Esta función elimina el último carácter introducido en la calculadora del array "data" y llama a la función "refresh()" para actualizar la pantalla de la calculadora.

- function convertToString(): Esta función convierte el array "data" en una cadena de texto y la devuelve.

- function refresh(): Esta función actualiza el valor del elemento HTML con id "result" con la cadena de texto generada por la función "convertToString()".

- function getResult(): Esta función evalúa la expresión introducida en la calculadora utilizando la función "eval()" de JavaScript y muestra el resultado en el elemento HTML con id "result". También vacía el array "data" y añade el resultado como único elemento del array.
