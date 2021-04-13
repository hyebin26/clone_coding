## :memo:프로젝트 소개

- 인터넷에 무료 템플릿을 다운 받아서 만든 호텔페이지입니다. Home, Property, Pages 세 페이지만 구현했으며, vanilla Js 그리고 Scss를 사용해서 구현했습니다.
- vanilla js를 이용해 imageSlider와 thumbnail 등을 구현하였으며 Kakao Map API를 사용해서 지도를 구현했습니다. 그리고 정적인 파일만을 사용하므로 github page에 배포하였습니다.

## :bell:사용한 기술

- vanilla Javascript
- Scss
- Kakao Maps API
- Github page

## :camera:주요 기능

1. image thumbnail

```jsx
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
  let sliderNum = e.target.dataset.slider * 1;
  greetingList[sliderNum - 1].style.backgroundImage = `url("images/hero/hero-${[
    sliderNum,
  ]}.jpg")`;
  j = sliderNum - 1;
  handleGreetingClass();
};

setInterval(handleGreeting, 3000);
thumbList.forEach((e) => e.addEventListener("click", thumbSlider));
```

2. imageSlider

```jsx
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
```

3. 비디오 팝업

```jsx
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
```

4. 카카오 맵 API

```jsx
const mapContainer = document.getElementById("map"),
  mapOption = {
    center: new kakao.maps.LatLng(37.532636, 126.736046),
    level: 3,
  };

const map = new kakao.maps.Map(mapContainer, mapOption);

const markerPosition = new kakao.maps.LatLng(37.532636, 126.736046);

const marker = new kakao.maps.Marker({
  position: markerPosition,
});

marker.setMap(map);

const iwContent =
    '<div style="padding:5px;">Season Scent<br><a href="https://map.kakao.com/link/map/계절향기,37.532636, 126.736046" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/계절향기,37.532636, 126.736046" style="color:blue" target="_blank">길찾기</a></div>',
  iwPosition = new kakao.maps.LatLng(37.532636, 126.736046);

const infowindow = new kakao.maps.InfoWindow({
  position: iwPosition,
  content: iwContent,
});

infowindow.open(map, marker);
```

5. 햄버거 메뉴

```jsx
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
```

## :exclamation:에러

- imageSlider를 구현할 때 이미지에에 offsetWidth와 갯수를 이용해서 전체 박스의 width를 정하고 화살표 클릭 시 left의 값을 변경하는 것으로 slider를 구현했습니다. 하지만 미디어 쿼리로 인해 이미지에 width값이 변경되면서 slider가 적용되지 않았습니다. media 쿼리로 화면이 변할 때마다 크기를 다시 재설정하는 것으로 했으나 적용이 되지 않아서 아직 해결하지 못했습니다.

## :thumbsup:느낀점

- 모든 함수는 즉시실행함수(IIFE)로 표현했습니다. 이유는 저는 평소에 사용할 함수를 만들고 마지막에 init함수로 만든 함수들을 넣어서 실행하는 방식을 사용했습니다. 하지만 함수를 init함수에 넣을 필요가 없고 전역변수 만드는 것을 방지하고, 캡슐화를 하므로 IIFE를 사용하는 것이 더 편리하다고 생각해서 사용했습니다.
- 다시 오류를 수정하려고 코드를 다시 봤는데 예전에 작성한 코드라 함수 이름이나 클래스 이름이 너무 불규칙적이고 재사용을 하기 힘들게 작성했습니다. 그래서 다음에 할 때는 효율적으로 코드를 작성하는 방법을 충분히 고민한 후에 작성해야 겠다고 생각했습니다.

## :link:링크

링크: <a href="https://hyebin26.github.io/clone_coding/">https://hyebin26.github.io/clone_coding/</a>
