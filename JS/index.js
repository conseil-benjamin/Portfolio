function filterSkills() {
  let categorySelect = document.getElementById("category-select");
  let selectedCategory = categorySelect.value;
  let skillBars = document.querySelectorAll(".skill-bar");

  for (var i = 0; i < skillBars.length; i++) {
    let skillBar = skillBars[i];
    let category = skillBar.getAttribute("data-category");

    if (selectedCategory === "web") {
      if (category === "web") {
        skillBar.style.display = "block"; // Afficher la compétence Web
      } else {
        skillBar.style.display = "none"; // Masquer les autres compétences
      }
    } else {
      if (category === selectedCategory) {
        skillBar.style.display = "block"; // Afficher la compétence correspondante
      } else {
        skillBar.style.display = "none"; // Masquer les autres compétences
      }
    }
  }
}

// Au chargement de la page, masquer les compétences non liées au web
window.addEventListener("DOMContentLoaded", function () {
  filterSkills();
});

// permet de retourner en arrière dans l'historique, donc à la page d'avant
document.getElementById("go-back").addEventListener("click", () => {
  window.location.href = "index.html";
});
