<?php
if($_POST['name']  && $_POST['email'] && $_POST['phone']) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $message = 'На сайте profTehnoSit была создана заявка';
    $message .= '<br>Имя: '.$name;
    $message .= '<br>E-mail: '.$email;
    $message .= '<br>Телефон: '.$phone;


    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8"."\r\n";
    $headers .= "From: prof-sit@mail.ru<prof-sit@mail.ru>"."\r\n";

    mail('prof-sit@mail.ru', 'Заявка profTehnoSit', $message, $headers);
    mail('p.chebotarev@ariol.by', 'Заявка profTehnoSit', $message, $headers);

    echo json_encode(array('msg'=>'Ваша заявка отправлена'));
}