'use strict';

const File = require('./edit-file');

const myFile = new File();

console.log(__dirname);

myFile.readFileCallback(`${__dirname}/person.json`, (error,content) => {
  if(error) {
    console.log('error in index.js readFileCallback');    
  }else{
    let newData = content;
    // push in new data
    // stringify data back into JSON file

  }
  console.log(content);
}
);

// not sure where to push in new data. Look into this tomorrow.
// Read

myFile.readFilePromise(`${__dirname}/person.json`) {
  let newData = JSON.parse(content.toString());
  // push in new data
  // stringify back into JSON file
}