const navbarBtn = document.querySelector('.toggleBtn')
const toggleButtonIcon = document.querySelector('.toggleBtn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

navbarBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
}


function myFunction() {
var x = document.getElementById("myLinks");
if (x.style.display === "block") {
x.style.display = "block";
    } else {
        x.style.display = "none";
                }
              }
     