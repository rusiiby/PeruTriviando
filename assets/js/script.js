// Arreglo de respuestas correctas

respuestas_correctas = {
    'pregunta_1' : 'respuesta_1',
    'pregunta_2' : 'res_3'
};
    
// // Capturar click del usuario al presionar siguiente

// let pregunta_1 = document.getElementById("pregunta_1");
// console.log(pregunta_1); 

// // nextButton = document.getElementById("backButton")
// let intro = document.getElementById("intro");
// console.log(intro);
// let btnjugar = document.getElementById("botonJugar");
// console.log(btnjugar);
// let pregunta1 = document.getElementById("pregunta_1")
// btnjugar.addEventListener('click', function(){
//     pregunta1.style.setProperty("display","block");
//     intro.style.setProperty("display","none");

    
// })

//Captura de elementos por ID 

let play = document.getElementById("button-play");
let intro = document.getElementById("intro");
let siguiente = document.getElementById("next");
let pregunta_1 = document.getElementById("pregunta_1");
let botones = document.getElementById("buttons");
//console.log(pregunta_1.id);
var res_preg_1 = document.getElementsByName("respuesta_pregunta_1");
console.log(res_preg_1);

// Recorre los inputs de cada pregunta y compara los ids de respuestas correctas con el id de cada respuesta de la pregunta 1

res_preg_1.forEach(element => {
    // Recorremos el arreglo de inputs y mostramos uno a uno en consola
    console.log(element);
    
    element.addEventListener("click", function(event){
        console.log(element.id);
        if(element.id == respuestas_correctas["pregunta_1"]){
            alert("Respuesta Correcta!");
        }else{
            alert("Respuesta Incorrecta, intenta otra vez :(");
        }
    })
});



// Recorre los inputs de cada pregunta y compara los ids de respuestas correctas con el id de cada respuesta de la pregunta 2

let pregunta_2 = document.getElementById("pregunta_2");
console.log(pregunta_2.id);
var res2 = document.getElementsByName("res_2");
console.log(res2);

res2.forEach(element => {
    element.addEventListener("click", function(event){
        console.log(element.id);
        if(element.id == respuestas_correctas["pregunta_2"]){
            alert("Respuesta Correcta!");
        }else{
            alert("Respuesta Incorrecta, intenta otra vez :(");
        }
    })
});

// Dar inicio al juego

play.addEventListener("click", function(){
    intro.style.display = "none";
    pregunta_1.style.display = "block";
    botones.style.display = "block";

})

//Pasar a la siguiente pregunta

siguiente.addEventListener("click", function(){
    pregunta_1.style.display = "none";
    pregunta_2.style.display = "block";
});


