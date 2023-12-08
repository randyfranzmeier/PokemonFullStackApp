const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT | 3001;


//api to get all the items in the database
app.get('/api/getAllEntries', (req, res) => {
//retrieve all items in database
})

//api to get a specific item (in search bar)
app.get('/api/getSingleEntry:id', (req, res) =>{
    //search for single entry, return null if nothing found
}) 

//api to delete a specific item (optional) 
app.delete('/api/exterminate:id', (req, res) => {
    //search for id, delete it if found
})

//api to post data to the json file
app.post('/api/addEntry', (req, res) => {
    //obtain all data, then push new item to array and append that to json file
})

//start the server
app.listen(PORT, ()=>console.log(`server listening on port ${PORT}`));