const mis_distros = [
    { //agregar 2 categorias mas link distro y pequeña descripccion con un modal, 
        id: 1,
        nombre: "Void",
        logo: "/assets/distros/1_void.svg",
        lanzamiento: 2008,
        init: "Runit",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado"
    },
    {
        id: 2,
        nombre: "Venom",
        logo: "/assets/distros/2_venom.jpg",
        lanzamiento: 2020, //dudoso
        init: "BSD-style",
        binario: "Source based",
        base: "LFS",
        usuario: "Experto"
    },
    {
        id: 3,
        nombre: "Crux",
        logo: "/assets/distros/3_crux.png", //tratar de arreglar los logos por mi cuenta
        lanzamiento: 2000,
        init: "BSD-style",
        binario: "Source based",
        base: "Independent",
        usuario: "Experto"
    },
    {
        id: 4,
        nombre: "Arch",
        logo: "/assets/distros/4_arch.png",
        lanzamiento: 2002,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado"
    },
    {
        id: 5,
        nombre: "Debian",
        logo: "/assets/distros/5_debian.svg",
        lanzamiento: 1993,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado"
    }, {
        id: 6,
        nombre: "Fedora",
        logo: "/assets/distros/6_fedora.png",
        lanzamiento: 2003,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Inexperto"
    }, 
    {
        id: 7,
        nombre: "Solus",
        logo: "/assets/distros/7_solus.jpg",
        lanzamiento: 2005,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Inexperto"
    }, 
    {
        id: 8,
        nombre: "Gentoo",
        logo: "/assets/distros/8_gentoo.png",
        lanzamiento: 2002,
        init: "Openrc",
        binario: "Source based",
        base: "Independent",
        usuario: "Experto"
    }, 
    {
        id: 9,
        nombre: "Funtoo",
        logo: "/assets/distros/9_funtoo.png",
        lanzamiento: 2008,
        init: "Openrc",
        binario: "Source-based",
        base: "Gentoo",
        usuario: "Experto"
    }, 
    {
        id: 10,
        nombre: "Ubuntu",
        logo: "/assets/distros/10_ubuntu.png",
        lanzamiento: 2004,
        init: "systemd",
        binario: "Binary",
        base: "Debian",
        usuario: "Inexperto"
    }, 
    {
        id: 11,
        nombre: "Artix",
        logo: "/assets/distros/11_artix.png",
        lanzamiento: 2002,
        init: "No-systemd",
        binario: "Binary",
        base: "Arch",
        usuario: "Avanza"
    }, 
    {
        id: 12,
        nombre: "LFS", //el concha su madre
        logo: "/assets/distros/12_lfs.png",
        lanzamiento: 1999,
        init: "Todos",
        binario: "Source based",
        base: "From scratch",
        usuario: "Experto +"
    },
     {
        id: 13,
        nombre: "Parabola",
        logo: "/assets/distros/13_parabola.svg",
        lanzamiento: 2009,
        init: "Openrc",
        binario: "Binary",
        base: "Arch",
        usuario: "Avanzado"
    }, 
    {
        id: 14,
        nombre: "Black Arch",
        logo: "/assets/distros/14_black_arch.png",
        lanzamiento: "",
        init: "systemd",
        binario: "Binary",
        base: "Arch",
        usuario: "Experto"
    }, {
        id: 15,
        nombre: "Mint",
        logo: "/assets/distros/15_mint.png",
        lanzamiento: 2006,
        init: "systemd",
        binario: "Binary",
        base: "Ubuntu",
        usuario: "Inexperto"
    }, 
    {
        id: 16,
        nombre: "BunsenLabs",
        logo: "/assets/distros/16_bunse.png",
        lanzamiento: 2024,    
        init: "systemd",
        binario: "Binary",
        base: "Debian",
        usuario: "Inexperto"
    }, 
    {
        id: 17,
        nombre: "Tiny core",
        logo: "/assets/distros/17_tiny.jfif",
        lanzamiento: "2009",
        init: "BSD-style",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado"
    },
    {
        id: 18,
        nombre: "Puppy",
        logo: "/assets/distros/18_puppy.svg",
        lanzamiento: 2003,
        init: "systemd",
        binario: "Binary",
        base: "Independent",
        usuario: "Inexperto"
    }, 
    {
        id: 19,
        nombre: "Slackware",
        logo: "/assets/distros/19_slack.jfif",
        lanzamiento: 1993,
        init: "SysV",
        binario: "Source Based",
        base: "Independent",
        usuario: "Experto"
    }, 
    {
        id: 20,
        nombre: "Alpine",
        logo: "/assets/distros/20_alpine.jpg",
        lanzamiento: 2005,
        init: "dinit",
        binario: "Binary",
        base: "Independent",
        usuario: "Avanzado"
    }, 
]

function mostrar_distros(distros){
    
    let contendor = document.getElementById("cards");
    contendor.innerHTML = "";

    distros.forEach(distro => {



    let card = document.createElement("div");
    card.innerHTML = `

    <div class="card" style="width: 18rem;">
    <img src="${distro.logo}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${distro.nombre}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> Init: ${distro.init}</li>
        <li class="list-group-item"> Soruce: ${distro.binario}</li>
        <li class="list-group-item"> Base: ${distro.base}</li>
        <li class="list-group-item"> User: ${distro.usuario}</li>
        <li class="list-group-item"> Date: ${distro.lanzamiento}</li>
        <li class="list-group-item"> <input type="number" name="cantidad" id="${this.id}" class="cant" placeholder="Cantidad"> </li>
    <div class="card-body">
        <button type="button" class="btn btn-primary""> Agregar </button>
  </div>

    </div>
  

    `
    contendor.appendChild(card);

});
}

mostrar_distros(mis_distros)

function filtrar_init(opcion){

    if (opcion === "Cualquiera"){
       return mostrar_distros(mis_distros);
    } 

    const filtro = mis_distros.filter(item => item.init === opcion);

    mostrar_distros(filtro);    
}

function buscar (tipo){

    const valor_buscar = document.getElementById("input_t").value.toLowerCase();
    
    const filtro = mis_distros.filter(distro => distro.nombre.toLowerCase().includes(valor_buscar))

    mostrar_distros(filtro)
}
