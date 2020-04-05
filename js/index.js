$(document).ready(function () {

    //This code will run after your page loads
    var yetiPosition = Math.floor(Math.random() * 9 + 1);
    console.log(yetiPosition);
   // ---------------------------------------------
    var p1 = $("#penguin1");
    var p2 = $("#penguin2");
    var p3 = $("#penguin3");
    var p4 = $("#penguin4");
    var p5 = $("#penguin5");
    var p6 = $("#penguin6");
    var p7 = $("#penguin7");
    var p8 = $("#penguin8");
    var ye = $("#yeti");
    
    var arr = [p1,p2,p3,p4,p5,p6,p7,p8,ye];
    shuffle(arr);
    console.log(arr);
    
    function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
    
    
    
 //   ----------------------------------------
    
    var aclick = $(".pen");
    var scoreb = 0;
    for (var i = 1; i < 9; i++) {

        $('.pen').click(function(){
            scoreb += 1;
        });
        $("#score").text(scoreb);
    }

    $.fn.afterClick =function(){
        $(".pen").remove('id');
    }




    $("#yeti").mousedown(function () {
        alert("Yaaaarrrr!");
    });


});
