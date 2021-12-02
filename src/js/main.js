import addElement from "./addElement";
import getWeather from "./getWeather";

const city = document.getElementById("city");
const submitBtn = document.getElementById("submit");
const formEl = document.getElementById("form");

function deleteElement (idEl) {
    if (document.getElementById(idEl)) {
        document.getElementById(idEl).remove();
    }
};

city.addEventListener("focus", () => {
    deleteElement("msg"); 
    deleteElement("msg_warn"); 
});

city.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }
);

submitBtn.addEventListener('click', () => {
    deleteElement("msg");
    deleteElement("msg_warn");
    if (!city.value) {
        addElement("msg_warn", form, "Enter city!", city);
       } else {
        getWeather(city);
       }
    }
);