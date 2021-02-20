import * as elements from "./elements";
class TrainingsView {
  _markup() {
    return `<div class="trainings">
    <div class="trainings-left"></div>
    <div class="trainings-right">
      <div class="trainings-right-inner">
        <div class="trainings-text">
          I have succesfully completed a 68.5 hour vanilla JavaScript course of 'Jonas Schmedtmann'<br />
          Feb-2021 <br />
          the cetificate of completion is in the following link <br /><br />
          <a href="https://www.udemy.com/certificate/UC-2199cf3e-c255-4e83-b855-650e62ed8a2e/" target="_blank"> certificate of completion </a>
        </div>
      </div>
    </div>
  </div>`;
  }

  render() {
    elements.main.insertAdjacentHTML("beforeend", this._markup());
  }
}
export default new TrainingsView();
