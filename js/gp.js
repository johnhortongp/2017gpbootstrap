function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name,"",-1);
}

function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
function showPlan() {
	window.location.href="./plan"+passstr;
}
function showQuestionaire() {
	window.location.href="./questionaire";
}
function getStarted() {
	createCookie("curr",curr,1);
	createCookie("initinvamt",initinvamt,1);
	createCookie("monthly",monthly,1);
	createCookie("years",years,1);
	window.location.href="./getstarted";
}
function testconn() {
	gettestconn();
}
function getSrri() {
	getSrridata();
}
function ourservices() {
	ourservicesdata();
}
function getlead() {
	email = document.getElementById("email").value;
	pwd2 = document.getElementById("pwd2").value;
	getleadrecord();
	return false;
}
function saveregshortform() {
	firstname = document.getElementById("first-name").value;
	lastname = document.getElementById("last-name").value;
	email = document.getElementById("regemail").value;
	pwd = document.getElementById("regpassword").value;
	createCookie("firstname",firstname,30);
	createCookie("lastname",lastname,30);
	createCookie("email",email,30);
	saveregform();
	window.location.href="./questionaire";
	return false;
}

function saveAcctform1() {
	title =  document.getElementById("inputTitle3").value;
	firstname =  document.getElementById("inputFname3").value;
	middlename =  document.getElementById("inputMname3").value;
	lastname =  document.getElementById("inputLname3").value;
	gender =  document.getElementById("inputGender3").value;
	dob =  document.getElementById("inputDOB3").value;
/*	dobday =  document.getElementById("inputDOBday3").value;
	dobmonth =  document.getElementById("inputDOBmonth3").value;
	dobyear =  document.getElementById("inputDOByear3").value;
	dob = dobday+"/"+dobmonth+"/"+dobyear; */
	ctryofbirth =  document.getElementById("inputCtryBirth3").value;
	townofbirth =  document.getElementById("inputTownBirth3").value;
	nationality =  document.getElementById("inputNationality3").value;
	dualnationality =  document.getElementById("inputDualNationality3").value;
	ctryofresidence =  document.getElementById("inputCtryResidence3").value;
	corrlanguage =  document.getElementById("inputCorrLanguage3").value;

	var parms = {operation: "saveAcctForm1", email: email, title: title, firstname: firstname, middlename: middlename, lastname: lastname, gender: gender, dob: dob, ctryofbirth: ctryofbirth, townofbirth: townofbirth, nationality: nationality, dualnationality: dualnationality, ctryofresidence: ctryofresidence, corrlanguage: corrlanguage};
	
	console.log("parms "+parms);
	
	saveAcct1(parms);

}

function saveAcctform2() {
	resaddr1 =  document.getElementById("inputresaddr1").value;
	resaddr2 =  document.getElementById("inputresaddr2").value;
	resaddr3 =  document.getElementById("inputresaddr3").value;
	resaddr4 =  document.getElementById("inputresaddr4").value;
	resaddr5 =  document.getElementById("inputresaddr5").value;
	respostcode =  document.getElementById("inputrespostcode3").value;

	coraddr1 =  document.getElementById("inputcoraddr1").value;
	coraddr2 =  document.getElementById("inputcoraddr2").value;
	coraddr3 =  document.getElementById("inputcoraddr3").value;
	coraddr4 =  document.getElementById("inputcoraddr4").value;
	coraddr5 =  document.getElementById("inputcoraddr5").value;
	corpostcode =  document.getElementById("inputcorpostcode3").value;

	telephone =  document.getElementById("inputtelephone3").value;
	mobile =  document.getElementById("inputmobile3").value;
	fax =  document.getElementById("inputfax3").value;
	idtype =  document.getElementById("inputidtype3").value;
	idno =  document.getElementById("inputidno3").value;
	ctryissue =  document.getElementById("inputctryissue3").value;
	expirydate =  document.getElementById("inputexpirydate3").value;

	var parms = {operation: "saveAcctForm2", email: email, resaddr1: resaddr1, resaddr2: resaddr2, resaddr3: resaddr3, resaddr4: resaddr4, resaddr5: resaddr5, respostcode: respostcode, coraddr1: coraddr1, coraddr2: coraddr2, coraddr3: coraddr3, coraddr4: coraddr4, coraddr5: coraddr5, corpostcode: corpostcode, telephone: telephone, mobile: mobile, fax: fax, idtype: idtype, idno: idno, ctryissue: ctryissue, expirydate: expirydate};
	
	console.log("parms "+parms);
	
	saveAcct2(parms);

}
function saveAcctform3() {
	empaddr1 =  document.getElementById("inputempaddr1").value;
	empaddr2 =  document.getElementById("inputempaddr2").value;
	empaddr3 =  document.getElementById("inputempaddr3").value;
	empaddr4 =  document.getElementById("inputempaddr4").value;
	empaddr5 =  document.getElementById("inputempaddr5").value;
	emppostcode =  document.getElementById("inputemppostcode3").value;
	empstatus =  document.getElementById("inputempstatus3").value;
	occupation =  document.getElementById("inputoccupation3").value;
	employer =  document.getElementById("inputemployer3").value;
	empctry =  document.getElementById("inputempctry3").value;
	salarycurr =  document.getElementById("inputsalarycurr3").value;
	salary =  document.getElementById("inputsalary3").value;
	bonuscurr =  document.getElementById("inputbonuscurr3").value;
	bonus =  document.getElementById("inputbonus3").value;

	var parms = {operation: "saveAcctForm3", email: email, empaddr1: empaddr1, empaddr2: empaddr2, empaddr3: empaddr3, empaddr4: empaddr4, empaddr5: empaddr5, emppostcode: emppostcode, empstatus: empstatus, occupation: occupation, employer: employer, empctry: empctry, salarycurr: salarycurr, salary: salary, bonuscurr: bonuscurr, bonus: bonus };
	console.log("parms "+parms);
	saveAcct3(parms);

}
function saveAcctform4() {
	taxctry =  document.getElementById("inputtaxctry3").value;
	taxref =  document.getElementById("inputtaxref3").value;
var parms = {operation: "saveAcctForm4", email: email, taxctry: taxctry, taxref: taxref };
	console.log("parms "+parms);
	saveAcct4(parms);

}

function saveAcctform5() {
//	file1 =  document.getElementById("inputfile1").value;
	filedesc1 = document.getElementById("inputfiledesc3").value;
	var file1 = document.getElementById('inputfile1').files[0];
	showhide("spinner", "show");
	getBase64(file1, filedesc1);
/*		this code moved to function getBase64 as it needs to wait for onload to complete
	console.log(file1.name);
	console.log(file1.size);
	console.log(file1.type);
	console.log(base64file);
	var parms = {operation: "saveAcctForm5", email: email, file: file1, base64file1: base64file };
	saveAcct5(parms);
*/
}
function getBase64(file, filedesc1) {
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function () {
	base64file1 = reader.result;
	filename1 = file.name;
	filesize1 = file.size;
	filetype1 = file.type;
	console.log(filename1);
	console.log(filesize1);
	console.log(filetype1);
	console.log(base64file1);
	var parms = {operation: "saveAcctForm5", email: email, filedesc1: filedesc1, filename1: filename1, filesize1: filesize1, filetype1: filetype1, base64file1: base64file1 };
	saveAcct5(parms);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

function finishedUploading() {
	$('#oa5').removeClass('frmprogress');
	$('#oa5').addClass('frmprogresscomplete');
	$('#oa6').addClass('frmprogresscurrent');
	$('#oa6').removeClass('frmprogress');
	$('#oa6').addClass('frmprogresscurrent');
	$('#oa6 :input').removeAttr('disabled');
	showForm("6");

}
function appform1progress() {
	getappform1progress();
}
function appform1() {
	getappform1();
}
function appform1files() {
	getappform1files();
}

function eqs() {
	myname = $_GET('myname');
	email = $_GET('email');
//	getuserdata();
//	getleadrecord();
}

function validateappform1() {
	var arr = {};
	var elem = document.getElementById("appform1form").elements;
	if(elem.checkValidity()) {
		saveappform1();
	} else {
		return false;	
	}
}
function saveappform1() {

	var arr = {};
	var elem = document.getElementById("appform1form").elements;
	console.log(elem);
	for(i=1; i < elem.length; i++) {
		if( ! elem[i].value=="") {
			arr[elem[i].id] = elem[i].value;
		}
	}
	saveform(arr);

	return false;
}
function saveappform1files() {
alert("saveappform1files");
	var arr = {};
	var elem = document.getElementById("appform1formfiles").elements;
	console.log(elem);
	for(i=1; i < elem.length; i++) {
		if( ! elem[i].value=="") {
			arr[elem[i].id] = elem[i].value;
		}
	}
	saveformfiles(arr);

	return false;
}
function readURL1(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#captured_img1')
				.attr('src', e.target.result)
		};

		reader.readAsDataURL(input.files[0]);
	}
}

function saveme_form_validation(action) {
	/* Check the fields for blank submission*/
	myname = document.forms["saveme"]["myname"].value;
	email = document.forms["saveme"]["email"].value;
	if (myname == '' || myname == null) {
		showhide("mynameerror", "show");
		return false;
	}
	if (email == '' || email == null) {
		showhide("emailerror", "show");
		return false;
	}
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
		showhide("emailerror", "show");
        return false;
    }
	getuserdata();
	hideall();
	if(action=="save") {
		document.getElementById("buttontext").innerHTML = document.getElementById("saverow").innerHTML;
//		showhide("savetext", "show");
	} else {
		document.getElementById("buttontext").innerHTML = document.getElementById("retrieverow").innerHTML;
//		showhide("retrieverow", "show");
	}
	return false;
}
 
function question1_form_validation() {
	/* Check the fields for blank submission*/
	var initialsum = document.forms["question1"]["initialsum"].value;
	var curr = document.forms["question1"]["curr"].value;
	var term = document.forms["question1"]["term"].value;
	var goal = document.forms["question1"]["goal"].value;
	var annualsum = document.forms["question1"]["annualsum"].value;
	var tolerance = document.forms["question1"]["tolerance"].value;
	if (initialsum == '' || initialsum == null) {
		alert("Investment amount field must be entered.");
		return false;
	}
	if (curr == '' || goal == null) {
		alert("Currency field must be selected.");
		return false;
	}
	if (term == '' || term == null) {
		alert("Term field must be selected.");
		return false;
	}
	if (goal == '' || goal == null) {
		alert("Goal field must be selected.");
		return false;
	}
	if (annualsum == '' || annualsum == null) {
		alert("Annual investment amount field must be entered.");
		return false;
	}
	if (tolerance == '' || tolerance == null) {
		alert("Tolerance field must be selected.");
		return false;
	}
	if (!IsNumeric(initialsum)) {
		alert("Investment amount field must be numeric.");
		return false;
	}
	if (!IsNumeric(annualsum)) {
		alert("Savings field must be numeric.");
		return false;
	}
	getFundsByRiskCurr(tolerance, curr, initialsum, annualsum);

	return false;
}

function IsNumeric(input) {
    input = input.replace(",", ''); 
    return (input - 0) == input && (''+input).trim().length > 0;
}

function anonymous() {
	choicescategories = [];
	choicesquestions = [];
	choiceschoices = [];
	choicessrri = [];
	choicessrrirange = [];
	choicesname = "";
	choicesemail = "";
	choicescurrency = "";
	srriid = "";
	hideall();
	document.getElementById("buttontext").innerHTML = document.getElementById("anonymousrow").innerHTML;
//	showhide("anonymousrow", "show");
	getQuestionaire();
}

function showchart(fundname, funddata) {
    var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'chartContainer',
        width: '100%',
        height: '450',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": fundname,
                "subCaption": "by Sector",
                "numberPrefix": "$",
                "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
//                "bgColor": "#ffffff",
				"bgImage": "./images/abstract1-2.png",
				"bgImageAlpha": "50",
				"bgImageDisplayMode": "stretch",
				"baseFontColor": "#000000",
				"showBorder": "0",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "310",
                "showLabels": "0",
                "showPercentValues": "1",
                "showLegend": "1",
                "legendShadow": "0",
                "legendBorderAlpha": "0",
                "defaultCenterLabel": "Fund Allocation",
                "centerLabel": "Revenue from $label: $value",
                "centerLabelBold": "1",
                "showTooltip": "0",
                "decimals": "0",
                "captionFontSize": "14",
				"exportEnabled": "1",
				"exportAtClientSide": "1",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0"
            },
            "data": funddata
        }
    });
    revenueChart.render();
}

/*
function showchart2() {
    var fusioncharts = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart2container',
        width: '500',
        height: '300',
        dataFormat: 'jsonurl',
        dataSource: '/wordpress/data/chart1.json'
    });
    fusioncharts.render();
}
*/
function calcProjectionData(initial, annual, period, startlabel, proj, low, high) {
	var l=[], dp=[], dl=[], dh=[];
	l[0] = {"label": startlabel.toString()};
	dp[0] = {"value": initial};
	dl[0] = {"value": initial};
	dh[0] = {"value": initial};
	tempdp = initial;
	tempdl = initial;
	tempdh = initial;
	startlabel = startlabel - 2000;
	for (i = 0; i < period; i++) { 
		l.push({"label": (startlabel++).toString()});
		tempdp = tempdp + parseInt((tempdp*proj/100)) + annual;
		dp.push({"value": tempdp});
		tempdl = tempdl +parseInt((tempdl*low/100)) + annual;
		dl.push({"value": tempdl});
		tempdh = tempdh +parseInt((tempdh*high/100)) + annual;
		dh.push({"value": tempdh});
	}
	var projdata = [];
	projdata[0] = l;
	projdata[1] = dp;
	projdata[2] = dl;
	projdata[3] = dh;
	return projdata;
}

function projections(initial, annual, period, startlabel, proj, low, high, renderat) {
	var projdata = [];
	projdata = calcProjectionData(initial, annual, period, startlabel, proj, low, high);
//	projdata = calcProjectionData(50000, 2400, 10, 2016, 6, -18, 20);
//	console.log(projdata);
    var projectionChart = new FusionCharts({
        type: 'msarea',
        renderAt: renderat,
        width: '100%',
//        height: '450',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Investment Growth",
                "subCaption": "Projection estimate",
                "xAxisName": "Year",
                "yAxisName": "GBP",
                "numberPrefix": " ",
                "paletteColors": "#0075c2,#1aaf5d,#5ec78d",
//                "bgColor": "#ffffff",
				"bgImage": "./images/abstract1-2.png",
				"bgImageAlpha": "50",
				"bgImageDisplayMode": "stretch",                
				"showBorder": "0",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "plotBorderAlpha": "10",
                "usePlotGradientColor": "0",
                "legendBorderAlpha": "0",
                "legendShadow": "0",
                "plotFillAlpha": "60",
                "showXAxisLine": "1",
                "axisLineAlpha": "25",                
                "showValues": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "divlineColor": "#999999",                
                "divLineIsDashed": "1",
                "divLineDashLen": "1",
                "divLineGapLen": "1",
                "showAlternateHGridColor": "0",
				"exportEnabled": "1",
				"exportAtClientSide": "1",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "1",
                "toolTipPadding": "15",
            },
            
            "categories": [
                {
                    "category": projdata[0]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Low Range",
                    "data": projdata[2]
                }, 
                {
                    "seriesname": "Projected",
                    "data": projdata[1]
                }, 
                {
                    "seriesname": "High Range",
                    "data": projdata[3]
                }
            ]
        }
    });
	
    projectionChart.render();
}


function historical(histdata) {
    var historicalChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'historicalContainer',
        width: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Historical ",
                "xAxisName": "Quarter",
                "yAxisName": "Fund value",
                "numberPrefix": "",
                "paletteColors": "#0075c2",
//                "bgColor": "#ffffff",
				"bgImage": "./images/abstract1-2.png",
				"bgImageAlpha": "50",
				"bgImageDisplayMode": "stretch",                
				"showBorder": "0",
                "borderAlpha": "20",
                "canvasBorderAlpha": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "1",
                "valueFontColor": "#ffffff",                
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
				"exportEnabled": "1",
				"exportAtClientSide": "1",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14"
            },            
            "data": histdata
        }
    });
	
    historicalChart.render();
}

function readURL2(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#captured_img2')
				.attr('src', e.target.result)
		};

		reader.readAsDataURL(input.files[0]);
	}
}



