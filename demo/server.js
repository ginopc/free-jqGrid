const express = require('express');
const app = express();
let PORT = process.env.PORT | 3010;

app.use(express.static('static')); 

app.listen(PORT, () => {
    console.log('Test service runned and listening on localhost:'+ PORT);
});