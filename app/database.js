var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://cruzeironews:RI5hPqOd7LzmVMHeViB6vVyLUhA1zweB3wT49nAVS74nx7aOOtrqmmmLvCbfPchAZOkv0ZvAaZp2Nr98s7IrMw==@cruzeironews.documents.azure.com:10255/?ssl=true";

mongoClient.connect(url, function (err, db) {

    var newsCollection = db.collection('News')

    var cursor = newsCollection.find();
    
    cursor.each(function(err, doc) {

        console.log(doc);

    });
    
    // db.collection("News").insertOne({
    //    id: "4",
    //    name: "name 4",
    //    source: "source 4" 
    // });
    
    db.close();

});