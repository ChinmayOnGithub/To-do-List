let task_count = 1;



function removeItem(labelID) {
    let label = document.getElementById(labelID);

    if (label.style.textDecoration === "line-through") {
        label.style.textDecoration = "none";
        label.style.color = "black";

    } else {
        label.style.textDecoration = "line-through";
        label.style.color = "green";
    }



}

function addNewTask() {
    const taskTemplate = document.getElementsByClassName("tasks-template")[0];

    task_count++;

    const newDiv = document.createElement("div");

    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = "task_new" + task_count;

    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", "task_new");
    newLabel.id = "task" + task_count + "_label";
    newLabel.innerText = "New task";


    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newLabel);

    taskTemplate.appendChild(newDiv);

    newCheckbox.addEventListener('click', function () {
        removeItem(newLabel.id);
    });

}


