


const fs = require('fs')

/*
fs.access('myfile', (err) => {
  if (!err) {
    console.error('myfile already exists');
    return;
  }

  fs.open('myfile', 'wx', (err, fd) => {
    if (err) throw err;
    writeFile(fd);
  });
});*/

fs.open('hello1', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('Hello already exists');
      return;
    }

    throw err;
  }

  writeMyData(fd);
});