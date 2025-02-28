// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

// replace(searchValue, newValue)

function correctWordFn(string, wrong, correct){
   let correctStr = string.replace(wrong, correct);
   return correctStr;
}

console.log(correctWordFn("I love javascript", "javascript", "javaScript"));