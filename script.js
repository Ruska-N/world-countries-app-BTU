// Dark Mode Toggle
const toggleBtn = document.getElementById("darkMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// search input
const searchInput = document.getElementById("searchInput");

let allCountries = [];

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    allCountries = data;
    displayCountries(allCountries);
  })
  .catch((err) => console.error(err));

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allCountries.filter((country) =>
    country.name.toLowerCase().includes(query)
  );
  displayCountries(filtered);
});

// FILTER DROPDOWN
function toggleFilter() {
  const arrowIconUp = document.getElementById("keyboardUp");
  const arrowIconDown = document.getElementById("keyboardDown");
  const filterOptions = document.querySelector(".filter-dropdown__options");

  filterOptions.classList.toggle("d-none");
  arrowIconUp.classList.toggle("d-none");
  arrowIconDown.classList.toggle("d-none");
}

// FILTER OPTIONS IN WORK

document.addEventListener("DOMContentLoaded", () => {
  const filterOptions = document.querySelectorAll(
    ".filter-dropdown__options li"
  );

  filterOptions.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedRegion = option.textContent.trim();

      // Map "America" → "Americas"
      if (selectedRegion.toLowerCase() === "america") {
        selectedRegion = "Americas";
      }

      const filteredCountries = allCountries.filter(
        (country) =>
          country.region.toLowerCase() === selectedRegion.toLowerCase()
      );

      displayCountries(filteredCountries);

      document
        .querySelector(".filter-dropdown__options")
        .classList.add("d-none");
      document.getElementById("keyboardUp").classList.remove("d-none");
      document.getElementById("keyboardDown").classList.add("d-none");
      document.querySelector(".filter-dropdown__selected p").textContent =
        selectedRegion;
    });
  });
});

// CARDS

// country cards
const countriesContainer = document.querySelector(".countries");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    displayCountries(data);
  })
  .catch((err) => console.error(err));

function displayCountries(countries) {
  countriesContainer.innerHTML = "";
  countries.forEach((country) => {
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
      window.location.href = `country.html?name=${encodeURIComponent(
        country.name
      )}`;
    });

    countriesContainer.appendChild(card);
  });
}
