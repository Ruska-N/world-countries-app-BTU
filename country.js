document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const countryName = params.get("name");

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      const country = data.find(
        (c) => c.name.toLowerCase() === countryName.toLowerCase()
      );
      if (country) {
        showCountry(country);
      }
    });
});

function showCountry(country) {
  document.querySelector(".img-flag img").src = country.flags.png;
  document.querySelector(".img-flag img").alt = country.name;
  document.querySelector(".country-info h1").textContent = country.name;

  const [box1, box2] = document.querySelectorAll(".country-details .box");

  box1.innerHTML = `
    <p>Native Name: <span>${country.nativeName || "-"}</span></p>
    <p>Population: <span>${country.population.toLocaleString()}</span></p>
    <p>Region: <span>${country.region}</span></p>
    <p>Sub Region: <span>${country.subregion || "-"}</span></p>
    <p>Capital: <span>${country.capital || "-"}</span></p>
  `;

  box2.innerHTML = `
    <p>Top Level Domain: <span>${
      country.topLevelDomain?.join(", ") || "-"
    }</span></p>
    <p>Currencies: <span>${(country.currencies?.map((c) => c.name) || []).join(
      ", "
    )}</span></p>
    <p>Languages: <span>${(country.languages?.map((l) => l.name) || []).join(
      ", "
    )}</span></p>
  `;

  const borders = document.querySelector(".country-borders");
  if (country.borders?.length) {
    const buttons = country.borders
      .map((code) => `<button class="btn border-btn">${code}</button>`)
      .join("");
    borders.innerHTML = `<p>Border Countries:</p>${buttons}`;
  } else {
    borders.innerHTML = "<p>No border countries.</p>";
  }
}
