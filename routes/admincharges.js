var express = require("express");
var Admincharges = require("../models/Admincharges");
var router = express.Router();

//save record
router.put("/save", (req, res) => {
    let body = req.body;
    let admincharges = new Admincharges();
    admincharges.charges = body.charges;
    admincharges.date = body.date;

    admincharges.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))

    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    });

});


//update record
router.post("/update", async (req, res) => {
    let body = req.body;
    let admincharges = new Admincharges();
    admincharges.id = body.id;
    admincharges.charges = body.charges;
    admincharges.date = body.date;

    admincharges.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
});

//get list of records
router.get("/list", (req, res) => {

    let admincharges = new Admincharges();
    admincharges.id = req.params.id;

    admincharges.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/get/:id", (req, res) => {

    let admincharges = new Admincharges();
    admincharges.id = req.params.id;

    admincharges.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});

//delete record
router.delete("/delete/:id", (req, res) => {
    let admincharges = new Admincharges();
    admincharges.id = req.params.id;
    admincharges.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


module.exports = router;
