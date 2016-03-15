$(document).ready(function () {

    $(".imgLiquid").imgLiquid();

    $(".product_item").each(function () {
        var href = $(this).find("a").attr("href");
        $(this).wrap("<a class='product' href='" + href + "'></a>");
    });
    $(window).load(function () {
        $(".product").matchHeight();
        $(".fiftyPercent").matchHeight();
        $(".matchHeight").matchHeight();
    });

});
