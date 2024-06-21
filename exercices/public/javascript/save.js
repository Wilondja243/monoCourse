// function writeText(){
    //     if(index < textH1.length){
    //         h1.textContent += textH1.charAt(index);
    //     }
    //     if(index < textPara.length){
    //         paraf.textContent += textPara.charAt(index);
    //     }
    //     if(index <= textH1.length || index <= textH1.length){
    //        index++;
    //        setTimeout(writeText,100);
    //     }
    //  }
    //  writeText();

//     const container = document.querySelector(".container");
// let scrollingInterval;

// container.addEventListener("mousemove", (e) => {
//     const tolerance = 20; // Tolérance pour détecter le déplacement à proximité du bord
//     const rect = container.getBoundingClientRect();

//     if (e.clientX < rect.left + tolerance) {
//         scrollingInterval = setInterval(() => {
//             container.scrollLeft -= 5; // Défilement vers la gauche
//         }, 10);
//     } else if (e.clientX > rect.right - tolerance) {
//         scrollingInterval = setInterval(() => {
//             container.scrollLeft += 5; // Défilement vers la droite
//         }, 10);
//     } else {
//         clearInterval(scrollingInterval);
//     }
// });

// container.addEventListener("mouseleave", () => {
//     clearInterval(scrollingInterval);
// });


// const all_course = document.querySelector(".all-courses");

// let startX = 0;
// let startY = 0;
// let scrolling = false;

// all_course.addEventListener("mousedown", (e) => {
//     startX = e.pageX - all_course.scrollLeft;
//     startY = e.pageY - all_course.scrollTop;
//     scrolling = true;
// });

// all_course.addEventListener("mousemove", (e) => {
//     if (!scrolling) return;
//     const deltaX = e.pageX - all_course.scrollLeft - startX;
//     const deltaY = e.pageY - all_course.scrollTop - startY;
//     all_course.scrollLeft -= deltaX;
//     all_course.scrollTop -= deltaY;
//     startX = e.pageX - all_course.scrollLeft;
//     startY = e.pageY - all_course.scrollTop;
// });

// all_course.addEventListener("mouseup", () => {
//     scrolling = false;
// });

// all_course.addEventListener("mouseleave", () => {
//     scrolling = false;
// });