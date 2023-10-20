fetch ("/data.json")
    .then(response => response.json())
    .then(projects => {
        let contence = ""
    const projectsSection = document.querySelector("#projects")
    projects.forEach(project => {
        contence +=  `<div class="pros">
        <img src="${project.image}" alt="html image">
        <br>
        <button class="html-btn"><a href="">${project.name}</a></button>
    </div>`
    });
    projectsSection.innerHTML = contence
    })







var modalcontactme = document.getElementById("myModal");
var modalaboutme = document.getElementById("myBtn-about-me");

var btncontact = document.getElementById("myBtn-contactme");
var btnabout = document.getElementById("myBtn-aboutme");


var span = document.getElementsByClassName("close")[0];
var spanaboutme = document.getElementsByClassName("close-about-me")[0];


btncontact.onclick = function(event) {
  modalcontactme.style.display = "block";
  event.preventDefault()
}

btnabout.onclick = function(event) {
    modalaboutme.style.display = "block";
    event.preventDefault()
}

span.onclick = function() {
  modalcontactme.style.display = "none";
}

spanaboutme.onclick = function() {
    modalaboutme.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}













// amend var 3 names in brackets amend span amend 