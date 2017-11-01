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

three = [

"Four", "Six", "Three", "Five"
];

four = [

"The Bloody Baron", "The Fat Lady", "Nearly-headless Nick", "Dobby"

]

five = [

"Muggle", "Bleaker", "Squib", "Quibble"

]

six = [

"Seeker", "Beater", "Chaser", "Keeper"

]

var alist =
  [zero, one, two, three, four, five, six];



var answers = ["Hedwig", "Otter", "Badger", "Five", "The Fat Lady", "Squib", "Keeper"]
var qlist = [];

qlist.push("<h3>What is the name of Harry's pet owl?</h3");
qlist.push("<h3>Hermione's patronus is in the form of which animal?</h3");
qlist.push("<h3>What is the symbol of the Hufflepuff House?</h3");
qlist.push("<h3>Ron has how many brothers?</h3");
qlist.push("<h3>Who guards the entrance to the Gryffindor Common Room?</h3");
qlist.push("<h3>A wizard who cannot do magic is known as a?</h3");
qlist.push("<h3>Ron plays which position in Quidditch?</h3");


var imgs = ["assets/images/hp1.jpg", "assets/images/hp2.jpg", "assets/images/hp3.jpg", 
"assets/images/hp4.jpg", "assets/images/hp5.jpg", "assets/images/hp6.jpg", 
"assets/images/hp7.jpg"];

var f = 0;

function ask (f){
  
        reset();
        $(".quest").html(qlist[i]);
        $("#answer1").val(alist[i][0]);
        $("#answer2").val(alist[i][1]);
        $("#answer3").val(alist[i][2]);
        $("#answer4").val(alist[i][3]);
        $(".buts").css("display", "block");
        $("#imgholder").css("display", "none");
         $(".right").html("");
         $("#show-number").css("display", "inline");
          $("#start").css("display", "none");
        $("#show-number").html("<h2>" + number + "</h2>");
        
         f++

}




 $("#start").on("click", run);

 function run() {
       intervalId = setInterval(decrement, 1000);
        timer = true;
        ask(f)
        




       


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


 
 var i = 0

 // for (var i = 0; i < 1; i++) {
$(".buts").on("click", function(){
stop();
 $("#imgholder").css("display", "block");
$(".quest").html("<h3>The Correct Answer Was: " + answers[i] + "</h3>");
$(".buts").css("display", "none");
$("#imgholder").html("<img src=" + (imgs[i]) + ">");
stop();
$("#show-number").css("display", "none");
if ($(this).attr("value") === answers[i]){

$(".right").html("You were Correct!");
i++;


}

else {

  $(".right").html("You were Wrong!");
  i++
  

}

var five = setTimeout(fiveSeconds, 5000)

function fiveSeconds(){

ask(f);

};



  });

   // }
 








function reset (){

  number = 30;
}