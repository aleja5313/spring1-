import ObtenerGatos from "./getGatos.js";
import ObtenerPerros from "./getPerros.js";
import showMascota from "./showMascota.js";

let btnGato = document.getElementById('btnGato');
let btnPerro = document.getElementById('btnperro');

const elemento = document.querySelector('.grid-mascotas')

const url = "http://localhost:3001/gatos"
const url2 = 'http://localhost:3000/perros'


//MOSTRAR TARJETAS

btnGato.addEventListener('click', () => {
    ObtenerGatos(url)
    showMascota('http://localhost:3001/gatos')
})


btnPerro.addEventListener('click', () => {
    ObtenerPerros(url2)
    showMascota('http://localhost:3000/perros');
})


//DETALLE

elemento.addEventListener('click', async(e) => {

    const cardDet = e.target.classList.contains('card-img-overlay')
    const id = e.target.id
    //  console.log(cardDet)

    if(cardDet){
         const lista = await ObtenerGatos(url);
         const lista2 = await ObtenerPerros(url2)

         const objeto = lista.find(list => list.id === Number(id))
         const objeto2 = lista2.find(list => list.id === Number(id))

         localStorage.setItem("Cats",JSON.stringify(objeto));
         localStorage.setItem("Dogs",JSON.stringify(objeto2));

         window.location.href = "detail.html"
    }
})
