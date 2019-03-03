$(document).ready( function () {

    $('#close').hide();
    $('#burger').on('click', function () {
        $( "#menu" ).slideToggle( "slow", function() {
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
            $( "#burger" ).hide();
            $( "#close" ).show();
        });
    })

    $('#close').on('click', function () {
        $( "#menu" ).slideToggle( "slow", function() {
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
            $( "#close" ).hide();
            $( "#burger" ).show();
        });
    })

    $('.menu a').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-5 }, 2000);
    });

    $('#sendMessage').on('click', function(e){
        e.preventDefault();

        var name = $('input[name="name"]').val();
        var phone = $('input[name="phone"]').val();
        var information = $('textarea[name="information"]').val();

        var error = 0;

        if(!name){
            $('input[name="name"]').addClass('error');
            error++;
        }
        if(!phone){
            $('input[name="phone"]').addClass('error');
            error++;
        }
        if(error){
            return false;
        }

        $.ajax({
            url : "send.php",
            dataType : "json",
            type : "post",
            data : {name : name, phone: phone, information: information}
        }).done(function( data ) {
            $('#form-sendMessage').html('<h3>'+data.msg+'</h3>');
        });
    });

    $(window).scroll(function() {

        var top_of_element_questionsForm = $("#questionsForm").offset().top;
        var bottom_of_element_questionsForm = $("#questionsForm").offset().top + $("#questionsForm").outerHeight();
        var bottom_of_screen_questionsForm = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_questionsForm = $(window).scrollTop();

        var top_of_element_questionsText = $("#questionsText").offset().top;
        var bottom_of_element_questionsText = $("#questionsText").offset().top + $("#questionsText").outerHeight();
        var bottom_of_screen_questionsText = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_questionsText = $(window).scrollTop();

        if ((bottom_of_screen_questionsForm > top_of_element_questionsForm) && (top_of_screen_questionsForm < bottom_of_element_questionsForm)){
            $('#questionsForm').addClass('animated bounceInUp fast');
        }

        if ((bottom_of_screen_questionsText > top_of_element_questionsText) && (top_of_screen_questionsText < bottom_of_element_questionsText)){
            $('#questionsText').addClass('animated bounceInRight fast');
        }
    });


});