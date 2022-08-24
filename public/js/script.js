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
.then(res => res.json())
.then(data => renderTasks(data))
.catch(console.log);

// fetch("/tasksid").then(console.log).catch(console.log);
// fetch("/taskstitle").then(console.log).catch(console.log);
// fetch("/category").then(console.log).catch(console.log);
// fetch("/filter").then(console.log).catch(console.log);

const cardsContainer = document.querySelector('.container');

function renderTasks(data) {
  cardsContainer.innerHTML = '';
  data.forEach((ele)=>{

   cardsContainer.innerHTML += `
  <div class="card">
                    <h4 class="status done">${ele.status}</h4>
                    <h3>${ele.title}</h3>
                    <p class="description">${ele.description}</p>
                    <h5>${ele.due_date}</h5>
                    
                </div>
  `
  })
}

const addBtn = document.querySelector('.btn-add').onclick = () => {
  openTaskModal();
}

function addTask(){
  fetch("/")
// .then((result) =>console.log(result.rows))
.then(res => res.json())
.then(data => renderTasks(data))
.catch(console.log);
}
