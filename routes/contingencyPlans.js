var dataSources = require("../data/data");

exports.findAll = function(req, res)
{
    var data = dataSources.contingencyPlans.findAll();
    res.send(data);
};

exports.findById = function(req, res)
{
    var data = dataSources.contingencyPlans.findById(req.params.id);
    res.send(data);
};

exports.addPlan = function(req, res)
{
};

exports.updatePlan = function(req, res)
{
};

exports.deletePlan = function(req, res)
{
};
