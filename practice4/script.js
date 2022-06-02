//.ready event
$(document).ready(()=>{
  //.click event
  // $('h1').click(()=>{
  //   alert("Hello, Welcome!!")
  // })
  //mouserover
  // $('h1').mouseover(()=>{
  //   alert("Hello, Welcome!")
  // })
  //mousout
  // $("h1").mouseout(()=>{
  //   alert("Hello")
  // })
  //hover
  // $('h1').hover(()=>{
  //   $('body').css("background-color", "blue")
  // }, ()=>{
  //   $('body').css("background-color", "red")
  // });
  //show
  // $('h1.header').mouseover(()=>{
  //   $('p').show();
  // })
  //hide
  // $('h1.header').click(()=>{
  //   $('p').hide();
  // })
  //toggle
  // $('h1.header').click(()=>{
  //   $('h1').toggle();
  //   $('img').toggle();
   
  // })
  // $('img').click(()=>{
  //   $('h1').toggle();
  //   $('img').toggle();
  // })

  // $('.btn-light').click(()=>{
  //   $('.btn-dark').toggle();
  //   $('.btn-light').toggle();
  //   $('body').removeClass('bg-color')

  // })

  // $('.btn-dark').click(()=>{
  //   $('.btn-light').toggle();
  //   $('.btn-dark').toggle();
  //   // $('body').removeClass();
  //   $('body').addClass('bg-color');
  // })

  // $('.btn-dark').click(()=>{
    // $('img').fadeIn();
    // $('img').fadeOut(3000, ()=>{
    //   alert("I'm gone!")
    // })
    // $('img').fadeTo(3000, 0.3)
  // })

  $('.btn-dark').click(()=>{
    let sName=$('#gender').val();
    $('#result').text(sName);
  })
  

  

})