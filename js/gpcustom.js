
var categories = [];
var questions = [];
var choices = [];
var answers = [];
var srri = [];
var srrirange = [];
var lead = [];
var funds = [];
var blogdata = [];
var acctdata = [];
var selectedfunds = [];
var myname = "";
var firstname = "";
var lastname = "";
var email = "";
var pwd = "";
var pwd2 = "";
var currency = "EUR";
var srriid = "";
var user_id = "";
var buttontext = "";
//var responses = [];
var jsonresponse = [];
var slstyle=3;
var initinvamt=0;
var monthly=0;
var totinv=0;
var predictedval=0;
var years=0;
var invstyle="Cautious";
var firstmonthfee=0;
var breakdown=0;
var passstr="";
var numberofquestions;
var numberofanswers;
var riskrate = 0;
var fundselect;
var counter=0;
var allocperc = 0;
var allocamt = 0;
var totperc = 0;
var totamt = 0;
var risklevels = ["none", "Very Conservative", "Conservative", "Moderately Conservative", "Balanced", "Moderately Aggressive", "Aggressive", "Very Aggressive"];
	
jQuery(document).ready(function($){
//	getCurrentUserId();
//	hideall();
//	projections(20000, 6000, 6, 2017, 6, -8, 14, "graph1");
//	projections(100000, 0, 12, 2017, 8, -10, 18, "graph2");
//	projections(20000, 3600, 20, 2017, 7, -9, 16, "graph3");
//	getQuestionaire();
//	showhide("box1", "hide");
//	showhide("box2", "hide");
//	showhide("box3", "hide");

	loadFooter();

	if (document.getElementById("section2")) {		// id of div for sliders on homepage
		initHomePage();
	}
	
	if (document.getElementById("getstarted")) {		// id of div for login/register page
		getStartedPage();
	}
	
	if (document.getElementById("myplan")) {		// id of div
		setPlanValues();
	}

	if (document.getElementById("invest")) {		// id of div
		getFunds();
		counter = 0;
		document.getElementById("totperc").value = '0';
		document.getElementById("totamt").value = '0';
		document.getElementById("riskrate"+counter).value = '';
		document.getElementById("fundtype"+counter).value = '';
		document.getElementById("mininvest"+counter).value = '';
		document.getElementById("perc"+counter).value = '';
		document.getElementById("indamt"+counter).value = '';

		$("#addrow").on("click", function () {
			var newRow = $("<tr>");
			var cols = "";
			counter++;
			cols += '<div style="height: 5px;"/>';
			cols += '<div><input id="fundid'+counter+'" name="fundid'+counter+'" type="hidden" value=""/></div>';
			cols += '<div class="col-xs-12 col-sm-3" style="padding-bottom: 5px;"><select type="text" class="form-control" data-row="'+counter+'" id="fundname'+counter+'" name="fundname'+counter+'  placeholder="select">';
			cols += fundselect + '</select></div >';
			cols += '<div class="col-xs-2 col-sm-1"><input type="text" class="form-control" id="riskrate'+counter+'" name="riskrate'+counter+'" disabled /></div >';
			cols += '<div class="col-xs-2 col-sm-1"><input type="text" class="form-control" id="fundtype'+counter+'" name="fundtype'+counter+'" disabled /></div >';
			cols += '<div class="col-xs-2 col-sm-1"><input type="text" class="form-control" id="mininvest'+counter+'" name="mininvest'+counter+'" disabled /></div >';
			cols += '<div class="col-xs-2 col-sm-1"><input type="text" class="form-control" data-row="'+counter+'" id="perc'+counter+'" name="perc'+counter+'" disabled placeholder="%"/></div >';
			cols += '<div class="col-xs-2 col-sm-1"><input type="text" class="form-control" id="indamt'+counter+'" name="indamt'+counter+'" disabled /></div >';
			cols += '<div class="col-xs-2 col-sm-1"><input id="'+counter+'" type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></div >';
			cols += '<div class="col-xs-4 col-sm-1" class="col-xs-12 col-sm-1"><a id="kiid'+counter+'" href=""  target="_blank" style="display: none"><i class="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></a></div >';
			cols += '<div class="col-xs-4 col-sm-1" class="col-xs-12 col-sm-1"><a id="fsheet'+counter+'" href="" target="_blank" style="display: none"><i class="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></a></div >';

			newRow.append(cols);
			$("table.order-list").append(newRow);
			document.getElementById("fundname"+counter).addEventListener('change', setTypeMin);
			document.getElementById("perc"+counter).addEventListener('change', calcPerc);
		});

		$("table.order-list").on("click", ".ibtnDel", function (event) {
			c = $(this)[0].attributes.id.value;
			fundid = document.getElementById("fundid"+c).value;
			for(i=0; i< selectedfunds.length; i++) {
				if(selectedfunds[i].fundid == fundid) {
					selectedfunds[i].perc = 0;
					selectedfunds[i].calcamt = 0;
//					selectedfunds.splice(i, 1);
				}
			}

			$(this).closest("tr").remove(); 
			
			allocPercAmt();
			
//			counter -= 1
		});
		
		/* event listeners */
		document.getElementById("fundname"+counter).addEventListener('change', setTypeMin);
		document.getElementById("perc"+counter).addEventListener('change', calcPerc);

		function allocPercAmt() {
			totperc = 0;
			totamt = 0;
			for(i=0; i<selectedfunds.length; i++) {
				if (typeof(selectedfunds[i])=='undefined') {
				} else {
					totperc = totperc + selectedfunds[i].perc;
					totamt = totamt + selectedfunds[i].calcamt;
				}
			}
			appendHtml("totperc", totperc.toString());
			appendHtml("totamt", totamt.toString());
			if(totperc == 100) {
				showhide("sendinvestment", "show");
			} else {
				showhide("sendinvestment", "hide");
			}
		console.log(selectedfunds);
		}

		function setTypeMin(){
//			alert(this.dataset.row);
			c=this.dataset.row;
			for(var i=0; i<funds.length; i++) {
				if(funds[i].fund_id == this.value) {
					document.getElementById("fundid"+c).value = funds[i].fund_id;
					document.getElementById("riskrate"+c).value = funds[i].fund_SRRI;
					document.getElementById("fundtype"+c).value = funds[i].fund_fundtype;
					document.getElementById("perc"+c).disabled = false;
					document.getElementById("mininvest"+c).value = '3750';
					curr = document.getElementById("invcurr").value;
					if(curr == "EUR") {
						document.getElementById("kiid"+c).href = funds[i].fund_KIIDEUR; 
						document.getElementById("fsheet"+c).href = funds[i].fund_factsheetEUR;
						if(funds[i].fund_KIIDEUR == "") {
							showhide("kiid"+c, "hide");
						} else {
							showhide("kiid"+c, "show");
						}
						if(funds[i].fund_factsheetEUR == "") {
							showhide("fsheet"+c, "hide");
						} else {
							showhide("fsheet"+c, "show");
						}
					}
					if(curr == "GBP") {
						document.getElementById("kiid"+c).href = funds[i].fund_KIIDGBP; 
						document.getElementById("fsheet"+c).href = funds[i].fund_factsheetGBP;
						if(funds[i].fund_KIIDGBP == "") {
							showhide("kiid"+c, "hide");
						} else {
							showhide("kiid"+c, "show");
						}
						if(funds[i].fund_factsheetGBP == "") {
							showhide("fsheet"+c, "hide");
						} else {
							showhide("fsheet"+c, "show");
						}
					}
					if(curr == "USD") {
						document.getElementById("kiid"+c).href = funds[i].fund_KIIDUSD; 
						document.getElementById("fsheet"+c).href = funds[i].fund_factsheetUSD;
						if(funds[i].fund_KIIDUSD == "") {
							showhide("kiid"+c, "hide");
						} else {
							showhide("kiid"+c, "show");
						}
						if(funds[i].fund_factsheetUSD == "") {
							showhide("fsheet"+c, "hide");
						} else {
							showhide("fsheet"+c, "show");
						}
					}
				}
			}
		}
		function calcPerc(){
			c=this.dataset.row;

			invamt = parseInt(document.getElementById("invamt").value);
			perc = parseInt(document.getElementById("perc"+c).value);
			
			if(invamt < 37500 || invamt=="NaN" ) {
				alert("Investment cannot be less than 37500 euros");
				document.getElementById("perc"+c).value = "";
				document.getElementById("invamt").focus(); 
				return;
			}
			if(perc > 100) {
				alert("Percentage cannot be greater than 100");
				return;
			}
			if(perc < 1) {
				alert("Percentage cannot be less than 1");
				return;
			}
			calcamt = (perc/100)*invamt;
			document.getElementById("indamt"+c).value = calcamt;
			fundid = document.getElementById("fundid"+c).value;
			for(i=0; i< selectedfunds.length; i++) {
				if(selectedfunds[i].fundid == fundid) {
					selectedfunds[i].perc = 0;
					selectedfunds[i].calcamt = 0;
//					selectedfunds.splice(i, 1);
				}
			}
			selectedfunds.push({rownum: c, fundid: fundid, perc: perc, calcamt: calcamt});
			console.log(selectedfunds.length);
			console.log(selectedfunds);

			allocPercAmt();
		}
	}

	if (document.getElementById("funds")) {		// id of div
		eqs();
		myname = $_GET('myname');
		email = $_GET('email');
	}

	if (document.getElementById("blog")) {		// id of div
		getBlogData();
	}
	
	if (document.getElementById("openacct")) {		// id of div
		myname = readCookie("myname");
		email = readCookie("email");
		document.getElementById('dispemail').innerHTML = email;
		getAcctData();
	}
	
	if (document.getElementById("questionpage")) {		// id of div
		email = readCookie("email");
		getQuestionaire();
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
	
	if (document.getElementById("contactpage")) {		// id of div

	}
 
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('navactive');
		})
		$(this).addClass('navactive');

	});
	
	
	
});
// for dynamic table
function threemorebtn(i) {
	$("#three1morebtn").enable;
	$("#three2morebtn").enable;
	$("#three3morebtn").enable;
	$("#three"+i+"morebtn").disable;
	$("#three1more").hide();
	$("#three2more").hide();
	$("#three3more").hide();
	$("#three"+i+"more").show();
	
}

function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}
function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}
// end

/*function onScroll(event){
	var scrollPosition = $(document).scrollTop();
	$('.nav li a').each(function () {
		var currentLink = $(this);
		var refElement = $(currentLink.attr("href"));
	});
};*/

function initHomePage() {
//	slider1();
//	showhide("amount", "show");
//	enabledisable("amount", "show");
//	enabledisable("box2", "disable");
//	enabledisable("box3", "disable");
	slider2();
	showhide("amount2", "show");
	slider3();
	showhide("amount3", "show");
	slider4();
	showhide("amount4", "show");
	setopacityalloff();
	email = readCookie("email");
	firstname = readCookie("firstname");
	lastname = readCookie("lastname");
	curr = readCookie("curr");
	initinvamt = readCookie("initinvamt");
	monthly = readCookie("monthly");
	years = readCookie("years");
	if(initinvamt) { 
		jQuery( "#amount2" ).val(initinvamt);
		jQuery("#slider2").slider("value" , initinvamt); 
	}
	if(monthly) { 
		jQuery( "#amount3" ).val(monthly);
		jQuery("#slider3").slider("value" , monthly); 
	}
	if(years) { 
		jQuery( "#amount4" ).val(years);
		jQuery("#slider4").slider("value" , years); 
	}
	getSrridata();
	showboxes();
}

function getStartedPage() {
	email = readCookie("email");
	document.getElementById('email').value = email;
}

function getSrridata() {
	jQuery(function($){
		var parms = {operation: "getSrri"};

		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (response) {
				srri = response;
				setstyle(slstyle);
/*				console.log(srri[1].srri_name+" "+srri[1].srri_projected_perc);
 				console.log(srri[2].srri_name+" "+srri[2].srri_projected_perc);
				console.log(srri[3].srri_name+" "+srri[3].srri_projected_perc);
				console.log(srri[4].srri_name+" "+srri[4].srri_projected_perc);
				console.log(srri[5].srri_name+" "+srri[5].srri_projected_perc);*/
          }
       });
	});
}

function getQueryVariable(variable) 
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("="); 
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function getCurrentUserId() {
	jQuery(function($){
		var parms = {operation: "getCurrentUserId"};

		$.ajax({
			type: "POST",
			url: "./php/getGPdata.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (response) {
				user_id = response.user_id;
           }
       });
	});
}

function getappform1progress() {
	jQuery(function($){
		var parms = {operation: "appform1", user_id: user_id}

		$.ajax({
			type: "POST",
			url: "./php/appform1progress.php",
			contentType: 'application/json; charset=UTF-8',
			data: JSON.stringify(parms),
			success: function (response) {
				appendHtml("appform1progress", response);				
           }
       });
	});
}
function getappform1() {
	jQuery(function($){
		var parms = {operation: "appform1", user_id: user_id}

		$.ajax({
			type: "POST",
			url: "./php/appformIB.php",
			contentType: 'application/json; charset=UTF-8',
			data: JSON.stringify(parms),
			success: function (response) {
				appendHtml("appform1", response);				
           }
       });
	});
}
function getappform1files() {
	jQuery(function($){
		var parms = {operation: "appform1files", user_id: user_id}

		$.ajax({
			type: "POST",
			url: "./php/appform1files.php",
			contentType: 'application/json; charset=UTF-8',
			data: JSON.stringify(parms),
			success: function (response) {
				appendHtml("appform1files", response);				
           }
       });
	});
}

function getAllocations(isin) {
	jQuery(function($){
		var parms = {operation: "getallocations", isin: isin}

		$.ajax({
			type: "POST",
			url: "./php/getGPdata.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (response) {
			   alert("success");
           }
       });
	});
}

function loadFooter() {
  $("#footer").load("footer.php"); 
}

function getBlogData() {
	jQuery(function($){
		var parms = {operation: "getBlogData"}
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				blogdata = data;
				buildBlog();
			}
		}); 
	});
}

function buildBlog() {
	console.log("BLOGDATA IS "+blogdata)
	str = '';
	for(var i=0; i<blogdata.length; i++) {
	str += '<div class="row"> \
				<div class="col-xs-12 col-sm-12 text-center"> \
					<h3   class="black" id="blogheading">'+blogdata[i].blog_heading+'</h3> \
					<p id="blogby">By '+blogdata[i].blog_by+'</p> \
					<p id="blogdate">'+(blogdata[i].blog_date).substr(0,10)+'</p> \
					<div class="col-xs-12 col-sm-1"></div> \
					<div class="col-xs-12 col-sm-10 text-left"> \
						<div class="col-xs-12 col-sm-2 text-left"> \
							<p id="blogimage"><img class="size-full wp-image-285 alignleft" src="./images/'+blogdata[i].blog_image+'" alt="'+blogdata[i].blog_imagetitle+'"  \
							width="160" ></p> \
							<p id="blogimagetitle"><strong>'+blogdata[i].blog_imagetitle+'</strong></p> \
						</div> \
						<div class="col-xs-12 col-sm-10 text-left about"> \
							<p id="blogtext">'+blogdata[i].blog_text+'</p> \
							<div class="col-xs-12 text-center"></div> \
						</div> \
						<div class="col-xs-12 col-sm-1"></div> \
					</div> \
				</div> \
			</div><hr>';
	}
//	console.log("STRING IS "+str)
	document.getElementById("buildblog").innerHTML = str;
}

function buildAssessment() {
//	console.log("BLOGDATA IS "+blogdata)
	str = '';
	str += '<div class="row"> \
				<div class="col-xs-1 col-sm-3"></div> \
				<div class="col-xs-12 col-sm-1"> \
					<img src="images/riskappetite.jpg" width="100px" /> \
				</div> \
				<div class="col-xs-12 col-sm-8"> \
					<h3 style="text-align: left; padding-left: 30px;"> Your risk appetite is - ('+riskappetite+') '+risklevels[riskappetite]+'</h3> \
				</div> \
			</div><br><br> \
			<div class="row"> \
				<div class="col-xs-1 col-sm-3"></div> \
				<div class="col-xs-12 col-sm-1"> \
					<img src="images/riskcapacity.jpg" width="100px" /> \
				</div> \
				<div class="col-xs-12 col-sm-8"> \
						<h3 style="text-align: left; padding-left: 30px;"> Your risk capacity is - ('+riskcapacity+') '+risklevels[riskcapacity]+'</h3> \
				</div> \
			</div> \
			</div class="col-xs-12 col-sm-12 text-center"> \
				<h3>We will proceed on the basis of your risk capacity</h3> \
			</div> \
			<div class="col-xs-12" style="padding-top: 50px; padding-bottom: 50px;"> \
				<center> \
				<a  href="funds" ><button class="btn btn-default btn-md" style="background: brown; text-align: center;"> \
				<span style="color: #ffffff;">Get started</span></button></a></center> \
				<h3>or Speak to an advisor now - call 25 820541</h3> \
			</div>';
//	console.log("STRING IS "+str)
	document.getElementById("assessment").innerHTML = str;
}

function getAcctData() {
	jQuery(function($){
		var parms = {operation: "getAcctData", email: email}
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				acctdata = data[0];
				populateOpenAcctForms();
			}
		}); 
	});
}
function populateOpenAcctForms() {
	if(!acctdata==[]) {
		document.getElementById('inputTitle3').value = acctdata["robo_title"];
		document.getElementById('inputFname3').value = acctdata["robo_first_name"];
		document.getElementById('inputMname3').value = acctdata["robo_middlename"];
		document.getElementById('inputLname3').value = acctdata["robo_last_name"];
		document.getElementById('inputGender3').value = acctdata["robo_gender"];
		document.getElementById('inputDOB3').value = acctdata["robo_dob"];
		document.getElementById('inputCtryBirth3').value = acctdata["robo_ctryofbirth"];
		document.getElementById('inputTownBirth3').value = acctdata["robo_townofbirth"];
		document.getElementById('inputNationality3').value = acctdata["robo_nationality"];
		document.getElementById('inputDualNationality3').value = acctdata["robo_dualnationality"];
		document.getElementById('inputCtryResidence3').value = acctdata["robo_ctryofresidence"];
		document.getElementById('inputCorrLanguage3').value = acctdata["robo_corrlanguage"];
	
		document.getElementById('inputresaddr1').value = acctdata["robo_resaddr1"];
		document.getElementById('inputresaddr2').value = acctdata["robo_resaddr2"];
		document.getElementById('inputresaddr3').value = acctdata["robo_resaddr3"];
		document.getElementById('inputresaddr4').value = acctdata["robo_resaddr4"];
		document.getElementById('inputresaddr5').value = acctdata["robo_resaddr5"];
		document.getElementById('inputrespostcode3').value = acctdata["robo_respostcode"];
		document.getElementById('inputcoraddr1').value = acctdata["robo_coraddr1"];
		document.getElementById('inputcoraddr2').value = acctdata["robo_coraddr2"];
		document.getElementById('inputcoraddr3').value = acctdata["robo_coraddr3"];
		document.getElementById('inputcoraddr4').value = acctdata["robo_coraddr4"];
		document.getElementById('inputcoraddr5').value = acctdata["robo_coraddr5"];
		document.getElementById('inputcorpostcode3').value = acctdata["robo_corpostcode"];
		document.getElementById('inputtelephone3').value = acctdata["robo_telephone"];
		document.getElementById('inputmobile3').value = acctdata["robo_mobile"];
		document.getElementById('inputfax3').value = acctdata["robo_fax"];
		document.getElementById('inputidtype3').value = acctdata["robo_idtype"];
		document.getElementById('inputidno3').value = acctdata["robo_idno"];
		document.getElementById('inputctryissue3').value = acctdata["robo_ctryissue"];
		document.getElementById('inputexpirydate3').value = acctdata["robo_expirydate"];
		
		document.getElementById('inputempaddr1').value = acctdata["robo_empaddr1"];
		document.getElementById('inputempaddr2').value = acctdata["robo_empaddr2"];
		document.getElementById('inputempaddr3').value = acctdata["robo_empaddr3"];
		document.getElementById('inputempaddr4').value = acctdata["robo_empaddr4"];
		document.getElementById('inputempaddr5').value = acctdata["robo_empaddr5"];
		document.getElementById('inputemppostcode3').value = acctdata["robo_emppostcode"];
		document.getElementById('inputempstatus3').value = acctdata["robo_empstatus"];
		document.getElementById('inputoccupation3').value = acctdata["robo_occupation"];
		document.getElementById('inputemployer3').value = acctdata["robo_employer"];
		document.getElementById('inputempctry3').value = acctdata["robo_empctry"];
		document.getElementById('inputsalarycurr3').value = acctdata["robo_salarycurr"];
		document.getElementById('inputsalary3').value = acctdata["robo_salary"];
		document.getElementById('inputbonuscurr3').value = acctdata["robo_bonuscurr"];
		document.getElementById('inputbonus3').value = acctdata["robo_bonus"];

		document.getElementById('inputtaxctry3').value = acctdata["robo_taxctry"];
		document.getElementById('inputtaxref3').value = acctdata["robo_taxref"];
		
/*  this to display of Review screen  */		
		document.getElementById("Title3").innerHTML = acctdata["robo_title"];
		document.getElementById('Fname3').innerHTML = acctdata["robo_first_name"];
		document.getElementById('Mname3').innerHTML = acctdata["robo_middlename"];
		document.getElementById('Lname3').innerHTML = acctdata["robo_last_name"];
		document.getElementById('Gender3').innerHTML = acctdata["robo_gender"];
		document.getElementById('DOB3').innerHTML = acctdata["robo_dob"];
		document.getElementById('CtryBirth3').innerHTML = acctdata["robo_ctryofbirth"];
		document.getElementById('TownBirth3').innerHTML = acctdata["robo_townofbirth"];
		document.getElementById('Nationality3').innerHTML = acctdata["robo_nationality"];
		document.getElementById('DualNationality3').innerHTML = acctdata["robo_dualnationality"];
		document.getElementById('CtryResidence3').innerHTML = acctdata["robo_ctryofresidence"];
		document.getElementById('CorrLanguage3').innerHTML = acctdata["robo_corrlanguage"];

		document.getElementById('resaddr').innerHTML = acctdata["robo_resaddr1"]+"</br>"+acctdata["robo_resaddr2"]+"</br>"+acctdata["robo_resaddr3"]+"</br>"+acctdata["robo_resaddr4"]+"</br>"+acctdata["robo_resaddr5"]+"</br>"+acctdata["robo_respostcode"];
		document.getElementById('coraddr').innerHTML = acctdata["robo_coraddr1"]+"</br>"+acctdata["robo_coraddr2"]+"</br>"+acctdata["robo_coraddr3"]+"</br>"+acctdata["robo_coraddr4"]+"</br>"+acctdata["robo_coraddr5"]+"</br>"+acctdata["robo_corpostcode"];
		
		document.getElementById('telephone3').innerHTML = acctdata["robo_telephone"];
		document.getElementById('mobile3').innerHTML = acctdata["robo_mobile"];
		document.getElementById('fax3').innerHTML = acctdata["robo_fax"];
		document.getElementById('idtype3').innerHTML = acctdata["robo_idtype"];
		document.getElementById('idno3').innerHTML = acctdata["robo_idno"];
		document.getElementById('ctryissue3').innerHTML = acctdata["robo_ctryissue"];
		document.getElementById('expirydate3').innerHTML = acctdata["robo_expirydate"];

		document.getElementById('empaddr').innerHTML = acctdata["robo_empaddr1"]+"</br>"+acctdata["robo_empaddr2"]+"</br>"+acctdata["robo_empaddr3"]+"</br>"+acctdata["robo_empaddr4"]+"</br>"+acctdata["robo_empaddr5"]+"</br>"+acctdata["robo_emppostcode"];

		
		document.getElementById('empstatus3').innerHTML = acctdata["robo_empstatus"];
		document.getElementById('occupation3').innerHTML = acctdata["robo_occupation"];
		document.getElementById('employer3').innerHTML = acctdata["robo_employer"];
		document.getElementById('empctry3').innerHTML = acctdata["robo_empctry"];
		document.getElementById('salarycurr3').innerHTML = acctdata["robo_salarycurr"];
		document.getElementById('salary3').innerHTML = acctdata["robo_salary"];
		document.getElementById('bonuscurr3').innerHTML = acctdata["robo_bonuscurr"];
		document.getElementById('bonus3').innerHTML = acctdata["robo_bonus"];

		document.getElementById('taxctry3').innerHTML = acctdata["robo_taxctry"];
		document.getElementById('taxref3').innerHTML = acctdata["robo_taxref"];

}
		if(acctdata["lead_stage"] == "Questionaire completed") {
			formno = "1";
			$('#oa1').removeClass('frmprogress');
			$('#oa1').addClass('frmprogresscurrent');
			$('#oa2 :input').attr('disabled', true);
			$('#oa3 :input').attr('disabled', true);
			$('#oa4 :input').attr('disabled', true);
			$('#oa5 :input').attr('disabled', true);
			$('#oa6 :input').attr('disabled', true);
		}
		
		if(acctdata["lead_stage"] == "Acct1") {
			formno = "2";
			$('#oa1').removeClass('frmprogresscurrent');
			$('#oa1').addClass('frmprogresscomplete');
			$('#oa2').removeClass('frmprogress');
			$('#oa2').addClass('frmprogresscurrent');
			$('#oa2 :input').removeAttr('disabled');
		}
		if(acctdata["lead_stage"] == "Acct2") {
			formno = "3";
			$('#oa1').removeClass('frmprogresscurrent');
			$('#oa1').removeClass('frmprogress');
			$('#oa1').addClass('frmprogresscomplete');
			$('#oa2').removeClass('frmprogresscurrent');
			$('#oa2').addClass('frmprogresscomplete');
			$('#oa3').removeClass('frmprogress');
			$('#oa3').addClass('frmprogresscurrent');
			$('#oa3 :input').removeAttr('disabled');
		}
		if(acctdata["lead_stage"] == "Acct3") {
			formno = "4";
			$('#oa1').removeClass('frmprogresscurrent');
			$('#oa1').removeClass('frmprogress');
			$('#oa1').addClass('frmprogresscomplete');
			$('#oa2').removeClass('frmprogresscurrent');
			$('#oa2').removeClass('frmprogress');
			$('#oa2').addClass('frmprogresscomplete');
			$('#oa3').removeClass('frmprogresscurrent');
			$('#oa3').addClass('frmprogresscomplete');
			$('#oa4').removeClass('frmprogress');
			$('#oa4').addClass('frmprogresscurrent');
			$('#oa4 :input').removeAttr('disabled');
		}
		if(acctdata["lead_stage"] == "Acct4") {
			formno = "5";
			$('#oa1').removeClass('frmprogresscurrent');
			$('#oa1').removeClass('frmprogress');
			$('#oa1').addClass('frmprogresscomplete');
			$('#oa2').removeClass('frmprogresscurrent');
			$('#oa2').removeClass('frmprogress');
			$('#oa2').addClass('frmprogresscomplete');
			$('#oa3').removeClass('frmprogresscurrent');
			$('#oa3').removeClass('frmprogress');
			$('#oa3').addClass('frmprogresscomplete');
			$('#oa4').removeClass('frmprogresscurrent');
			$('#oa4').removeClass('frmprogress');
			$('#oa4').addClass('frmprogresscomplete');
			$('#oa5').removeClass('frmprogress');
			$('#oa5').addClass('frmprogresscurrent');
			$('#oa5 :input').removeAttr('disabled');
			$('#oa6 :input').removeAttr('disabled');
		}
		if(acctdata["lead_stage"] == "Application completed" || acctdata["lead_stage"] == "Application submitted") {
			formno = "6";
			$('#oa1').removeClass('frmprogresscurrent');
			$('#oa1').removeClass('frmprogress');
			$('#oa1').addClass('frmprogresscomplete');
			$('#oa2').removeClass('frmprogresscurrent');
			$('#oa2').removeClass('frmprogress');
			$('#oa2').addClass('frmprogresscomplete');
			$('#oa3').removeClass('frmprogresscurrent');
			$('#oa3').removeClass('frmprogress');
			$('#oa3').addClass('frmprogresscomplete');
			$('#oa4').removeClass('frmprogresscurrent');
			$('#oa4').removeClass('frmprogress');
			$('#oa4').addClass('frmprogresscomplete');
			$('#oa5').removeClass('frmprogresscurrent');
			$('#oa5').removeClass('frmprogress');
			$('#oa5').addClass('frmprogresscomplete');
			$('#oa6').addClass('frmprogresscurrent');
			$('#oa6 :input').removeAttr('disabled');
		}
		
		showForm(formno);
}

function getQuestionaire() {
	jQuery(function($){
		var parms = {operation: "getQuestionaire", email: email}
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				categories = data["categories"];
				questions = data['questions'];
				choices = data['choices'];
				answers = data['answers'];
				srri = data['srri'];
				srrirange = data['srrirange'];
				numberofquestions = questions.length;
				if (document.getElementById("funds")) {		// id of div
					evaluatequestions();
				} else {
					displayquestionsByCategory(0);
				}
			}
		}); 
	});
}

function ourservicesdata() {
	
	jQuery(function($){
//		var parms = {operation: "getQuestionaire", email: email}
		$.ajax({
			type: "GET",
			url: "./ourservices.php",
			contentType: 'css/text; charset=UTF-8',
//			dataType: "json",
//			data: JSON.stringify(parms),
			success: function (data) {
				appendHtml("ourservices", data);
			}
		}); 
	});
}
function displayquestionsByCategory(k) {
	jQuery(function($){
			str = "<div id='cat'"+k+" class='col-xs-12 fade-in'><center><h3><b>"+" "+categories[k].rcats_name+"</b></h3></center></div>";
			for(var j=0; j<questions.length; j++) {
				if(categories[k].rcats_catid == questions[j].rque_categoryid) {
					str += '<h5 class="black">'+" "+questions[j].rque_question+'</h5>'
					selected=false;
					str += '<table class="mychoices"><tbody><tr>';
					for(var i=0; i < choices.length; i++) {
						if(questions[j].rque_id == choices[i].rcho_questionid) {
							str += '<td>';
							str += '<button class="choice"';
							str += ' onclick="savechoice('+j+','+i+', this)" >';
							str += choices[i].rcho_answer+'<span id="'+'q'+j+'c'+i+'"';
							tmpstr = 'class="tick'+j+' tickhide" ';
							if(!answers == []) {
								for(var m=0; m < answers.length; m++)  {
									if(answers[m].resp_questionid == questions[j].rque_id
									&& answers[m].resp_choiceid == choices[i].rcho_id) {
										tmpstr = 'class="tick'+j+' tickshow" ';
										selected=true;
									} 
								}
							} 
							str += tmpstr;
							str += 'style="float: right;"><i class="glyphicon glyphicon-ok" aria-hidden="true"></i></span>';
							str += '</button>';
							str += '</td>';
						}
					}
					str += "</tr></tbody></table>";
				}
			}
			
			str += '<div" style="padding-top: 20px; padding-bottom: 20px;">';			
			if(k==3) {
				str += '<button class="continueBtn" onclick="finishQuestionnaire()">Finish</button>';				
			} else {
				str += '<button class="continueBtn" onclick="showNextCat('+k+')">Continue</button>';
			}
			if(k>0) {
				str += '<button class="backBtn" onclick="showPrevCat('+k+')">Back</button>';
			}
			str += '<hr></div>';
			appendHtml("questions", str);
			str="";
		});
}

function finishQuestionnaire() {
	if(numberofanswers == numberofquestions) {
		saveAnswers();
		document.body.scrollTop = document.documentElement.scrollTop = 0;
//		window.location.href="./funds.php?email="+email;			
	} else {
		alert("Please answer ALL questions");
	}
}
function showPrevCat(c) {
	c = c-2;
	showNextCat(c);
	
}
function showNextCat(c) {
	jQuery(function($){
		c++;
		numberofanswers = answers.length;
		displayquestionsByCategory(c);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
}

function savechoice(qid, cid, el) {
	jQuery(function($){
		x='q'+qid+'c'+cid;
		console.log("x is "+x);
		$(".tick"+qid).removeClass("tickshow");
		$(".tick"+qid).addClass("tickhide");
		$("#"+x).removeClass("tickshow");
		$("#"+x).removeClass("tickhide");
		$("#"+x).addClass("tickshow");
//		$(el).children().removeClass("tickshow");
//		$(el).children(':first-child').addClass("tickshow");
		questions[qid].selected = cid;
		questions[qid].score = choices[cid].score;
		answer = {};
		for(var i=0; i<categories.length; i++) {
			if(categories[i].rcats_catid == questions[qid].rque_categoryid) {
				answer.resp_category = categories[i].rcats_name;
				answer.resp_catid = categories[i].rcats_catid;
			}
		}
		for(var j=0; j<answers.length; j++) {
			if(answers[j].resp_questionid == questions[qid].rque_id) {
				answers.splice(j, 1);
				break;
			}
		}
		answer.resp_question = questions[qid].rque_question;
		answer.resp_questionid = questions[qid].rque_id;
		answer.resp_orderno = questions[qid].rque_orderno;
		answer.resp_score = choices[cid].rcho_score;
		answer.resp_answer = choices[cid].rcho_answer;
		answer.resp_choiceid = choices[cid].rcho_id;
		answers.push(answer);
		
//		if(answers[m].resp_questionid == questions[j].rque_id
//		&& answers[m].resp_choiceid == choices[i].rcho_id) {
										
	});
}	

function evaluatequestions() {
	jQuery(function($){
		th = 0;
		rt = 9999;
		str = "The result is ..."+"\n";
		score = 0;
		scoreth = 0;
		scorera = 0;
		scorerc = 0;
		for(var i=0; i<answers.length; i++) {
			coefficient = 0;
			catname = answers[i].resp_category;  //catname = categories[i].rcats_name;
			for(var a=0; a<categories.length; a++) {
				if(categories[a].rcats_name == catname) {
					coefficient = parseFloat(categories[a].rcats_coefficient);
					console.log("coeff is "+coefficient);
				}
			}
			if(answers[i].resp_question == "In what currency would you like to invest?") {
				currency = answers[i].resp_answer;
			}
			
			if(catname == "Time Horizon") {
				scoreth = scoreth + ((answers[i].resp_score)*coefficient);
			}  
			if(catname == "Risk Appetite") {
				scorera = scorera + ((answers[i].resp_score)*coefficient);	
			}
			if(catname == "Risk Capacity") {
				scorerc = scorerc + ((answers[i].resp_score)*coefficient);	
			}
		}
		th = Math.floor(scoreth);	
		ra = Math.floor(scorera);	
		rc = Math.floor(scorerc);	
		if(ra<rc) {
			rt = ra; 
		} else {
			rt = rc;
		}

		str += "<p><b>TH is "+th+"  RA is "+ra+"   RC is "+rc+"   RT is "+rt+"</b></p>\n";
		
		for(var m=0; m<srrirange.length; m++) {
			if(srrirange[m].sran_timeid == th && srrirange[m].sran_rtlow <= rt && srrirange[m].sran_rthigh >= rt) {
				srriid = srrirange[m].sran_srriid;
				str += "<p><b>SRRI id is "+srriid+"</b></p>\n";
				for(var n=0; n<srri.length; n++) {
					if(srriid == srri[n].srri_id) {
						str += "<p><b>Name is "+srri[n].srri_name+"</b></p>\n";
					}
				}
			}
		}
		str += "<p><b>Currency is "+currency+"</b></p>\n";
		console.log(str);
//	this is a fudge just to ensure that a portfolio risk is always found !!!
		if(srriid < 4) {
			srriid = 4;
		} 
		if(srriid > 6) {
			srriid = 6;
		}
		currency = "USD";
//   end of fudge !!
		console.log("srriid is "+srriid);

		getFundsByRiskCurr(srriid, currency, 50000, 4000);

	});
}

function getleadrecord() {
//	alert("getleadrecord");
	jQuery(function($){
		var parms = {operation: "getLead", email: email, pwd: pwd2};
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				console.log("lead data:  "+data);
				if(data["lead"] && data["lead"].length>0) {				
					lead = data["lead"];
					firstname = lead[0].lead_personfirstname;
					lastname = lead[0].lead_personlastname;
					myname = firstname+" "+lastname;
					email = lead[0].lead_personemail;
					createCookie("email",email,30);
					createCookie("firstname",firstname,30);
					createCookie("lastname",lastname,30);
					if(lead[0].Lead_Description == 'Questionaire completed') {
						window.location.href="./funds?email="+email;
					} else {
						window.location.href="./questionaire";
					}
				} else {
					appendHtml("notfound", "Visitor not found");
				}
			}
		}); 
	}); 
}

function getFunds() {
	jQuery(function($){
		email = readCookie("email");
//		alert(email);
		var parms = {operation: "getFunds", email: email};
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				console.log("funds data:  "+data['funds']);
				riskrate = data["riskrate"][0].robo_capacity_risk;
				console.log("riskrate "+riskrate);
				funds = data["funds"];
				showfundsbyrisk();
//				showcompass();
//				showresearched();
			}
		}); 
	}); 
}

function showfundsbyrisk() {
	jQuery(function($){
		flist = '<option value="" selected>select</option>';
		flist += '<option class="dropdown-header" value="" disabled>Risk Level '+(riskrate-1)+'</option>';
		for(var i=0; i<funds.length; i++) {
			if(funds[i].fund_SRRI == riskrate-1) {
				flist += '<option value="'+funds[i].fund_id+'">'+funds[i].fund_fundname+'</option>';
			}
		}
		flist += '<option class="dropdown-header" value="" disabled>Risk Level '+riskrate+'</option>';
		for(var i=0; i<funds.length; i++) {
			if(funds[i].fund_SRRI == riskrate) {
				flist += '<option value="'+funds[i].fund_id+'">'+funds[i].fund_fundname+'</option>';
			}
		}
		flist += '<option class="dropdown-header" value="" disabled>Risk Level '+(riskrate+1)+'</option>';
		for(var i=0; i<funds.length; i++) {
			if(funds[i].fund_SRRI == riskrate+1) {
				flist += '<option value="'+funds[i].fund_id+'">'+funds[i].fund_fundname+'</option>';
			}
		}
		fundselect =  flist;
		appendHtml("fundname"+counter, flist);
	}); 
}
function showcompass() {
	jQuery(function($){
		flist = '';
		for(var i=0; i<funds.length; i++) {
			if(funds[i].fund_fundtype == 'Multi-Asset') {
				flist += '<div class="col-xs-12 col-md-1"></div>';
				flist += '<div class="col-xs-12 col-md-4">'+funds[i].fund_fundname+'</div>';
				flist += '<div class="col-xs-12 col-md-2">'+funds[i].fund_fundcategory+'</div>';
				flist += '<div class="col-xs-12 col-md-2">'+funds[i].fund_fundtype+'</div>';
				flist += '<div class="col-xs-12 col-md-1">'+funds[i].fund_SRRI+'</div>';
				flist += '<div class="col-xs-12 col-md-2">&nbsp;</div>';
			}
		}
		appendHtml("compasslist", flist);
	}); 
}
function showresearched() {
	jQuery(function($){
		flist = '';
		for(var i=0; i<funds.length; i++) {
			if(!(funds[i].fund_fundtype == 'Multi-Asset')) {
				flist += '<div class="col-xs-12 col-md-1"></div>';
				flist += '<div class="col-xs-12 col-md-4">'+funds[i].fund_fundname+'</div>';
				flist += '<div class="col-xs-12 col-md-2">'+funds[i].fund_fundcategory+'</div>';
				flist += '<div class="col-xs-12 col-md-2">'+funds[i].fund_fundtype+'</div>';
				flist += '<div class="col-xs-12 col-md-1">'+funds[i].fund_SRRI+'</div>';
				flist += '<div class="col-xs-12 col-md-2">&nbsp;</div>';
			}
		}
		appendHtml("researchedlist", flist);
	}); 
}
function getuserdata() {
	jQuery(function($){
		var parms = {operation: "getuserdata", myname: myname, email: email, questions: JSON.stringify(questions), categories: JSON.stringify(categories), choices: JSON.stringify(choices)};

		$.ajax({
			type: "POST",
			url: "./php/getGPdata.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				if(data["result"] == 'ok') {;
					getQuestionaire();
				} else {
					if(data["categories"].length > 0) {
						categories = JSON.parse(data["categories"]);
						qs = JSON.parse(data['questions']);
						choices = JSON.parse(data['choices']);
						questions = qs;
						srri = data['srri'];
						srrirange = data['srrirange'];
						$("#qblock").slideUp("fast");
						evaluatequestions();
					}
				}
			}
       });
	});
}
function saveform(arr) {
	jQuery(function($){
		var parms = {operation: "saveform", user_id: user_id, formname: "appform1", formdetail: JSON.stringify(arr)};
		$.ajax({
			type: "POST",
			url: "./php/getGPdata.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				console.log(data);
				result = data["result"]; 
				window.location.href = '../appform1files';
			}
       });

	});
}

/*function hideAllForms() {
	jQuery(function($){
		$('#openacct').slideUp('slow');
		$('#openacct0').slideUp('slow');
		$('#openacct1').slideUp('slow');
		$('#openacct2').slideUp('slow');
		$('#openacct3').slideUp('slow');
	});
}*/
function showForm(f) {
	jQuery(function($){
		showhide('openacct', "hide");
/*		showhide('openacct0', "hide");
		showhide('openacct1', "hide");
		showhide('openacct2', "hide");
		showhide('openacct3', "hide");
		showhide('openacct4', "hide");
		showhide('openacct5', "hide");
		showhide('openacct6', "hide");*/
		showhide('openacct0', "show");
		displayAcctForm('openacct'+f);
		$('#oa'+f).removeClass('frmprogress');
		$('#oa'+f).addClass('frmprogresscurrent');
		window.scrollTo(0, 0);		
	});
}

$("#addressBtn :input").change(function() {
	var radBtn = this.id;
	if(radBtn == "radio2") {
		$('#coraddress').slideDown('slow');
	} else {
		$('#coraddress').slideUp('slow');
	}
});

$('#form3').submit(function () {
	saveAcctform1();
	return false;
});
$('#form4').submit(function () {
	saveAcctform2();
	return false;
});
$('#form5').submit(function () {
	saveAcctform3();
	return false;
});
$('#form6').submit(function () {
	saveAcctform4();
	return false;
});
$('#form7').submit(function () {
	saveAcctform5();
	return false;
});


function saveAcct1(parms) {
	jQuery(function($){
		
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				getAcctData(); 
				populateOpenAcctForms();
				console.log("Acctdata "+acctdata);
				$('#oa1').removeClass('frmprogresscurrent');
				$('#oa1').addClass('frmprogresscomplete');
				$('#oa2').addClass('frmprogresscurrent');
				showForm("2");
			}
       });
	});
}

function saveAcct2(parms) {
	jQuery(function($){
		
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				getAcctData(); 
				populateOpenAcctForms();
				console.log("Acctdata "+acctdata);
				$('#oa2').removeClass('frmprogresscurrent');
				$('#oa2').addClass('frmprogresscomplete');
				showForm("3");
			}
       });
	});
}

function saveAcct3(parms) {
	jQuery(function($){
		
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				getAcctData(); 
				populateOpenAcctForms();
				console.log("Acctdata "+acctdata);
				$('#oa3').removeClass('frmprogresscurrent');
				$('#oa3').addClass('frmprogresscomplete');
				showForm("4");
			}
       });
	});
}

function saveAcct4(parms) {
	jQuery(function($){
		
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				getAcctData(); 
				populateOpenAcctForms();
				console.log("Acctdata "+acctdata);
				$('#oa3').removeClass('frmprogresscurrent');
				$('#oa3').addClass('frmprogresscomplete');
				showForm("5");
			}
       });
	});
}
function saveAcct5(parms) {
	jQuery(function($){
		
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				$("#spinner").slideUp();
			}
       });
	});
}

function submitApplication() {
	jQuery(function($){
		var parms = {operation: "submitApplication", email: email};
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
//				console.log(data);
				$('#oa5').removeClass('frmprogresscurrent');
				$('#oa5').addClass('frmprogresscomplete');
				$('#oa6').removeClass('frmprogresscurrent');
				$('#oa6').removeClass('frmprogress');
				$('#oa6').addClass('frmprogresscomplete');
				alert("Thank you. Your application has been submitted successfully. You will receive an email from us once the account is approved.");
				window.location.href="./index.html";
			}
       });
	});
}

function saveregform() {
//	alert("saveregform "+firstname+" "+lastname+" "+email);
	jQuery(function($){
		var parms = {operation: "saveRegform", firstname: firstname, lastname: lastname, email: email, pwd: pwd};
		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",		// this should be a generic php curl prog
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				console.log("lead data:  "+data);
				lead = data["lead"];
				if(lead == "") {
					appendHtml("leadrecord", "Visitor not found");
				} else {
					window.location.href="./questionaire.php";			
				}
			}
       });
	});
}
function saveEventRegForm() {
	if (grecaptcha.getResponse() == ""){
		alert("Please verify that you are not a Robot");
		return true;
	} else {
		firstname = document.getElementById("evtfname").value;
		lastname = document.getElementById("evtlname").value;
		email = document.getElementById("evtemail").value;
		phone = document.getElementById("evtphone").value;
		title = document.getElementById("evttitle").value;
		companyname = document.getElementById("evtcompanyname").value;
//		saveEventReg();

		jQuery(function($){
			var parms = {operation: "saveEventReg", firstname: firstname, lastname: lastname, email: email, phone: phone, companyname: companyname, title: title};
			$.ajax({
				type: "POST",
				url: "./php/useCurl.php",		// this should be a generic php curl prog
				contentType: 'application/json; charset=UTF-8',
				dataType: "json",
				data: JSON.stringify(parms),
				success: function (data) {
//						$( "#msgSubmit" ).removeClass( "hidden" );
					$("#btn1").disable;
				}
		   });
		});
	}
	alert("Thank you. You are registered for the Event.");
	window.location.href="./index.html";
}

function submitContactForm(){
//	event.preventDefault();
	jQuery(function($){
		// verify first 
		if (grecaptcha.getResponse() == ""){
			alert("Please verify that you are not a Robot");
		} else {
			// Initiate Variables With Form Content
			var name = $("#fullname").val();
			var email = $("#youremail").val();
			var subject = $("#subject").val();
			var message = $("#message").val();
			var dta = "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message;
			console.log("dta is"+dta);
			$.ajax({
				type: "POST",
				url: "php/sendPHPEmail.php",
				data: dta,
				success : function(text){
					if (text == "success"){
						$( "#msgSubmit" ).removeClass( "hidden" );
					}
				}
			});
//			alert("Thank you");
//			window.location.href="./index.html";
		}		
	});
}

function saveformfiles(arr) {
	jQuery(function($){
		var form = $('form')[0]; 
		var formData = new FormData(form);
		console.log("formdata");
		console.log(formData);

		$.ajax({
			url: "./php/upload.php",  
			type: 'POST',
			cache: false,
			contentType: false,
			processData: false,
			xhr: function() {  // Custom XMLHttpRequest
				var myXhr = $.ajaxSettings.xhr();
				return myXhr;
			},
			data: formData,
			success: function (data) {
				alert("ok");
			},
			error: function (data) {
				alert("error");
			}
		});
	alert("saveformfiles");
		return;
	});	
}
function webtolead() {
//	alert("HELLO");
	jQuery(function($){
		var parms = { 
			lead_companyaddress1: address1,
			lead_companyaddress2: address2,    
			lead_companyaddress3: district,    
			lead_companyaddress3: ctry,    
			lead_companycity: city,    
			lead_personemail: email,   
			lead_personfirstname: first-name,    
			lead_personlastname: last-name,    
			lead_personfullname: first-name+" "+last-name,   
			lead_companyPostCode: postcode
			};

		$.ajax({
			type: "POST",
			url: "https://213.207.138.9/CRM/eware.dll/SubmitLead?RuleID=",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				alert("Success");
				console.log(data);
//				result = data["result"];
//				window.location.href = 'openacctsuccess';
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) { 
				alert("Status: " + textStatus); alert("Error: " + errorThrown); 
			}
		});
		return true;
	});	
}
function sendInvestment() {
	jQuery(function($){
		tmp = [];
		for(i=0; i<selectedfunds.length; i++) {
			if( selectedfunds[i].perc>0) {
				tmp.push(selectedfunds[i]);
			}
		}
		invcur = document.getElementById("invcurr").value;
		var parms = {operation: "sendInvestment", email: email, invcur: invcur, selectedfunds: JSON.stringify(tmp)};
		if(selectedfunds.length>0) {
			$.ajax({
				type: "POST",
				url: "./php/useCurl.php",
				contentType: 'application/json; charset=UTF-8',
				dataType: "json",
				data: JSON.stringify(parms),
				success: function (data) {
					result = data["result"];
					alert("Thank you. Your application has been submitted successfully. You will receive an email from us once the investment is approved.");
					window.location.href="./index.html";
				}
			});
		}
	});
}

function saveAnswers() {
	jQuery(function($){		
		var parms = {operation: "saveAnswers", email: email, answers: JSON.stringify(answers)};
		if(answers.length>0) {
			$.ajax({
				type: "POST",
				url: "./php/useCurl.php",
				contentType: 'application/json; charset=UTF-8',
				dataType: "json",
				data: JSON.stringify(parms),
				success: function (data) {
					result = data["result"];
					riskappetite = data["riskappetite"];
					riskcapacity = data["riskcapacity"];
					buildAssessment();
					$("#questionpage").hide();
					$("#assess").show();
					createCookie("riskappetite",riskappetite,30);
					createCookie("riskcapacity",riskcapacity,30);				}
			});
		}
	});
}

function getFundsByRiskCurr(risk, curr, initial, annual) {
	jQuery(function($){
		var parms = {operation: "getFundsByRiskCurr", risk: risk, curr: curr};

		$.ajax({
			type: "POST",
			url: "./php/useCurl.php",
			contentType: 'application/json; charset=UTF-8',
			dataType: "json",
			data: JSON.stringify(parms),
			success: function (data) {
				d1 = data['funds'];
				d2 = data['holdings'];
				d3 = data['quarter'];
				var funddata = new Array();
				var compdata = new Array();
				var fundname;
				var proj;
				var low;
				var high;
				var str = "";
				var compstr = "<table class='mytable'>";
				$.each(d1, function(k, v) {
					if(fundname!=v.name) {
						funddata = [];
						compdata = [];
						compstr = "<table class='mytable'>";
					}
					fundname = v.name;
					proj = v.anticipatedreturn;
					low = v.lowrange;
					high = v.highrange;
					if(v.allocation=='Sector') {
						funddata.push({"label": v.description, "value": v.proportion})
					}
					if(v.allocation=='Composition') {
						compstr += "<tr><td>"+v.description+"</td><td>"+parseFloat(v.proportion).toFixed(2)+""+"</td></tr>";
					}
				});
				compstr += "</table>";
				appendHtml("fundname", "<b>"+fundname+"</b>");
				appendHtml("composition", compstr);
				showchart(fundname, funddata);
				holdingsstr = "<table class='mytable'><tr><th>Name</th><th>Weight</th><th>Shares</th></tr>";
				$.each(d2, function(k, v) {
					holdingsstr += "<tr><td>"+v.name+"</td><td>"+v.weight+""+"</td><td>"+v.shares+""+"</td></tr>";
				});
				holdingsstr += "</table>";
				appendHtml("holdingsContainer", holdingsstr);
				projections(parseInt(initial), parseInt(annual), 10, 2016, parseInt(proj), parseInt(low), parseInt(high),'projectionsContainer');
				histdata = [];
				$.each(d3, function(k, v) {
					if(v.month=="12") {
						histdata.push({"label": v.year+'/'+v.month, "value": v.price})
					} else {
						histdata.push({"label": '', "value": v.price})
					}
				});
				historical(histdata);
				$("#pinfo").slideDown("slow");
				$("#spinner").slideUp();
			}
       });
	});
	
}
function appendHtml(el, str) {
  var div = document.getElementById(el);
  if(div) {
	div.innerHTML = str;
  }
}

jQuery(function($){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	$( "#myname" ).focus(function() {
		showhide("mynameerror", "hide");
	});
	$( "#email" ).focus(function() {
		showhide("emailerror", "hide");
	});
});

function hideall() {
	jQuery(function($){
		showhide("saverow", "hide");
		showhide("retrieverow", "hide");
		showhide("reviewrow", "hide");
		showhide("anonymousrow", "hide");
		showhide("qblock", "hide");
		showhide("pinfo", "hide");
	});
}

function showhide(el, action) {
	jQuery(function($){
//		console.log("showhide "+el+" "+"action");
		if(action == "show") {
			jQuery("#"+el).slideDown();
		} else {
			jQuery("#"+el).slideUp();
		}
	});
}

function displayAcctForm(el) {
	jQuery(function($){
		jQuery(".acctform").css("display", "none");
		jQuery("#"+el).css("display", "block");
	});
}

function enabledisable(el, action) {
	jQuery(function($){
		if(action == "enable") {
			jQuery("#"+el).css({ opacity: 1 });
		} else {
			jQuery("#"+el).css({ opacity: 0.3 });
		}
	});
}
/*function slider1() {
	jQuery("#slider1" ).slider({
      value: 5000,
      range: "max",
      min: 15000,
      max: 250000,
	  step: 5000,
      slide: function( event, ui ) {
        jQuery( "#amount" ).val( ui.value );
		showboxes();
      }
    });
    jQuery( "#amount" ).val( jQuery( "#slider1" ).slider( "value" ) );
 }
*/
function slider2() {
	jQuery("#slider2" ).slider({
      value: 37500,
      range: "max",
      min: 0,
      max: 300000,
	  step: 2500,
      slide: function( event, ui ) {
        jQuery( "#amount2" ).val( ui.value );
		setstyle(slstyle);
		showboxes();
      }
    });
    jQuery( "#amount2" ).val( jQuery( "#slider2" ).slider( "value" ) );
 }

function slider3() {
	jQuery("#slider3" ).slider({
      value: 100,
      range: "max",
      min: 0,
      max: 2000,
	  step: 100,
      slide: function( event, ui ) {
        jQuery( "#amount3" ).val( ui.value );
		setstyle(slstyle);
      }
    });
    jQuery( "#amount3" ).val( jQuery( "#slider3" ).slider( "value" ) );
 }

function slider4() {
	jQuery("#slider4" ).slider({
      value: 5,
      range: "max",
      min: 0,
      max: 30,
	  step: 1,
      slide: function( event, ui ) {
        jQuery( "#amount4" ).val( ui.value );
		setstyle(slstyle);
      }
    });
    jQuery( "#amount4" ).val( jQuery( "#slider4" ).slider( "value" ) );
 }
function setopacityalloff() {
	jQuery("#sl1").css({ opacity: 0.3 });
	jQuery("#sl2").css({ opacity: 0.3 });
	jQuery("#sl3").css({ opacity: 0.3 });
	jQuery("#sl4").css({ opacity: 0.3 });
	jQuery("#sl5").css({ opacity: 0.3 });
	jQuery("#sl6").css({ opacity: 0.3 });
	jQuery("#sl7").css({ opacity: 0.3 });
}
jQuery('#radioBtn a').on('click', function(){
    var sel = jQuery(this).data('title');
    var tog = jQuery(this).data('toggle');
    jQuery('#'+tog).prop('value', sel);
    
    jQuery('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    jQuery('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
	currency = sel;
	setstyle(slstyle);
	showboxes();
})
function setstyle(v) {
	if(v==0) return;
	setopacityalloff();
	jQuery("#sl"+v).css({ opacity: 1 });
	slstyle = v;
	years = parseInt(jQuery('#amount4').val());
	intrate =  parseFloat(srri[slstyle - 1].srri_projected_perc)/100;
	initinvamt = parseInt(jQuery('#amount2').val());
	monthly = parseInt(jQuery('#amount3').val());
	annual = parseInt(jQuery('#amount3').val())*12;
	totinv = initinvamt + (annual*years);
	predictedval = initinvamt;
	
	for(var i=0; i<years; i++) {
		predictedval = predictedval + annual + ((predictedval+annual)*intrate);
	}

	if(currency=="EUR") curr = "&euro;";
	if(currency=="GBP") curr = "&pound;";
	if(currency=="USD") curr = "$";
	
	ss = "<div id='invtext' ><center>";
	ss = ss + "<h3>Total Investment<br>"+curr+" "+formatNumber(totinv)+"</h3>";
	ss = ss + "<h4>predicted value<br>after "+years+" years<h4>";
	ss = ss + "<h1>"+curr+" "+formatNumber(parseInt(predictedval))+"</h1><br>";
	ss = ss + "</center></div>";
	appendHtml("investmentbox", ss);
	
	if(v==1) jQuery("#riskind").attr("srcset","images/gauge1.png");
	if(v==2) jQuery("#riskind").attr("srcset","images/gauge2.png");
	if(v==3) jQuery("#riskind").attr("srcset","images/gauge3.png");
	if(v==4) jQuery("#riskind").attr("srcset","images/gauge4.png");
	if(v==5) jQuery("#riskind").attr("srcset","images/gauge5.png");
	if(v==6) jQuery("#riskind").attr("srcset","images/gauge6.png");
	if(v==7) jQuery("#riskind").attr("srcset","images/gauge6.png");
	
/*	passstr = "?slstyle=" + slstyle;
	passstr = passstr + "&years=" + years;
	passstr = passstr + "&initinvamt=" + formatNumber(initinvamt);
	passstr = passstr + "&monthly=" + monthly;
	passstr = passstr + "&totinv=" + formatNumber(totinv);
	passstr = passstr + "&predictedval=" + formatNumber(parseInt(predictedval));
	passstr = passstr + "&invstyle=" + invstyle;
	passstr = passstr + "&firstmonthfee=" + firstmonthfee;
	passstr = passstr + "&breakdown=" + breakdown; */
}

function setPlanValues() {
	appendHtml("initinvamt", getQueryVariable("initinvamt"));
	appendHtml("monthly", getQueryVariable("monthly"));
	appendHtml("invstyle", getQueryVariable("invstyle"));
	appendHtml("totinv", getQueryVariable("totinv"));
	appendHtml("predictedval", getQueryVariable("predictedval"));
	appendHtml("years", getQueryVariable("years"));
	appendHtml("firstmonthfee", getQueryVariable("firstmonthfee"));
	appendHtml("breakdown", getQueryVariable("breakdown"));
}

function showboxes() {
	jQuery(function($){
		if(currency=="GBP") {
			target1 = 9999;
			target2 = 24999;
			target3 = 199999;
		} else {
			target1 = 14999;
			target2 = 37499;
			target3 = 249999;
		}
		if(currency=="GBP") curr = "&pound;";
		if(currency=="USD") curr = "$";

		selectedamt = parseInt(jQuery('#amount2').val());
		if(selectedamt>target1) {
			enabledisable("box1", "enable");
			enabledisable("box1t", "enable");
		} else {
			enabledisable("box1", "disable");
			enabledisable("box1t", "disable");
		}
		if(selectedamt>target2) {
			enabledisable("box2", "enable");
			enabledisable("box2t", "enable");
		} else {
			enabledisable("box2", "disable");
			enabledisable("box2t", "disable");
		}
		if(selectedamt>target3) {
			enabledisable("box3", "enable");
			enabledisable("box3t", "enable");
		} else {
			enabledisable("box3", "disable");
			enabledisable("box3t", "disable");
		}
	});
} 
/*jQuery("#amount").keyup(function() {
    jQuery("#slider1").slider("value" , jQuery(this).val());
	showboxes();
});*/
jQuery("#amount2").keyup(function() {
    jQuery("#slider2").slider("value" , jQuery(this).val());
	setstyle(slstyle);
	showboxes();
});
jQuery("#amount3").keyup(function() {
    jQuery("#slider3").slider("value" , jQuery(this).val());
	setstyle(slstyle);
});
jQuery("#amount4").keyup(function() {
    jQuery("#slider4").slider("value" , jQuery(this).val());
	setstyle(slstyle);
});
/*function minusamount() {
	jQuery(function($){
		selectedamt = parseInt(jQuery('#amount').val()) - 5000;
		if(selectedamt<0) selectedamt = 0;
		jQuery( "#amount" ).val(selectedamt);
		jQuery("#slider1").slider("value" , selectedamt);
		showboxes();
	});
}
function plusamount() {
	jQuery(function($){
		selectedamt = parseInt(jQuery('#amount').val()) + 5000;
		if(selectedamt>275000) selectedamt = 275000;
		jQuery( "#amount" ).val(selectedamt);
		jQuery("#slider1").slider("value" , selectedamt);
		showboxes();
	});
}*/
function minusamount2() {
	jQuery(function($){
		selectedamt = parseInt(jQuery('#amount2').val()) - 2500;
		if(selectedamt<0) selectedamt = 0;
		jQuery( "#amount2" ).val(selectedamt);
		jQuery("#slider2").slider("value" , selectedamt);
		setstyle(slstyle);
		showboxes();
	});
}
function plusamount2() {
	jQuery(function($){
		selectedamt = parseInt(jQuery('#amount2').val()) + 2500;
		if(selectedamt>275000) selectedamt = 275000;
		jQuery( "#amount2" ).val(selectedamt);
		jQuery("#slider2").slider("value" , selectedamt);
		setstyle(slstyle);
		showboxes();
	});
}
function minusamount3() {
	jQuery(function($){
		selectedamt = parseInt(jQuery('#amount3').val()) - 100;
		if(selectedamt<0) selectedamt = 0;
		jQuery( "#amount3" ).val(selectedamt);
		jQuery("#slider3").slider("value" , selectedamt);
		setstyle(slstyle);
	});
}
function plusamount3() {
	jQuery(function($){
		selectedamt = parseInt(jQuery('#amount3').val()) + 100;
		if(selectedamt>2000) selectedamt = 2000;
		jQuery( "#amount3" ).val(selectedamt);
		jQuery("#slider3").slider("value" , selectedamt);
		setstyle(slstyle);
	});
}
function minusamount4() {
	jQuery(function($){
		selectedamt = parseInt(jQuery('#amount4').val()) - 1;
		if(selectedamt<0) selectedamt = 0;
		jQuery( "#amount4" ).val(selectedamt);
		jQuery("#slider4").slider("value" , selectedamt);
		setstyle(slstyle);
	});
}
function plusamount4() {
	jQuery(function($){
		selectedamt = parseInt(jQuery('#amount4').val()) + 1;
		if(selectedamt>30) selectedamt = 30;
		jQuery( "#amount4" ).val(selectedamt);
		jQuery("#slider4").slider("value" , selectedamt);
		setstyle(slstyle);
	});
}
