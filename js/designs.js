
window.onload = function () {
    
    "use strict";
    
    const form = document.getElementById("sizePicker"),
        submit = document.getElementById("submit"),
        table = document.getElementById("pixelCanvas"),
        color = document.getElementById("colorPicker"),
        height = document.getElementById("inputHeight"),
        width = document.getElementById("inputWidth");
        
    
    form.onsubmit = function (event) {
        event.preventDefault();
    };
    
    submit.onclick = function () {
        
        table.innerHTML = "";
        
        for (let i = 1; i <= height.value; i++) {
            table.appendChild(document.createElement("tr"));
            
            for (let x = 1; x <= width.value; x++) {
                table.lastElementChild.appendChild(document.createElement("td"));
            }
        }
        
        const allTd = document.querySelectorAll("td");
        
        for (let y = 0; y < allTd.length; y++) {
            allTd[y].onclick = function () {
                this.style.backgroundColor = color.value;
            };
            
            allTd[y].ondblclick = function () {
                this.style.backgroundColor = "white";
            };
        }
        
    };
    
};
