// document.addEventListener('DOMContentLoaded', () => {
//     const logo = document.querySelector('.logo');
//     if (logo) {
//         logo.classList.add('showlogo1');
//     }
//     setInterval(()=>{
//       logo.classList.add('scales');
//       document.body.style.overflow = `hidden`;
//     },2000);

//     const nav = document.querySelector('nav');
//     const thumbenail = document.querySelector('.thumbenail-content');
//     const thumb_desc = document.querySelector('.thumb-desc');
//     const btns_thumb = document.querySelector('.btns-thumb');
//     const images = document.querySelector('.images');
    
//     let index = 0;
//     let times = 0;

//     function showThumbenail(){
//         if(times == 4000){
//             nav.classList.add("navList");
//             logo.classList.add('showlogo2');
//         }
//         else if(times == 5000){
//             thumb_desc.classList.add('thumb-descshow');
//         }
//         else if(times == 6000){
//             btns_thumb.classList.add("btns_N");
//         }
//         else if(times == 6700){
//             images.classList.add('imagesNail');
//         }
//         times += 100;
//     }
//     setInterval(showThumbenail,100);

//     const letf_bars = document.querySelector('.rigth-icon');

//     letf_bars.onclick = function(){
//         const bar_V = document.querySelectorAll('.bar');
//         const bars_H = document.querySelector('.nav-bars');

//         bar_V.forEach(barv =>{
//             barv.classList.add('barHone');
//         })
        
//         thumbenail.remove('thumbenail-contentshow');
//         bars_H.classList.add('navigations');
//     }

// });

