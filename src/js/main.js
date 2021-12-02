import addElement from "./addElement";

const city = document.getElementById("city");
const submitBtn = document.getElementById("submit");

function deleteElement () {
    if (document.getElementById("msg")) {
        document.getElementById("msg").remove();
    }
}

city.onfocus = deleteElement;

submitBtn.addEventListener('click', () => {
    deleteElement();
    if (!city.value) {
        addElement("Enter city", city);
       } else {
        addElement("City", city);
       }
    }
);