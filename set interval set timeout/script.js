alert("hello")

let a= setTimeout(function(){
  alert("i am a set time out")
},5000)
 let b = prompt("hey do you wanna run this again")
if ("n"==b) {
  clearTimeout(a)
}


console.log(a)