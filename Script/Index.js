 function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  
  windowWitdh = window.screen.width;
const menuBtn = document.querySelector('.menu-btn');
const mainContent = document.querySelector(".main-content");
const links = document.querySelector('.navLinks');
const brandName = document.querySelector('.brandName');




let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        
        mainContent.classList.add('open');

       
   
        
        links.classList.remove('closed');
        menuOpen = true;

        // iframe.classList.add('open');

    } else {
        menuBtn.classList.remove('open');
        
        mainContent.classList.remove('open');
        
        // $(function(){
        //     $('div.main-content').addClass('closing').delay(5000);
        //     if(menuOpen){
        //         $('div.main-content').delay(500).remove('closing');
        //     }
        // });
        
        
        links.classList.add('closed')
        menuOpen = false;

        iframe.classList.remove('open');
    }
    
});

// console.log(getWidth()/devicePixelRatio)

function checkWidth(){
    if(getWidth()/devicePixelRatio < 600){
        links.classList.add('mobile');
        brandName.classList.add('mobile');
    }else if(getWidth()/devicePixelRatio > 600){
        links.classList.remove('mobile');
        brandName.classList.remove('mobile');
    }
    
}

checkWidth();

window.addEventListener('resize', function(event){
    if(getWidth()/devicePixelRatio < 600){
        links.classList.add('mobile');
    }else if(getWidth()/devicePixelRatio > 600){
        links.classList.remove('mobile');
    }
    ;
});

$(document).ready(function(){
    $(this).scrollTop(0);
});