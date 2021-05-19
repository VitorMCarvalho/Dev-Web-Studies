const [a] = [10]
console.log(a)
const [n1, ,  n2, ,n5, n6=true] = [10,11,15,16]
console.log(n1, n2, n5, n6)

const [, [, num]] = [[,8,8],[9,6,8]]
console.log(num)