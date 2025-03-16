Chi tiết hướng dẫn cách sử dụng Fetch API để thực hiện các phương thức (methods) như GET, POST, PUT, DELETE cho các endpoint `/products` và `/orders`.

---

# Hướng dẫn sử dụng Fetch API để tương tác với API sản phẩm và đơn hàng

Dưới đây là hướng dẫn chi tiết cách sử dụng Fetch API để thực hiện các phương thức (methods) như GET, POST, PUT, DELETE cho các endpoint `/products` và `/orders`.

## 1. **Cài đặt và chạy server**

Trước khi sử dụng API, bạn cần cài đặt và chạy server:

1. Clone repository:
   ```bash
   git clone https://github.com/wabian01/projectMysql.git
   cd projectMysql
   ```

2. Cài đặt các dependencies:
   ```bash
   npm install
   ```
3. Tạo database nếu chưa có
   ```bash
   node createTables.js
   ```
4. Chạy server:
   ```bash
   node app.js
   ```

Server sẽ chạy tại `http://localhost:3000`.

---

## 2. **Các endpoint và cách sử dụng**

### **Sản phẩm (Products)**

#### 1. **Lấy tất cả sản phẩm (GET /products)**

- **URL**: `http://localhost:3000/products`
- **Method**: `GET`
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

#### 2. **Lấy sản phẩm theo ID (GET /products/:id)**

- **URL**: `http://localhost:3000/products/:id`
- **Method**: `GET`
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  const productId = 1; // Thay thế bằng ID sản phẩm bạn muốn lấy
  fetch(`http://localhost:3000/products/${productId}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

#### 3. **Tạo sản phẩm mới (POST /products)**

- **URL**: `http://localhost:3000/products`
- **Method**: `POST`
- **Body**: JSON object chứa thông tin sản phẩm.
  ```json
  {
    "name": "Laptop",
    "category_id": 1,
    "price": 1200.00,
    "stock_quantity": 10
  }
  ```
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Laptop',
      category_id: 1,
      price: 1200.00,
      stock_quantity: 10
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

#### 4. **Cập nhật sản phẩm (PUT /products/:id)**

- **URL**: `http://localhost:3000/products/:id`
- **Method**: `PUT`
- **Body**: JSON object chứa thông tin cập nhật.
  ```json
  {
    "name": "Updated Laptop",
    "category_id": 1,
    "price": 1300.00,
    "stock_quantity": 15
  }
  ```
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  const productId = 1; // Thay thế bằng ID sản phẩm bạn muốn cập nhật
  fetch(`http://localhost:3000/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Updated Laptop',
      category_id: 1,
      price: 1300.00,
      stock_quantity: 15
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

#### 5. **Xóa sản phẩm (DELETE /products/:id)**

- **URL**: `http://localhost:3000/products/:id`
- **Method**: `DELETE`
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  const productId = 1; // Thay thế bằng ID sản phẩm bạn muốn xóa
  fetch(`http://localhost:3000/products/${productId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

---

### **Đơn hàng (Orders)**

#### 1. **Lấy tất cả đơn hàng (GET /orders)**

- **URL**: `http://localhost:3000/orders`
- **Method**: `GET`
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  fetch('http://localhost:3000/orders')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

#### 2. **Lấy đơn hàng theo ID (GET /orders/:id)**

- **URL**: `http://localhost:3000/orders/:id`
- **Method**: `GET`
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  const orderId = 1; // Thay thế bằng ID đơn hàng bạn muốn lấy
  fetch(`http://localhost:3000/orders/${orderId}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

#### 3. **Tạo đơn hàng mới (POST /orders)**

- **URL**: `http://localhost:3000/orders`
- **Method**: `POST`
- **Body**: JSON object chứa thông tin đơn hàng.
  ```json
  {
    "user_id": 1,
    "total_price": 1200.00,
    "status": "Pending"
  }
  ```
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: 1,
      total_price: 1200.00,
      status: 'Pending'
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

#### 4. **Cập nhật đơn hàng (PUT /orders/:id)**

- **URL**: `http://localhost:3000/orders/:id`
- **Method**: `PUT`
- **Body**: JSON object chứa thông tin cập nhật.
  ```json
  {
    "user_id": 1,
    "total_price": 1300.00,
    "status": "Shipped"
  }
  ```
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  const orderId = 1; // Thay thế bằng ID đơn hàng bạn muốn cập nhật
  fetch(`http://localhost:3000/orders/${orderId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: 1,
      total_price: 1300.00,
      status: 'Shipped'
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

#### 5. **Xóa đơn hàng (DELETE /orders/:id)**

- **URL**: `http://localhost:3000/orders/:id`
- **Method**: `DELETE`
- **Ví dụ sử dụng Fetch API**:
  ```javascript
  const orderId = 1; // Thay thế bằng ID đơn hàng bạn muốn xóa
  fetch(`http://localhost:3000/orders/${orderId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

---

## 3. **Lưu ý**

- Đảm bảo server đang chạy trước khi thực hiện các yêu cầu API.
- Sử dụng đúng phương thức (GET, POST, PUT, DELETE) và URL cho từng endpoint.
- Kiểm tra kết quả trả về từ API để xử lý dữ liệu hoặc thông báo lỗi.

---
