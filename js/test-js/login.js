$(document).ready(function () {
    $("#login").click(function () {
        console.log("clicking");

        var emailInput = $("#emailInput").val();
        var passwordInput = $("#passwordInput").val();


        // var body = {
        //     "email": emailInput,
        //     "password": passwordInput
        // };


        // console.log("", body);


        $.get('http://localhost:3000/users', function (data, status) {
            // alert("Data: " + data + "\nStatus: " + status);
            console.log("data", data);
            for (i = 0; i < data.length; i++) {
                if (emailInput === data[i].email && passwordInput === data[i].password) {
                    location.href = "file:///C:/Users/Admin/Desktop/Fesco/index.html"
                } else {
                    alert("wrong email and psw")
                }
            }

            // location.href = "file:///C:/Users/Admin/Desktop/Fesco/index.html"
        });
    });
})