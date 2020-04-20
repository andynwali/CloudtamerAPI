console.log('starting function');
console.log('request');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1', apiVersion: '2012-08-10'});


exports.handler = function(event, context, callback) {
  
  console.log(event);
  var params = {
    Item: {
      ID: 1,
      model: "Golf",
      color: "Silver",
      make: "Volkswagen",
      year: 2005

    },

  TableName: 'automobile'
  };

   docClient.put(params, function(err, data){
      if(err){
          callback(err, null);
      }else{
          callback(null, data);
      }
     
   });


//Inserts 2nd line item into the automobile dynamodb table
console.log(event);
var params2 = {
Item: {
          ID: 2,
          model: "Camry",
          color: "Red",
          make: "Toyota",
          year: 2011


},

TableName: 'automobile'
};

 docClient.put(params2, function(err, data){
      if(err){
          callback(err, null);
      }else{
          callback(null, data);
      }
});

//Inserts 3rd line item into the automobile dynamodb table
console.log(event);
var params3 = {
Item: {
          ID: 3,
        model: "X5",
        color: "Black",
        make: "BMW",
        year: 2009


},

TableName: 'automobile'
};

 docClient.put(params3, function(err, data){
      if(err){
          callback(err, null);
      }else{
          callback(null, data);
      }
});

//Inserts 4th line item into the automobile dynamodb table
console.log(event);
var params4 = {
Item: {
          ID: 4,
        model: "Civic",
        color: "Blue",
        make: "Honda",
        year: 2016

},

TableName: 'automobile'
};

 docClient.put(params4, function(err, data){
      if(err){
          callback(err, null);
      }else{
          callback(null, data);
      }
});

//Inserts 5th line item into the automobile dynamodb table
console.log(event);
var params5 = {
Item: {
        ID: 5,
        model: "Impreza",
        color: "White",
        make: "Subaru",
        year: 2018

      },

TableName: 'automobile'
};

 docClient.put(params5, function(err, data){
      if(err){
          callback(err, null);
      }else{
          callback(null, data);
      }
});

};
