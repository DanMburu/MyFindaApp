
$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!
   // $.support.cors = true;
   // $.mobile.allowCrossDomainPages = true; 
});


$(document).on("pageshow", "#landing", function () { // When entering pagetwo
 showLoader();
 var url = $('#RootUrl').val() + 'validate.html?option='+ (new Date()).getTime();
  				
  $.get(url, function(data) {
            hideLoader();
			
            if (data.trim().toLowerCase() === '1') {
				var url=$('#appUrl').val()+'?nocache='+ (new Date()).getTime();	
                window.location = url;
			  		  
            }else{
				$('#try-again').show();
				 alert("Server not responding. Please check your internet connection");
			}
        }).error(function(data) {			
			$('#try-again').show();
            alert("Error, Server not responding. Please check your internet connection");
			
          
        }).always(function() {
           
        });
		  return false;
		
});
$(document).ready(function () { 

$('#try-again').on("click", function () {

 var url = $('#RootUrl').val() + 'validate.aspx?option=test-server';

  $.get(url, function(data) {
            hideLoader();
            if (data.trim().toLowerCase() === '1') {
				var url=$('#appUrl').val()+'?nocache='+ (new Date()).getTime();
                window.location = url;			      	
            }else{
				 $('#try-again').show();
				 alert("Server not responding. Please check your internet connection");								 
			}
        }).error(function(data) {
			$('#try-again').show();
            alert("Server not responding. Please check your internet connection");		
            return false;
        }).always(function() {
           
        });
	return false;	
		
});
});

function showLoader(){
 $.mobile.loading( "show", {
		text: 'loading',
		textVisible: false,
		theme: 'a',
		textonly: false,
		html: ''
	 });
}
function hideLoader(){
	 $.mobile.loading( "hide" );
}