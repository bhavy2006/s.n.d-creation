document.addEventListener('DOMContentLoaded', () => {
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
        window.location.href = 'login.html';
        return;
    }

    const navLinks = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('.dashboard-content section');
    const productListBody = document.getElementById('product-list-body');
    const orderListBody = document.getElementById('order-list-body');
    const customerListBody = document.getElementById('customer-list-body');

    const noProductsMessage = document.getElementById('no-products-message');
    const noOrdersMessage = document.getElementById('no-orders-message');
    const productTable = document.querySelector('.product-table');
    const orderTable = document.querySelector('.order-table');
    const customerTable = document.querySelector('.customer-table');

    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const statusFilter = document.getElementById('status-filter');
    const sortSelect = document.getElementById('sort-select');
    const addProductForm = document.getElementById('add-product-form');
    const addProductModal = document.getElementById('add-product-modal');
    const closeModalButton = document.querySelector('.close-modal');
    const addProductBtn = document.getElementById('add-product-btn');
    
    // New modal elements for order details
    const orderDetailModal = document.getElementById('order-detail-modal');
    const orderDetailContent = document.getElementById('order-details-content');
    const closeOrderDetailModalBtn = document.querySelector('.close-modal-order-details');

    let allProducts = [];
    let allOrders = [];
    let allCustomers = [];

    // Navigation and section switching
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            sections.forEach(s => s.classList.remove('active'));
            const target = e.target.getAttribute('href').substring(1);
            document.getElementById(target).classList.add('active');
            
            if (target === 'products') {
                renderProducts(allProducts);
            } else if (target === 'orders') {
                renderOrders(allOrders);
            } else if (target === 'customers') {
                renderCustomers(allCustomers);
            }
        });
    });

    async function fetchData() {
        try {
            const [productsResponse, ordersResponse, customersResponse, settingsResponse] = await Promise.all([
                fetch('http://localhost:3000/api/products', { headers: { 'Authorization': authToken } }),
                fetch('http://localhost:3000/api/orders', { headers: { 'Authorization': authToken } }),
                fetch('http://localhost:3000/api/customers', { headers: { 'Authorization': authToken } }),
                fetch('http://localhost:3000/api/settings', { headers: { 'Authorization': authToken } })
            ]);

            if (productsResponse.ok) allProducts = await productsResponse.json();
            if (ordersResponse.ok) allOrders = await ordersResponse.json();
            if (customersResponse.ok) allCustomers = await customersResponse.json();
            if (settingsResponse.ok) {
                const settings = await settingsResponse.json();
                document.querySelector('.brand-name').textContent = settings.storeName;
            }
            
            renderProducts(allProducts);
            renderOrders(allOrders);
            renderCustomers(allCustomers);

        } catch (error) {
            console.error('Error fetching data:', error);
            noProductsMessage.textContent = "Could not connect to the server. Please check if it is running.";
            noOrdersMessage.textContent = "Could not connect to the server. Please check if it is running.";
            document.getElementById('products').classList.add('active');
            productTable.style.display = 'none';
        }
    }

    function renderProducts(productsToRender) {
        if (productsToRender.length === 0) {
            noProductsMessage.style.display = 'block';
            productTable.style.display = 'none';
            return;
        }
        noProductsMessage.style.display = 'none';
        productTable.style.display = 'table';
        productListBody.innerHTML = '';
        productsToRender.forEach(product => {
            let statusClass = '';
            if (product.status === 'Low Stock') {
                statusClass = 'low-stock';
            } else if (product.status === 'Out of Stock') {
                statusClass = 'out-of-stock';
            } else {
                statusClass = 'in-stock';
            }
            const row = document.createElement('tr');
            row.dataset.id = product.id;
            row.innerHTML = `
                <td><input type="checkbox"></td>
                <td>
                    <div class="product-info">
                        <img src="${product.image}" alt="${product.name}">
                        <span class="product-name">${product.name}</span>
                    </div>
                </td>
                <td>${product.category}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>${product.stock}</td>
                <td><span class="status ${statusClass}">${product.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="edit-btn"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </td>
            `;
            productListBody.appendChild(row);
        });
    }

    function renderOrders(ordersToRender) {
        if (ordersToRender.length === 0) {
            noOrdersMessage.style.display = 'block';
            orderTable.style.display = 'none';
            return;
        }
        noOrdersMessage.style.display = 'none';
        orderTable.style.display = 'table';
        orderListBody.innerHTML = '';
        ordersToRender.forEach(order => {
            const totalPrice = order.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const finalPrice = (totalPrice + 5.00).toFixed(2);
            const orderDate = new Date(order.date).toLocaleString();
            const row = document.createElement('tr');
            row.dataset.id = order.id; // Add this data attribute
            row.innerHTML = `
                <td><span class="order-id">#${order.id}</span></td>
                <td>${order.shippingInfo.name}</td>
                <td>${order.shippingInfo.email}</td>
                <td>$${finalPrice}</td>
                <td>${order.paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery'}</td>
                <td>${orderDate}</td>
            `;
            orderListBody.appendChild(row);
        });
    }

    function renderCustomers(customersToRender) {
        if (customersToRender.length === 0) {
            customerTable.style.display = 'none';
            return;
        }
        customerTable.style.display = 'table';
        customerListBody.innerHTML = '';
        customersToRender.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.totalOrders}</td>
                <td>${customer.status}</td>
            `;
            customerListBody.appendChild(row);
        });
    }

    function applyFiltersAndSort() {
        let filteredProducts = [...allProducts];

        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm));
        }

        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
        }

        const selectedStatus = statusFilter.value;
        if (selectedStatus !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.status === selectedStatus);
        }

        const sortBy = sortSelect.value;
        if (sortBy === 'name-asc') {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'name-desc') {
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy === 'price-asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(filteredProducts);
    }
    
    addProductForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newProduct = {
            name: document.getElementById('new-product-name').value,
            category: document.getElementById('new-product-category').value,
            price: parseFloat(document.getElementById('new-product-price').value),
            stock: parseInt(document.getElementById('new-product-stock').value),
            status: document.getElementById('new-product-status').value,
            image: document.getElementById('new-product-image').value,
            description: 'New product description.',
            details: []
        };

        try {
            const response = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': authToken },
                body: JSON.stringify(newProduct)
            });

            if (response.ok) {
                await fetchData();
                addProductModal.style.display = 'none';
                addProductForm.reset();
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    });

    productListBody.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        if (!row) return;

        if (e.target.closest('.edit-btn')) {
            toggleEditMode(row);
        } else if (e.target.closest('.delete-btn')) {
            if (confirm('Are you sure you want to delete this product?')) {
                deleteProduct(row.dataset.id);
            }
        }
    });

    function toggleEditMode(row) {
        const id = row.dataset.id;
        const nameElement = row.querySelector('.product-name');
        const categoryElement = row.cells[2];
        const priceElement = row.cells[3];
        const stockElement = row.cells[4];
        const statusElement = row.querySelector('.status');
        const actionButtons = row.querySelector('.action-buttons');
        
        const isEditing = row.classList.toggle('editing');

        if (isEditing) {
            const name = nameElement.textContent;
            const category = categoryElement.textContent;
            const price = parseFloat(priceElement.textContent.substring(1));
            const stock = parseInt(stockElement.textContent);
            const status = statusElement.textContent;

            nameElement.innerHTML = `<input type="text" value="${name}" class="edit-name">`;
            categoryElement.innerHTML = `<input type="text" value="${category}" class="edit-category">`;
            priceElement.innerHTML = `<input type="number" step="0.01" value="${price}" class="edit-price">`;
            stockElement.innerHTML = `<input type="number" value="${stock}" class="edit-stock">`;
            statusElement.innerHTML = `<select class="edit-status">
                <option value="In Stock" ${status === 'In Stock' ? 'selected' : ''}>In Stock</option>
                <option value="Low Stock" ${status === 'Low Stock' ? 'selected' : ''}>Low Stock</option>
                <option value="Out of Stock" ${status === 'Out of Stock' ? 'selected' : ''}>Out of Stock</option>
            </select>`;

            actionButtons.innerHTML = `
                <button class="save-btn"><i class="fas fa-save"></i></button>
                <button class="cancel-btn"><i class="fas fa-times"></i></button>
            `;

            row.querySelector('.save-btn').addEventListener('click', () => saveChanges(row, id));
            row.querySelector('.cancel-btn').addEventListener('click', () => revertChanges(row, id));

        } else {
            revertChanges(row, id);
        }
    }

    async function saveChanges(row, id) {
        const updatedProduct = {
            id: parseInt(id),
            name: row.querySelector('.edit-name').value,
            category: row.querySelector('.edit-category').value,
            price: parseFloat(row.querySelector('.edit-price').value),
            stock: parseInt(row.querySelector('.edit-stock').value),
            status: row.querySelector('.edit-status').value
        };

        try {
            const response = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                },
                body: JSON.stringify(updatedProduct)
            });

            if (response.ok) {
                await fetchData();
            } else {
                console.error('Failed to update product');
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    }

    function revertChanges(row, id) {
        const originalProduct = allProducts.find(p => p.id == id);
        if (originalProduct) {
            renderProducts(allProducts);
        } else {
            fetchData();
        }
    }

    async function deleteProduct(id) {
        try {
            const response = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': authToken }
            });
            if (response.ok) {
                await fetchData();
            } else {
                console.error('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }

    addProductBtn.addEventListener('click', () => {
        addProductModal.style.display = 'block';
    });
    closeModalButton.addEventListener('click', () => {
        addProductModal.style.display = 'none';
        addProductForm.reset();
    });
    window.addEventListener('click', (e) => {
        if (e.target === addProductModal) {
            addProductModal.style.display = 'none';
            addProductForm.reset();
        }
        if (e.target === orderDetailModal) { // New listener for order detail modal
            orderDetailModal.style.display = 'none';
        }
    });

    // Event listeners for filters and sort
    searchInput.addEventListener('input', applyFiltersAndSort);
    categoryFilter.addEventListener('change', applyFiltersAndSort);
    statusFilter.addEventListener('change', applyFiltersAndSort);
    sortSelect.addEventListener('change', applyFiltersAndSort);

    // NEW: Event listener for order rows to show details
    orderListBody.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        if (!row) return;

        const orderId = parseInt(row.dataset.id);
        const order = allOrders.find(o => o.id === orderId);

        if (order) {
            showOrderDetails(order);
        }
    });

    // NEW: Function to show order details in a modal
    function showOrderDetails(order) {
        const cartItemsHtml = order.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 5px;">
                <span>${item.name} x ${item.quantity}</span>
            </div>
        `).join('');

        const orderDate = new Date(order.date).toLocaleString();
        const totalPrice = order.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const finalPrice = (totalPrice + 5.00).toFixed(2);
        
        orderDetailContent.innerHTML = `
            <div class="order-detail-info">
                <p><strong>Order ID:</strong> #${order.id}</p>
                <p><strong>Order Date:</strong> ${orderDate}</p>
                <p><strong>Total Price:</strong> $${finalPrice}</p>
                <p><strong>Payment Method:</strong> ${order.paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery'}</p>
            </div>
            <div class="customer-info">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> ${order.shippingInfo.name}</p>
                <p><strong>Email:</strong> ${order.shippingInfo.email}</p>
                <p><strong>Phone:</strong> ${order.shippingInfo.phone}</p>
                <p><strong>Address:</strong> ${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state} - ${order.shippingInfo.zipCode}</p>
            </div>
            <div class="ordered-items">
                <h3>Ordered Items</h3>
                ${cartItemsHtml}
            </div>
        `;
        orderDetailModal.style.display = 'block';
    }

    // NEW: Close order details modal
    closeOrderDetailModalBtn.addEventListener('click', () => {
        orderDetailModal.style.display = 'none';
    });

    fetchData();
});