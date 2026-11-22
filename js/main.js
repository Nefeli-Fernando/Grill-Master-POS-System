const products = [
    {id : 1, name:"Classic Burger" , description:"A juicy chicken patty with fresh lettuce, tomato, and house sauce", price: 850, category: "Burger", image: "Assets/Images/Classic-burger.jpg" },
    {id : 2, name:"Cheese Burger", description:"A juicy beef patty topped with melted cheese and creamy sauce", price: 950, category: "Burger", image: "Assets/Images/Cheese-Burger.jpg"},
    {id : 3, name: "Double Beef Burger" ,description:"Two juicy beef patties layered with fresh toppings and sauce", price: 1350, category: "Burger", image: "Assets/Images/Double beef burger.webp"},
    {id: 4, name: "Chicken Burger",description:"A tender chicken patty served with fresh lettuce and creamy mayo", price: 900, category: "Burger", image: "Assets/Images/Chicken-Burger-fixed.jpg"},
    {id: 5, name: "Crispy Chicken Burger", description:"Golden, crispy chicken with crunchy lettuce and creamy sauce", price: 1050, category: "Burger", image: "Assets/Images/Crispy chicken burger.webp"},
    {id: 6, name: "Spicy Chicken Burger", description:"A spicy chicken patty topped with fresh lettuce and zesty sauce", price: 1000, category: "Burger", image: "Assets/Images/Spicy-Chichen-Burger.jpg"},
    {id: 7, name: "BBQ Burger",description:"A juicy beef patty topped with smoky BBQ sauce and onions", price: 1100, category: "Burger", image: "Assets/Images/BBQ-Burger-fixed.jpg"},
    {id: 8, name: "Bacon Burger", description:"A juicy beef patty topped with crispy bacon and melted cheese", price: 1250, category: "Burger", image: "Assets/Images/Bacon-Burger.webp"},
    {id: 9, name: "Mushroom Swiss Burger", description:"A beef patty topped with sautéed mushrooms and Swiss cheese", price: 1200, category: "Burger", image: "Assets/Images/Mushroom Swiss Burger.webp"},
    {id: 10, name: "Double Cheese Burger", description:"A double beef burger loaded with two layers of melted cheese", price: 1450, category: "Burger", image: "Assets/Images/Double Cheese Burger.webp"},
    {id: 11, name: "Triple Beef Burger", description:"Three hearty beef patties stacked with fresh toppings and sauce", price: 1800, category: "Burger", image: "Assets/Images/Triple Beef Burger.webp"},
    {id: 12, name: "Zinger Burger", description:"A crunchy, seasoned chicken fillet with lettuce and spicy mayo", price: 1100, category: "Burger", image: "Assets/Images/Zinger Burger.webp"},
    {id: 13, name: "Fish Burger", description:"A tender fish fillet served with fresh lettuce and tartar sauce", price: 950, category: "Burger", image: "Assets/Images/Fish Burger.webp"},
    {id: 14, name: "Prawn Burger", description:"A flavorful prawn patty topped with crisp lettuce and creamy sauce", price: 1350, category: "Burger", image: "Assets/Images/Prawn-Burger.webp"},
    {id: 15, name: "Veggie Burger", description:"A wholesome vegetable patty served with fresh greens and house sauce", price: 800, category: "Burger", image: "Assets/Images/Veggie-Burger.jpg"},
    {id: 16, name: "Paneer Burger", description:"Soft paneer topped with fresh vegetables and a creamy spiced sauce", price: 1000, category: "Burger", image: "Assets/Images/Paneer-Burger.jpg"},
    {id: 17, name: "Crispy Fish Burger", description:"A golden, crunchy fish fillet paired with lettuce and tartar sauce", price: 1150, category: "Burger", image: "Assets/Images/Crispy-Fish-Burger.jpg"},
    {id: 18, name: "Peri Peri Chicken Burger", description:"A grilled chicken patty coated in tangy peri-peri seasoning", price: 1150, category: "Burger", image: "Assets/Images/Peri Peri Chicken Burger.webp"},
    {id: 19, name: "Mexican Burger", description:"A spicy beef patty topped with jalapeños, cheese, and salsa", price: 1250, category: "Burger", image: "Assets/Images/Mexican Burger.jpg"},
    {id: 20, name: "Hawaiian Burger", description: "A juicy beef patty topped with grilled pineapple and melted cheese", price: 1200, category: "Burger", image: "Assets/Images/Hawaiian Burger.jpg"},
    {id: 21, name: "Chicken Teriyaki Burger", description:"A tender chicken patty glazed with sweet and savory teriyaki sauce", price: 1300, category: "Burger", image: "Assets/Images/Chicken Teriyaki Burger.jpg"},
    {id: 22, name: "Chilli Cheese Burger", description:"A juicy beef patty topped with melted cheese and spicy chilli sauce", price: 1100, category: "Burger", image: "Assets/Images/Chilli Cheese Burger.jpg"},
    {id: 23, name: "Crispy Onion Burger", description:"A juicy beef patty topped with crunchy fried onions and house sauce", price: 1050, category: "Burger", image: "Assets/Images/Crispy Onion Burger.jpg"}
];


const fries = [
    {id: 24, name: "Classic Fries", price: 450, category: "Fries", image: "Assets/Images/Classic Fries.jpg"},
    {id: 25, name: "Curly Fries", price: 600, category: "Fries", image: "Assets/Images/Curly Fries.webp"},
    {id: 26, name: "Crispy Wedges", price: 550, category: "Fries", image: "Assets/Images/Crispy Wedges.webp"},
    {id: 27, name: "Cheese Fries", price: 700, category: "Fries", image: "Assets/Images/Cheese Fries.webp"},
    {id: 28, name: "Loaded Fries", price: 850, category: "Fries", image: "Assets/Images/Loaded Fries.webp"},
    {id: 29, name: "Peri Peri Fries", price: 600, category: "Fries", image: "Assets/Images/Peri Peri Fries.webp"},
    {id: 30, name: "Chilli Cheese Fries", price: 800, category: "Fries", image: "Assets/Images/Chilli Cheese Fries.webp"},
    {id: 31, name: "Garlic Parmesan Fries", price: 750, category: "Fries", image: "Assets/Images/Garlic Parmesan Fries.webp"},
    {id: 32, name: "Sweet Potato Fries", price: 650, category: "Fries", image: "Assets/Images/Sweet Potato Fries.webp"},
    {id: 33, name: "BBQ Fries", price: 650, category: "Fries", image: "Assets/Images/BBQ Fries.webp"}
];

const drinks = [
    {id: 34, name: "Coca-Cola", price: 250, category: "Drinks", image: "Assets/Images-d/Coca-Cola.webp"},
    {id: 35, name: "Sprite", price: 250, category: "Drinks", image: "Assets/Images-d/Sprite.webp"},
    {id: 36, name: "Fanta Orange", price: 250, category: "Drinks", image: "Assets/Images-d/Fanta Orange.webp"},
    {id: 37, name: "Pepsi", price: 250, category: "Drinks", image: "Assets/Images-d/Pepsi.webp"},
    {id: 38, name: "Iced Tea", price: 350, category: "Drinks", image: "Assets/Images-d/Iced tea.webp"},
    {id: 39, name: "Lemonade", price: 300, category: "Drinks", image: "Assets/Images-d/Lemonade.webp"},
    {id: 40, name: "Fresh Orange Juice", price: 400, category: "Drinks", image: "Assets/Images-d/Fresh orange juice.webp"},
    {id: 41, name: "Mango Juice", price: 350, category: "Drinks", image: "Assets/Images-d/Mango juice.webp"},
    {id: 42, name: "Strawberry Milkshake", price: 550, category: "Drinks", image: "Assets/Images-d/Strawberry Milkshake.webp"},
    {id: 43, name: "Chocolate Milkshake", price: 600, category: "Drinks", image: "Assets/Images-d/Chocolate Milkshake.webp"},
    {id: 44, name: "Vanilla Milkshake", price: 500, category: "Drinks", image: "Assets/Images-d/Vanilla Milkshake.webp"},
    {id: 45, name: "Iced Coffee", price: 450, category: "Drinks", image: "Assets/Images-d/iced coffee.webp"},
    {id: 46, name: "Cold Coffee", price: 500, category: "Drinks", image: "Assets/Images-d/Cold coffee.webp"},
    {id: 47, name: "Mineral Water", price: 150, category: "Drinks", image: "Assets/Images-d/Mineral Water.webp"},
    {id: 48, name: "Chocolate Frappe", price: 650, category: "Drinks", image: "Assets/Images-d/Chocolate Frappe.webp"}
];

const desserts = [
    {
        id: 49,
        name: "Chocolate Brownie",
        price: 450,
        category: "Desserts",
        image: "Assets/Images-d/chocolate Brownie.webp",
        description: "A rich, fudgy chocolate brownie with a soft center."
    },
    {
        id: 50,
        name: "Chocolate Lava Cake",
        price: 650,
        category: "Desserts",
        image: "Assets/Images-d/Chocolate Lava Cake.webp",
        description: "A warm chocolate cake with a gooey chocolate center."
    },
    {
        id: 51,
        name: "Vanilla Ice Cream",
        price: 300,
        category: "Desserts",
        image: "Assets/Images-d/Vanilla Ice Cream.webp",
        description: "Smooth and creamy vanilla ice cream served chilled."
    },
    {
        id: 52,
        name: "Chocolate Sundae",
        price: 450,
        category: "Desserts",
        image: "Assets/Images-d/Chocolate Sundae.webp",
        description: "Creamy ice cream topped with rich chocolate sauce."
    },
    {
        id: 53,
        name: "Chocolate Chip Cookies",
        price: 250,
        category: "Desserts",
        image: "Assets/Images-d/Chocolate Chip Cookies.webp",
        description: "Golden cookies filled with delicious chocolate chips."
    },
    {
        id: 54,
        name: "Cheesecake",
        price: 600,
        category: "Desserts",
        image: "Assets/Images-d/Cheesecake.webp",
        description: "A creamy cheesecake with a buttery biscuit base."
    },
    {
        id: 55,
        name: "Donut",
        price: 300,
        category: "Desserts",
        image: "Assets/Images-d/Donut.webp",
        description: "A soft, fluffy donut topped with sweet chocolate glaze."
    }
];

const order = [];
const menuProducts = [...products, ...fries, ...drinks, ...desserts];
const grid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");

function formatPrice(value){
    return "Rs. " + value.toLocaleString();
}

function createCard(product){
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="card-details">
            <p class="card-name">${product.name}</p>
            <p class="card-des">${product.description || ""}</p>
        </div>
        <div class="card-footer">
            <span class="card-price">${formatPrice(product.price)}</span>
        </div>
        `;
    const image = product.image
        ? Object.assign(document.createElement("img"), { src: product.image, alt: product.name })
        : Object.assign(document.createElement("div"), { textContent: "Image coming soon" });
    image.className = "card-img";
    card.insertBefore(image, card.firstChild);
    const addControl = document.getElementById("product-add-template").content.cloneNode(true);
    const addButton = addControl.querySelector(".add-btn");
    const isAdded = order.some(item => item.id === product.id);
    addButton.dataset.id = product.id;
    addButton.setAttribute("aria-label", isAdded ? `Add another ${product.name}` : `Add ${product.name} to cart`);
    addButton.classList.toggle("is-added", isAdded);
    card.querySelector(".card-footer").appendChild(addControl);

    return card;
}

function renderProducts(category = "Burger"){
    grid.innerHTML = "";
    const categoryProducts = menuProducts.filter(product => product.category === category);

    if (categoryProducts.length === 0) {
        grid.textContent = `No ${category.toLowerCase()} available yet.`;
        return;
    }

    categoryProducts.forEach(product => grid.appendChild(createCard(product)));
}

const categoryButtons = document.querySelectorAll(".category-buttons [data-target]");
const categoryHeading = document.getElementById("category-heading");
const cartToggle = document.getElementById("cart-toggle");
const cartPanel = document.getElementById("cart-panel");
const cartWidget = document.querySelector(".cart-widget");
const cartBadge = document.getElementById("cart-badge");
const cartItems = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartDiscount = document.getElementById("cart-discount");
const cartTotal = document.getElementById("cart-total");
const discountOptions = [0, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100];

function updateCart(){
    const itemCount = order.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = order.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discountTotal = order.reduce((sum, item) =>
        sum + Math.round(item.price * item.discountPercent / 100) * item.qty, 0);
    cartBadge.textContent = itemCount;
    cartCount.textContent = "Items in order: " + itemCount;
    cartSubtotal.textContent = formatPrice(subtotal);
    cartDiscount.textContent = "- " + formatPrice(discountTotal);
    cartTotal.textContent = formatPrice(subtotal - discountTotal);
    cartEmpty.hidden = order.length > 0;
    cartItems.innerHTML = "";

    order.forEach(item => {
        const row = document.createElement("li");
        row.className = "cart-item";

        const details = document.createElement("div");
        details.className = "cart-item-details";
        const name = document.createElement("span");
        name.className = "cart-item-name";
        name.textContent = item.name;
        const price = document.createElement("span");
        price.className = "cart-item-price";
        const itemDiscount = Math.round(item.price * item.discountPercent / 100) * item.qty;
        price.textContent = formatPrice(item.price * item.qty - itemDiscount);
        details.append(name, price);

        if (item.discountPercent > 0) {
            const savings = document.createElement("span");
            savings.className = "cart-item-savings";
            savings.textContent = `${item.discountPercent}% off - Save ${formatPrice(itemDiscount)}`;
            details.appendChild(savings);
        }

        const discountControl = document.createElement("label");
        discountControl.className = "cart-discount-control";
        discountControl.append("Discount");
        const discountSelect = document.createElement("select");
        discountSelect.className = "cart-discount";
        discountSelect.dataset.id = item.id;
        discountSelect.setAttribute("aria-label", `Discount for ${item.name}`);
        discountOptions.forEach(percent => {
            const option = document.createElement("option");
            option.value = percent;
            option.textContent = percent === 0 ? "None" : `${percent}%`;
            option.selected = percent === item.discountPercent;
            discountSelect.appendChild(option);
        });
        discountControl.appendChild(discountSelect);
        details.appendChild(discountControl);

        const quantity = document.createElement("div");
        quantity.className = "cart-quantity";
        const decrement = document.createElement("button");
        decrement.type = "button";
        decrement.dataset.cartAction = "decrease";
        decrement.dataset.id = item.id;
        decrement.setAttribute("aria-label", `Remove one ${item.name}`);
        decrement.textContent = "-";
        const amount = document.createElement("span");
        amount.textContent = item.qty;
        const increment = document.createElement("button");
        increment.type = "button";
        increment.dataset.cartAction = "increase";
        increment.dataset.id = item.id;
        increment.setAttribute("aria-label", `Add one ${item.name}`);
        increment.textContent = "+";
        quantity.append(decrement, amount, increment);

        row.append(details, quantity);
        cartItems.appendChild(row);
    });

    grid.querySelectorAll(".add-btn").forEach(button => {
        const item = order.find(orderItem => orderItem.id === Number(button.dataset.id));
        const product = menuProducts.find(menuItem => menuItem.id === Number(button.dataset.id));
        const isAdded = Boolean(item);
        button.classList.toggle("is-added", isAdded);
        button.setAttribute("aria-label", isAdded
            ? `Add another ${item.name} (in cart: ${item.qty})`
            : `Add ${product.name} to cart`);
    });
}

function closeCart(){
    cartPanel.hidden = true;
    cartToggle.setAttribute("aria-expanded", "false");
    cartToggle.setAttribute("aria-label", "Open cart");
}

cartToggle.addEventListener("click", () => {
    const isOpen = cartToggle.getAttribute("aria-expanded") === "true";
    cartPanel.hidden = isOpen;
    cartToggle.setAttribute("aria-expanded", String(!isOpen));
    cartToggle.setAttribute("aria-label", isOpen ? "Open cart" : "Close cart");
});

document.addEventListener("click", event => {
    if (!cartPanel.hidden && !cartWidget.contains(event.target)) closeCart();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !cartPanel.hidden) closeCart();
});

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.target;
        categoryHeading.textContent = category === "Burger" ? "Burgers" : category;
        categoryButtons.forEach(categoryButton => {
            categoryButton.setAttribute("aria-pressed", String(categoryButton === button));
        });
        renderProducts(category);
    });
});

grid.addEventListener("click", event => {
    const addButton = event.target.closest(".add-btn");
    if (!addButton) return;

    const product = menuProducts.find(item => item.id === Number(addButton.dataset.id));
    if (!product) return;

    const existingItem = order.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        order.push({ ...product, qty: 1, discountPercent: 0 });
    }
    updateCart();
});

cartItems.addEventListener("change", event => {
    const discountSelect = event.target.closest("select.cart-discount");
    if (!discountSelect) return;

    const item = order.find(orderItem => orderItem.id === Number(discountSelect.dataset.id));
    if (!item) return;

    item.discountPercent = Number(discountSelect.value);
    updateCart();
});

cartItems.addEventListener("click", event => {
    const quantityButton = event.target.closest("button[data-cart-action]");
    if (!quantityButton) return;

    const itemIndex = order.findIndex(item => item.id === Number(quantityButton.dataset.id));
    if (itemIndex === -1) return;

    if (quantityButton.dataset.cartAction === "increase") {
        order[itemIndex].qty += 1;
    } else {
        order[itemIndex].qty -= 1;
        if (order[itemIndex].qty === 0) order.splice(itemIndex, 1);
    }
    updateCart();
});

renderProducts();
updateCart();