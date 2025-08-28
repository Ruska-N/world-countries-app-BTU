const toggleBtn = document.getElementById("darkMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
