


var UsuariosMotoristas='';

const obtenerMotoristas = () => {

    fetch('http://localhost:8888/motoristas', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json", //MIME Type
      }
    })
    .then((respuesta) => respuesta.json())
    .then((respuestaMotoristas) => {
     console.log(respuestaMotoristas);
    UsuariosMotoristas=(respuestaMotoristas);

 
    }); 
  }

  obtenerMotoristas();



  function validarRegistro() {

   
     let email =document.getElementById('email').value;
     let contraseña   =document.getElementById('contraseña').value;
     let expPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
     let expemail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
     let acceso=false;
   
        
     if (email==null || email.length==0 || expemail.test(email.value)) {
       //  alert('email invalido');
       document.getElementById('email').style.boxShadow='0 0 5px red';
           console.log('error');
            // acceso= false;
   
       } else if (contraseña==null  || contraseña.length<8|| expPassword.test(contraseña.value)) {
           //  alert('Contraseña invalida');
           document.getElementById('contraseña').style.boxShadow='0 0 5px red';
               console.log('error');
                // acceso= false;   
     
     
       } else{
     
        console.log('validacion correcta');
        guardar();
             
           }
   
   
     
   }

  

const guardar = async () => {

  let nomb       =document.getElementById('nombre').value;
  let apell     =document.getElementById('apellido').value;
  let email        =document.getElementById('email').value;
  let contraseña   =document.getElementById('contraseña').value;

    const respuesta = await fetch(
        `http://localhost:8888/motoristas`,
        {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nomb,
                apellido: apell,
                correo: email,
                password:contraseña
            }),
        }
    );

    const resJSON = await respuesta.json();

   alert('Usuario agregado');
   irOrdenesPedidos();
};








function irRegistro() {

    // Redireccionar a la página "nuevaPagina.html"
location.href = "http://127.0.0.1:5501/registro/registro.html";

}

function irInicioSeccion() {

    location.href = "http://127.0.0.1:5501/index.html";
    
}

function irOrdenesPedidos() {
    window.location.href = "http://127.0.0.1:5501/pedidos/pedido.html";

}

function irOrdenesTomados() {
  
    location.href = "http://127.0.0.1:5501/tomados/tomados.html";
}

function irOrdenesEntregados() {

    location.href = "http://127.0.0.1:5501/entregados/entregados.html";
}


function irFactura() {
    
}