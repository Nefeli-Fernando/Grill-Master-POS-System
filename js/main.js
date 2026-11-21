const products = [
    {id : 1, name:"Classic Burger" , description:"A juicy chicken patty with fresh lettuce, tomato, and house sauce", price: 850, category: "Burger", image: "Assets/Images/Classic-burger.jpg" },
    {id : 2, name:"Cheese Burger", description:"A juicy beef patty topped with melted cheese and creamy sauce", price: 950, category: "Burger", image: "Assets/Images/Cheese-Burger.jpg"},
    {id : 3, name: "Double Beef" ,description:"Two juicy beef patties layered with fresh toppings and sauce", price: 1350, category: "Burger", image: "Assets/Images/Beef-Burger.jpg"},
    {id: 4, name: "Chicken Burger",description:"A tender chicken patty served with fresh lettuce and creamy mayo", price: 900, category: "Burger", image: "Assets/Images/Chicken-Burger-fixed.jpg"},
    {id: 5, name: "Crispy Chicken Burger", description:"Golden, crispy chicken with crunchy lettuce and creamy sauce", price: 1050, category: "Burger", image: "Assets/Images/Crispy Chicken Burger.jpg"},
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



const order = [];
const menuProducts = [...products, ...fries];
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
    const checkbox = document.getElementById("product-checkbox-template").content.cloneNode(true);
    const input = checkbox.querySelector(".checkbox");
    input.id = `checkbox-${product.id}`;
    input.dataset.id = product.id;
    input.checked = order.some(item => item.id === product.id);
    checkbox.querySelector(".checkbox-label").htmlFor = input.id;
    card.querySelector(".card-footer").appendChild(checkbox);

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

grid.addEventListener("change", (e) => {
  const checkbox = e.target.closest(".checkbox");
  if (!checkbox) return;

  const product = menuProducts.find(p => p.id === Number(checkbox.dataset.id));
  if (!product) return;

  const existingIndex = order.findIndex(item => item.id === product.id);
  if (checkbox.checked && existingIndex === -1) {
    order.push({ ...product, qty: 1 });
  } else if (!checkbox.checked && existingIndex !== -1) {
    order.splice(existingIndex, 1);
  }

  const totalItems = order.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = "Items in order: " + totalItems;
});

renderProducts();


/*MAIN MENU BACK*/
const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("toggle");
const icon = toggle.querySelector("use");
const links = sidebar.querySelectorAll("nav a");

toggle.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  icon.setAttribute("href", open ? "#close" : "#menu");
  toggle.setAttribute("aria-expanded", open);
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach((l) => {
      l.classList.remove("on");
      l.removeAttribute("aria-current");
    });
    link.classList.add("on");
    link.setAttribute("aria-current", "page");
  });
});