// priveli

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

// const fs = require("fs/promises")

// const users = [
//     {
//         name: "Gela",
//         age: 22,
//     },
//     {
//         name: "Nika",
//         age: 2,
//     },
//     {
//         name: "Gocha",
//         age: 32,
//     },
//     {
//         name: "Daviti",
//         age: 17,
//     },
// ]


// const filtered = users.filter(el => el.age >= 18)
// const rame = JSON.stringify(filtered)
// console.log(rame)

// async function main(){
//     try{
//         await fs.writeFile("data.json", `${rame}`)
//     }catch(er){
//         console.log(er, "er")
//     }
// }

// main()