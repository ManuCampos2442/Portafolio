document.addEventListener('DOMContentLoaded', function () {

    // Se declaran los botones como tambien el campo de texto
    var input = document.querySelector("textarea");
    var button3 = document.querySelector("#copiar");
    var button = document.querySelector("#encriptar");
    var button2 = document.querySelector("#desencriptar");
    //__________________________________________________________________________________________


    // Función llenarTextArea que se encarga primero de verificar que el campo de texto donde el usuario escribe no es
    // este vacio para luego, remplazar las letras a, e, i, o y u por sus respectivos cambios. Luego deja ver el resultado
    // en el textarea que se encuentra en el lado derecho de la pantalla
    function llenarTextArea() {

        if (input.value == "") {
            alert("Primero ingrese un mensaje.")
        } else {

            miTextarea.style.display = "block";
            copiar.style.display = "block";

            var palabraCambiada = input.value.replace(/e/g, "enter")
                .replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

            console.log(palabraCambiada);

            miTextarea.value = palabraCambiada;

            rectangulo1.querySelector("#logoPersona").style.display = "none";
            rectangulo1.querySelector("#palabras").style.display = "none";

        }
    }
    //__________________________________________________________________________________________


    // Parecido a la función encriptar, verifica que el campo de texto donde el usuario escribe, no este vacio para luego
    // cambiar las palabras "ai", "enter", "imes", "ober", "ufat", por las letras a, e, i, o y u
    function desencriptar() {

        if (input.value == "") {
            alert("Primero debe ingresar un texto para desencriptar.")
        }
        var contenido = miTextarea.value;

        miTextarea.style.display = "block";
        copiar.style.display = "block";

        var cambiarPalabra = input.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
            .replace(/ober/g, "o").replace(/ufat/g, "u");

        miTextarea.value = cambiarPalabra;

        rectangulo1.querySelector("#logoPersona").style.display = "none";
        rectangulo1.querySelector("#palabras").style.display = "none";
    }
    //__________________________________________________________________________________________


    // La función copiar texto se encarga de que tengamos copiado el texto del textarea del lado derecho de la pantalla
    // como si nosotros lo hubiesemos copiado con ctr + c
    function copiarTexto() {

        var miTextarea = document.querySelector("#miTextarea");
        miTextarea.select(); // Selecciona el contenido del textarea
        document.execCommand('copy'); // Copia el contenido seleccionado al portapapeles
        alert("¡Texto copiado con exito!");

    }
    //__________________________________________________________________________________________


    // Aqui se declaran los teres botones que al ser presionados activan las funciones dichas anteriormente
    button.onclick = llenarTextArea;

    button2.onclick = desencriptar;

    button3.addEventListener("click", copiarTexto);
    //__________________________________________________________________________________________

});