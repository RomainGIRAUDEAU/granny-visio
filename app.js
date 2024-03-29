
//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/clientSide'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/clientSide/index.html'));
});
app.get('*', function(req, res) {
    res.status(404).send('Page NOT Found -_-\'');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 80);
