const 
// Change active class when click on page number click.
const pageNumberLinks = document.querySelectorAll(".pages .page-number");
pageNumberLinks.forEach((numberLink) => {
  numberLink.addEventListener("click", (e) => {
    pageNumberLinks.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  });
});

fetch("/tasks").then(

).catch(console.log);
// fetch("/tasksid").then(console.log).catch(console.log);
// fetch("/taskstitle").then(console.log).catch(console.log);
// fetch("/category").then(console.log).catch(console.log);
// fetch("/filter").then(console.log).catch(console.log);
