function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Marcar como concluída
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Botão de remover
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = () => li.remove();
  li.appendChild(removeBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
