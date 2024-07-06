const bi_x = document.querySelector('.bi-x');
const bi_list = document.querySelector('.bi-list');
const main_bar = document.querySelector('.main-responsive-bar-container');

function mainModal(){
    if(bi_list){
        bi_list.addEventListener('click',function(){
            main_bar.classList.add('display-main-responsive-bar-container');
            document.body.classList.add("overflow-hidden");
            
            bi_x.classList.add('display-bi-x');
            bi_list.style.display = 'none';
        })
    }
}

function displayXIcon(){
    if(bi_x){
        bi_x.addEventListener('click',()=>{
            main_bar.classList.remove('display-main-responsive-bar-container');
            document.body.classList.remove("overflow-hidden");
            bi_list.style.display = 'block';
            bi_x.classList.remove('display-bi-x');
        })
    }
}

function displayMainModal(){
    const main_responsive = document.querySelector('.main-responsive-bar-container');
    if(main_responsive){
        main_responsive.addEventListener('click',function(event){
            if(event.target == event.currentTarget){
                main_responsive.classList.remove('display-main-responsive-bar-container');
                bi_x.classList.remove('display-bi-x');
                bi_list.style.display = 'block';
                document.body.classList.remove("overflow-hidden");
            }
        })
    }
}

displayXIcon();
displayMainModal();
mainModal();