
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



function validadLogin() {

    //console.log(Clientes);
     let email =document.getElementById('email').value;
     let contraseña   =document.getElementById('contraseña').value;
     let expPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
     let expemail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
     let acceso=false;
   
   
     for (let i = 0; i < UsuariosMotoristas.length; i++) {
       // console.log(UsuariosMotoristas[i].nombre);
   
       if (UsuariosMotoristas[i].correo==email && UsuariosMotoristas[i].password==contraseña) {
   
         console.log('Usuario existente');
         acceso=true;
        // break;  
       } 
       
     }
   
     
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
             
     
       } else if(acceso==true){
           alert('Usuario Correcto');
             //console.log('Usuario Correcto');
        // window.location.href = "http://127.0.0.1:5500/menu/index.html";
        irOrdenesPedidos();
         
     
     
       } else{
     
               console.log('Usuario o contraseña incorrecto');
             
           }
   
   
     
   }












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
