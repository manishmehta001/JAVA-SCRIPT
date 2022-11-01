/*String.prototype.split()==>
The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, 
puts these substrings into an array, and returns the array. 
Example==>                

<======================when using one space in split(one space charcter)======================================>*/
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split('');
console.log(words);
/*expected output==>
[
    'T', 'h', 'e', ' ', 'q', 'u', 'i',
    'c', 'k', ' ', 'b', 'r', 'o', 'w',
    'n', ' ', 'f', 'o', 'x', ' ', 'j',
    'u', 'm', 'p', 's', ' ', 'o', 'v',
    'e', 'r', ' ', 't', 'h', 'e', ' ',
    'l', 'a', 'z', 'y', ' ', 'd', 'o',
    'g', '.'
]
<======================when using two space in split(two space charcter)======================================>*/
const str1 = 'The quick brown fox jumps over the lazy dog.';
const words1 = str1.split(' ');
console.log(words1);
/*expected output==>
[
  'The',   'quick',
  'brown', 'fox',
  'jumps', 'over',
  'the',   'lazy',
  'dog.'
]  
<======================when using three space in split(three space charcter)======================================>*/
const str2 = 'The quick brown fox jumps over the lazy dog.';
const words2 = str2.split('  ');
console.log(words2);
/*expected output==>
[ 'The quick brown fox jumps over the lazy dog.' ]
<======================when using without comma in split(without cots & space)======================================>*/
const str3 = 'The quick brown fox jumps over the lazy dog.';
const words3 = str3.split();
console.log(words3);
/*expected output==>
[ 'The quick brown fox jumps over the lazy dog.' ]    */