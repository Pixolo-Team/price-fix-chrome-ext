// select all elements with the class "price"
const priceElements = document.querySelectorAll(".a-price-whole");

console.log(location.origin);

preProcessString = function (string) {
    //get the Number
    let number = parseInt(string);
    // Return as String
    return number.toString();
}

// loop through all elements and check if their text content ends with "99"
for (let i = 0; i < priceElements.length; i++) {
    const element = priceElements[i];

    // Get the Text to change
    let textToChange = preProcessString(element.textContent);

    if (textToChange.endsWith("9")) {
        // if it does, add 1 to the text content
        element.textContent = (parseInt(textToChange) + 1).toString();
    }
}