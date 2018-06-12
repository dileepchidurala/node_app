var express = require('express');
var promise = require('promise');
var router = express.Router();
var db = require('../models/config');
var app = express();

// get all
router.get('/all',function(req,res,next){
    var query = 'SELECT * FROM ' + db.db_name;
    db.teradata.read(query).then(function(response)
    {
        res.send(response);
        console.log('sucesss all data is shown' );
    });
});


//get specific for id
router.get('/students/:id',function(req,res){
    var query = 'SELECT * FROM ' + db.db_name + ' WHERE stdno='+req.params.id;
    var result = db.teradata.read(query).then(function(response){
        res.send(response);
        console.log("Id no :"+req.params.id + " Shown ");
    });
});


//post router
router.post('/create',function(req,res){
    var query = 'INSERT INTO student VALUES ('+ req.body.id +',\''+ req.body.name +'\',\''+ req.body.deartment +'\');';
    var result = db.teradata.write(query).then(function(response){
        console.log("Insert done for the id: "+ req.body.id);
    });
});

// update router
router.post('/update/:id',function(req,res){
    var query = 'update student set name=\''+ req.body.name +'\',deartment=\''+ req.body.deartment +'\' where stdno = '+req.body.id +';';
    var result = db.teradata.write(query).then(function(response){
        console.log("Updated Id:"+req.params.id);
    });
});

//delete router
router.get('/delete/:id',function(req,res){
    var query = 'DELETE FROM '+db.db_name+' WHERE stdno ='+req.params.id;
    db.teradata.write(query).then(function(response)
    {
        console.log('sucesss deleted Id:' + req.params.id);
    });
});

module.exports = router;