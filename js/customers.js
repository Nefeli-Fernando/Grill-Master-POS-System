const defaultCustomers = [
    { id: 1, name: "Nimal Perera", phone: "0771234567", email: "nimal.perera@gmail.com" },
    { id: 2, name: "Kasun Silva", phone: "0712345678", email: "kasun.silva@gmail.com" },
    { id: 3, name: "Sarah Fernando", phone: "0763456789", email: "sarah.fernando@gmail.com" },
    { id: 4, name: "Aisha Khan", phone: "0754567890", email: "aisha.khan@gmail.com" },
    { id: 5, name: "Dinuka Raj", phone: "0785678901", email: "dinuka.raj@gmail.com" }
];

const storageKey = "grill-master-customers";
let customers = loadCustomers();

const body = document.getElementById("customer-body");
const form = document.getElementById("customer-form");
const idInput = document.getElementById("customer-id");
const nameInput = document.getElementById("customer-name");
const phoneInput = document.getElementById("customer-phone");
const emailInput = document.getElementById("customer-email");
const submitButton = document.getElementById("customer-submit");
const cancelButton = document.getElementById("customer-cancel");

function loadCustomers() {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return [...defaultCustomers];

    try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [...defaultCustomers];
    } catch {
        return [...defaultCustomers];
    }
}

function saveCustomers() {
    localStorage.setItem(storageKey, JSON.stringify(customers));
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function renderCustomers() {
    body.innerHTML = customers.map(customer => `
        <tr>
            <td>${customer.id}</td>
            <td>${escapeHtml(customer.name)}</td>
            <td>${escapeHtml(customer.phone)}</td>
            <td>${escapeHtml(customer.email)}</td>
            <td>
                <button type="button" class="btn-edit" data-action="edit" data-id="${customer.id}">Edit</button>
                <button type="button" class="btn-delete" data-action="delete" data-id="${customer.id}">Delete</button>
            </td>
        </tr>
    `).join("");
}

function resetForm() {
    form.reset();
    idInput.value = "";
    submitButton.textContent = "Add Customer";
    cancelButton.hidden = true;
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const customerData = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim()
    };
    if (!customerData.name || !customerData.phone || !customerData.email) return;

    const editingId = Number(idInput.value);
    if (editingId) {
        const customer = customers.find(item => item.id === editingId);
        if (customer) Object.assign(customer, customerData);
    } else {
        const nextId = customers.reduce((highest, customer) => Math.max(highest, customer.id), 0) + 1;
        customers.push({ id: nextId, ...customerData });
    }

    saveCustomers();
    renderCustomers();
    resetForm();
});

cancelButton.addEventListener("click", resetForm);

body.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const customerId = Number(button.dataset.id);
    const customer = customers.find(item => item.id === customerId);
    if (!customer) return;

    if (button.dataset.action === "edit") {
        idInput.value = customer.id;
        nameInput.value = customer.name;
        phoneInput.value = customer.phone;
        emailInput.value = customer.email;
        submitButton.textContent = "Save Changes";
        cancelButton.hidden = false;
        nameInput.focus();
    } else if (button.dataset.action === "delete") {
        customers = customers.filter(item => item.id !== customerId);
        saveCustomers();
        renderCustomers();
        if (Number(idInput.value) === customerId) resetForm();
    }
});

renderCustomers();