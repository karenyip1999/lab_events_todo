//Enter button
const button = document.querySelector("#enter");
button.addEventListener("click", () => {
    console.log("button clicked");
});

//Input
const textInput = document.querySelector("#new-todo");
//Output
const textOutput = document.querySelector("#text-output");

textInput.addEventListener("input", (evt) => {
    textOutput.innerText = evt.target.value;
});

const inputForm = document.querySelector("#todo-form");
const list = document.querySelector("#list");

inputForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target["new-todo"].value;
    list.appendChild(newListItem);
});