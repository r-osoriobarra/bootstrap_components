$(document).ready(function(){
    //Dismissing
    $('#alertButton').click(function(){
        $('.dismissing').fadeOut();
    });

    //Collapse
    $('#linkHref').click(function(e){
        e.preventDefault(); //se salta lo que hace el <a> por defecto
        $('#collapseExample').slideToggle('slow');
    });

    $('#dataTarget').click(function(){
        $('#collapseExample').slideToggle('slow');
    });

    //Accordion   
    $('.collapse').hide();
    
    // $('#headingOne').click(function(){
    //     $('#collapseOne').toggle('slow');
    //     $('#collapseTwo').hide('slow');
    //     $('#collapseThree').hide('slow');
    // });

    // $('#headingTwo').click(function(){
    //     $('#collapseOne').hide('slow');
    //     $('#collapseTwo').toggle('slow');
    //     $('#collapseThree').hide('slow');
    // });

    // $('#headingThree').click(function(){
    //     $('#collapseOne').hide('slow');
    //     $('#collapseTwo').hide('slow');
    //     $('#collapseThree').toggle('slow');
    // });

    $('.btn-link').click(function(){
        let target = $($(this).data('target')); //selecciona el div entero y no solo el id 
        if(target.is(':visible')){
            target.slideUp();
        } else {
            $('.targeted').slideUp();
            target.slideToggle();
        }
    });


});

