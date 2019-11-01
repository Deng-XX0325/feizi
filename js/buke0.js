let aryy = [{div01:'真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。这是怎样的哀痛者和幸福者?然而造化又常常为庸人设计，以时间的流驶，来洗涤旧迹，仅使留下淡红的血色和微漠的悲哀。在这淡红的血色和微漠的悲哀中，又给人暂得偷生，维持着这似人非人的世界。我不知道这样的世界何时是一个尽头!',
    div02:'  ——鲁迅《纪念刘和珍君》',
    div03:'<img src="../img/tuzhi/29.jpg" alt="">',
div04:'鲁迅',
div05:'《纪念刘和珍君》'},
    {div01:'有工夫绝望的话，还不如吃点好吃的去睡觉呢~',

        div02:'  ——佚名《非自然死亡》',
        div03:'<img src="../img/tuzhi/8.jpg" alt="">',
        div04:'佚名',
        div05:'《非自然死亡》'},
    {div01:'神不贪，为何容不得一点对其不敬?神不恶，为何要将地上千万生灵命运，握于手中？',
        div02:'——今何在《悟空传》',
        div03:'<img src="../img/tuzhi/7.jpg" alt="">',
        div04:'今何在',
        div05:'《悟空传》'},
    {div01:'世界上最美丽的东西，叫做希望，胜利的希望，可是当希望没有实现，剩下的就只有绝望。',
        div02:'  ——龙葵《仙剑奇侠传三》',
        div03:'<img src="../img/tuzhi/5.jpg" alt="">',
        div04:'龙葵',
        div05:'《仙剑奇侠传三》'},
    {div01:'这个时代缺的不是完美的人，缺的是从自己心底里给出的，真心、正义、无畏和同情。',
        div02:'  ——佚名《无问东西》',
        div03:'<img src="../img/tuzhi/17.jpg" alt="">',
        div04:'佚名',
        div05:'《无问东西》'},
    {div01:'人死了哪会分什么好人坏人，只是碰巧死了，我们也只是碰巧还活着。碰巧还活着的我们，不能把死亡当作不吉利的东西。',
        div02:'  ——佚名《非自然死亡》',
        div03:'<img src="../img/tuzhi/11.jpg" alt="">',
        div04:'佚名',
        div05:'《非自然死亡》'}];
rand();
function rand() {
    let rands = Math.floor(Math.random()*aryy.length);
    let ran = aryy[rands];
    console.log(ran);
    $('.randomzi>div:first').html(ran.div01);
    $('.randomzi>div:last').html(ran.div02);
    $('#co>div:nth-of-type(1)>div').html(ran.div03);
    $('#co>div>ul>li:first span').html(ran.div04);
    $('#co>div>ul>li:eq(1) span').html(ran.div05)
}


$(".xi li").eq(0).click(function () {
    let texts = $(this).find('span');
    if(texts.hasClass("iconfont icon-taoxin")){
        $(this).find('span').removeClass("iconfont icon-taoxin");
        $(this).find('span').addClass("iconfont icon-taoxin1")
    }else{
        $(this).find('span').removeClass("iconfont icon-taoxin1");
        $(this).find('span').addClass("iconfont icon-taoxin")
    }
});




$("#zhong button").click(function () {
    let vals = $("#zhong textarea").val();
    f(vals);
    $("#zhong textarea").val("");
    let heights = $(".ment").height();
    if(heights>300){
        $(".ment").css({
            "overflow": "auto",
            "height": "358.4"
            }
        )
    }
});
function f(s) {
    let rand = Math.floor(Math.random()*44);
    let str = $('<table><tr><td rowspan="2"><img src="../img/tuzhi/'+(rand+1)+'.jpg" alt=""></td><td>'+new Date().toLocaleString()+'</td></tr><tr><td>'+s+'</td></tr></table>')
    console.log(str);
    $(".ment").prepend(str)
}
