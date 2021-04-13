"use strict";

const Loading = (function () {
  const loading = document.getElementById(`loading_sec`);
  window.addEventListener("load", () => {
    loading.classList.add(`hidden`);
  });
})();

const GreetingSlider = (function () {
  const greetingBox = document.getElementById("greeting-js");
  const greetingList = greetingBox.querySelectorAll(".greeting_slider_list");
  const greetingThumbnail = document.getElementById("thumbnail_ul");
  const thumbList = greetingThumbnail.querySelectorAll("li");

  let j = 0;
  greetingList[0].style.backgroundImage = `url("images/hero/hero-1.jpg")`;

  const handleGreetingClass = () => {
    const ACTIVE = "greeting_active";
    const greetingSeleted = document.getElementsByClassName(ACTIVE);

    greetingSeleted[0].className = greetingSeleted[0].className.replace(
      ACTIVE,
      "closed"
    );
    greetingList[j].classList.remove("closed");
    greetingList[j].classList.add(ACTIVE);
  };

  const handleGreeting = () => {
    j++;
    if (j === 3) {
      j = 0;
    }
    greetingList[j].style.backgroundImage = `url("images/hero/hero-${[
      j + 1,
    ]}.jpg")`;
    handleGreetingClass();
  };

  const thumbSlider = (e) => {
    e.preventDefault();
    let sliderNum = event.target.dataset.slider * 1;
    greetingList[
      sliderNum - 1
    ].style.backgroundImage = `url("images/hero/hero-${[sliderNum]}.jpg")`;
    j = sliderNum - 1;
    handleGreetingClass();
  };

  setInterval(handleGreeting, 3000);
  thumbList.forEach((e) => e.addEventListener("click", thumbSlider));
})();

const PropertiesSlider = (function () {
  const propertieSliderBox = document.querySelector(".content04_cnt");
  const propertieSlider = propertieSliderBox.querySelectorAll(
    ".content04_slider"
  );
  const leftBtn = document.querySelector(".content04_left_arw");
  const rightBtn = document.querySelector(".content04_right_arw");

  let propertieSliderWidth = propertieSlider[0].offsetWidth;
  let count = 0;
  propertieSliderBox.style.left = propertieSliderWidth * count;

  const clickRight = () => {
    count++;
    if (count === 3) {
      count = 0;
    }
    propertieSliderBox.style.left = -propertieSliderWidth * count + "px";
  };

  const clickLeft = () => {
    count--;
    if (count < 0) {
      count = 2;
    }
    propertieSliderBox.style.left = -propertieSliderWidth * count + "px";
  };

  const init = () => {
    leftBtn.addEventListener("click", clickLeft);
    rightBtn.addEventListener("click", clickRight);
  };
  init();

  const matchControl = () => {
    propertieSliderWidth = propertieSlider[0].offsetWidth;
    propertieSliderBox.style.left = propertieSliderWidth * 0;
    init();
  };

  const mediaQuery = () => {
    const propertiesFirstMq = window.matchMedia("(max-width:1200px)");
    const propertiesSecondMq = window.matchMedia("(max-width:1040px)");
    const propertiesthirdMq = window.matchMedia("(max-width:768px)");
    const propertiesfourthMq = window.matchMedia("(max-width:560px)");
    propertiesFirstMq.addListener(matchControl);
    propertiesSecondMq.addListener(matchControl);
    propertiesthirdMq.addListener(matchControl);
    propertiesfourthMq.addListener(matchControl);
  };
  mediaQuery();
})();

const FeatureSlider = (function () {
  const dot = document.querySelector("#dot-js");
  const dotSliderBox = document.querySelector(".content02_slider");
  const dotSlider = document.querySelector(".slider_content");

  let dotSliderWidth = dotSlider.offsetWidth * 3;
  let number = 0;

  const currentSlider = (num) => {
    dotSliderBox.style.left = -dotSliderWidth * num + "px";
  };

  const clickDot = (event) => {
    const span = event.target;
    let dotNumber = event.target.dataset.dot * 1;
    let selected = document.getElementsByClassName("dot_act");
    if (selected.length === 0) {
      span.classList.add("dot_act");
    }
    selected[0].className = selected[0].className.replace("dot_act", "");
    span.classList.add("dot_act");
    currentSlider(dotNumber);
  };

  const init = () => {
    dotSliderBox.style.left = dotSliderWidth * number;
    dot.addEventListener("click", clickDot);
  };

  const mqCurrentSlider = (num) => {
    dotSliderBox.style.left = -dotSliderWidth * num + "px";
  };

  const mqClickDot = (event) => {
    const span = event.target;
    let dotNumber = event.target.dataset.dot * 1;
    let selected = document.getElementsByClassName("dot_act");
    if (selected.length === 0) {
      span.classList.add("dot_act");
    }
    selected[0].className = selected[0].className.replace("dot_act", "");
    span.classList.add("dot_act");
    mqCurrentSlider(dotNumber);
  };

  const matchFeatureFirstMq = () => {
    dotSliderBox.style.left = dotSliderWidth * number;
    dotSliderWidth = dotSlider.offsetWidth * 2;
    dot.addEventListener("click", mqClickDot);
  };

  const matchFeature = (e) => {
    if (e.matches) {
      matchFeatureFirstMq();
    } else {
      init();
    }
  };

  const featureFirstMq = window.matchMedia("screen and (max-width:1040px)");
  featureFirstMq.addListener(matchFeature);
  matchFeature(featureFirstMq);
})();

const AgentSlider = (function () {
  const agentSliderBox = document.getElementById("agent-js");
  const agentSlider = agentSliderBox.querySelector("li");

  let agentWidth = agentSlider.offsetWidth;
  let agentSliderWidth = agentWidth * 4;

  const rightArw = document.querySelector(".content05_right_arw");
  const leftArw = document.querySelector(".content05_left_arw");

  agentSliderBox.style.width = agentSliderWidth * 2 + "px";
  let i = 0;
  agentSliderBox.style.left = 0;

  const clickRightArw = () => {
    i++;
    if (i === 2) {
      i = 0;
    }
    agentSliderBox.style.left = -agentSliderWidth * i + "px";
  };

  const init = () => {
    rightArw.addEventListener("click", clickRightArw);
    leftArw.addEventListener("click", clickRightArw);
  };
  init();

  //1200일때 크기랑 박스 3개
  //1040 일때 크기랑 박스 2개
  //768 일때 크기랑 박스 1개
  ///560px 일때 크기랑 박스 1개

  function handleFirstMatch(e) {
    if (e.matches) {
      agentSliderBox.style.left = 0;
      agentWidth = agentSlider.offsetWidth;
      agentSliderWidth = agentWidth * 3;
      agentSliderBox.style.width = agentSliderWidth * 3 + "px";
      i = 0;
      const clickRightArwMq = () => {
        i++;
        if (i === 4) {
          i = 0;
        }
        console.log(i);
        agentSliderBox.style.left = -agentSliderWidth * i + "px";
      };
      rightArw.removeEventListener("click", clickRightArw);
      rightArw.addEventListener("click", clickRightArwMq);
    }
  }

  function handleSecondMatch(e) {
    if (e.matches) {
      agentSliderBox.style.left = 0;
      agentWidth = 360;
      agentSliderWidth = agentWidth * 2;
      agentSliderBox.style.width = agentSliderWidth * 4 + "px";

      i = 0;
      const clickRightArwMq = () => {
        i++;
        if (i === 4) {
          i = 0;
        }
        agentSliderBox.style.left = -agentSliderWidth * i + "px";
      };
      rightArw.removeEventListener("click", clickRightArw);
      rightArw.addEventListener("click", clickRightArwMq);
    }
  }

  function handleThridMatch(e) {
    if (e.matches) {
      agentSliderBox.style.left = 0;
      agentWidth = 540;
      agentSliderWidth = agentWidth * 1;
      agentSliderBox.style.width = agentSliderWidth * 8 + "px";

      i = 0;
      const clickRightArwMq = () => {
        i++;

        if (i === 8) {
          i = 0;
        }
        agentSliderBox.style.left = -agentSliderWidth * i + "px";
      };

      rightArw.removeEventListener("click", clickRightArw);
      rightArw.addEventListener("click", clickRightArwMq);
    }
  }
  function handleFourthMatch(e) {
    if (e.matches) {
      console.log("Four MAtch");

      i = 0;
      agentWidth = 400;
      agentSliderWidth = agentWidth * 1;
      agentSliderBox.style.width = agentSliderWidth * 8 + "px";
      agentSliderBox.style.left = 0;
      const clickRightArwMq = () => {
        i++;
        if (i === 8) {
          i = 0;
        }
        agentSliderBox.style.left = -agentSliderWidth * i + "px";
      };

      rightArw.removeEventListener("click", clickRightArw);
      rightArw.addEventListener("click", clickRightArwMq);
    }
  }

  const agentFirstMq = window.matchMedia(
    "(min-width:1041px) and (max-width:1200px)"
  );
  const agentSecondMq = window.matchMedia(
    "(min-width:769px) and (max-width:1040px)"
  );
  const agentThirdMq = window.matchMedia(
    "(min-width:561px) and (max-width:768px)"
  );
  const agentFourthMq = window.matchMedia(
    "(min-width:300px) and (max-width:560px)"
  );

  agentFirstMq.addEventListener("change", handleFirstMatch);
  agentSecondMq.addEventListener("change", handleSecondMatch);
  agentThirdMq.addEventListener("change", handleThridMatch);
  agentFourthMq.addEventListener("change", handleFourthMatch);
})();

const VideoControll = (function () {
  const videoBtn = document.getElementById("video-js");
  const videoBox = document.getElementById("video_box");
  const videoCloseBtn = document.getElementById("video_close");
  const clickVideoBtn = (e) => {
    e.preventDefault();
    videoBox.classList.add("video_active");
  };

  const clickCloseBtn = (e) => {
    videoBox.classList.remove("video_active");
  };

  videoCloseBtn.addEventListener("click", clickCloseBtn);
  videoBtn.addEventListener("click", clickVideoBtn);
})();

const HideNav = (function () {
  const hambuger = document.getElementById("menu");
  const hideNav = document.getElementById("hide-container");
  const offcanvas = document.querySelector(".offcanvas");
  const hambugerClose = document.getElementById("hide-closeBtn");

  const clickHambuger = () => {
    hideNav.style.left = 0;
    offcanvas.classList.add("hambuger_active");
  };
  const clickClose = () => {
    hideNav.style.left = "-300px";
    offcanvas.classList.remove("hambuger_active");
  };

  hambugerClose.addEventListener("click", clickClose);
  hambuger.addEventListener("click", clickHambuger);
})();
