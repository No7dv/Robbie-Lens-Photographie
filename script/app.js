// NAVBAR COLLAPSE
const button = document.getElementById("navbar-toggle");
const ul = document.getElementById("navbar-list");

button.addEventListener("click", () => {
  ul.classList.toggle("active");
  button.classList.toggle("active");

  const expanded = button.classList.toggle("active");
  button.setAttribute("aria-expended", expanded);
});
// ----
