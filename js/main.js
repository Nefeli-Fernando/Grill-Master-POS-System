const products = [
    {id : 1, name:"Classic Burger" , price: 850 },
    {id : 2, name:"Cheese Burger", price: 950},
    {id : 3, name: "Double Beef" , price: 1350}
];

const order = [];
const grid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");

function formatPrice(value){
    return "Rs. " + value.toLocaleString();
}

function createCard(product){
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="card-img">photo</div>
        <p class="card-name">${product.name}</p>
        <div class="card-footer">
            <span class="card-price">${formatPrice(product.price)}</span>
            <button class="add-btn" data-id="${product.id}">Add</button>
        </div>
        `;
        return card;
}

function renderProducts(){
    grid.innerHTML = "";
    products.forEach(p => 
        grid.appendChild(createCard(p)));
}

grid.addEventListener("click",(e) => {
   const btn = e.target.closest(".add-btn");
  if (!btn) return;

  const product = products.find(p => p.id === Number(btn.dataset.id));
  const existing = order.find(item => item.id === product.id);

  if (existing) {
    existing.qty++;
  } else {
    order.push({ ...product, qty: 1 });
  }

  const totalItems = order.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = "Items in order: " + totalItems;
});

renderProducts();