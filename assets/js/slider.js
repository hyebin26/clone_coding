// //1200일때 크기랑 박스 3개
// //1040 일때 크기랑 박스 2개
// //768 일때 크기랑 박스 1개
// ///560px 일때 크기랑 박스 1개
// const AgentSlider = (
//   current_num,
//   slider_num,
//   slider_list,
//   slider_container,
//   last_page
// ) => {
//   let agentWidth = slider_list.offsetWidth;
//   let agentSliderWidth = agentWidth * slider_num;

//   slider_container.style.width = agentSliderWidth * last_page + "px";

//   current_num++;
//   if (current_num === last_page) {
//     current_num = 0;
//   }
//   slider_container.style.left = -agentSliderWidth * current_num + "px";
// };

// // function handleFirstMatch() {
// //   agentWidth = agentSlider.offsetWidth;
// //   agentSliderBox.style.width = agentSliderWidth * 3 + "px";
// //   agentSliderBox.style.left = 0;
// // }

// // function handleSecondMatch(e) {
// //   if (e.matches) {
// //     agentSliderBox.style.left = 0;
// //     agentWidth = 360;
// //     agentSliderWidth = agentWidth * 2;
// //     agentSliderBox.style.width = agentSliderWidth * 4 + "px";
// //     i = 0;
// //     const clickRightArwMq = () => {
// //       i++;
// //       if (i === 4) {
// //         i = 0;
// //       }
// //       agentSliderBox.style.left = -agentSliderWidth * i + "px";
// //     };
// //     rightArw.addEventListener("click", clickRightArwMq);
// //   }
// // }

// // function handleThridMatch(e) {
// //   if (e.matches) {
// //     i = 0;
// //     agentSliderBox.style.left = 0;
// //     agentWidth = 540;
// //     agentSliderWidth = agentWidth * 1;
// //     agentSliderBox.style.width = agentSliderWidth * 8 + "px";

// //     const clickRightArwMq = () => {
// //       i++;

// //       if (i === 8) {
// //         i = 0;
// //       }
// //       agentSliderBox.style.left = -agentSliderWidth * i + "px";
// //     };

// //     rightArw.addEventListener("click", clickRightArwMq);
// //   }
// // }

// // function handleFourthMatch(e) {
// //   if (e.matches) {
// //     agentWidth = 400;
// //     agentSliderBox.style.left = 0;
// //     agentSliderWidth = agentWidth * 1;
// //     agentSliderBox.style.width = agentSliderWidth * 8 + "px";
// //     i = 0;
// //     const clickRightArwMq = () => {
// //       i++;
// //       if (i === 8) {
// //         i = 0;
// //       }
// //       agentSliderBox.style.left = -agentSliderWidth * i + "px";
// //     };

// //     rightArw.addEventListener("click", clickRightArwMq);
// //   }
// // }
// const slider = (slider_container, slider_list, slide_num, page_num) => {
//   let agentWidth = slider_list.offsetWidth;
//   let agentSliderWidth = agentWidth * slide_num;

//   slider_container.style.width = agentSliderWidth * page_num + "px";
//   slider_container.style.left = 0;
// };

// const agentInit = () => {
//   const rightArw = document.querySelector(".content05_right_arw");
//   const leftArw = document.querySelector(".content05_left_arw");
//   const agentSliderBox = document.getElementById("agent-js");
//   const agentSlider = agentSliderBox.querySelector("li");

//   const agentFirstMq = window.matchMedia("screen and (max-width:1200px)");
//   const agentSecondMq = window.matchMedia("screen and (max-width:1040px)");
//   const agentThirdMq = window.matchMedia("screen and (max-width:768px)");
//   const agentFourthMq = window.matchMedia("screen and (max-width:560px)");

//   agentFirstMq.addEventListener(
//     "change",
//     slider(agentSliderBox, agentSlider, 3, 3)
//   );
//   agentSecondMq.addEventListener(
//     "change",
//     slider(agentSliderBox, agentSlider, 2, 4)
//   );
//   agentThirdMq.addEventListener(
//     "change",
//     slider(agentSliderBox, agentSlider, 1, 8)
//   );
//   agentFourthMq.addEventListener(
//     "change",
//     slider(agentSliderBox, agentSlider, 1, 8)
//   );
//   window.addEventListener("load", slider(agentSliderBox, agentSlider, 4, 2));
//   rightArw.addEventListener("click", () => {
//     AgentSlider(0, 4, agentSlider, agentSliderBox, 2);
//   });

//   window.addEventListener("load", slider(agentSliderBox, agentSlider));

//   //leftArw.addEventListener("click", agentSlider);
// };
// agentInit();
