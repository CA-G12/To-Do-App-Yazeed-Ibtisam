const cardsContainer = document.querySelector(".container");
const addBtn = document.querySelector(".btn-add")

addBtn.onclick = () => {
  // eslint-disable-next-line no-undef
  openTaskModal(null, addTask);
};

fetch("/tasks")
  .then((res) => res.json())
  .then((data) => renderTasks(data))
  .catch(console.log);

function renderTasks(data) {
  
  cardsContainer.innerHTML = "";
  data.forEach((ele) => {
    const card = cardsContainer.createAppendElement("div", { className: "card", id: ele.id });
    const editBtn = card.createAppendElement("button", { className: "edit" });
    editBtn.createAppendElement("i", { className: "fa fa-pencil" });
    editBtn.addEventListener("click", () => {
      getTaskById(card.id)
        .then((result) => {
          updateTask("edit", result[0]);
        })
        .catch(console.log);
    });

    const deleteBtn = card.createAppendElement("button", { className: "delete" });
    deleteBtn.createAppendElement("i", { className: "fa fa-trash" });
    deleteBtn.addEventListener("click", () => {
      deleteTask(card.id);
    });

    card.createAppendElement("h4", { className: `status ${ele.status}`, textContent: ele.status });
    card.createAppendElement("h3", { textContent: ele.title });
    card.createAppendElement("p", { className: "description", textContent: ele.description });
    card.createAppendElement("h5", { textContent: ele.due_date });
  });
}

function deleteTask(id, next) {
  fetch("/tasks", {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  })
    .then(() => {window.location = "/";})
    .catch(err => next(err));
}

function addTask(opeation, taskObj, next) {
  fetch("/tasks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskObj),
  })
    .then(() => {window.location = "/"})
    .catch(err => next(err));
}

function updateTask(opeation, taskObj) {
  fetch("/tasks", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskObj),
  })
    .then((result) => result.json(result))
    .catch(console.log);
}

function getTaskById(id) {
  return fetch(`/tasks/${id}`);
}
