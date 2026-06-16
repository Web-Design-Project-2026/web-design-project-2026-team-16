const keys = ["3pass", "1pass", "3premium", "1premium", "totalTickets"];

document.querySelectorAll(".qty-btn").forEach((btn, index) => {
  // Add click event listener to each quantity button
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

    // Determine which ticket type is being updated based on the button index
    let currentKey;
    switch (index) {
      case 0:
      case 1:
        currentKey = "3pass";
        break;
      case 2:
      case 3:
        currentKey = "1pass";
        break;
      case 4:
      case 5:
        currentKey = "3premium";
        break;
      case 6:
      case 7:
        currentKey = "1premium";
        break;
    }

    localStorage.setItem(currentKey, currentQty);
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
  //updates the total number of tickets based on all quantities of tickets
  const qtyDisplays = document.querySelectorAll(".qty-display");
  let total = 0;

  qtyDisplays.forEach((display) => {
    total += parseInt(display.textContent);
  });

  document.querySelector("#total-tickets").textContent = total;
  //store the total in localStorage
  localStorage.setItem("totalTickets", total);
}

function adjustCheckoutButtonPosition() {
  //Makes sure the checkout button doesn't overlap with the footer when scrolling to the bottom of the page
  const checkoutButton = document.querySelector(".checkout-btn");
  const pageFooter = document.querySelector("footer");
  if (!checkoutButton || !pageFooter) {
    return;
  }

  const footerRect = pageFooter.getBoundingClientRect();
  const overlap = Math.max(0, window.innerHeight - footerRect.top);

  if (overlap > 0) {
    checkoutButton.style.bottom = `${overlap + 20}px`;
  } else {
    checkoutButton.style.bottom = "";
  }
}

initializeTickets();

window.addEventListener("scroll", adjustCheckoutButtonPosition);
window.addEventListener("resize", adjustCheckoutButtonPosition);
adjustCheckoutButtonPosition();
