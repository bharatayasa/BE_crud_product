const connection = require('../db');

module.exports = {
    getAllProduct : (req, res) => {
        const sql = "SELECT * FROM products"; 

        connection.query(sql, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to fatching product data",
                    error: err
                })
            }
            if (result.length === 0) {
                return res.status(404).json({
                    message: "data not found", 
                    error: err
                })
            }
            return res.status(200).json({
                message: "success to fatching product data",
                data: result
            })
        })
    },
    getProductById : (req, res) => {
        const id = req.params.id; 
        const sql = "SELECT * FROM products WHERE product_id = ?"

        connection.query(sql, id, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to fatching data by id", 
                    error: err
                })
            }
            if (result.length === null) {
                return res.status(404).json({
                    message: "data not found", 
                    error: err
                })
            }
            return res.status(200).json({
                message: "success to fatching data", 
                data: result
            })
        })
    },
    addProduct : (req, res) => {
        const {product_name, price} = req.body; 
        const sql = "INSERT INTO products (product_name, price) VALUES (?, ?)";

        connection.query(sql, [product_name, price], (err, result) => {
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
    updateProduct : (req, res) => {
        const id = req.params.id; 
        const {product_name, price} = req.body; 
        const sql = "UPDATE products SET product_name = ?, price = ? WHERE product_id = ?";

        connection.query(sql, [product_name, price, id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "failed to edit data", 
                    error: err
                })
            }
            return res.status(200).json({
                message: "success to update data", 
                data: result
            })
        })
    },
    deleteProduct : (req, res) => {
        const id = req.params.id; 
        const sql = "DELETE FROM products WHERE product_id = ?";

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
