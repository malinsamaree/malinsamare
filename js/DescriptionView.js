import * as elements from "./elements";
class DescriptionView {
  _markup() {
    return `<div class="description">
    <div class="description-left"></div>
    <div class="description-right">
      <div class="description-text">
      I’m a self tought developer who is focusing on web related designing and development incuding single page web apps.  It has been my passion for a long time and after being relocated in Munich, time has come to make my dream job as a developer a reality. During my short stay in Germany, I have done some sample projects in order to prove my abilities and I also have completed few customer projects as listed below.
      </div>
    </div>
  </div>`;
  }

  render() {
    elements.main.insertAdjacentHTML("beforeend", this._markup());
  }
}
export default new DescriptionView();
