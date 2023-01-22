$(document).ready(function () {
    if (sessionStorage.getItem('current_user_id') === null){
        window.location.href = '/'
        alert('Korisnik nije ulogovan')
    }

    $.ajax({
        url:'https://drs-project-back.onrender.com/getUserCryptos',
        type:'GET',
        data: {
            'id': sessionStorage.getItem('current_user_id')
        },
        success: function(response) {
            var dynamicSelect = document.getElementById('cryptos');
            $.each(response, function(key, value){
                var newOption = document.createElement('option');
                newOption.text = value;
                dynamicSelect.appendChild(newOption);
            })
            
        }
    })

    $('#transform').submit(function(e) {
        e.preventDefault(e);

        $.ajax({
            url: 'https://drs-project-back.onrender.com/executeTransaction',
            data: $('form').serialize() + "&id=" + sessionStorage.getItem('current_user_id'),
            type: 'POST',
            success: function(response) {
                alert(response)
                document.getElementById('idReceiverEmail').value = ""
                document.getElementById('idValue').value = ""
            },
            error: function(x, y, z){
                alert(z);
            }
        })
    })
})