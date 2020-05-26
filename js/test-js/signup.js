$(document).ready(function () {
    $("#singup").click(function () {
        console.log("clicking");

        var nameInput = $("#nameInput").val();
        var lastnameInput = $("#lastnameInput").val();
        var emailInput = $("#emailInput").val();
        var passwordInput = $("#passwordInput").val();
        var repeatpasswordInput = $("#repeatpasswordInput").val();

        var body = {
            "name": nameInput,
            "lastname": lastnameInput,
            "email": emailInput,
            "password": passwordInput
        };

        console.log("", body);

        $.post('http://localhost:3000/users', body, function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);


        });
    })
})