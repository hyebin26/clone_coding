"use strict"

const Map = (function(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.532636, 126.736046), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
var positions = [
    {
        title: '계절향기', 
        latlng: new kakao.maps.LatLng(37.532436, 126.736046)
    },
    {
        title: '세종병원', 
        latlng: new kakao.maps.LatLng(37.532559,126.73686)
    },
    {
        title: '까치공원', 
        latlng: new kakao.maps.LatLng(37.5333124,126.737233)
    },
    {
        title: '투씨 카페',
        latlng: new kakao.maps.LatLng(37.5327862,126.7349492)
    }
];
// 지도를 클릭한 위치에 표출할 마커입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    
    // 마커 이미지를 생성합니다    
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    });
}
function setZoomable() {
    // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
    map.setZoomable(false);    
}
setZoomable();
// 지도에 마커를 표시합니다

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다

}())

const HideNav = (function(){
    const hideNavBox = document.getElementById("hide-js");
    const hambuger = document.getElementById("menu");
    const hideNav = document.getElementById("hide-container");
    const offcanvas = document.querySelector(".offcanvas");
    const hambugerClose = document.getElementById("hide-closeBtn");


    const clickHambuger = ()=>{
        hideNav.style.left = 0;
        offcanvas.classList.add("hambuger_active");
    }
    const clickClose = ()=>{
        hideNav.style.left = "-300px";
        offcanvas.classList.remove("hambuger_active");
    }

    hambugerClose.addEventListener("click",clickClose);
    hambuger.addEventListener("click",clickHambuger);
}())