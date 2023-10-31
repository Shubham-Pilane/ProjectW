var express = require("express")
var Clientpayment = require("../models/Clientpayment");
var fs = require("fs");
var router = express.Router();

router.put("/save", (req, res) => {
    let body = req.body;
    let clientpayment = new Clientpayment();
    clientpayment.client_name = body.client_name;
    clientpayment.agent_name1 = body.agent_name1;
    // clientpayment.agent_name2 = body.agent_name2;
    // clientpayment.agent_name3 = body.agent_name3;
    clientpayment.reg_date = body.reg_date;
    clientpayment.payment_date = body.payment_date;
    clientpayment.investment_amt = body.investment_amt;
    clientpayment.remaining_amt = body.remaining_amt;
    clientpayment.refund_count = body.refund_count;
    clientpayment.tenor_month = body.tenor_month;
    clientpayment.refund_amt = body.refund_amt;
    clientpayment.interest_amt = body.interest_amt;
    clientpayment.on_profit_deduct = body.on_profit_deduct;
    clientpayment.total_amt = body.total_amt;
    clientpayment.admin_charge = body.admin_charge;
    clientpayment.grand_amt = body.grand_amt;

    clientpayment.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {


        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/list", (req, res) => {

    let clientpayment = new Clientpayment();
    clientpayment.id = req.params.id;

    clientpayment.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

router.get("/get/:id", (req, res) => {

    let clientpayment = new Clientpayment();
    clientpayment.id = req.params.id;

    clientpayment.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});

router.post("/update", (req, res) => {
    let body = req.body;
    let clientpayment = new Clientpayment();
    clientpayment.id = body.id;
    clientpayment.client_name = body.client_name;
    clientpayment.agent_name1 = body.agent_name1;
    clientpayment.agent_name2 = body.agent_name2;
    clientpayment.agent_name3 = body.agent_name3;
    clientpayment.reg_date = body.reg_date;
    clientpayment.payment_date = body.payment_date;
    clientpayment.investment_amt = body.investment_amt;
    clientpayment.remaining_amt = body.remaining_amt;
    clientpayment.refund_count = body.refund_count;
    clientpayment.tenor_month = body.tenor_month;
    clientpayment.refund_amt = body.refund_amt;
    clientpayment.interest_amt = body.interest_amt;
    clientpayment.on_profit_deduct = body.on_profit_deduct;
    clientpayment.total_amt = body.total_amt;
    clientpayment.admin_charge = body.admin_charge;
    clientpayment.grand_amt = body.grand_amt;

    clientpayment.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))

    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }))
    }
    );

});

router.delete("/delete/:id", (req, res) => {
    let clientpayment = new Clientpayment();
    clientpayment.id = req.params.id;

    clientpayment.delete().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });


})



module.exports = router;