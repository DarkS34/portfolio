import { jobExperience } from "./experiences";
import { projects } from "./projects";
import "./style.css";
import {
  homeTemplate,
  projectTemplate,
  experienceContainerTemplate,
  experienceTemplate,
} from "./templates";

const menuButton = document.querySelector(".menu-btn");
const mainContainer = document.querySelector(".site-main");
const footerContainer = document.querySelector(".site-footer");

const mainContainsSlide = () => {
  return mainContainer.classList.contains("slide-mode");
};

const renderProjects = () => {
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
  document.querySelectorAll(".project").forEach((el) => observer.observe(el));
};

const renderExperience = () => {
  const setCardClasses = (mCardPos) => {
    const expCards = document.querySelectorAll(".experience-card");
    expCards.forEach((e) =>
      e.classList.remove("middle-card", "turn-left", "turn-right")
    );
    expCards[mCardPos].classList.add("middle-card");
    if (mCardPos > 0) {
      expCards[mCardPos - 1].classList.add("turn-left");
    }
    if (mCardPos < expCards.length - 1) {
      expCards[mCardPos + 1].classList.add("turn-right");
    }
  };

  mainContainer.innerHTML += experienceContainerTemplate();
  const experienceContainer = document.querySelector(".experience-container");
  jobExperience.forEach((e) => {
    experienceContainer.innerHTML += experienceTemplate(
      e.company,
      e.logoSvg,
      e.dates,
      e.description,
      e.responsibilities
    );
  });

  const cardsContainer = document.querySelector(".experience-container");
  const expCards = document.querySelectorAll(".experience-card");
  let midCardPos = 0;
  const rightBtn = document.querySelectorAll(".btn-right");
  const leftBtn = document.querySelectorAll(".btn-left");

  expCards.forEach((e, i) => {
    if (i !== midCardPos) {
      e.classList.add("turn-right");
    }
  });
  expCards[midCardPos].classList.toggle("middle-card");

  const scrollBymediaQuery = () => {
    if (window.matchMedia("(min-width: 1025px)").matches) {
      return 257;
    } else if (
      window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches
    ) {
      return 202;
    } else if (
      window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches
    ) {
      return 102;
    } else if (window.matchMedia("(max-width: 480px)").matches) {
      return 108;
    }
  };

  const btnsDisable = () => {
    midCardPos === 0
      ? leftBtn.forEach((e) => (e.style.opacity = ".1"))
      : leftBtn.forEach((e) => (e.style.opacity = "1"));
    midCardPos === expCards.length - 1
      ? rightBtn.forEach((e) => (e.style.opacity = ".1"))
      : rightBtn.forEach((e) => (e.style.opacity = "1"));
  };

  btnsDisable();
  rightBtn.forEach((e) => {
    e.addEventListener("click", () => {
      if (midCardPos !== expCards.length - 1) {
        cardsContainer.scroll({
          left: cardsContainer.scrollLeft + scrollBymediaQuery(),
          behavior: "smooth",
        });
        setCardClasses(++midCardPos);
        btnsDisable();
      }
    });
  });

  leftBtn.forEach((e) => {
    e.addEventListener("click", () => {
      if (midCardPos !== 0) {
        cardsContainer.scroll({
          left: cardsContainer.scrollLeft - scrollBymediaQuery(),
          behavior: "smooth",
        });
        setCardClasses(--midCardPos);
        btnsDisable();
      }
    });
  });

  cardsContainer.addEventListener("mousedown", (ev) => {
    const expArticle = ev.target.closest("article");
    expCards.forEach((e, i) => {
      if (e === expArticle && midCardPos !== i) {
        if (expArticle) {
          expCards.forEach((e) => e.classList.remove("middle-card"));
          expArticle.classList.toggle("middle-card");
        }
        midCardPos = i;
        cardsContainer.scrollTo({
          left: i * scrollBymediaQuery(),
          behavior: "smooth",
        });
        setCardClasses(midCardPos);
        btnsDisable();
      }
    });
  });
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
            renderExperience();
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
// mainContainer.innerHTML += homeTemplate();
renderExperience();
