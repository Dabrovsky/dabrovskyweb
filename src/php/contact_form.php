<?php
  $name = trim($_POST['name']);
  $email = trim($_POST['email']);
  $message = trim($_POST['message']);
  $formcontent = "Imię: $name\nMail: $email\n\nWiadomość: $message";
  $recipient = "mail@dabrovskyweb.com";
  $subject = "Wiadomość ze strony dabrovskyweb.com";
  $header = "From: $email\r\n";
  $header.= "Content-Type: text/plain; charset=utf-8\r\n";
  mail($recipient, $subject, $formcontent, $header) or die("Error!");
?>
