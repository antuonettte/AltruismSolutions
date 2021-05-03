let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// create the animation
timeline
.to('.layer2',5,{y: -200})
.to('.layer3',5,{y: -300},"-=4.5")
.to('.layer4',5,{y: -450},"-=4.5")
.to('.layer5',5,{y: -100},"-=4.4")
.to('.container-fluid',3,{top:'0%'},'-=4.2');

let scene = new ScrollMagic.Scene({
    triggerElement:"body",
    duration: '100%',
    triggerHook: 0,
}).setTween(timeline).setPin("body").addTo(controller)



// var homeHero = bodymovin.loadAnimation({
//     container: document.getElementById('animation'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: '..\Res\Lottie Animations\cloudComputing.json'
// });





var anim;
var elem = document.getElementById('animation')

var animData = {
    container: elem,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../Res/Lottie Animations/webDevelopment.json'
};

anim = bodymovin.loadAnimation(animData);

//If I want to animate on scroll
// $(window).scroll(function() {
//     // calculate the percentage the user has scrolled down the page
//     var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
      
//     console.log(anim.currentRawFrame);
     
//     scrollPercentRounded = Math.round(scrollPercent);
    
//     /*console.log( (scrollPercentRounded / 100) * anim.totalFrames );*/

//     anim.goToAndStop( (scrollPercentRounded /50) * 5000)
//     });
 