//variables
const carrito = document.getElementById('carrito');
const cursos=document.getElementById('lista-cursos');
const listaCursos= document.querySelector('#lista-carrito tbody');
const vaciarCarritoBTN = document.getElementById('vaciar-carrito'); 


//listeners
cargarEventListeners();


function cargarEventListeners(){
    //dispara cuando se presiona "agregar carrito"
    cursos.addEventListener('click', comprarCurso);

    carrito.addEventListener('click', eliminarCurso);
    
    vaciarCarritoBTN.addEventListener('click', vaciarCarrito );

    document.addEventListener('DOMContentLoaded', leerLocalStorage);



}


//functiones
function comprarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        
        leerDatosCurso(curso);
        
}

}

function leerDatosCurso(curso){
    const infoCurso={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')

    }
    insertarCarrito(infoCurso);
}

//console.log(curso);


function insertarCarrito (curso){

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href='#' class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

function eliminarCurso (e){
    e.preventDefault();
    
    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoLocalStorage(cursoId);

}


function vaciarCarrito (){
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }


    vaciarLocalStorage();
    return false;
}

function guardarCursoLocalStorage(curso){

    let cursos;
    cursos = obtenerCursosLocalStorage();
    
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function obtenerCursosLocalStorage(curso){
    let cursosLS;
        
    if (localStorage.getItem('cursos') === null){
        cursosLS = []
    }else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    
    return cursosLS;
    
}

function leerLocalStorage(){
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();
    cursosLS.forEach(function (curso){

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href='#' class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);    

    })

}

function eliminarCursoLocalStorage (curso){
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(cursoLS,index){
        if (cursoLS.id === curso){
            cursosLS.splice(index,1);
        }
    });
    localStorage.setItem('cursos', JSON.stringify(cursosLS));

}



function vaciarLocalStorage (){
    localStorage.clear();
}








