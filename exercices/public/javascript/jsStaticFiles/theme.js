const elements = document.querySelectorAll('p,h2,h3,a');
const black_theme = document.querySelector('.bi-moon');
const white_theme = document.querySelector('.bi-sun');

let change_background ={
    BlackChageBg: function(){
        if(black_theme){
            black_theme.onclick = function(){
                black_theme.classList.add('display-moon');
                document.body.classList.add('display-body-bg');
                white_theme.classList.add('display-sun');

                document.querySelector('.users-profil-bar').classList.add('display-users-profil-bar');

                const block_containers = document.querySelectorAll('.ch-bg-color');

                for(let i = 0;i<elements.length;i++){
                    let element = elements[i];
                    
                    element.style.color = `white`;

                }
                for(let i = 0 ;i<block_containers.length;i++){
                    let block_container = block_containers[i];
                    block_container.style.cssText = `background:#040407;color:#ffffff`;
                }
            }
        }
    },

    WhiteChangeBg:function(){
        white_theme.addEventListener('click',function(){
            black_theme.classList.remove('display-moon');
            document.body.classList.remove('display-body-bg');
            white_theme.classList.remove('display-sun');
        })
    }
    
}

change_background.BlackChageBg();
change_background.WhiteChangeBg();

