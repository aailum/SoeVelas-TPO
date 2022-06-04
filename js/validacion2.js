const form = document.getElementById('formulario');
let usuario = document.getElementById('usuario');
let pass = document.getElementById('password');
let aviso = document.getElementById('aviso');

form.addEventListener('submit', e=>{
    
    e.preventDefault();
    let avisos = '';
    aviso.innerHTML = '';
    let contador = 0;

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

    if(contador !=  2){
        aviso.innerHTML = avisos;
    }else{
        aviso.innerHTML = 'Enviado!';
    }
})

