const cardsContainer = document.querySelector(".container");
const addBtn = document.querySelector(".btn-add");

addBtn.onclick = () => {
  // eslint-disable-next-line no-undef
  openTaskModal(null, addTask);
};

fetch("/tasks")
  .then((res) => res.json())
  .then((data) => renderTasks(data))
  .catch(console.log);

function renderTasks(data) {
  console.log(data);
  cardsContainer.innerHTML = "";
  data.forEach((ele) => {
    const card = cardsContainer.createAppendElement("div", { className: "card", id: ele.id });
    const editBtn = card.createAppendElement("button", { className: "edit" });
    editBtn.createAppendElement("i", { className: "fa fa-pencil" });
    editBtn.addEventListener("click", () => {
      getTaskById(card.id)
        .then((result) => result.json())
        .then((row) => {
          console.log("Row", row);
          openTaskModal(row, updateTask);
        })
        .catch((err) => {
          console.log("Fail: ", err);
        });
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
    .then(() => {
      window.location = "/";
    })
    .catch((err) => next(err));
}

addBtn.onclick = () => {
  // eslint-disable-next-line no-undef
  openTaskModal(null, addTask);
};

function addTask(opeation, taskObj) {
  console.log("TaskObj:", taskObj);
  fetch("/tasks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskObj),
  })
    .then(() => {
      window.location = "/";
    })
    .catch(console.log);
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
    .then(() => {
      window.location = "/";
    })
    .catch((err) => {
      console.log("Failed Edit: ", err);
    });
}

function getTaskById(id) {
  return fetch(`/tasks/${id}`);
}
