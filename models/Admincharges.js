var Database = require("./Database");
class Admincharges {
    constructor() {
        this.id = 0;
        this.charges = "";
        this.date = "";

        this.db = new Database();
        this.query = "";
    }

    save() {
        this.query = "INSERT INTO admincharges (charges, date)";
        this.query += "VALUES('" + this.charges + "', '" + this.date + "')";

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }

    // Rest of the code...



    //update record
    update() {

        this.query = "UPDATE admincharges SET id ='" + this.id + "',charges= '" + this.charges + "',date='" + this.date + "' WHERE id = " + this.id;

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }

    //get list of records
    list() {
        this.query = "SELECT * FROM admincharges ORDER BY id";
        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });
    }

    //get single record
    get() {

        this.query = "SELECT * FROM admincharges WHERE id = " + this.id;

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }

    //delete record
    delete() {
        this.query = "DELETE FROM admincharges WHERE id=" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }

}
module.exports = Admincharges;

// function dosomething() {
//     throw new Error(
//         'a error is thrown from dosomething');
// }

// function init() {
//     try {
//         dosomething();
//     }
//     catch (e) {
//         console.log(e);
//     }
//     console.log(
//         "After successful error handling");
// }

// init();