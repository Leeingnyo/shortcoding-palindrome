var palindrome = str => str.split('').reverse().map((char, index, array) => array[index] === str[index]).reduce((res, curr) => res && curr, true);
