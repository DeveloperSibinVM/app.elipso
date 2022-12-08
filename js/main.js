window.onload = ()=>{
    setTimeout(()=>{
        document.getElementById('loading').style.transform = "translateY(-1000000vh)"
        setTimeout(()=>{
            document.getElementById('main').style.display = 'block'
            document.getElementById('loading').style.display = 'none'
        },500)
        
    },2000)
}

var firstCard = $('.secondSection .card').eq(0);
var firstCardMainIcon = $('.secondSection .card .cardMainIcon').eq(0);
var firstCardArrow = $('.secondSection .card .readMoreWithArrow').eq(0);
var firstCardSubTitle = $('.secondSection .card .card-subtitle').eq(0);
var firstCardP = $('.secondSection .card p').eq(0);

var secondCard = $('.secondSection .card').eq(1);
var secondCardMainIcon = $('.secondSection .card .cardMainIcon').eq(1);
var secondCardArrow = $('.secondSection .card .readMoreWithArrow').eq(1);
var secondCardSubTitle = $('.secondSection .card .card-subtitle').eq(1);
var secondCardP = $('.secondSection .card p').eq(1);

var thirdCard = $('.secondSection .card').eq(2);
var thirdCardMainIcon = $('.secondSection .card .cardMainIcon').eq(2);
var thirdCardArrow = $('.secondSection .card .readMoreWithArrow').eq(2);
var thirdCardSubTitle = $('.secondSection .card .card-subtitle').eq(2);
var thirdCardP = $('.secondSection .card p').eq(2);

var fourthCard = $('.secondSection .card').eq(3);
var fourthCardMainIcon = $('.secondSection .card .cardMainIcon').eq(3);
var fourthCardArrow = $('.secondSection .card .readMoreWithArrow').eq(3);
var fourthCardSubTitle = $('.secondSection .card .card-subtitle').eq(3);
var fourthCardP = $('.secondSection .card p').eq(3);



$(window).resize(function() {
    if ($(this).width() > 992) {
        $(document).scroll(function() {
            if($(document).scrollTop()>$('.firstSection').height()-300){
                firstCard.addClass('cardHover');
                firstCardMainIcon.css('display','none');
                firstCardArrow.css('display','block');
                firstCardSubTitle.css('color','white');
                firstCardP.css('color','white');
        
                secondCard.removeClass('cardHover');
                secondCardMainIcon.css('display','block');
                secondCardArrow.css('display','none');
                secondCardSubTitle.css('color','#56507E');
                secondCardP.css('color','rgb(102, 102, 102)');
        
                thirdCard.removeClass('cardHover');
                thirdCardMainIcon.css('display','block');
                thirdCardArrow.css('display','none');
                thirdCardSubTitle.css('color','#56507E');
                thirdCardP.css('color','rgb(102, 102, 102)');
        
                fourthCard.removeClass('cardHover');
                fourthCardMainIcon.css('display','block');
                fourthCardArrow.css('display','none');
                fourthCardSubTitle.css('color','#56507E');
                fourthCardP.css('color','rgb(102, 102, 102)');
            }
            if($(document).scrollTop()>$('.firstSection').height()-150){
                thirdCard.addClass('cardHover');
                thirdCardMainIcon.css('display','none');
                thirdCardArrow.css('display','block');
                thirdCardSubTitle.css('color','white');
                thirdCardP.css('color','white');
        
                firstCard.removeClass('cardHover');
                firstCardMainIcon.css('display','block');
                firstCardArrow.css('display','none');
                firstCardSubTitle.css('color','#56507E');
                firstCardP.css('color','rgb(102, 102, 102)');
        
                secondCard.removeClass('cardHover');
                secondCardMainIcon.css('display','block');
                secondCardArrow.css('display','none');
                secondCardSubTitle.css('color','#56507E');
                secondCardP.css('color','rgb(102, 102, 102)');
        
                fourthCard.removeClass('cardHover');
                fourthCardMainIcon.css('display','block');
                fourthCardArrow.css('display','none');
                fourthCardSubTitle.css('color','#56507E');
                fourthCardP.css('color','rgb(102, 102, 102)');
            }
            if($(document).scrollTop()>$('.firstSection').height()){
                secondCard.addClass('cardHover');
                secondCardMainIcon.css('display','none');
                secondCardArrow.css('display','block');
                secondCardSubTitle.css('color','white');
                secondCardP.css('color','white');
        
                firstCard.removeClass('cardHover');
                firstCardMainIcon.css('display','block');
                firstCardArrow.css('display','none');
                firstCardSubTitle.css('color','#56507E');
                firstCardP.css('color','rgb(102, 102, 102)');
        
                thirdCard.removeClass('cardHover');
                thirdCardMainIcon.css('display','block');
                thirdCardArrow.css('display','none');
                thirdCardSubTitle.css('color','#56507E');
                thirdCardP.css('color','rgb(102, 102, 102)');
        
                fourthCard.removeClass('cardHover');
                fourthCardMainIcon.css('display','block');
                fourthCardArrow.css('display','none');
                fourthCardSubTitle.css('color','#56507E');
                fourthCardP.css('color','rgb(102, 102, 102)');
            }
            if($(document).scrollTop()>$('.firstSection').height()+150){
                fourthCard.addClass('cardHover');
                fourthCardMainIcon.css('display','none');
                fourthCardArrow.css('display','block');
                fourthCardSubTitle.css('color','white');
                fourthCardP.css('color','white');
        
                firstCard.removeClass('cardHover');
                firstCardMainIcon.css('display','block');
                firstCardArrow.css('display','none');
                firstCardSubTitle.css('color','#56507E');
                firstCardP.css('color','rgb(102, 102, 102)');
        
                secondCard.removeClass('cardHover');
                secondCardMainIcon.css('display','block');
                secondCardArrow.css('display','none');
                secondCardSubTitle.css('color','#56507E');
                secondCardP.css('color','rgb(102, 102, 102)');
        
                thirdCard.removeClass('cardHover');
                thirdCardMainIcon.css('display','block');
                thirdCardArrow.css('display','none');
                thirdCardSubTitle.css('color','#56507E');
                thirdCardP.css('color','rgb(102, 102, 102)');
            }

            if($(document).scrollTop()>$('.fourthSection').height()+500){
                $('.thirdSectionCard').eq(0).css({'transform' : 'translateX(0px)'});
                setTimeout(function(){
                    $('.thirdSectionCard').eq(1).css({'transform' : 'translateX(0px)'});
                },500);
                setTimeout(function(){
                    $('.thirdSectionCard').eq(2).css({'transform' : 'translateX(0px)'});
                },1000);
            }

            if($(document).scrollTop()>$('.firstSection').height()+$('.testimonials').height()+$('.secondSection').height()+$('.thirdSection').height()+$('.fourthSection').height()+$('.sixthSection').height()+200){
                $('.sixthSection .row:first-child').css({'transform' : 'translateX(0px)'});
                $('.sixthSection .row:last-child').css({'transform' : 'translateX(0px)'});
            }

            if($(document).scrollTop()>$('.firstSection').height()+$('.testimonials').height()+$('.secondSection').height()+$('.thirdSection').height()+$('.fourthSection').height()+$('.sixthSection').height()+$('.seventhSection').height()+$('.eighthSection').height()+600){
                $('.ninthSection .row').css({'transform' : 'translateY(0px)'});
            }
        })
    }
 });

 $(document).ready(function() {
    $(window).resize();
 });



document.getElementById('home').addEventListener('click',()=>{
    document.querySelector('#home a').classList.add('active')
    document.querySelector('#pages a').classList.remove('active')
    document.querySelector('#services a').classList.remove('active')
    document.querySelector('#portfolio a').classList.remove('active')
    document.querySelector('#blog a').classList.remove('active')
    document.querySelector('#contact a').classList.remove('active')
})
document.getElementById('pages').addEventListener('click',()=>{
    document.querySelector('#pages a').classList.add('active')
    document.querySelector('#home a').classList.remove('active')
    document.querySelector('#services a').classList.remove('active')
    document.querySelector('#portfolio a').classList.remove('active')
    document.querySelector('#blog a').classList.remove('active')
    document.querySelector('#contact a').classList.remove('active')
})
document.getElementById('services').addEventListener('click',()=>{
    document.querySelector('#services a').classList.add('active')
    document.querySelector('#home a').classList.remove('active')
    document.querySelector('#pages a').classList.remove('active')
    document.querySelector('#portfolio a').classList.remove('active')
    document.querySelector('#blog a').classList.remove('active')
    document.querySelector('#contact a').classList.remove('active')
})
document.getElementById('portfolio').addEventListener('click',()=>{
    document.querySelector('#portfolio a').classList.add('active')
    document.querySelector('#home a').classList.remove('active')
    document.querySelector('#pages a').classList.remove('active')
    document.querySelector('#services a').classList.remove('active')
    document.querySelector('#blog a').classList.remove('active')
    document.querySelector('#contact a').classList.remove('active')
})
document.getElementById('blog').addEventListener('click',()=>{
    document.querySelector('#blog a').classList.add('active')
    document.querySelector('#home a').classList.remove('active')
    document.querySelector('#pages a').classList.remove('active')
    document.querySelector('#services a').classList.remove('active')
    document.querySelector('#portfolio a').classList.remove('active')
    document.querySelector('#contact a').classList.remove('active')
})
document.getElementById('contact').addEventListener('click',()=>{
    document.querySelector('#contact a').classList.add('active')
    document.querySelector('#home a').classList.remove('active')
    document.querySelector('#pages a').classList.remove('active')
    document.querySelector('#services a').classList.remove('active')
    document.querySelector('#portfolio a').classList.remove('active')
    document.querySelector('#blog a').classList.remove('active')
})


