import ProjectsCatalog from './data.js';
window.addEventListener('DOMContentLoaded', () => {
  const ProjectsCon = document.querySelector('.projects-container');
  let content = ProjectsCatalog.map((item) => {
    const { projectName, url, img } = item;
    return `
    <div class="each-project">
          <img src='${img}' alt="here" />
          <div class="project-details">
            <h2>${projectName}</h2>
            <h3>Busy<span>Dev</span></h3>
            <a href='${url}' class="visit btn obn">visit</a>
          </div>
        </div>`;
  });
  content = content.join('');
  ProjectsCon.innerHTML = content;
});
