var express = require("express")
var Daycount = require("../models/Daycount");
var fs = require("fs");
var router = express.Router();

router.put("/save", (req, res) => {
    let body = req.body;
    let daycount = new Daycount();
    daycount.client_name = body.client_name;
    daycount.reg_date = body.reg_date;
    daycount.mobile_no = body.mobile_no;
    daycount.alt_mobileno = body.alt_mobileno;
    daycount.address = body.address;
    daycount.gender = body.gender;
    daycount.tenor_month = body.tenor_month;
    daycount.dob = body.dob;
    daycount.investment_amt = body.investment_amt;
    daycount.referalname1 = body.referalname1;
    daycount.level = body.level;
    // daycount.referalname2 = body.referalname2;
    // daycount.referalpercent2 = body.referalpercent2;
    // daycount.referalname3 = body.referalname3;
    // daycount.referalpercent3 = body.referalpercent3;
    // daycount.referalname4 = body.referalname4;
    // daycount.referalpercent4 = body.referalpercent4;
    // daycount.referalname5 = body.referalname5;
    // daycount.referalpercent5 = body.referalpercent5;
    daycount.bank_name = body.bank_name;
    daycount.acc_no = body.acc_no;
    daycount.ifsc_code = body.ifsc_code;
    daycount.branch_name = body.branch_name;
    daycount.status = body.status;

    daycount.photo = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64image = body.photo;

    if (base64image != "") {

        base64image = base64image.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + daycount.photo, base64image, 'base64', (err) => {
        });
    }

    daycount.pan = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64 = body.pan;

    if (base64 != "") {

        base64 = base64.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + daycount.pan, base64, 'base64', (err) => {
        });
    }

    daycount.aadhar = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64images = body.aadhar;

    if (base64images != "") {

        base64images = base64images.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + daycount.aadhar, base64images, 'base64', (err) => {
        });
    }

    daycount.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {


        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/list", (req, res) => {

    let daycount = new Daycount();
    daycount.id = req.params.id;

    daycount.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/get/:id", (req, res) => {

    let daycount = new Daycount();
    daycount.id = req.params.id;

    daycount.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});

router.post("/update", (req, res) => {
    let body = req.body;
    let daycount = new Daycount();
    daycount.id = body.id;
    daycount.client_name = body.client_name;
    daycount.reg_date = body.reg_date;
    daycount.mobile_no = body.mobile_no;
    daycount.alt_mobileno = body.alt_mobileno;
    daycount.address = body.address;
    daycount.gender = body.gender;
    daycount.tenor_month = body.tenor_month;
    daycount.dob = body.dob;
    daycount.investment_amt = body.investment_amt;
    daycount.referalname1 = body.referalname1;
    daycount.level = body.level;
    // daycount.referalname2 = body.referalname2;
    // daycount.referalpercent2 = body.referalpercent2;
    // daycount.referalname3 = body.referalname3;
    // daycount.referalpercent3 = body.referalpercent3;
    // daycount.referalname4 = body.referalname4;
    // daycount.referalpercent4 = body.referalpercent4;
    // daycount.referalname5 = body.referalname5;
    // daycount.referalpercent5 = body.referalpercent5;
    daycount.bank_name = body.bank_name;
    daycount.acc_no = body.acc_no;
    daycount.ifsc_code = body.ifsc_code;
    daycount.branch_name = body.branch_name;
    daycount.status = body.status;


    daycount.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))

    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    }
    );

});

router.delete("/delete/:id", (req, res) => {
    let daycount = new Daycount();
    daycount.id = req.params.id;

    daycount.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });


})



module.exports = router;