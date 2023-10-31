var Database = require("./Database");
class Newkyc {
    constructor() {
        this.id = 0;
        this.acc_holder_name = "";
        this.date = "";
        this.acc_no = "";
        this.pan = "";
        this.aadhar = "";
        this.bank_name = "";
        this.ifsc_code = "";
        this.branch_name = "";

        this.db = new Database();
        this.query = "";
    }


    save() {

        this.query = "INSERT INTO newkyc (acc_holder_name,date,acc_no,pan,aadhar,bank_name,ifsc_code,branch_name)";

        this.query += "VALUES('" + this.acc_holder_name + "','" + this.date + "','" + this.acc_no + "', '" + this.pan + "', '"
            + this.aadhar + "','" + this.bank_name + "', '" + this.ifsc_code + "', '" + this.branch_name + "' )";

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }

    update() {

        this.query = "UPDATE newkyc SET id ='" + this.id + "',acc_holder_name= '" + this.acc_holder_name + "',date='" + this.date + "',acc_no='" + this.acc_no + "', "
        this.query += "pan='" + this.pan + "',aadhar='" + this.aadhar + "', bank_name='" + this.bank_name + "', "
        this.query += "ifsc_code='" + this.ifsc_code + "', branch_name='" + this.branch_name + "'  WHERE id = " + this.id;

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }


    list() {
        this.query = "SELECT * FROM newkyc ORDER BY id";
        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });
    }

    get() {
        this.query = "SELECT * FROM newkyc WHERE id = " + this.id;

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }

    delete() {
        this.query = "DELETE FROM newkyc WHERE id=" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }


}

module.exports = Newkyc;