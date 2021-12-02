export default function addElement (idDiv, prevEl, textDiv, cityValue) {
    let newDiv = document.createElement("div");
    newDiv.id = idDiv;
    newDiv.innerText = textDiv;
    prevEl.after(newDiv);
    cityValue.value = "";
}