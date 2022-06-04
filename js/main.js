var footerTop = $('footer').offset().top;    //푸터가 위에서 부터 얼마나 떨어져있는지
var conWrapTop = $('#conWrap').offset().top;    //#conWrap이 위에서 부터 얼마나 떨어져있는지

console.log("푸터는 위에서 부터 "+footerTop+" / conWrap은 위에서 부터 "+conWrapTop);

var conWrapH = footerTop - conWrapTop;  //#conWrap의 세로길이
console.log(conWrapH);
$('#conWrap').css({height:conWrapH});   //#conWrapH에 적용


$(window).resize(function(){   //화면을 리사이즈 할때마다 새로 적용
    var footerTop = $('footer').offset().top; 
    var conWrapTop = $('#conWrap').offset().top;

    var conWrapH = footerTop - conWrapTop;
    $('#conWrap').css({height:conWrapH});
});

//lnb 슬라이드 메뉴
var open = 0; //메뉴가 닫혀있을때(처음)
var du = 400;

$('.lnb_btn').click(function(){
    if( open == 0){
        $('#wrap').animate({left:274},du);
        $('.lnb_btn').find('img').attr({'src':'img/bg_header_lnb_active.png', 'alt':'닫기' });
        $('#lnb').animate({left:0},du);
        $('#main_footer').animate({left:274},du);
        $('.cover').fadeIn(du);
        $("body").css('overflow','hidden')
        open = "열림";
    } 
    else {
        $('#wrap').animate({left:0},du);
        $('.lnb_btn').find('img').attr({'src':'img/bg_header_lnb.png', 'alt':'메뉴열기' });
        $('#lnb').animate({left:'-274px'},du);
        $('#main_footer').animate({left:0},du);
        $('.cover').fadeOut(du);
        open = 0;
    }
    
});