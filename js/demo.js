// đây là ngôn ngữ logic
var x; //x không có kiểu dữ liệu = null
x = 10;// x: number
var y = "hello world";// string
var t = true //boolean

//khai báo biến kiểu mới;
let n = 20;

var z = x + 10; //20

var z1 = x + y; //"10hello world"
var z2 = y + y; // "hello worldhello world"
var z3 = "20" + 10; //"2010"
console.log(x+y+"20"+10);// "10hello world2010"


if(x>=10){
    
}else{

}
for(var i=0;i<10;i++){
    console.log("i="+i);
}

var arr = [];
arr[0]=2;
arr[1]="abc";

arr.push(135); //arr[2]=135;
arr.push("hello"); // arr[3]="hello";
console.log("size of arr:"+arr.length);

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach(e=>{
    console.log(e);
})

function tinh_tong(a,b){
    //thích làm gì thì làm
    //return a+b;
    console.log(a+b);

}
tinh_tong(5,7);
tinh_tong(5,"ABC");

//alert("yêu cầu phải trên 18 tuổi"); //void
var tl = confirm("bạn đã chắc chắn chưa?"); //boolean
if(t){
    alert("người dùng đã chắc chắn với câu trả lời");

}else{
    alert("người dùng cần tìm hiểu thêm");

}
prompt("bạn bao nhiêu tuổi"); //string "18"
//var kq2 = parseInt(kq) + 10; //1810

alert("bạn đã "+kq("tuổi"));

var rd = Math.random(); // 0<rd<1 0.00291291923
rd = rd * 100; //0.01244 -> 1.244
rd = parseInt(rd);

var randomNumber= Math.floor(Math.random()*100);
var userNumber = prompt("nhap từ 0 đến 99:");
if(parseInt(userNumber)===randomNumber){
alert("chúc mừng! bạn đã trúng");
}else{
alert("rất tiếc! số đúng là"+randomNumber);
}

var numberSet = [];
for(var i = 0;i < 23;i++){
    numberSet.push(math.foor(Math.random()*100));
}
var tong_diem = 0;
for( luot_choi = 1;  luot_choi <=7 ;luot_choi++){
var userNumber = prompt (+luot_choi+);
var cuoc_tien = prompt;
if(numberSet.incudes(parseInt(userNumber))){
    tong_diem += 80;
    alert("chuc mung ban nhan duoc 80 diem.");

} else{
    alert("rất tiếc số đúng là "+ numberSet.point +)
}
}
