function getrandomid()
{
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	var charCount = 0;
	var numCount = 0;

for (var i=0; i<string_length; i++) {
    // If random bit is 0, there are less than 3 digits already saved, and there are not already 5 characters saved, generate a numeric value. 
    if((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
        var rnum = Math.floor(Math.random() * 10);
        randomstring += rnum;
        numCount += 1;
    } else {
        // If any of the above criteria fail, go ahead and generate an alpha character from the chars string
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
        charCount += 1;
    }
}
return randomstring;
}
 
var baseurl=window.location.protocol+"//"+window.location.host

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function signUPWebinar()
{ 
	var name 			= document.getElementById('name').value;
	var cat_attempt 	= document.getElementById('cat_attempt').value;
	var designation 	= document.getElementById('designation').value;
	var email 			= document.getElementById('email').value;
	var mobile 			= document.getElementById('mobile').value;
	var password 	    = document.getElementById('password').value;
	var session_id 		= '';
	var domain_id 		= '';
	var errormsg 		= [];
	
	var myElem = document.getElementById('redirecturi');
    if (myElem === null){
        var redirecturi = "";
    }else {
        var redirecturi = myElem.value;
    }
	
	if(!validateInput(name,/^[a-zA-Z ]+$/) || name == null)
	{
		errormsg.push("Please enter valid name.");
	}
	
	if(cat_attempt == null || cat_attempt == '')
	{
		errormsg.push("Please select cat attempt year");
	}
	
	if(designation == null || designation == '')
	{
		errormsg.push("Please select your designation.");
	}
	
	if(!validateInput(email,/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
	{
		errormsg.push("Please enter a valid email address.");
	}
	
	if(!validateInput(mobile,/^[789]\d{9}$/i))
	{
		errormsg.push("Please enter a valid Mobile number.");
	}

	var message = '';
		for (var i = 0, len = errormsg.length; i < len; i++) {
		message = message + errormsg[i] + '<br>';
	}

	if(message.length > 0)
	{		 
		startTimer(message);
	}
	else
	{
	   document.getElementById('mybtnn').style.display = "none";
	   document.getElementById('preloader').style.display = "block";
		var xhttp = new XMLHttpRequest();
		//---START AJAX--------------------------------------
			xhttp.onreadystatechange = function() 
			{				
				if (xhttp.readyState == 4 && xhttp.status == 200) 
				{
					document.getElementById('preloader').style.display = "none";
					var str = xhttp.responseText;
					var res = str.split("::");
					if(res[0] == "login")
					{
						// location.reload(); 
						window.location.href = "https://mba.hitbullseye.com/webinar-thankyou.php";
					}
				}
			};
			xhttp.open("POST", window.location.protocol+'//mba.hitbullseye.com/mbawebsite/checkWebinarRegistration.php', true);	
			xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
			xhttp.send('email='+email+'&mobile='+mobile+'&domain_d='+domain_id+'&session_id='+session_id+'&name='+name+'&cat_attempt='+cat_attempt+'&designation='+designation+'&password='+password+'&redirect='+redirecturi);
					
	}
}

function signUPDemoLecture()
{ 
	var name 			= document.getElementById('name').value;
	var cat_attempt 	= document.getElementById('cat_attempt').value;
	var designation 	= document.getElementById('designation').value;
	var email 			= document.getElementById('email').value;
	var mobile 			= document.getElementById('mobile').value;
	var password 	    = document.getElementById('password').value;
	var session_id 		= '';
	var domain_id 		= '';
	var errormsg 		= [];
	
	var myElem = document.getElementById('redirecturi');
    if (myElem === null){
        var redirecturi = "";
    }else {
        var redirecturi = myElem.value;
    }
	
	if(!validateInput(name,/^[a-zA-Z ]+$/) || name == null)
	{
		errormsg.push("Please enter valid name.");
	}
	
	if(cat_attempt == null || cat_attempt == '')
	{
		errormsg.push("Please select cat attempt year");
	}
	
	if(designation == null || designation == '')
	{
		errormsg.push("Please select your designation.");
	}
	
	if(!validateInput(email,/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
	{
		errormsg.push("Please enter a valid email address.");
	}
	
	if(!validateInput(mobile,/^[789]\d{9}$/i))
	{
		errormsg.push("Please enter a valid Mobile number.");
	}

	var message = '';
		for (var i = 0, len = errormsg.length; i < len; i++) {
		message = message + errormsg[i] + '<br>';
	}

	if(message.length > 0)
	{		 
		startTimer(message);
	}
	else
	{
	   document.getElementById('mybtnn').style.display = "none";
	   document.getElementById('preloader').style.display = "block";
		var xhttp = new XMLHttpRequest();
		//---START AJAX--------------------------------------
			xhttp.onreadystatechange = function() 
			{				
				if (xhttp.readyState == 4 && xhttp.status == 200) 
				{
					document.getElementById('preloader').style.display = "none";
					var str = xhttp.responseText;
					var res = str.split("::");
					if(res[0] == "login")
					{
						// location.reload(); 
						window.location.href = "https://mba.hitbullseye.com/demo-lecture-thankyou.php";
					}
				}
			};
			xhttp.open("POST", window.location.protocol+'//mba.hitbullseye.com/mbawebsite/checkDemoLecture.php', true);	
			xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
			xhttp.send('email='+email+'&mobile='+mobile+'&domain_d='+domain_id+'&session_id='+session_id+'&name='+name+'&cat_attempt='+cat_attempt+'&designation='+designation+'&password='+password+'&redirect='+redirecturi);
					
	}
}

function showthis(element)
{
	console.log(element);
	 document.getElementById(element).style.display = 'block';
}
function hidethis(element)
{
	 document.getElementById(element).style.display = 'none';
}

function operegistrationremote()
{	 
	document.getElementById('login_form').style.display = 'none';
	//document.getElementById('showonlogin').style.display = 'none';
    document.getElementById('showonlogin').setAttribute('style', 'display:none !important');
	document.getElementById('load-registration').style.display = 'block';
    // document.getElementById('formtitle').innerHTML = 'Sign Up and Start Learning';
	document.getElementById('reg_form').style.display = 'block';
	document.getElementById('showonreg').style.display = 'block';
}

function opeloginremote()
{	
	document.getElementById('reg_form').style.display = 'none';
	//document.getElementById('showonreg').style.display = 'none';
    document.getElementById('showonreg').setAttribute('style', 'display:none !important');
    document.getElementById('formtitle').innerHTML = 'Sign In and Start Learning';
	 document.getElementById('login_form').style.display = 'block';
	document.getElementById('showonlogin').style.display = 'block';
	document.getElementById('load-registration').style.display = 'block';
}

function closemultiaccount()
{
	
    hidethis('multiaccountdiv');
    hidethis('z_black');
	document.getElementById('unique-registration').style.display = "block";
}
function closeregistration()
{
	hidethis('load-registration');
	 var redirecturllogin = document.getElementById('redirecturllogin').value;
	 if( redirecturllogin != '' && redirecturllogin !== undefined)
	 {
		  window.location.href = redirecturllogin;
	 }
	 
	

}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}


function validateInput(value,expression){
	if (expression.test(value))
		testresults=true
	else{
		testresults=false
	}
	return testresults;
}

function hideMessage() {
	document.getElementById("show_error").innerHTML = ' ';
    document.getElementById('show_error_reg').innerHTML = ' ';
}

function startTimer(message) {
	document.getElementById('show_error').innerHTML = message;
    document.getElementById('show_error_reg').innerHTML = message;
	var tim = window.setTimeout("hideMessage()", 10000);  // 5000 milliseconds = 5 seconds
	return false;
}

function changedomain(session_id)
{
	var url = window.location.protocol+"//www.hitbullseye.com/registration/domainlist.php?session_id="+session_id;
	 	  
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {				
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			  document.getElementById('session_id').innerHTML = xhttp.responseText;	
		}
	};
	xhttp.open("GET", url, true);			
	xhttp.send();	
	
}
/***************Common login Script *****************************/
function loadDoc() {
	var fileurl=window.location.protocol+'//'+window.location.host+'/';
	var cusid_ele = document.getElementsByClassName('load-registration');
	if(cusid_ele.length > 0)
	{		  
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {				
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				 document.getElementById('load-registration').innerHTML = xhttp.responseText;						
			}
		};
		xhttp.open("GET", window.location.protocol+'//'+window.location.host+'/registration/login_common.php', true);			
		xhttp.send();		
	}	
}
loadDoc();
function continuecommon_multiple_old(thisid){
	document.getElementById('PaymentpageError').innerHTML='<span style="color:#ff0000;">Loading please wait.... <img src="https://mba.hitbullseye.com/cat-scholarship/images/loading.gif"><span>';
	var commonredirect = document.getElementById(thisid).getAttribute("data-commonredirect");
	document.getElementById('succes_loginbox_common').style.display = "none";
	$.ajax({
		type: "POST",
		url:window.location.protocol+'//'+window.location.host+'/registration/logincheck_commonmultiple.php',
		data: 'thisid='+thisid+'&redirect='+commonredirect,
		dataType: "json",
		success: function (response) {
			if(response.status){
				document.getElementById('PaymentpageError').innerHTML='';
				hidethis('load-registration');
				document.getElementById('succes_loginbox_common').style.display = "block";
				window.location.href = response.redirecturl;
			} else {
				$('#PaymentpageError').html('<span style="color:#ff0000;">'+response.message+'<span>');
			}
		}
	});
}
function continuecommon_multiple(thisid) {
	document.getElementById('PaymentpageError').innerHTML='<span style="color:#ff0000;">Loading Please wait.... <img src="https://mba.hitbullseye.com/cat-scholarship/images/loading.gif"><span>';
	var commonredirect = document.getElementById(thisid).getAttribute("data-commonredirect");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {				
		if (xhttp.readyState == 4 && xhttp.status == 200) {	
			var str = xhttp.responseText;
			var splitvalue = str.split("::");
			console.log(splitvalue);
			if(xhttp.responseText == "LoginError") {
				document.getElementById('PaymentpageError').innerHTML='illegal Action1';
				document.getElementById('succes_loginbox_common').style.display = "none";
				startTimer("illegal Action1");
			} else if(splitvalue[0] == "verifylogin") {
				document.getElementById('PaymentpageError').innerHTML='';
				hidethis('load-registration');
				document.getElementById('succes_loginbox_common').style.display = "block";
				
				var check = splitvalue[1].includes('/target-group/');
				var check1 = splitvalue[1].includes('/grad-scholarship/');
				var check2 = splitvalue[1].includes('/physical-classroom/');
				if(check == true || check1 == true || check2 == true){
					location.reload();
				}else{
					window.location.href = splitvalue[1];
				}
				
				
			} else {  
				document.getElementById('PaymentpageError').innerHTML='illegal Action2';
				document.getElementById('succes_loginbox_common').style.display = "none";
				startTimer("illegal Action2");
			}
		}
	};
	xhttp.open("POST", window.location.protocol+'//'+window.location.host+'/registration/logincheck_commonmultiple.php', true);	
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
	xhttp.send('thisid='+thisid+'&redirect='+commonredirect);
	return xhttp.onreadystatechange();
}

function loginnow(thisid) {
	document.getElementById('errormessagedivbox').innerHTML='<span style="color:#ff0000;">Checking please wait.... <img src="https://mba.hitbullseye.com/cat-scholarship/images/loading.gif"><span>';
	if(isNaN(thisid) === false){
		var username = thisid;
		var userpassword = document.getElementById(thisid).getAttribute("data-class");
	} else if(thisid=="loginbtn") {
		var username = document.getElementById('username').value;
		var userpassword = document.getElementById('userpassword').value;
	} else {
		var username = thisid;
		var userpassword = "socialpwd!@#$%^";
	}
	var myElem = document.getElementById('redirecturi');
	if (myElem === null) {
		var redirecturi = "";
	} else {
		var redirecturi = myElem.value;
	}
	var paylogin = '';
	if( username == '' || userpassword == '' ) { 
		startTimer("Username or Password is incorrect.");
		document.getElementById('errormessagedivbox').innerHTML='';
	} else {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {				
			if (xhttp.readyState == 4 && xhttp.status == 200) {	
				var str = xhttp.responseText;
				var res = str.split("::");
				console.log(res);
				if(xhttp.responseText == "Error") {
					document.getElementById('unique-registration').style.display = "block";
					document.getElementById('succes_loginbox_common').style.display = "none";
					document.getElementById('errormessagedivbox').innerHTML='';
					startTimer("Username or Password is incorrect.");
				} else if(xhttp.responseText == "PaymentpageError") {
					document.getElementById('unique-registration').style.display = "block";
					document.getElementById('succes_loginbox_common').style.display = "none";
					if(document.getElementById('multiaccountdiv') != null){
						document.getElementById('multiaccountdiv').style.display = "none";
					}
					document.getElementById('errormessagedivbox').innerHTML='';
					startTimer("No Access.");
				} else if (xhttp.responseText == "ExpiredAccount") {
					document.getElementById('errormessagedivbox').innerHTML='';;
					document.getElementById('succes_loginbox_common').style.display = "none";
					document.getElementById('unique-registration').style.display = "block";
					startTimer("Subscription of your old account has expired. Please sign up for new account. <a href='javascript:void(0)' onclick='operegistrationremote();'>Click here to sign up</a>");
				} else if(res[0] == "login") {
					hidethis('load-registration');
					document.getElementById('succes_loginbox_common').style.display = "block";
					// if(res[1] == 'https://mba.hitbullseye.com:443/target-group/cat-mba.php#form_newbulls'){
					// 	location.reload();
					// }else{
					// 	window.location.href = res[1];
					// }

					var check = res[1].includes('/target-group/');
					var check1 = res[1].includes('/grad-scholarship/');
					var check2 = res[1].includes('/physical-classroom/');
					if(check == true || check1 == true || check2 == true){
						location.reload();
					}else{
						window.location.href = res[1];
					}
					
				} else {  
					document.getElementById('succes_loginbox_common').style.display = "none";
					document.getElementById('unique-registration').style.display = "none";
					document.getElementById('errormessagedivbox').innerHTML='';
					document.getElementById('reglogloader').innerHTML = xhttp.responseText;
				}
			}
		};
		xhttp.open("POST", window.location.protocol+'//'+window.location.host+'/registration/logincheck_common.php', true);	
		xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
		xhttp.send('username='+username+'&userpassword='+userpassword+'&redirect='+redirecturi+'&paylogin='+paylogin);
		return xhttp.onreadystatechange();
	}
}
/***************Common login Script *****************************/


// facebook login script login
window.fbAsyncInit = function() {
   FB.init({
     appId      : '1129408303776326',
     channelURL : '', // Channel File, not required so leave empty
     status     : true, // check login status
     cookie     : true, // enable cookies to allow the server to access the session
     oauth      : true, // enable OAuth 2.0
     xfbml      : false  // parse XFBML
   });
};
function fblogin(reg)
{
    try{
        
        FB.getLoginStatus(function(r){
            //console.log(r);
            if(r.status === 'connected'){
                FB.api('/me',{fields: 'last_name,first_name,email'}, function (response) {
                        console.log(response);
                        if(reg=="G")
                        {
                        if(document.getElementById("reg_form").style.display=="block")
                       {
                            document.getElementById('name').value = response.first_name+" "+response.last_name;
                            document.getElementById('email').value = response.email;
                       }
                       else
                       {
                            loginnow(response.email);
                       }
                       }
                       else if(reg=="P")
                       {
                            document.getElementById('buy-name').value = response.first_name+" "+response.last_name;
                            document.getElementById('buy-email').value = response.email;
                       }
                    });
                }
            else
            {
                FB.login(function(response) {
    				//console.log(response);
    				if(response.authResponse) {
    					FB.api('/me',{fields: 'last_name,first_name,email'}, function (response) {
    					   if(reg=="G")
                           {
    					   if(document.getElementById("reg_form").style.display=="block")
                           {
                                document.getElementById('name').value = response.first_name+" "+response.last_name;
                                document.getElementById('email').value = response.email;
                           }
                           else
                           {
                                loginnow(response.email);
                           }
                           }
                           else if(reg=="P")
                           {
                                document.getElementById('buy-name').value = response.first_name+" "+response.last_name;
                                document.getElementById('buy-email').value = response.email;
                           }
    					   
    					});
    				} else {
    					alert("Login attempt failed!");
    				}
    			},{ scope: 'email,user_photos,publish_actions' });
            }
        });
        
    }catch (err)
	{
		alert('Sorry, Facebook is blocked on your computer.');
		return false;
	}
}
(function() {
   var e = document.createElement('script'); e.async = true;
   e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';                
   document.getElementsByTagName("body")[0].appendChild(e);
}());
//facebook end login
//gmail start login

(function() {
    var po = document.createElement('script');
    po.type = 'text/javascript'; po.async = true;
    po.src = 'https://plus.google.com/js/client:plusone.js?onload=render';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();
  function render() {
    /*gapi.signin.render('customBtn', {
      'accesstype': 'offline',
         'approvalprompt': 'auto',
         'callback': 'mycoddeSignIn',
         'clientid': '899565762721-tkutfi3psl0n6gvj30tnj7vvg80cr01o.apps.googleusercontent.com',
         //'clientid': '889772873076-pfsicgifempe3ofh07jna3o1si0i7p01.apps.googleusercontent.com',
		 //'62659825710-60oib5k3cvc5dl08m9q1licpsk29umk6.apps.googleusercontent.com',
         'cookiepolicy': 'single_host_origin',
         'height': 'tall',
         'requestvisibleactions': 'http://schemas.google.com/AddActivity',
         'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
         'theme': 'dark',
         'width': 'standard'
    });
	*/
  }
var gpclass = (function(){
var response = undefined;
return {
	mycoddeSignIn:function(response){
		// The user is signed in
		if (response["access_token"] && response.status["method"] == "PROMPT") {
			gapi.client.load('plus','v1',this.getUserInformation);			
		} else if (response['error']) {
			//alert('There was an error: ' + response['error']);
		}
	},	
	getUserInformation: function(){
		var request = gapi.client.plus.people.get( {'userId' : 'me'} );
		request.execute( function(profile) {
			console.log(response);
			var email = profile['emails'].filter(function(v) {
				return v.type === 'ACCOUNT'; // Filter out the primary email
			})[0].value;
            if(document.getElementById("reg_form").style.display=="block")
            {
                document.getElementById('name').value = profile.name.givenName+" "+profile.name.familyName;
                document.getElementById('email').value = email;
            }
            else
            {
                loginnow(email);
            }
		});
	}
}; //End of Return
})();
function mycoddeSignIn(gpSignInResponse){
	gpclass.mycoddeSignIn(gpSignInResponse);
}
(function() {
    var poreg = document.createElement('script');
    poreg.type = 'text/javascript'; poreg.async = true;
    poreg.src = 'https://plus.google.com/js/client:plusone.js?onload=renderreg';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(poreg, s);
  })();
  
  function renderreg() {
    /*gapi.signin.render('customBtnreg', {
		'accesstype': 'offline',
		'approvalprompt': 'auto',
		'callback': 'mycoddeSignInreg',
		//'clientid': '62659825710-60oib5k3cvc5dl08m9q1licpsk29umk6.apps.googleusercontent.com',
		'clientid': '899565762721-tkutfi3psl0n6gvj30tnj7vvg80cr01o.apps.googleusercontent.com',
		'cookiepolicy': 'single_host_origin',
		'height': 'tall',
		'requestvisibleactions': 'http://schemas.google.com/AddActivity',
		'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
		'theme': 'dark',
		'width': 'standard'
    });*/
  }
var gpclassreg = (function(){
var responsereg = undefined;
return {
	mycoddeSignInreg:function(mycoddeSignInreg){
		// The user is signed in
		if (mycoddeSignInreg["access_token"] && mycoddeSignInreg.status["method"] == "PROMPT") {
			gapi.client.load('plus','v1',this.getUserInformation);			
		} else if (mycoddeSignInreg['error']) {
			//alert('There was an error: ' + response['error']);
		}
	},	
	getUserInformation: function(){
		var request = gapi.client.plus.people.get( {'userId' : 'me'} );
		request.execute( function(profile) {
			var email = profile['emails'].filter(function(v) {
				return v.type === 'ACCOUNT'; // Filter out the primary email
			})[0].value;
            document.getElementById('buy-name').value = profile.name.givenName+" "+profile.name.familyName;
            document.getElementById('buy-email').value = email;
		});
	}
}; //End of Return
})();
function mycoddeSignInreg(gpSignInResponse){
	gpclassreg.mycoddeSignInreg(gpSignInResponse);
}
//gamail end login  
function getOtp(resend)
{ 
	var name 		= document.getElementById('name').value;
	var email 		= document.getElementById('email').value;
	var mobile 		= document.getElementById('mobile').value;
	var session_id 	= document.getElementById('session_id').value;
	var domain_id 	= document.getElementById('domain_id').value;
	var errormsg 	= [];
	
	if(!validateInput(name,/^[a-zA-Z ]+$/) || name == null)
	{
		errormsg.push("Please enter valid name.");
	}
	
	if(!validateInput(email,/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
	{
		errormsg.push("Please enter a valid email address.");
	}
	
	if(!validateInput(mobile,/^[6789]\d{9}$/i))
	{
		errormsg.push("Please enter a valid Mobile number.");
	}
	console.log(domain_id);
	console.log(session_id);
	
	if(domain_id == "" || session_id == "")
	{
		errormsg.push("Please select course/session.");
	}
	
	
	var message = '';
		for (var i = 0, len = errormsg.length; i < len; i++) {
		message = message + errormsg[i] + '<br>';
		}

			
	if(message.length > 0)
	{		 
		startTimer(message);
	}
	else
	{
	   document.getElementById('preloader').style.display = "block";
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {				
				if (xhttp.readyState == 4 && xhttp.status == 200) {
				    document.getElementById('preloader').style.display = "none";
					if(xhttp.responseText == 'OTP')
					{						
					 document.getElementById('firststep').style.display = "none";	
					 document.getElementById('secondstep').style.display = "block";						 
					 document.getElementById('closebutton').style.display = "none";						 
					 document.getElementById('backbutton').style.display = "block";				
                     document.getElementById('new-user').style.display = "none";			
                     document.getElementById('signin').style.display = "none";					 
					 getLocation();
					 if(resend==1)
					 {
						 startTimer("OTP sent.");
					 }
					}
					else
					{
						startTimer(xhttp.responseText);
					}
				}
			};
			xhttp.open("POST", window.location.protocol+'//www.hitbullseye.com/registration/checkexisting.php', true);	
			xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
			xhttp.send('email='+email+'&mobile='+mobile+'&domain_d='+domain_id+'&session_id='+session_id+'&name='+name);
					
	}

}

function backto()
{
	document.getElementById('secondstep').style.display = "none";	
	document.getElementById('firststep').style.display = "block";	
	document.getElementById('backbutton').style.display = "none";	
	document.getElementById('closebutton').style.display = "block";	
    document.getElementById('new-user').style.display = "block";		
    document.getElementById('signin').style.display = "block";				
}

function getOtpAgain()
{
	getOtp(1);
}

function startregister(email,mobile,regtype)
{
	document.getElementById('preloader').style.display = "block";
	if(regtype=="G")
	{
		var session_id = document.getElementById('session_id').value;
		var domain_id = document.getElementById('domain_id').value;
		var name = document.getElementById('name').value;
		var pwd = document.getElementById('enter-password').value;
		var profile = document.getElementById('profiles').value;
		var product = 0;
		var dataid = "";
		var stuid= "";
	}
	else if(regtype=="P")
	{
		var session_id 	= document.getElementById('buy-session_id').value;
		var domain_id 	= document.getElementById('buy-domain_id').value;
		var name 		= document.getElementById('buy-name').value;
		var pwd 		= document.getElementById('buy-password').value;
		var profile 	= "";
		var product 	= document.getElementById('productid').value;
		var stuid		= document.getElementById('studentidofstu').value;
		
		 var dataid = document.getElementById("onlinecoursename").getAttribute("data-id")+"::"+document.getElementById('coupon-code').value+'::'+document.getElementById("discountamount").value;
	}
	var coords = '';
	var longcoord = document.getElementById('longitude').value;
	var latcoord  = document.getElementById('latitutde').value;

	if(longcoord!=0 || latcoord!=0)
	{
		var coords = "&latitutde="+latcoord+"&longitude="+longcoord;
	}
	
	var myElem = document.getElementById('redirecturi');
	if (myElem === null)
	{
	var redirecturi = "";
	} 
	else
	{
	var redirecturi = "&redirect="+myElem.value;
	}
	
	/**************************/
	var mobileotpemailElem = document.getElementById('enter-mobileotpemail');
	if (mobileotpemailElem === null){
		var mobileotpemail = "";
	} else {
		var mobileotpemail = "&mobileotpemail="+mobileotpemailElem.value;
	}
	
	/******************/
	var signup_optinVal = document.getElementById('signup_optin');
	if (signup_optinVal === null)
	{
	var signup_optin = "";
	} 
	else
	{
	var signup_optin = "&signup_optin="+signup_optinVal.value;
	}
	/******************/
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() 
	{				
		if (xhttp.readyState == 4 && xhttp.status == 200) 
		{
			document.getElementById('preloader').style.display = "none";
			var str = xhttp.responseText;
			var res = str.split("::");

			if(xhttp.responseText == "Batch")
			{
				startTimer("Batchid is not available for the selected city. Contact administrator.");
			}
			else if (xhttp.responseText == "Exists")
			{
				startTimer("You are already registered for selected course & session with this email/mobile. <a href='http://www.hitbullseye.com/forget_passbnewapi.php'>Click here</a> to retreive password");
			}
			else if (xhttp.responseText == "Bought")
			{
				startTimer("You are already enrolled for this course. Please <a href='javascript:void(0)' onclick='opeloginremote();closepaidreg();'>Sign In</a>");
			}
			else if(xhttp.responseText == "tech")
			{
				startTimer("Not able to enroll right now. Please try again later. Or report <a href='http://www.hitbullseye.com/instruction/help.php' target='_blank'>here</a>");
			}
			else if(res[0] == "login")
			{
				console.log(res);
				if(regtype=="G")
				{  
				   // window.location.href = "http://www.hitbullseye.com/index.php?action=direct_to_accountnew&uid="+res[1]+redirecturi;
					//window.location.href = "http://www.hitbullseye.com/registration/profile.php?yourgreat="+res[1];
					// if(redirecturi != ''){
						// window.location.href = "http://www.hitbullseye.com/index.php?action=direct_to_accountnew&uid="+res[1]+redirecturi;
					// }else{
						window.location.href = "http://www.hitbullseye.com/registration/signup-thank-you.php?yourgreat="+res[1]+redirecturi;
					//}
					
				}
				else if(regtype=="P")
				{
					if(document.getElementById('disamount').value=="pugeyam")
					{
						if(stuid==0 && res[2]=='P')
						{
							startTimer("You are already registered for the Free Prep account. Please click on 'Proceed to Pay' to convert this account into paid account.");
						  document.getElementById('studentidofstu').value=res[1];  
						}
						else
						{ 
							window.location.href = window.location.protocol+"//www.hitbullseye.com/payu/successfulltest.php?dis=cHVnZXlhbQ==&up="+res[1];
						}    
					}
					else 
					{
						if(stuid==0 && res[2]=='P')
						{
							startTimer("You are already registered for the Free Prep account. Please click on 'Proceed to Pay' to convert this account into paid account.");
						  document.getElementById('studentidofstu').value=res[1];  
						}
						else
						{
							document.getElementById('studentidofstu').value			= res[1];  
							document.getElementById('paymentmodeid').style.display 	= 'block';
							document.getElementById('paymentformid').style.display 	= 'none';
							document.getElementById('formtitle1').innerHTML 		= 'Select Payment Mode';  
						  /*  if(paymentgateway=="paytm"){
							window.location.href = "/registration/payuform.php?uid="+res[1]+"&dataid="+dataid;
							}
							else
							{
								window.location.href = "/registration/payuformpayu.php?uid="+res[1]+"&dataid="+dataid;
							} */
					   }
					}   
				}
			} 
			else
			{
				startTimer("Not able to enroll right now. Please try again later. Or report <a href='http://www.hitbullseye.com/instruction/help.php' target='_blank'>here</a>");
			}
		}
	};
	xhttp.open("POST", window.location.protocol+'//www.hitbullseye.com/registration/registeruser.php', true);	
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
	xhttp.send('email='+email+'&mobile='+mobile+'&domain_d='+domain_id+'&session_id='+session_id+'&name='+name+'&password='+pwd+'&profile='+profile+'&product='+product+'&mobileotpemail='+mobileotpemail+'&dataid='+dataid+'&stuid='+stuid+coords+signup_optin);
}

function verifyotp(OTP,email,mobile)
{
    document.getElementById('preloader').style.display = "block";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {				
		if (xhttp.readyState == 4 && xhttp.status == 200) {	
		  document.getElementById('preloader').style.display = "none";
			if(xhttp.responseText=='RIGHTE')
			{
				document.getElementById('enter-mobileotpemail').value='EMAILYES';			
				startregister(email,mobile,"G");
			} else if(xhttp.responseText=='RIGHTM')
			{
				document.getElementById('enter-mobileotpemail').value='MOBYES';			
				startregister(email,mobile,"G");
			} else if(xhttp.responseText=='RIGHT') 
			{
				document.getElementById('enter-mobileotpemail').value='';			
				startregister(email,mobile,"G");
			} 
			else
			{
				startTimer("Entered OTP is incorrect. Please check email/sms again to verify the OTAP.");
			}			
		}
	};  
	xhttp.open("POST", window.location.protocol+'//www.hitbullseye.com/registration/verifyotp.php', true);	
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
	xhttp.send('email='+email+'&mobile='+mobile+'&otp='+OTP);
	return xhttp.onreadystatechange();	
}

function registernow()
{
	var OTP = document.getElementById('enter-otp').value;
	var password = document.getElementById('enter-password').value;
	var confirm_password = document.getElementById('re-enter-password').value;
	var profile = document.getElementById('profiles').value;
	var errormsg = [];
	
	if(password.length < 6)
	{
		errormsg.push("Please enter atleast 6 characters for password.");
	}	
	if( password != confirm_password)
	{
		errormsg.push("Password and Confirm password does not match.");
	}
	
	if(profile.length == 0)
	{
		errormsg.push("Please select Profile.");
	}
	
	var message = '';
		for (var i = 0, len = errormsg.length; i < len; i++) {
			message = message + errormsg[i] + '<br>';
		}
		
	
	
	if(message.length > 0)
	{		 
		startTimer(message);
	}
	else
	{
		var email = document.getElementById('email').value;
		var mobile = document.getElementById('mobile').value;
		var votp = verifyotp(OTP,email,mobile);	
	}
	
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
		document.getElementById('longitude').value = 0;	
		document.getElementById('latitutde').value = 0;
    }
}

function showPosition(position) {
	document.getElementById('longitude').value = position.coords.longitude;	
	document.getElementById('latitutde').value = position.coords.latitude;	
}
function showdiv(){
    document.getElementById('coupon').style.display = "block";
}
//paid registration start
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=	.hitbullseye.com;path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function couponcodecheck()
{
    var couponcode = document.getElementById('coupon-code');
    var actualamount = document.getElementById("amountneedtopay").value;
    var discountamount = document.getElementById('discountamount');
    var productid = document.getElementById('productid').value;
    var email = document.getElementById('buy-email').value;
	var mobile = document.getElementById('buy-mobile').value;
    
    if(actualamount > discountamount.value && couponcode.value.length >= 6 && couponcode.value.length <=8)
    {
		 
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var str = xhttp.responseText;
                var res = str.split("--");
                //console.log(xhttp.responseText+" "+actualamount);
                if(parseInt(res[0]) >0 && parseInt(res[0])<=actualamount)
                {
                    setCookie("updatecoupon", res[1], 1);
                    var discount_amount_new=parseInt(actualamount)-parseInt(res[0]);
                    //alert(getCookie("updatecoupon"));
                    discountamount.value = res[0];
                    //document.getElementById('onlinecourseprice').innerHTML=discount_amount_new;
                    document.getElementById('processbtn').value="Proceed to Pay Rs. "+discount_amount_new;
                    document.getElementById("onlinecoursename").setAttribute("data-id",discount_amount_new );
                    if(discount_amount_new==0)
                    {
                        document.getElementById('disamount').value = "pugeyam";
                    }
					startTimer("Coupon Applied!!!");
                }
				else
				{
				var discount_amount_new=parseInt(actualamount);
				discountamount.value = res[0];
				//document.getElementById('onlinecourseprice').innerHTML=discount_amount_new;
				document.getElementById('processbtn').value="Proceed to Pay Rs. "+discount_amount_new;
				document.getElementById("onlinecoursename").setAttribute("data-id",discount_amount_new );                    
				document.getElementById('disamount').value = "0";
                startTimer("Invalid Coupon!!!");
				}
            }
        };
        xhttp.open("POST", window.location.protocol+'//www.hitbullseye.com/couponcodenew.php', true);	
    	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
    	xhttp.send('code='+couponcode.value+'&actualprice='+actualamount+'&productid='+productid+'&email='+email+'&mobile='+mobile);
    }
    else
    {
        startTimer("Invalid coupon !!!");
    }
}
function paymentproceed()
{
    var name 		= document.getElementById('buy-name').value;
	var email 		= document.getElementById('buy-email').value;
	var mobile 		= document.getElementById('buy-mobile').value;
    var password 	= document.getElementById('buy-password').value;
    console.log(name);
    var errormsg = [];
    if(!validateInput(name,/^[a-zA-Z ]+$/) || name == null)
	{
		errormsg.push("Please enter valid name.");
	}
	
	if(!validateInput(email,/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
	{
		errormsg.push("Please enter a valid email address.");
	}
	
	if(!validateInput(mobile,/^[6789]\d{9}$/i))
	{
		errormsg.push("Please enter a valid Mobile number.");
	}
    if(password.length < 6)
	{
		errormsg.push("Please enter atleast 6 characters for password.");
	}	
    var message = '';
		for (var i = 0, len = errormsg.length; i < len; i++) {
			message = message + errormsg[i] + '<br>';
		}
    if(message.length > 0)
	{		 
		startTimer(message);
	}
	else
	{
		startregister(email,mobile,"P")
	}
}
//paid registration start

function loadpaidreg(thisid)
{
    var pid=thisid.getAttribute("data-pid");
    var book=thisid.getAttribute("data-book");
    var course=thisid.getAttribute("data-course");
    if(book != ""){
    var bookcheck=document.getElementById(book);
    if(bookcheck.checked==true)
    {
        var bookid=bookcheck.value;
    }
    else
    {
        var bookid="";
    }
    }
    else
    {
        var bookid="";
    }
    var fileurl=window.location.protocol+'//www.hitbullseye.com/';
    var cusid_ele = document.getElementsByClassName('paid-registration');
    if(cusid_ele.length > 0)
	{		  
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {				
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				 document.getElementById('paid-registration').innerHTML = xhttp.responseText;						
				document.getElementById('paid-registration').style.display = 'block';
			}
		};
		xhttp.open("POST", window.location.protocol+'//www.hitbullseye.com/registration/paidreg.php', true);				
    	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
    	xhttp.send('productid='+pid+'&book='+bookid+'&course='+course);		
	}
}
function purchasecourseinner()
{
    var stuid = document.getElementById('studentidofstu').value;
    var dataid = document.getElementById("onlinecoursename").getAttribute("data-id")+"::"+document.getElementById('coupon-code').value+'::'+document.getElementById("discountamount").value;
    if(document.getElementById('disamount').value=="pugeyam")
    {
        window.location.href = window.location.protocol+"//www.hitbullseye.com/payu/successfulltest.php?dis=cHVnZXlhbQ==&up="+stuid;
    }
    else
    {
        document.getElementById('paymentmodeid').style.display = 'block';
        document.getElementById('paymentformid').style.display = 'none';
        document.getElementById('formtitle').innerHTML = 'Select Payment Mode';   
    }
    
}
function proceedtopay(thisid)
{
    var stuid = document.getElementById('studentidofstu').value;
    var dataid = document.getElementById("onlinecoursename").getAttribute("data-id")+"::"+document.getElementById('coupon-code').value+'::'+document.getElementById("discountamount").value;
    var paymentgateway = thisid.getAttribute("data-mode");
        if(paymentgateway=="paytm")
		{
            window.location.href = window.location.protocol+"//www.hitbullseye.com/registration/payuform.php?uid="+stuid+"&dataid="+dataid;
        }
        else
        {
            window.location.href = window.location.protocol+"//www.hitbullseye.com/registration/payuformpayu.php?uid="+stuid+"&dataid="+dataid;
        }
}
function closepaidreg()
{
    document.getElementById('paid-registration').style.display = 'none';
}
//enter submit
function checkSubmit(e) {
   if(e && e.keyCode == 13) {
      loginnow('loginbtn');
   }
}
//enter end
function purchaseforpage()
{
        document.getElementById('paymentmodeid').style.display = 'block';
        document.getElementById('paymentformid').style.display = 'none';
        document.getElementById('formtitle').innerHTML = 'Select Payment Mode';   
    
}
function proceedtopayforpage(thisid)
{
    var stuid = document.getElementById('studentidofstu').value;
    var dataid = document.getElementById("onlinecoursename").getAttribute("data-id")+"::"+document.getElementById('coupon-code').value+'::'+document.getElementById("discountamount").value+'::'+document.getElementById("pageid").value;
    var paymentgateway = thisid.getAttribute("data-mode");
        if(paymentgateway=="paytm"){
            window.location.href = window.location.protocol+"//www.hitbullseye.com/registration/pagepaytm.php?uid="+stuid+"&dataid="+dataid;
        }
        else
        {
            window.location.href = window.location.protocol+"//www.hitbullseye.com/registration/pagepayu.php?uid="+stuid+"&dataid="+dataid;
        }
}

jQuery(document).ready(function(){
	if(jQuery('#common-header-widget').length > 0 ) {
		jQuery.ajax({
			url:window.location.protocol+'//'+window.location.host+'/registration/load-header-ajax-widgets.php',
			dataType: 'html',
			//contentType: "application/json",
			data: {load_ajax:true},
			beforeSend: function(){
				jQuery('#common-header-widget').html('<img src="'+window.location.protocol+'//'+window.location.host+'/registration/header-widget.gif" />');
			},
			success: function(response) {
				jQuery('#common-header-widget').html(response);
			}
		});
	}
	if(jQuery('#livelectures_body').length > 0 ) {
		jQuery('#livelectures_body').on('click','.copyToClipboard_livelacture_class', function(){
			var lacture_id = jQuery(this).attr('id');
			copyToClipboard_livelactures('#lectureurl_link_'+lacture_id);
			
		});
	}
	function copyToClipboard_livelactures(element) {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($(element).text()).select();
		document.execCommand("copy");
		$temp.remove();
		alert('Link Copied');
	}
	
	/***********Login with OTP Start****************/
	
	/***********Login with OTP End****************/
	
});

/***********Login with OTP Start****************/
function signinwithOTP_loginnow_sendOTP() {
	var username = document.getElementById('username').value;
	document.getElementById('username').placeholder='Valid Email/Mobile number';
	jQuery(".signinwithOTP_back").show();
	jQuery(".signinwithOTP_common").hide();
	jQuery(".signinwithOTP_loginnoworg").hide();
	jQuery(".signinwithOTP_password").hide();
	if( username == '') { 
		startTimer("Please enter valid email/mobile number.");
		document.getElementById('errormessagedivbox').innerHTML='';
	} else {
		jQuery.ajax({
			url:window.location.protocol+'//'+window.location.host+'/registration/signinwithOTP_send.php',
			dataType: 'json', 
			method:'POST',
			data: {load_ajax:true,username:username,version:new Date()},
			beforeSend: function(){
				document.getElementById('errormessagedivbox').innerHTML='';
				jQuery('.errormessagedivbox').html('<span style="color:#ff0000;"><img src="https://mba.hitbullseye.com/cat-scholarship/images/loading.gif"><span>');
			},
			success: function(response) {
				if(response.status) {
					jQuery(".signinwithOTP_loginnow_sendOTP").hide();
					jQuery(".signinwithOTP_back").show();
					jQuery(".signinwithOTP_anchor").hide();
					jQuery(".signinwithOTP_div").show();
					jQuery(".signinwithOTP_loginnow").show();
				}
				jQuery('.errormessagedivbox').html(response.message);
			}
		});
	}
}
function signinwithOTP_anchor() { 
	username = document.getElementById('username').value = '';
	document.getElementById('username').placeholder='Enter valid Email/Mobile number';
	jQuery(".signinwithOTP_back").hide();
	jQuery(".signinwithOTP_common").hide();
	jQuery(".signinwithOTP_loginnoworg").hide();
	jQuery(".signinwithOTP_anchor").hide();
	jQuery(".signinwithOTP_password").hide();
	jQuery(".signinwithOTP_loginnow_sendOTP").show();
	jQuery(".signinwithOTP_back").show();
}
function signinwithOTP_back() {
	jQuery(".show_error").html('');
	jQuery(".show_error_reg").html('');
	jQuery(".errormessagedivbox").html('');
	jQuery(".signinwithOTP_back").hide();
	jQuery(".signinwithOTP_anchor").show();
	jQuery(".signinwithOTP_password").show();
	jQuery(".signinwithOTP_div").hide();
	jQuery(".signinwithOTP_common").show();
	jQuery(".signinwithOTP_loginnow_sendOTP").hide();
	jQuery(".signinwithOTP_loginnow").hide();
	jQuery(".signinwithOTP_loginnoworg").show();
}
function signinwithOTP_loginnow(thisid) {
	document.getElementById('errormessagedivbox').innerHTML='<span style="color:#ff0000;">Checking please wait.... <img src="https://mba.hitbullseye.com/cat-scholarship/images/loading.gif"><span>';
	var username = document.getElementById('username').value;
	var signinwithOTP = document.getElementById('signinwithOTP_text').value;
	var myElem = document.getElementById('redirecturi');
	if (myElem === null) {
		var redirecturi = "";
	} else {
		var redirecturi = myElem.value;
	}
	if( username == '' || signinwithOTP == '') { 
		startTimer("Username or OTP is incorrect.");
		document.getElementById('errormessagedivbox').innerHTML='';
	} else {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {				
			if (xhttp.readyState == 4 && xhttp.status == 200) {	
				var str = xhttp.responseText;
				var res = str.split("::");
				console.log(res);
				if(xhttp.responseText == "ErrorOTP") {
					document.getElementById('unique-registration').style.display = "block";
					document.getElementById('succes_loginbox_common').style.display = "none";
					document.getElementById('errormessagedivbox').innerHTML='';
					startTimer("Invalid/expired OTP.");
				} else if(xhttp.responseText == "Error") {
					document.getElementById('unique-registration').style.display = "block";
					document.getElementById('succes_loginbox_common').style.display = "none";
					document.getElementById('errormessagedivbox').innerHTML='';
					startTimer("Username or Password is incorrect.");
				} else if(xhttp.responseText == "PaymentpageError") {
					document.getElementById('unique-registration').style.display = "block";
					document.getElementById('succes_loginbox_common').style.display = "none";
					if(document.getElementById('multiaccountdiv') != null){
						document.getElementById('multiaccountdiv').style.display = "none";
					}
					document.getElementById('errormessagedivbox').innerHTML='';
					startTimer("No Access.");
				} else if (xhttp.responseText == "ExpiredAccount") {
					document.getElementById('errormessagedivbox').innerHTML='';;
					document.getElementById('succes_loginbox_common').style.display = "none";
					document.getElementById('unique-registration').style.display = "block";
					startTimer("Subscription of your old account has expired. Please sign up for new account. <a href='javascript:void(0)' onclick='operegistrationremote();'>Click here to sign up</a>");
				} else if(res[0] == "login") {
					hidethis('load-registration');
					document.getElementById('succes_loginbox_common').style.display = "block";
					var check = res[1].includes('/target-group/');
					var check1 = res[1].includes('/grad-scholarship/');
					var check2 = res[1].includes('/physical-classroom/');
					if(check == true || check1 == true || check2 == true){
						location.reload();
					}else{
						window.location.href = res[1];
					}
					
				} else {  
					document.getElementById('succes_loginbox_common').style.display = "none";
					document.getElementById('unique-registration').style.display = "none";
					document.getElementById('errormessagedivbox').innerHTML='';
					document.getElementById('reglogloader').innerHTML = xhttp.responseText;
				}
			}
		};
		xhttp.open("POST", window.location.protocol+'//'+window.location.host+'/registration/signinwithOTP_logincheck.php', true);	
		xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');				
		xhttp.send('username='+username+'&signinwithOTP='+signinwithOTP+'&redirect='+redirecturi);
		return xhttp.onreadystatechange();
	}
}
/***********Login with OTP End****************/

/***********Login with OTP End****************/
function signinwithOTP_loginnow_sendOTP() {
	var username = document.getElementById('username').value;
	document.getElementById('username').placeholder='Valid Email/Mobile number';
	jQuery(".signinwithOTP_back").show();
	jQuery(".signinwithOTP_common").hide();
	jQuery(".signinwithOTP_loginnoworg").hide();
	jQuery(".signinwithOTP_password").hide();
	if( username == '') { 
		startTimer("Please enter valid email/mobile number.");
		document.getElementById('errormessagedivbox').innerHTML='';
	} else {
		jQuery.ajax({
			url:window.location.protocol+'//'+window.location.host+'/registration/signinwithOTP_send.php',
			dataType: 'json', 
			method:'POST',
			data: {load_ajax:true,username:username,version:new Date()},
			beforeSend: function(){
				document.getElementById('errormessagedivbox').innerHTML='';
				jQuery('.errormessagedivbox').html('<span style="color:#ff0000;"><img src="https://mba.hitbullseye.com/cat-scholarship/images/loading.gif"><span>');
			},
			success: function(response) {
				if(response.status) {
					jQuery(".signinwithOTP_loginnow_sendOTP").hide();
					jQuery(".signinwithOTP_back").show();
					jQuery(".signinwithOTP_anchor").hide();
					jQuery(".signinwithOTP_div").show();
					jQuery(".signinwithOTP_loginnow").show();
				}
				jQuery('.errormessagedivbox').html(response.message);
			}
		});
	}
}
function ValidateNotifyFormSubmit(formclass, label = '') {
	jQuery(document).off().on("submit","."+formclass,function(e) { 
		e.preventDefault();
		var ajax_save_form = jQuery(this);
		var formaction = ajax_save_form.attr('data-action');
		jQuery.ajax({
			enctype: 'multipart/form-data',
			url: window.location.protocol+'//'+window.location.host+'/commonsavenotify/'+formaction+'.php',
			data: new FormData(this),
			method:'post',
			dataType: 'json', 
			processData: false,
			contentType: false,
			cache: false,
			timeout: 600000,
			beforeSend: function() {
				ajax_save_form.find(":submit").prop('disabled',true);	
				ajax_save_form.find(":submit").html('ajay please wait...');
				document.getElementById('errormessagedivbox').innerHTML='';
				jQuery('.errormessagedivbox').html('<span style="color:#ff0000;"><img src="https://mba.hitbullseye.com/cat-scholarship/images/loading.gif"><span>');
			},
			success : function(response) {
				ajax_save_form.find(":submit").prop('disabled',false);
				ajax_save_form.find(":submit").html(label);
				if(response.status) {
					jQuery('.'+formclass).trigger("reset");
				}
				ajax_save_form.find('.errormessagedivbox').html(response.message);
			}
		});
	});
}