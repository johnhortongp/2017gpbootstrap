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
				<li><a href="/2017gpbootstrap/">Home</a></li>
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
				<li class="active"><a href="contact">Contact</a</li>
				<li><a href="eventregistration">Event registration</a></li>
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
	
	<section id="contactpage" class="section lightgray" style="padding-top: 50px;">
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-0 col-md-1"></div>
				<div class="col-xs-11 col-md-5">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8230496296583!2d33.04961621523171!3d34.68441518043865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7817e2a817b20dd!2sGoalTech+Ltd!5e0!3m2!1sen!2sus!4v1510821316630" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
				</div>
				<div class="col-xs-1  col-md-1"></div>
				<div class="col-xs-10 col-xs-offset-1 col-md-5">
						<div class="form-group">
							<label for="fullname">Full Name</label>
							<input id="fullname" class="form-control" placeholder="Full name" value="" required type="text">
						</div>
						<div class="form-group">
							<label for="youremail">Your Email address</label>
							<input id="youremail" class="form-control" placeholder="Email address" value="" required type="email">
						</div>
						<div class="form-group">
							<label for="subject">Subject</label>
							<input id="subject" class="form-control" placeholder="Subject" value="" required type="text">
						</div>
						<div class="form-group">
						  <label for="message">Message</label>
							<textarea id="message" class="form-control" rows="5" placeholder="Your message" required></textarea>
						</div>

						<div class="g-recaptcha" data-sitekey="6Let2jgUAAAAAHUXgmntPySL1VZrJo1u_Bickqyb"></div>

						<div class="relative fullwidth col-xs-12" style="text-align: center; padding-top: 20px;">
							<!-- Send Button -->
							<button class="btn btn-success btn-lg" onclick="submitContactForm();">Send</button>
							<div id="msgSubmit" class="h3 text-center gold hidden">Your message has been sent. Thanks!</div>
						</div><!-- End Bottom Submit -->
						<!-- Clear -->
						<div class="clear"></div>
						</div>
			</div><!-- /.row -->
			<div class="row" style="text-align: left">
				<div class="col-xs-1"></div>
				<div class="col-xs-5">
					<p><b>Address:</b></p>
					<p>137 Gladstone str<br>
					Taitou Court #303<br>
					3032 Limassol, CYPRUS</p>
					<p>Tel. +357 25 820 541<br>
					Fax. +357 25 745743</p>
					<div class="col-xs-1"></div>
					<div class="col-xs-5"></div>
				</div>
			</div>
		</div><!-- /. -->

	</section><!-- /.section getstarted-->

	<section class="col-xs-6">
	</section>	

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

	</body>
</html>
