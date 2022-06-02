var total =0
var vowels= ["a","e", "i", "o", "u"];
const count= (str)=>{
  for (let char of str){
    if (vowels.includes(char)){
      total++;
    }
  }
  return total
};

console.log(count("semaje"));