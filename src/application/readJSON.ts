import * as fs from 'fs'
import * as path from 'path'

let obj = JSON.parse(fs.readFileSync(path.join(__dirname, '../tmp/full_format_recipes.json'), 'utf8'))

console.log(obj[1]);



