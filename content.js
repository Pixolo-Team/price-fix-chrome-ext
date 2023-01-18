// select all elements with the class "price"
const priceElements = document.querySelectorAll(
  ".a-price-whole,._30jeq3,_1_WHN1,.product-discountedPrice,.aZK3gc Lhpu7d,.lfloat product-price,.pip-price__integer,.css-111z9ua,.f18 tx-b fwb,.offer-price,priceDis"
);

// const priceElements = document.querySelectorAll("._30jeq3 _1_WHN1");

// console.log(location.origin);

preProcessString = function (string) {
    string.trim();
    //get the Number
    if (string.includes(",")) {
        string = string.replace(",", "");
    }
    if (string.includes("₹")) {
        string = string.replace("₹", "");
        console.log(string);
    }
    if (string.includes("Rs")) {
        string = string.replace("Rs.", "");
    }
    let number = parseInt(string);
    // Return as String
    return number.toString();
};


// loop through all elements and check if their text content ends with "99"
for (let i = 0; i < priceElements.length; i++) {
    const element = priceElements[i];

    // Get the Text to change
    let textToChange = preProcessString(element.textContent);

    if (textToChange.endsWith("9")) {
        // if it does, add 1 to the text content
        let start_txt = element.textContent.slice(0, element.textContent.search(/\d/g))
        let end_txt = element.textContent.slice(element.textContent.search(/\d$/g) + 1)
        element.textContent = start_txt + (parseInt(textToChange) + 1) + end_txt;


    }
}

// TODO: What to do for the price 1,29,990
// Amaazon : class= a-price-whole  Symbol: ₹
// Flipkart: class= _30jeq3    Symbol: ₹
// Myntra: class= product-discountedPrice for discounted rate, doesnt provide any class to span for non discounted rate  Symbol:Rs
// Google Shopping: class=aZK3gc Lhpu7d   Symbol: ₹
// Snapdeal: class=lfloat product-price while searching for some items, at home page class=mrp  Symbol: ₹
// IKEA: class=pip-price__integer  Symbol: Rs
// Nykaa: class=css-111z9ua   Symbol: ₹
// Purplle: class=f18 tx-b fwb  Symbol: ₹
// My glamm: class=offer-price  Symbol: ₹
