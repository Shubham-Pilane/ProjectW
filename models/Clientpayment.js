var Database = require("./Database");
class Clientpayment {
    constructor() {
        this.id = 0;
        this.client_name = "";
        this.agent_name1 = "";
        this.agent_name2 = "";
        this.agent_name3 = "";
        this.reg_date = "";
        this.payment_date = "";
        this.investment_amt = "";
        this.remaining_amt = "";
        this.refund_count = "";
        this.tenor_month = "";
        this.refund_amt = "";
        this.interest_amt = "";
        // this.on_profit_deduct = "";
        this.total_amt = "";
        this.admin_charge = "";
        this.grand_amt = "";

        this.db = new Database();
        this.query = "";
    }


    save() {

        this.query = "INSERT INTO clientpayment (client_name,agent_name1,agent_name2,agent_name3,reg_date,payment_date,investment_amt,remaining_amt,refund_count,tenor_month,refund_amt,interest_amt,total_amt,admin_charge,grand_amt)";

        this.query += "VALUES('" + this.client_name + "','" + this.agent_name1 + "','" + this.agent_name2 + "', '" + this.agent_name3 + "', '" + this.reg_date + "','" + this.payment_date + "', '"
            + this.investment_amt + "','" + this.remaining_amt + "','" + this.refund_count + "','" + this.tenor_month + "','" + this.refund_amt + "','" + this.interest_amt
            + "', '" + this.total_amt + "','" + this.admin_charge + "', '" + this.grand_amt + "' )";

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }

    update() {

        this.query = "UPDATE clientpayment SET id ='" + this.id + "',client_name= '" + this.client_name + "',agent_name1='" + this.agent_name1 + "',agent_name2='" + this.agent_name2 + "',  agent_name3='" + this.agent_name3 + "', "
        this.query += "reg_date='" + this.reg_date + "',payment_date= '" + this.payment_date + "',investment_amt='" + this.investment_amt + "',remaining_amt='" + this.remaining_amt + "',refund_count='" + this.refund_count + "',tenor_month='" + this.tenor_month + "',"
        this.query += "refund_amt='" + this.refund_amt + "',interest_amt='" + this.interest_amt + "',total_amt='" + this.total_amt + "', admin_charge='" + this.admin_charge + "',"
        this.query += "grand_amt='" + this.grand_amt + "'  WHERE id = " + this.id;

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }


    list() {
        this.query = "SELECT * FROM clientpayment ORDER BY id";
        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });
    }

    get() {
        this.query = "SELECT * FROM clientpayment WHERE id = " + this.id;

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }

    delete() {
        this.query = "DELETE FROM clientpayment WHERE id=" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }


}

module.exports = Clientpayment;