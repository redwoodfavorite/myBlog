$(document).ready(function(){
    var fade1Start=0 // 100px scroll or less will equiv to 1 opacity
    ,fade1Until=400 // 200px scroll or more will equiv to 0 opacity
    ,fading1 = $('#topbar')
    ,fade2Start = 1100
    ,fade2Until = 1700
    ,fading2 = $('#home');

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity1=0
            ,opacity2=1
        ;
        if( offset<=fade1Start ){
            opacity1=1;
        }else if( offset<=fade1Until ){
            opacity1=1-offset/fade1Until;
        }
        fading1.css('opacity',opacity1);

        if( offset<=fade2Start ){
            opacity2=0;
        }else if( offset<=fade2Until ){
            opacity2=(offset-fade2Start)/(fade2Until - fade2Start);
        }
        fading2.css('opacity',opacity2);
    });

    $('li.index a').on('click', function(){
        $('html, body').animate({
            scrollTop: $("#main").offset().top - 100
        }, 2500, 'swing');
    });

    $('img#home').on('click', function(){
        $('html, body').animate({
            scrollTop: $("#topbar").offset().top - 100
        }, 2000, 'swing');
    });
});

window.onload=function(){
    setTimeout(function(){
        scrollTo(0,-1);
    },0);
};
