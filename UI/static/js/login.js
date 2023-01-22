$(document).ready(function () {

    $('form').submit(function(e){
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val()

        $.post('https://drs-project-back.onrender.com/login', $('form').serialize(),
                        function (data, status) {
                            if (data) {
                                alert("Korisnik uspesno prijavljen na sistem!")
                                sessionStorage.setItem('current_user_id', JSON.stringify(data))
                                window.location.href = '/';
                            }
                            else {
                                alert('Korisnik ne postoji!')
                            }
                        });
    });

});