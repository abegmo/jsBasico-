// Los loops (bucles/ciclos), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.

//1.Este es nuestro array
var estudiantes = [ 'Maria', 'Sergio', 'Rosa', 'Daniel' ]; 

//2.Esta es la tarea que realizara nuestro loop:
function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//3. Este es nuestro Loop - recuerda que " i " es una variable
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

// saludarEstudiante(estudiantes[i]) Paso a Paso: Mandamos a llamar nuestra "function" - saludarEstudiante. 2. estudiantes[i]. 2.1 "estudiantes" es nuestro array. "estudiantes[i]" Llamamos un elemento segun la posicion del index. en este caso sería la variable [i] que le dimos un valor de 0, acorde se repita el loop aumentara y cambiara el nombre

//--------------------Otra Manera de Resolverlo---------------------------------

for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}

// Otra manera de realizarlo es la siguiente: (var estudiante of estudiantes). 
// Paso a paso: (1) estudiante vendria a ser el parametro individual que mandariamos a llamar de nuestro array estudiantes. 
// (2)saludarEstudiante(estudiante). Sería llamar nuestra funcion, con el parametro estudiante - estudiante vendría a ser el parametro individual/index0 que llamariamos de nuestro for



while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea

    var estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.

    saludarEstudiante(estudiante);
}




// Paso a paso:
// 1. Mientras la condicion de longitud sea mayor a 0, todo lo que se pasa como argumento sucedera.
//2. estudiantes.shift(); es un metodo que saca un elemento del array de la posición hasta el ultimo. Pop() es del ultimo al primero.
//3. Luego llama a la function 
