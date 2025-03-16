const db = require('../config/db');

class Order {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM orders');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM orders WHERE order_id = ?', [id]);
        return rows[0];
    }

    static async create(order) {
        const { user_id, total_price, status } = order;
        const [result] = await db.query('INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)', [user_id, total_price, status]);
        return result.insertId;
    }

    static async update(id, order) {
        const { user_id, total_price, status } = order;
        await db.query('UPDATE orders SET user_id = ?, total_price = ?, status = ? WHERE order_id = ?', [user_id, total_price, status, id]);
    }

    static async delete(id) {
        await db.query('DELETE FROM orders WHERE order_id = ?', [id]);
    }
}

module.exports = Order;