$(function () {
    function SwapTab(name, title, content, Sub, cur) {
        $(name + ' ' + title).mousedown(function () {
            $(this).addClass(cur).siblings().removeClass(cur);
            $(content + " > " + Sub).eq($(name + ' ' + title).index(this)).show().siblings().hide();
        });
    };
    new SwapTab(".tab-nav", "a", ".tab-content", "ul", "active");
    
//    $(".flag li").on("click", function () {
//            var exit = $("#clickOrder").find("a[href='" + $(this).find('a').attr('href') + "']");
//            if (exit.length == 0) {
//                $("#clickOrder").prepend($(this).clone());
//            }
//        });
//    $(document).on("click", ".clear", function () {
//        var T = $(this).clone();
//        $("#clickOrder").html("").prepend(T);
//    });
});

