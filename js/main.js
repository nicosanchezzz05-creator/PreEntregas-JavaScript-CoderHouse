let carrito = []
let carritoTotal = 0

let juegosPc = [
	{
		id: 10,
		nombreJuego: "Stalker",
		genero: "Accion",
		estado: "Disponible",
		precio: 60.00,
		stock: 2,
		imagen: "./assets/juegos/stalker.jpg"
	},
	{	
		id: 11,
		nombreJuego: "DayZ",
		genero: "Supervivencia",
		estado: "Disponible",
		precio: 39.00,
		stock: 6,
		imagen: "./assets/juegos/dayz.jpg"
	},
	{	
		id: 12,
		nombreJuego: "Silent Hill",
		genero: "Terror",
		estado: "Disponible",
		precio: 50.00,
		stock: 2,
		imagen: "./assets/juegos/silenthill.jpeg"
	},
	{	
		id: 13,
		nombreJuego: "The path in to the abyss",
		genero: "Supervivencia",
		estado: "Disponible",
		precio: 120.00,
		stock: 2,
		imagen: "./assets/juegos/thepathintotheabyss.jpg"
	},
	{	
		id: 14,
		nombreJuego: "Hell let loose",
		genero: "Guerra",
		estado: "Disponible",
		precio: 40.00,
		stock: 5,
		imagen: "./assets/juegos/hll.jpg"
	},
	{	
		id: 15,
		nombreJuego: "GTA VI",
		genero: "Aventura",
		estado: "No disponible",
		precio: 150.00,
		stock: 0,
		imagen: "./assets/juegos/gta6.jpeg"
	},
	{	
		id: 16,
		nombreJuego: "Hell let loose Vietnam",
		genero: "Guerra",
		estado: "No disponible",
		precio: 80.00,
		stock: 0,
		imagen: "./assets/juegos/hhlv.jpeg"
	},
	{	
		id: 17,
		nombreJuego: "Worms",
		genero: "Guerra",
		estado: "Disponible",
		precio: 15.00,
		stock: 14,
		imagen: "./assets/juegos/worms.png"
	},
	{	
		id: 18,
		nombreJuego: "Project Zomboid",
		genero: "Supervivencia",
		estado: "Disponible",
		precio: 10.00,
		stock: 10,
		imagen: "./assets/juegos/pz.jpeg"
	},
];

function refrescarPantalla() {
    areaDeCompra.innerHTML = "";

    juegosPc.forEach(juegoPc => {
        cardJuegos(juegoPc);
    });
}

function refrescarPantallaCarrito() {
    areaDeCompra.innerHTML = "";

    carrito.forEach(juego => {
        mostrarCarrito(juego);
		
    });
}

function mostrarAlerta(mensaje){
	const alerta = document.getElementById("alertaFlotante")
	alerta.innerText = mensaje
	alerta.classList.remove("alertaOculta")

	setTimeout(() => {
		alerta.classList.add("alertaFlotante")
	}, 2000)
}

const areaDeCompra = document.getElementById("areaDeCompra")

function cardJuegos(juegosPc){
	const cardVenta= document.createElement("div")
	cardVenta.className = "cardVenta"

	const nombre = document.createElement("h5")
	nombre.innerText = `${juegosPc.nombreJuego}`

	const genero = document.createElement("p")
	genero.innerText = `Genero: ${juegosPc.genero}`
	
	const stock = document.createElement("p")
	stock.innerText = `Stock: ${juegosPc.stock}`

	const precio = document.createElement("p")
	precio.innerText = `Precio: $${juegosPc.precio}`

	const imagen = document.createElement("img")
	imagen.src = juegosPc.imagen
	imagen.alt = juegosPc.nombreJuego
	imagen.className = "imgJuego"
	
	const botonComprar = document.createElement("button")
	botonComprar.innerText = `Comprar`
	botonComprar.className = "boton"
	botonComprar.addEventListener("click", () => {
	if (juegosPc.stock > 0){
		juegosPc.stock -= 1
		carritoTotal += juegosPc.precio
		actualizarCarrito()
		carrito.push(juegosPc)
		mostrarCarrito()
		refrescarPantalla()
		}
	})

	cardVenta.appendChild(nombre)
	cardVenta.appendChild(genero)
	cardVenta.appendChild(stock)
	cardVenta.appendChild(precio)
	cardVenta.appendChild(imagen)
	cardVenta.appendChild(botonComprar)
	areaDeCompra.appendChild(cardVenta)

}

const areaCarrito = document.getElementById("areaCarrito")
function mostrarCarrito(){
	areaCarrito.innerHTML = ""

	if (carrito.length === 0 || carrito === null){
		areaCarrito.innerHTML = `
            <div class="carritoVacioMensaje">
                <p>El carrito está vacío 🛒</p>
            </div>`;
		return
	}

	carrito.forEach((juego, index) => {
		const cardCarrito = document.createElement("div")
		cardCarrito.className = "cardCarrito"

		const nombre = document.createElement("h5")
		nombre.innerText = `${juego.nombreJuego}`

		const genero = document.createElement("p")
		genero.innerText = `Genero: ${juego.genero}`

		const precio = document.createElement("p")
		precio.innerText = `Precio: $${juego.precio}`

		const botonQuitarDelCarrito = document.createElement("button")
		botonQuitarDelCarrito.innerText = `Quitar del carrito`
		botonQuitarDelCarrito.className = "boton"
		botonQuitarDelCarrito.addEventListener("click", () => {

		const juegoEliminado = juegosPc.find(item => item.id === juego.id)
		if (juegoEliminado){
			juegoEliminado.stock += 1
			carritoTotal -= juego.precio
		}
		carrito.splice(index, 1)
		actualizarCarrito()
		mostrarCarrito()
		refrescarPantalla()
		})
		cardCarrito.appendChild(nombre)
		cardCarrito.appendChild(genero)
		cardCarrito.appendChild(precio)
		cardCarrito.appendChild(botonQuitarDelCarrito)
		areaCarrito.appendChild(cardCarrito)
	})
}

const acumuladoEnCarrito = document.getElementById("acumuladoEnCarrito")
function actualizarCarrito(){
	acumuladoEnCarrito.innerText = `Acumulado en carrito: $ ${carritoTotal}`
}

juegosPc.forEach(juegoPc => cardJuegos(juegoPc))

mostrarCarrito()
actualizarCarrito()