import * as elements from "./elements";
class AvatarView {
  _scrollPerAnimCycle = 2340;
  _scrollRotateRatio = 3;
  _degrees;

  elements = {
    avatar: null,
    avatarRightArm: null,
    avatarRightForearm: null,
    avatarLeftArm: null,
    avatarLeftForearm: null,
    avatarRightThigh: null,
    avatarRightCalf: null,
    avatarLeftThigh: null,
    avatarLeftCalf: null,
    avatarHead: null,
    avatarBody: null,
    avatarEye: null,
    wall: null,
  };

  markup() {
    return `<div class="avatar">
      <div class="avatar-inner">
        <div class="avatar-head avatar-head-skin-color">
          <div class="avatar-left-eye avatar-eye">
            <div class="avatar-eye-inner"></div>
          </div>
          <div class="avatar-right-eye avatar-eye">
            <div class="avatar-eye-inner"></div>
          </div>
          <div class="avatar-right-arm">
            <div class="avatar-right-forearm"></div>
          </div>
          <div class="avatar-left-arm">
            <div class="avatar-left-forearm"></div>
          </div>
          <div class="avatar-body">
            <div class="avatar-right-thigh">
              <div class="avatar-right-calf"></div>
            </div>
            <div class="avatar-left-thigh">
              <div class="avatar-left-calf"></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  renderAvatar() {
    elements.body.insertAdjacentHTML("afterBegin", this.markup());
  }

  selectElements() {
    this.elements.avatar = document.querySelector(".avatar");
    this.elements.avatarRightArm = document.querySelector(".avatar-right-arm ");
    this.elements.avatarRightForearm = document.querySelector(
      ".avatar-right-forearm"
    );
    this.elements.avatarLeftArm = document.querySelector(".avatar-left-arm ");
    this.elements.avatarLeftForearm = document.querySelector(
      ".avatar-left-forearm"
    );
    this.elements.avatarRightThigh = document.querySelector(
      ".avatar-right-thigh"
    );
    this.elements.avatarRightCalf = document.querySelector(
      ".avatar-right-calf"
    );
    this.elements.avatarLeftThigh = document.querySelector(
      ".avatar-left-thigh"
    );
    this.elements.avatarLeftCalf = document.querySelector(".avatar-left-calf");
    this.elements.avatarHead = document.querySelector(".avatar-head");
    this.elements.avatarBody = document.querySelector(".avatar-body");
    this.elements.avatarEye = Array.from(
      document.querySelectorAll(".avatar-eye")
    );
  }

  scrollEvent() {
    window.addEventListener(
      "scroll",
      function (e) {
        const scrollY = window.scrollY;

        if (scrollY === 0) {
          this.elements.avatarRightArm.style.transform = `rotate(80deg)`;
          this.elements.avatarRightForearm.style.transform = `rotate(0deg)`;
          this.elements.avatarLeftArm.style.transform = `rotate(-80deg)`;
          this.elements.avatarLeftForearm.style.transform = `rotate(0deg)`;
          this.elements.avatarRightThigh.style.transform = `rotate(-5deg)`;
          this.elements.avatarRightCalf.style.transform = `rotate(5deg)`;
          this.elements.avatarLeftThigh.style.transform = `rotate(5deg)`;
          this.elements.avatarLeftCalf.style.transform = `rotate(-5deg)`;
          this.elements.avatarHead.style.transform = `rotate(0deg)`;
          this.elements.avatarBody.style.transform = `rotate(0deg)`;
          this.elements.avatarHead.classList.add("avatar-head-skin-color");
          this.elements.avatarHead.classList.remove("avatar-head-dark-color");
          this.elements.avatarEye.forEach((eye) =>
            eye.classList.remove("avatar-hide")
          );
          this.elements.wall.style.top = "269px";
        } else {
          this.elements.avatarHead.classList.remove("avatar-head-skin-color");
          this.elements.avatarHead.classList.add("avatar-head-dark-color");
          this.elements.avatarEye.forEach((eye) =>
            eye.classList.add("avatar-hide")
          );

          this._degrees = Math.floor(
            (scrollY % this._scrollPerAnimCycle) / this._scrollRotateRatio
          );

          this.animateAvatarRightArm(this._degrees);
          this.animateAvatarRightForearm(this._degrees);
          this.animateAvatarLeftArm(this._degrees);
          this.animateAvatarLeftForearm(this._degrees);
          this.animateAvatarRightThigh(this._degrees);
          this.animateAvatarRightCalf(this._degrees);
          this.animateAvatarLeftThigh(this._degrees);
          this.animateAvatarLeftCalf(this._degrees);
          this.animateAvatarHeadBody(this._degrees);

          this.elements.wall.style.top = `${
            Math.floor(-scrollY / (this._scrollRotateRatio + 5)) + 100
          }px`;
        }
      }.bind(this)
    );
  }

  animateAvatarHeadBody = function (degrees) {
    if (degrees > 130 && degrees < 520) {
      const rotateDeg = Math.floor((325 - degrees) / 19);
      this.elements.avatarHead.style.transform = `translate(-50% , 0) rotate(${rotateDeg}deg)`;
      this.elements.avatarBody.style.transform = `rotate(${-rotateDeg}deg)`;
    }

    if ((degrees > 520 && degrees < 780) || (degrees > 0 && degrees < 130)) {
      let rotateDeg;
      if (degrees > 520 && degrees < 780) {
        rotateDeg = Math.floor((degrees - 715) / 19);
      }
      if (degrees > 0 && degrees < 130) {
        rotateDeg = 3 + Math.floor(degrees / 19);
      }
      this.elements.avatarHead.style.transform = `translate(-50% , 0) rotate(${rotateDeg}deg)`;
      this.elements.avatarBody.style.transform = `rotate(${-rotateDeg}deg)`;
    }
  };

  animateAvatarRightArm(degrees) {
    this.elements.avatarRightArm.style.transform = `rotate(60deg)`;
    this._rotateDeg(degrees, this.elements.avatarRightArm, -85, 50, 85);
    this._rotateDeg(degrees, this.elements.avatarRightArm, -85, 50, 700, false);
  }

  animateAvatarRightForearm(degrees) {
    this.elements.avatarRightForearm.style.transform = `rotate(-140deg)`;
    this._rotateDeg(
      degrees,
      this.elements.avatarRightForearm,
      -130,
      5,
      1,
      false
    );
    this._rotateDeg(degrees, this.elements.avatarRightForearm, -140, -10, 790);
  }

  animateAvatarLeftArm(degrees) {
    this.elements.avatarLeftArm.style.transform = `rotate(-50deg)`;
    this._rotateDeg(degrees, this.elements.avatarLeftArm, -50, 85, 310);
    this._rotateDeg(degrees, this.elements.avatarLeftArm, -50, 85, 475, false);
  }

  animateAvatarLeftForearm = function (degrees) {
    this.elements.avatarLeftForearm.style.transform = `rotate(140deg)`;
    this._rotateDeg(
      degrees,
      this.elements.avatarLeftForearm,
      5,
      140,
      400,
      false
    );
    this._rotateDeg(degrees, this.elements.avatarLeftForearm, 5, 140, 385);
  };

  animateAvatarRightThigh = function (degrees) {
    if (degrees >= 650 && degrees <= 780) {
      this.elements.avatarRightThigh.style.transform = `rotate(-130deg)`;
    }
    this._rotateDeg(degrees, this.elements.avatarRightThigh, -130, -5, 130);
    this._rotateDeg(
      degrees,
      this.elements.avatarRightThigh,
      -130,
      -5,
      520,
      false
    );
  };

  animateAvatarRightCalf = function (degrees) {
    if (degrees >= 650 && degrees <= 780) {
      this.elements.avatarRightCalf.style.transform = `rotate(130deg)`;
    }
    this._rotateDeg(degrees, this.elements.avatarRightCalf, 5, 130, 130, false);
    this._rotateDeg(degrees, this.elements.avatarRightCalf, 5, 130, 520);
  };
  animateAvatarLeftThigh = function (degrees) {
    if (degrees >= 260 && degrees <= 390) {
      this.elements.avatarLeftThigh.style.transform = `rotate(130deg)`;
    }
    this._rotateDeg(degrees, this.elements.avatarLeftThigh, 5, 130, 130);
    this._rotateDeg(degrees, this.elements.avatarLeftThigh, 5, 130, 520, false);
  };
  animateAvatarLeftCalf = function (degrees) {
    if (degrees >= 260 && degrees <= 390) {
      this.elements.avatarLeftCalf.style.transform = `rotate(-130deg)`;
    }
    this._rotateDeg(
      degrees,
      this.elements.avatarLeftCalf,
      -130,
      -5,
      130,
      false
    );
    this._rotateDeg(degrees, this.elements.avatarLeftCalf, -130, -5, 520);
  };

  _rotateDeg = function (
    degrees,
    el,
    limitLow,
    limitHigh,
    value,
    direction = true
  ) {
    const rotateDeg = direction ? degrees - value : value - degrees;
    if (rotateDeg >= limitLow && rotateDeg <= limitHigh) {
      el.style.transform = `rotate(${rotateDeg}deg)`;
    }
  };

  renderWall() {
    const height = Math.floor(
      Number.parseFloat(window.getComputedStyle(this.elements.avatar).height)
    );
    const width = Math.floor(
      Number.parseFloat(window.getComputedStyle(this.elements.avatar).width)
    );
    const documentHeight = document.documentElement.scrollHeight;

    const wallHeight = Math.floor(documentHeight / this._scrollRotateRatio);
    // const wallHeight = Math.floor(documentHeight);

    const wall = `
    <div class="climbingWall" style="height:${wallHeight}px; width:${width}px"></div>
    `;

    this.elements.avatar.insertAdjacentHTML("afterBegin", wall);

    this.elements.wall = this.elements.avatar.querySelector(".climbingWall");

    const numGrips = this._calcNumGrips(width, height);

    // const colors = [`rgb(158, 134, 90)`, `rgb(100, 82, 49)`, `rgb(58, 46, 25)`];
    const colors = [`#997859`, `#524535`, `#646140`];

    for (let i = 0; i < numGrips; i++) {
      const grip = `
        <div class="climbingWallGrip" style="top:${this._generateRandom(
          documentHeight
        )}px; left:${this._generateRandom(width - 50)}px; background:${
        colors[this._generateRandom(3)]
      }"></div>
        `;

      this.elements.wall.insertAdjacentHTML("afterBegin", grip);
    }
  }

  _generateRandom(val) {
    return Math.floor(Math.random() * val);
  }

  _calcNumGrips(width, height) {
    const factor = 20;
    return Math.floor((width / factor) * (height / factor));
  }

  resizeEvent() {
    window.addEventListener(
      "resize",
      function () {
        this.elements.avatar.removeChild(this.elements.wall);
        this.renderWall();
      }.bind(this)
    );
  }
}

export default new AvatarView();
