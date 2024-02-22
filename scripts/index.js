$(document).ready(function(){
    $(window).scroll(function(){
        var scrollDistance = $(window).scrollTop();
        var ourServicesPosition = $('#our-services-heading').offset().top;
        var contactUsPosition = $('#contact-us-heading').offset().top;
        var pricelistPosition = $('#pricelist-heading').offset().top;

        //check if headings have reached the viewport

        if(scrollDistance + $(window).height() >= ourServicesPosition) {
            $('#our-services-heading').addClass('active');
        }

        if(scrollDistance + $(window).height() >= contactUsPosition) {
            $('#contact-us-heading').addClass('active');
        }

        if(scrollDistance + $(window).height() >= pricelistPosition) {
            $('#pricelist-heading').addClass('active');
        }
    })


})

