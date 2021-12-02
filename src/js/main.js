import addElement from "./addElement";
import getWeather from "./getWeather";

const city = document.getElementById("city");
const submitBtn = document.getElementById("submit");

function deleteElement () {
    if (document.getElementById("msg")) {
        document.getElementById("msg").remove();
    }
};

city.onfocus = deleteElement;

city.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }
);

submitBtn.addEventListener('click', () => {
    deleteElement();
    if (!city.value) {
        addElement("Enter city", city);
       } else {
        getWeather(city);
       }
    }
);