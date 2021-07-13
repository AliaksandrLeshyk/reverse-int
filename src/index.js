module.exports = function reverse (n) {
  let num = +n.toString().split('').reverse().join('');
  return n >= 0 ? num : +Math.abs(n).toString().split('').reverse().join('');
}
