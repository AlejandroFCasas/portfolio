//variables
const listaTareas = document.getElementById('lista-tareas');

//pedir nombre de usuario al inicio
//Agregar mensaje de bienvenida; 
//MOSTRAR MENSAJE DE ERROR ANTE TAREA VACÍA
//buscar si hay tarea duplicada al momento de ingresar una nueva tarea





// event Listeners

eventListeners();

function eventListeners(){
    document.querySelector('#formulario').addEventListener('submit',agregarTarea);

    listaTareas.addEventListener('click', borrarTarea);

    document.addEventListener('DOMContentLoaded', localStorageListo)
}




//funciones
function agregarTarea(e){
    e.preventDefault();
    //leer el valor del text area
    const tarea = document.getElementById('tarea').value;

    const botonBorrar = document.createElement('a');
    
    botonBorrar.classList = 'borrar-tarea';

    botonBorrar.innerText = 'X';
    //crear elemento y añadir el contenido a la lista


    const li = document.createElement('li');
    li.innerText=tarea;

    li.appendChild(botonBorrar);
    listaTareas.appendChild(li);
    
    console.log(tarea);

    agregarTareaLocalStrorage(tarea);

}

function borrarTarea(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tarea'){
        e.target.parentElement.remove();
        borrarTareaLocalStorage(e.target.parentElement.textContent);
        console.log(e.target.parentElement.textContent);

    }
}

function agregarTareaLocalStrorage (tarea){
    let tareas;
    tareas = obtenerTareasLocalStorage();
    tareas.push(tarea);
    //tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    
    


}

function localStorageListo   (){
    let tareas;
    
    tareas = obtenerTareasLocalStorage();
    tareas.forEach(function(tarea){
        const botonBorrar = document.createElement('a');
        
        botonBorrar.classList = 'borrar-tarea';

        botonBorrar.innerText = 'X';
        //crear elemento y añadir el contenido a la lista


        const li = document.createElement('li');
        li.innerText=tarea;

        li.appendChild(botonBorrar);
        listaTareas.appendChild(li); 

    });

}

function obtenerTareasLocalStorage (){
    let tareas;
    if (localStorage.getItem('tareas') === null ){
        tareas = [];


    }else {
        tareas = JSON.parse(localStorage.getItem('tareas'));

    }
    return tareas;



}


function borrarTareaLocalStorage (tarea){
    let tareas, tareaBorrar;
    tareaBorrar = tarea.substring(0, tarea.length-1); 
    tareas = obtenerTareasLocalStorage();
    tareas.forEach(function(tarea, index){
        if(tareaBorrar === tarea){
            tareas.splice(index, 1);
        }
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}




