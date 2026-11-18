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
        </div>
        `;
    const checkbox = document.getElementById("product-checkbox-template").content.cloneNode(true);
    const input = checkbox.querySelector(".checkbox");
    input.id = `checkbox-${product.id}`;
    input.dataset.id = product.id;
    checkbox.querySelector(".checkbox-label").htmlFor = input.id;
    card.querySelector(".card-footer").appendChild(checkbox);

    return card;
}

function renderProducts(){
    grid.innerHTML = "";
    products.forEach(p => 
        grid.appendChild(createCard(p)));
}

grid.addEventListener("change", (e) => {
  const checkbox = e.target.closest(".checkbox");
  if (!checkbox) return;

  const product = products.find(p => p.id === Number(checkbox.dataset.id));
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