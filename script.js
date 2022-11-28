let maquinas= [
    {
        id: 1,
        nombre: "Wahl Magic Clip",
        precio: 24999,
        descripcion: "Máquina de Corte Profesional diseñada en Estados Unidos especialmente para cortes, rasurados y rapados.  Motor Vibrador Profesional V5000 que garantiza durabilidad y larga vida util • Cuchilla Regulable • Alta Performance • Cuchilla fina cromada de precisión ajustable a corte al 0 ideal para rapado • 8 Peines guía de 1.5mm; 3mm; 4.5mm; 6mm; 10mm; 13mm; 19mm y 25mm. 4748",
        stock: 4,
        cantidad: 1,
        img: "./assets/img/magicclipcable.jpg"
    },
    {
        id: 2,
        nombre: "Wahl Super Taper",
        precio: 23999,
        descripcion: "Motor vibratorio profesional V5000 para durabilidad Ideal para grandes exigencias Trabaja con cable, ideal para uso continuo Gran potencia, alta precisión con cuchillas profesionales ",
        stock: 8,
        cantidad: 1,
        img: "./assets/img/superTaper.jpg"
    },
    {
        id: 3,
        nombre: "Wahl Legend",
        precio: 27999,
        descripcion: " Motor vibratorio profesional V9000. Ideal para grandes exigencias. Trabaja con cable, ideal para uso continuo Gran potencia, alta precisión con cuchillas profesionales.",
        stock: 3,
        cantidad: 1,
        img: "./assets/img/legend.jpg"
    },
    {
        id: 4,
        nombre: "Wahl Senior",
        precio: 64999,
        descripcion: "Cuenta con la última tecnología en baterías de litio, de larga duración sin efecto memoria, 70 minutos de tiempo de funcionamiento y 120 minutos de carga. Su ligereza y diseño sin cable garantizan el mejor manejo, manteniendo la gran calidad de corte de una clipper con cable Wahl. Dispone de la cuchilla FADE para que el corte en el rasurado sea mucho mas preciso y nítido.",
        stock: 2,
        cantidad: 1,
        img: "./assets/img/senior.jpg"
    },
    {
        id: 5,
        nombre: "Wahl Finale",
        precio: 29999,
        descripcion: "Ideal para terminaciones ultra suaves y perfecta para el área final de los cortes Fade • Máquina profesional para terminaciones y rasurados, sin cable, láminas de corte hipoalergénicas y doradas • Motor giratorio de 7000 a 10000 RPM; 80 min de uso y 120 min de recarga • Largo del Corte: 0.1mm • Accesorios: Pincel para tirar pelo, pincel de limpieza y protector de lámina",
        stock: 6,
        cantidad: 1,
        img: "./assets/img/finale.jpg"
    },
    {
        id: 6,
        nombre: "Wahl Balding",
        precio: 20999,
        descripcion: "Motor vibratorio V5000 profesional 6000 RPM La cuchilla de clipper con el alto de corte más corto 0.4 mm- Se puede ajustar a cero manualmente - Perfecta para rasurados extremos- Sin ajuste de longuitud de corte.Viene con 2 alzas #1/2 (1.5mm) y #1 1/2 (4.5mm), peine de borde plano, cepillo de limpieza, aceite lubricante y protector de cuchillas. ",
        stock: 4,
        cantidad: 1,
        img: "./assets/img/balding.jpg"
    },
    {
        id: 7,
        nombre: "Wahl Detailer",
        precio: 32999,
        descripcion: "Pequeño Pero Poderoso. Trimmer Profesional con cable fabricado en Estados Unidos. Liviano y ergonómico provee al profesional de balance y control perfectos para un trabajo de la más alta calidad. Las Cuchillas en T que se ajustan al corte 0 son ideales para un trabajo preciso y detalles perfectos. ",
        stock: 7,
        cantidad: 0,
        img: "./assets/img/detailercable.jpg"
    },
    {
        id: 8,
        nombre: "Wahl Secador",
        precio: 15999,
        descripcion: "El secador de pelo profesional Super Dry, posee un motor AC de 2000 W de potencia, su tecnología turmalina y flujo de iones integrados para reducir la electricidad estática del cabello. Posee la funcion de un flujo de aire frío instantaneo, su filtro de acero extraible facilita su limpieza. Cuanta con 3 posiciones de temperatura y velocidades, un cable de 3 mts y 2 boquillas profesionales.",
        stock: 2,
        cantidad: 1,
        img: "./assets/img/secador.jpg"
    },
    {
        id: 9,
        nombre: "Maquina de Corte Babyliss Gold FX",
        precio: 35999,
        descripcion: "GoldFX es una maquina de corte profesional inalámbrica, equipada con un motor diseñado por Ferrari. Una herramienta perfecta para cortar todas las texturas del cabello con potencia, velocidad y precisión. VELOCIDAD: 6300 RPM - Luz de carga LED AZUL PARPADEANTE= Cargándose - Luz de carga LED AZUL ENCENDIDA= Carga Completa - Luz de carga LED AZUL PARPADEANTE (RÁPIDO)= 10 Minutos Restantes • Cuchilla de acero inoxidable con revestimiento DLC/níquel-titanio • Palanca de ajuste de longitud de corte con 5 posiciones • Motor sin carbones de alto rendimiento diseñado por Ferrari • Carcasa completamente metálica / mango texturizado • Batería de iones de litio / Autonomía de 2 horas • Con/Sin cable- Doble Voltaje • Anillo para Colgar • Incluye 8 peines guía de corte: 1.5mm, 3mm, 4.8mm, 6mm, 10mm, 13mm, 16mm, 19mm",
        stock: 3,
        cantidad: 1,
        img: "./assets/img/maquinaGoldFx.jpg"
    },
    {
        id: 10,
        nombre: "Patiller Babyliss Gold FX",
        precio: 55999,
        descripcion: "- Cuchilla en forma de T de DLC / Titanio, ajustable a Cero - Cuchilla expuesta con visión de 360° - Motor sin carbones de alto rendimiento diseñado por Ferrari - Carcasa completamente metálica / Mango texturizado - Batería de iones de litio / Autonomía de 2 horas - Con / Sin Cable - Doble Voltaje - Anillo para colgar - Kit para ajustar la cuchilla a cero incluido",
        stock: 0,
        cantidad: 1,
        img: "./assets/img/goldFx.jpg"
    }
]

let carrito=[]

const contenedor = document.querySelector('#contenedor')
const carritoContenedor = document.querySelector('#carritoContenedor')
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const precioTotal = document.querySelector('#precioTotal')

document.addEventListener('DOMContentLoaded', () =>{
    carrito= JSON.parse(localStorage.getItem('carrito')) || []
    productoEnCarrito()
})

maquinas.forEach((producto) =>{
    const {id, nombre, precio, descripcion, stock, img} = producto
    contenedor.innerHTML += `
    <div class="card row text-center" style="width: 18rem;">
        <img src=${img} class="card-img-top mt-5 " alt="...">
        <div class="card-body col-12">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">Precio: $${precio}</p>
            <p class="card-text">Disponible: ${stock}</p>
            <button onclick="agregarProducto(${id})" class="btn btn-primary">Agregar al Carrito</button>
        </div>
    </div>
    `   
}
)

vaciarCarrito.addEventListener('click', () => {
    carrito.length = []
    productoEnCarrito()
})

function agregarProducto(id) {
    let controlStock = maquinas.find(el => el.id === id)
    const productoExistente= carrito.some(producto => producto.id === id)
    if (controlStock.stock>0 ) {
        if (productoExistente) {
            const producto = carrito.map(producto =>{
                if (producto.id === id) {
                    producto.cantidad++ 
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto Agregado al Carrito',
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
            )
            
        }else{
            const item = maquinas.find((producto) => producto.id === id)
            carrito.push(item)        
            Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Agregado al Carrito',
        showConfirmButton: false,
        timer: 1500
        })
    
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Producto sin Stock',
            text: '¡Reingresara Pronto!',
        })
    }
    
    productoEnCarrito()
}

const productoEnCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body')

    modalBody.innerHTML = ''
    carrito.forEach((producto) =>{
        const {id, nombre, precio, descripcion, stock, img,cantidad } = producto
        modalBody.innerHTML += `
        <div class="modal-contenedor">
        <div>
            <img class="img-fluid img-carrito" src="${img}"
        </div>
        <div>
        
        </div>
        <p>Producto: ${nombre}</p>
        <p>Precio: $${precio}</p>
        <p>Cantidad: ${cantidad}</p>
        <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar Producto</button>
        </div>
        `
    }
    )
    if (carrito.length === 0){
        modalBody.innerHTML = `
        <p class="text-center text-primary parrafo">¡Tu carrito esta vacio!</p>
        `
    }
    carritoContenedor.textContent = carrito.length
    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
    almacenarStorage()
}

function eliminarProducto(id){
    const insumoId = id
    carrito = carrito.filter((insumo) => insumo.id !== insumoId)
    productoEnCarrito()
}

function almacenarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}