const connection = require('../db');

module.exports = {
    getAllOrder:(req, res) => {
        const sql = "SELECT * FROM orders"; 

        connection.query(sql, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to fatching data",
                    sattus: err
                })
            }
            if (result.length === 0) {
                return res.status(404).json({
                    message:"data not found", 
                    status: err
                })
            }
            return res.status(200).json({
                message: "success to fatching data", 
                data: result
            })
        })
    },
    getOrderById: (req, res) => {
        const id = req.params.id
        const sql = "SELECT * FROM orders WHERE order_id = ?"
    
        connection.query(sql, id, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "internal server error",
                    sattus: err
                })
            }
            if (result.length === 0) {
                return res.status(404).json({
                    message:"data not found", 
                    status: err
                })
            }
            return res.status(200).json({
                message:"success to fatching data", 
                data: result
            })
        })
    },
    addOrder : (req, res) => {
        const {user_id, product_name, order_date} = req.body
        const sql = "INSERT INTO orders (user_id, product_name, order_date) VALUES (?, ?, ?)";

        connection.query(sql, [user_id, product_name, order_date], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to add data", 
                    status: err
                })
            }
            return res.status(200).json({
                message: "success to add data", 
                data: result
            })
        })
    }, 
    editOrder : (req, res) => {
        const id = req.params.id
        const {user_id, product_name, order_date} = req.body
        const sql = "UPDATE orders SET user_id = ?, product_name = ?, order_date = ? WHERE order_id = ?"

        connection.query(sql, [user_id, product_name, order_date, id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to update data", 
                    status: err
                })
            }
            return res.status(200).json({
                message: "success to update data", 
                data: result
            })
        })
    },
    deleteOrder : (req, res) => {
        const id = req.params.id; 
        const sql = "DELETE FROM orders WHERE order_id = ?"

        connection.query(sql, id, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to delete data",
                    status: err
                })
            }
            return res.status(200).json({
                message: "data deleted", 
                data: result
            })
        })
    }
}
