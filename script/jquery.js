$(document).ready(function(){
    $('.circle1').tilt({

      maxTilt:        30,
      perspective:    500,   // Transform perspective, the lower the more extreme the tilt gets.
      easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
      scale:          1.2,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          20000,    // Speed of the enter/exit transition.
      transition:     true,   // Set a transition on enter/exit.
      axis:           null,   // What axis should be disabled. Can be X or Y.
      reset:          true,   // If the tilt effect has to be reset on exit.
      glare:          false,  // Enables glare effect
      maxGlare:       1       // From 0 - 1.// 글레어효과 강도 0-1
      
      });
      $('.circle2').tilt({
        maxTilt:        20,
        perspective:    500,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        scale:          1.12,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          12000,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
        maxGlare:       1       // From 0 - 1./ 글레어효과 강도 0-1
      
      });
      $('.circle3').tilt({

        maxTilt:        20,
        perspective:    500,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        scale:          1.1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          15000,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
        maxGlare:       1       // From 0 - 1.
      });

      $('.sh_circle').tilt({

        maxTilt:        25,
        perspective:    200,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          10000,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
        maxGlare:       1      // From 0 - 1.
      });

      
      $('.triangle').tilt({

        maxTilt:        25,
        perspective:    300,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        scale:          1.1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          15000,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
        maxGlare:       1    ,  // From 0 - 1.

      });


      $('.square').tilt({

        maxTilt:        25,
        perspective:    200,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          10000,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
        maxGlare:       1      // From 0 - 1.
      });
     

   
 

      $(document).on('mouseover', (event) => {
        $('#pointer').css({
          left: event.clientX,
          top: event.clientY,
        });
        
      });




      $('.menu1').on('mousemove', (event1) => {
        $('#spot').css({
          left: event1.clientX,
          top: event1.clientY,
          display : 'inline-block'
        });
      
      } );
      

      $('.menu1').on('mouseleave',()=>{
        $('#spot').css({
        display:'none'
        });
      })

      $('.menu1').on('mousemove', (event1) => {
        $('#pointer,#dot').css({
        
          display : 'none'
        });
      
      } );
      

      $('.menu1').on('mouseleave',()=>{
        $('#pointer,#dot').css({
        display:'block'
        });
      })

     

      const modal1 = `
      <div class="background">
        <div class="modal">
          <div class="modal_title">
            <h2>CGV 웹사이트</h2>
            <p> 2022.10 ~ 2022.11 | UI/UX DESIGN</p>
          </div>
          <img src="./img/cgvmodal.png">
          <a href="https://ldg8644.github.io/CGV/"><i class='far fa-window-restore'></i>CGV 웹사이트 바로가기</a>
        </div>
      </div>
      `
   
      const modal2 = `
      <div class="background">
        <div class="modal">
          <div class="modal_title">
            <h2>메타버스란?</h2>
            <p> 2022.06.13 ~ 2022.08.31 | Video Edit</p>
          </div>
          <img src="./img/metaversemodal.png">
          <video controls><source src="./video/metaverse.mp4" type="video/mp4"></video>
        </div>
      </div>
      `
      const modal3 = `
      <div class="background">
      <div class="modal">
        <div class="modal_title">
          <h2>3D Modeling</h2>
          <p> 2022.07.05 ~ 2022.07.21 | Video Edit</p>
        </div>
        <img src="./img/3dmodal.png">
        <video controls><source src="./video/3dmodeling.mp4" type="video/mp4"></video>
      </div>
    </div>
      `
    
      const modal4 =`
      <div class="background">
      <div class="modal">
        <div class="modal_title">
          <h2>문화안전공모전</h2>
          <p> 2021.12.20 ~ 2021.12.25 | Video Edit</p>
        </div>
        <img src="./img/culturemodal.png">
        <video controls><source src="./video/culture.mp4" type="video/mp4"></video>
      </div>
    </div>
`

const modal5 =`
      <div class="background">
      <div class="modal">
        <div class="modal_title">
          <h2>TV program</h2>  
          <p> 2022.12.02 ~ 2022.12.08 | Video Edit</p>
        </div>
        <img src="./img/tvmodal.png">
        <video controls><source src="./video/tvprogram.mp4" type="video/mp4"></video>
      </div>
    </div>
`
const modal6 =`
      <div class="background">
      <div class="modal">
        <div class="modal_title">
          <h2>졸업전시회 릴영상</h2>
          <p> 2022.10.30 ~ 2022.11.04 | MY REEL VIDEO</p>
        </div>
        <img src="./img/panel.jpg">
        <video controls><source src="./video/reelvideo.mp4" type="video/mp4"></video>
      </div>
    </div>
`
 let num = $(".shadow");

  const mo = [modal1, modal2, modal3, modal4, modal5, modal6]
   


$(num).on("click", function(){
  let $ili = $(".shadow").index(this); 


  console.log($ili+1)
  console.log(mo[$ili])
 
 
  $("body").prepend(mo[$ili])
  
});




// function index(){
// $(num).on("click", function(){
//   $(num).index().length
// console.log(index)
// })
// }


    $(document).mouseup(function (e){
      if($(".background").has(e.target).length === 0){
        $(".background").remove();
      }
    });




    $(document).ready(function($) {

      $(".scroll_move").click(function(event){         
              event.preventDefault();
              $('html').animate({scrollTop : offset.top}, 400);
      });

});



})
