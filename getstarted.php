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
	<link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet">
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
							<li class="active"><a href="getstarted">Register/Login</a></li>
							<li><a href="openacct">Open an Account</a></li>
							<li><a href="invest">Invest</a></li>
							<li><a href="questionaire">Questionnaire</a></li>
						</ul>
				</li>
			</ul>

        </div><!--/.nav-collapse -->
      </div>
    </nav>
	
	<section id="getstarted" class="section lightgray">
		<div class="container-fluid fullscreen">
			<div class="row">
				<div class="col-xs-12">

					<h2 style="text-align: center;"><strong>Getting started</strong></h2>
					<h3 style="text-align: center;"><strong>You're just a few steps away from joining the new wave of investors</strong></h3>
				</div>
				<div class="col-xs-12 col-md-2"></div>
				<div class="col-xs-12 col-md-3">
					<p>If you are an existing GoalPortfolios member please log in here:</p>
					<form id="loginform" name="leadform" onsubmit="return getlead()">    
						<div class="form-group">
							<label for="email">Email address</label>
							<input type="email" class="form-control" id="email" placeholder="Enter email" required="">
							<small id="emailHelp" class="form-text text-muted white">We'll never share your email with anyone else.</small>
						</div>
						<div class="form-group">
							<label for="pwd2">Password</label>
							<input type="password" class="form-control" id="pwd2" placeholder="Password" required="">
						</div>
						<div class="text-center">
						<button type="submit" class="btn btn-primary text-center">Login</button>
						</div>						
						<center><h3 id="notfound" style="color: white; margin-top: 10px;"></h3></center>				
					</form>
				</div>
				<div class="col-xs-12 col-md-1"></div>
				<div class="col-xs-12 col-md-3">
					<p>First time members, register here and then proceed to the questionaire:</p>
					<div id="regshort">
						<form id="regshortform" name="regshortform" onsubmit="return saveregshortform()">    
							<div class="form-group">
								<label for="first-name">First Name</label>
								<input id="first-name" class="form-control" placeholder="First name" value="" required="" type="text">
							</div>
							<div class="form-group">
								<label for="last-name">Last Name</label>
								<input id="last-name" class="form-control" placeholder="Last name" value="" required="" type="text">
							</div>
							<div class="form-group">
								<label for="regemail">E-Mail</label>
								<input id="regemail" class="form-control" placeholder="Email address" value="" required="" type="email">
							</div>
							<div class="form-group">
								<label for="regpassword">Password</label>
								<input id="regpassword" class="form-control" placeholder="Password" value="" required="" type="password">
							</div>
							<div class="text-center">
							<button type="submit" class="btn btn-primary text-center">Register</button>
							</div>
						</form>    
					</div>				
				</div>

			</div><!-- /.row -->
		</div><!-- /.container -->
	</section><!-- /.section getstarted-->

	
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
