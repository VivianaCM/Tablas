console.log('correcto');

document.querySelector('#boton'),addEventListener('click',traerDatos());

function traerDatos(){

    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'tablas.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function (){

        if(this.readyState == 4 && this.status == 200){

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');

            res.innerHTML='';

            for(let item of datos){
                //console.log(item);
                res.innerHTML += `
                    <tr>
                        <th>${item.nombre}</th>
                        <th>${item.apellido}</th>
                        <th>${item.edad}</th>
                        <th>${item.cargo}</th>
                    </tr>
                `
            }
          
        }
    }
}
