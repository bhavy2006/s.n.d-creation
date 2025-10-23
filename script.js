document.addEventListener('DOMContentLoaded', () => {
    // --- Highlight active page in the navigation bar ---
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Handle products.html?category=x
        if (linkPath.split('?')[0] === currentPath.split('?')[0]) {
            link.classList.add('active-link');
        }
    });

    // --- Product Data with corrected image names based on your file setup ---
    const products = [{
            id: 1,
            name: 'Male T-shirt 1',
            category: 'male',
            price: 29.99,
            image: 'images/t-shirt-1.jpeg',
            description: 'A classic, comfortable t-shirt made from 100% premium cotton. Perfect for everyday wear.',
            details: ['Soft and breathable fabric', 'Durable stitching', 'Machine washable']
        },
        {
            id: 2,
            name: 'Male T-shirt 2',
            category: 'male',
            price: 29.99,
            image: 'images/t-shirt-2.jpeg',
            description: 'A stylish t-shirt with a unique graphic print on the front. A great way to express your style.',
            details: ['Unique graphic print', 'Relaxed fit', 'High-quality color']
        },
        {
            id: 3,
            name: 'Male T-shirt 3',
            category: 'male',
            price: 29.99,
            image: 'images/t-shirt-3.jpeg',
            description: 'A plain, versatile t-shirt available in multiple colors. A must-have for any wardrobe.',
            details: ['Solid color options', 'Lightweight material', 'Everyday essential']
        },
        {
            id: 4,
            name: 'Male T-shirt 4',
            category: 'male',
            price: 29.99,
            image: 'images/t-shirt-4.jpeg',
            description: 'This t-shirt features a modern fit and a subtle brand logo. A perfect blend of style and comfort.',
            details: ['Modern cut', 'Soft-touch material', 'Subtle branding']
        },
        {
            id: 5,
            name: 'Male T-shirt 5',
            category: 'male',
            price: 29.99,
            image: 'images/t-shirt-5.jpeg',
            description: 'An athletic t-shirt designed for performance. Quick-drying and moisture-wicking.',
            details: ['Moisture-wicking fabric', 'Athletic design', 'Great for workouts']
        },
        {
            id: 6,
            name: 'Male Shirt 1',
            category: 'male',
            price: 39.99,
            image: 'images/shitr-1.jpg',
            description: 'A sophisticated button-down shirt, perfect for both casual and formal occasions.',
            details: ['100% cotton', 'Long-sleeve design', 'Versatile and stylish']
        },
        {
            id: 7,
            name: 'Male Shirt 2',
            category: 'male',
            price: 39.99,
            image: 'images/shitr-2.jpg',
            description: 'A casual flannel shirt, great for layering in cooler weather. Made for comfort and style.',
            details: ['Soft flannel fabric', 'Button-up front', 'Classic plaid pattern']
        },
        {
            id: 8,
            name: 'Male Shirt 3',
            category: 'male',
            price: 39.99,
            image: 'images/shitr-3.jpg',
            description: 'A trendy denim shirt that pairs well with anything. A timeless piece for your collection.',
            details: ['High-quality denim', 'Snap-button closures', 'Fashion-forward']
        },
        {
            id: 9,
            name: 'Male Shirt 4',
            category: 'male',
            price: 39.99,
            image: 'images/shitr-4.jpg',
            description: 'A linen blend shirt, ideal for warm weather. Lightweight and breathable.',
            details: ['Linen and cotton blend', 'Breathable material', 'Perfect for summer']
        },
        {
            id: 10,
            name: 'Male Shirt 5',
            category: 'male',
            price: 39.99,
            image: 'images/shitr-5.jpg',
            description: 'A formal shirt with a crisp collar and slim fit. Perfect for the office or special events.',
            details: ['Slim fit design', 'Crisp collar', 'Suitable for formal wear']
        },
        {
            id: 11,
            name: 'Male Jacket 1',
            category: 'male',
            price: 69.99,
            image: 'images/jecket-1.jpeg',
            description: 'A sleek bomber jacket that is both warm and fashionable. A great addition to any outfit.',
            details: ['Zip-up front', 'Ribbed cuffs and hem', 'Lightweight insulation']
        },
        {
            id: 12,
            name: 'Male Jacket 2',
            category: 'male',
            price: 69.99,
            image: 'images/jecket-2.jpeg',
            description: 'A classic leather jacket that provides a cool, rugged look. Made from high-quality faux leather.',
            details: ['Faux leather material', 'Zipper pockets', 'Stylish and durable']
        },
        {
            id: 13,
            name: 'Male Jacket 3',
            category: 'male',
            price: 69.99,
            image: 'images/jecket-3.jpeg',
            description: 'A versatile windbreaker jacket, perfect for outdoor activities and unexpected weather.',
            details: ['Water-resistant material', 'Hooded design', 'Lightweight and packable']
        },
        {
            id: 14,
            name: 'Male Jacket 4',
            category: 'male',
            price: 69.99,
            image: 'images/jecket-4.jpeg',
            description: 'A comfortable fleece jacket, ideal for layering during colder months. Soft and warm.',
            details: ['Soft fleece fabric', 'Full-zip design', 'Keeps you warm']
        },
        {
            id: 15,
            name: 'Male Jacket 5',
            category: 'male',
            price: 69.99,
            image: 'images/jecket-5.jpeg',
            description: 'A heavy-duty parka jacket designed for extreme cold. Features a faux-fur lined hood.',
            details: ['Heavy-duty insulation', 'Faux-fur hood', 'Protects against cold weather']
        },
        {
            id: 16,
            name: 'Kurti 1',
            category: 'female',
            price: 59.99,
            image: 'images/kurti-1.jpeg',
            description: 'An elegant long kurti with beautiful embroidery. Perfect for festive occasions.',
            details: ['Intricate embroidery', 'Comfortable fit', 'Traditional design']
        },
        {
            id: 17,
            name: 'Kurti 2',
            category: 'female',
            price: 59.99,
            image: 'images/kurti-2.jpeg',
            description: 'A stylish printed kurti with a modern cut. Can be paired with jeans or leggings.',
            details: ['Vibrant printed pattern', 'Three-quarter sleeves', 'Versatile for casual wear']
        },
        {
            id: 18,
            name: 'Kurti 3',
            category: 'female',
            price: 59.99,
            image: 'images/kurti-3.jpeg',
            description: 'A simple and chic kurti made from pure cotton. Ideal for daily wear and comfort.',
            details: ['100% pure cotton', 'Soft and breathable', 'Minimalistic design']
        },
        {
            id: 19,
            name: 'Kurti 4',
            category: 'female',
            price: 59.99,
            image: 'images/kurti-4.jpeg',
            description: 'A designer kurti with a unique asymmetrical hemline. Make a statement with this piece.',
            details: ['Asymmetrical design', 'Unique and trendy', 'High-fashion look']
        },
        {
            id: 20,
            name: 'Kurti 5',
            category: 'female',
            price: 59.99,
            image: 'images/kurti-5.jpeg',
            description: 'A beautiful silk blend kurti with intricate motifs. Perfect for an evening event.',
            details: ['Silk blend material', 'Shimmery finish', 'Perfect for parties']
        },
        {
            id: 21,
            name: 'Tunic 1',
            category: 'female',
            price: 45.99,
            image: 'images/tunic-1.jpeg',
            description: 'A flowy tunic top with a bohemian style. Pairs perfectly with capris or shorts.',
            details: ['Flowy and relaxed fit', 'Bohemian pattern', 'Light and comfortable']
        },
        {
            id: 22,
            name: 'Tunic 2',
            category: 'female',
            price: 45.99,
            image: 'images/tunic-2.jpeg',
            description: 'A long tunic top with a beautiful floral print. Brings a fresh feel to your wardrobe.',
            details: ['Floral design', 'Full-length sleeves', 'Flattering fit']
        },
        {
            id: 23,
            name: 'Tunic 3',
            category: 'female',
            price: 45.99,
            image: 'images/tunic-3.jpeg',
            description: 'A classic solid-colored tunic, a versatile piece for a casual day out.',
            details: ['Solid color', 'Round neckline', 'Easy to style']
        },
        {
            id: 24,
            name: 'Tunic 4',
            category: 'female',
            price: 45.99,
            image: 'images/tunic-4.jpeg',
            description: 'A stylish tunic with a lace-up front. Adds a trendy element to your look.',
            details: ['Lace-up detail', 'Long tunic length', 'Fashionable and chic']
        },
        {
            id: 25,
            name: 'Tunic 5',
            category: 'female',
            price: 45.99,
            image: 'images/tunic-5.jpeg',
            description: 'A lightweight tunic with a geometric pattern. Ideal for a vacation or a beach trip.',
            details: ['Geometric print', 'Lightweight fabric', 'Perfect for travel']
        },
        {
            id: 26,
            name: 'Tank Top 1',
            category: 'female',
            price: 25.99,
            image: 'images/tank_top-1.jpeg',
            description: 'A basic ribbed tank top, an essential for layering or wearing on its own.',
            details: ['Ribbed texture', 'Stretchy and comfortable', 'Versatile layering piece']
        },
        {
            id: 27,
            name: 'Tank Top 2',
            category: 'female',
            price: 25.99,
            image: 'images/tank_top-2.jpeg',
            description: 'A sporty tank top with a racerback design. Great for the gym or a casual summer day.',
            details: ['Racerback style', 'Breathable fabric', 'Ideal for sports']
        },
        {
            id: 28,
            name: 'Tank Top 3',
            category: 'female',
            price: 25.99,
            image: 'images/tank_top-3.jpeg',
            description: 'A flowy tank top with a detailed neckline. A simple yet elegant piece.',
            details: ['Flowy and loose fit', 'Delicate neckline detail', 'Pairs well with shorts']
        },
        {
            id: 29,
            name: 'Tank Top 4',
            category: 'female',
            price: 25.99,
            image: 'images/tank_top-4.jpeg',
            description: 'A crop tank top that is both trendy and comfortable. Pairs perfectly with high-waisted bottoms.',
            details: ['Cropped length', 'Soft and form-fitting', 'Trendy and stylish']
        },
        {
            id: 30,
            name: 'Tank Top 5',
            category: 'female',
            price: 25.99,
            image: 'images/tank_top-5.jpeg',
            description: 'A classic black tank top with a scoop neck. A timeless piece that will never go out of style.',
            details: ['Classic scoop neck', 'Soft cotton material', 'Everyday essential']
        },
        {
            id: 31,
            name: 'Top 1',
            category: 'female',
            price: 35.99,
            image: 'images/top-1.jpeg',
            description: 'An elegant blouse with a ruffled collar. Perfect for a professional or formal look.',
            details: ['Ruffled collar', 'Lightweight material', 'Sophisticated design']
        },
        {
            id: 32,
            name: 'Top 2',
            category: 'female',
            price: 35.99,
            image: 'images/top-2.jpeg',
            description: 'A casual off-shoulder top that is perfect for a night out. Comfortable and trendy.',
            details: ['Off-shoulder design', 'Soft and stretchy', 'Perfect for a night out']
        },
        {
            id: 33,
            name: 'Top 3',
            category: 'female',
            price: 35.99,
            image: 'images/top-3.jpeg',
            description: 'A simple crop top with a square neckline. A modern and chic piece for any outfit.',
            details: ['Square neckline', 'Ribbed texture', 'Modern and chic']
        },
        {
            id: 34,
            name: 'Top 4',
            category: 'female',
            price: 35.99,
            image: 'images/top-4.jpeg',
            description: 'A long-sleeved top with a unique abstract print. Adds a touch of art to your style.',
            details: ['Abstract print', 'Long sleeves', 'Artsy and unique']
        },
        {
            id: 35,
            name: 'Top 5',
            category: 'female',
            price: 35.99,
            image: 'images/top-5.jpeg',
            description: 'A knit top with a classic button-up front. Can be worn as a top or a light cardigan.',
            details: ['Knit material', 'Button-up design', 'Can be worn in multiple ways']
        },
        {
            id: 36,
            name: 'Kids Pair 1',
            category: 'kids',
            price: 19.99,
            image: 'images/kide_pair-1.jpeg',
            description: 'A comfortable and cute outfit for a young child. Made from soft, durable materials.',
            details: ['Soft cotton fabric', 'Playful design', 'Easy to wear']
        },
        {
            id: 37,
            name: 'Kids Pair 2',
            category: 'kids',
            price: 25.99,
            image: 'images/kide_pair-2.jpeg',
            description: 'A stylish and fun outfit for your child. Features a unique print and comfortable fit.',
            details: ['Unique graphic print', 'Durable for playtime', 'Bright and colorful']
        },
        {
            id: 38,
            name: 'Kids Pair 3',
            category: 'kids',
            price: 15.99,
            image: 'images/kide_pair-3.jpeg',
            description: 'A simple and adorable set for toddlers. Easy to clean and very soft on the skin.',
            details: ['Toddler-friendly design', 'Soft material', 'Machine washable']
        },
        {
            id: 39,
            name: 'Kids Pair 4',
            category: 'kids',
            price: 35.99,
            image: 'images/kide_pair-4.jpeg',
            description: 'A party-ready dress for a child. Features a beautiful design and high-quality fabric.',
            details: ['Party dress design', 'High-quality fabric', 'Elegant and stylish']
        },
        {
            id: 40,
            name: 'Kids Pair 5',
            category: 'kids',
            price: 19.99,
            image: 'images/kide_pair-5.jpeg',
            description: 'A casual and cool t-shirt and shorts set for kids. Perfect for a day at the park.',
            details: ['Casual wear', 'Breathable fabric', 'Comfortable and fun']
        },
        {
            id: 41,
            name: 'Kids Pair 6',
            category: 'kids',
            price: 25.99,
            image: 'images/kide_pair-6.jpeg',
            description: 'A charming set for a little girl, with a playful design and soft material.',
            details: ['Playful design', 'Soft on skin', 'Ideal for everyday']
        },
        {
            id: 42,
            name: 'Kids Pair 7',
            category: 'kids',
            price: 15.99,
            image: 'images/kide_pair-7.jpeg',
            description: 'A simple and comfortable one-piece outfit for an infant. Easy to put on and take off.',
            details: ['Infant-friendly', 'One-piece design', 'Gentle on skin']
        },
        {
            id: 43,
            name: 'Kids Pair 8',
            category: 'kids',
            price: 35.99,
            image: 'images/kide_pair-8.jpeg',
            description: 'A winter jacket for a child, designed to keep them warm and protected from the cold.',
            details: ['Warm and insulated', 'Hooded design', 'Protective against cold']
        },
        {
            id: 44,
            name: 'Kids Pair 9',
            category: 'kids',
            price: 19.99,
            image: 'images/kide_pair-9.jpeg',
            description: 'A sporty outfit for an active child. Made from materials that allow for easy movement.',
            details: ['Athletic design', 'Flexible and durable', 'Great for sports']
        },
        {
            id: 45,
            name: 'Kids Pair 10',
            category: 'kids',
            price: 25.99,
            image: 'images/kide_pair-10.jpeg',
            description: 'A cute dress with a fun pattern, perfect for a birthday party or special event.',
            details: ['Fun and stylish', 'Soft lining', 'Great for parties']
        },
        {
            id: 46,
            name: 'Underwear 1',
            category: 'undergarment',
            price: 12.99,
            image: 'images/underwere-1.jpeg',
            description: 'High-quality cotton boxer briefs, providing ultimate comfort and support.',
            details: ['100% cotton', 'Breathable and soft', 'Elastic waistband']
        },
        {
            id: 47,
            name: 'Underwear 2',
            category: 'undergarment',
            price: 15.99,
            image: 'images/underwere-2.jpeg',
            description: 'A set of comfortable briefs with a stylish design. Made from a durable fabric blend.',
            details: ['Durable fabric blend', 'Stylish waistband', 'Form-fitting design']
        },
        {
            id: 48,
            name: 'Underwear 3',
            category: 'undergarment',
            price: 12.99,
            image: 'images/underwere-3.jpeg',
            description: 'Seamless underwear for a smooth fit under any clothing. Prevents panty lines.',
            details: ['Seamless design', 'Invisible under clothes', 'Comfortable stretch']
        },
        {
            id: 49,
            name: 'Underwear 4',
            category: 'undergarment',
            price: 15.99,
            image: 'images/underwere-4.jpeg',
            description: 'A multipack of cotton briefs, an essential for your daily wear. Soft and absorbent.',
            details: ['Multipack value', 'Absorbent cotton', 'Everyday comfort']
        },
        {
            id: 50,
            name: 'Underwear 5',
            category: 'undergarment',
            price: 12.99,
            image: 'images/underwere-5.jpeg',
            description: 'A sporty jockstrap designed for maximum support and freedom of movement during physical activities.',
            details: ['Athletic support', 'Flexible design', 'Durable elastic straps']
        },
        {
            id: 51,
            name: 'Socks 1',
            category: 'undergarment',
            price: 8.99,
            image: 'images/socken-1.jpeg',
            description: 'A pair of classic ankle socks. Perfect for sneakers and everyday use.',
            details: ['Ankle length', 'Soft cotton blend', 'Cushioned sole']
        },
        {
            id: 52,
            name: 'Socks 2',
            category: 'undergarment',
            price: 8.99,
            image: 'images/socken-2.jpeg',
            description: 'A pack of colorful crew socks to add a pop of fun to your outfit.',
            details: ['Crew length', 'Vibrant colors', 'Comfortable and stylish']
        },
        {
            id: 53,
            name: 'Socks 3',
            category: 'undergarment',
            price: 8.99,
            image: 'images/socken-3.jpeg',
            description: 'No-show socks that stay hidden in your shoes. Perfect for a clean, barefoot look.',
            details: ['Invisible design', 'Silicone heel grip', 'Prevents slipping']
        },
        {
            id: 54,
            name: 'Socks 4',
            category: 'undergarment',
            price: 8.99,
            image: 'images/socken-4.jpeg',
            description: 'Warm wool blend socks, great for hiking and colder weather.',
            details: ['Wool blend', 'Thermal properties', 'Ideal for hiking']
        },
        {
            id: 55,
            name: 'Socks 5',
            category: 'undergarment',
            price: 8.99,
            image: 'images/socken-5.jpeg',
            description: 'Compression socks designed to improve circulation and reduce foot fatigue.',
            details: ['Compression fit', 'Improves circulation', 'Reduces fatigue']
        },
    ];

    // --- Cart Management Functions ---
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity += quantity;
            } else {
                cart.push({
                    ...product,
                    quantity: quantity
                });
            }
            saveCart();
            alert(`${quantity} of ${product.name} added to cart!`);
        }
    }

    function removeItem(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCart();
    }

    function updateQuantity(productId, newQuantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                removeItem(productId);
            } else {
                item.quantity = newQuantity;
                saveCart();
                renderCart();
            }
        }
    }

    // --- Helper function to create product HTML for grids ---
    function createProductElement(product) {
        const productBox = document.createElement('a');
        productBox.href = `product-detail.html?id=${product.id}`;
        productBox.classList.add('product-box');
        productBox.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button type="button" class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        `;
        return productBox;
    }

    // --- Helper function to render a product grid ---
    function renderProductGrid(productsToRender, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        productsToRender.forEach(product => {
            container.appendChild(createProductElement(product));
        });
    }

    // --- Page-specific Logic ---
    const pagePath = window.location.pathname.split('/').pop();

    // Logic for the Home page
    if (pagePath === 'index.html' || pagePath === '') {
        const maleProducts = products.filter(p => p.category === 'male').slice(0, 4);
        const femaleProducts = products.filter(p => p.category === 'female').slice(0, 4);
        const kidsProducts = products.filter(p => p.category === 'kids').slice(0, 4);
        const undergarmentProducts = products.filter(p => p.category === 'undergarment').slice(0, 4);

        renderProductGrid(maleProducts, 'male-products-grid');
        renderProductGrid(femaleProducts, 'female-products-grid');
        renderProductGrid(kidsProducts, 'kids-products-grid');
        renderProductGrid(undergarmentProducts, 'undergarment-products-grid');
    }

    // Logic for the Products page
    if (pagePath === 'products.html') {
        const productGrid = document.getElementById('product-grid');
        const filters = document.querySelectorAll('input[name="category"]');
        const sortBySelect = document.getElementById('sort-by');
        let currentCategory = new URLSearchParams(window.location.search).get('category') || 'all';
        let currentSort = 'default';

        function filterAndSortProducts() {
            let filtered = products;

            if (currentCategory !== 'all') {
                filtered = products.filter(p => p.category === currentCategory);
            }

            if (currentSort === 'low-to-high') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (currentSort === 'high-to-low') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (currentSort === 'name-asc') {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            } else if (currentSort === 'name-desc') {
                filtered.sort((a, b) => b.name.localeCompare(a.name));
            }

            renderProductGrid(filtered, 'product-grid');
        }

        filters.forEach(radio => {
            radio.addEventListener('change', (e) => {
                currentCategory = e.target.value;
                filterAndSortProducts();
            });
        });

        sortBySelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            filterAndSortProducts();
        });

        // Set initial filter from URL parameter
        if (currentCategory) {
            const radio = document.querySelector(`input[value="${currentCategory}"]`);
            if (radio) {
                radio.checked = true;
            }
        }
        
        filterAndSortProducts(); // Initial render
    }
    
    // Logic for the Cart page
    if (pagePath === 'cart.html') {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartSummaryContainer = document.getElementById('cart-summary-container');
        const emptyMessage = document.getElementById('empty-cart-message');
        const checkoutButton = document.getElementById('checkout-btn');

        function renderCart() {
            if (!cartItemsContainer || !cartSummaryContainer) return;

            cartItemsContainer.innerHTML = '';
            let subtotal = 0;

            if (cart.length === 0) {
                if (emptyMessage) emptyMessage.style.display = 'block';
                if (cartSummaryContainer) cartSummaryContainer.style.display = 'none';
            } else {
                if (emptyMessage) emptyMessage.style.display = 'none';
                if (cartSummaryContainer) cartSummaryContainer.style.display = 'block';

                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    subtotal += itemTotal;
                    
                    const cartItemEl = document.createElement('div');
                    cartItemEl.classList.add('cart-item');
                    cartItemEl.innerHTML = `
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <p class="price">$${item.price.toFixed(2)}</p>
                        </div>
                        <div class="quantity-controls">
                            <button class="decrease-quantity" data-product-id="${item.id}">-</button>
                            <input type="number" value="${item.quantity}" min="1" data-product-id="${item.id}">
                            <button class="increase-quantity" data-product-id="${item.id}">+</button>
                        </div>
                        <p class="item-total-price">$${itemTotal.toFixed(2)}</p>
                        <button class="remove-btn" data-product-id="${item.id}">&times;</button>
                    `;
                    cartItemsContainer.appendChild(cartItemEl);
                });

                const totalEl = document.querySelector('.cart-summary-item.total .summary-value');
                const subtotalEl = document.querySelector('.cart-summary-item:not(.total) .summary-value');
                
                if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
                if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;
            }
        }
        
        renderCart();
    }
    
    // Logic for the Product Details page
    if (pagePath === 'product-detail.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = products.find(p => p.id === productId);

        if (product) {
            document.querySelector('.product-detail-image').src = product.image;
            document.querySelector('.product-detail-image').alt = product.name;
            document.querySelector('.product-title').textContent = product.name;
            document.querySelector('.product-price').textContent = `$${product.price.toFixed(2)}`;
            document.querySelector('.product-description p').textContent = product.description;
            
            // Populate the feature list
            const featuresList = document.querySelector('.product-description ul');
            if(featuresList) {
                featuresList.innerHTML = '';
                product.details.forEach(detail => {
                    const li = document.createElement('li');
                    li.textContent = detail;
                    featuresList.appendChild(li);
                });
            }
            
            // Update the 'Add to Cart' button with the product ID
            const addToCartBtn = document.querySelector('.add-to-cart-btn');
            if(addToCartBtn) {
                addToCartBtn.dataset.productId = product.id;
            }
        } else {
            // Handle case where product ID is not found
            const mainContent = document.querySelector('main');
            if(mainContent) {
                 mainContent.innerHTML = '<section class="content-section"><div class="container"><p>Product not found.</p></div></section>';
            }
        }
    }


    // Logic for the Checkout page
    if (pagePath === 'checkout.html') {
        const checkoutCartItems = document.getElementById('checkout-cart-items');
        const subtotalEl = document.getElementById('checkout-subtotal');
        const totalEl = document.getElementById('checkout-total');
        const checkoutForm = document.getElementById('checkout-form');
        const shippingCost = 5.00;
        const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
        const cardDetailsContainer = document.getElementById('card-details-container');

        function renderCheckoutSummary() {
            if (!checkoutCartItems) return;

            checkoutCartItems.innerHTML = '';
            let subtotal = 0;

            if (cart.length === 0) {
                checkoutCartItems.innerHTML = '<p>Your cart is empty.</p>';
                checkoutForm.style.display = 'none';
            } else {
                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    subtotal += itemTotal;
                    
                    const cartItemEl = document.createElement('div');
                    cartItemEl.classList.add('checkout-cart-item');
                    cartItemEl.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <div class="checkout-cart-item-details">
                            <h4>${item.name}</h4>
                            <p>${item.quantity} x $${item.price.toFixed(2)}</p>
                        </div>
                        <p class="item-total-price">$${itemTotal.toFixed(2)}</p>
                    `;
                    checkoutCartItems.appendChild(cartItemEl);
                });

                const finalTotal = subtotal + shippingCost;
                if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
                if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;
            }
        }

        // Function to handle payment method selection
        function handlePaymentMethodChange() {
            const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
            if (selectedMethod === 'card') {
                cardDetailsContainer.classList.remove('hidden');
                document.getElementById('card-number').required = true;
                document.getElementById('expiry').required = true;
                document.getElementById('cvv').required = true;
            } else {
                cardDetailsContainer.classList.add('hidden');
                document.getElementById('card-number').required = false;
                document.getElementById('expiry').required = false;
                document.getElementById('cvv').required = false;
            }
        }

        paymentMethods.forEach(radio => {
            radio.addEventListener('change', handlePaymentMethodChange);
        });

        checkoutForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert("Your cart is empty. Please add items before checking out.");
                return;
            }

            const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
            
            // Manually gather form data including the new fields
            const shippingInfo = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zip: document.getElementById('zip').value,
            };

            const orderData = {
                shippingInfo,
                paymentMethod: selectedPaymentMethod,
                cart: cart
            };

            try {
                // Send the order data to your Node.js back-end server
                const response = await fetch('http://localhost:3000/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderData)
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log(result.message);
                    alert(`Order placed successfully! Order ID: ${result.orderId}. Thank you for your purchase.`);

                    // Clear the cart after a successful order
                    cart = [];
                    saveCart();
                    
                    // Redirect to the homepage after a delay
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                } else {
                    console.error('Failed to submit order:', response.statusText);
                    alert('There was an error placing your order. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Could not connect to the server. Please check if the server is running on http://localhost:3000.');
            }
        });

        renderCheckoutSummary();
        handlePaymentMethodChange();
    }


    // --- Global Event Listener for all "Add to Cart" and cart actions ---
    document.addEventListener('click', (e) => {
        // Handle Add to Cart button clicks
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.productId);
            // Check for quantity input on product detail page
            const quantityInput = e.target.closest('.product-details')?.querySelector('#quantity');
            const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
            addToCart(productId, quantity);
        }

        // Handle quantity increase button clicks on cart page
        if (e.target.classList.contains('increase-quantity')) {
            const productId = parseInt(e.target.dataset.productId);
            const item = cart.find(item => item.id === productId);
            if (item) {
                updateQuantity(productId, item.quantity + 1);
            }
        }

        // Handle quantity decrease button clicks on cart page
        if (e.target.classList.contains('decrease-quantity')) {
            const productId = parseInt(e.target.dataset.productId);
            const item = cart.find(item => item.id === productId);
            if (item && item.quantity > 1) {
                updateQuantity(productId, item.quantity - 1);
            } else {
                removeItem(productId);
            }
        }

        // Handle remove button clicks
        if (e.target.classList.contains('remove-btn')) {
            const productId = parseInt(e.target.dataset.productId);
            removeItem(productId);
        }
    });

    // Handle quantity input changes on cart page
    document.addEventListener('change', (e) => {
        if (e.target.tagName === 'INPUT' && e.target.type === 'number' && e.target.closest('.cart-item')) {
            const productId = parseInt(e.target.dataset.productId);
            const newQuantity = parseInt(e.target.value);
            updateQuantity(productId, newQuantity);
        }
    });
});