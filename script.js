// variable declaration
let userName = "Wycliffe";   // variable
let mood = "happy";          // variable

if (mood === "happy") {
    console.log(userName + " is feeling great today!");
} else {
    console.log(userName + " needs some motivation.");
}


// Function 1: Greet the user
function greetUser(name) {
    alert("Welcome to the website, " + name + "!");
}

// Function 2: Change background color dynamically
function changeBackground(color) {
    document.body.style.backgroundColor = color;
}


// Loop 1: For loop to list numbers in console
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

// Loop 2: While loop to count down
let count = 3;
while (count > 0) {
    console.log("Countdown: " + count);
    count--;
}


// DOM 1: Change the "Home" section text
document.getElementById("Home").querySelector("p").textContent = "Welcome to my humble abode, updated with JavaScript!";

// DOM 2: Add a new paragraph to the About section
let aboutSection = document.getElementById("About");
let newPara = document.createElement("p");
newPara.textContent = "I am learning JavaScript step by step!";
aboutSection.appendChild(newPara);

// DOM 3: Add a button in Contacts section that changes background color
let contactsSection = document.getElementById("Contacts");
let btn = document.createElement("button");
btn.textContent = "Change Background";
btn.onclick = function() {
    changeBackground("lightblue");
};
contactsSection.appendChild(btn);

// Call greetUser function on page load
greetUser(userName);
