// pirveli

// const fs = require("fs/promises")

// async function main(){
//     try{
//         const first = await fs.readFile('first.txt', "utf-8")
//         const second = await fs.readFile('second.txt', "utf-8")
//         await fs.writeFile("third.txt", `${first} ${second}`)
//     }catch(er){
//         console.log(er, "er")
//     }
// }

// main()

// meore

// const fs = require("fs/promises")

// async function main(){
//     try{
//         const random = await fs.readFile('randomtxt.txt', "utf-8")
//         const word = random.split(" ")
//         const length = word.length
//         console.log(length)
//     }catch(er){
//         console.log(er, "er")
//     }
// }

// main()

// mesame

// const fs = require("fs/promises");

// async function main(){
//     try{
//         const users = await fs.readFile('data.json', 'utf8');
//         const parsed = JSON.parse(users)
//         const done = JSON.stringify(parsed.filter(el => el.age > 18))
//         await fs.writeFile('data.json', `${done}`)
//     }catch(er){
//         console.log(er, "er")
//     }
// }

// main()