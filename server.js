const express = require('express');
const app = express();

/*declaré un repertoire static*/
app.use('/static', express.static('client'));

app.get('/', function(req, res) {

    /* Envoi une réponse au client*/
    res.sendFile(__dirname + '/client/index.html');

});

 /* écoute sur le port 8080*/
app.listen(8080,function(){
    console.log('Server lancé ! ')
});

