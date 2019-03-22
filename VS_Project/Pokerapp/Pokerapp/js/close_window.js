// Get the modal
var modal = document.getElementById('id01');

// Get the modal
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}