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

    refresh();
})