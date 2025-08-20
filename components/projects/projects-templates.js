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
    width="40"
    height="40"
    viewBox="0 0 24 24"
    stroke-width="1"
    stroke="#f5f5f5"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
    />
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
  if ((img === "") & (vid === "")) {
    return ""
  } else if ((img === "") & (vid !== "")) {
    return `<video class="project-video" src="${vid}" loop autoplay></video>`;
  } else {
    return `<img class="project-img" src="${img}" alt="${name}"/>`;
  }
};
