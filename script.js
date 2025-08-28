const countriesContainer = document.querySelector(".countries");

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    displayCountries(data);
  })
  .catch(err => console.error(err));

function displayCountries(countries) {
  countriesContainer.innerHTML = "";
  countries.forEach(country => {
    const card = document.createElement("div");
    card.classList.add("country-card");

    card.innerHTML = `
      <img src="${country.flags.png}" alt="Flag of ${country.name}">
      <div class="card-body">
        <h3>${country.name}</h3>
        <h4><b>Population:</b> ${country.population.toLocaleString()}</h4>
        <h4><b>Region:</b> ${country.region}</h4>
        <h4><b>Capital:</b> ${country.capital}</h4>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `country.html?name=${encodeURIComponent(country.name)}`;
    });

    countriesContainer.appendChild(card);
  });
}

