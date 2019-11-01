$(".search").click(function () {
    $("#www").removeClass("conceal")
     $("#ss").addClass("conceal");
     $("[name='soso']").focus();
});
$(".cancel").click(function () {
    $("#ss").removeClass("conceal");
    $("#www").addClass("conceal")
});
var fixation  = document.querySelector('#menu');
let distance = fixation.offsetTop;
document.addEventListener("scroll",settled);
function settled() {
    console.log("fixation");
    console.log(distance);
window.scrollY >= distance ?fixation.classList.add("fixed"):fixation.classList.remove("fixed");
}
/******************************************************/
// let $lunbo = $("#lunbo");
// let $lunbo01 = $(".lunbo01>div");
// let $lis = $("#lunbo>ul>li");
// let $span = $("#lunbo div:nth-of-type(2)>span");
// $lis.click(function () {
//     let lione = $(this).index();
//     $(this).addClass("actent").siblings().removeClass("actent");
//     console.log($lunbo01.eq(lione));
//     $lunbo01.eq(lione).addClass("indicate").siblings().removeClass("indicate")
// });
// $lunbo.hover(function(){
//     $span.css("z-index","50");
// }).mouseout(function () {
//     $span.css("z-index","");
// });
// $lunbo.hover(function(){
//     $span.toggle();
//     if($span.css("display")==="none"){
//         Start = setInterval(function () {
//             open();
//         },3000);
//     }else{
//         clearInterval(Start);
//     }
//
// });
// $span.eq(0).click(function () {
//         let index = $("#lunbo>ul>li.actent").index();
//         $lis.eq(index-1).addClass("actent").siblings().removeClass("actent");
//         $lunbo01.eq(index-1).addClass("indicate").siblings().removeClass("indicate")
//
//     });
// $span.eq(1).click(function () {
//     let index = $("#lunbo>ul>li.actent").index();
//     if (index===4){
//         index=-1;
//     }
//     $lis.eq(index+1).addClass("actent").siblings().removeClass("actent");
//     $lunbo01.eq(index+1).addClass("indicate").siblings().removeClass("indicate")
// });
// function open(){
//     $span.eq(1).click();
// }
// let Start = setInterval(function () {
//     open();
// },3000);
/***********************************************************************/
let $author = $(".minren li");
let $table = $(".minren table");
$author.click(function () {
    let index = $(this).index();
    $table.hide();
    $table.eq(index).fadeIn(1000);
});
/*****************************************************************/

    let oS= 0;
    let time;
     runs();
    function runs(){
        time= setInterval(function(){
            if(oS<=-2060){
                oS=0;
            }
            oS--;
            $("#roll ul").css("margin-left",oS);
        },10);

    }

    $("#roll li").hover(function () {
        clearInterval(time);
    },function () {
        runs();
    });

/***********************************************/
$("#logo>ul li:nth-of-type(1)").click(function () {
    $(".logging").fadeIn(500);
    $("#zhongti").fadeTo(100,0.4)
});


$(".logging>p span").click(function () {
    $(".logging").fadeOut(500);
    $("#zhongti").fadeTo(100,1)
});


let $lunbo = $("#lunbo");
let $lunbo01 = $(".lunbo01>div");
let $lis = $("#lunbo>ul>li");
let $span = $("#lunbo div:nth-of-type(2)>span");
$lis.click(function () {
    let lione = $(this).index();
    $(this).addClass("actent").siblings().removeClass("actent");
    console.log($lunbo01.eq(lione));
    $lunbo01.eq(lione).fadeIn(1000).siblings().fadeOut(1000)
});
$lunbo.hover(function(){
    $span.css("z-index","50");
}).mouseout(function () {
    $span.css("z-index","");
});
$lunbo.hover(function(){
    $span.toggle();
    if($span.css("display")==="none"){
        Start = setInterval(function () {
            open();
        },3000);
    }else{
        clearInterval(Start);
    }

});
$span.eq(0).click(function () {
    let index = $("#lunbo>ul>li.actent").index();
    $lis.eq(index-1).addClass("actent").siblings().removeClass("actent");
    $lunbo01.eq(index-1).fadeIn(1000).siblings().fadeOut(1000)

});
$span.eq(1).click(function () {
    let index = $("#lunbo>ul>li.actent").index();
    if (index===4){
        index=-1;
    }

    $lis.eq(index+1).addClass("actent").siblings().removeClass("actent");
    $lunbo01.eq(index+1).fadeIn(1000).siblings().fadeOut(1000)

});
function open(){
    $span.eq(1).click();
}
let Start = setInterval(function () {
    open();
},3000);
/************************************************************/
$("#author>div:first td").hover(function () {
  $(this).css( "background-color"," rgba(0, 0, 0, 0.11)")
},function () {
    $(this).css( "background-color"," rgba(0, 0, 0, 0)")
});