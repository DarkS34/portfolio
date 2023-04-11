export const experienceContainerTemplate = () => `
  <section id="experiences">
    <button class="experience-btn btn-left">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="56"
        viewBox="0 96 960 960"
        width="56"
      >
        <path
          fill="#f5f5f5"
          d="M560.615 802.153 333.847 575.385l226.768-227.153 32.615 32.614-194.154 194.539L593.23 769.538l-32.615 32.615Z"
        />
      </svg>
    </button>
    <div class="experience-container">
    </div>
    <button class="experience-btn btn-right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="56"
        viewBox="0 96 960 960"
        width="56"
      >
        <path
          fill="#f5f5f5"
          d="m375.385 802.153-32.615-32.615 194.154-194.153L342.77 380.846l32.615-32.614 226.768 227.153-226.768 226.768Z"
        />
      </svg>
    </button>
    <div class="bottom-btn-container">
      <button class="bottom-experience-btn btn-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="56"
          viewBox="0 96 960 960"
          width="56"
          >
            <path
              fill="#f5f5f5"
              d="M560.615 802.153 333.847 575.385l226.768-227.153 32.615 32.614-194.154 194.539L593.23 769.538l-32.615 32.615Z"
            />
        </svg>
      </button>
      <button class="bottom-experience-btn btn-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="56"
          viewBox="0 96 960 960"
          width="56"
          >
          <path
            fill="#f5f5f5"
            d="m375.385 802.153-32.615-32.615 194.154-194.153L342.77 380.846l32.615-32.614 226.768 227.153-226.768 226.768Z"
          />
        </svg>
      </button>
    </div>
  </section>
`;

export const experienceTemplate = (
  cName,
  cLogo,
  wInterval,
  description,
  responsibilities,
  web
) => `
  <article class="experience-card">
    <div class="logo-container">
      ${cLogo}
    </div>
    <div class="job-info">
      <a href="${web}" target="_blank" class="company-name">${cName}</a>
      <span class="working-interval">${wInterval}</span>
      <span class="job-description">${description}</span>
      <p class="resp-intro">Responsabilidades:</p>
      <ul class="job-responsibilities">
      ${responsibilitiesTemplate(responsibilities)}
      </ul>
    </div>
  </article>
`;

const responsibilitiesTemplate = (resps) => {
  let respsInLi = "";
  resps.forEach((e) => {
    respsInLi += `<li class="responsibility">${e}</li>`;
  });
  return respsInLi;
};