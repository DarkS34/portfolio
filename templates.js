export const homeTemplate = () => `
<section id="home">
  <div class="introduction">
    <span class="intro-text">Hola, mi nombre es</span>
    <span class="name">OLEKSANDR YATSENTYUK</span>
    <span class="profesion">y soy FullStack Developer.</span>
  </div>
  <div class="details-card">
    <p>
      Soy un estudiante de ingeniería informática, apasionado por la
      programación y en constante búsqueda de la perfección en mi trabajo.
      Me encanta la idea de crear aplicaciones y sitios web útiles para
      las personas, y siempre estoy en constante actualización y
      aprendizaje de las últimas tendencias y herramientas en el mercado.
      Si necesitas un desarrollador comprometido y apasionado, ¡no dudes
      en contactarme!
    </p>
  </div>
</section>
`;

export const projectTemplate = (name, description, git, web, img, video) => `
<div class="project-container">
  <article class="project">
        <div class="project-info">
          <span class="project-name">${name}</span>
          <span class="project-description">${description}</span>
          <div class="project-links-container">
            ${linksTemplate(git, web)}
          </div>
        </div>
        ${imgOrVideo(name, img, video)}
  </article>
</div>
`;

const linksTemplate = (git, web) => {
  if (git !== "" && web !== "") {
    return `<a href="${git}" class="project-git" target="_blank"> ${gitSvgTemplate()} </a>
            <a href="${web}" class="project-web" target="_blank">${webSvgTemplate()}</a>`;
  } else if (git === "" && web === "") {
    return "";
  } else {
    return `<a href="${git}" class="project-git" target="_blank"> ${gitSvgTemplate()} </a>`;
  }
};

const gitSvgTemplate = () => `
<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0,0,256,256"
    width="40px"
    height="40px"
    fill-rule="evenodd"
    >
    <g
        fill="#ffffff"
        fill-rule="evenodd"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style="mix-blend-mode: normal"
    >
        <g transform="scale(8,8)">
        <path
            d="M16,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z"
        />
        </g>
    </g>
</svg>
`;

const webSvgTemplate = () => `
<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
    <g>
        <path
            d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
            stroke="#fff"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </g>
</svg>
`;

const imgOrVideo = (name, img, vid) => {
  if (img === "") {
    return `<video class="project-video" src="${vid}" loop autoplay></video>`;
  } else {
    return `<img class="project-img" src="${img}" alt="${name}"/>`;
  }
};
