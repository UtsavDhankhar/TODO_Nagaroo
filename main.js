let list = [];

function getTask(){
    task = document.getElementById("Task");
    let t = task.value;
    task.value = "";

    list.push(t);

    display_list(t);
}

function display_list(t){

    li = document.getElementById("list");
    var x = document.createElement("LI");
    var y = document.createElement("button");
    var z = document.createElement("button");
    var a = document.createElement("button");

    y.innerHTML = "&#215";
    z.innerHTML = "Edit";
    a.innerHTML = "&#10004";

    y.setAttribute("onclick", "delete_task(this)");
    y.setAttribute("id" , "delete");
    a.setAttribute("id" , "symbol");

    z.setAttribute("onclick" , "edit_task(this)");
    a.setAttribute("onclick" , "complete(this)");

    var t = document.createTextNode(t);
    x.appendChild(t);
    
    li.appendChild(x);
    li.appendChild(y);
    li.appendChild(z);
    li.appendChild(a);
}

function delete_task(clicked_element){
    li = clicked_element.previousSibling;
    li.remove();
    li = clicked_element.nextSibling;
    li.remove();
    li = clicked_element.nextSibling;
    li.remove();
    clicked_element.remove();
}


function edit_task(clicked_element){

    li = clicked_element.previousSibling;
    li = li.previousSibling;
    text = li.innerText;
    task = document.getElementById("Task");
    task.value = text;
    
    li.remove();
    li = clicked_element.previousSibling;
    li.remove();
    li = clicked_element.nextSibling;
    li.remove();
    clicked_element.remove();
    
}

function complete(clicked_element){
    li = clicked_element.previousSibling;
    li = li.previousSibling;
    li = li.previousSibling;

    li.setAttribute("id" , "complete");
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