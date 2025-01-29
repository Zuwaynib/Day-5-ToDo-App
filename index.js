let inputText = document.querySelector("#todo-input");
let taskList = document.querySelector(".task-list");
let errorMessage = document.querySelector(".error");

function addTask() {
    if (inputText.value.trim() === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please enter a task!";
        errorMessage.classList.add("result");
        return;
        
    } else {
        errorMessage.style.display = "none";
        let li = document.createElement("li");
        li.textContent = inputText.value;
        taskList.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\uD83D\uDDD1";
        li.appendChild(span);
    }
    inputText.value = "";
    saveTasks();
}

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function saveTasks() {
    localStorage.setItem("data", taskList.innerHTML);
};

function showTasks() {
    taskList.innerHTML = localStorage.getItem("data");
}
showTasks();
