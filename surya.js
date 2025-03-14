

const works = {
    "project1": { "title": "Project 1", "url": "works/project1/index.html" },
    "project2": { "title": "Project 2", "url": "works/project2/index.html" },
    "project3": { "title": "Project 3", "url": "works/project3/index.html" }
};

const navDiv = document.getElementById("nav_div");

const contentFrame = document.getElementById("content_frame");

 

for (let key in works) {

    let projectLink = document.createElement("div");

    projectLink.innerText = works[key].title;

    projectLink.className = "nav_item";

 

    projectLink.onclick = function () {

        contentFrame.src = works[key].url;

    };
    navDiv.appendChild(projectLink);
}

 
