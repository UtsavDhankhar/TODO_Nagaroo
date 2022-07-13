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
    y.innerHTML = "Delete";
    y.setAttribute("onclick", "delete_task(this)");
    y.setAttribute("id" , "delete");
    var t = document.createTextNode(t);
    x.appendChild(t);
    x.appendChild(y);
    li.appendChild(x);
}

function delete_task(clicked_element){

    li = clicked_element.parentNode;
    li.remove();
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