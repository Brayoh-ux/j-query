$(document).ready(function(){
    $("button#dark").click(function(){
        $("body").css("background-color", "black");
        $("body").css("color", "white");
    });

    $("button#light").click(function(){
        $("body").css("background-color", "#fff");
        $("body").css("color", "black");
    });

    $(".clickable").click(function(){
        $("img").show();
        $(".showing").toggle();
        $("hidden").toggle();
    });

    $("button#hello").click(function(){
        $("ul#user").append("<li>Hello!</li>");
        $("ul#webpage").append("<li>Hello to you too!</li>");
        $('li').css('background-color', 'green');
        
        $("ul#user").children("li").first().click(function(){
            alert("hi");
            $(this).remove();
        });

        $("ul#webpage").children("li").first().click(function(){
            alert("hi");
            $(this).remove();
        });



    });

    $("button#goodbye").click(function(){
        $("ul#user").prepend("<li>Goodbye!</li>");
        $("ul#webpage").prepend("<li>too early man!</li>");
    });

    $("button#stop").click(function(){
        $("ul#user").prepend("<li>Stop copping me!</li>");
        $("ul#webpage").prepend("<li>Pardon me.I ment no offence.</li>");
    });

});