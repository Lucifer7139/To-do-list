function addTask() {
  const input = document.getElementById("taskInput") as HTMLInputElement;
  const list = document.getElementById("taskList") as HTMLUListElement;

  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);

  input.value = ""; // clear the box
}