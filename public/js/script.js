// Change active class when click on page number click.
// const pageNumberLinks = document.querySelectorAll(".pages .page-number");
// pageNumberLinks.forEach((numberLink) => {
//   numberLink.addEventListener("click", (e) => {
//     pageNumberLinks.forEach((link) => link.classList.remove("active"));
//     e.target.classList.add("active");
//   });
// });

fetch("/tasks")
  // .then((result) =>console.log(result.rows))
  .then((res) => res.json())
  .then((data) => renderTasks(data))
  .catch(console.log);

// fetch("/tasksid").then(console.log).catch(console.log);
// fetch("/taskstitle").then(console.log).catch(console.log);
// fetch("/category").then(console.log).catch(console.log);
// fetch("/filter").then(console.log).catch(console.log);

const cardsContainer = document.querySelector(".container");

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

function deleteTask(id) {
  fetch("/tasks", {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  })
    .then((result) => {
      console.log(result.redirected);
      window.location = "/";
    })
    .catch(console.log);
}
// const editBtn = document.querySelector('.edit').onclick = () => {
//   openTaskModal(taskObj, )
// }

const addBtn = (document.querySelector(".btn-add").onclick = () => {
  openTaskModal(null, addTask);
});

function addTask(opeation, taskObj) {
  console.log(taskObj);
  fetch("/tasks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskObj),
  })
    .then((result) => {
      console.log(result);
      window.location = "/";
    })
    .catch(console.log);
}

function updateTask(opeation, taskObj) {
  console.log(taskObj);
  fetch("/tasks", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskObj),
  })
    .then((result) => console.log(result))
    .catch(console.log);
}

function getTaskById(id) {
  return fetch(`/tasks/${id}`);
}
