<?php
error_reporting(E_ALL ^ E_NOTICE);

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
 
$EmailTo = "john.horton@goaltech.net";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:  ' . $name . ' <' . $email .'>' . "\r\n" .
            'Reply-To: '. $name . ' <' . $email .'>' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
			
// prepare email body text
$Body .= "You have received the following message - "."<br>"."<br>";

$Body .= "From: ".$name."<br>";
 
$Body .= "Email: ".$email."<br>"."<br>";
 
$Body .= "Message: ".$message."<br>"."<br>";
 
$Body .= "Sent from GoalPortfoios website "."<br>";

// send email
$success = mail($EmailTo, $subject, $Body, $headers);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}