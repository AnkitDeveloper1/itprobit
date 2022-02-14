$(document).ready(function () {});
var base = "https://digitalmenti.uk/sendmail/public/images/loader.gif";
var apiurl = "https://digitalmenti.uk/sendmail/public/index.php/sendmail";
function onclickFunction() {
	var username = $('#username').val();
	if (username == "") {
		alert("please fill the name");
		return false;
	}
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var useremail = $('#useremail').val();
  if (useremail == "") {
		alert("please fill the email");
		return false;
	}
  if (!testEmail.test(useremail)){
    	alert("please fill the valid email address");
    return false;
  }


	var userphone = $('#userphone').val();
	if (userphone == "") {
		alert("please fill the phone number");
		return false;
	}
	var userbudget = $('#userbudget').val();
	if (userbudget == "") {
		alert("please fill the required budget");
		return false;
	}
	var userdescription = $('#userdescription').val();
	if (userdescription == "") {
		alert("please fill the description");
		return false;
	}
	$.ajax({
		url: apiurl,
		type: "post",
		dataType: 'json',
		data: {
			email: useremail,
			name: username,
			phone: userphone,
			budget: userbudget,
			description: userdescription,
      companyname: "",
      country: "",
		},
		beforeSend: function () {
			$.blockUI({
				message: '<center><img src=' + base + '></center>',
				css: {
					width: '0%',
					border: '0px solid #FFFFFF',
					cursor: 'wait',
					backgroundColor: '#FFFFFF'
				},
				overlayCSS: {
					backgroundColor: '#FFFFFF',
					opacity: 0.0,
					cursor: 'wait'
				}
			});
			$('#subscribeModal').modal('hide');
		},
		complete: function () {
			$.unblockUI();
		},
		success: function (data) {
      if (data.status == "true") {
				alert("you are successfully connected with us.");
				//location.reload();
			} else {
				alert("Something Went Wrong. please try filling contact us form");
			}
		}
	});
}

function onclickContactFunction() {
	var contactname = $('#contactname').val();

	if (contactname == "") {
		alert("please fill the contact person name");
		return false;
	}
	var contactcompanyname = $('#contactcompanyname').val();
	if (contactcompanyname == "") {
		alert("please fill the  contact  company name");
		return false;
	}
	var contactcountry = $('#contactcountry').val();
	if (contactcountry == "") {
		alert("please select the country");
		return false;
	}

  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var contactemail = $('#contactemail').val();
  if (contactemail == "") {
    alert("please fill the email");
    return false;
  }
  if (!testEmail.test(contactemail)){
      alert("please fill the valid contact email address");
    return false;
  }



	var contactphone = $('#contactphone').val();
	if (contactphone == "") {
		alert("please fill the phone number");
		return false;
	}
	var contactbudget = $('#contactbudget').val();
	if (contactbudget == "") {
		alert("please fill the required budget");
		return false;
	}
	var contactdescription = $('#contactdescription').val();
	if (contactdescription == "") {
		alert("please fill the description");
		return false;
	}
	$.ajax({
		url: apiurl,
		type: "post",
		dataType: 'json',
		data: {
			email: contactemail,
			name: contactname,
			phone: contactphone,
			budget: contactbudget,
			description: contactdescription,
      companyname: contactcompanyname,
      country: contactcountry,
		},
		beforeSend: function () {
			$.blockUI({
				message: '<center><img src=' + base + '></center>',
				css: {
					width: '0%',
					border: '0px solid #FFFFFF',
					cursor: 'wait',
					backgroundColor: '#FFFFFF'
				},
				overlayCSS: {
					backgroundColor: '#FFFFFF',
					opacity: 0.0,
					cursor: 'wait'
				}
			});
		},
		complete: function () {
			$.unblockUI();
		},
		success: function (data) {
			if (data.status == "true") {
				alert("you are successfully connected with us.");
			} else {
				alert("Something Went Wrong. please try filling contact us form");
			}
		}
	});
}
