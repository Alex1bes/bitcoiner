//= ../../node_modules/jquery/dist/jquery.min.js

$(document).ready(function() {
    //Form
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку!");
            $("#form").trigger("reset");
        });
        return false;
    });
});