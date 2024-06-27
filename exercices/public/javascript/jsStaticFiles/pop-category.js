
const dataCategories =[
    {
      "id":2,
      "title":"Company Network",
      "description": "Graphic design education for beginner,We provide an art of visual composition for your online learning journey.",
      "icon":'<i class="bi bi-vector-pen"></i>',
    },
    {
      "id":2,
      "title":"Company Network",
      "description": "Graphic design education for beginner,We provide an art of visual composition for your online learning journey.",
      "icon":'<i class="bi bi-router"></i>',
    },
    {
      "id":3,
      "title":"Developement",
      "description": "Graphic design education for beginner,We provide an art of visual composition for your online learning journey.",
      "icon":'<i class="bi bi-code-square"></i>',
    },
    {
      "id":4,
      "title":"Marketing et communication",
      "description": "Graphic design education for beginner,We provide an art of visual composition for your online learning journey.",
      "icon":'<i class="bi bi-megaphone"></i>',
    }
  ]

const dataCreations =[
    {
      "id":1,
      "title":"Create Account",
      "description": "Create account to start learing to acquire a lot of knowledge.",
      "icons":'<i class="bi bi-person"></i>',
    },
    {
      "id":2,
      "title":"Choose Course",
      "description": "Choose a lesson of your choice and enjoy more advanced subjects to acquire better knowledge",
      "icons":'<i class="bi bi-journal-code"></i>',
    },
    {
      "id":3,
      "title":"Enjoy Learing",
      "description": "Your presence in the lesson leads to better results and is beneficial for the future.",
      "icons":'<i class="bi bi-card-text"></i>',
    },
  ]
  
  
function dataCATEGORY_SET(){

    const pop_category = document.querySelector('.pop-category');
    const simples = document.querySelector('.simple-creations');

    dataCategories.forEach(data_category => {
        
        const category_html =
        `<div class="graph-design-course">
            <div class="graph">${data_category.icon}</div>
            <div class="graph-desc">
                <h3>${data_category.title}</h3>
                <p>${data_category.description}</p>
            </div>
        </div>`;

        pop_category.innerHTML +=category_html; 
    })  
    
    dataCreations.forEach(dataCreation =>{
        const smp_creation = 
        `<div class="simples create-account">
            <div class="simple user-account">
               ${dataCreation.icons}
                <h2>${dataCreation.title}</h2>
            </div>
            <p>${dataCreation.description}</p>
        </div>`;

        simples.innerHTML +=smp_creation; 
    })
}
dataCATEGORY_SET();
