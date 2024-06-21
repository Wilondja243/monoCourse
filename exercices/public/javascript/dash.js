
const left_lists = document.querySelectorAll(".left-list");
const show_lists = document.querySelectorAll(".show-list");

(() => {
    left_lists.forEach((left_list, index) => {
        left_list.addEventListener('click', function() {

            show_lists.forEach((show_list, i) => {
                if (i !== index) {
                    show_list.classList.add("show-list");
                }
            });
            show_lists[index].classList.toggle("show-list");
        });
    });
    
    const all_course = document.querySelector(".all-courses");
    let scrollingInterval;

    window.addEventListener("load", () => {
        scrollingInterval = setInterval(() => {
            all_course.scrollLeft += 3;
        }, 200);
    });

    window.addEventListener("unload", () => {
        clearInterval(scrollingInterval);
    });


})();

