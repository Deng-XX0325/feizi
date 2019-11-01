let $input = $("input");
function f(ss) {
    ss.next().animate({
        right:"10px" },200,function () {
        ss.next().animate({
           left:"10px"
        },200);

    });

}

$input.eq(3).parent().next().click(function () {
    let aray = ["../img/pwd/1.png","../img/pwd/2.png","../img/pwd/3.png","../img/pwd/4.png","../img/pwd/5.png","../img/pwd/6.png"]
    let s = Math.floor(Math.random()*7);
    let sum = (aray[s]);
    $(this).attr("src",sum);
});
$input.next().css({"color":"red", "position": "relative","font": "normal 100 20px '方正舒体'"})
function tru(s){
    s.next().text(" ");
}
let indexs=0;
$input.focus(function () {
   indexs = $input.index($(this));
}).blur(function () {
    let val = $input.eq(indexs).val();
    if(indexs===0) {
        if (!(/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/.test(val))) {
            $(this).next().text("邮箱输入格式不正确");
            f($input.eq(indexs))
        }
        else {
          tru($input.eq(indexs));
        }
    }
    if(indexs===1) {
        let s = val.length;
        if (s<6||s>16) {
            $(this).next().text("密码格式不正确");
            f($input.eq(indexs))
        }
        else {
            tru($input.eq(indexs));
        }
    }
    if(indexs===2) {
        if (!($input.eq(1).val()===$input.eq(2).val())) {
            $(this).next().text("两次输入密码不正确");
            f($input.eq(indexs))
        }
        else {
            tru($input.eq(indexs));
        }
    }
    if(indexs===4) {
        if (!(/^1[3,8,5,9,7]\d{9}$/.test(val))) {
            $(this).next().text("电话号码格式不正确");
            f($input.eq(indexs))
        }
        else {
            tru($input.eq(indexs));
        }
    }
    if(indexs===3 || indexs===5){
        if(val!==""){
            tru($input.eq(indexs));
        }
    }

});
let sum = 0;
$(".zhuc").click(function () {
    $input.each(function(){
        if( !($(this).val()==="")){
            sum++;
            if(sum===5){
                $("#zhuche").fadeIn(100);
                $("#zhuche").css("display","block");
                setInterval("location.href='../buke.html'",2000)
            }


        }else  {
            $(this).next().text("输入不能为空");
        }
    });


});


