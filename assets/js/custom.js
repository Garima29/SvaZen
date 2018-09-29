$( document ).ready(function(){
	console.log("whbednmsdf");


    
    $('body').on('keyup', 'input.phone-input', function()
    {
      var key = event.keyCode || event.charCode;
      var inputs = $('input.phone-input');
      if(($(this).val().length === this.size) && key != 32) 
      {
        inputs.eq(inputs.index(this) + 1).focus();  
      } 
      if( key == 8 || key == 46 )
      {
        var indexNum = inputs.index(this);
        if(indexNum != 0)
        {
        inputs.eq(inputs.index(this) - 1).val('').focus();
        }
      }
      
    });

})