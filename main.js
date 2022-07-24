async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:8080/tablas.json");
    const json = await response.json();

    console.log(json);
    console.log(json.nombre);
}

obtenerDatos();