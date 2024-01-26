/*setTimeout(function(){
    alert("Hello everybody");
},2000);

setInterval(function(){
    alert("Hello T2311E");
},2000);*/
var h = document.getElementById("number");
var t=10;
var it = setInterval(function(){

   // console.log(t);
   h.innerText = t;
    t--;
    if(t<0){
        clearInterval(it);
    }
},1000);
/*var min = 10, sec = 0;

  var timer = setInterval(function(){
    console.log(`${min}l:${sec}`);
    sec--;
    if(sec<0){
        min--;
        sec = 59;

    }
    if(min<0){
        clearInterval(timer);
    }
  }
  ,10);*/

