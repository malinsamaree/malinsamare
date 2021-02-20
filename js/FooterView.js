import * as elements from "./elements";
class FooterView {
  _markup() {
    return `<div class="footer">
    <div class="footer-left"></div>
    <div class="footer-right">
      <div class="footer-right-first">
      Malin Manjula Samaranayake<br />
      Wallbergstrasse 10,<br />
      81539, München
      
      </div>
      <div class="footer-right-second">
      malinsamare@gmail.com<br />
      +49 151 175 773 04<br />
      +49 89 55056427<br />
      github - malinsamaree
      
      </div>
    </div>
  </div>`;
  }

  render() {
    elements.main.insertAdjacentHTML("beforeend", this._markup());
  }
}
export default new FooterView();
