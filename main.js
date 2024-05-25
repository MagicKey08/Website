function hide() {		//Das ist die Funktion damit das Cookie popup clickbar ist
  var x = document.getElementById("simple-cookie-consent");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}