$(document).ready(function () {
    $('form').submit(function(e){
        e.preventDefault();
        let name = $('#firstName').val();
        let lastname = $('#lastName').val()
        let address = $('#address').val();
        let city = $('#city').val()
        let country = $('#country').val();
        let phoneNumber = $('#phoneNum').val()
        let email = $('#email').val();
        let password = $('#password').val()



        $.post('https://drs-project-back.onrender.com/sign-up', $('form').serialize(),
                        function (data, status) {
                            if (JSON.stringify(data) === "true") {
                                alert("Korisnik uspesno registrovan!")
                                window.location.href = '/';
                            }
                            else {
                                alert('Korisnik vec postoji!')
                            }
                        });
    });

});