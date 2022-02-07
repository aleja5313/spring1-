const urlfavs = 'http://localhost:3002/favoritos/';


const muestraFav = document.querySelector('.grid-mascotas');
const listador3 = document.querySelector('body')


const getFavs = async() => {

    const resp = await fetch(urlfavs);
    const data = await resp.json();

    data.forEach(favorito => {
        const {imagen,nombre,raza,id} = favorito;

        muestraFav.innerHTML += `
        <div class="col mascotas">
        <a href="#" class="enlace-detalle-mascota">
        <div class="card bg-dark text-white gradiente">                
        <img src="${imagen}" class="card-img" alt="...">
        <div class="card-img-overlay"  id=${id}>
        <h5 class="card-title body2Bold">${nombre}</h5>
        <p class="card-text body2Regular">${raza}</p>
        </div>
        </div>
        </a>
        </div>
        `
        
    });
}

document.addEventListener('DOMContentLoaded', getFavs)


