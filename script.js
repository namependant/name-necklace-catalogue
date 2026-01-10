function openViewer(code, weight, img) {
  document.getElementById("viewer").style.display = "flex";
  document.getElementById("viewerImg").src = img;
  document.getElementById("viewerMeta").innerHTML =
    "Code: " + code + " &nbsp;&nbsp; Weight: " + weight;
}

function closeViewer() {
  document.getElementById("viewer").style.display = "none";
}
