// get element
var btns = document.querySelectorAll(".questions");
var icon = document.querySelectorAll(".toggle-answer");

// show and hide paragraph
btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const showAnswer = e.currentTarget.nextElementSibling;
    const title = e.currentTarget.children[0];
    const rotateBtns = e.currentTarget.children[1];
    showAnswer.classList.toggle("show-answer");
    rotateBtns.classList.toggle("rotateBtn");
    title.classList.toggle("weight");
  });
});

// rotate the icons
// function rotation(){
//   icon.forEach(function(btn) {
//     btn.addEventListener("click", function(e){
//       const toggleBtn = e.currentTarget;
//       toggleBtn.style.transform = "rotate(180deg)";
//     });
//   });
//
// }
