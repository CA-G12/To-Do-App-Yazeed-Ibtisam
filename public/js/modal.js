const openTaskModal = (taskObj, callback) => {
  const modal = document.querySelector(".modal-container.tasks");
  modal.style.display = "flex";

  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const modalHeading = modal.querySelector("h2");
  const titleInput = modal.querySelector("#title");
  const descriptionInput = modal.querySelector("#description");
  const dueDateInput = modal.querySelector("#due-date");
  const statusSelect = modal.querySelector("#status");
  const cateogrySelect = modal.querySelector("#category");
  const submitBtn = modal.querySelector(".submit");

  if (taskObj) {
    const { title, due_date, status, description } = taskObj;
    modalHeading.textContent = "Edit Task";
    titleInput.value = title;
    dueDateInput.value = due_date.slice(0, -5);
    descriptionInput.value = description;
    statusSelect.value = status;
    cateogrySelect.value = taskObj["category_id"];
    submitBtn.textContent = "+ Edit";
  } else {
    modalHeading.textContent = "New Task";
    submitBtn.textContent = "+ Add";
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    cateogrySelect.selectedIndex = 0;
    statusSelect.selectedIndex = 0;
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const operation = taskObj ? "edit" : "add";
    callback(operation, {
      id: taskObj && taskObj.id,
      title: titleInput.value,
      description: descriptionInput.value,
      dueDate: dueDateInput.value,
      status: statusSelect.value,
      category_id: cateogrySelect.value,
    });
    modal.style.display = "none";
  });
};

const openCategoryModal = (categoryObj, callback) => {
  const modal = document.querySelector(".modal-container.categories");
  modal.style.display = "flex";

  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const modalHeading = modal.querySelector("h2");
  const nameInput = modal.querySelector("#name");
  const colorInput = modal.querySelector("#color");

  const submitBtn = modal.querySelector(".submit");

  if (categoryObj) {
    const { name, color } = categoryObj;
    modalHeading.textContent = "Edit Category";
    nameInput.value = name;
    colorInput.value = color;

    submitBtn.textContent = "+ Edit";
  } else {
    modalHeading.textContent = "New Category";
    submitBtn.textContent = "+ Add";
    nameInput.value = "";
    colorInput.value = "black";
  }

  submitBtn.addEventListener("click", () => {
    const operation = categoryObj ? "edit" : "add";
    callback(operation, {
      id: categoryObj && categoryObj["id"],
      name: name.value,
      color: colorInput.value,
    });
  });
};
