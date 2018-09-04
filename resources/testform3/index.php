<html>
<head>
<meta charset="utf-8"/>
</head>
<body>

<form action="" id="form">
<input name="email" placeholder="Email" data-validation="email" data-validation-error-msg="Введите верный Email!"><br>
<input name="name" placeholder="Имя" data-validation="length" data-validation-length="min2" data-validation-error-msg="Слишком короткое имя! Нужно от 2-х символов!"><br>
<input name="phone" placeholder="Телефон" type="number" data-validation="number" data-validation-error-msg="Допустимы только цифры!"><br>
<textarea name="message" placeholder="Сообщение" data-validation="length" data-validation-length="min10" data-validation-error-msg="Сообщение должно быть длинее 10 символов!"></textarea><br>
<input type="button" value="Отправить сообщение">
</form>
<div class='result'></div>

<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
<script>window.JQuery || document.write('<script src="js/jquery-3.1.1.min.js"><\/script>');</script>
<script src='js/jquery.form-validator.min.js'></script>
<script src='js/script.js'></script>

</body>
</html>