const { json } = require('express');
const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
// Exercice 1
app.get ('/laroute', (req,res) => {
    res.send('Authors API')
})

// Exercice 2
app.get ('/authors/:id' , (req, res) =>{
    const {id} = req.params
    res.send(authors[id])
})

// Exercice 3

app.get ('/authors/:id/books/', (req, res) =>{
    const {id} = req.params
    console.log(id)
    res.send(authors[id].books)
})

// Exercice 4-1
app.get ("/authors/:id", (req, res) =>{
    const {id} = req.params
    console.log(id)
    res.json({
        name : authors[id].name,
       nationality : authors[id].nationality, 
    })
})

// Exercice 4-2

app.get("/authors/:id/books", (req,res) =>{
res.send(authors[req.params.id].books)
})

app.get ("*", (req,res) => {
    res.send ("Wellou mon ami")
})








