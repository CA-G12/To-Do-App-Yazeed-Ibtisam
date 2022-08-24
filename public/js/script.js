// Change active class when click on page number click.
const pageNumberLinks = document.querySelectorAll(".pages .page-number");
pageNumberLinks.forEach((numberLink) => {
  numberLink.addEventListener("click", (e) => {
    pageNumberLinks.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  });
});

fetch("https://localhost:3000/tasks").then(console.log).catch(console.log);
