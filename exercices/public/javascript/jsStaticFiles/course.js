
(()=>{

    const all_data_Courses =[
        {
          "id":1,
          "description":"Learn UI/UX Design and grow your career",
          "title":"UI/UX Design",
          "class": "5 classes",
          "student":"5 students",
          "img":"../../images/What-is-UI-UX-Design.jpg"
        },
        {
            "id":2,
            "description":"Web Developement",
            "title":"Developement web",
            "class": "5 classes",
            "student":"5 students",
            "img":"../../images/computer_programming.jpeg.webp"
        },
        {
          "id":3,
          "description":"A Digital Marketing System",
          "title":"Digital Marketing",
          "class": "5 classes",
          "lesson":"5 students",
          "img":"../../images/Monetize-your-expertise-with-your-own-online-course.-Heres-how.webp"
        }
      ]
      

    const all_selectors = document.querySelectorAll('.all-selectors');

   function HoverSearchIcon(){
      const search_icon = document.querySelector(".search-icon");
      if(search_icon){
      const search_over_icon = document.querySelector(".search-icon .bi-search");
      search_icon.addEventListener('mouseover',()=>search_over_icon.style.color = `red`);
      search_icon.addEventListener('mouseout',()=>search_over_icon.style.color = `black`);
      }

   }
   
   const search_input = document.getElementById("search-input");
   let search_result = document.getElementById("search-result-input");
   
   if(search_input){
      search_input.addEventListener('input',function(){
        const newSearch = search_input.value.toLowerCase();
        search_result.innerHTML ='';
        
        const search_content = document.getElementById('search-content');
        if(newSearch == ""){
            search_content.classList.remove('search-content-marge');
            return;
        }

        const data_courses = all_data_Courses.filter(all_data => 
            all_data.description.toLowerCase().includes(newSearch)
            || all_data.title.toLowerCase().includes(newSearch))

        if(data_courses.length == 0){
            search_content.classList.add('search-content-marge');
            search_result? search_result.innerHTML = `<h1 class ='not-result'>Aucun resultat trouve.</h1>`:'';
        }
        else{

            document.querySelector('.search-content').classList.add('search-content-marge');

                data_courses.forEach(data_course => {
                    const course_html =
                    `<div class="Published-courses">
                        <div class="images-course">
                            <img src="${data_course.img}" alt="">
                        </div>
                        <div class="mosted-course">
                            <div class="desc-course">
                                <b>${data_course.title}</b>
                            </div>
                            <div class="course">
                                <h3>${data_course.description}</h3>
                                <div class="class-course">
                                    <div class="class">
                                        <i class="bi bi-book"></i>
                                        <small>${data_course.lesson}</small>
                                    </div>
                                    <div class="students">
                                        <i class="bi bi-people"></i>
                                        <small>${data_course.class}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

                    search_result.innerHTML += course_html;
                });        
            }
        });
    }
    
    HoverSearchIcon();

    const course_b = document.querySelector('.course-b');
    function courseBar(){
       
        if(document.querySelector('.responsive-recency-course')){
        document.querySelector('.responsive-recency-course').innerHTML =
            `<a href="" class='b'>Recency</a><br>
            <a href="">Alpabaticaly</a>`;                     
        } 
        const bi_three_dot = document.querySelector('.course-right-bar .bi-three-dots');
        if(bi_three_dot){
            bi_three_dot.addEventListener('click',function(event){
                event.stopPropagation();
                if(course_b){
                    course_b.classList.add('display-b');
                }
            })
        }
    }

    function displayModalCourse(){
        if(course_b){
            window.addEventListener('click',function(){
               course_b.classList.remove('display-b');
            })
            course_b.addEventListener('click',function(event){
               event.stopPropagation();
            })
        }
    }

    function mainModal(){
        const main_right_bar = document.querySelector('.main-right-bar');
        if(main_right_bar){
            main_right_bar.addEventListener('click',function(){
                document.querySelector('.main-responsive-bar-container').classList.add('display-main-responsive-bar-container');
            })
        }
    }
    function displayMainModal(){
        const main_responsive = document.querySelector('.main-responsive-bar-container');
        if(main_responsive){
            main_responsive.addEventListener('click',function(event){
                if(event.target == event.currentTarget){
                    main_responsive.classList.remove('display-main-responsive-bar-container');
                    document.body.style.overflowY = 'none';
                }
            })
        }
    }
    
    displayMainModal();
    mainModal();
    displayModalCourse();
    courseBar();



})();


// async function fetchData(){
//     try{
//         const resp = await fetch('../../public/javascript/databaseFiles/courses-data.js');
//         if(!resp.ok){
//             throw new Error('erreur de chargement',Error);
//         }
//         const data = await resp.json();
//         console.log(data);
//     } 
//     catch(error){console.error("erreur inatendue",error)}
// }
// fetchData()