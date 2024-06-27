

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

const dataFeed =[
    {
        "id":1,
        "name":"fiston kin",
        "country":"Nigeria, Lagos",
        "description": "MonoCourse est un site vraiment tres simpas, je te le consille mille fois pour apprendre et devenir le plus meilleur.",
        "img":"../public/images/young-black-female-student-with-books-removebg-preview.png",
    },
    {
        "id":2,
        "name":"luckson premier",
        "country":"cote d'ivoire, abidjan",
        "description": "Suis de la rdc, j'ai connu monoCourse y a 2 ans j'ai commence a apprendre les bases du javascript et maintenant suis devenus pro juste avec monoCourse.",
        "img":"../public/images/young-black-female-student-with-books-removebg-preview.png",
    },
    {
        "id":3,
        "name":"michel nakindu",
        "country":"Burundi,bujumbura",
        "description": "J'avais vraiment beacoup de difficultes en programmation, apres plusieur recherche sur le web cherchant le sit qui apprend en ligne suis tombe sur monalina qui me fait un de plus grand dev a present.",
        "img":"../public/images/t.PNG"   
    }
    ]
      
      
function dataFEED_SET(){

    const feed_backs = document.querySelector('.all-feed-back');

    dataFeed.forEach(data_feed => {
        
        const feed_html =
        `
        <div class="studens-testimoni">
            <div class="testimoni">
                <div class="imgs">
                    <img src="${data_feed.img}" alt="">
                </div>
                <div class="test-desc">
                    <div class="name-student">${data_feed.name}</div>
                    <small>${data_feed.country}</small>
                    <div class="star">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                </div>
            </div>
            <div class="avis-test">${data_feed.description}</div>
        </div>`;

        feed_backs.innerHTML +=feed_html;
        
        })  
}
dataFEED_SET();



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
