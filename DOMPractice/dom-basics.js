// Activity 2 - Step 1
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Activity 2 - Step 2
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

// Activity 2 - Step 3
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Activity 2 - Step 4 (using method 1)
const newSection = document.createElement("section");

const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2);

const newP = document.createElement("p");
newP.innerText = "This was added through Javascript";
newSection.appendChild(newP);

document.body.appendChild(newSection);
