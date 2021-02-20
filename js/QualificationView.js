import * as elements from "./elements";
class QualificationView {
  _qualifications = [
    {
      qualification: "MBA (Master of Business Administration)",
      institute: "Middlesex University, London",
      year: "2013",
      logo: "middlesex",
    },
    {
      qualification: "CIMA – Adv Dip MA",
      institute: "Chartered Institute of Management Accountants (CIMA), UK",
      year: "2014",
      logo: "cima",
    },
    {
      qualification:
        "Level 7 BTEC Advanced Professional Diploma in Management Studies",
      institute: "EDEXCEL, UK",
      year: "2012",
      logo: "btec",
    },
  ];

  _markup() {
    const images = require("../images/qualificartions/*.png");
    console.log(images);

    let qualificationStr = ``;
    this._qualifications.forEach((qualification) => {
      qualificationStr += `<div class="qualification-single">
        <div class="qualification-single-logo">
          <img src="${images[qualification.logo]}" alt=""/>
        </div>
        <div class="qualification-single-info">
          <div class="qualification-single-title">${
            qualification.qualification
          }</div>
          <div class="qualification-single-institute">${
            qualification.institute
          }</div>
          <div class="qualification-single-year">${qualification.year}</div>
        </div>

      </div>`;
    });

    return `<div class="qualification">
    <div class="qualification-left"></div>
    <div class="qualification-right">
      ${qualificationStr}
    </div>
  </div>`;
  }

  render() {
    elements.main.insertAdjacentHTML("beforeend", this._markup());
  }
}
export default new QualificationView();
