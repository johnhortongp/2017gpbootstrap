<?php
error_reporting(E_ALL ^ E_NOTICE);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$EmailTo = "marios@goalportfolios.com";

$mail = new PHPMailer(true);							// Passing `true` enables exceptions
try {
    //Server settings
//    $mail->SMTPDebug = 2;								// Enable verbose debug output
    $mail->SMTPDebug = 0;								// Enable verbose debug output
    $mail->isSMTP();									// Set mailer to use SMTP
    $mail->Host = 'mail.goalportfolios.com';  			// Specify main and backup SMTP servers
    $mail->SMTPAuth = true;								// Enable SMTP authentication
    $mail->Username = 'event@goalportfolios.com';		// SMTP username
    $mail->Password = 'ABcde12345';						// SMTP password
//    $mail->SMTPSecure = 'ssl';						// Enable TLS encryption, `ssl` also accepted
    $mail->Port = 26;									// TCP port to connect to

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress($EmailTo, 'Goal Portfolios');     				// Add a recipient
    $mail->addReplyTo($email, $name);

    //Content
    $mail->isHTML(true);								// Set email format to HTML
    $mail->Subject = $subject;

	// prepare email body text
	$Body = "You have received the following message - "."<br>"."<br>";
	$Body .= "From: ".$name."<br>";
	$Body .= "Email: ".$email."<br>"."<br>";
	$Body .= "Message: ".str_replace (array("\r\n", "\n", "\r"), "<br>", $message)."<br>"."<br>";
	$Body .= "Sent from GoalPortfolios website "."<br>";

    $mail->Body    = $Body;
    $mail->AltBody = $Body;

    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}

?>