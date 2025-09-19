const  logical = () =>{
 let arr = [2,3,4,5];
 for(let  i = 0; i<arr.length; i++){

 // for(let i = 0; i<=arr.length(); i++) 
 // TypeError: arr.length is not a function
 //JavaScript me length ek property hoti hai, function nahi.

   console.log(arr[i]);
 }
 let num = "15";
   console.log(num + 5)
}
module.exports = logical;