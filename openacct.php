<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="./favicon.ico">

    <title>Goal Portfolios Insurance Advisors</title>

    <!-- Bootstrap core CSS -->
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap theme -->
    <link href="./css/bootstrap-theme.min.css" rel="stylesheet">

    <link href="css/theme.css" rel="stylesheet">
    <link href="css/mystyle.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body class="starter-template" data-spy = "scroll">

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header" style="margin-right: 8%">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html"><img src="images/gplogo.png" width="200px"></a>
        </div>
        <div id="navbar" class="collapse navbar-collapse navbar-inverse">
			<ul class="nav navbar-nav" style="padding-top: 10px;">
				<li><a href="index.html">Home</a></li>
				<li class="dropdown">
					<a href="#" data-toggle="dropdown" class="dropdown-toggle">About <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="about">Goal Portfolios</a></li>
							<li><a href="funds">Products we offer</a></li>
							<li><a href="accountsweoffer">Accounts we offer</a></li>
							<li><a href="investmentprocess">Our investment process</a></li>
							<li><a href="om">Old Mutual International</a></li>
						</ul>
				</li>
				<li class="dropdown">
					<a href="#" data-toggle="dropdown" class="dropdown-toggle">Community <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="blog">Blog</a></li>
							<li><a href="underconstruction">Forum</a></li>
							<li><a href="underconstruction">Knowledge Base</a></li>
						</ul>
				</li>
				<li><a href="contact">Contact</a</li>
				<li><a href="eventregistration">Event registration</a></li>
				<li class="dropdown">
					<a href="#" data-toggle="dropdown" class="dropdown-toggle">My Account<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="getstarted">Register/Login</a></li>
							<li class="active"><a href="openacct">Open an Account</a></li>
							<li><a href="invest">Invest</a></li>
							<li><a href="questionaire">Questionnaire</a></li>
						</ul>
				</li>
			</ul>

        </div><!--/.nav-collapse -->
      </div>
    </nav>
	
	<section id="openacct" class="section openacct lightgray">
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-12  col-md-3"></div>
				<div class="col-xs-12  col-md-6">
					<h2 style="text-align: center;"><span style="color: #ffffff;">Personal Data Statement for 
					<p id="dispemail"></p>					
					</span></h2>
					<ul/>
					<h5 style="text-align: justify;"><span style="color: #ffffff;">
					Old Mutual Business Services Limited and, dependent on product choice, Old Mutual Ireland dac, will process information ("Personal Data") about me and any other party whose personal data has been supplied.
					<br/><br/>
					</span></h5>
					<div class="checkbox">
					  <label>
						<input id="uho" type="checkbox" value="">
						I confirm that I have read and agree to the above Personal Data statement.
					  </label>
					</div>
				</div>
				<div class="col-xs-12  col-md-3"></div>
				<div class="col-xs-12 text-center">
					<button type="button" class="btn btn-default">Cancel</button>
					<button type="button" class="btn btn-primary" onclick="if ($('#uho').is(':checked')) { showForm('1'); };">Start</button>				
				</div>
			</div><!-- /.row -->
		</div>
	</section><!-- /.section openacct-->

	<section id="openacct0" class="section openacct lightgray" >
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-md-1"></div>
				<div class="col-md-10" style="border-radius: 15px;">
					<div id="oa1" class="col-md-2 frmprogresscurrent" onclick="showForm('1');">1.Applicant details</div>
					<div id="oa2" class="col-md-2 frmprogress" onclick="showForm('2');">2.Address & contact</div>
					<div id="oa3" class="col-md-2 frmprogress" onclick="showForm('3');">3.Employment details</div>
					<div id="oa4" class="col-md-2 frmprogress" onclick="showForm('4');">4.Taxation details</div>
					<div id="oa5" class="col-md-2 frmprogress" onclick="showForm('5');">5.Document upload</div>
					<div id="oa6" class="col-md-2 frmprogress" onclick="showForm('6');">6.Review & submit</div>
				</div>
				<div class="col-md-1"></div>
			</div><!-- /.row -->
		</div>
	</section><!-- /.section open acct progress-->

	<section id="openacct1" class="section openacct acctform lightgray" style="display: none;">
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-12 text-center"><h2>1.Applicant details</h2></div>
				<div class="col-xs-12 text-center"><hr/></div>
				<div class="col-xs-12 col-md-11">
				<form id="form3" class="form-horizontal">
				  <div class="form-group">
					<label for="inputTitle3" class="col-sm-3 control-label frmlabel">* Title</label>
					<div class="col-sm-9">
						<select id="inputTitle3" class="form-control" placeholder="select" required>
							<option value="" selected>select</option>							
							<option value="mr">Mr</option>
							<option value="mrs">Mrs</option>
							<option value="ms">Ms</option>
						</select>					
					</div>
				  </div>
				  				  
				  <div class="form-group">
					<label for="inputFname3" class="col-sm-3 control-label frmlabel">* First Name</label>
					<div class="col-sm-9">
						<input class="form-control" id="inputFname3" value="" placeholder="" required>
					</div>
				  </div>
				  
				  <div class="form-group">
					<label for="inputMname3" class="col-sm-3 control-label frmlabel">Middle Name</label>
					<div class="col-sm-9">
						<input class="form-control" id="inputMname3" placeholder="" >
					</div>
				  </div>
				  
				  <div class="form-group">
					<label for="inputLname3" class="col-sm-3 control-label frmlabel">* Last Name</label>
					<div class="col-sm-9">
						<input class="form-control" id="inputLname3" placeholder="" required>
					</div>
				  </div>
				  
				  <div class="form-group">
					<label for="inputGender3" class="col-sm-3 control-label frmlabel">* Gender</label>
					<div class="col-sm-9">
						<select id="inputGender3" class="form-control" placeholder="select" required>
							<option value="" selected>select</option>							
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>					
					</div>
				  </div>

				  <div class="form-group">
					<label for="inputDOB3" class="col-sm-3 control-label frmlabel">* Date of birth</label>
<!--					<div class="col-sm-3">
						<select id="inputDOBday3" class="form-control" placeholder="Day" required>
							<option value="" selected>Day</option>							
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
						</select>
					</div>
					<div class="col-sm-3">
						<select id="inputDOBmonth3" class="form-control" placeholder="Month" required>
							<option value="" selected>Month</option>							
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
						</select>					
					</div>
					<div class="col-sm-3">
						<input class="form-control" id="inputDOByear3" placeholder="Year" required>
					</div> -->
					<div class="col-sm-3">
						<input class="form-control" id="inputDOB3" placeholder="dd/mm/yyyy" required>
					</div>
				  </div>

				  <div class="form-group">
					<label for="inputCtryBirth3" class="col-sm-3 control-label frmlabel">* Country of Birth</label>
					<div class="col-sm-9">
						<select id="inputCtryBirth3" class="form-control" placeholder="Country">
							<option value="" selected>Country of birth</option>							
							<option value="Cyprus">Cyprus</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="Russia">Russia</option>
							<option value="China">China</option>
							<option value="Germany">Germany</option>
						</select>					
					</div>
				  </div>
			  
				  <div class="form-group">
					<label for="inputTownBirth3" class="col-sm-3 control-label frmlabel">* Town of Birth</label>
					<div class="col-sm-9">
						<input class="form-control" id="inputTownBirth3" placeholder="Town" required>
					</div>
				  </div>
				  
				  <div class="form-group">
					<label for="inputNationality3" class="col-sm-3 control-label frmlabel">* Nationality</label>
					<div class="col-sm-9">
						<select id="inputNationality3" class="form-control" placeholder="select" required>
							<option value="" selected>select</option>							
							<option value="Cypriot">Cypriot</option>
							<option value="British">British</option>
							<option value="Russian">Russian</option>
							<option value="Chinese">Chinese</option>
							<option value="German">German</option>
						</select>					
					</div>
				  </div>
				  <div class="form-group">
					<label for="inputDualNationality3" class="col-sm-3 control-label frmlabel">Dual Nationality</label>
					<div class="col-sm-9">
						<select id="inputDualNationality3" class="form-control" placeholder="select">
							<option value="" selected>select if applicable</option>							
							<option value="Cypriot">Cypriot</option>
							<option value="British">British</option>
							<option value="Russian">Russian</option>
							<option value="Chinese">Chinese</option>
							<option value="German">German</option>
						</select>					
					</div>
				  </div>
				  <div class="form-group">
					<label for="inputCtryResidence3" class="col-sm-3 control-label frmlabel">* Country of Residence</label>
					<div class="col-sm-9">
						<select id="inputCtryResidence3" class="form-control" placeholder="select" required>
							<option value="" selected>select</option>							
							<option value="Cyprus">Cyprus</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="Russia">Russia</option>
							<option value="China">China</option>
							<option value="Germany">Germany</option>
						</select>					
					</div>
				  </div>
				  <div class="form-group">
					<label for="inputCorrLanguage3" class="col-sm-3 control-label frmlabel">* Correspondence Language</label>
					<div class="col-sm-9">
						<select id="inputCorrLanguage3" class="form-control" placeholder="select" required>
							<option value="" selected>select</option>							
							<option value="Greek">Greek</option>
							<option value="English">English</option>
							<option value="Russian">Russian</option>
							<option value="Chinese">Chinese</option>
							<option value="German">German</option>
						</select>					
					</div>
				  </div>

				  <div class="form-group">
					<div class="col-sm-offset-3 col-sm-3">
					  <button id="btn1" type="submit" class="btn btn-default" >Save & Continue</button>
					</div>
					<div class="col-sm-3">
<!--					  <button id="btn2" type="submit" class="btn btn-default" >Save for later</button>-->
					</div>
					<div class="col-sm-3">
					  <button id="btn3" onclick="window.location.href = 'index.html'" class="btn btn-default" >Cancel</button>
					</div>
				  </div>
				</form>
			</div><!-- /.row -->
		</div>
	</section><!-- /.section openacct1-->
	
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("form3");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());
</script>

	<section id="openacct2" class="section openacct acctform lightgray" style="display: none;">
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-12 text-center"><h2>2. Address & contact details</h2></div>
				<div class="col-xs-12 text-center"><hr/></div>
				<div class="col-xs-12 col-md-11">
				<form id="form4" class="form-horizontal" >
					<div class="col-xs-12 text-center"><h4>Residential address</h4></div>
					<div class="col-xs-12 text-center"><hr/></div>

					<div class="form-group">
						<label for="inputresaddr1" class="col-sm-3 control-label frmlabel">* address line 1</label>
						<div class="col-sm-9">
							<input class="form-control" id="inputresaddr1" placeholder="" required>
						</div>
					</div>
					
					<div class="form-group">
						<label for="inputresaddr2" class="col-sm-3 control-label frmlabel">address line 2</label>
						<div class="col-sm-9">
							<input class="form-control" id="inputresaddr2" placeholder="" >
						</div>
					</div>
					
					<div class="form-group">
						<label for="inputresaddr3" class="col-sm-3 control-label frmlabel">address line 3</label>
						<div class="col-sm-9">
							<input class="form-control" id="inputresaddr3" placeholder="" >
						</div>
					</div>
					
					<div class="form-group">
						<label for="inputresaddr4" class="col-sm-3 control-label frmlabel">address line 4</label>
						<div class="col-sm-9">
							<input class="form-control" id="inputresaddr4" placeholder="" >
						</div>
					</div>
					
					<div class="form-group">
						<label for="inputresaddr5" class="col-sm-3 control-label frmlabel">address line 5</label>
						<div class="col-sm-9">
							<input class="form-control" id="inputresaddr5" placeholder="" >
						</div>
					</div>

					<div class="form-group">
						<label for="inputrespostcode3" class="col-sm-3 control-label frmlabel">Post Code</label>
						<div class="col-sm-9">
							<input class="form-control" id="inputrespostcode3" placeholder="" >
						</div>
					</div>

					<div class="form-group">
						<div id="addressBtn">
							<label for="radio1" class="col-sm-3 control-label frmlabel">Is your correspondence address :</label>
							<div class="col-sm-9" style="padding-top: 3px;">
								<label class="custom-control custom-radio">
									<input id="radio1" name="radio-stacked" type="radio" class="custom-control-input" checked>
									<span class="custom-control-indicator"></span>
									<span class="custom-control-description">Same as residential address</span>
								</label>
								<label class="custom-control custom-radio">
									<input id="radio2" name="radio-stacked" type="radio" class="custom-control-input">
									<span class="custom-control-indicator"></span>
									<span class="custom-control-description">New address</span>
								</label>						
							</div>
						</div>
					</div>
					
					<div id="coraddress" style="display: none;">
						<div class="col-xs-12 text-center"><hr/></div>
						<div class="col-xs-12 text-center"><h4>Correspondence address</h4></div>
						<div class="col-xs-12 text-center"><hr/></div>
						<div class="col-xs-12 text-center">

							<div class="form-group">
								<label for="inputcoraddr1" class="col-sm-3 control-label frmlabel">address line 1</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputcoraddr1" placeholder="">
								</div>
							</div>
							
							<div class="form-group">
								<label for="inputcoraddr2" class="col-sm-3 control-label frmlabel">address line 2</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputcoraddr2" placeholder="" >
								</div>
							</div>
							
							<div class="form-group">
								<label for="inputcoraddr3" class="col-sm-3 control-label frmlabel">address line 3</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputcoraddr3" placeholder="" >
								</div>
							</div>
							
							<div class="form-group">
								<label for="inputcoraddr4" class="col-sm-3 control-label frmlabel">address line 4</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputcoraddr4" placeholder="" >
								</div>
							</div>
							
							<div class="form-group">
								<label for="inputcoraddr5" class="col-sm-3 control-label frmlabel">address line 5</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputcoraddr5" placeholder="" >
								</div>
							</div>

							<div class="form-group">
								<label for="inputcorpostcode3" class="col-sm-3 control-label frmlabel">Post Code</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputcorpostcode3" placeholder="" >
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 text-center"><hr/></div>
					<div class="col-xs-12 text-center"><h4>contact details</h4></div>
					<div class="col-xs-12 text-center"><hr/></div>
					<div class="col-xs-12 text-center">
						<div class="form-group">
							<label for="inputtelephone3" class="col-sm-3 control-label frmlabel">* Telephone number</label>
							<div class="col-sm-9">
								<input class="form-control" id="inputtelephone3" placeholder="+357 12345678" required>
							</div>
						</div>
						<div class="form-group">
							<label for="inputmobile3" class="col-sm-3 control-label frmlabel">Mobile number</label>
							<div class="col-sm-9">
								<input class="form-control" id="inputmobile3" placeholder="" >
							</div>
						</div>
						<div class="form-group">
							<label for="inputfax3" class="col-sm-3 control-label frmlabel">Fax number</label>
							<div class="col-sm-9">
								<input class="form-control" id="inputfax3" placeholder="" >
							</div>
						</div>
					</div>

					<div class="col-xs-12 text-center"><hr/></div>
					<div class="col-xs-12 text-center"><h4>Identification details</h4></div>
					<div class="col-xs-12 text-center"><hr/></div>
					<div class="col-xs-12 text-center">
						<div class="form-group">
							<label for="inputidtype3" class="col-sm-3 control-label frmlabel">* ID type</label>
							<div class="col-sm-9">
								<select id="inputidtype3" class="form-control" placeholder="" required>
									<option value="" selected>select</option>							
									<option value="nationalid">National id</option>
									<option value="passport">Passport</option>
									<option value="other">Other</option>
								</select>					
							</div>
						</div>
						<div class="form-group">
							<label for="inputidno3" class="col-sm-3 control-label frmlabel">* ID number</label>
							<div class="col-sm-9">
								<input class="form-control" id="inputidno3" placeholder="" required>
							</div>
						</div>
						<div class="form-group">
							<label for="inputctryissue3" class="col-sm-3 control-label frmlabel">Country of Issue</label>
							<div class="col-sm-9">
								<select id="inputctryissue3" class="form-control" placeholder="" >
									<option value="" selected>select</option>							
									<option value="Cyprus">Cyprus</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="Russia">Russia</option>
									<option value="China">China</option>
									<option value="Germany">Germany</option>
								</select>					
							</div>
						</div>
						<div class="form-group">
							<label for="inputexpirydate3" class="col-sm-3 control-label frmlabel">* Expiry date</label>
							<div class="col-sm-9">
								<input class="form-control" id="inputexpirydate3" placeholder="dd/mm/yyyy" required>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-3 col-sm-3">
							  <button id="btn4" type="submit" class="btn btn-default" >Save & Continue</button>
							</div>
							<div class="col-sm-3">
		<!--					  <button id="btn2" type="submit" class="btn btn-default" >Save for later</button>-->
							</div>
							<div class="col-sm-3">
							  <button id="btn5" onclick="window.location.href = 'index.html'" class="btn btn-default" >Cancel</button>
							</div>
						</div>
					</div>
				</form>
			</div><!-- /.row -->
		</div>
	</section><!-- /.section openacct2-->
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("form4");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());

</script>
	<section id="openacct3" class="section openacct acctform lightgray" style="display: none;">
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-12 text-center"><h2>3. Employment</h2></div>
				<div class="col-xs-12 text-center"><hr/></div>
				<div class="col-xs-12 col-md-11">
					<form id="form5" class="form-horizontal" >
						<div class="form-group">
							<label for="inputempstatus3" class="col-sm-3 control-label frmlabel">* Employment Status</label>
							<div class="col-sm-9">
								<select id="inputempstatus3" class="form-control" placeholder="" required>
									<option value="employed" selected>Employed</option>							
									<option value="selfemployed">Self-employed</option>
									<option value="retired">Retired</option>
									<option value="notworking">Not working</option>
								</select>					
							</div>
						</div>
						<div class="form-group">
							<label for="inputoccupation3" class="col-sm-3 control-label frmlabel">* Occupation</label>
							<div class="col-sm-9">
								<input class="form-control" id="inputoccupation3" placeholder="" required>
							</div>
						</div>
						<div class="form-group">
							<label for="inputemployer3" class="col-sm-3 control-label frmlabel">* Employer</label>
							<div class="col-sm-9">
								<input class="form-control" id="inputemployer3" placeholder="" required>
							</div>
						</div>

						<div class="col-xs-12 text-center"><hr/></div>
						<div class="col-xs-12 text-center"><p>Please enter your employer's/your business/your former employer's address</p></div>
						<div class="col-xs-12 text-center"><hr/></div>
						<div class="col-xs-12 text-center">

							<div class="form-group">
								<label for="inputempaddr1" class="col-sm-3 control-label frmlabel">address line 1</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputempaddr1" placeholder="" >
								</div>
							</div>
							
							<div class="form-group">
								<label for="inputempaddr2" class="col-sm-3 control-label frmlabel">address line 2</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputempaddr2" placeholder="" >
								</div>
							</div>
						
							<div class="form-group">
								<label for="inputempaddr3" class="col-sm-3 control-label frmlabel">address line 3</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputempaddr3" placeholder="" >
								</div>
							</div>
						
							<div class="form-group">
								<label for="inputempaddr4" class="col-sm-3 control-label frmlabel">address line 4</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputempaddr4" placeholder="" >
								</div>
							</div>
						
							<div class="form-group">
								<label for="inputempaddr5" class="col-sm-3 control-label frmlabel">address line 5</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputempaddr5" placeholder="" >
								</div>
							</div>

							<div class="form-group">
								<label for="inputemppostcode3" class="col-sm-3 control-label frmlabel">Post Code</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputemppostcode3" placeholder="" >
								</div>
							</div>
							<div class="form-group">
								<label for="inputempctry3" class="col-sm-3 control-label frmlabel">* Country</label>
								<div class="col-sm-9">
									<select id="inputempctry3" class="form-control" placeholder="" required>
										<option value="" selected>select</option>							
										<option value="Cyprus">Cyprus</option>
										<option value="United Kingdom">United Kingdom</option>
										<option value="Russia">Russia</option>
										<option value="China">China</option>
										<option value="Germany">Germany</option>
									</select>					
								</div>
							</div>
							<div class="form-group">
								<label for="inputsalarycurr3" class="col-sm-3 control-label frmlabel">* Salary currency</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputsalarycurr3" placeholder="" required>
								</div>
							</div>
							<div class="form-group">
								<label for="inputsalary3" class="col-sm-3 control-label frmlabel">* Salary</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputsalary3" placeholder="" required>
								</div>
							</div>
							<div class="form-group">
								<label for="inputbonuscurr3" class="col-sm-3 control-label frmlabel">Bonus currency</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputbonuscurr3" placeholder="" >
								</div>
							</div>
							<div class="form-group">
								<label for="inputbonus3" class="col-sm-3 control-label frmlabel">Bonus</label>
								<div class="col-sm-9">
									<input class="form-control" id="inputbonus3" placeholder="" >
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-3 col-sm-3">
								  <button id="btn6" type="submit" class="btn btn-default" >Save & Continue</button>
								</div>
								<div class="col-sm-3">
			<!--					  <button id="btn2" type="submit" class="btn btn-default" >Save for later</button>-->
								</div>
								<div class="col-sm-3">
								  <button id="btn7" onclick="window.location.href = 'index.html'" class="btn btn-default" >Cancel</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div><!-- /.row -->
		</div>
	</section><!-- /.section openacct3-->
				
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("form5");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());

</script>

	<section id="openacct4" class="section openacct acctform lightgray" style="display: none;">
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-12 text-center"><h2>4. Taxation</h2></div>
				<div class="col-xs-12 text-center"><hr/></div>
				<div class="col-xs-12 col-md-11">
					<form id="form6" class="form-horizontal" >
						<div class="form-group">
							<label for="inputtaxctry3" class="col-sm-3 control-label frmlabel">* Country for tax purposes</label>
							<div class="col-sm-9">
								<select id="inputtaxctry3" class="form-control" placeholder="" required>
									<option value="" selected>select</option>							
									<option value="Cyprus">Cyprus</option>
									<option value="United Kingdom">United Kingdom</option>
									<option value="Russia">Russia</option>
									<option value="China">China</option>
									<option value="Germany">Germany</option>
								</select>					
							</div>
						</div>
						<div class="form-group">
							<label for="inputtaxref3" class="col-sm-3 control-label frmlabel">* Tax reference number</label>
							<div class="col-sm-9">
								<input class="form-control" id="inputtaxref3" placeholder="" required>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-3 col-sm-3">
							  <button id="btn6" type="submit" class="btn btn-default" >Save & Continue</button>
							</div>
							<div class="col-sm-3">
		<!--					  <button id="btn2" type="submit" class="btn btn-default" >Save for later</button>-->
							</div>
							<div class="col-sm-3">
							  <button id="btn7" onclick="window.location.href = 'index.html'" class="btn btn-default" >Cancel</button>
							</div>
						</div>
					</form>
				</div>
			</div><!-- /.row -->
		</div>
	</section><!-- /.section openacct4-->
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("form6");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());
</script>	

	<section id="openacct5" class="section openacct acctform lightgray" style="display: none;">
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-12 text-center"><h2>5. Document uploads</h2></div>
				<div class="col-xs-12 text-center"><hr/></div>
				<div class="col-xs-12 col-md-11">
					<form id="form7" class="form-horizontal" >
						<div class="form-group">
							<label for="inputfiledesc3" class="col-sm-3 control-label frmlabel">* Description of document</label>
							<div class="col-sm-9">
								<select id="inputfiledesc3" class="form-control" placeholder="" required>
									<option value="" selected>select</option>							
									<option value="National ID">National ID</option>
									<option value="Passport">Passport</option>
									<option value="Utility bill">Utility bill</option>
									<option value="Other">Other</option>
								</select>					
							</div>
						</div>
						<div class="form-group">
							<label for="inputfile1" class="col-sm-3 control-label frmlabel">Select a file to upload </label>
							<input type="file" id="inputfile1" name="inputfile1" class="col-sm-5 custom-file-input">
							<button id="btn8" type="submit" class="col-sm-3 btn btn-default" >Upload file</button>
						</div>
						<center><div id="spinner" style="display: none;">
							<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i> 
							<span class="sr-only"> </span>
							<br>Please wait while data loads
							</div>
						</center>
					</form>
					<div class="form-group" style="padding-top: 100px;">
						<div class="col-sm-offset-3 col-sm-3">
						  <button id="btn8" class="btn btn-default" onclick="finishedUploading();" >Finish</button>
						</div>
						<div class="col-sm-3">
	<!--					  <button id="btn2" type="submit" class="btn btn-default" >Save for later</button>-->
						</div>
						<div class="col-sm-3">
						  <button id="btn9" onclick="window.location.href = 'index.html'" class="btn btn-default" >Cancel</button>
						</div>
					</div>
				</div>
			</div><!-- /.row -->
		</div>
	</section><!-- /.section openacct5-->
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("form7");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());
</script>

	<section id="openacct6" class="section openacct acctform lightgray" style="display: none;">
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-12 text-center"><h2>6. Review and Submit Application</h2></div>
				<div class="col-xs-12 text-center"><hr/></div>
			</div>
			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-1"><span class="black">Title: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="Title3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">First name: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="Fname3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Middle name: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="Mname3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Last name: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="Lname3"></span></div>
				<div class="col-xs-12 col-md-2"></div></br></br>
			</div><!-- /.row -->
			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-1"><span class="black">Gender: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="Gender3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Date of birth: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="DOB3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Country of birth: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="CtryBirth3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Town of birth: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="TownBirth3"></span></div>
				<div class="col-xs-12 col-md-2"></div></br></br>
			</div><!-- /.row -->
			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-1"><span class="black">Nationality: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="Nationality3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Dual nationality: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="DualNationality3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Country of residence: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="CtryResidence3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Language: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="CorrLanguage3"></span></div>
				<div class="col-xs-12 col-md-2"></div>
			</div><!-- /.row -->
			<div class="col-xs-12"><hr/></div>
			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-4"><span class="black">Residential address: </span></div>
				<div class="col-xs-12 col-md-4"><span class="black">Corresponce address: </span></div>
				<div class="col-xs-12 col-md-2"></div>
			</div><!-- /.row -->
			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-4"><span class="darkgray" id="resaddr"></span></div>
				<div class="col-xs-12 col-md-3"><span class="darkgray" id="coraddr"></span></div>
				<div class="col-xs-12 col-md-2"></div>
			</div><!-- /.row -->
			<div class="col-xs-12"><hr/></div>
			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-1"><span class="black">Telephone: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="telephone3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Mobile: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="mobile3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Fax: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="fax3"></span></div>
				<div class="col-xs-12 col-md-4"></div>
			</div><!-- /.row -->
			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-1"><span class="black">ID Type: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="idtype3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">ID Number: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="idno3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Country of<br>issue: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="ctryissue3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Expiry date: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="expirydate3"></span></div>
				<div class="col-xs-12 col-md-2"></div>
			</div><!-- /.row -->
			<div class="col-xs-12"><hr/></div>
<!--			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-4"><span class="black">Employment address: </span></div>
				<div class="col-xs-12 col-md-4"></div>
				<div class="col-xs-12 col-md-2"></div>
			</div><!-- /.row -->
			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-4">
					<span class="black">Employment address: </span><br>
					<span class="darkgray" id="empaddr"></span>
				</div>
				<div class="col-xs-12 col-md-4">
					<div class="col-xs-12 col-md-6"><span class="black">Employment status: </span></div>
					<div class="col-xs-12 col-md-6"><span class="darkgray" id="empstatus3"></span></div>
					<div class="col-xs-12 col-md-6"><span class="black">Occupation: </span></div>
					<div class="col-xs-12 col-md-6"><span class="darkgray" id="occupation3"></span></div>
					<div class="col-xs-12 col-md-6"><span class="black">Employer: </span></div>
					<div class="col-xs-12 col-md-6"><span class="darkgray" id="employer3"></span></div>
					<div class="col-xs-12 col-md-6"><span class="black">Country: </span></div>
					<div class="col-xs-12 col-md-6"><span class="darkgray" id="empctry3"></span></div>
					<div class="col-xs-12 col-md-6"><span class="black">Salary: </span></div>
					<div class="col-xs-12 col-md-6"><span class="darkgray" id="salarycurr3"></span> <span class="darkgray" id="salary3"></span></div>
					<div class="col-xs-12 col-md-6"><span class="black">Bonus: </span></div>
					<div class="col-xs-12 col-md-6"><span class="darkgray" id="bonuscurr3"></span> <span class="darkgray" id="bonus3"></span></div>
				</div>
				<div class="col-xs-12 col-md-2"></div>
			</div><!-- /.row -->
			<div class="col-xs-12 text-center"><hr/></div>
			<div class="row text-left">
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-2"><span class="black">Country for tax purposes: </span></div>
				<div class="col-xs-12 col-md-2"><span class="darkgray" id="taxctry3"></span></div>
				<div class="col-xs-12 col-md-1"><span class="black">Tax reference: </span></div>
				<div class="col-xs-12 col-md-1"><span class="darkgray" id="taxref3"></span></div>
				<div class="col-xs-12 col-md-4"></div>
			</div><!-- /.row -->
			<div class="row">
				<div class="form-group" style="padding-top: 100px;">
					<div class="col-sm-offset-3 col-sm-3">
					  <button id="btn8" class="btn btn-default" onclick="submitApplication();" >Submit Application</button>
					</div>
					<div class="col-sm-3"></div>
					<div class="col-sm-3">
					  <button id="btn9" onclick="window.location.href = 'index.html'" class="btn btn-default" >Cancel</button>
					</div>
				</div>
			</div>
		</div>
	</section><!-- /.section openacct6-->
<!--
		document.getElementById('taxctry3').innerHTML = acctdata["robo_taxctry"];
		document.getElementById('taxref3').innerHTML = acctdata["robo_taxref"];
-->	
				
				
	<div id="livezilla_tracking" style="display:none"></div>
 
<div id="footer"></div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="./js/jquery-3.2.1.js"></script>
    <script src="./js/jquery-ui.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/gp.js"></script>
    <script src="./js/gpcustom.js"></script>
<!--   <script src="./js/fusioncharts.js"></script> -->
	

	</body>
</html>
