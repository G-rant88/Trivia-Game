var number = 30;
var intervalId;
var timer = false;
var alist = [];


alist.push("Hedwig");
alist.push("Scabbers");
alist.push("Buckbeak");
alist.push("Fluffy");

alist.push("Answer2 HERE1");
alist.push("Answer HERE2");
alist.push("Answer HERE3");
alist.push("Answer HERE4");

alist.push("Answer3 HERE1");
alist.push("Answer HERE2");
alist.push("Answer HERE3");
alist.push("Answer HERE4");

alist.push("Answer4 HERE1");
alist.push("Answer HERE2");
alist.push("Answer HERE3");
alist.push("Answer HERE4");

alist.push("Answer5 HERE1");
alist.push("Answer HERE2");
alist.push("Answer HERE3");
alist.push("Answer HERE4");



var qlist = [];

qlist.push("<h3>What is the name of Harry's pet owl?</h3");
qlist.push("<h3>Question HERE2!</h3");
qlist.push("<h3>Question HERE3!</h3");
qlist.push("<h3>Question HERE4!</h3");
qlist.push("<h3>Question HERE5!</h3");


var imgs = ["assets/images/hp1.jpg", "assets/images/hp1.jpg"];

function ask (i){
  

        $(".quest").append(qlist[i]);
        $("#answer1").val(alist[i]);
        $("#answer2").val(alist[i + 1]);
        $("#answer3").val(alist[i + 2]);
        $("#answer4").val(alist[i + 3]);

}




 $("#start").on("click", run);

 function run() {
       intervalId = setInterval(decrement, 1000);
        timer = true;
        $(".buts").css("display", "block");
        ask(0)
        




        $("#start").css("display", "none");
        $("#show-number").html("<h2>" + number + "</h2>");


     }


 function decrement() {

     
       number--;
 $("#show-number").html("<h2>" + number + "</h2>");
       

       if (number === 0) {

        stop();

 function stop() {
  timer = false;
    clearInterval(intervalId);
     }

}

}

function answer (){

$(".quest").html("The Correct Answer Was: " + (alist[0]));
$(".buts").css("display", "none");
$("#imgholder").html("<img src='assets/images/hp1.jpg'/>");
stop();
$("#show-number").css("display", "none");

}

$(".buts").click(answer);

$(".buts").on("click", function(){

if ($(this).attr("id") === "answer1"){

$(".right").html("You were Correct!");

}

else {

  $(".right").html("You were Wrong!");

}


});



 // var items = [];

 //   $.each(data, function(i, item) {

 //          items.push('<li><a href="yourlink?id=' + item.UserID + '">' + item.Username + '</a></li>');

 //   });



    // $("#stop").on("click", stop);

    // $("#resume").on("click", run);

   

    

         


    //   }
    // }

    
    // run();