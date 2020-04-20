const AWS = require('aws-sdk');
// Create DynamoDB service object
//AWS.config.loadFromPath('./config.json');
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = function(event, context, callback) {

var tableParams = {
  AttributeDefinitions: [
    {
      AttributeName: 'ID',
      AttributeType: 'N'

    }
    
  ],
  KeySchema: [
    {
      AttributeName: 'ID',
      KeyType: 'HASH'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  },
  TableName: 'automobiles',
  StreamSpecification: {
    StreamEnabled: false
  }
};

ddb.createTable(tableParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);

  }
});

};
