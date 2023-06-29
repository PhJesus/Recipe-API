import * as csv from 'csv'
import * as fs from 'fs'
import * as path from 'path'

let first = true
let titles = []

fs.createReadStream(path.join(__dirname, '../../tmp/epi_r.csv'))
  .pipe(csv.parse({ delimiter: ',', from_line: 1}))
  .on("data", function (row: any) {
    if (first) {
      titles = row
      console.log(row)
      console.log(titles)
    }

    if (!first) {
      console.log(`${titles[0]}: ${row[0]}`)
      for (let i = 1; i < row.length; i++) {
        if (row[i] > 0) {
          console.log(`${titles[i]}: ${row[i]}`)
        }
      }
    }
    if (!first) {
      process.exit();
    }
    first = false
  })
