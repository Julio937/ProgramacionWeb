document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  });
  

// Función para obtener los datos de la API
function getPlanets() {
    fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
            const planets = data.results;
            const planetsContainer = document.getElementById('planets');

            // Recorre cada planeta y crea un elemento div para mostrarlo en la página
            planets.forEach(planet => {
                const planetElement = document.createElement('div');
                planetElement.className = 'planet';

                // Agrega el contenido del planeta al elemento div
                planetElement.innerHTML = `
                    <h2>${planet.name}</h2>
                    <p><strong>Clima:</strong> ${planet.climate}</p>
                    <p><strong>Terreno:</strong> ${planet.terrain}</p>
                    <p><strong>Poblacion:</strong> ${planet.population}</p>
                    <p><strong>Diametro:</strong> ${planet.diameter}</p>
                    <p><strong>Gravedad:</strong> ${planet.gravity}</p>
                    <p><strong>Periodo de rotación:</strong> ${planet.rotation_period}</p>
                    <p><strong>Periodo orbital:</strong> ${planet.orbital_period}</p>
                    <p><strong>Superficie del agua:</strong> ${planet.surface_water}</p>
                `;

                // Agrega el elemento div al contenedor de planetas
                planetsContainer.appendChild(planetElement);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

// Llama a la función para obtener los planetas
getPlanets();
