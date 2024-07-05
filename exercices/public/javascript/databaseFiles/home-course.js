const dataCourses =[
    {
      "id":1,
      "description":"Learn UI/UX Design and grow your career",
      "title":"UI/UX Design",
      "class": "5 classes",
      "student":"5 students",
      "img":"../public/images/What-is-UI-UX-Design.jpg"
    },
    {
        "id":2,
        "description":"Web Developement",
        "title":"Developement web",
        "class": "5 classes",
        "student":"5 students",
        "img":"../public/images/computer_programming.jpeg.webp"
    },
    {
      "id":3,
      "description":"A Digital Marketing System",
      "title":"Digital Marketing",
      "class": "5 classes",
      "student":"5 students",
      "img":"../public/images/rawpixel-983726-unsplash.jpg"
    }
  ]
  
  
  
    function dataSETCOURSE(){
  
      const pop_courses = document.querySelector('.pop-courses');
  
      dataCourses.forEach(data_course => {
          
          const course_html =
          `<div class="most-courses">
                <div class="images-course">
                    <img src="${data_course.img}" alt="">
                </div>
                <div class="mosted-course">
                    <div class="desc-course">
                        <b>${data_course.title}</b>
                        <small><i class="bi bi-star-fill"></i> 6.1 </small>
                    </div>
                    <div class="course">
                        <h3>${data_course.description}</h3>
                        <div class="class-course">
                            <div class="class">
                                <i class="bi bi-book"></i>
                                <small>${data_course.class}</small>
                            </div>
                            <div class="students">
                                <i class="bi bi-people"></i>
                                <small>${data_course.student}</small>
                            </div>
                        </div>
                        <div class="start-course">
                            <div class="start">get start now</div>
                            <button>start</button>
                        </div>
                    </div>
                </div>
            </div>`;
  
          pop_courses.innerHTML +=course_html;
            
          })  
    }
    dataSETCOURSE();
  