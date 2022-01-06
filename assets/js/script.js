// Arreglo de respuestas correctas

respuestas_correctas = {
    'pregunta_1' : 'respuesta_1',
    'pregunta_2' : 'respuesta_3',
    'pregunta_3' : 'respuesta_1',
    'pregunta_4' : 'respuesta_2'
}
    
// Capturar click del usuario al presionar siguiente

let pregunta_1 = document.getElementById("pregunta_1");
console.log(pregunta_1); 

// nextButton = document.getElementById("backButton")



document.addEventListener('click', function(evento){
    let respuesta_pregunta_1 = document.getElementsByName("respuesta")
    //console.log(respuesta_pregunta_1);
    //alert('respuesta usuario');

    respuesta_pregunta_1.forEach(element => {

        console.log(element.checked);
    });
    
})