function updateTimer() {
    const future = Date.parse("2024/12/21 00:00:00");
    const now = new Date();
    const diff = future - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;

    document.getElementById("pinch_tit").innerHTML =
      d + '<span>일</span>' + ' '
     + h + '<span>시간</span>' + ' '
     + m + '<span>분</span>' + ' '
     + s + '<span>초 남음</span>';
}

setInterval(updateTimer, 1000);

var didScroll;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
    
    if($(window).scrollTop()<100){
        $('header').removeClass('scroll');
    }
}, 250);

function hasScrolled() {
  $('header').addClass('scroll');
};

function moveScroll(secNum){
    var menuHeight = document.querySelector("header").offsetHeight;

    if(secNum == 0){
        var location = document.querySelector(".main_sec02_wrap").offsetTop;
    }else if(secNum == 1){
        var location = document.querySelector(".main_sec03_wrap").offsetTop;
    }else if(secNum == 2){
        var location = document.querySelector(".main_sec04_wrap").offsetTop;
    }else if(secNum == 3){
        var location = document.querySelector(".main_sec05_wrap").offsetTop;
    }
    
    window.scrollTo({top:location - menuHeight, behavior:'smooth'});
};
