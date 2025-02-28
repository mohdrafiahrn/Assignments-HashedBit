// Q9) Write a function to count the number of words in a paragraph.


function countWord(para){
    let cWord = para.split(" ");
    return cWord.length
}

console.log(countWord("A paragraph is a group of sentences that develops a single idea or point."))