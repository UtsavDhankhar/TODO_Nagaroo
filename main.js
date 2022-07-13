let list = [];

function getTask(){
    task = document.getElementById("Task");
    let t = task.value;
    task.value = "";
    console.log(t)
    list.push(t);

    display_list(t);
}

function display_list(t){

    li = document.getElementById("list");
    var x = document.createElement("LI");
    var y = document.createElement("button");
    var z = document.createElement("button");
    y.innerHTML = "Delete";
    z.innerHTML = "Edit";

    y.setAttribute("onclick", "delete_task(this)");
    y.setAttribute("id" , "delete");

    z.setAttribute("onclick" , "edit_task(this)");

    var t = document.createTextNode(t);
    x.appendChild(t);
    
    li.appendChild(x);
    li.appendChild(y);
    li.appendChild(z);
}

function delete_task(clicked_element){
    li = clicked_element.previousSibling;
    li.remove();
    li = clicked_element.nextSibling;
    li.remove();
    clicked_element.remove();
}


function edit_task(clicked_element){
    li = clicked_element.previousSibling;
    li = li.previousSibling;
    text = li.innerText;
    console.log(text);
    task = document.getElementById("Task");
    task.value = text;
    
    li.remove();
    li = clicked_element.previousSibling;
    li.remove();
    clicked_element.remove();
    
}


function clear_list(){

    while(true){

        try{
        li = document.getElementById("list");
        li.removeChild(li.firstElementChild);
        }
        catch(err){
            break;
        }
    }
    
}