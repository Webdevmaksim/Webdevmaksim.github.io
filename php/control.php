<?php

$controlName = $_POST['controlName'];
$controlEmail = $_POST['controlEmail'];
$controlPhone = $_POST['controlPhone'];

// Load Composer's autoloader
require '../php/PHPMailer.php';
require '../php/SMTP.php';
require '../php/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 1;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'thereisnotomorrow1292@gmail.com';                     // SMTP username
    $mail->Password   = 'PuDF7pNf4';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('thereisnotomorrow1292@gmail.com');
    $mail->addAddress('html-url@yandex.by');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${controlName}, его телефон: ${controlPhone}";

    $mail->send();
    header('Location: ../html-templates/thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}