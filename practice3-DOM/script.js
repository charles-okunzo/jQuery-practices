// $(document).ready(()=>{

// })
var count= 0;
var numbers= ["Milk", "water", "hello"];

$(()=>{
  $('#hello').click(()=>{
    $('ul#user').append(`<li>Item${count+1} ${numbers[count]}</li>`)
    count++;
    if(count===numbers.length){
      count=0;
    }
  })
})




// $(()=>{
//   $('#hello').click(()=>{
//     $('ul#user').prepend('<li>Hello</li>')
//     $('ul#web').prepend('<li>Why hello there</li>')
//     $('ul#user').children('li').first().click(()=>{
//       $('ul#user').children('li').first().remove();
//     })
//     $('ul#web').children('li').first().click(()=>{
//       $('ul#web').children('li').first().remove();
//     })
//   })
//   $('#goodbye').click(()=>{
//     $('ul#user').prepend('<li>Good Bye</li>')
//     $('ul#web').prepend('<li>Goodbye, dear user</li>')
//     $('li').css("background-color", "cyan")
//   })
//   $('#stop').click(()=>{
//     $('ul#user').prepend('<li>Stop Copying Me</li>')
//     $('ul#web').prepend('<li>Pardon me, I meant no offense</li>')
//   })
// })