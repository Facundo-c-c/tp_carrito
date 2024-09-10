const carrito = [] //declaracion de variables globales al inicio

let bandera_carrito = true;

const mis_distros = [
    {
        id: 1,
        nombre: "Void",
        logo: "/assets/distros/1_void.svg",
        lanzamiento: 2008,
        init: "Runit",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado",
        precio: 200
    },
    {
        id: 2,
        nombre: "Venom",
        logo: "/assets/distros/2_venom.jpg",
        lanzamiento: 2020, //dudoso
        init: "BSD-style",
        binario: "Source based",
        base: "LFS",
        usuario: "Experto",
        precio: 100
    },
    {
        id: 3,
        nombre: "Crux",
        logo: "/assets/distros/3_crux.png", 
        lanzamiento: 2000,
        init: "BSD-style",
        binario: "Source based",
        base: "Independent",
        usuario: "Experto",
        precio: 50
    },
    {
        id: 4,
        nombre: "Arch",
        logo: "/assets/distros/4_arch.png",
        lanzamiento: 2002,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado",
        precio: 100
    },
    {
        id: 5,
        nombre: "Debian",
        logo: "/assets/distros/5_debian.svg",
        lanzamiento: 1993,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado",
        precio: 150
    }, {
        id: 6,
        nombre: "Fedora",
        logo: "/assets/distros/6_fedora.png",
        lanzamiento: 2003,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Inexperto",
        precio: 250
    },
    {
        id: 7,
        nombre: "Solus",
        logo: "/assets/distros/7_solus.jpg",
        lanzamiento: 2005,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Inexperto",
        precio: 150
    },
    {
        id: 8,
        nombre: "Gentoo",
        logo: "/assets/distros/8_gentoo.png",
        lanzamiento: 2002,
        init: "Openrc",
        binario: "Source based",
        base: "Independent",
        usuario: "Experto",
        precio: 50
    },
    {
        id: 9,
        nombre: "Funtoo",
        logo: "/assets/distros/9_funtoo.png",
        lanzamiento: 2008,
        init: "Openrc",
        binario: "Source-based",
        base: "Gentoo",
        usuario: "Experto",
        precio: 80
    },
    {
        id: 10,
        nombre: "Ubuntu",
        logo: "/assets/distros/10_ubuntu.png",
        lanzamiento: 2004,
        init: "systemd",
        binario: "Binary",
        base: "Debian",
        usuario: "Inexperto",
        precio: 250
    },
    {
        id: 11,
        nombre: "Artix",
        logo: "/assets/distros/11_artix.png",
        lanzamiento: 2002,
        init: "No-systemd",
        binario: "Binary",
        base: "Arch",
        usuario: "Avanzado",
        precio: 100,

    },
    {
        id: 12,
        nombre: "LFS", //el concha su madre, instalacion de un pdf de cientos de paginas
        logo: "/assets/distros/12_lfs.png",
        lanzamiento: 1999,
        init: "Todos",
        binario: "Source based",
        base: "From scratch",
        usuario: "Experto +++",
        precio: 10
    },
    {
        id: 13,
        nombre: "Parabola",
        logo: "/assets/distros/13_parabola.svg",
        lanzamiento: 2009,
        init: "Openrc",
        binario: "Binary",
        base: "Arch",
        usuario: "Avanzado",
        precio: 90
    },
    {
        id: 14,
        nombre: "Black Arch",
        logo: "/assets/distros/14_black_arch.png",
        lanzamiento: "xxxx",
        init: "systemd",
        binario: "Binary",
        base: "Arch",
        usuario: "Experto",
        precio: 140 
    }, {
        id: 15,
        nombre: "Mint",
        logo: "/assets/distros/15_mint.png",
        lanzamiento: 2006,
        init: "systemd",
        binario: "Binary",
        base: "Ubuntu",
        usuario: "Inexperto",
        precio: 190
    },
    {
        id: 16,
        nombre: "BunsenLabs",
        logo: "/assets/distros/16_bunse.png",
        lanzamiento: 2024,
        init: "systemd",
        binario: "Binary",
        base: "Debian",
        usuario: "Inexperto",
        precio: 130,
    },
    {
        id: 17,
        nombre: "Tiny core",
        logo: "/assets/distros/17_tiny.jfif",
        lanzamiento: "2009",
        init: "BSD-style",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado",
        precio: 30
    },
    {
        id: 18,
        nombre: "Puppy",
        logo: "/assets/distros/18_puppy.svg",
        lanzamiento: 2003,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Inexperto",
        precio: 30,
    },
    {
        id: 19,
        nombre: "Slackware",
        logo: "/assets/distros/19_slack.jfif",
        lanzamiento: 1993,
        init: "SysV",
        binario: "Source Based",
        base: "Independent",
        usuario: "Experto",
        precio: 40
    },
    {
        id: 20,
        nombre: "Alpine",
        logo: "/assets/distros/20_alpine.jpg",
        lanzamiento: 2005,
        init: "dinit",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado",
        precio: 120
    },
]

function mostrar_distros(distros) {

    let contendor = document.getElementById("cards");
    contendor.innerHTML = "";

    distros.forEach(distro => {

        //console.log(distro)

        //defino los elementos html

        let card = document.createElement("div"); //defino los contenedores 
        let div_img = document.createElement("div");
        let div_texto = document.createElement("div")
        let div_btn = document.createElement("div")

        let imagen = document.createElement("img"); //defino los elementos de informacion
        let nombre = document.createElement("h3");
        let init = document.createElement("p");
        let año = document.createElement("p");
        let base = document.createElement("p")
        let usuario = document.createElement("p")
        let binario = document.createElement("p")
        let precio = document.createElement("p")
        let boton = document.createElement("button");
        let input = document.createElement("input");

        imagen.src = distro.logo; //defino los valores de cada etiqueta
        nombre.textContent =  `${distro.nombre}`;
        init.textContent = `Init: ${distro.init}`;
        año.textContent = `Año: ${distro.lanzamiento}`;
        base.textContent =`Base: ${distro.base}`;
        usuario.textContent = `Usuario: ${distro.usuario}`;
        binario.textContent = `Software: ${distro.binario}`;
        precio.textContent = `Precio: ${distro.precio}`
        boton.textContent = "Comprar  "


        //Oconsole.log(init);

        card.classList.add("card"); //agrego las clases
        div_texto.classList.add("texto")
        boton.classList.add("btn");
        boton.classList.add("btn-primary");
        input.classList.add("cant");

        boton.onclick = function () {
            agregar_carrito(distro, input.value);
        }

        input.type = "number";
        input.placeholder = "cantidad";
        input.min = 1;

        div_img.appendChild(imagen); //creo estructura padre hijo html
        div_texto.append(nombre, init, binario, año, base, usuario, precio, input)
        div_btn.appendChild(boton);
        card.append(div_img, div_texto, div_btn);

        contendor.appendChild(card); //mando al html

    });
}

mostrar_distros(mis_distros)

function filtrar_init(opcion) { //filtrar card segun init 

    if (opcion === "Cualquiera") {
        return mostrar_distros(mis_distros); //muesto el array original 
    }

    const filtro = mis_distros.filter(item => item.init === opcion); //creo una array filtrado y lo remplazo por el original

    mostrar_distros(filtro);
}

function buscar() { //buscar en tiempo real

    const valor_buscar = document.getElementById("input_t").value.toLowerCase(); //paso a minusculas para evitar errores en el === 

    const filtro = mis_distros.filter(distro => distro.nombre.toLowerCase().includes(valor_buscar))

    mostrar_distros(filtro) //muesto nuevamnete el nuevo array
}

function agregar_carrito(distro, input) {

    //console.log(distro);
    //console.log(input);

    let cantidad = parseInt(input);

    if (!isNaN(cantidad)) {
        const productoEncontrado = carrito.find(itemCarro => itemCarro.id === distro.id);
        if (productoEncontrado) { //si esta en el carro, verifico la cantidad
            productoEncontrado.input = cantidad;
        } else { //si no esta lo agrego al carro
            distro.input = input;
            carrito.push(distro);
        }
    } else {
        return alert("Ingrese valores validos");
    }

    //console.log(carrito);
    //console.log(distro.input);

    actualizar_carro();
}

function actualizar_carro(){

    let contenedor = document.getElementById("t_body"); //busco el table body
    let t_footer = document.getElementById("tfooter");
        
    contenedor.innerHTML = "";
    t_footer.innerHTML = "";

    if(carrito.length !== 0){

        do{
            (document.getElementById("tablas")).classList.remove("oculta")//muestro la tabla
            bandera_carrito = false
            }while(bandera_carrito)
            
            let cont = 1;
            let precio = 0;
        
            carrito.forEach((distro,index) => {
        
            let tr = document.createElement("tr"); //creo tr y con plantilla creo su contenido
        
            precio = precio + distro.precio*distro.input
        
            tr.innerHTML = `
            
            <td>${cont}</td> </td> 
            <td>${distro.nombre} </td>
            <td> Init: ${distro.init} </td>
            <td> Base: ${distro.base} </td>
            <td> Software: ${distro.binario} </td> 
            <td> ${distro.input} </td> 
         
            <td> <button class="btn btn-secondary" onclick="borar(${index})" >X</button> </td> </td> 
        
            `
            cont++
         
            contenedor.appendChild(tr); //mando al html
            
            let tfoot = document.getElementById("tfooter");
            let tr_f = document.createElement("tr");
        
            tr_f.innerHTML = `
            
            <td colspan="6">Distros en el carro</td>
            <td> ${precio}$ </td>
            
            `
        
            tfoot.innerHTML = ``
            tfoot.appendChild(tr_f);
        
            });
        
    }else{
        (document.getElementById("tablas")).classList.add("oculta"); //muestro la tabla
        bandera_carrito = true;
    }

} 

function borar(index){
    console.log(index)
    carrito.splice(index, 1);
    actualizar_carro(carrito);
}

function imprimir(){

    let cards = document.getElementById("cards");
    cards.remove();

    let boton = document.getElementById("aceptar");
    boton.remove();

    let header = document.getElementById("header");
    header.remove();

    let footer = document.getElementById("footer");
    footer.remove();

    window.print();

    location.reload();

}