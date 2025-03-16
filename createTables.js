const mysql = require('mysql2');

// Tạo kết nối đến cơ sở dữ liệu
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shop'
});

// Kết nối đến cơ sở dữ liệu
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');

    // Tạo bảng products
    const createProductsTable = `
        CREATE TABLE IF NOT EXISTS products (
            product_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            category_id INT NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            stock_quantity INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    // Tạo bảng orders
    const createOrdersTable = `
        CREATE TABLE IF NOT EXISTS orders (
            order_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            total_price DECIMAL(10,2) NOT NULL,
            order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status VARCHAR(50) NOT NULL
        )
    `;

    // Thực thi câu lệnh tạo bảng products
    connection.query(createProductsTable, (err, results) => {
        if (err) {
            console.error('Error creating products table:', err.stack);
        } else {
            console.log('Products table created or already exists');
        }
    });

    // Thực thi câu lệnh tạo bảng orders
    connection.query(createOrdersTable, (err, results) => {
        if (err) {
            console.error('Error creating orders table:', err.stack);
        } else {
            console.log('Orders table created or already exists');
        }
    });

    // Đóng kết nối sau khi hoàn thành
    connection.end();
});