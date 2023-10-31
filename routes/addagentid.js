var express = require("express")
var Addagentid = require("../models/Addagentid");
var fs = require("fs");
var router = express.Router();

router.put("/save", (req, res) => {
    let body = req.body;
    let addagentid = new Addagentid();
    addagentid.client_name = body.client_name;
    addagentid.password = body.password;

    addagentid.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {


        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/list", (req, res) => {

    let addagentid = new Addagentid();
    addagentid.id = req.params.id;

    addagentid.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/get/:id", (req, res) => {

    let addagentid = new Addagentid();
    addagentid.id = req.params.id;

    addagentid.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});

router.post("/update", (req, res) => {
    let body = req.body;
    let addagentid = new Addagentid();
    addagentid.id = body.id;
    addagentid.client_name = body.client_name;
    addagentid.password = body.password;

    addagentid.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))

    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    }
    );

});

router.delete("/delete/:id", (req, res) => {
    let addagentid = new Addagentid();
    addagentid.id = req.params.id;

    addagentid.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });


})



module.exports = router;