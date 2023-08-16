

// function AddTask()
// {
//     const inputData=document.querySelector("#input-box");
//     const ul=document.querySelector(".list-item");
//     alert("control is here");
//     debugger
//    const li=document.createElement("li");
//    const input = document.createElement("input");
//    input.type="checkbox";
//    li.appendChild(input);
//    li.textContent=inputData.Value;
//    ul.appendChild(li);

// }
// function addCheckboxWithListItem() {
//     debugger
//     // Create a new checkbox element
//     const inputData=document.querySelector("#input-box");
//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.name = "dynamicCheckbox";
//     checkbox.value = "checkboxValue";
//     checkbox.id = "checkboxId";

//     // Create a list item for the checkbox
//     var listItem = document.createElement("li");

//     // Create a label for the checkbox
//     var label = document.createElement("label");
//     var inputTask = inputData.value;
//     label.innerHTML = inputTask;

//     // Append the checkbox and label to the list item
//     listItem.appendChild(checkbox);
//     listItem.appendChild(label);

//     // Get the list container where checkboxes with list items will be added
//     var container = document.querySelector(".list-item");

//     // Append the list item to the list container
//     container.appendChild(listItem);
//     localStorage.setItem("userData", inputTask);
// }

// // Attach the event listener to the button
// var addButton = document.getElementById("btnAdd");
// addButton.addEventListener("click", addCheckboxWithListItem);

//var jsonData = JSON.stringify(inputTask);

// Function to add a new task
function addTask() {
    // var taskInput = document.getElementById("input-box");
    // var taskText = taskInput.value.trim();

    // if (taskText === "") {
    //     alert("Please enter a task.");
    //     return;
    // }

    // var taskList = document.getElementById("taskList");
    // //const inputData=document.querySelector("#input-box");
    // var checkbox = document.createElement("input");
    // checkbox.type = "checkbox";
    // checkbox.name = "dynamicCheckbox";
    // checkbox.value = "checkboxValue";
    // checkbox.id = "checkboxId";


    // var li = document.createElement("li");
    // li.innerText = taskText;

    // taskList.appendChild(li);
    // taskInput.value = "";
     
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "dynamicCheckbox";
    checkbox.value = "checkboxValue";
    checkbox.id = "checkboxId";

    // Create a list item for the checkbox
    var listItem = document.createElement("li");

    // Create a label for the checkbox
    var label = document.createElement("label");
    const inputData=document.querySelector("#input-box");
    var inputTask = inputData.value;
    label.textContent = inputTask;

    // Append the checkbox and label to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    // Get the list container where checkboxes with list items will be added
    var container = document.getElementById("taskList");

    // Append the list item to the list container
    container.appendChild(listItem);
    inputData.value="";
    //saveTaskListToLocalStorage();
}
// function saveTaskListToLocalStorage() {
//     var taskList = document.getElementById("taskList").innerHTML;
//     localStorage.setItem("taskListData", taskList);
// }

// window.onload = function() {
//     var taskListData = localStorage.getItem("taskListData");
//     if (taskListData) {
//         document.getElementById("taskList").innerHTML = taskListData;
//     }
// };
