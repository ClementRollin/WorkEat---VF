var list = document.getElementById("mobile-list");

list.addEventListener("click", function(event) {

  var selectedItem = event.target;
  var items = list.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("selected");
  }

  selectedItem.classList.add("selected");
  console.log("Option sélectionnée : " + selectedItem.innerHTML);
});

const arrow = document.getElementById('arrow');
  arrow.addEventListener('click', function() {
});

const listItems = document.querySelectorAll('#mobile-list li');
  listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      arrow.style.display = 'block';
    });
});


const tablePerso = document.querySelector("#mobile-list li[value='custom']");

tablePerso.addEventListener("click", function() {
  let nombre = prompt("Entrez le nombre de place souhaité :");
  if (nombre > 5) {
    const nouvelElement = document.createElement("li");
    nouvelElement.className = "list-item place perso";
    nouvelElement.textContent = nombre + " places";
    tablePerso.parentNode.replaceChild(nouvelElement, tablePerso);
  } else {
    alert("Le nombre entré est inférieur ou égal à 5. Veuillez entrer un nombre supérieur à 5.");
  }
});