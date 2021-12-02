export default function addElement (textDiv, cityValue) {
    let newDiv = document.createElement("div");
    newDiv.id = 'msg';
    newDiv.innerText = textDiv;   
    let orderDiv = document.getElementById("order");
    orderDiv.after(newDiv);
    cityValue.value = "";
}