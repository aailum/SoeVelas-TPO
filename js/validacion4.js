const form = document.getElementById('formulario')
let nombre = document.getElementById('nombre');
let mail = document.getElementById('mail');
let usuario = document.getElementById('usuario');
let pass = document.getElementById('password');
let aviso = document.getElementById('aviso');
const expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

form.addEventListener('submit', e=>{
    e.preventDefault();
    let avisos = '';
    aviso.innerHTML = '';
    let contador = 0;

    if(nombre.value.length < 5){
        avisos += `Nombre muy corto <br>`;
    }else{
        contador++;
    }


    if(!expresionRegular.test(mail.value)){
        avisos += `Email no valido <br>`;
    }else{
        contador++;
    }

    if(usuario.value.length < 5){
        avisos += `Usuario muy corto <br>`;
    }else{
        contador++;
    }

    if(pass.value.length < 8){
        avisos += `Contraseña muy corta <br>`;
    }else{
        contador++;
    }

    if(contador !=  4){
        aviso.innerHTML = avisos;
    }else{
        aviso.innerHTML = 'Enviado!';
    }
})
