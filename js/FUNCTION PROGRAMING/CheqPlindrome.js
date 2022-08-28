function checkPalindrome(str, i, j) {
    if (i == j || i>j ) {
        return true;
    }
    if(!str[i] == str[j]) {
        return false;
    }
    return checkPalindrome(str, i + 1, j - 1);
}
const str = "matam";
console.log(checkPalindrome(str, 0, str.length - 1));