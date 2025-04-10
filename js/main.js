let encabezado1= document.getElementById("encabezado1");
let encabezado2= document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let btnMostrar= document.getElementById("btnMostrar");
let txtRFC =document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");
let txtCURP = document.getElementById("txtCURP");

encabezado1.innerText="Ejercicio DOM";
console.log(encabezado1.innerText);
//EL INNERtEXT ES UNA PROPIEDAD DE LA ETIQUETA QUE ESTÁ ALMACENANDO EL TEXTO QUE ESTÁ AHI DENTRO. Es una propiedad de lectura y escritura.

//DOM EXCERCISE

encabezado2.innerText="DOM excercise";
console.log(encabezado2.innerText);

///////

console.log(listas.length);
console.log(listas.length[1]);


let otroElemento= document.querySelector("ul>li");
//el query selector me va a traer la primer coincidencia que encuentre con el selector que le pongo, me va a traer el primer elemento que coincida. Si no encuentra ningun elemento me va a devolcer un NULL.  
let otrosElementos= document.querySelectorAll("ul>li");
console.log(otrosElementos.length);

//cuando regresa un elemento VIVO quiere decir que si se kmodifica el elemento este se actualiza, si no esta vivo(si es estático) no se actualiza si se modifica. 


btnMostrar.addEventListener("click", function(event){
    event.preventDefault();

    let element = document.createElement("li");
    element.innerText="Another Item"; //<li>Another Item</li>
    element.classList.add("list-group-item");

    let element2= element.cloneNode(true);

    // listas.item(0).before(element); before inserta el elemento antes de la lista 
    // listas.item(0).prepend(element2); inserta el elemento justo al inicio de la lista 

   // listas.item(0).append(element); //append inserta el elemento al final de la lista 
   // listas.item(0).after(element2);// inserta el elemento después de la lista 

//    listas.item(1).insertAdjacentElement("afterbegin", element); // inserta un elemento al principio de una lista 
//    listas.item(1).insertAdjacentElement("beforeend", element2); //inserta un elemento al final de la lista

listas.item(1).insertAdjacentHTML("beforebegin",`<li class=list-group-item>Before Begin item</li>`);
listas.item(1).insertAdjacentHTML("afterend",`<li class=list-group-item>After End item</li>`);
listas.item(1).insertAdjacentHTML("afterbegin",`<li class=list-group-item>After Begin item</li>`);
listas.item(1).insertAdjacentHTML("beforeend",`<li class=list-group-item>Before End item</li>`);

});


//el AddEventListener es como agregarle una oreja al elemento
//con e event.preventDefault le digo a un determinado evento que no haga lo que hace por default.
//Uso una función anónima cuando la voyu a usar una vez, ey una función normal cuando voy a reutilizar el código.


//se ejecuta cuando termina de cargar todos los elementos de la página: 
window.addEventListener("load", function(event){
    console.log("Se terminó de cargar la página");
});// load

 //blur= cuando se sale del campo, cuando pierde el foco, Cuando nos movemos a otra sección
 //toUpperCase = convertir algo a mayúsculas
 //target = el origen de unn evento, hace referencia al objeto en donde está sucediento el evento. 

// txtRFC.addEventListener("blur",function(event){
//     txtRFC.value = txtRFC.value.toUpperCase();
// }); //txtRFC

// txtCURP.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtCURP.value = txtCURP.value.toUpperCase();
// }); //txtCURP

// txtTelefono.addEventListener("blur", function(evento){
//     event.preventDefault();
//     txtTelefono.value = txtTelefono.value. trim().slice(0,10);

// }); txtTelefono

// TODO LO ANTERIOR ( DESDE txtRFC hasta txtTelefono) SE PUEDE MEJORAR U AUTOMATIZAR AÚN MÁS DE LA SIGUIENTE FORMA: 
function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();

}// txtToUpper

//El .trim elimima los espacios en blanco al principio y al final de una cadena de texto. .0
txtRFC.addEventListener("blur", txtToUpper); //txtRFC
txtCURP.addEventListener("blur", txtToUpper);// txtCURP
txtTelefono.addEventListener("blur", function(event)
    {event.preventDefault();
    txtTelefono.value = txtTelefono.value. trim().slice(0,10);
});//txtTelefono