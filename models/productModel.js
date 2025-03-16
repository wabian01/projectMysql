const db = require('../config/db');

class Product {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM products');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM products WHERE product_id = ?', [id]);
        return rows[0];
    }

    static async create(product) {
        const { name, category_id, price, stock_quantity } = product;
        const [result] = await db.query('INSERT INTO products (name, category_id, price, stock_quantity) VALUES (?, ?, ?, ?)', [name, category_id, price, stock_quantity]);
        return result.insertId;
    }

    static async update(id, product) {
        const { name, category_id, price, stock_quantity } = product;
        await db.query('UPDATE products SET name = ?, category_id = ?, price = ?, stock_quantity = ? WHERE product_id = ?', [name, category_id, price, stock_quantity, id]);
    }

    static async delete(id) {
        await db.query('DELETE FROM products WHERE product_id = ?', [id]);
    }
}

module.exports = Product;