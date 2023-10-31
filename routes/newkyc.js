var express = require("express")
var Newkyc = require("../models/Newkyc");
var fs = require("fs");
var router = express.Router();

router.put("/save", (req, res) => {
    let body = req.body;
    let newkyc = new Newkyc();
    newkyc.acc_holder_name = body.acc_holder_name;
    newkyc.date = body.date;
    newkyc.acc_no = body.acc_no;
    newkyc.bank_name = body.bank_name;
    newkyc.ifsc_code = body.ifsc_code;
    newkyc.branch_name = body.branch_name;

    newkyc.pan = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64 = body.pan;

    if (base64 != "") {

        base64 = base64.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + newkyc.pan, base64, 'base64', (err) => {
        });
    }

    newkyc.aadhar = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64images = body.aadhar;

    if (base64images != "") {

        base64images = base64images.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + newkyc.aadhar, base64images, 'base64', (err) => {
        });
    }

    newkyc.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {


        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/list", (req, res) => {

    let newkyc = new Newkyc();
    newkyc.id = req.params.id;

    newkyc.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/get/:id", (req, res) => {

    let newkyc = new Newkyc();
    newkyc.id = req.params.id;

    newkyc.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});

router.post("/update", (req, res) => {
    let body = req.body;
    let newkyc = new Newkyc();
    newkyc.id = body.id;
    newkyc.acc_holder_name = body.acc_holder_name;
    newkyc.date = body.date;
    newkyc.acc_no = body.acc_no;
    newkyc.bank_name = body.bank_name;
    newkyc.ifsc_code = body.ifsc_code;
    newkyc.branch_name = body.branch_name;


    newkyc.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))

    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    }
    );

});

router.delete("/delete/:id", (req, res) => {
    let newkyc = new Newkyc();
    newkyc.id = req.params.id;

    newkyc.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });


})



module.exports = router;