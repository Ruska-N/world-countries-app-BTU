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
