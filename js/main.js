var modal = document.getElementById("modal");
  function pop() {

  	modal.style.display = (modal.style.display == "none") ? "block" : "none";
  }
  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27 && modal.style.display === "block") {
        pop();
      }
});

function hideOverlay(){
modal.style.display = (modal.style.display == "none") ? "block" : "none";
}
