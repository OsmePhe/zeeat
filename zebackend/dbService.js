const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    // host: process.env.HOST,
    // user: process.env.USERNAME ,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE,
    // port: process.env.DB_PORT
    host: 5000,
    user: "root",//Omar95
    password: "",//Dorcas19952112.@
    database: "ze_eat",
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db ' + connection.state);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM projects;";
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getEtablissement(req,res) {
        try {
            connection.query(
            "SELECT * FROM etablissement;",
            (err, result) => {
                if (result.length > 0) {
                res.send(result);
                } else {
                res.send({err : "Veuillez réessayer."});
                }
                res.end();
            }
            );       
        } catch (error) {
            console.log(error);
        }
    }

    async getPlatsEtablissement(req,res) {
        try {
            const nom_etablissement = req;
            connection.query(
            "SELECT * FROM plats WHERE nom_etablissement = ? ;",
            [nom_etablissement],
            (err, result) => {
                if (result.length > 0) {
                res.send(result);
                } else {
                res.send({err : "Veuillez réessayer."});
                }
                res.end();
            }
            );       
        } catch (error) {
            console.log(error);
        }
    }

    async postLogin(req,res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            if (email && password) {
                connection.query(
                "SELECT * FROM client WHERE email = ? AND password = ?",
                [email, password],
                (err, result) => {
                  if (result.length > 0) {
                    res.send(result);
                  } else {
                    res.send({err : "Hmm, nous ne trouvons pas ces identifiants dans nos données. Veuillez réessayer."});
                  }
                  res.end();
                }
              );
            } else {
                res.send("Please enter email and Password!");
                res.end();
            }          
        } catch (error) {
            console.log(error);
        }
    }

    async postRegister(req,res) {
        try {
            const nom = req.body.nom;
            const prenom = req.body.prenom;
            const email = req.body.email;
            const password = req.body.password;
            const numero = req.body.numero;
            if (nom && prenom && email && password && numero) {
                connection.query(
                "INSERT INTO client (nom, prenom, email, password, numero) VALUES (?,?,?,?,?)",
                [nom, prenom, email, password, numero],
                (err, result) => {
                    if(err){
                      res.send({err : err + "Please enter first name, last name and email and Password!"});
                      res.end();
                    }else{
                      res.send(result);
                    }

                }
              );
            }         
        } catch (error) {
            console.log(error);
        }
    }
    







    /*async insertNewName(name) {
        try {
            const dateAdded = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO names (name, date_added) VALUES (?,?);";

                connection.query(query, [name, dateAdded] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return {
                id : insertId,
                name : name,
                dateAdded : dateAdded
            };
        } catch (error) {
            console.log(error);
        }
    }

    async deleteRowById(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM names WHERE id = ?";
    
                connection.query(query, [id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async updateNameById(id, name) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE names SET name = ? WHERE id = ?";
    
                connection.query(query, [name, id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async searchByName(name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM names WHERE name = ?;";

                connection.query(query, [name], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }*/
}

module.exports = DbService;