const toggleBtn = document.getElementById("darkMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
const searchInput = document.getElementById("searchInput");

let allCountries = [];

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    allCountries = data;
    displayCountries(allCountries);
  })
  .catch(err => console.error(err));

searchInput.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = allCountries.filter(country =>
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

// document.addEventListener("DOMContentLoaded", () => {
//   const filterOptions = document.querySelectorAll(
//     ".filter-dropdown__options li"
//   );
//   const countriesContainer = document.querySelector(".countries");

//   let countriesData = [];

//   fetch("./data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       countriesData = data;
//     })
//     .catch((err) => {
//       console.error("Error of loading data.json:", err);
//     });

//   filterOptions.forEach((option) => {
//     option.addEventListener("click", () => {
//       const selectedRegion = option.textContent.trim();

//       const filtered = countriesData.filter(
//         (country) =>
//           country.region.toLowerCase() === selectedRegion.toLowerCase()
//       );

//       renderCountries(filtered);
//     });
//   });

//   function renderCountries(countries) {
//     countriesContainer.innerHTML = "";

//     if (countries.length === 0) {
//       countriesContainer.innerHTML = "<p>Empty page.</p>";
//       return;
//     }

//     countries.forEach((country) => {
//       const countryCard = document.createElement("div");
//       countryCard.classList.add("country-card");

//       countryCard.innerHTML = `
//         <div class="flag">${country.flag || "🏳️"}</div>
//         <div class="name">${country.name}</div>
//         <div class="region">${country.region}</div>
//       `;

//       countriesContainer.appendChild(countryCard);
//     });
//   }
// });
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

