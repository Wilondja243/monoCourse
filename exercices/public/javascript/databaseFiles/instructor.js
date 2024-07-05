// function slideFeed(){
   
//     fetch('../dataJSON/instructor.json').then(resp => resp.json()).then(feedDB =>{
//         console.log(feedDB);
//     })
//     .catch(error => console.log('erreur de chargement'+error));
    
// }
// slideFeed()

// async function fetchDATA(){
//   try{
//      const resp = await fetch('../../api/feedbacks');
//      if(!resp.ok){
//       throw new Error('quelque chose ne marche plus',Error);
//      }

//      const jsonDATA = await JSON(resp);
//      console.log(jsonDATA);
//   }catch(error){
//     console.error('erreur',error);
//   }
// }

// fetchDATA()

const dataInstructor =[
  {
    "id":1,
    "name":"wilondja ebuela",
    "niveau": "senior web develloper",
    "lastname":"ebuela",
    "img":"../public/images/t.PNG"
  },
  {
    "id":2,
    "name":"fiston kin",
    "niveau": "back-end web develloper",
    "img":"../public/images/young-black-female-student-with-books-removebg-preview.png",
  },
  {
    "id":3,
    "name":"luckson premier",
    "niveau": "front-end web develloper",
    "img":"../public/images/young-black-female-student-with-books-removebg-preview.png",
  },
  {
    "id":3,
    "name":"luckson premier",
    "niveau": "front-end web develloper",
    "img":"../public/images/t.PNG"   
  }
]


  let tab_datas = [];

  function dataSET(){

    const meet_inst = document.querySelector('.meet-all-instructors');

    dataInstructor.forEach(data => {
        
        const instructor_html =
        `<div class="all-instructors">
            <div class="imgs imgs-one">
                <img src="${data.img}" alt="">
                <a href="">in</a>
            </div>
            <div class="name-instructor">
                <b>${data.name}</b>
                <p>${data.niveau}</p>
            </div>
        </div>`;

        meet_inst.innerHTML +=instructor_html;
          
        })  
  }
  dataSET();
