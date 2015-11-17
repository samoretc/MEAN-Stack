var mongodb = require('mongodb'); 

var uri = 'mongodb://localhost:27017/example'; 

mongodb.MongoClient.connect(uri, function(error, db) {
	if (error){
	    console.log(error); 
	    process.exit(1); 
	}

	db.collection('sample').insert({ x : 1 }, function(error, result) {
	  if (error) {
	     console.log(error); 
	     process.exit(1); 
          }
  

	process.exit(0); 
	}); 
}); 






//var _ = require('underscore'); 
//_.each([1, 2, 3], function(v) {
//   console.log(v); 
//}); 

