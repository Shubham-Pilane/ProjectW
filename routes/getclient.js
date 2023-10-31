var express = require("express")
var GetClient = require("../models/GetClient");
var fs = require("fs");
var router = express.Router();

router.put("/save", (req, res) => {
    let body = req.body;
    let getclient = new GetClient();
    getclient.client_name = body.client_name;
    getclient.reg_date = body.reg_date;
    getclient.mobile_no = body.mobile_no;
    getclient.alt_mobileno = body.alt_mobileno;
    getclient.address = body.address;
    getclient.gender = body.gender;
    getclient.tenor_month = body.tenor_month;
    getclient.dob = body.dob;
    getclient.investment_amt = body.investment_amt;
    getclient.referalname1 = body.referalname1;
    getclient.referalpercent1 = body.referalpercent1;
    // getclient.referalname2 = body.referalname2;
    // getclient.referalpercent2 = body.referalpercent2;
    // getclient.referalname3 = body.referalname3;
    // getclient.referalpercent3 = body.referalpercent3;
    // getclient.referalname4 = body.referalname4;
    // getclient.referalpercent4 = body.referalpercent4;
    // getclient.referalname5 = body.referalname5;
    // getclient.referalpercent5 = body.referalpercent5;
    getclient.bank_name = body.bank_name;
    getclient.acc_no = body.acc_no;
    getclient.ifsc_code = body.ifsc_code;
    getclient.branch_name = body.branch_name;
    getclient.status = body.status;

    getclient.photo = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64image = body.photo;

    if (base64image != "") {

        base64image = base64image.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + getclient.photo, base64image, 'base64', (err) => {
        });
    }

    getclient.pan = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64 = body.pan;

    if (base64 != "") {

        base64 = base64.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + getclient.pan, base64, 'base64', (err) => {
        });
    }

    getclient.aadhar = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64images = body.aadhar;

    if (base64images != "") {

        base64images = base64images.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + getclient.aadhar, base64images, 'base64', (err) => {
        });
    }

    getclient.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {


        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/list/:client_name", (req, res) => {

    let getclient = new GetClient();
    getclient.client_name = req.params.client_name;

    getclient.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/get/:id", (req, res) => {

    let getclient = new GetClient();
    getclient.id = req.params.id;

    getclient.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});

router.post("/update", (req, res) => {
    let body = req.body;
    let getclient = new GetClient();
    getclient.id = body.id;
    getclient.client_name = body.client_name;
    getclient.reg_date = body.reg_date;
    getclient.mobile_no = body.mobile_no;
    getclient.alt_mobileno = body.alt_mobileno;
    getclient.address = body.address;
    getclient.gender = body.gender;
    getclient.tenor_month = body.tenor_month;
    getclient.dob = body.dob;
    getclient.investment_amt = body.investment_amt;
    getclient.referalname1 = body.referalname1;
    getclient.referalpercent1 = body.referalpercent1;
    // getclient.referalname2 = body.referalname2;
    // getclient.referalpercent2 = body.referalpercent2;
    // getclient.referalname3 = body.referalname3;
    // getclient.referalpercent3 = body.referalpercent3;
    // getclient.referalname4 = body.referalname4;
    // getclient.referalpercent4 = body.referalpercent4;
    // getclient.referalname5 = body.referalname5;
    // getclient.referalpercent5 = body.referalpercent5;
    getclient.bank_name = body.bank_name;
    getclient.acc_no = body.acc_no;
    getclient.ifsc_code = body.ifsc_code;
    getclient.branch_name = body.branch_name;
    getclient.status = body.status;


    getclient.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))

    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    }
    );

});

router.delete("/delete/:id", (req, res) => {
    let getclient = new GetClient();
    getclient.id = req.params.id;

    getclient.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });


})



module.exports = router;