var menu = true

function tema(){ //tengo que duplicar mi css :(

    let tema = document.getElementById("themes"); //link css
    let btn_tema = document.getElementById("btn_theme"); //boton interactivo

    if(menu){ //cambio a claro
        tema.setAttribute('href', '/css/boostrap_light.min.css');
        btn_tema.innerHTML = "";
        menu = false;
    }else{ //cambio a oscuro
        tema.setAttribute('href', '/css/boostrap_dark.min.css');
        btn_tema.innerHTML = "";
        menu = true;
    }
}