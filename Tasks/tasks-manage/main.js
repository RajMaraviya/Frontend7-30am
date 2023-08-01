const addBox = document.getElementById("add-task");
const wrapper = document.querySelector("[data-wrapper]");
const popup = document.querySelector("#popup");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentDate = `${months[new Date().getMonth() - 1]} ${new Date().getDate()}, ${new Date().getFullYear()}`;

// localStorage.clear();
const taskes = JSON.parse(localStorage.getItem("taskes") || "[]");
let upDateStatus = false;
let updateIndex = 0;
let removed = false;
// ShowPopup
function showPopup() {
    popup.classList.toggle("hidden");
    popup.classList.toggle("flex");
    setTimeout(() => {
        popup.classList.replace("opacity-0", "opacity-100");
        popup.querySelector("div").classList.toggle("opacity-0");
        popup.querySelector("div").classList.toggle("opacity-100");
        popup.querySelector("div").classList.toggle("scale-0");
        popup.querySelector("div").classList.toggle("scale-100");
    }, 0);
    popup.querySelector("input").focus();
    popup.addEventListener("click", (e) => {
        if (e.target == popup) {
            popup.classList.add("hidden");
            popup.classList.remove("flex");
            popup.querySelector("div").classList.replace("opacity-100", "opacity-0");
            popup.querySelector("div").classList.replace("scale-100", "scale-0");
        }
    });
}

function upDate(el) {
    upDateStatus = true;
    let index = el.getAttribute("data-index");
    updateIndex = parseInt(index);
    showPopup();
}

function deleteChild(el) {
    removed = true;
}
// delete
function deleteTask(el) {
    let index = el.getAttribute("data-index");
    taskes.splice(parseInt(index), 1);
    localStorage.setItem("taskes", JSON.stringify(taskes));
    trigger();
}

function trigger() {
    if (localStorage.getItem("taskes")) {
        // Clear All
        Array.from(wrapper.querySelectorAll("div")).forEach((el) => {
            el.remove();
        });
        // Appen Tasks To Page
        taskes.forEach((task, index) => {
            const card = document.querySelector("template").content.cloneNode(true).children[0];
            card.setAttribute("id", index);
            card.querySelector("h1").textContent = task.title;
            card.querySelector("#delete").setAttribute("data-index", index);
            card.querySelector("#update").setAttribute("data-index", index);
            card.querySelector("p.date").textContent = task.data;
            if (task.content) {
                task.content.forEach((element, id) => {
                    let checkbox = document.querySelectorAll("template")[1].content.cloneNode(true).children[0];
                    checkbox.setAttribute("taskID", index);
                    checkbox.querySelector("input").setAttribute("id", `${element.title}-${id}`);
                    checkbox.querySelector("label").setAttribute("for", `${element.title}-${id}`);
                    checkbox.querySelector("label").textContent = element.title;
                    if (element.checked == true) {
                        checkbox.querySelector("input").checked = true;
                    }
                    card.querySelector("[data-task-content]").appendChild(checkbox);
                    // Progress
                    progress(card);
                });
            }
            wrapper.appendChild(card);
        });
    }
}
trigger();

function progress(el) {
    const allCheckBox = Array.from(el.querySelectorAll("input"));
    const progress = el.querySelector("[data-progress]");
    let cala = 100 / allCheckBox.length;
    let checked = 0;
    allCheckBox.forEach((el) => {
        if (el.checked) {
            checked += 1;
        }
    });
    let reslut = checked * cala;
    if (!reslut) return;
    progress.style.width = `${Math.round(reslut)}%`;
    progress.textContent = `${Math.round(reslut)}%`;
    if (`${Math.round(reslut)}%` == "0%") {
        progress.textContent = ``;
    }
    checked = 0;
}

function count(el) {
    // input = CheckBox

    let input = el.querySelector("input");
    let contentIndex = parseInt(input.getAttribute("id").split("-")[1]);
    let taskID = parseInt(el.getAttribute("taskID"));
    let target = taskes[taskID].content[contentIndex];

    if (removed == true) {
        taskes[taskID].content.splice(contentIndex, 1);
        trigger();
        removed = false;
    }
    if (input.checked == true && removed == false) {
        target.checked = true;
    }
    if (input.checked == false && removed == false) {
        target.checked = false;
    }
    localStorage.setItem("taskes", JSON.stringify(taskes));
    let card = document.getElementById(taskID);
    progress(card);
}

// Add Box
function addTask() {
    let input = popup.querySelector("input");
    if (input.value) {
        if (!upDateStatus) {
            // Append a New Task
            taskes.push({ title: input.value.trim(), content: [], data: currentDate });
            localStorage.setItem("taskes", JSON.stringify(taskes));
            trigger();
            //
        } else {
            // Update a Task
            taskes[updateIndex].content.push({ title: input.value.trim(), checked: false });
            localStorage.setItem("taskes", JSON.stringify(taskes));
            trigger();
            upDateStatus = false;
        }
        // Remove Popup
        input.value = "";
        showPopup();
    }
}
