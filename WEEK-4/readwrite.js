const fs = require('fs')
const content = '/Users/backendclass1/Documents/ICT-YEP/WEEK-4/week4.txt' 

fs.readFile(content , 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  fs.writeFileSync("week3.txt", data) 
    console.log('sucessful')
})
