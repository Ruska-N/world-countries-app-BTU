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
        showCountry(country, data);
      }
    });
});

function showCountry(country, allCountries) {
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
    const borderCountries = country.borders
      .map((code) => {
        const neighbor = allCountries.find((c) => c.alpha3Code === code);
        if (!neighbor) return null;
        return `<button class="btn border-btn" data-name="${neighbor.name}">${neighbor.name}</button>`;
      })
      .filter(Boolean)
      .join("");

    borders.innerHTML = `<p>Border Countries:</p>${borderCountries}`;

    document.querySelectorAll(".border-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const newCountryName = btn.dataset.name;
        window.location.href = `country.html?name=${encodeURIComponent(
          newCountryName
        )}`;
      });
    });
  } else {
    borders.innerHTML = "<p>No border countries.</p>";
  }
}
