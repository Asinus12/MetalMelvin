<?php



$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


$email_from = "metalmelvin.com";
$email_subject = " New From Submisson"; 

$email_body = "User name: $name. \n" .
              "User email: $email. \n".
              "User message: $message. \n";

$to = "b.bogataj23@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-to: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: index.html");












?>