function isPalindrome(word) {
  // Write your algorithm here
  const cleanStr = str.replace(/[^a-z]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal, Panama"));

/* 
  Add your pseudocode here
  Function isPalindrome(word):
  1. Create a function called isPalindrome that takes a single argument, 'word'.
  2. Remove non-alphabet characters and convert the 'word' to lowercase and store it in 'cleanStr'.
  3. Compare 'cleanStr' with its reverse to check if it's a palindrome.
  4. If 'cleanStr' is equal to its reverse, return true (it's a palindrome).
  5. Otherwise, return false (it's not a palindrome).

*/

/*
  Add written explanation of your solution here
  - The function begins by cleaning the input word, removing non-alphabet characters, and converting it to lowercase for consistency.
  - It then compares 'cleanStr' with its reverse to establish whether it's a palindrome or not.
  - If 'cleanStr' is identical to its reverse, the function returns true, confirming the input word is a palindrome.
  - If the cleaned string does not match its reverse, the function returns false, indicating that it's not a palindrome.

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
