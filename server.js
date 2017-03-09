
var express = require('express');

var config=require('./config');

var app=express();

// api to get data 
app.get('/',function(req,res) {

var sql = require('mssql');

  // config for your database
   

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT TOP 10 EventID,DeviceName FROM EventLog', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });

});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});

