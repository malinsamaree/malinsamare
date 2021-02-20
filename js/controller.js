import avatarView from "./AvatarView.js";
import homeView from "./HomeView.js";
import descriptionView from "./DescriptionView.js";
import portfolioView from "./PortfolioView.js";
import trainingsView from "./TrainingsView.js";
import qualificationView from "./QualificationView.js";
import footerView from "./FooterView.js";

import * as elements from "./elements";

console.log(document.documentElement.scrollHeight);

const init = function () {
  avatarView.renderAvatar();
  avatarView.selectElements();
  // avatarView.renderWall();
  // avatarView.scrollEvent();
  // avatarView.resizeEvent();

  homeView.render();
  descriptionView.render();
  portfolioView.render();
  trainingsView.render();
  qualificationView.render();
  footerView.render();
  avatarView.renderWall();
  avatarView.scrollEvent();
  avatarView.resizeEvent();
  // console.log(document.documentElement.scrollHeight);
};

init();
