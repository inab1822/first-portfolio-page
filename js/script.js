$(document).ready(function(){

    function refresh(){
        $('html').animate({
            scrollTop: '0px'
        });
    }
    
    $(window).on('scroll',function(){

        let scr = $(window).scrollTop();
        let projectPg = $('.projectPage').scrollTop();
        // console.log(scr)
        if(scr === 0 ){
            $('.navBar').css('bottom','-100%')
        }else if(scr > 0){
            $('.navBar').css('bottom','20px')
        }
        
        if(scr > 310 && scr <= 880){
            $('.navBar').find('.profile').addClass('on').siblings().removeClass('on');
        }else if(scr > 880 && scr <=1850){
            $('.navBar').find('.skill').addClass('on').siblings().removeClass('on');
        }else if(scr > 1850 && scr <= 2800){
            $('.navBar').find('.project').addClass('on').siblings().removeClass('on');
        }else if(scr > 2800){
            $('.navBar').find('.contact').addClass('on').siblings().removeClass('on')
        }

    
    });


    let skillPg = $('.skillPage').offset().top;
    let projectPg = $('.projectPage').offset().top;
    let contactPg = $('.contactPage').offset().top;
    // console.log(projectPg)
    $('.profile').on('click',function(){
        $('html').animate({
            scrollTop: '610px'
        })
    });
    $('.skill').on('click',function(){
        $('html').animate({
            scrollTop: skillPg
        })
    });
    $('.project').on('click',function(){
        $('html').animate({
            scrollTop: projectPg
        })
    });
    $('.contact').on('click',function(){
        $('html').animate({
            scrollTop: contactPg
        })
    })
    $('.top').on('click',function(){
        $('html').animate({
            scrollTop: '0px'
        });
    });
 
   $('.msg').find('button').on('click',function(e){
        e.preventDefault();
        let name = $('.msg').find('.name').val();
        let address = $('.msg').find('.address').val();
        let text = $('.msg').find('.text').val();
   })

 
   var typingBool = false;
   var typingIdx=0;
   var liIndex=0;
   var liLength = $('.typing-text>ul>li').length;
   //typing-text 안에 있는 ul 안에있는 li 요소의 갯수
   console.log(liLength);
   var typingTxt = $('.typing-text>ul>li').eq(liIndex).text()
   typingTxt = typingTxt.split('');
   
   if(typingBool==false){
    typingBool=true;
    var tyInt = setInterval(typing,100);
   }

   function typing(){
    $('.typing ul li').removeClass('on');
    $('.typing ul li').eq(liIndex).addClass('on');

    if(typingIdx<typingTxt.length){
        $('.typing ul li').eq(liIndex).append(typingTxt[typingIdx])
        typingIdx++;
    }else if(liIndex<liLength - 1){
        liIndex++;
        typingIdx=0;
        typingBool = false;
        typingTxt = $('.typing-text>ul>li').eq(liIndex).text();
        console.log(typingTxt)

        clearInterval(tyInt);

        setTimeout(function(){
            tyInt = setInterval(typing,100)
        },1000);
    }else if(liIndex==liLength -1){
        clearInterval(tyInt);
    }
    
        
    }
   

    refresh();
})