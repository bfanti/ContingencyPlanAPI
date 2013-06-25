var AWS = require("aws-sdk");
var dynamoDB = new AWS.DynamoDB();

exports.init = function()
{
    dynamoDB.describeTable({ TableName: "contingencyPlans" }, function(err, data)
    {
        console.log(err);
        console.log(data);
    });

    dynamoDB.createTable(
    {
        TableName: "contingencyPlans",
        AttributeDefinitions:
        [
            { AttributeName: "Name", AttributeType: "S" },
            { AttributeName: "Id", AttributeType: "N" }
        ],
        KeySchema:
        [
            { AttributeName: "Id", KeyType: "HASH" }
        ]
    });
};

exports.findAll = function()
{
    dynamoDB.query(
    {
        TableName: "contingencyPlans",
        Select: "Name"
    });
};
