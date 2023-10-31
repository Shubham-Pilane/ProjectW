var Database = require("./Database");
class Addagentid {
    constructor() {
        this.client_name = "";
        this.id = 0;
        this.password = "";

        this.db = new Database();
        this.query = "";
    }


    save() {

        this.query = "INSERT INTO addagentid (client_name,id,password)";

        this.query += "VALUES('" + this.client_name + "','" + this.id + "','" + this.password + "' )";

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }

    update() {

        this.query = "UPDATE addagentid SET id ='" + this.id + "',client_name= '" + this.client_name + "',password='" + this.password + "'  WHERE id = " + this.id;

        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });

    }


    list() {
        this.query = "SELECT * FROM addagentid ORDER BY id";
        return new Promise((resolve, reject) => {

            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });

        });
    }

    get() {
        this.query = "SELECT * FROM addagentid WHERE id = " + this.id;

        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }

    delete() {
        this.query = "DELETE FROM addagentid WHERE id=" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });

    }


}

module.exports = Addagentid;