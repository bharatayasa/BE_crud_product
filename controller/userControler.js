const connection = require('../db');

module.exports = {
    getAllUser: (req, res) => {
        const sql = "SELECT * FROM users"; 

        connection.query(sql, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to fatching data", 
                    error: err
                })
            }
            return res.status(200).json({
                message: "success to fatching data", 
                data: result
            })
        })
    },
    getUserById : (req, res) => {
        const id = req.params.id;
        const sql = "SELECT * FROM users WHERE user_id = ?"; 

        connection.query(sql, id, (err, result) => {
            if (err) {
                return res.status(200).json({
                    message : "failed to fatching data", 
                    error: err
                })
            }
            return res.status(200).json({
                message: "success to fatching data",
                data: result
            })
        })
    }, 
    addUser: (req, res) => {
        const {username, email} = req.body;
        const sql = "INSERT INTO users (username, email) VALUES (?, ?)";

        connection.query(sql, [username, email], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to add data",
                    error: err
                })
            }
            return res.status(200).json({
                message: "success to add data",
                data: result
            })
        })
    }, 
    updateUser: (req, res) => {
        const id = req.params.id;
        const {username, email} = req.body;
        const sql = "UPDATE users SET username = ?, email = ? WHERE user_id = ?";

        connection.query(sql, [username, email, id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to update data", 
                    error: err
                })
            }
            return res.status(200).json({
                message: "success to edit data", 
                data: result
            })
        })
    }, 
    deleteUser: (req, res) => {
        const id = req.params.id;
        const sql = "DELETE FROM users WHERE user_id = ?";

        connection.query(sql, id, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to delete data", 
                    error: err
                })
            }
            return res.status(200).json({
                message: "success to delete data",
                data: result
            })
        })
    }
}
