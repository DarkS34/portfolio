import { projects } from "./projects";
import "./style.css";
import { homeTemplate, projectTemplate } from "./templates";

const menuButton = document.querySelector(".menu-btn");
const mainContainer = document.querySelector(".site-main");
const footerContainer = document.querySelector(".site-footer")

const mainContainsSlide = () => {
  return mainContainer.classList.contains("slide-mode");
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("inScreen");
        if (entry.target.lastElementChild.tagName === "VIDEO") {
          entry.target.lastElementChild.play();
        }
      } else {
        entry.target.classList.remove("inScreen");
        if (entry.target.lastElementChild.tagName === "VIDEO") {
          entry.target.lastElementChild.pause();
        }
      }
    });
  },
  { threshold: 0.75 }
);

const renderProjects = () => {
  mainContainer.innerHTML += `<section id="projects"></section>`;
  const projectsContainer = document.querySelector("#projects");
  projects.forEach((e) => {
    projectsContainer.innerHTML += projectTemplate(
      e.name,
      e.description,
      e.git,
      e.web,
      e.img,
      e.video
    );
  });
  document
  .querySelectorAll(".project")
  .forEach((el) => observer.observe(el));
};

document.querySelectorAll(".link").forEach((link) =>
  link.addEventListener("click", (ev) => {
    ev.preventDefault();
    const category = ev.target.pathname.slice(1);

    if (!mainContainsSlide()) {
      mainContainer.classList.toggle("slide-mode");
      footerContainer.classList.toggle("slide-mode");
      setTimeout(() => {
        mainContainer.classList.toggle("slide-mode");
        footerContainer.classList.toggle("slide-mode");
        mainContainer.innerHTML = "";
        switch (category) {
          case "home":
            mainContainer.innerHTML += homeTemplate();
            break;
          case "experience":
            break;
          case "projects":
            renderProjects();
            break;
        }
      }, 1100);
    }
  })
);

document.querySelectorAll(".site-menu a").forEach((link) => {
  link.addEventListener("click", (ev) => {
    menuButton.click();
  });
});

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("menu-mode");
  document.querySelector(".site-menu").classList.toggle("menu-mode");
  document.querySelector(".logo").classList.toggle("menu-mode");
});

// Se carga la página de home
mainContainer.innerHTML += homeTemplate();
