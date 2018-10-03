// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10
function gcd (num1, num2) {
  let gcdNum = 1
  let biggest = num1
  if (biggest < num2) biggest = num2
  else biggest = num1

  for (let i = biggest; i > 0; i--) {
    if (num1 % i === 0 & num2 % i === 0) {
      if (i > gcdNum) gcdNum = i
    }
  }
  return gcdNum
}
