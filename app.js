// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
//Variable para crear codigo que muestre amigos ingresados
const listarAmigos = document.getElementById('listaAmigos');
//Eligiendo el nombre del amigo secreto en base al numsorteo y su posicion en la lista
const amigoSecreto = document.getElementById('resultado');
const amigosIngresados = 0;

function agregarAmigo() {
    //Obteniendo el valor del campo de 'Amigo'
    const addAmigo = document.getElementById("amigo").value;

    //validando que el campo no este vacio, ni con numeros, ni con caracteres especiales.
    if (!addAmigo || !/^[A-Za-zÁáÉéÍíÓóÚúÜü\s]+$/.test(addAmigo)){
        alert("El campo no debe estar vacío y no se permiten caracteres especiales (ni números), ingrese un nombre válido por favor.");
    } else {
        //Comparando nombres sin importar mayusculas y minusculas.
        const nombreNormalizado = addAmigo.toLowerCase();
        //Validando que no esten repetidos los nombres.
        if (listaAmigos.some(nombre => nombre.toLowerCase() === nombreNormalizado)) {
            alert("Este nombre ya está en la lista, Ingresa un nombre diferente o con apellido.");
            return;

        } else {
            //Ingresando nombre de amigo en la lista
            listaAmigos.push(addAmigo);
            //Aca permite visualizar los nombres de los amigos ingresados
            listarAmigos.innerHTML += `<li>${addAmigo}</li>`;  
            //Activando Boton "Reiniciar juego"
            document.getElementById('reiniciar').removeAttribute('disabled');
            };

        };

        limpiarCaja();
        amigosIngresados++;
        return;
    };

    function sortearAmigo() {
        //Sorteando un numero en base a la longitud de amigos ingresados
        let numSorteo = Math.floor(Math.random()* listaAmigos.length);
        if (listaAmigos.length < 2) {
            alert('Ingresa al menos dos amigos');
            } else { 
                //Eligiendo el nombre del amigo secreto en base al numsorteo y su posicion en la lista
                let amigoElegido = listaAmigos[numSorteo];
                amigoSecreto.innerHTML = `<li>🎁🎉 Tu amigo secreto es: ${amigoElegido}🎉🎁</li>`;
             };            
    };
    

//En esta función se deja en limpio todo
function condicionesIniciales() {
    listaAmigos = [];
    limpiarCaja();
    listarAmigos.innerHTML = "";
    amigoSecreto.innerHTML = "";
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Funcion para el boton creado para empezar desde 0 el juego
function reiniciar() {
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}