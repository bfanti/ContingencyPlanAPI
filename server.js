var express = require("express");
var app = express();

var contingencyPlans = require("./routes/contingencyPlans");

app.configure(function()
{
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
});

app.get("/contingencyplans", contingencyPlans.findAll);
app.get("/contingencyplans/:id", contingencyPlans.findById);
app.post("/contingencyplans", contingencyPlans.addPlan);
app.put("/contingencyplans/:id", contingencyPlans.updatePlan);
app.delete("/contingencyplans/:id", contingencyPlans.deletePlan);

app.listen(3000);
console.log("Listening on port 3000...");
