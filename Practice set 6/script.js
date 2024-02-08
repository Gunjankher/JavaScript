/*const canDrive =(age)=>{
 return age>18?true:false
}
let runAgain=true;
while (runAgain) {
  let age = prompt("enter your age")
age= Number.parseInt(age)
if (age<18){
  console.error("please enter valid age")
break;

}



if (canDrive(age)){
alert("you can drive")
}
else {
alert("you can not drive")
} 
runAgain=confirm("do you wanna see again")

} */


let num = prompt("enter your number")
num= Number.parseInt(num)


if (num>4){
 location.href = "https://bing.com"

}


 else{
  
 let color= prompt("choose your background color")

document.body.style.background=color
 }