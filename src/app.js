import style from "./main.css"

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const tabConent = document.getElementById(id);
    tabConent.classList.add("active");
  }
});
