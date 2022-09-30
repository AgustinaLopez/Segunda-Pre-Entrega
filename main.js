const nombreIngresado = prompt ("¡Bienvenido! ¿Como es tu nombre?");
let personalizado = document.getElementById('personalizado');
personalizado.innerText = 'Hola '+ nombreIngresado + ' !!';
console.log (personalizado.innerText);

let numeroPersonas = 0;
let cantidad = 0;
let precio = 0;
let costo= 0;
let tickets = "";
let seguirCotizando = false;



//Objeto - Lista de Hoteles
const Hoteles = [
    Hotel1 = {nombre: 'All Star Movies', categoria: 'Economico' ,price: 1500, extra: "desayuno incluido"},
    Hotel2 = {nombre: 'All Star Music', categoria: 'Economico' ,price: 1500, extra: "desayuno incluido"},
    Hotel3 = {nombre: 'All Star Sports', categoria: 'Economico' ,price: 1500, extra: "desayuno incluido"},
    Hotel4 = {nombre: 'Caribbean Beach Resort', categoria: 'Moderado'  ,price: 2000, extra: "entrada temprana"},
    Hotel5 = {nombre: 'Coronado Spring', categoria: 'Moderado' ,price: 2000, extra: "entrada temprana"},
    Hotel6 = {nombre: 'Port Orleans', categoria: 'Moderado' ,price: 2000, extra: "entrada temprana"}, 
    Hotel7 = {nombre: 'Contemporany Resort', categoria: 'Deluxe' ,price: 3500, extra: "descuento"},
    Hotel8 = {nombre: 'Animal Kingdom Lodge', categoria: 'Deluxe' ,price: 3500, extra: "descuento"},
    Hotel9 = {nombre: 'Grand Floridian', categoria: 'Deluxe' ,price: 3500, extra: "descuento"},
];

let container = document.getElementById ('hoteles');
for (const hotel of Hoteles){
   let li = document.createElement('li');
   li.innerHTML =  hotel.nombre;
   container.appendChild (li);
}

const categoria = Hoteles.filter (hotel => hotel.categoria == 'economico' )



//Formulario Principal
let formularioCotizacion = document.getElementById ('formularioCotizacion');
formularioCotizacion.addEventListener ("submit", validarCotizacion);

function validarCotizacion (event){
  event.preventDefault ();
  console.log ("Cotizacion Enviada");

  let formularioCotizacion = event.target
  console.log (formularioCotizacion.value);
}





//Precio Final
//console.log(precio)
//console.log(cantidad)
//console.log (costo)


//let precioTotal = (precio * cantidad) + (costo * cantidad);
//console.log(precioTotal)
//alert ('El costo total del paquete es de: $ '+precioTotal);
//let finalizarCotizacion= confirm("¿Desea finalizar su cotización?")

//if(finalizarCotizacion) alert ("Tu cotización ha sido enviada a tu correo electronico!");
//else {alert ("Consultanos tus dudas por whatsapp!")};


//Boton Principal
const boton = document.getElementById ('btnPrincipal');
boton.addEventListener ('click', () => {
 
  Swal.fire(
    '¡Enviado!',
    'Pronto te estaremos enviando la cotizacion!',
    'success'
  )
});



//boton.addEventListener ('click', accionClick);

//function accionClick(){
  //console.log ("Nueva Cotización");
//}


//Filtros de Temporadas
const promo = Hoteles.filter (hotel => hotel.extra == 'desayuno incluido');
console.log (promo)

const actualizacionTemporada = Hoteles.map (hotel => {
  return {
    nombre: hotel.nombre,
    precio: hotel.price * 1.15
  }
})
console.log (actualizacionTemporada)


//Formulario de Consulta
const miFormulario = document.getElementById ('formularioConsulta');
const nombreFormulario = document.getElementById ('nombre');
const correoFormulario = document.getElementById ('correo');
miFormulario.addEventListener ('submit', validarFormulario);

function validarFormulario (event){
  //event.preventDefault();
  const nombre = nombreFormulario.value;
  const correo = correoFormulario.value;
  Swal.fire(
    'The Internet?',
    'That thing is still around?',
    'question'
  )
}