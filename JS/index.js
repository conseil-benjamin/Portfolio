// permet de retourner en arrière dans l'historique, donc à la page d'avant
document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});

function filterSkills() {
  var categorySelect = document.getElementById("category-select");
  var selectedCategory = categorySelect.value;
  var skillBars = document.getElementsByClassName("skill-bar");

  for (var i = 0; i < skillBars.length; i++) {
    var skillBar = skillBars[i];
    var category = skillBar.getAttribute("data-category");

    if (category === selectedCategory) {
      skillBar.style.display = "block"; // Afficher la compétence
    } else {
      skillBar.style.display = "none"; // Masquer la compétence
    }
  }
}

// Filtrer les compétences au chargement de la page
window.onload = filterSkills();

