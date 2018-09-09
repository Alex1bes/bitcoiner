<?php

$recepient = "alexbesinfo@gmail.com, 9898584868z@gmail.com";
$sitename = "bitcoiner";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$number = trim($_POST["number"]);
$address = trim($_POST["address"]);
$message = "
    Имя: $name \n
    Телефон: $phone \n
    Монет: $number \n
    Адрес доставки: $address
    ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");