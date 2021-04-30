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

// let controller = new ScrollMagic.Controller();
// let timeline = new TimelineMax();

// // create the animation
// timeline.to('', 2, {x: windowWitdh/2});
//     //Create Animation Scene and attach it to element
// let scene = new ScrollMagic.Scene({
//     triggerElement: "bgimg",
//     duration: "100%",
//     triggerHook: 0, // 0 triggers after element 1 triggers befor (I think lol)
// }).setTween(timeline).addTo(controller);
const menuBtn = document.querySelector('.menu-btn');
const mainContent = document.querySelector(".main-content");
const links = document.querySelector('.navLinks');
const shadowOne = document.querySelector('.shadowOne');
const shadowTwo = document.querySelector('.shadowTwo');
const iframe = document.querySelector('.iframe');




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
        
       
        
        links.classList.add('closed')
        menuOpen = false;

        iframe.classList.remove('open');
    }
    
});

$(function(){
    // var href;
    $('a.nav1').mouseover(function(){
        var href = $('a.nav1').attr('href');
        $('iframe.iframe').addClass('open').attr('src',href);
    });
    $('a.nav1').mouseout(function(){
        var href = $('a.nav1').attr('href');
        $('iframe.iframe').removeClass('open').attr('src',null);
        
    });

    $('a.nav2').mouseover(function(){
        var href = $('a.nav2').attr('href');
        $('iframe.iframe').addClass('open').attr('src',href);
        
        
    });
    $('a.nav2').mouseout(function(){
        var href = $('a.nav2').attr('href');
        $('iframe.iframe').removeClass('open').attr('src',null);
        
        
    });

    $('a.nav3').mouseover(function(){
        var href = $('a.nav3').attr('href');
        $('iframe.iframe').addClass('open').attr('src',href);
        
    });
    $('a.nav3').mouseout(function(){
        var href = $('a.nav3').attr('href');
        $('iframe.iframe').removeClass('open').attr('src',null);
        
    });

    $('a.nav4').mouseover(function(){
        var href = $('a.nav4').attr('href');
        $('iframe.iframe').addClass('open').attr('src',href);
        
    });
    $('a.nav4').mouseout(function(){
        var href = $('a.nav4').attr('href');
        $('iframe.iframe').removeClass('open').attr('src',null);
        
    });

    $('a.nav5').mouseover(function(){
        var href = $('a.nav5').attr('href');
        $('iframe.iframe').addClass('open').attr('src',href);
        
    });
    $('a.nav5').mouseout(function(){
        var href = $('a.nav5').attr('href');
        $('iframe.iframe').removeClass('open').attr('src',null);
        
    });
    
});


// console.log(getWidth()/devicePixelRatio)

checkWidth();

function checkWidth(){
    if(getWidth()/devicePixelRatio < 600){
        links.classList.add('mobile');
    }else if(getWidth()/devicePixelRatio > 600){
        links.classList.remove('mobile');
    }
    
}

window.addEventListener('resize', function(event){
    if(getWidth()/devicePixelRatio < 600){
        links.classList.add('mobile');
    }else if(getWidth()/devicePixelRatio > 600){
        links.classList.remove('mobile');
    }
    ;
});