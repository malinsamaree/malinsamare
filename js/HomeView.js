import * as elements from "./elements";
class HomeView {
  _markup() {
    return `<div class="home">
    <div class="home-inner">
      <div class="home-left"></div>
      <div class="home-right">
        <div class="home-myself"></div>
        <div class="home-right-inner">
          <div class="home-brief">
            <h1 class="h1-1">Hi, I'm Malin</h1>
            <h1 class="h1-2">
              just a simple ordinary being, passionate about creative
              thinking and designing
            </h1>
            <h1 class="h1-3">living in München, Deutschland</h1>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }

  render() {
    elements.main.insertAdjacentHTML("beforeend", this._markup());
  }
}

export default new HomeView();
