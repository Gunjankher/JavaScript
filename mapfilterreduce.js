// map method 
let arr =[45,67,87]
let a= arr.map((value, index ,array )=>{
  console.log(value, index ,array)
  return value+index
})
console.log(a)

// filter method 
let arr2=[45, 67,89,0,5,47,]
let a2=arr2.filter((a2)=>{
return a2<50

})
console.log(a2)

// reduce method 
let arr3= [4,6,7,9,6]
let a3=arr3.reduce((h1, h2)=>{
return h1+h2
})
console.log(a3)
