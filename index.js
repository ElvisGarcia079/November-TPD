// Playing with the Vanilla Document Object Model

// Step 1
let body = document.querySelector("body");


// Step 2
let createHeading = document.createElement("h1");

// Step 3
body.appendChild(createHeading);

// Notice that the Body now contains the Heading 1 Element, although I never added that myself in the HTML.
console.log(body);
