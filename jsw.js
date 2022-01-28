var now =moment().format('dddd, MMMM Do');
$("#currentDay").text(now);
var currentHour=moment().format("HH")

const detailTextEl = $('#detail_text');
const detailFormEl = $('#detail_form');
var myActivity=[]

 


const handleSubmit = function (event){
    event.preventDefault();
    myActivity[9] = $("#9").val();
    myActivity[10]=$("#10").val();
    myActivity[11]=$("#11").val();
    localStorage.setItem("myActivity", JSON.stringify(myActivity));

}



// This function is being called below and will run when the page loads.

function init() {
    // Get stored results from localStorage
    var storedActivity = JSON.parse(localStorage.getItem("myActivity"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedActivity !== null) {
      myActivity = storedActivity;
      $('textarea[name="t09"]').val(myActivity[9]);
      $('textarea[name="t10"]').val(myActivity[10]);
      $('textarea[name="t11"]').val(myActivity[11]);
    } 
  }
 
  $( ".hour").eq(2).css("color","red");

$( ".hour" ).css( "border", "3px solid red" );
//this needs to pull the hour from moment. 
var currentHour=9;

$(document).ready(function(){
$('.description').each(function(){
            var i = parseInt(id.substring(1));  
            console.log(i)
            console.log(i-currentHour);
            if(i<currentHour){$(this).addClass("past")}
            if(i==currentHour){$(this).addClass("present")}
            if(i>currentHour){$(this).addClass("future")}
        });
    });




  

detailFormEl.on("submit",handleSubmit)

init()

