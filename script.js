const toggleMenuBtn = document.getElementById("idToggleBtn");
const sideBar = document.getElementById("idHeader");
const content = document.getElementById("idBody")


toggleMenuBtn.addEventListener("click", function() {
  sideBar.classList.toggle("toggle")
  toggleMenuBtn.classList.toggle("active")


});

