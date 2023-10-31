var express = require("express")
var AgentIdwise = require("../models/AgentIdwise");
var fs = require("fs");
var router = express.Router();

router.put("/save", (req, res) => {
    let body = req.body;
    let agentidwise = new AgentIdwise();
    agentidwise.client_name = body.client_name;
    agentidwise.reg_date = body.reg_date;
    agentidwise.mobile_no = body.mobile_no;
    agentidwise.alt_mobileno = body.alt_mobileno;
    agentidwise.address = body.address;
    agentidwise.gender = body.gender;
    agentidwise.tenor_month = body.tenor_month;
    agentidwise.dob = body.dob;
    agentidwise.investment_amt = body.investment_amt;
    agentidwise.referalname1 = body.referalname1;
    agentidwise.level = body.level;
    // agentidwise.referalname2 = body.referalname2;
    // agentidwise.referalpercent2 = body.referalpercent2;
    // agentidwise.referalname3 = body.referalname3;
    // agentidwise.referalpercent3 = body.referalpercent3;
    // agentidwise.referalname4 = body.referalname4;
    // agentidwise.referalpercent4 = body.referalpercent4;
    // agentidwise.referalname5 = body.referalname5;
    // agentidwise.referalpercent5 = body.referalpercent5;
    agentidwise.bank_name = body.bank_name;
    agentidwise.acc_no = body.acc_no;
    agentidwise.ifsc_code = body.ifsc_code;
    agentidwise.branch_name = body.branch_name;
    agentidwise.status = body.status;

    agentidwise.photo = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64image = body.photo;

    if (base64image != "") {

        base64image = base64image.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + agentidwise.photo, base64image, 'base64', (err) => {
        });
    }

    agentidwise.pan = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64 = body.pan;

    if (base64 != "") {

        base64 = base64.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + agentidwise.pan, base64, 'base64', (err) => {
        });
    }

    agentidwise.aadhar = "pics/" + (Math.random() + 1).toString(36).substring(7) + ".png";

    let base64images = body.aadhar;

    if (base64images != "") {

        base64images = base64images.replace(/^data:image\/[a-z]*;base64,/, "");
        fs.writeFile("public/" + agentidwise.aadhar, base64images, 'base64', (err) => {
        });
    }

    agentidwise.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {


        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/list/:id", (req, res) => {

    let agentidwise = new AgentIdwise();
    agentidwise.id = req.params.id;

    agentidwise.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/get/:id", (req, res) => {

    let agentidwise = new AgentIdwise();
    agentidwise.id = req.params.id;

    agentidwise.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});

router.post("/update", (req, res) => {
    let body = req.body;
    let agentidwise = new AgentIdwise();
    agentidwise.id = body.id;
    agentidwise.client_name = body.client_name;
    agentidwise.reg_date = body.reg_date;
    agentidwise.mobile_no = body.mobile_no;
    agentidwise.alt_mobileno = body.alt_mobileno;
    agentidwise.address = body.address;
    agentidwise.gender = body.gender;
    agentidwise.tenor_month = body.tenor_month;
    agentidwise.dob = body.dob;
    agentidwise.investment_amt = body.investment_amt;
    agentidwise.referalname1 = body.referalname1;
    agentidwise.level = body.level;
    // agentidwise.referalname2 = body.referalname2;
    // agentidwise.referalpercent2 = body.referalpercent2;
    // agentidwise.referalname3 = body.referalname3;
    // agentidwise.referalpercent3 = body.referalpercent3;
    // agentidwise.referalname4 = body.referalname4;
    // agentidwise.referalpercent4 = body.referalpercent4;
    // agentidwise.referalname5 = body.referalname5;
    // agentidwise.referalpercent5 = body.referalpercent5;
    agentidwise.bank_name = body.bank_name;
    agentidwise.acc_no = body.acc_no;
    agentidwise.ifsc_code = body.ifsc_code;
    agentidwise.branch_name = body.branch_name;
    agentidwise.status = body.status;


    agentidwise.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))

    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    }
    );

});

router.delete("/delete/:id", (req, res) => {
    let agentidwise = new AgentIdwise();
    agentidwise.id = req.params.id;

    agentidwise.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });


})



module.exports = router;