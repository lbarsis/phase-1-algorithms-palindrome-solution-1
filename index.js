function isPalindrome(word) {
  // Write your algorithm here
  const wordArr = word.split('')
  const reversedWordArray = wordArr.reverse()
  const reversedWord = reversedWordArray.join('')
  return reversedWord === word
}

/* 
  Add your pseudocode here
  initialize array and split parameter into it
  use reverse() methode to modify the array into the backwards equivalent
  joint the reversed array to create a reversed word
  return true or false
*/

/*
  Add written explanation of your solution here
  split paramter into an array
  reverse the array
  join the array back to form the reversed word
  return true or false if the word is equivalent to the reverse
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
