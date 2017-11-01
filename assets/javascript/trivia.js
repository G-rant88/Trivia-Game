var number = 30;
var intervalId;
var timer = false;


zero = [
"Hedwig", "Scabbers", "Buckbeak", "Fluffy"

];

one = [
"Stag", "Terrier", "Otter", "Dragon"
];

two = [
  "Snake", "Badger", "House Elf", "Owl"
];

// alist.push("Answer4 HERE1");
// alist.push("Answer HERE2");
// alist.push("Answer HERE3");
// alist.push("Answer HERE4");

// alist.push("Answer5 HERE1");
// alist.push("Answer HERE2");
// alist.push("Answer HERE3");
// alist.push("Answer HERE4");
var alist =
  [zero, one, two];



var answers = ["Hedwig", "Otter", "Badger"]
var qlist = [];

qlist.push("<h3>What is the name of Harry's pet owl?</h3");
qlist.push("<h3>Hermione's patronus is in the form of which animal?</h3");
qlist.push("<h3>What is the symbol of the Hufflepuff House?</h3");
qlist.push("<h3></h3");
qlist.push("<h3></h3");


var imgs = ["assets/images/hp1.jpg", "assets/images/hp2.jpg"];



function ask (i){
  

        $(".quest").html(qlist[i]);
        $("#answer1").val(alist[i][0]);
        $("#answer2").val(alist[i][1]);
        $("#answer3").val(alist[i][2]);
        $("#answer4").val(alist[i][3]);
        $(".buts").css("display", "block");
        $("#imgholder").css("display", "none");
         $(".right").html("");
         $("#show-number").css("display", "inline");
         reset();

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


 


 // for (var i = 0; i < 1; i++) {
$(".buts").on("click", function(){
 
 $("#imgholder").css("display", "block");
$(".quest").html("<h3>The Correct Answer Was: " + answers[0] + "</h3>");
$(".buts").css("display", "none");
$("#imgholder").html("<img src=" + (imgs[0]) + ">");
stop();
$("#show-number").css("display", "none");
if ($(this).attr("value") === answers[0]){

$(".right").html("You were Correct!");

}

else {

  $(".right").html("You were Wrong!");

}




  });

   // }
 



var five = setTimeout(fiveSeconds, 5000)

function fiveSeconds(){

ask(1);

};




function reset (){

  number = 30;
}