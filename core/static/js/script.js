//NAVBAR//
$(document).ready(function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("menu-superior").outerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "menu.html", true);
  xhttp.send();
});

//FOOTER//
$(document).ready(function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("footer").outerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "footer.html", true);
  xhttp.send();
});