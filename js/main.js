$(document).ready(function () {
    var maxScore = 0;
    var click_count = 0;
    var score_count = 0;
    if (click_count == 0) {
        $("#score").text(click_count);
    }
    $(function () {
        var parent = $("#sh");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);

        }
    });


    //   ----------------------------------------

    var aclick = $(".pen");
    var scoreb = 0;

    $('.pen').click(function () {
        scoreb += 1;
        click_count = 1;
        if (scoreb > maxScore) {
            maxScore = scoreb;
        }
        $("#score").text(scoreb);

        var max_score = "<br>Max :" + maxScore;

        $("#score").append(max_score);





        var aaa = $(this).attr('id');
        // var new_id = aaa.toString();
        //$(new_id).unbind("hover").unbind("active");
        // console.log(aaa);
        //$(this).prev(aaa).attr('id', 'newid');
        //  afterClicked();

    });



    /*var afterClicked =function(){
         $(".pen").remove('id');
     }
     */


    $("#p1").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_1.png)");

        var audio = $("#audi")[0];
        audio.play();

        /*document.getElementById("#p1").style.pointerEvents = 'none';

            $("#p1").style.pointerEvents = 'none';*/

        $(this).css({
            "background-image": "url(./images/penguin_1.png)",
            "pointer-events": "none"
        });
        score_check();

    });
    $("#p2").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_2.png)");

        var audio = $("#audi")[0];
        audio.play();
        /*document.getElementById("#p2").style.pointerEvents = 'none';

        $("#p2").style.pointerEvents = 'none';*/
        $(this).css({
            "background-image": "url(./images/penguin_2.png)",
            "pointer-events": "none"
        });
        score_check();
    });
    $("#p3").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_3.png)");

        var audio = $("#audi")[0];
        audio.play();
        /*document.getElementById("#p3").style.pointerEvents = 'none';

        $("#p3").style.pointerEvents = 'none';*/
        $(this).css({
            "background-image": "url(./images/penguin_3.png)",
            "pointer-events": "none"
        });
        score_check();
    });
    $("#p4").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_4.png)");

        var audio = $("#audi")[0];
        audio.play();

        /* document.getElementById("#p4").style.pointerEvents = 'none';

         $("#p4").style.pointerEvents = 'none';*/
        $(this).css({
            "background-image": "url(./images/penguin_4.png)",
            "pointer-events": "none"
        });
        score_check();
    });
    $("#p5").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_5.png)");

        var audio = $("#audi")[0];
        audio.play();

        /*document.getElementById("#p5").style.pointerEvents = 'none';

        $("#p5").style.pointerEvents = 'none';*/
        $(this).css({
            "background-image": "url(./images/penguin_5.png)",
            "pointer-events": "none"
        });
        score_check();
    });
    $("#p6").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_6.png)");

        var audio = $("#audi")[0];
        audio.play();

        /* document.getElementById("#p6").style.pointerEvents = 'none';

         $("#p6").style.pointerEvents = 'none';*/
        $(this).css({
            "background-image": "url(./images/penguin_6.png)",
            "pointer-events": "none"
        });
        score_check();
    });
    $("#p7").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_7.png)");


        var audio = $("#audi")[0];
        audio.play();

        /*document.getElementById("#p7").style.pointerEvents = 'none';

        $("#p7").style.pointerEvents = 'none';*/
        $(this).css({
            "background-image": "url(./images/penguin_7.png)",
            "pointer-events": "none"
        });
        score_check();
    });
    $("#p8").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_8.png)");

        var audio = $("#audi")[0];
        audio.play();

        /*document.getElementById("#p8").style.pointerEvents = 'none';

        $("#p8").style.pointerEvents = 'none';*/
        $(this).css({
            "background-image": "url(./images/penguin_8.png)",
            "pointer-events": "none"
        });
        score_check();
    });
    $("#p9").mousedown(function () {

        $(this).css("background-image", "url(./images/yeti.png)");
        //console.log("ayo");

        /* var audio = $("#audi")[1];
        audio.play();

        document.getElementById("#p9").style.pointerEvents = 'none';

        $("#p9").style.pointerEvents = 'none';
        $(this).css({
                "background-image": "url(../images/penguin_9.png)",
                "pointer-events": "none"
            });*/
    });

    //changed from mousedown to click
    $("#p9").on('click', function () {


        // $("#p9").css("background-image","url(../images/yeti.png)");

        // console.log("na ayo");
        var audioYeti = $("#yetiaudio")[0];
        audioYeti.play();


        alert("Yaaaarrrr! your score is :" + scoreb);
        // maxScore = 0;
        score_count = 0;
        score_reset();
        /*        scoreb = 0;

                $("#score").text(scoreb);

                var max_score = "<br>Max :" + maxScore;

                $("#score").append(max_score);*/



        moundCall();





    });

    var score_check = function () {
        score_count++;
        if (score_count % 8 == 0) {
            setTimeout(function(){
                alert("Hoohaah !!! YOU SURVIVED !!!..... Your Score is : " + scoreb + "\nThis Game is going to reset!");
            },500);
            /*alert("Hoohaah !!! YOU SURVIVED !!!..... Your Score is : " + scoreb + "\nThis Game is going to reset!");*/
            
            setTimeout(function(){
                 maxScore = 0;
            score_count = 0;
            score_reset();
            moundCall();
            },520);
/*            maxScore = 0;
            score_count = 0;
            score_reset();
            moundCall();*/

        }
    }



    var score_reset = function () {
        scoreb = 0;
        /*maxScore = 0;*/
        $("#score").text("0");
        var max_score_restart = "<br>Max :" + maxScore;
        $("#score").append(max_score_restart);

    }

    var moundCall = function () {



        $(function () {
            var parent = $("#sh");
            var divs = parent.children();
            while (divs.length) {
                parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);

            }
        });


        $("#p1").css({
            "background-image": "url(/images/mound_1.png)",
            "pointer-events": "auto"
        });


        $("#p2").css({
            "background-image": "url(/images/mound_2.png)",
            "pointer-events": "auto"
        });


        $("#p3").css({
            "background-image": "url(/images/mound_3.png)",
            "pointer-events": "auto"
        });


        $("#p4").css({
            "background-image": "url(/images/mound_4.png)",
            "pointer-events": "auto"
        });


        $("#p5").css({
            "background-image": "url(/images/mound_5.png)",
            "pointer-events": "auto"
        });


        $("#p6").css({
            "background-image": "url(/images/mound_6.png)",
            "pointer-events": "auto"
        });


        $("#p7").css({
            "background-image": "url(/images/mound_7.png)",
            "pointer-events": "auto"
        });


        $("#p8").css({
            "background-image": "url(/images/mound_8.png)",
            "pointer-events": "auto"
        });


        $("#p9").css({
            "background-image": "url(/images/mound_9.png)",
            "pointer-events": "auto"
        });
    }


});
