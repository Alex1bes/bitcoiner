<?php

$recepient = "alexbesinfo@gmail.com";
$sitename = "bitcoiner";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
// $text = trim($_POST["text"]);
$number = trim($_POST["number"]);
$message = "Имя: $name \nТелефон: $phone \nМонет: $number";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");