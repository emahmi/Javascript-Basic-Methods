$(document).ready(function () {

    $("#hide").click(function () {
        $("div").hide();
    });

    $("#show").click(function () {
        $("div").show();
    });

    $("#append").click(function () {
        $("p").append("<b> append </b>");
    });

    $("#appendTo").click(function () {
        $("<b> appendTo </b>").appendTo("p");
    });

    $("#prepend").click(function () {
        $("p").prepend("<b> prepend </b>");
    });

    $("#prependTo").click(function () {
        $("<b> pretendTo </b>").prependTo("p");
    });

    $("#each").click(function () {
        $("p").each(function () {
            if ("p") {
                alert($(this).text())
            } else {
                return false;
            }
        });
    });

    $("#parent").click(function () {
        $("ul").parent().css({ "color": "green", "border": "2px solid green" });
    });

    $("#children").click(function () {
        $("ol").children().css({ "color": "red", "border": "2px solid red" });
    });

    $("#closest").click(function () {
        $("li").closest("ul").css({ "color": "blue", "border": "2px solid blue" });
    });

    $("#dimensions").click(function () {
        var msg1 = "";
        var msg2 = "";
        msg1 += "Width of div: " + $("img").width();
        msg2 += "Height of div: " + $("img").height();
        alert(msg1 + "\n" + msg2 );
    }); 

    $("#attr").click(function () {
        $("img").attr("height", "200px");
    });

    $("#setdata").click(function () {
        $("#data").data("data message", "Hello World");
        alert("Data has been set. Press Get data button!");
    });

    $("#getdata").click(function () {
        alert($("#data").data("data message"));
    });

    $("#map").click(function () {
        var items = [1, 2, 3, 4, 5];
        $("#span1").append("MapArray : " + items + "<br/>");
        var newItems = $.map(items, function (i) {
            return i * 5;
        });
        $("#span2").append("5 * MapArray : " + newItems + "<br/><br/>");
    });

    $("#grep").click(function () {
        var items = [1, 2, 3, 4, 5];
        $("#span3").append("GrepArray : " + items + "<br/>");
        var newItems = $.grep(items, function (i) {
            return i > 3;
        });
        $("#span4").append("Greater than 3 in GrepArray : " + newItems + "<br/><br/>");
    });

    $("#load").click(function () {
        $("#loadDiv").load("/index.html .header");
    })

    $("get").click(function () {
        $.get({ url: "demo.html", success: function (result) {
            $("#getDiv").html(result);
            }
        });
    });

    $("#ajax").click(function () {
        $.ajax({ url: "demo.html", success: function (result) {
            $("#ajaxDiv").html(result);
            }
        });
    });

    $("#toggle").click(function () {
        $("div").toggle();
    });

    $("#offset").click(function () {
        var x = $("h2").offset();
        alert("Top: " + x.top + "     Left: " + x.left);
    });

    $("#filter").click(function () {
        $("li").filter(".nest").css("background-color", "lightcoral");
    });


    $("#setTimeout").click(setTimeout(function () {
        alert("setTimeout after 3 sec!");
    }, 3000));

    

    $("#setInterval").click(function Function() {
        setInterval(function () { alert("setInterval after 3 sec!"); }, 3000);
    });
    
}); 