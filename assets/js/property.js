"use strict";

const Map = (function () {
  const mapContainer = document.getElementById("map"),
    mapOption = {
      center: new kakao.maps.LatLng(37.532636, 126.736046),
      level: 4,
    };

  const map = new kakao.maps.Map(mapContainer, mapOption);

  const positions = [
    {
      content: "<div>계절향기</div>",
      latlng: new kakao.maps.LatLng(37.532436, 126.736046),
    },
    {
      content: "<div>세종병원</div>",
      latlng: new kakao.maps.LatLng(37.532559, 126.73686),
    },
    {
      content: "<div>까치공원</div>",
      latlng: new kakao.maps.LatLng(37.5333124, 126.737233),
    },
    {
      content: "<div>투씨카페</div>",
      latlng: new kakao.maps.LatLng(37.5327862, 126.7349492),
    },
  ];

  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  for (let i = 0; i < positions.length; i++) {
    const imageSize = new kakao.maps.Size(24, 35);

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    const infowindow = new kakao.maps.InfoWindow({
      content: positions[i].content,
    });

    const marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
      title: positions[i].title,
      image: markerImage,
    });
    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );
    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }
  function setZoomable() {
    map.setZoomable(false);
  }
  setZoomable();
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
