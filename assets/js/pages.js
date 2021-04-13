"use strict";

const Map = (function () {
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
})();

const Thumbnail = (function () {
  const thumbMain = document.getElementById("thumb-img");
  const thumbImg = document.getElementById("thumbnail-slider");
  const li = thumbImg.querySelectorAll("li");

  const clickImg = () => {
    let number = event.target.dataset.num;
    thumbMain.src = `images/properties/property-details-b${number}.jpg`;
  };

  li.forEach((e) => {
    e.addEventListener("click", clickImg);
  });
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
