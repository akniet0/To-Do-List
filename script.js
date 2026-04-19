function addTask(){
    let text = document.getElementById("taskInput").value;

    let span = document.createElement("span");
    span.innerText = text;
    
    let item = document.createElement("li");

    let button = document.createElement("input");
    button.type = "checkbox";

    let delButton = document.createElement("button");
    delButton.innerText = "remove";
    delButton.style.display = "none";

    button.onclick = function(){

        if (button.checked){
            span.style.textDecoration = "line-through";
            delButton.style.display = "block";
        }
        else{
            span.style.textDecoration = "none";
            delButton.style.display = "none";
        }
        
    }

    delButton.onclick = function(){
        item.remove();
    }

    item.append(button);
    item.append(span);
    item.append(delButton);

    if (text != ""){
        document.getElementById("taskList").append(item);
    }
    else{
        alert("Your input is empty");
    }

    document.getElementById("taskInput").value = "";

    
}