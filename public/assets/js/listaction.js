let htmlList = document.querySelector("ol#list");
let addButton = document.querySelector("button#add");
let input = document.querySelector("input#new");

function getLocalStorage(){
  return JSON.parse(localStorage.getItem("ToDo") || "[]");
}
function setLocalStorage(list){
  return localStorage.setItem("ToDo", JSON.stringify(list));
}
function deleteMe(event){
  event.stopPropagation();
  let htmlListItem = this.parentNode;
  const indexToDelete = htmlListItem.className;
  htmlListItem.remove();
  let list = getLocalStorage();
  list.splice(indexToDelete, 1);
  setLocalStorage(list);
}
function checkMe(event){
  event.stopPropagation();
  const indexToCheck = this.parentNode.className;
  let list = getLocalStorage();
  list[indexToCheck].checked = this.checked;
  setLocalStorage(list);
}
function appendList(task, index){
  /* create list item */
  let li = document.createElement("li");
  li.className = index;
  htmlList.appendChild(li);

  /* create checkbox */
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${index}`;
  checkbox.checked = task.checked?'checked':'';
  li.appendChild(checkbox);
  
  let label = document.createElement("label");
  label.className = "content";
  label.htmlFor = `checkbox-${index}`
  label.innerText = task.body;
  li.appendChild(label);

  /* create delete button */
  let deleteButton = document.createElement("span");
  deleteButton.className = "delete";
  deleteButton.innerText = "✕";
  li.appendChild(deleteButton);

  /* addEventListener */
  deleteButton.addEventListener("click", deleteMe);
  checkbox.addEventListener("change", checkMe);
}
function readTasks(){
  list.innerHTML="";
  let todo = getLocalStorage();
  todo.forEach((task, index) => {
appendList(task, index);
  });
}

readTasks();
function addTask(event){
  event.stopPropagation();
  let list = getLocalStorage();
  const newTask = {
checked: false,
body: input.value
  };
  list.push(newTask);
  setLocalStorage(list);
  appendList(newTask);
}
addButton.addEventListener("click", addTask);