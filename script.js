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
