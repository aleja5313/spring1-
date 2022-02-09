const listador2 = document.querySelector('body')


const getLocalStorage2 = () => {
    
    const arrayLike = [];
    const det = JSON.parse(localStorage.getItem("Dogs")); 
    const {id, imagen, nombre, raza, edad,ubicacion, personalidad,historia,imgusuario,usuario, categoria } = det

    listador2.innerHTML += `
 

    <div class="card-body" >  

     
    <a href="../index3.html"><button class="btnBack"><img src="../image/atras.png" alt="logo atrás"></button></a>
         
    <a href="#"><img src=${imagen} class="card-img-top" alt="..."></a>
    <button style="float: right"  class="favDog"> <img src="../image/Union1.png" alt="" style="float: right" ></button>
    
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
    <button class="contact"><a class="a-inicio-sig" href="./chat.html">Contactar</a></button>

                    <!-- <h4 style="color: #535353;"> categoria:  ${categoria}</h4> -->
                
                </div>
                
    </div>

   `

const btnLike = document.querySelector('.favDog');
  
    btnLike.addEventListener('click', () => {
    let likeName = nombre;
    let likeImg = imagen;
    let likeRace = raza;
    let likeId = id;
    let likeCategory = categoria;

    let like = { 
      likeName,
      likeImg,
      likeRace,
      likeId,
      likeCategory
    }

    console.log(like)

     const key = JSON.parse(localStorage.getItem('Fav'))

     if (btnLike.classList.contains('favDog')) {
    

       btnLike.classList.remove("favDog");
       btnLike.classList.add("circlePush");

       if (key !== null) { 
           key.push(like) 
           localStorage.setItem('Fav', JSON.stringify(key)) 
         } else { 
           arrayLike.push(like); 
           localStorage.setItem('Fav', JSON.stringify(arrayLike))
         }

     }  else if (btnLike.classList.contains('favDog')) {
         btnLike.classList.remove("circlePush");
         btnLike.classList.add("circleLike");
      
         const dog = key.filter(categ => categ.likeCategory === 'dog')

        }
      }
      )
    }


document.addEventListener('DOMContentLoaded', getLocalStorage2)


listador.addEventListener('click', (e) => {

    if (e.target.classList.contains('card-img-top')) {
        window.location.href = "index3.html";
    }

})