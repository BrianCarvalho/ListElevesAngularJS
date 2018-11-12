const express = require('express');
const app = express();
const mongoose = require('mongoose');
const modelEleve = require('./model/modelEleve');
const bodyParser = require('body-parser');
const listEleves = require('./client/data/liste');


//ouvre une connexion db appelé eleveIFA
mongoose.connect('mongodb://localhost/eleveIFA');

function addAllEleve(listEleves){
    
    /* Je boucle ma liste éleve */
    listEleves.forEach(function(value) {
       
        var nouveauEleve = new modelEleve(value);
        nouveauEleve.save(function(err, res2) {

            if(err)
            {
                console.log(err);
    
            } else {
                
                console.log(res2);
            }
        });

    });

}


//connexion a la DB si il se connecte envoi un message ainsi losrqu'il ne se connecte pas egalement
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function() {
console.log('DB Connected ! ');

//addAllEleve(listEleves);

});

// je configure mon body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*declaré un repertoire static*/
app.use('/static', express.static('client'));

app.get('/', function(req, res) {

    /* Envoi une réponse au client*/
    res.sendFile(__dirname + '/client/index.html');

});


/* API qui retourne ma liste éleve de ma base de donnée (Quand je récupere = GET) */
app.get('/api/eleves/show',function(req,res){
    modelEleve.find({},function(err,resEleve){
        if(err)
        return console.log('error');
        res.send(resEleve);
        console.log(resEleve);
    })
});





/* API qui retourne ma liste éleve de ma base de donnée (Quand je crée = POST) */
app.post('/api/eleves/add',function(req,res){
   
    /* Ici je passe les variable de mon body dans mon modèleEleve */
    var neweleve = new modelEleve(req.body);
   
    /* J'insère en base de donnée mes données et j'affiche le resultat à l'aide un callback */
    neweleve.save(function(err, res2) {

        if(err)
        {
            res.send(err);

        } else {
            res.send(res2);
        }

    });    
});



 /* écoute sur le port 8080*/
app.listen(8080,function(){
    console.log('Server lancé ! ')
});

