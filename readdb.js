console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1', apiVersion: '2012-08-10'});


exports.handler = function(event, context, callback) {
  
    let scanningParameters = {
        TableName: 'automobile',
        Limit: 100
    };

   docClient.scan(scanningParameters, function(err, data){
      if(err){
          callback(err, null);
      }else{
          callback(null, data);
      }
});
};
