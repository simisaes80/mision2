function sumar() {
  // obtener los valores  de los inputs
  const num1 = parseFloat (document.getElementById('numero1').value) || 0;
  const num2 = parseFloat (document.getElementById('numero2').value) || 0;

  // Realizar la suma
  let suma = num1+num2;

  // Mostrar el resultado en la caja de texto
  document.getElementById('resultado').value = suma;

  //aca agregamos un titulo a la etiqueta h1
  let titulo = document.querySelector('h1')
  titulo.innerHTML = 'Calculadora JavaScript'

  }

  function multiplicar () {
  // obtener los valores  de los inputs
  const num1 = parseFloat (document.getElementById('numero1').value) || 0;
  const num2 = parseFloat (document.getElementById('numero2').value) || 0;


   // Realizar la suma
  let multiplicar = num1*num2;

  // Mostrar el resultado en la caja de texto
  document.getElementById('resultado').value = multiplicar;

  //aca agregamos un titulo a la etiqueta h1
  let titulo = document.querySelector('h1')
  titulo.innerHTML = 'Calculadora JavaScript'
  }

  function resta () {
  // obtener los valores  de los inputs
  const num1 = parseFloat (document.getElementById('numero1').value) || 0;
  const num2 = parseFloat (document.getElementById('numero2').value) || 0;


   // Realizar la suma
  let resta = num1-num2;

  // Mostrar el resultado en la caja de texto
  document.getElementById('resultado').value = resta;

  //aca agregamos un titulo a la etiqueta h1
  let titulo = document.querySelector('h1')
  titulo.innerHTML = 'Calculadora JavaScript la resta es:'
  }

  function multiplicacion(){
          //leer el numero de la caja input
    let num1 = parseFloat (document.getElementById('numero1').value) || 0;
    let num2 = parseFloat (document.getElementById('numero2').value) || 0;

    //calculamos la raiz cuadrada
    let multiplicacion = num1*num2;

    //mostrar el resultado
    document.getElementById('resultado').value = multiplicacion;

    let titulo = document.querySelector('h1');
    titulo.innerHTML= 'Calculadora JavaScript la raiz es:';

  }

  function division(){
          //leer el numero de la caja input
    let num1 = parseFloat (document.getElementById('numero1').value) || 0;
    let num2 = parseFloat (document.getElementById('numero2').value) || 0;

    //calculamos la raiz cuadrada
    let division = num1/num2;

    //mostrar el resultado
    document.getElementById('resultado').value = division;

    let titulo = document.querySelector('h1');
    titulo.innerHTML= 'Calculadora JavaScript la division es:';

  }

  

  function raiz(){
          //leer el numero de la caja input
    let num1 = parseFloat (document.getElementById('numero1').value) || 0;

    //calculamos la raiz cuadrada
    let raiz = Math.sqrt(num1);

    //mostrar el resultado
    document.getElementById('resultado').value = raiz;

    let titulo = document.querySelector('h1');
    titulo.innerHTML= 'Calculadora JavaScript la raiz es:';

  }

  function seno () {
  // obtener los valores  de los inputs
  const num1 = parseFloat (document.getElementById('numero1').value) || 0;
  


   // Realizar la suma
  let seno = Math.sin(num1);

  // Mostrar el resultado en la caja de texto
  document.getElementById('resultado'). value = seno;

  //aca agregamos un titulo a la etiqueta h1
  let titulo = document.querySelector('h1')
  titulo.innerHTML = 'Calculadora JavaScript'
  }

  function coseno () {
  // obtener los valores  de los inputs
  const num1 = parseFloat (document.getElementById('numero1').value) || 0;
  


   // Realizar la suma
  let coseno = Math.cos(num1);

  // Mostrar el resultado en la caja de texto
  document.getElementById('resultado'). value = coseno;

  //aca agregamos un titulo a la etiqueta h1
  let titulo = document.querySelector('h1')
  titulo.innerHTML = 'Calculadora JavaScript'
  }

  function tangente () {
  // obtener los valores  de los inputs
  const num1 = parseFloat (document.getElementById('numero1').value) || 0;
  


   // Realizar la suma
  let tangente = Math.tan(num1);

  // Mostrar el resultado en la caja de texto
  document.getElementById('resultado'). value = tangente;

  //aca agregamos un titulo a la etiqueta h1
  let titulo = document.querySelector('h1')
  titulo.innerHTML = 'Calculadora JavaScript'
  }

  function log10 () {
  // obtener los valores  de los inputs
  const num1 = parseFloat (document.getElementById('numero1').value) || 0;
  


   // Realizar la suma
  let log10 = Math.log(num1);

  // Mostrar el resultado en la caja de texto
  document.getElementById('resultado'). value = log10;

  //aca agregamos un titulo a la etiqueta h1
  let titulo = document.querySelector('h1')
  titulo.innerHTML = 'Calculadora JavaScript'
  }



  function borrar(){

    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').value = '';
    
  }
