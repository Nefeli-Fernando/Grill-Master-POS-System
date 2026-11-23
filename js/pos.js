const stats = { todaysSales: 21300, orders: 68, goalPercent: 54 };

const stock = [
    { name:"Burgers" , level: 25},
    { name: "Fries" , level: 80},
    { name:"Drinks", level: 20 },
    { name:"Desserts" , level:60}
];

const monthly = {
    months: ["Jan","Feb","Mar","Apr","May"],
    burgers: [0, 12, 38, 30, 32],
    fries: [12, 14, 20, 15, 50],
    drinks: [8, 10, 12, 18, 20],
    desserts: [10, 10, 15, 22, 24]
}

const staff = [
  { role: "Manager", name: "Nefeli Fernando", salary: 250000, status: "Active" },
  { role: "Cashier", name: "Kasun Perera",    salary: 90000,  status: "Active" },
  { role: "Cook",    name: "Nimal Silva",     salary: 110000, status: "On leave" }
];

// ---------- 1. Stat cards ----------
document.getElementById("todays-sales").textContent = "Rs. " + stats.todaysSales.toLocaleString();
document.getElementById("order-count").textContent = stats.orders;
document.getElementById("goal-text").textContent = stats.goalPercent + "%";
document.getElementById("goal-bar").style.width = stats.goalPercent + "%";
document.querySelector(".bar[role='progressbar']").setAttribute("aria-valuenow", stats.goalPercent);

// ---------- 2. Stock list ----------
function getLevelClass(level) {
  if (level < 30) return "low";   // red
  if (level < 50) return "mid";   // amber
  return "good";                  // green
}

function renderStock() {
  const list = document.getElementById("stock-list");
  list.innerHTML = stock.map((item, i) => {
    const cls = getLevelClass(item.level);
    const status = cls === "low" ? "Low" : cls === "mid" ? "Watch" : "Healthy";
    const button = cls === "good"
      ? `<button class="reorder-btn ok" type="button" disabled aria-label="${item.name} stock is healthy">&#10003;</button>`
      : `<button class="reorder-btn" type="button" data-stock-index="${i}" aria-label="Note a reorder for ${item.name}" title="Note a reorder request">&#8599;</button>`;
    return `
      <div class="stock-row">
        <div>
          <p class="stock-name">${item.name} <span class="stock-level">${item.level}% - ${status}</span></p>
          <div class="stock-bar" role="meter" aria-label="${item.name} stock level" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${item.level}">
            <div class="stock-fill ${cls}" style="width:${item.level}%"></div>
          </div>
        </div>
        ${button}
      </div>`;
  }).join("");
}

function reorder(index, btn) {
  const item = stock[index];
  if (!item || btn.disabled) return;

  btn.disabled = true;
  btn.classList.add("sent");
  btn.textContent = "✓";
  btn.setAttribute("aria-label", `Reorder request noted for ${item.name}`);
  document.getElementById("stock-feedback").textContent = `Reorder request noted for ${item.name}.`;
}

document.getElementById("stock-list").addEventListener("click", event => {
  const button = event.target.closest("button[data-stock-index]");
  if (!button) return;
  reorder(Number(button.dataset.stockIndex), button);
});

// ---------- 3. Charts ----------
const burgerColors = ["#c24e00", "#ff7a00", "#f5a524", "#ffd9a8"];

if (typeof Chart === "undefined") {
  document.querySelectorAll(".chart-canvas").forEach(container => {
    const message = document.createElement("p");
    message.className = "chart-unavailable";
    message.textContent = "Chart library unavailable. Check your connection and refresh to load charts.";
    container.replaceChildren(message);
  });
} else {
  new Chart(document.getElementById("sales-chart"), {
    type: "line",
    data: {
      labels: monthly.months,
      datasets: [
        { label: "Burgers", data: monthly.burgers, backgroundColor: burgerColors[0], borderColor: burgerColors[0], fill: true, borderWidth: 2, tension: 0.3 },
        { label: "Fries", data: monthly.fries, backgroundColor: burgerColors[1], borderColor: burgerColors[1], fill: true, borderWidth: 2, tension: 0.3 },
        { label: "Drinks", data: monthly.drinks, backgroundColor: burgerColors[2], borderColor: burgerColors[2], fill: true, borderWidth: 2, tension: 0.3 },
        { label: "Desserts", data: monthly.desserts, backgroundColor: burgerColors[3], borderColor: burgerColors[3], fill: true, borderWidth: 2, tension: 0.3 }
      ]
    },
    options: {
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: "index" },
      plugins: { legend: { position: "bottom" } },
      scales: { y: { stacked: true, beginAtZero: true }, x: { stacked: true } }
    }
  });

  const sum = arr => arr.reduce((a, b) => a + b, 0);

  new Chart(document.getElementById("category-chart"), {
    type: "doughnut",
    data: {
      labels: ["Burgers", "Fries", "Drinks", "Desserts"],
      datasets: [{
        data: [sum(monthly.burgers), sum(monthly.fries), sum(monthly.drinks), sum(monthly.desserts)],
        backgroundColor: burgerColors,
        borderColor: "#ffffff",
        borderWidth: 3
      }]
    },
    options: {
      maintainAspectRatio: false,
      cutout: "64%",
      plugins: { legend: { position: "bottom" } }
    }
  });
}

// ---------- 4. Staff table ----------
document.getElementById("staff-body").innerHTML = staff.map(s => `
  <tr>
    <td>${s.role}</td>
    <td>${s.name}</td>
    <td>Rs. ${s.salary.toLocaleString()}</td>
    <td><span class="badge ${s.status === "Active" ? "active" : "leave"}">${s.status}</span></td>
  </tr>`).join("");

renderStock();
