import "./style.css";
import { homeTemplate } from "./components/home/home_template";
import { jobExperience } from "./components/experience/experience_constants";
import {
  experienceContainerTemplate,
  experienceTemplate,
} from "./components/experience/experience_templates";
import { projects } from "./components/projects/project_constants";
import { projectTemplate } from "./components/projects/projects-templates";

const sectionLinks = document.querySelectorAll(".link");
const menuButton = document.querySelector(".menu-btn");
const menuLinks = document.querySelectorAll(".site-menu a");
const mainContainer = document.querySelector(".site-main");
const footerContainer = document.querySelector(".site-footer");
let currentSection = "home";

const mainContainsSlide = () => {
  return mainContainer.classList.contains("slide-mode");
};

const changeSelectedSection = (section) => {
  sectionLinks.forEach((e) => {
    if (
      e.innerText === section &&
      e.parentElement.classList.contains("navigation-item")
    ) {
      e.parentElement.style.filter = "drop-shadow(0 0 10px #fff)";
      e.parentElement.style.opacity = "1";
      e.parentElement.style.transform = "translateY(-1px)";
      e.style.borderBottom = "1px solid";
    } else if (
      e.innerText !== section &&
      e.parentElement.classList.contains("navigation-item")
    ) {
      e.parentElement.style.filter = "";
      e.parentElement.style.opacity = "";
      e.parentElement.style.transform = "";
      e.style.borderBottom = "";
    }
    if (
      e.innerText === section &&
      e.parentElement.classList.contains("navigation-item-menu")
    ) {
      e.parentElement.style.marginInlineStart = "1rem";
      e.parentElement.style.opacity = "1";
      e.parentElement.style.filter = "drop-shadow(0 0 10px rgb(29, 29, 30))";
      e.innerHTML = "▸ " + e.innerHTML;
    } else if (
      e.innerText !== section &&
      e.parentElement.classList.contains("navigation-item-menu")
    ) {
      e.parentElement.style.marginInlineStart = "";
      e.parentElement.style.opacity = "";
      e.parentElement.style.filter = "";
      e.innerText = e.innerText.split("").some((e) => e === "▸")
        ? e.innerText.split("").slice(2).join("")
        : e.innerText;
    }
  });
};

const renderHome = () => {
  mainContainer.innerHTML += homeTemplate();
  changeSelectedSection("HOME");
};

const renderExperience = () => {
  mainContainer.innerHTML += experienceContainerTemplate();
  const experienceContainer = document.querySelector(".experience-container");
  jobExperience.forEach((e) => {
    experienceContainer.innerHTML += experienceTemplate(
      e.company,
      e.logoSvg,
      e.dates,
      e.description,
      e.responsibilities,
      e.web
    );
  });

  const cardsContainer = document.querySelector(".experience-container");
  const expCards = document.querySelectorAll(".experience-card");
  const rightBtn = document.querySelectorAll(".btn-right");
  const leftBtn = document.querySelectorAll(".btn-left");
  let midCardPos = 0;

  expCards[midCardPos].classList.toggle("middle-card");
  expCards[midCardPos + 1].classList.add("turn-right");

  const setCardClasses = (mCardPos) => {
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

  cardsContainer.addEventListener("click", (ev) => {
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

sectionLinks.forEach((link) =>
  link.addEventListener("click", (ev) => {
    ev.preventDefault();
    const category = ev.target.pathname.slice(1);

    if (!mainContainsSlide() && currentSection !== category) {
      currentSection = category;
      mainContainer.classList.toggle("slide-mode");
      footerContainer.classList.toggle("slide-mode");
      setTimeout(() => {
        mainContainer.classList.toggle("slide-mode");
        footerContainer.classList.toggle("slide-mode");
        mainContainer.innerHTML = "";
        switch (category) {
          case "home":
            renderHome();
            changeSelectedSection("HOME");
            break;
          case "experience":
            renderExperience();
            changeSelectedSection("EXPERIENCE");
            break;
          case "projects":
            renderProjects();
            changeSelectedSection("PROJECTS");
            break;
        }
      }, 1100);
    }
  })
);

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("menu-mode");
  document.querySelector(".site-menu").classList.toggle("menu-mode");
  document.querySelector(".logo").classList.toggle("menu-mode");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (ev) => {
    menuButton.click();
  });
});

renderHome();
