var vowels= ["a","e", "i", "o", "u"];
var mutated="";

//Hello

var checkVowels=(str)=>{
  var lower=str.toLowerCase();
  for(let char of lower){
    if (vowels.includes(char)){
      mutated+="-";
    }else{
      mutated+=char;
    }
  }

return mutated
};


// const capitalised= (str)=>{
//   const capital= checkVowels(str).charAt(0).toUpperCase();
//   const others= checkVowels(str).slice(1).toLowerCase();

//  const full= capital.concat(others);
//  return full;
// };

// console.log(capitalised("hello"));





// console.log(checkVowels("ChaRlES"));





// var myObject={car:"vox",model:"vx5", mileage:"10000km"}
// for (let obj in myObject){
//   console.log(obj,myObject[obj])
// }

// var cars=["toyota", "isuzu", "tata", "bmw"];

// for (let car of cars){
//   console.log(car)
// }

