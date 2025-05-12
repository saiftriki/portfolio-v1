$(document).ready(function(){
    // sticky navbar
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 400){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Web developer","Web Designer"],
        typeSpeed: 85,
        backSpeed: 50,
        loop: true
    });

     var typed = new Typed(".typing-2", {
        strings: ["Web ","Developer"],
        typeSpeed: 80,
        backSpeed: 45,
        loop: true
    });
});

// owl carousel script
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay:false,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// More script
function MouseOver() {
  document.getElementById('more').style.display = 'block'
}

function MouseOut() {
  document.getElementById('more').style.display = 'none'
}

function MouseOver2() {
  document.getElementById('more-2').style.display = 'block'
}

function MouseOut2() {
  document.getElementById('more-2').style.display = 'none'
}
