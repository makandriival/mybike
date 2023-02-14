// // let string = "How can mirrors be real if our eyes aren't real";

// // function toJadenCase (string){
// //   splStr = string.toLowerCase().split(' ');
// //   for (let i=0; i<splStr.length; i++) {
// //     splStr[i] = splStr[i].charAt(0).toUpperCase() + splStr[i].substring(1)
// //   }

// // return splStr.join(' ');
// // };

// // console.log(toJadenCase(string));

// toJadenCase = function () { 
//   return this.split(" ").map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join(" ");
// }

// let word = 'animals';

// console.log(
//   word.slice(1)
// )
// let str = 'sp555999';

// function mask(str) {
//   let count = 0;
//   return str
//     .split("")
//     .reverse()
//     .map((n, i) => (!n.match(/\d/) ? n : count < 4 ? (count++, n) : "*"))
//     .reverse()
//     // .join("");
// } works for numbers only!!!!===========================


// return str.slice(0, str.length - 4)
//     .replace(/([a-zA-Z0-9])/g, '*') + str.slice(-4);


//   var maskedString = "";
//   for(var i = 0; i < str.length; i++) {
//     if(i < str.length - 4) {
//       console.log('+#');
//       maskedString = maskedString + "#";
//     } else {
//       maskedString = maskedString + str.charAt(i);
//     };
//   }
//   return maskedString;
// }

// console.log(mask(str));


// ============palindrome=================
// let str = '1234321'
// let tempPalindrome = [...str].reverse().join('');
// let res = str === tempPalindrome;
// console.log(res);

// function isPalindrome(str) {
//   // write code here
//   let tempPalindrome = [...str].reverse().join('');
//   return str === tempPalindrome;
// }