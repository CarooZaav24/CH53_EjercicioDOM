let encabezado1= document.getElementById("encabezado1");
encabezado1.innerText="Ejercicio DOM";
console.log(encabezado1.innerText);
//EL INNERtEXT ES UNA PROPIEDAD DE LA ETIQUETA QUE ESTÁ ALMACENANDO EL TEXTO QUE ESTÁ AHI DENTRO. Es una propiedad de lectura y escritura.

//DOM EXCERCISE
let encabezado2= document.getElementById("encabezado2");
encabezado2.innerText="DOM excercise";
console.log(encabezado2.innerText);

///////
let listas = document.getElementsByTagName("ul");
console.log(listas.length);
console.log(listas.length[1]);

let elementos = document.getElementsByClassName("list-group-item");
let otroElemento= document.querySelector("ul>li");
//el query selector me va a traer la primer coincidencia que encuentre con el selector que le pongo, me va a traer el primer elemento que coincida. Si no encuentra ningun elemento me va a devolcer un NULL.  
let otrosElementos= document.querySelectorAll("ul>li");
console.log(otrosElementos.length);

//cuando regresa un elemento VIVO quiere decir que si se kmodifica el elemento este se actualiza, si no esta vivo(si es estático) no se actualiza si se modifica. 
let btnMostrar= document.getElementById("btnMostrar");

btnMostrar.addEventListener("click", function(event){
    event.preventDefault();

    let element = document.createElement("li");
    element.innerText="Another Item"; //<li>Another Item</li>
    element.classList.add("list-group-item");

    let element2= element.cloneNode(true);

    // listas.item(0).before(element); before inserta el elemento antes de la lista 
    // listas.item(0).prepend(element2); inserta el elemento justo al inicio de la lista 

    listas.item(0).append(element); //append inserta el elemento al final de la lista 
    listas.item(0).after(element2);// inserta el elemento después de la lista 
});


//el AddEventListener es como agregarle una oreja al elemento
//con e event.preventDefault le digo a un determinado evento que no haga lo que hace por default.
//Uso una función anónima cuando la voyu a usar una vez, ey una función normal cuando voy a reutilizar el código.
