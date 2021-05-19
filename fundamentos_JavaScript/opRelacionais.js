console.log("01)", "1 " == 1) // igual
console.log("02)", "1 " === 1) //estritamente igual?
console.log("03)", " 3" != 3)
console.log("04)", "1 " !== 1)

console.log("05)", 13 > 1)
console.log("06)", -1 < 1)
console.log("07)", -1 <= 1)
console.log("08)", -1 >= 1)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())

console.log('12)', null == undefined)
console.log('13)', null === undefined)