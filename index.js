// Playing with the Vanilla Document Object Model

// Step 1
let body = document.querySelector("body");


// Step 2
let createHeading = document.createElement("h1");
let createButton = document.createElement("button");
let createInputField = document.createElement("input");

// Step 3
let headingElement = body.appendChild(createHeading);
let inputFieldElement = body.appendChild(createInputField);
let buttonElement = body.appendChild(createButton);

// Step 4
headingElement.innerHTML = "Welcome to my November Tech PD using Javascript DOM";


buttonElement.setAttribute("type", "submit");
buttonElement.innerHTML = "Submit";

buttonElement.addEventListener("click", () => {
    console.log("The button has been clicked!");
});


console.log("The button: ", buttonElement)




// Notice that the Body now contains the Heading 1 Element, although I never added that myself in the HTML.
console.log(body);


