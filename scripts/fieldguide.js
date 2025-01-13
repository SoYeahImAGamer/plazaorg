
// Gets the variables for functions
function getVars() {
    var modal = document.getElementById("modal");
}

// When the user clicks the button, open the modal
function btnClick(wha) {
    var modal = document.getElementById("modal_" + wha);
    //display the modal
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function mdlClose(wha) {
    var modal = document.getElementById("modal_" + wha);
    //hide the modal
  modal.style.display = "none";
}