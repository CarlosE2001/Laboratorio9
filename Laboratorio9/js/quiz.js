const QUIZ_CONTAINER_ID = "container";
const INPUT = "inputNumber";
const MODAL = "modal";

const Pregunta =  {
    pregunta: "",
    respuesta: ""
}

function mostrarPreguntas(){
    let value = document.getElementById(INPUT).value;
    console.log(value);
    let preguntas = [];
    const container = document.getElementById(QUIZ_CONTAINER_ID);
    container.innerHTML = "";
    for(i = 0; i < value; i++){
        let randomA = Math.round(Math.random() * 100);
        let randomB = Math.round(Math.random() * 100);

        let span = document.createElement("span");
        let p = document.createElement("p");
        let input = document.createElement("input");
        
        input.type = "number";
        p.innerHTML = (i + 1)  + ") " + randomA + " + " + randomB + " = ";
        p.appendChild(input);

        span.appendChild(p)
        container.appendChild(span);
    }

    let span = document.createElement("span");
    let ver = document.createElement("input");
    let revisar = document.createElement("input");

    ver.type = "button";
    ver.value = "Ver Respuestas"
    ver.classList.add("btn");
    ver.addEventListener("click", triggerModal);


    revisar.type = "button";
    revisar.value = "Revisar";
    revisar.classList.add("btn");
    revisar.addEventListener("click", triggerModal);

    span.appendChild(ver);
    span.appendChild(revisar);
    container.appendChild(span);
}

function triggerModal(){
    console.log("MOdal triggered")
    let modal = document.getElementById(MODAL);
    modal.removeAttribute("style");
    console.log(modal.style.display);
    if(modal.style.display === "absolute"){
        ocultarModal();
    }else{
        mostrarModal();
    }
}


function mostrarModal(){
    let modal = document.getElementById(MODAL);
    modal.style.display = "absolute";
}

function ocultarModal(){
    let modal = document.getElementById(MODAL);
    modal.style.display = "none";
}

