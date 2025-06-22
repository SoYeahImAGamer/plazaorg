// Gets the variables for functions
function getVars() {
    var modal = document.getElementById("modal");
}

// When the user clicks the button, open the modal
function btnClick() {
    getVars();
    typewriter();
    //display the modal
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function mdlClose() {
    getVars();
    clearModal();
    //hide the modal
  modal.style.display = "none";
}

//typewriter stuff
var i = 0;
var txt = '>Good job, you found a secret!<br>>Bet you feel real proud of yourself for finding this<br>>Now go away, nothing\'s here yet.<br>>...<br>>...<br>>...<br>>for real this time';
var speed = 50;

function typewriter() {
    if (i < txt.length) {
        if (txt.substring(i, i+4) == '<br>'){
            document.getElementById("pterminal").innerHTML += '<br>';
            i += 4;
        }
        else{
            document.getElementById("pterminal").innerHTML += txt.charAt(i);
            i ++;
        }
        setTimeout(typewriter, speed);
    }
}
function clearModal(){
    document.getElementById("pterminal").innerHTML = null;
    i = 0;
}