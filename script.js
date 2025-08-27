// FILTER DROPDOWN
function toggleFilter() {
  const arrowIconUp = document.getElementById("keyboardUp");
  const arrowIconDown = document.getElementById("keyboardDown");
  const filterOptions = document.querySelector(".filter-dropdown__options");

  filterOptions.classList.toggle("d-none");
  arrowIconUp.classList.toggle("d-none");
  arrowIconDown.classList.toggle("d-none");
}
