const colorDiv = document.getElementById("colorDiv");
const contentSpan = document.getElementById("contentSpan");

colorDiv.addEventListener("mouseover", function() {
  colorDiv.style.backgroundColor = "black";
});

colorDiv.addEventListener("mouseout", function() {
  colorDiv.style.backgroundColor = "blue";
});

const userInput = prompt("click:");
contentSpan.textContent = userInput;
