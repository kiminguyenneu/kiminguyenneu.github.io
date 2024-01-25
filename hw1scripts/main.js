// changing image by click
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "hw1images/me.png") {
    myImage.setAttribute("src", "hw1images/browhat.jpeg");
  } else {
    myImage.setAttribute("src", "hw1images/me.png");
  }
};

// changing h1 to personalized welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name 🌸");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName} 🌸`;
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName} 🌸`;
    }
}
myButton.onclick = () => {
setUserName();
};

// alert popup when clicked
document.querySelector(".kittycat").addEventListener("click", function () {
    alert("😸😸😸 𝑀𝐸𝒪𝒲! 😸😸😸");
  });