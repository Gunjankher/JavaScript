// conditional expressions 
let a= prompt("hey what is your age")
a= Number.parseInt(a)

/* if(a>5){
  alert("this is a valid age")
}
else{
  alert( "this is invalid age")
} */

if (a>18){
  alert ("you can drive")
}
else if (a>=15 && a<18){
 alert ("you can drive moped")

}
else if (a<15){
  alert("you can not drive at all")
}
  
  
