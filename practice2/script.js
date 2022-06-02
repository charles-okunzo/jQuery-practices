// $(document).ready(()=>{
//   $("p").click(()=>{
//     $("img").show();
//   })
// })
$(document).ready(()=>{
  $('.clickable').click(()=>{
    $('#walrus-hidden').toggle();
    $('#walrus-showing').toggle();
  })
})

// $(document).ready(()=>{
//   $(".click-me").click(()=>{
//     $("h2").fadeOut();
//   })
// })

// $(()=>{
//   $("h1").hover(()=>{
//     alert("You entered h1")
//   }, ()=>{
//     alert("You left h1")
//   })
// })

// $(()=>{
//   $(".clickable").hover(()=>{
//     $('h2').css("background-color", "red");
//   }, ()=>{
//     $('h2').css("color", "green")
//   })
// })


$(document).ready(()=>{
  $("h1").on("click",()=>{
    $("body").css("background-color", "cyan")
  })
})

$(document).ready(()=>{
  $('h1').mouseenter(()=>{
    $('body').addClass("bg-green")
    $('body').removeClass();
  })
})