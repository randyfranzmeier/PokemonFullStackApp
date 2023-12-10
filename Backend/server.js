const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT | 3001;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());


//api to get all the items in the database
app.get('/api/getAllEntries', (req, res) => {
    fs.readFile('pokedex.json', "utf-8", (err, data) =>{
        if(err) res.status(500).send("error");
        else {
            try {
                let dataString = JSON.stringify(data);
                if(dataString.length !== 0) {
                    res.send(JSON.parse(dataString));
                }
            }
            catch(err) {
                res.status(500).send("error");
            }

        }
        res.end();
    })
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
    //res.header('Access-Control-Allow-Origin', '*'); 
    fs.readFile('pokedex.json', 'utf-8', (err, data) =>{
        if(err) res.status(500).send("error posting data");
        else {
            let fileContent = JSON.parse(data); //json array
            //loop through array and make sure name and number are non-repeated, if they aren't repeated
            fileContent.push(req.body); //add element
            //check if list is empty
            if(fileContent.length > 0) {
            fs.writeFile('pokedex.json', JSON.stringify(fileContent, null, 2), 'utf-8', err =>{
                if(err) res.status(500).send("error")
                else res.status(200).send("success");
            res.end();
            })
        }
        }
    })
});

//start the server
app.listen(PORT, ()=>console.log(`server listening on port ${PORT}`));