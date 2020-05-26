$(document).ready(function () {

    var datas = [];
    console.log("test")
    $.get("http://localhost:3000/posts", function (data, status) {
        // console.log("data", data);
        var html = "";
        datas = data;
        console.log(datas);

        for (i = 0; i < datas.length; i++) {
            html += "<div class='column'><div class='black-column'></div><div class='column-white'>" +
                "'<p class='lasagna'>" + datas[i].title + " ............... " + datas[i].price + "</p></div></div>";
        }
        $("#listFood").append(html);

    });

    var datass = [];
    console.log("test")
    $.get("http://localhost:3000/comments", function (data, status) {
        // console.log("data", data);
        var food = "";
        datass = data;
        console.log(datass);

        for (j = 0; j < datass.length; j++) {

            food += '<div class="our-menu-item"><div class="our-menu-item-desc"><h2 class="our-menu-item-title"> ' +
                datass[j].title + '</h2><p class="our-menu-item-p">' + datass[j].description + '</p>' +
                '</div><div class="our-menu-item-price"><span class="pricing">' + datass[j].price +
                '</span></div></div>'
        }
        $("#listFood-2").append(food);

    });
    var comments2 = [];
    console.log("test")
    $.get("http://localhost:3000/comments-2", function (data, status) {
        // console.log("data", data);
        var food1 = "";
        comments2 = data;
        console.log(comments2);

        for (z = 0; z < comments2.length; z++) {

            food1 += '<div class="our-menu-item"><div class="our-menu-item-desc"><h2 class="our-menu-item-title"> ' +
                comments2[z].title + '</h2><p class="our-menu-item-p">' + comments2[z].description + '</p>' +
                '</div><div class="our-menu-item-price"><span class="pricing">' + comments2[z].price +
                '</span></div></div>'
        }
        $("#listFood-3").append(food1);

    });

    var comments3 = [];
    console.log("test")
    $.get("http://localhost:3000/comments-3", function (data, status) {
        // console.log("data", data);
        var food2 = "";
        comments3 = data;
        console.log(comments3);

        for (y = 0; y < comments3.length; y++) {

            food2 += '<div class="our-menu-item"><div class="our-menu-item-desc"><h2 class="our-menu-item-title"> ' +
                comments3[y].title + '</h2><p class="our-menu-item-p">' + comments3[y].description + '</p>' +
                '</div><div class="our-menu-item-price"><span class="pricing">' + comments3[y].price +
                '</span></div></div>'
        }
        $("#listFood-4").append(food2);

    });
    var comments4 = [];
    console.log("test")
    $.get("http://localhost:3000/comments-4", function (data, status) {
        // console.log("data", data);
        var food3 = "";
        comments4 = data;
        console.log(comments4);

        for (a = 0; a < comments4.length; a++) {

            food3 += '<div class="our-menu-item"><div class="our-menu-item-desc"><h2 class="our-menu-item-title"> ' +
                comments4[a].title + '</h2><p class="our-menu-item-p">' + comments4[a].description + '</p>' +
                '</div><div class="our-menu-item-price"><span class="pricing">' + comments4[a].price +
                '</span></div></div>'
        }
        $("#listFood-5").append(food3);

    });
    var comments4 = [];
    console.log("test")
    $.get("http://localhost:3000/comments-4", function (data, status) {
        // console.log("data", data);
        var food3 = "";
        comments4 = data;
        console.log(comments4);
        for (a = 0; a < comments4.length; a++) {

            food3 += '<div class="our-menu-item"><div class="our-menu-item-desc"><h2 class="our-menu-item-title"> ' +
                comments4[a].title + '</h2><p class="our-menu-item-p">' + comments4[a].description + '</p>' +
                '</div><div class="our-menu-item-price"><span class="pricing">' + comments4[a].price +
                '</span></div></div>'
        }

        $(document).ajaxSend(function (opt) {
            $("#listFood-5").append("<p> " + food3 + "</p>");
        });
        $(document).ajaxSend(function (opt) {
            $("#listFood-4").append("<p> " + food3 + "</p>");
        });

        $("#button-1").click(function () {
            $("div").load("demo_ajax_load.asp");

        });


    });


    $("#button-2").click(function () {
        console.log("clicking");

        var dateInput = $("#dateInput").val();
        var timeInput = $("#timeInput").val();
        var peopleInput = $("#peopleInput").val();

        var body = {

            "date": dateInput,
            "time": timeInput,
            "people": peopleInput

        };
        console.log(body);

        $.post('http://localhost:3000/comments-5', body, function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    })




    function save() {
        var fieldvalue = document.getElementById('address').value;
        localStorage.setItem('section4-column', fieldvalue);
    }

    $(document).ready(function () {
        $('.dropdown ').on("click", function (e) {
            $(".dropdown-menu").slideToggle(500);
            e.stopPropagation();
            e.preventDefault();
        });
    });

})