var express = require("express")
var Newagent = require("../models/Newagent");
var fs = require("fs");
var router = express.Router();

router.put("/save", (req, res) => {
    let body = req.body;
    let newagent = new Newagent();
    newagent.agent_name = body.agent_name;
    newagent.reg_date = body.reg_date;
    newagent.mobile_no = body.mobile_no;
    newagent.alt_mobileno = body.alt_mobileno;
    newagent.address = body.address;
    newagent.gender = body.gender;
    newagent.dob = body.dob;
    newagent.investment_amt = body.investment_amt;
    newagent.refname1 = body.refname1;
    newagent.refpercent1 = body.refpercent1;
    newagent.refname2 = body.refname2;
    newagent.refpercent2 = body.refpercent2;
    newagent.refname3 = body.refname3;
    newagent.refpercent3 = body.refpercent3;
    newagent.refname4 = body.refname4;
    newagent.refpercent4 = body.refpercent4;
    newagent.refname5 = body.refname5;
    newagent.refpercent5 = body.refpercent5;
    newagent.bank_name = body.bank_name;
    newagent.acc_no = body.acc_no;
    newagent.ifsc_code = body.ifsc_code;
    newagent.branch_name = body.branch_name;
    newagent.status = body.status;

    newagent.photo = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64image = body.photo;

    if (base64image != "") {

        base64image = base64image.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + newagent.photo, base64image, 'base64', (err) => {
        });
    }

    newagent.pan = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64 = body.pan;

    if (base64 != "") {

        base64 = base64.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + newagent.pan, base64, 'base64', (err) => {
        });
    }

    newagent.aadhar = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64images = body.aadhar;

    if (base64images != "") {

        base64images = base64images.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + newagent.aadhar, base64images, 'base64', (err) => {
        });
    }

    newagent.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {


        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/list", (req, res) => {

    let newagent = new Newagent();
    newagent.id = req.params.id;

    newagent.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/get/:id", (req, res) => {

    let newagent = new Newagent();
    newagent.id = req.params.id;

    newagent.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});

router.post("/update", (req, res) => {
    let body = req.body;
    let newagent = new Newagent();
    newagent.id = body.id;
    newagent.agent_name = body.agent_name;
    newagent.reg_date = body.reg_date;
    newagent.mobile_no = body.mobile_no;
    newagent.alt_mobileno = body.alt_mobileno;
    newagent.address = body.address;
    newagent.gender = body.gender;
    newagent.dob = body.dob;
    newagent.investment_amt = body.investment_amt;
    newagent.refname1 = body.refname1;
    newagent.refpercent1 = body.refpercent1;
    newagent.refname2 = body.refname2;
    newagent.refpercent2 = body.refpercent2;
    newagent.refname3 = body.refname3;
    newagent.refpercent3 = body.refpercent3;
    newagent.refname4 = body.refname4;
    newagent.refpercent4 = body.refpercent4;
    newagent.refname5 = body.refname5;
    newagent.refpercent5 = body.refpercent5;
    newagent.bank_name = body.bank_name;
    newagent.acc_no = body.acc_no;
    newagent.ifsc_code = body.ifsc_code;
    newagent.branch_name = body.branch_name;
    newagent.status = body.status;


    newagent.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))

    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    }
    );

});

router.delete("/delete/:id", (req, res) => {
    let newagent = new Newagent();
    newagent.id = req.params.id;

    newagent.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });


})



module.exports = router;