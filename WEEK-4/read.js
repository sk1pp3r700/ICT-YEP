// const fs = require('fs')

// try {
//   const data = fs.readFileSync('./week-4/week4.txt', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }

const fs = require('fs')

fs.readFile('/Users/backendclass1/Documents/ICT-YEP/WEEK-4/week4.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})