<html>
<head>
    <meta charset="utf-8"/>
</head>

<body>

    <form action="submit.php" id="form" method="GET">
    <input name="email" placeholder="Email" data-validation="email" data-validation-error-msg="Введите верный Email!"><br>
    <input name="name" placeholder="Имя" data-validation="length" data-validation-length="min2" data-validation-error-msg="Слишком короткое имя! Нужно от 2-х символов!"><br>
    <input type="button" value="Отправить сообщение">
    </form>

</body>
</html>