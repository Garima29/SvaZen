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
		$('.js-number-validation').keydown(function(e){
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               return false;
			}
			else{
				self.multipleInputNumberValidation();
			}
		});
		$('.js-name-validation').keydown(function(e){
			if (e.which == 8 || e.which == 0 || event.keyCode >= 65 && event.keyCode <= 90) {
               
			}
			else{
				return false;
			}
		})
		
       
	},
	multipleInputNumberValidation: function(){
		var self = this;
		console.log("multiple");
		$('body').on('keyup', 'input.js-number-validation', function()
		{
		  var key = event.keyCode || event.charCode;
		
		  var inputs = $('input.js-number-validation');
		  if(($(this).val().length === this.size) && key != 32 ) 
		  {
			  $(this).css("border-color","grey");
			inputs.eq(inputs.index(this) + 1).focus();  
		  } 
		  if( key == 8 || key == 46 )
		  {
			var indexNum = inputs.index(this);
			if(indexNum != 0)
			{
			$(this).css("border-color","#dddada");
			inputs.eq(inputs.index(this) - 1).val('').focus();
			}
		  }
		  
		});
		
	},
	registrationProcess: function(){
		var self=this;
		console.log("reg");
		self.handlePhoneNumberSubmission();
		self.handleNameSubmission();
		self.handleOtpSubmission();
		
		$('#backToPhoneNumber').click(function(){
			$('.help-block').html('');
			$('#phoneNumberBlock').removeClass('d-none');
			$('#usernameBlock').addClass('d-none');
			$('#otpBlock').addClass('d-none');
		});
		$('#backToUsername').click(function(){
			$('#usernameBlock').removeClass('d-none');
			$('#otpBlock').addClass('d-none');
		})
		
	},
	handlePhoneNumberSubmission: function(){
		$('.phone-input').on('keyup',function(e){
			console.log("change color");
			var reqlength = $('.phone-input').length;
			console.log(reqlength);
			var value = $('.phone-input').filter(function () {
				return this.value != '';
			});

			if (value.length>=0 && (value.length !== reqlength)) {
				console.log("red");
				$('#phoneNumberSubmit').addClass("disable-button");
				$('#phoneNumberSubmit').removeClass("enable-button");
				$('#phoneNumberSubmit').removeClass("shadow");
			} else {
				console.log("green");
				$('#phoneNumberBlock .help-block').html('');
				$('#phoneNumberSubmit').removeClass("disable-button");
				$('#phoneNumberSubmit').addClass("enable-button");
				$('#phoneNumberSubmit').addClass("shadow");
			}
		});
		$('#phoneNumberSubmit').click(function(e){
			
			var reqlength = $('.phone-input').length;
			console.log(reqlength);
			var value = $('.phone-input').filter(function () {
				return this.value != '';
			});

			if (value.length>=0 && (value.length !== reqlength)) {
				$('input').each(function(){
					if($(this).val() == ''){
						$(this).css("border-color","#ea5655");
					return false;
					}
				});
				$('#phoneNumberBlock .help-block').html("Please fill the fields");
				
			} else {
				$('#phoneNumberBlock').addClass('d-none');
				$('#usernameBlock').removeClass('d-none');
			}
		});
	},
	handleNameSubmission: function(){
		var self=this;
		$('.username').on('keyup',function(){
			if($('.username').val() == ''){
				$('#usernameSubmit').removeClass("shadow");
				$('#usernameSubmit').removeClass("enable-button");
				$('#usernameSubmit').addClass("disable-button");
			}else{
				$('#usernameSubmit').removeClass("disable-button");
				$('#usernameSubmit').addClass("enable-button");
				$('#usernameSubmit').addClass("shadow");
			}
		});
		
		$('#usernameSubmit').click(function(e){
			if($('.username').val() == ''){
				$('#usernameBlock .help-block').html("Please fill the fields");
			}else{
				$('#usernameBlock .help-block').html('');
				$('#phoneNumberBlock').addClass('d-none');
				$('#usernameBlock').addClass('d-none');
				$('#otpBlock').removeClass('d-none');
				self.fadeInOtp();
			}
		})
	},
	handleOtpSubmission: function(){
		$('.otp-input').on('keyup',function(e){
			console.log("change color");
			var reqlength = $('.otp-input').length;
			console.log(reqlength);
			var value = $('.otp-input').filter(function () {
				return this.value != '';
			});

			if (value.length>=0 && (value.length !== reqlength)) {
				$('#otpSubmit').removeClass("shadow");
				$('#otpSubmit').removeClass("enable-button");
				$('#otpSubmit').addClass("disable-button");
			} else {
				console.log("green");
				$('#otpBlock .help-block').html('');
				$('#otpSubmit').removeClass("disable-button");
				$('#otpSubmit').addClass("enable-button");
				$('#otpSubmit').addClass("shadow");
			}
		});
		$('#otpSubmit').click(function(e){
			var reqlength = $('.otp-input').length;
			console.log(reqlength);
			var value = $('.otp-input').filter(function () {
				return this.value != '';
			});

			if (value.length>=0 && (value.length !== reqlength)) {
				$('input').each(function(){
					if($(this).val() == ''){
						$(this).css("border-color","#ea5655");
					return false;
					}
				});
				$('#otpBlock .help-block').html("Please fill the fields");
			} else {
				$('.help-block').html('');
				
			}
		});
	},
	fadeInOtp: function(){
		
		$('#resendOtp').hide().delay(2000).fadeIn(5000);
		
	}
	
}

jQuery(document).ready(function () {
    var registration_view = new SZ.RegistrationView();
})
