'use strict'
$(document).ready(function () {

    var body = $('body');
    var mainmenu = $('.main-menu');

    /* page load as iframe */
    if (self !== top) {
        body.addClass('iframe');
    } else {
        body.removeClass('iframe');
    }

    /* Dropdown toggle */
    //$('.dropdown-toggle').dropdown()

    /* floating input text fields */
    $('.floating-input').each(function () {
        if (!$(this).val() || $(this).val().length === 0) {
            //$(this).parent().removeClass('active')
        } else {
            $(this).parent().addClass('active')
        }
    })
    $('.floating-input').on('blur', function () {
        if (!$(this).val() || $(this).val().length === 0) {
            $(this).parent().removeClass('active')
        } else {
            $(this).parent().addClass('active')
        }

        return false;
    });


    /* menu open close */
    $('.main-menu .btn-close').on('click', function () {
        if (body.hasClass('menu-overlay') === true) {
            body.removeClass('menu-open');
        } else {
            body.removeClass('menu-active');
            body.removeClass('menu-open');
            $('html').removeClass('menu-open');
        }

        return false;
    })
    $('.menu-btn').on('click', function () {
        if (body.hasClass('menu-overlay') === true) {
            body.addClass('menu-open');
        } else {
            body.addClass('menu-active');
            body.addClass('menu-open');
            $('html').addClass('menu-open');
        }

        return false;
    });
    $('.main-menu + .backdrop').on("click", function (e) {
        if (body.hasClass('menu-open') === true) {
            body.removeClass('menu-open');
        }

        return false;
    });



    /* menu style switch */
    $('#menu-pushcontent').on('change', function () {
        if ($(this).is(':checked') === true) {
            body.addClass('menu-push-content');
            mainmenu.css('display', 'block');
            body.removeClass('menu-overlay');
        }

        return false;
    });
    $('#menu-overlay').on('change', function () {
        if ($(this).is(':checked') === true) {
            body.removeClass('menu-push-content');
            mainmenu.css('display', 'block');
            body.addClass('menu-overlay');
        }

        return false;
    });


    /* back page navigation */
    $('.back-btn').on('click', function () {
        window.history.back();
        return false;
    });

    /* float label checking input is not empty */
    $('.float-label .form-control').on('blur', function () {
        if ($(this).val() || $(this).val().length != 0) {
            $(this).closest('.float-label').addClass('active');
        } else {
            $(this).closest('.float-label').removeClass('active');
        }
        return false;
    })

	$("#gender").change(function(){
		$(".main").toggleClass("m");
		if($("#gender").is(":checked")){
            setCookie("gender", true, 7); // 7일 동안 쿠키 보관
			$(".background").css({"background":"url(img/gender-m.gif)","background-position":"center center", "background-size":"cover"}); 	
		}else{
            setCookie("gender", false, 7); // 7일 동안 쿠키 보관
			$(".background").css({"background":"url(img/gender-w.gif)","background-position":"center center", "background-size":"cover"}); 	
		}
	});
    
    // 저장된 쿠키값을 가져와서 ID 칸에 넣어준다. 없으면 공백으로 들어감.
    var gender = getCookie("gender");

    if(gender){
        $("#gender").attr("checked", true);
    }

});


$(window).on('load', function () {
    setTimeout(function () {
        $('.loader-display').fadeOut('slow');
    }, 500);


    /* Background
    $('.background').each(function () {
        var imgpath = $(this).find('img');
        $(this).css('background-image', 'url(' + imgpath.attr('src') + ')');
        imgpath.hide();
    }) */

    /* url path on menu */
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $(' .main-menu ul a').each(function () {
        if (this.href === path) {
            $(' .main-menu ul a').removeClass('active');
            $(this).addClass('active');
        }
    });


});

$(window).on('scroll', function () {

    /* scroll from top and add class */
    if ($(document).scrollTop() > '10') {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});


$(window).on('resize', function () {

});



function setCookie(cookieName, value, exdays){
    alert(cookieName);
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}
 
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}
 
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}