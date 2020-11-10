//citation: https://www.w3schools.com/w3css/w3css_tabulators.asp
//switches between embedded pages
function switchTabs(tab) {
  var i;
  var x = document.getElementsByClassName("folder");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }


  folder = document.getElementsByClassName("folder");
  for (i = 0; i < x.length; i++) {
    folder[i].className = folder[i].className.replace(" w3-red", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " w3-red";
}
