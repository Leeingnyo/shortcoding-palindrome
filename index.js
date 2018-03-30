var palindrome = str => str.split('').map((ch, index) => str.split('').reverse()[index] === ch).reduce((res, curr) => res && curr, true);
