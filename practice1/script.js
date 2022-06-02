// jQuery(document).ready(()=>{
//   jQuery('h1').click(function(){
//     alert("You clicked h1")
//   });
// })

// $(document).ready(()=>{
//   jQuery('p').click(function(){
//     alert("You clicked on the p tag");
//   });
// })

// $(document).ready(()=>{
//   jQuery('img').click(function(){
//     alert("You clicked on the image")
//   })
// })

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

$(document).ready(()=>{
  // $('#btn').click(()=>{
  //   $('img').animate({left:'200px', height:'+=150px', width:'70%', opacity:'toggle'}, 5000);
  // })
  // $('#btn').on("click",()=>{
  //   $('img').animate({left:'20%', top:'20%'}, 3000)
  // })

  $('#btn').on({
    mouseenter:()=>{
      $('.p1').animate({backgroundColor:'red', padding:'20px'},3000)
    }, click:()=>{
      $('.p2').animate({fontSize:'30px'}, 3000)
    }
  })



})