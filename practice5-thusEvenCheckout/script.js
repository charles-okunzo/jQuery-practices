$(()=>{
  $('input:radio[name=gender]').change(()=>{
    console.log($('input:radio:checked').val())
    console.log($('#txt').prop('value'))
    console.log($('#txt').attr('value'))
  })
  

})