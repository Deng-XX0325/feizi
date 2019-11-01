    $("[class=phrase] ul:nth-of-type(1) li:nth-of-type(1)").click(function () {
    let num =  $(this).find("span").eq(1).text();
    num++;
    $(this).find("span").eq(1).text(num);
    $(this).find("span").eq(0).html('<span>&#xe502</span>')
});

