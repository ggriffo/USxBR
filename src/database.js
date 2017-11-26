var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://conversion:bcxp71v8nbkY8U2c7H7Z8ZQqL5JTsdfTB91wQxgMtaDYBFSijeMCwZDQsPpjLSsfWrMRjgagMfvUeQT79pv9Kg==@conversion.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";

mongoClient.connect(url, function (err, db) {

    var factorCollection = db.collection('UnitOfMeasure')

    var cursor = factorCollection.find();
    
    cursor.each(function(err, doc) {
        console.log(doc);
    });

    // db.collection("UnitOfMeasure").deleteOne({id: "1"});
    
    // db.collection("UnitOfMeasure").insertOne({
    //     id: "kg",
    //     name: "Kilogram",
    //     code: "KG" 
    //  });
    
    db.close();
});