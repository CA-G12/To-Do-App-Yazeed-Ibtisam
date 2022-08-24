const openTaskModal = (taskObj, callback) => {
  const modal = document.querySelector(".modal-container.tasks");
  modal.style.display = "flex";

  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const modalHeading = modal.querySelector("h2");
  const titleInput = modal.querySelector("#title");
  const dueDateInput = modal.querySelector("#due-date");
  const statusSelect = modal.querySelector("#status");
  const cateogrySelect = modal.querySelector("#category");
  const submitBtn = modal.querySelector(".submit");

  if (taskObj) {
    const { title, due_date, status, categoryId } = taskObj;
    modalHeading.textContent = "Edit Task";
    titleInput.value = title;
    dueDateInput.value = due_date;
    statusSelect.value = status;
    cateogrySelect.selectedIndex = categoryId;
    submitBtn.textContent = "+ Edit";
  } else {
    modalHeading.textContent = "New Task";
    submitBtn.textContent = "+ Add";
    titleInput.value = "";
    dueDateInput.value = "";
    cateogrySelect.selectedIndex = 0;
    statusSelect.selectedIndex = 0;
  }

  submitBtn.addEventListener("click", () => {
    const operation = taskObj ? "edit" : "add";
    callback(operation, {
      id: taskObj && taskObj["id"],
      title: titleInput.value,
      due_date: dueDateInput.value,
      status: statusSelect.value,
    });
  });
};

// openTaskModal();
// openTaskModal({title:'Sleep', 'due_date':'2022-12-09', status:'done', categoryId: 1});

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

// openCategoryModal();
// openCategoryModal({name:'Travel', 'color':'#989765'});