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
				<li class="dropdown active">
					<a href="#" data-toggle="dropdown" class="active dropdown-toggle">About Us <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li class="active"><a href="about">Goal Portfolios</a></li>
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
				<li><a href="contact">Contact Us</a</li>
				<li><a href="eventregistration">Event registration</a></li>
				<li class="dropdown">
					<a href="#" data-toggle="dropdown" class="dropdown-toggle">My Account<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="getstarted">Register/Login</a></li>
							<li><a href="openacct">Open an Account</a></li>
							<li class="active"><a href="invest">Invest</a></li>
							<li><a href="questionaire">Questionnaire</a></li>
						</ul>
				</li>

			</ul>

        </div><!--/.nav-collapse -->
      </div>
    </nav>

	<div class="lightgray" style="min-height: 600px;">
		<section id="invest" class="section">
			<div class="container-fluid fullscreen ">
				<div class="row">
					<div class="col-xs-12 col-md-12 text-center">
						<h2>Plan your investment</h2>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-12 text-center">
						<div class="col-xs-12 col-md-12 form-group">
							<label for="invcurr" class="col-xs-3 col-sm-2 control-label frmlabel">Investment Currency</label>
							<div class="col-xs-3 col-sm-2">
								<select id="invcurr" class="form-control" required>
									<option value="EUR" selected>EUR</option>
									<option value="GBP">GBP</option>
									<option value="USD">USD</option>
								</select>
							</div>
							<label for="invamt" class="col-xs-3 col-sm-2 control-label frmlabel">Investment Amount</label>
							<div class="col-xs-3 col-sm-1">
								<input class="form-control bfh-number" id="invamt" value="0" placeholder="" required>
							</div>
							<div class="col-xs-3 col-sm-1">&nbsp;</div>
							<div class="col-xs-3 col-sm-1">Allocated %&nbsp;</div>
							<div id="totperc" class="col-xs-3 col-sm-1">0</div>
							<div class="col-xs-3 col-sm-1">Amount&nbsp;</div>
							<div id="totamt" class="col-xs-3 col-sm-1">0</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-md-12 text-center">
						<div class="container">
							<table id="investTable" class="table order-list">
										<div class="col-xs-12 col-sm-3">Asset Name</div>
										<div class="col-xs-2 col-sm-1">Risk Level</div>
										<div class="col-xs-2 col-sm-1">Fund Type</div>
										<div class="col-xs-2 col-sm-1">Minimum Investment</div>
										<div class="col-xs-2 col-sm-1">Percentage</div>
										<div class="col-xs-2 col-sm-1">Indicative amount</div>
										<div class="col-xs-2 col-sm-1"></div>
										<div class="col-xs-0 col-sm-1">KIID</div>
										<div class="col-xs-0 col-sm-1">Fact Sheet</div>
									<tr>
									<div class="row">
										<div class="col-xs-12 col-md-12 text-center">										
										<div>
											<input id="fundid0" name="fundid0" type="hidden" value=""/>
										</div>
										<div class="col-xs-12 col-sm-3" style="padding-bottom: 5px;">
											<select data-row="0" id="fundname0" name="fundname0" class="form-control" placeholder="select" required></select>
										</div>
										<div class="col-xs-2 col-sm-1">
											<input type="text" id="riskrate0" name="riskrate0"  class="form-control"  disabled />
										</div>
										<div class="col-xs-2 col-sm-1">
											<input type="text" id="fundtype0" name="fundtype0"  class="form-control"  disabled />
										</div>
										<div class="col-xs-2 col-sm-1">
											<input type="text" id="mininvest0" name="mininvest0"  class="form-control" disabled />
										</div>
										<div class="col-xs-2 col-sm-1">
											<input type="text" data-row="0" id="perc0" name="perc0"  class="form-control" disabled placeholder="%"/>
										</div>
										<div class="col-xs-2 col-sm-1">
											<input type="text" id="indamt0" name="indamt0"  class="form-control" disabled />
										</div>
										<div class="col-xs-2 col-sm-1">
										</div >
										<div class="col-xs-4 col-sm-1">
											<a id="kiid0" href="" target="_blank" style="display: none"><i class="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></a>
										</div>
										<div class="col-xs-4 col-sm-1">
											<a id="fsheet0" href="" target="_blank" style="display: none"><i class="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></a>
										</div>
									</tr>
							</table>
							<div colspan="5" style="text-align: left;">
								<input type="button" class="btn btn-lg btn-block " id="addrow" value="Add Row" />
							</div>
						</div>
					</div>
					<div id="sendinvestment" class="row" style="display: none">
						<div class="col-xs-12 col-sm-2"></div>
						<div class="col-xs-12 col-sm-8" style="padding-top: 50px; padding-bottom: 50px;">
							<center>
							<button onclick="sendInvestment();" style="background: brown; font-size: 18px; text-align: center; padding-left: 30px;">
							<span style="color: #ffffff;">Submit your Investment</span></button>
							</center>
							<h3>What happens next?</h3>
							<p>Your investment request will be reviewed, and once approved, you will be informed and given details on how to transfer the required funds.
						</div>
						<div class="col-xs-12 col-sm-2"></div>
					</div>
				</div>

		</section><!-- /.section -->
	</div>

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
