let btn = document.querySelector('button');
function cargarCiudad(ciudad) {
  $.getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`,
    function (data) {
      document.querySelector('.container').style.visibility = 'visible';
      document.querySelector('#ciudad').textContent = data.name;
      document.querySelector('#temperatura').textContent = data.main.temp;
      document.querySelector('#descripcion').textContent =
        data.weather[0].description;
      document.querySelector('#grados').innerHTML = '°C';
      document.querySelector(
        '#wicon'
      ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      document.querySelector('#humedad').innerHTML = 'Humedad';
      document.querySelector('#porcentajeHumedad').textContent =
        data.main.humidity;
      document.querySelector('#porcentaje').innerHTML = '%';
      inputVacio();
    }
  ).fail(function () {
    alert('La ciudad no existe');
    inputVacio();
  });
}

btn.addEventListener('click', function () {
  let ciudad = document.querySelector('input').value;
  if (isNaN(ciudad)) {
    cargarCiudad(ciudad);
  } else {
    alert('No has ingresado ninguna ciudad');
  }
});

function inputVacio() {
  document.querySelector('input').value = '';
}
