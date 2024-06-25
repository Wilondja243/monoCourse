// function slideFeed(){
   
//     fetch('./instructor.json').then(resp => resp.json()).then(feedDB =>{
//         console.log(JSON.parse(feedDB));
//     })
//     .catch(error => console.log('erreur de chargement'+error));
    
// }
// slideFeed()


    // if(window.matchMedia("(ax-width:600px)").matches){
    //     const testimoni = document.querySelectorAll('.studens-testimoni');
    //     let currentIndex = 0

    //     function showFeed(index){
    //         for(let i = 0;i<testimoni.length;i++){
    //             testimoni[i].style.display = "none";
    //         }
    //         testimoni[i].style.display = 'block';
    //     }

    //     function nextFeed(){
    //         currentIndex++;
    //         if(currentIndex >= testimoni.length){
    //             currentIndex = 0
    //         }
    //         showFeed(currentIndex)
    //     }

    //     setInterval(nextFeed,3000);
    // }


const scrollInstructors = document.querySelector('.meet-all-instructors');
const scrollCompany = document.querySelector('.companies-support');

const scrollSpeed = 0.5; 
let scrollIntervall;

function startAutoScroll() {
    let scrollPosition = 0;
    const scrollDirection = 1; 

  scrollIntervall = setInterval(function() {
        scrollPosition += scrollSpeed * scrollDirection;
        if (scrollPosition > scrollInstructors.scrollWidth - scrollInstructors.clientWidth) {
            scrollPosition = 0;
        }
        scrollInstructors.scrollLeft = scrollPosition;
    }, 1000/60);
}
startAutoScroll();

scrollInstructors.addEventListener('mouseover',()=> clearInterval(scrollIntervall))
scrollInstructors.addEventListener('mouseleave',()=> startAutoScroll())
