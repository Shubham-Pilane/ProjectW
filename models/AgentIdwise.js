var Database = require("./Database");
class AgentIdwise {
    constructor() {
        this.id = 0;
        this.client_name = "";
        this.reg_date = "";
        this.mobile_no = "";
        this.alt_mobileno = "";
        this.address = "";
        this.photo = "";
        this.gender = "";
        this.tenor_month = "";
        this.dob = "";
        this.investment_amt = "";
        this.referalname1 = "";
        this.level = "";
        // this.referalname2 = "";
        // this.referalpercent2 = "";
        // this.referalname3 = "";
        // this.referalpercent3 = "";
        // this.referalname4 = "";
        // this.referalpercent4 = "";
        // this.referalname5 = "";
        // this.referalpercent5 = "";
        this.pan = "";
        this.aadhar = "";
        this.bank_name = "";
        this.acc_no = "";
        this.ifsc_code = "";
        this.branch_name = "";
        this.status = "";

        this.db = new Database();
        this.query = "";
    }


    save() {

        this.query = "INSERT INTO newclient (client_name,reg_date,mobile_no,alt_mobileno,address,photo,gender,tenor_month,dob,investment_amt,referalname1,level,pan,aadhar,bank_name,acc_no,ifsc_code,branch_name,status)";

        this.query += "VALUES('" + this.client_name + "','" + this.reg_date + "','" + this.mobile_no + "', '" + this.alt_mobileno + "', '" + this.address + "','" + this.photo + "', '"
            + this.gender + "','" + this.tenor_month + "','" + this.dob + "','" + this.investment_amt + "','" + this.referalname1 + "','" + this.level + "','"
            + this.pan + "', '" + this.aadhar + "', '" + this.bank_name + "','" + this.acc_no + "', '" + this.ifsc_code + "','" + this.branch_name + "', '" + this.status + "' )";

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }

    update() {

        this.query = "UPDATE newclient SET id ='" + this.id + "',client_name= '" + this.client_name + "',reg_date='" + this.reg_date + "',mobile_no='" + this.mobile_no + "',  alt_mobileno='" + this.alt_mobileno + "', "
        this.query += "address='" + this.address + "',photo= '" + this.photo + "',gender='" + this.gender + "',tenor_month='" + this.tenor_month + "',dob='" + this.dob + "',investment_amt='" + this.investment_amt + "',"
        this.query += "referalname1='" + this.referalname1 + "',level='" + this.level + "', "
        this.query += "pan='" + this.pan + "',aadhar='" + this.aadhar + "', bank_name='" + this.bank_name + "', bank_name='" + this.bank_name + "', "
        this.query += "acc_no='" + this.acc_no + "', ifsc_code='" + this.ifsc_code + "',branch_name='" + this.branch_name + "', status='" + this.status + "'  WHERE id = " + this.id;

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }


    list() {
        this.query = "SELECT * FROM newclient WHERE id = " + this.id;
        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });
    }

    get() {
        this.query = "SELECT * FROM newclient WHERE id = " + this.id;

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }

    delete() {
        this.query = "DELETE FROM newclient WHERE id=" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }


}

module.exports = AgentIdwise;