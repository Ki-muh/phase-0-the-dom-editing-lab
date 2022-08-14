document.getElementById("main").remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = 'Martin is the champion';