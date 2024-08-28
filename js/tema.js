let menu = true

function tema(){ //no anda pero es cosa de boostrap

    let tema = document.getElementById("themes"); //link css
    let btn_tema = document.getElementById("btn_theme"); //boton interactivo
    

    if(menu){ //cambio a claro
        tema.href='/css/boostrap_light.min.css';
        btn_tema.innerHTML = "";
        menu = false;
    }else{ //cambio a oscuro
        tema.href='/css/boostrap_dark.min.css';
        btn_tema.innerHTML = "";
        menu = true;
    }
        
}