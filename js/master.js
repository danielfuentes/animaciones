let usuario = document.getElementById('usuario');
let nombre = prompt('Indique su nombre');
if(nombre === ''){
    usuario.innerHTML = `Bienvenid@ a esta gran aventura Invitado`;
}else{
    usuario.innerHTML = `Bienvenid@ a esta gran aventura ${nombre}`;
}

