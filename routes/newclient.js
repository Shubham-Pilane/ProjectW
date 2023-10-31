var express = require("express")
var Newclient = require("../models/Newclient");
var fs = require("fs");
var router = express.Router();

router.put("/save", (req, res) => {
    let body = req.body;
    let newclient = new Newclient();
    newclient.client_name = body.client_name;
    newclient.reg_date = body.reg_date;
    newclient.mobile_no = body.mobile_no;
    newclient.alt_mobileno = body.alt_mobileno;
    newclient.address = body.address;
    newclient.gender = body.gender;
    newclient.tenor_month = body.tenor_month;
    newclient.dob = body.dob;
    newclient.investment_amt = body.investment_amt;
    newclient.referalname1 = body.referalname1;
    newclient.level = body.level;
    // newclient.referalname2 = body.referalname2;
    // newclient.referalpercent2 = body.referalpercent2;
    // newclient.referalname3 = body.referalname3;
    // newclient.referalpercent3 = body.referalpercent3;
    // newclient.referalname4 = body.referalname4;
    // newclient.referalpercent4 = body.referalpercent4;
    // newclient.referalname5 = body.referalname5;
    // newclient.referalpercent5 = body.referalpercent5;
    newclient.bank_name = body.bank_name;
    newclient.acc_no = body.acc_no;
    newclient.ifsc_code = body.ifsc_code;
    newclient.branch_name = body.branch_name;
    newclient.status = body.status;

    newclient.photo = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64image = body.photo;

    if (base64image != "") {

        base64image = base64image.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + newclient.photo, base64image, 'base64', (err) => {
        });
    }

    newclient.pan = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64 = body.pan;

    if (base64 != "") {

        base64 = base64.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + newclient.pan, base64, 'base64', (err) => {
        });
    }

    newclient.aadhar = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64images = body.aadhar;

    if (base64images != "") {

        base64images = base64images.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + newclient.aadhar, base64images, 'base64', (err) => {
        });
    }

    newclient.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {


        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/list", (req, res) => {

    let newclient = new Newclient();
    newclient.id = req.params.id;

    newclient.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/get/:id", (req, res) => {

    let newclient = new Newclient();
    newclient.id = req.params.id;

    newclient.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});

router.post("/update", (req, res) => {
    let body = req.body;
    let newclient = new Newclient();
    newclient.id = body.id;
    newclient.client_name = body.client_name;
    newclient.reg_date = body.reg_date;
    newclient.mobile_no = body.mobile_no;
    newclient.alt_mobileno = body.alt_mobileno;
    newclient.address = body.address;
    newclient.gender = body.gender;
    newclient.tenor_month = body.tenor_month;
    newclient.dob = body.dob;
    newclient.investment_amt = body.investment_amt;
    newclient.referalname1 = body.referalname1;
    newclient.level = body.level;
    // newclient.referalname2 = body.referalname2;
    // newclient.referalpercent2 = body.referalpercent2;
    // newclient.referalname3 = body.referalname3;
    // newclient.referalpercent3 = body.referalpercent3;
    // newclient.referalname4 = body.referalname4;
    // newclient.referalpercent4 = body.referalpercent4;
    // newclient.referalname5 = body.referalname5;
    // newclient.referalpercent5 = body.referalpercent5;
    newclient.bank_name = body.bank_name;
    newclient.acc_no = body.acc_no;
    newclient.ifsc_code = body.ifsc_code;
    newclient.branch_name = body.branch_name;
    newclient.status = body.status;


    newclient.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))

    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    }
    );

});

router.delete("/delete/:id", (req, res) => {
    let newclient = new Newclient();
    newclient.id = req.params.id;

    newclient.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });


})



module.exports = router;