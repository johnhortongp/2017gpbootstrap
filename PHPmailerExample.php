
<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/Exception.php';
require 'php/PHPMailer.php';
require 'php/SMTP.php';

//Load composer's autoloader
//require 'vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.goalportfolios.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'event@goalportfolios.com';         // SMTP username
    $mail->Password = 'ABcde12345';                       // SMTP password
//    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 26;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('john.horton@goaltech.net', 'Mailer');
    $mail->addAddress('john_horton54@outlook.com', 'John Horton');     // Add a recipient
//    $mail->addAddress('john_horton54@outlook.com');               // Name is optional
    $mail->addReplyTo('john.horton@goaltech.net', 'Information');
//    $mail->addCC('cc@example.com');
//    $mail->addBCC('bcc@example.com');

    //Attachments
//    $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>