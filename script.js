
// Menu toggle button
const toggleMenuBtn = document.getElementById("idToggleBtn");
const sideBar = document.getElementById("idHeader");
const content = document.getElementById("idBody")
var toggleColorBtn = document.getElementById('idColorBtn');
var header = document.getElementById('idHeader');
var body = document.getElementById('idBody');
const main = document.getElementById('idMain');
const topSection = document.getElementById('idTopSection');
var contentCreation = document.getElementById('idCreateContent');
var rightSection = document.getElementById('idRightSection');
var postBtn = document.getElementById('idPostBtn')
var headingTwo1 = document.getElementById('idHeaderTwo1')
var headingTwo2 = document.getElementById('idHeaderTwo2')
var contentContainer = document.getElementById('idContentSection')






//toggle menu event
toggleMenuBtn.addEventListener("click", function() {
  sideBar.classList.toggle("toggle")
  toggleMenuBtn.classList.toggle("active")
  main.classList.toggle("active");
  topSection.classList.toggle("active");
});


// light and dark mode toggle



toggleColorBtn.addEventListener('click', function() {
  toggleColorBtn.classList.toggle('light')
  header.classList.toggle('light')
  topSection.classList.toggle('light')
  contentCreation.classList.toggle('light')
  body.classList.toggle('light')
  rightSection.classList.toggle('light')
  postBtn.classList.toggle('light')
  main.classList.toggle('light')
  headingTwo1.classList.toggle('light')
  headingTwo2.classList.toggle('light')
  contentContainer.classList.toggle('light')
  toggleMenuBtn.classList.toggle('light')
 
  console.log("working");
});



