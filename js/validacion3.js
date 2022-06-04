const formulario = document.getElementById("formulario");
let aviso = document.getElementById('aviso');
let nombre = document.getElementById('nombre');
let mail = document.getElementById('mail');
let edad = document.getElementById('edad');
let mensaje = document.getElementById('mensaje');
const expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

formulario.addEventListener('submit', e=>{
    e.preventDefault();
    let avisos = '';
    aviso.innerHTML = '';
    let contador = 0;

    if(nombre.value.length < 2){
      avisos += `Nombre muy corto.<br>`;
    }else{
      contador++;
    }

    if(!expresionRegular.test(mail.value)){
      avisos += `Email no valido.<br>`;
    }else{
      contador++;
    }

    if(edad.value < 16){
      avisos += `Edad no valida, ser mayor de 16 años.<br>`
    }else{
      contador++;
    }

    if(mensaje.value.length < 10){
      avisos += `Mensaje muy corto.<br>`;
    }else{
      contador++;
    }

    if(contador != 4){
      aviso.innerHTML = avisos;
    }else{
      aviso.innerHTML = 'Mensaje enviado!';
    }


})

