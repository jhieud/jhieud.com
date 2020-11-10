//citation: https://www.w3schools.com/w3css/w3css_tabulators.asp
//switches between embedded pages
function switchTabs(tab) {
  var i;
  var x = document.getElementsByClassName("folder");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tab).style.display = "block";
}
