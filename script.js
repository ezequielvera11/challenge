//Se guarda la URL donde se enviaran los datos
const URL = "https://jsonplaceholder.typicode.com/users";

//Se trabaja adentro de un DOMContentLoaded para evitar problemas al cargar los datos
document.addEventListener("DOMContentLoaded", () => {

    //Guardamos el formulario en una constante
    const formulario = document.getElementById("formulario");
    
    formulario.addEventListener("submit", function(e) {

        //Evitamos que el submit recargue la página
        e.preventDefault();

        //Obtenemos el nombre, apellido y fecha de nacimiento de los campos del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaDeNacimiento = document.getElementById("fechaDeNacimiento").value;

        //Realizamos una solicitud POST a la URL le enviamos los datos en formato JSON
        //El servidor respondera con los datos
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                name: nombre, sname: apellido, date: fechaDeNacimiento
            }) 
        })
        .then ((respuesta) => {
            return respuesta.json();
        })
    });
    
});


