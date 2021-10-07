var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("ON");
    var part = this.nextElementSibling;
    if (part.style.display === "block") {
      part.style.display = "none";
    } else {
      part.style.display = "block";
    }
  });
}