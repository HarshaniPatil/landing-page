const foodItems = [
            { id: 1, name: "Classic Burger", description: "Juicy beef patty with fresh veggies", price: 8.99, category: "burger", emoji: "🍔", rating: 4.5 },
            { id: 2, name: "Margherita Pizza", description: "Fresh mozzarella and basil", price: 12.99, category: "pizza", emoji: "🍕", rating: 4.7 },
            { id: 3, name: "Sushi Platter", description: "Assorted fresh sushi rolls", price: 18.99, category: "asian", emoji: "🍱", rating: 4.8 },
            { id: 4, name: "Chicken Ramen", description: "Rich broth with tender chicken", price: 11.99, category: "asian", emoji: "🍜", rating: 4.6 },
            { id: 5, name: "Chocolate Cake", description: "Decadent chocolate layers", price: 6.99, category: "dessert", emoji: "🍰", rating: 4.9 },
            { id: 6, name: "Cheese Pizza", description: "Extra cheese and tomato sauce", price: 10.99, category: "pizza", emoji: "🍕", rating: 4.4 },
            { id: 7, name: "Veggie Burger", description: "Plant-based patty with avocado", price: 9.99, category: "burger", emoji: "🥗", rating: 4.3 },
            { id: 8, name: "Pad Thai", description: "Traditional Thai noodles", price: 13.99, category: "asian", emoji: "🍝", rating: 4.7 },
            { id: 9, name: "Ice Cream Sundae", description: "Vanilla ice cream with toppings", price: 5.99, category: "dessert", emoji: "🍨", rating: 4.6 },
            { id: 10, name: "Smoothie Bowl", description: "Fresh fruits and granola", price: 7.99, category: "drinks", emoji: "🥤", rating: 4.5 },
            { id: 11, name: "BBQ Burger", description: "Smoky BBQ sauce and crispy onions", price: 9.99, category: "burger", emoji: "🍔", rating: 4.6 },
            { id: 12, name: "Tiramisu", description: "Classic Italian dessert", price: 7.99, category: "dessert", emoji: "🧁", rating: 4.8 }
        ];

        let cart = [];
        let currentCategory = 'all';

        function renderFoodItems(items) {
            const grid = document.getElementById('foodGrid');
            grid.innerHTML = items.map(item => `
                <div class="food-card">
                    <div class="food-image">${item.emoji}</div>
                    <div class="food-info">
                        <div class="food-name">${item.name}</div>
                        <div class="food-description">${item.description}</div>
                        <div class="food-footer">
                            <div class="price">$${item.price}</div>
                            <div class="rating">⭐ ${item.rating}</div>
                        </div>
                        <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                </div>
            `).join('');
        }

        function filterCategory(category) {
            currentCategory = category;
            const buttons = document.querySelectorAll('.category-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const filtered = category === 'all' 
                ? foodItems 
                : foodItems.filter(item => item.category === category);
            renderFoodItems(filtered);
        }

        function addToCart(id) {
            const item = foodItems.find(f => f.id === id);
            cart.push(item);
            updateCartCount();
        }

        function updateCartCount() {
            document.getElementById('cartCount').textContent = cart.length;
        }

        function showCart() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
                alert(`Cart Items:\n${cart.map(item => `${item.name} - $${item.price}`).join('\n')}\n\nTotal: $${total}`);
            }
        }

        document.getElementById('searchInput').addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = foodItems.filter(item => 
                item.name.toLowerCase().includes(searchTerm) || 
                item.description.toLowerCase().includes(searchTerm)
            );
            renderFoodItems(filtered);
        });

        renderFoodItems(foodItems);