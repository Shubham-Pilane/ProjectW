var Database = require("./Database");
class Newagent {
    constructor() {
        this.id = 0;
        this.agent_name = "";
        this.reg_date = "";
        this.mobile_no = "";
        this.alt_mobileno = "";
        this.address = "";
        this.photo = "";
        this.gender = ""
        this.dob = "";
        this.investment_amt = "";
        this.refname1 = "";
        this.refpercent1 = "";
        this.refname2 = "";
        this.refpercent2 = "";
        this.refname3 = "";
        this.refpercent3 = "";
        this.refname4 = "";
        this.refpercent4 = "";
        this.refname5 = "";
        this.refpercent5 = "";
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

        this.query = "INSERT INTO newagent (agent_name,reg_date,mobile_no,alt_mobileno,address,photo,gender,dob,investment_amt,refname1,refpercent1,refname2,refpercent2,refname3,refpercent3,refname4,refpercent4,refname5,refpercent5,pan,aadhar,bank_name,acc_no,ifsc_code,branch_name,status)";

        this.query += "VALUES('" + this.agent_name + "','" + this.reg_date + "','" + this.mobile_no + "', '" + this.alt_mobileno + "', '" + this.address + "','" + this.photo + "', '"
            + this.gender + "','" + this.dob + "','" + this.investment_amt + "','" + this.refname1 + "','" + this.refpercent1
            + "','" + this.refname2 + "', '" + this.refpercent2 + "','" + this.refname3 + "', '" + this.refpercent3
            + "','" + this.refname4 + "', '" + this.refpercent4 + "','" + this.refname5 + "', '" + this.refpercent5 
            + "','" + this.pan + "', '" + this.aadhar + "','" + this.bank_name + "', '" + this.acc_no + "', '"
            + this.ifsc_code + "', '" + this.branch_name + "', '" + this.status + "' )";

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }

    update() {

        this.query = "UPDATE newagent SET id ='" + this.id + "',agent_name= '" + this.agent_name + "',reg_date='" + this.reg_date + "',mobile_no='" + this.mobile_no + "',  alt_mobileno='" + this.alt_mobileno + "', "
        this.query += "address='" + this.address + "',photo= '" + this.photo + "',gender='" + this.gender + "',dob='" + this.dob + "',investment_amt='" + this.investment_amt + "',"
        this.query += "refname1='" + this.refname1 + "',refpercent1='" + this.refpercent1 + "',refname2= '" + this.refname2 + "',refpercent2='" + this.refpercent2 + "', refname3='" + this.refname3 + "',"
        this.query += "refpercent3='" + this.refpercent3 + "', refname4='" + this.refname4 + "',refpercent4='" + this.refpercent4 + "', refname5='" + this.refname5 + "', "
        this.query += "refpercent5='" + this.refpercent5 + "', pan='" + this.pan + "',aadhar='" + this.aadhar + "', bank_name='" + this.bank_name + "', "
        this.query += "acc_no='" + this.ifsc_code + "', branch_name='" + this.branch_name + "', status='" + this.status + "'  WHERE id = " + this.id;

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }


    list() {
        this.query = "SELECT * FROM newagent ORDER BY id";
        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });
    }

    get() {
        this.query = "SELECT * FROM newagent WHERE id = " + this.id;

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }

    delete() {
        this.query = "DELETE FROM newagent WHERE id=" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }


}

module.exports = Newagent;