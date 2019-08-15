'use strict';

const fs = require('fs');
const fsExtra = require('fs-extra');

class File {
  readFileCallback(fileName, callback) {
    fs.readFileCallback(fileName, (error,content) => {
      if(error) {
        callback(error);
      } else {
        callback(undefined,content.toString());
      }
    });
  };

  writeFileCallback(fileName, newData){
    fs.writeFile(fileName, (error, newData) =>{
      if(error) {
        console.log('error in write file process');
      }else{
        console.log('New data added into json file');
      }
    })
  }

  readFilePromise(fileName) {
    return fsExtra.readFile(fileName);
  };

  writeFilePromise(fileName, newData) {
    fsExtra.writeFile(fileName,newData);
  }
};

module.exports = File;
