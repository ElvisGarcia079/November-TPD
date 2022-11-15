// Playing with the Vanilla Document Object Model

// Step 1
let body = document.querySelector("body");


// Step 2
let createHeading = document.createElement("h1");
let createButton = document.createElement("button");
let createInputField = document.createElement("input");

// Step 3
let headingElement = body.appendChild(createHeading);
let buttonElement = body.appendChild(createButton);
let inputFieldElement = body.appendChild(createInputField);

// Step 4

buttonElement.setAttribute("type", "submit");
buttonElement.innerHTML = "Submit";

buttonElement.addEventListener("click", () => {
    console.log("The button has been clicked!");
});


console.log("The button: ", buttonElement)




// Notice that the Body now contains the Heading 1 Element, although I never added that myself in the HTML.
console.log(body);


