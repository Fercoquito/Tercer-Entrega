
let carritoProductos = []

let productos = [
    
    {   id: 1, 
        nombre: "Buzo",  
        imgUrl: "./img/buzo.jpg", 
        categoria:  "Abrigos",
        precio: 1000 
    },
    
    {   id: 2, 
        nombre: "Campera", 
        imgUrl: "./img/campera.jpg", 
        categoria: "Abrigos", 
        precio: 2000 
    },
    
    {   id: 3, 
        nombre: "Sweter", 
        imgUrl: "./img/swetear.jpg", 
        categoria: "Abrigos", 
        precio: 3000 
    },
    
    {   id: 4, 
        nombre: "Remeron",
        imgUrl: "./img/remeron.jpg", 
        categoria: "Remeras", 
        precio: 1000
    },
    {   id: 5, 
        nombre: "Remera escote en v",
        imgUrl: "./img/remera1.jpg", 
        categoria: "Remeras", 
        precio: 2000 
    },
    {   id: 6, 
        nombre: "Musculosa",
        imgUrl: "./img/musculosa.jpg", 
        categoria: "Remeras", 
        precio: 3000 
    },
    
    {   
        id: 7, 
        nombre: "Bermuda", 
        imgUrl: "./img/bermuda.jpg", 
        categoria:  "Pantalones",
        precio: 1000 
    },

    {   id: 8,
        nombre: "Short", 
        imgUrl: "./img/short.jpg", 
        categoria:  "Pantalones",  
        precio: 2000 
    },
    
]

let html = ""

productos.forEach(element => {
    
    html += `
          <div class="cartita" >        
                <h3> Productos </h3>
                    <h2>               
                         ${element.nombre}
                    </h2>
                    <li>               
                         ${element.categoria}
                    </li>
                    <br> 
                    <br>
                    <li>               
                        <img src= ${element.imgUrl} />
                    </li>
                    <br>
                    <li>               
                         ${element.precio}
                     </li>
                     <button id=${element.id} class ="button" onclick=agregar(${element.id})> Agregar producto </button>
                     <button id=${element.id} class ="button" onclick=eliminar(${element.id})> Eliimnar producto </button>
            </div>
    
    `
});



document.getElementById(`contenedor`).innerHTML = html

function agregar(idAAgregar){

   localStorage.getItem("Lista") ? carritoProductos = JSON.parse(localStorage.getItem("Lista")) : carritoProductos = []
   
   let indumentaria = productos.find(element => element.id === idAAgregar)
   carritoProductos.push(indumentaria)
   localStorage.setItem("Lista", JSON.stringify(carritoProductos))
   
   alert("Agregaste este producto al carrito" )

}
function eliminar(idAEliminar){
    console.log("EliminoProducto",idAEliminar)
    carritoProductos = carritoProductos.filter(element => element.id !== idAEliminar)
    alert("Eliminaste este producto del carrito", productos.nombre)


}





/* ESTO QUE ESTA ACA, NO SE EN PANTALLA */
/*
const contenedor = document.querySelector("#contenedor");





function cargarProductos() {

    productos.forEach(producto => {

        let div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
        <h3> Productos </h3>
                    <h2> ${producto.nombre}</h2>
                    <h3> ${producto.categoria}</h3>
                    <br> 
                    <br>
                    <img src= ${producto.imgUrl} >
                    <br>
                    <p>${producto.precio}<p>
                     <button id="${producto.id}" > Agregar producto </button>
            </div>
          
        `
       contenedor.append(div)

    })

}

contenedor()
*/