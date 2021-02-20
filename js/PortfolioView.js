import * as elements from "./elements";

class PortfolioView {
  _work = [
    {
      name: "yakek.com",
      url: "https://yakek.com",
      description:
        "a fully operational budget management web app for individuals. Developed on a custom made php mvc and router (sample project)",
      technologies: ["html", "css", "jquery", "php", "mysql"],
      tools: ["vscode"],
      portfolioImage: "yakek",
      github: "https://github.com/malinsamaree/yakek",
    },
    {
      name: "notie",
      url: "https://notie.netlify.app/",
      description:
        "an user friendly sticky note app with searching and sorting. a front end web app. data is stored in browser’s internal storage (sample project)",
      technologies: ["js", "sass", "html", "css"],
      tools: ["vscode", "npm", "parcel", "babel", "git"],
      portfolioImage: "notie",
      github: "https://github.com/malinsamaree/notie",
    },
    {
      name: "irina welt",
      url: "https://weisheitendesherzens.de/",
      description:
        "a personal website (single page) for a poet in Munich. fully functional content management backend is done with php and mySql (customer project).",
      technologies: ["php", "html", "jquery", "css", "mysql"],
      tools: ["vscode"],
      portfolioImage: "irina",
      github: "#",
    },
    {
      name: "MKS Schlüsseldienst",
      url: "https://yakek.com/mks/",
      description:
        "a business website, almost completed, but not yet published. fully functional content management backend is done with php and mySql (customer project)",
      technologies: ["php", "html", "jquery", "css", "mysql"],
      tools: ["vscode"],
      portfolioImage: "mks",
      github: "#",
    },
    {
      name: "Teaflower München",
      url: "https://teaflower.de/",
      description: "an e-commerce web site done with prestashop",
      technologies: ["prestashop"],
      tools: ["vscode"],
      portfolioImage: "teaflower",
      github: "#",
    },
    {
      name: "mapty",
      url: "https://malin-mapty.netlify.app/",
      description:
        "Part of my javascript training. this app facilitates to record some activities on a map",
      technologies: ["js", "sass", "html", "css"],
      tools: ["vscode"],
      portfolioImage: "mapty",
      github: "https://github.com/malinsamaree/mapty",
    },
    {
      name: "forkify",
      url: "https://malin-forkify.netlify.app/",
      description:
        "Part of my javascript training. more than 1 million recipes can be searched with this web app via an open API",
      technologies: ["js", "sass", "html", "css"],
      tools: ["vscode", "npm", "parcel", "babel", "git"],
      portfolioImage: "forkify",
      github: "https://github.com/malinsamaree/forkify",
    },
    {
      name: "bankist",
      url: "https://malin-bankist-app.netlify.app/",
      description:
        "Part of my javascript training. a very basic banking app [user1 : ‘ms’, ’1111’] [user2 : ‘mm’, ’2222’]",
      technologies: ["js", "sass", "html", "css"],
      tools: ["vscode"],
      portfolioImage: "bankist",
      github: "https://github.com/malinsamaree/bankist",
    },
    {
      name: "bankist web",
      url: "https://malin-bankist-web.netlify.app/",
      description:
        "Part of my javascript training. a simple website done using vanilla js...",
      technologies: ["js", "html", "css"],
      tools: ["vscode"],
      portfolioImage: "bankistweb",
      github: "https://github.com/malinsamaree/a-website-with-vanilla-js",
    },
  ];

  _markup() {
    let htmlStr = ``;
    const images = require("../images/technologies/*.png");
    const portfolioImgs = require("../images/portfolio/*.jpg");

    this._work.forEach((work) => {
      let technologiesStr = ``;
      let toolsStr = ``;
      work.technologies.forEach((technology) => {
        technologiesStr += `<img src="${images[technology]}" alt="${technology}" />`;
      });

      work.tools.forEach((tool) => {
        toolsStr += `<img src="${images[tool]}" alt="${tool}" />`;
      });

      htmlStr += `
      <div class="pf-single">
        <div class="pf-single-title"><a href="${work.url}" target = "_blank"> ${
        work.name
      }</a></div>
        <div class="pf-single-description">${work.description}</div>
        <a href="${work.url}" target = "_blank">
          <div class="pf-single-image" style="background:url(${
            portfolioImgs[work.portfolioImage]
          }); background-position:center;background-size:cover">
          </div>
        </a>
        <div class="pf-single-technologies">${technologiesStr}</div>
        <div class="pf-single-tools">${toolsStr}</div>
        <div class="pf-single-git">
          <img src="${images["github"]}" alt="${images["github"]}"/> &nbsp; 
          <a href="${work.github}" target = "_blank">${work.github}</a>
        </div>
      </div>
      `;
    });

    return `<div class="portfolio">
    <div class="portfolio-left"></div>
    <div class="portfolio-right">
      ${htmlStr}
    </div>
  </div>`;
  }

  render() {
    elements.main.insertAdjacentHTML("beforeend", this._markup());
  }
}
export default new PortfolioView();
