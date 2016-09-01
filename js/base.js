$(function () {
    function SwapTab(name, title, content, Sub, cur) {
        $(name + ' ' + title).mousedown(function () {
            $(this).addClass(cur).siblings().removeClass(cur);
            $(content + " > " + Sub).eq($(name + ' ' + title).index(this)).show().siblings().hide();
        });
    };
    new SwapTab(".tab-nav", "a", ".tab-content", "ul", "active");

    $.event.special.copy.options = {
          hoverClass: "hover",
          activeClass: "active"
        };
    $("body").on("copy", ".clickCopy", function (e) {
        e.clipboardData.clearData();
        e.clipboardData.setData("text/plain", $(this).data("zclip-text"));
        e.preventDefault();
    });
});
