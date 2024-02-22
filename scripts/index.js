$(document).ready(function(){
    $(window).scroll(function(){
        var scrollDistance = $(window).scrollTop();
        var underlinePosition = $('#our-services-heading').offset().top;
        console.log(`-${underlinePosition}--${scrollDistance}OOOOOOOOOOOOOOOOOOOOOOOOOOO1010000010000000100000`)
        if(scrollDistance >= underlinePosition) {
            $('#our-services-heading').addClass('active');
        }
    })

})

