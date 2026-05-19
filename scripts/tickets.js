const keys = ["3pass", "1pass", "3premium", "1premium", "totalTickets"];

initializeTickets();

document.querySelectorAll(".qty-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const isPlus =
      btn.querySelector("svg").getAttribute("data-lucide") === "plus";
    const qtyDisplay = btn.parentElement.querySelector(".qty-display");
    let currentQty = parseInt(qtyDisplay.textContent);

    if (isPlus) {
      currentQty++;
    } else {
      currentQty = Math.max(0, currentQty - 1);
    }

    qtyDisplay.textContent = currentQty;
    //store the quantity in localStorage using the corresponding key
    localStorage.setItem(keys[index], currentQty);
    updateTotal();
  });
});

function initializeTickets() {
  // Initialize localStorage values if they don't exist
  keys.forEach((k) => {
    if (localStorage.getItem(k) === null) {
      localStorage.setItem(k, "0");
    }
  });

  // Update the displayed quantities and total from localStorage
  document.querySelectorAll(".qty-display").forEach((display, index) => {
    const type = keys[index];
    display.textContent = localStorage.getItem(type);
  });

  document.querySelector("#total-tickets").textContent =
    localStorage.getItem("totalTickets");
}

function updateTotal() {
  const qtyDisplays = document.querySelectorAll(".qty-display");
  let total = 0;

  qtyDisplays.forEach((display) => {
    total += parseInt(display.textContent);
  });

  document.querySelector("#total-tickets").textContent = total;
  localStorage.setItem("totalTickets", total);
}
