var SZ = SZ || {};

SZ.RegistrationView = function() {
    this.initialize();
}

SZ.RegistrationView.prototype = {
    initialize : function(){
		this.validation();
		this.registrationProcess();
	},
	validation: function(){
		var self = this;
		$('.phone-input').keypress(function(e){
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               return false;
			}
			else{
				self.multipleInputNumberValidation();
			}
		})
		
       
	},
	multipleInputNumberValidation: function(){
		var self = this;
		$('body').on('keyup', 'input.phone-input', function()
		{
			
			console.log("12221");
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
		
	},
	registrationProcess: function(){
		console.log("reg");
		
		$('#phoneNumberSubmit').click(function(){
			$('#phoneNumberBlock').addClass('d-none');
			$('#usernameBlock').removeClass('d-none');
		});
		$('#usernameSubmit').click(function(){
			$('#phoneNumberBlock').addClass('d-none');
			$('#usernameBlock').addClass('d-none');
			$('#otpBlock').removeClass('d-none');
		});
		$('#backToPhoneNumber').click(function(){
			$('#phoneNumberBlock').removeClass('d-none');
			$('#usernameBlock').addClass('d-none');
			$('#otpBlock').addClass('d-none');
		});
		$('#backToUsername').click(function(){
			$('#usernameBlock').removeClass('d-none');
			$('#otpBlock').addClass('d-none');
		})
		
	},

}

jQuery(document).ready(function () {
    var registration_view = new SZ.RegistrationView();
})
