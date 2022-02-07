let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');


formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;

    let insert = document.getElementById('insert')
    insert.innerHTML+=`${name} <br> ${lastName} <br> ${email} `
  
    let resp = await fetch('http://localhost:3003/perfiles',{
        method: 'POST',
        body: JSON.stringify({
        nombre: name,
        apellido: lastName,
        correo: email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }

    }) 

})
 
 