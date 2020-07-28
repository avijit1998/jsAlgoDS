// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(str) {
  let revStr;
  function reverse(str) {
    if (str === "") {
      return str;
    }
    return reverse(str.substring(1)) + str.charAt(0);
  }
  revStr = reverse(str);
  if (revStr === str) {
    return true;
  } else {
    return false;
  }
}
