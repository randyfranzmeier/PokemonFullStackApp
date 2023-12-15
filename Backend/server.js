const express = require('express'); //using express framework
const app = express();
const fs = require('fs'); //using file system module to read and write to pokedex.json
const bodyParser = require('body-parser'); //parse the body for incoming requests
const PORT = process.env.PORT | 3001; //port to start the server on; react is on 3000 already
const cors = require('cors'); //enable cross origin resource sharing
app.use(cors()); // use cors module
app.use(bodyParser.json()); //use bodyparser


/**
 * this @function app.get() is an endpoint for the client to 
 * recieve data from the @file pokedex.json. I am employing 
 * exception handling to handle errors.
 */
app.get('/api/getAllEntries', (req, res) => {
    fs.readFile('pokedex.json', "utf-8", (err, data) =>{
        if(err) res.status(500).send("error"); //handle error
        else {
            try {
                let dataString = JSON.stringify(data);
                if(dataString.length !== 0) { //make sure I'm actually sending data
                    res.send(JSON.parse(dataString));
                }
            }
            catch(err) {
                res.status(500).send("error"); //handle error
            }

        }
        res.end();
    })
})


/**
 * this @function app.delete() accepts the name of an item to delete,
 * and then searches for it. When it is found, the item is then removed from
 * the JSON array and added to the file, thus deleting the item. the fs module
 * allows me to read and write the pokedex.json file.
 */
app.delete('/api/exterminate/:nameId', (req, res) => {
    let taskToDeleteName = req.params.nameId.trim();
    fs.readFile('pokedex.json', 'utf-8', (err, data) =>{
        if(err) res.status(500).send("error");//handle error
        let pokArr = JSON.parse(data);//convert to JSON object
        let i = 0;
        pokArr.forEach(obj => {
            if(obj.name === taskToDeleteName) { //if name matches
                pokArr.splice(i, 1); //delete item
            }
            i++; 
        })
        fs.writeFile('pokedex.json', JSON.stringify(pokArr, null, 2), 'utf-8', err =>{ //write the new array to the file
            if(err) res.status(500).send("error"); //handle error
            else res.status(200).send("success");
            res.end();
        })
    })
})

/**
 * this @function app.post() adds user specified data to a json file. I first
 * use the @function fs.readFile() to read the contents of the json array.
 * I then try to add the request body (json object) to the list. If successful,
 * I write the new array with the recently added object back to the file that was 
 * read.
 */
app.post('/api/addEntry', (req, res) => {
    //res.header('Access-Control-Allow-Origin', '*'); 
    fs.readFile('pokedex.json', 'utf-8', (err, data) =>{
        if(err) res.status(500).send("error posting data"); //handle error
        else {
            let fileContent = JSON.parse(data); //json array
            fileContent.push(req.body); //add element
           
            fs.writeFile('pokedex.json', JSON.stringify(fileContent, null, 2), 'utf-8', err =>{
                if(err) res.status(500).send("error"); //handle error
                else res.status(200).send("success");
            res.end();
            })
        }
    })
});

//start the server while logging the port it's listening on
app.listen(PORT, ()=>console.log(`server listening on port ${PORT}`));