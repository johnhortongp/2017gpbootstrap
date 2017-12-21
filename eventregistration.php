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

	<script src='https://www.google.com/recaptcha/api.js'></script>

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
				<li class="active"><a href="eventregistration">Event registration</a></li>
				<li class="dropdown">
					<a href="#" data-toggle="dropdown" class="dropdown-toggle">My Account<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="getstarted">Register/Login</a></li>
							<li><a href="openacct">Open an Account</a></li>
							<li><a href="invest">Invest</a></li>
							<li><a href="questionaire">Questionnaire</a></li>
						</ul>
				</li>
			</ul>

        </div><!--/.nav-collapse -->
      </div>
    </nav>
	
	<div>
	<section id="eventregistration" class="section lightgray">
		<div class="container-fluid fullscreen ">
			<div class="row">
			<div><img src="images/registration_image.png" width="100%"></div>
			<div class="row">
				<div class="col-xs-12 col-md-12 text-center">
					<div class="col-xs-12 col-md-2"></div>
					<div class="col-xs-12 col-md-8 text-left" style="padding-top: 40px; text-align: justify;">
					<p>The savings/investments of Cypriot companies and individuals were severely affected in recent times due to the banking crisis of 2013, the substantial drop in deposit rates as well as a fall in real estate values after the burst of the real estate bubble. In global markets, we are also experiencing a situation of unprecedented very low (even negative) long-term nominal interest rates and a persistent flat yield curve. If you combine the fact that other savings/investment opportunities in the Cyprus market are limited (an extremely illiquid local capital market), there is legitimate fear by many that the new financial and market environment will have longer-term implications to both savers and insurers in terms of capacity to deliver guarantees, return and liquidity.</p>  
					<p>The aim of this conference is to analyse the economic and financial environment in the local and global markets, the risks posed for future savings/investments, but also provide modern, alternative approaches in portfolio management that can better help meet investment and retirement goals. </p>
					<div class="col-xs-12 col-md-2"></div>
					</div>				
				</div>
			</div>
		</div>
	</section><!-- /.section -->

	<section id="eventreg" class="section lightgray" >
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-12 col-md-11 text-center" style="padding-bottom: 30px;"><h4>Please register</h4></div>
				<div class="col-xs-1 col-md-2"></div>
				<div class="col-xs-11 col-md-9">
					<div  class="form-horizontal">
					  <div class="form-group">
						<label for="evttitle" class="col-xs-4 col-sm-3 control-label frmlabel">Title</label>
						<div class="col-xs-7 col-md-2">
							<select id="evttitle" class="form-control" placeholder="select" >
								<option value="" selected>select</option>							
								<option value="mr">Mr</option>
								<option value="mrs">Mrs</option>
								<option value="ms">Ms</option>
							</select>					
						</div>
					  </div>
									  
					  <div class="form-group">
						<label for="evtfname" class="col-xs-4 col-sm-3 control-label frmlabel">* First Name</label>
						<div class="col-xs-7 col-md-4">
							<input class="form-control" id="evtfname" value="" placeholder="First name" required>
						</div>
					  </div>
					  
					  <div class="form-group">
						<label for="evtlname" class="col-xs-4 col-sm-3 control-label frmlabel">* Last Name</label>
						<div class="col-xs-7 col-md-4">
							<input class="form-control" id="evtlname" placeholder="Last name" required>
						</div>
					  </div>
					  
					  <div class="form-group">
						<label for="evtemail" class="col-xs-4 col-sm-3 control-label frmlabel">* Email</label>
						<div class="col-xs-7 col-md-4">
							<input class="form-control" id="evtemail" type="email" placeholder="Email address" required>
						</div>
					  </div>
					  
					  <div class="form-group">
						<label for="evtphone" class="col-xs-4 col-sm-3 control-label frmlabel">* Phone</label>
						<div class="col-xs-7 col-md-4">
							<input class="form-control" id="evtphone" placeholder="Phone number" required>
						</div>
					  </div>
					  
					  <div class="form-group">
						<label for="evtcompanyname" class="col-xs-4 col-sm-3 control-label frmlabel">Organisation</label>
						<div class="col-xs-7 col-md-4">
							<input class="form-control" id="evtcompanyname" placeholder="optional">
						</div>
					  </div>

					  <div class="form-group">
						<div class="col-sm-offset-3 col-sm-3">
					       <div class="g-recaptcha" data-sitekey="6Let2jgUAAAAAHUXgmntPySL1VZrJo1u_Bickqyb"></div>
						</div>
					  </div>
					  
					  <div class="form-group">
						<div class="col-sm-offset-3 col-sm-3">
							<button id="btn1" class="btn" onclick="saveEventRegForm();" style="background-color: black; color: #fff;">Register</button>
						</div>
					  </div>

				  </div>
				</div>
			</div><!-- /.row -->
			<div class="row">
				<div class="col-xs-12 col-md-12 text-center">
					<div class="col-xs-12 col-md-2"></div>
					<div class="col-xs-12 col-md-8 text-left" style="padding-top: 40px; text-align: justify;">
						<h3><u>Agenda:</u></h3>
						<div class="col-xs-12 col-md-2"></div>
						<div class="col-xs-12 col-md-8">
							<p>17:00 – 17:15  Registration</p>
							<p>17:20 – 17:30  Welcome Address by Marios Theocharides, Managing Director, Goal Portfolios.</p>
							<p>17:30 – 18:00 “The Global & Local Economic Outlook” Dr. George Theocharides, Director, Goal Portfolios.</p>
							<p>18:00 – 18:30 “New Trends in Portfolio Management” Sophocles Sophocleous, CFA</p>
							<p>18:30 – 19:00 “Old Mutual International - a leading cross border provider of wealth management solutions” by Ryan Perkins, Area Sales Manager</p>
							<p>19:00 – 19:15 “Goal Portfolios’ Offering” Marios Theocharides, Managing Director, Goal Portfolios.</p>
						</div>
						<div class="col-xs-12 col-md-2"></div>
						<div class="col-xs-12 col-md-12 text-center">
							<p>Following the conference there will be a networking/drinks event.</p>
							<p>For Reservations: www.goalportfolios.com or call +357 25 820 541</p>
							<p>The event is jointly organised by <b>Goal Portfolios</b>, a regulated insurance company offering<br> assurance products and <b>Old Mutual International</b>, an international wealth management company.</p>
							<br><br><i>The intelligent way to invest.</i>
						</div>
					</div>				
				</div>
			</div>
		</div>
	</section><!-- /.section openacct1-->
	
			
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
