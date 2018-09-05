//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/jquery.countdown/jquery.countdown.js

    //Timer
    var fiveSeconds = new Date().getTime() + 15500000;
    $('#timer').countdown(fiveSeconds, {elapse: true})
    .on('update.countdown', function(event) {
        var $this = $(this);
        if (event.elapsed) {
            $this.html(
            window.open('index.html', '_self')
        );
        } else {
            $this.html(event.strftime('%H:%M:%S'));
        }
    });

$(document).ready(function() {


    //Form
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form").trigger("reset");
        });
        return false;
    });
});