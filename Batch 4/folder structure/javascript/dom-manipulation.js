const box = document.getElementById("jsbox");

function addHighlight() {
  box.classList.add("highlight");
}

//Adding or removing element
const container = document.getElementById("container");

document.getElementById("addElement").addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.textContent = "I am the new element";
  container.appendChild(newDiv);
});

document.getElementById("removeElement").addEventListener("click", () => {
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});

//Updating text
function changeText() {
  const textElement = document.getElementById("text");
  textElement.innerHTML = "<b>I am the Updated Text</b>";
}
