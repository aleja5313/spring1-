const listador = document.querySelector('body')


const getLocalStorage = () => {
    
    const det = JSON.parse(localStorage.getItem("Cats")); 
    const { imagen, nombre, raza, edad,ubicacion, personalidad,historia,imgusuario,usuario, categoria } = det

    listador.innerHTML += `
 
    <div class="card-body" >  

        
<a href="#"><img src=${imagen} class="card-img-top" alt="..."></a>
<a class="favorit" href="./favs.html">
        <img src="./image/Union1.png" alt="" width="24" height="24"> </a>  
    
        <div>
            <img src="./image/male (1).png" style="position: absolute;
            left: 30%;"/>            
            <strong> <h2 class="card-title">${nombre}</h2></strong>
        </div>
    
        <div>
            <img class="imgraza"  src="./image/raza.png" alt="" style="float: left;">
            <p style="color: #535353;">   ${raza} </p>
            <img class="agg" src="./image/edad.png" alt="" style="float: left;" >
            <p style="color: #535353;" >   ${edad}</p>
            <img src="./image/Component 1 (1).png" alt="" style="float: left;">
            <p style="color: #535353;"> ${ubicacion}</p>
            <h2 >   ${personalidad}</h2> 
            <div class="card">
                <center>
            <img src="./image/cariñoso.png" alt="">
            <p style="color: #535353;">Cariñoso</p>
        </center>    
        </div>
            <div class="card">
                <center>
                <img src="./image/inquieto.png" alt="">
                <p style="color: #535353;">Inquieto</p>
            </center>
        </div>
                <div class="card">
                <center>
                    <img src="./image/jugueton.png" alt="">
                    <p style="color: #535353;">Jugueton</p>
                   
                </center>
           
        </div>
        <h2>Historia</h2>
        <p style="color: #535353;">Historia ${historia}</p>
        <div>

        <a href="#"><img src=${imgusuario} class="card-logo" alt="..."  style="float: left;"></a>
        <strong> <p style="color: #535353;">Publicado Por</p></strong>
        <p style="color: #535353;">  ${usuario}</p>
    </div>
        <button type="submit" class="contact"  >Contactar</button>
                    <!-- <h4 style="color: #535353;"> categoria:  ${categoria}</h4> -->
                
                </div>
                
    </div>

   `
}

document.addEventListener('DOMContentLoaded', getLocalStorage)



listador.addEventListener('click', (e) => {

    if (e.target.classList.contains('card-img-top')) {
        window.location.href = "index3.html";
    }

})
