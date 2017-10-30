

const fs = require('fs');

fs.unlink('hello.doc', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});
