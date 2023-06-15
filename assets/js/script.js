$(document).ready(function(){
    $('.custom-form').addClass('test');
    
    if($('#tel').length){
        $('#tel').mask('+38(000)-00-00-000');
    }

    if($('select').length){
        $('select').niceSelect();
    }

    

    $('.single-item').slick({
        dots: true,
        // slidesToShow: 3,
        // slidesToScroll: 3
    });
})







