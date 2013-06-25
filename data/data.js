var AWS = require("aws-sdk");

AWS.config.loadFromPath("./data/config.json");

var contingencyPlansDataSource = require("./contingencyPlans");
contingencyPlansDataSource.init();

exports.contingencyPlans = contingencyPlansDataSource;
