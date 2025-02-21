// node -v

// npm init -y => package.json

// server.js => keep all modules code

// npx => npm package execution
// npm => node package manager


// Run the backend server/ file => node file_name.extension
// ex: node server.js

// npm i nodemon
// nodemon file_name.extension


// modules
// 1. fs => file system
// 2. os => operating system
// 3. path => path
// 4. http or https => create the http server
// 5. url => url

// ---------------------------------------------------------------------------------------

// modules
// 1. fs => file system

// create a new file test.txt

// const fs = require("fs")

// fs.writeFile("test.txt", "Hello World", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("File test.txt created successfully !!!!")
//     }
// })

// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })



// ----------------------------------------------------------
// server created by http module


// const http = require("http")

// // console.log(http)

// const server = http.createServer((req, res) => {
//     res.write("<h1>Hello World</h1>")
//     res.end()
// });


// // port 8080

// server.listen(8080, () => {
//     console.log("Server is running on port 8080")
// })


// ---------------------------------------------------------------------------------------

// created server by express module


// console.log("Node Server")

// // create the server using express module.

// const express = require("express");

// // console.log(express)
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World, from express js server")
// })


// app.get("/about", (req, res) => {
//     res.send("This is about page")
// })

// app.get("/contact/:name", (req, res) => {
//     res.send(`This is contact page ${req.params.name}`)
// })


// // post

// app.post("/submit", (req, res) => {
//     // console.log(req.body)
//     res.send(`Data is: ${JSON.stringify(req.body)}`)
// })

// //middleware function
// // => use
// // => (req, res, next)

// app.use((req, res) => {
//     res.send("404 page not found")
// })


// // localhost:8000

// app.listen(8000, () => {
//     console.log("Server is running on port 8000")
// })

// ------------------------------------------------------------------------------

// MongoDB
// => NoSQL database
// => MongoDB => Mongoose


// npm i mongoose
// 1. mongo Atlas
// 2. mongo Compass


// console.log("Node Server")

// // create the server using express module.

// const express = require("express");

// // console.log(express)
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World, from express js server")
// })


// app.get("/about", (req, res) => {
//     res.send("This is about page")
// })

// app.get("/contact/:name", (req, res) => {
//     res.send(`This is contact page ${req.params.name}`)
// })


// // post

// app.post("/submit", (req, res) => {
//     // console.log(req.body)
//     res.send(`Data is: ${JSON.stringify(req.body)}`)
// })

// //middleware function
// // => use
// // => (req, res, next)

// app.use((req, res) => {
//     res.send("404 page not found")
// })


// // localhost:8000

// app.listen(8000, () => {
//     console.log("Server is running on port 8000")
// })