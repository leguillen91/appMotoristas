

var Clientes='';

const obtenerClientes = () => {

    fetch('http://localhost:8888/clientes', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json", //MIME Type
      }
    })
    .then((respuesta) => respuesta.json())
    .then((respuestaClientes) => {
     console.log(respuestaClientes);
    Clientes=(respuestaClientes);

    renderizarPedidos();
    }); 
  }

  obtenerClientes();


  function renderizarPedidos() {

    document.getElementById('zonaPedidos').innerHTML=``;
    for (let i = 0; i < Clientes.length; i++) {
       
        document.getElementById('zonaPedidos').innerHTML+=`
        
        <section class="contenedor-pedidos">

        <div>

            <h6 class="numeroOrden">Orden ${i}</h6>
            <p class="detalleOrden">${Clientes[i].ordenes[i].nombreProducto}</p>
            <p style="margin-bottom: 1rem">${Clientes[i].ordenes[i].descripcion}</p>
            <button style="border-radius: 0.5rem;font-size: 16px;" onclick="" type="button" id="tomarPedido" class="btn btn-primary">Tomar pedido</button>


        </div>
        <div>
            <img src="/img/burger.png" alt="">
            <p class="precioOrden">Precio: ${Clientes[i].ordenes[i].precio} </p>
        </div>

    </section>
        
        `;


        
    }
  }



function irRegistro() {

    // Redireccionar a la página "nuevaPagina.html"
location.href = "http://127.0.0.1:5501/registro/registro.html";

}

function irInicioSeccion() {

    window.location.href = "http://127.0.0.1:5501/index.html";
    
}

function irOrdenesPedidos() {
    window.location.href = "http://127.0.0.1:5501/pedidos/pedido.html";

}

function irOrdenesTomados() {
  
    window.location.href = "http://127.0.0.1:5501/tomados/tomados.html";
}

function irOrdenesEntregados() {

    window.location.href = "http://127.0.0.1:5501/entregados/entregados.html";
}


function irFactura() {
    
}
