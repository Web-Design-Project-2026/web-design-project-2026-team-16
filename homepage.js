document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");
  const menuToggle = document.getElementById("menuToggle");

  const actionContent = {
    tickets: {
      title: "🎫 Ticket Booking",
      body: "Redirecting onto checkout processing queues...",
    },
    schedule: {
      title: "📅 Event Program",
      body: "<strong>Day 1:</strong> Rock Showcase<br><strong>Day 2:</strong> Pop Mainstage<br><strong>Day 3:</strong> EDM Festival Finale",
    },
    map: {
      title: "🗺️ Ground Arena Map",
      body: "Loading high-resolution interactive terrain vector map layers...",
    },
    about: {
      title: "😎 About Pre-Summer Festival",
      body: "The premium multi-genre musical celebration experience kicking off the season directly on Visingsö, Sweden.",
    },
    genericNav: {
      title: "Navigation Route Triggered",
      body: "Transitioning your profile view to the selected menu tab module space...",
    },
  };

  function openModal(type) {
    if (actionContent[type]) {
      modalTitle.innerHTML = actionContent[type].title;
      modalBody.innerHTML = actionContent[type].body;
      modalOverlay.classList.add("active");
    }
  }

  document
    .getElementById("btnTickets")
    .addEventListener("click", () => openModal("tickets"));
  document
    .getElementById("btnSchedule")
    .addEventListener("click", () => openModal("schedule"));
  document
    .getElementById("btnMap")
    .addEventListener("click", () => openModal("map"));

  document
    .getElementById("btnViewSchedule")
    .addEventListener("click", () => openModal("schedule"));
  document
    .getElementById("btnExploreLineup")
    .addEventListener("click", () => openModal("schedule"));
  document
    .getElementById("btnAboutUs")
    .addEventListener("click", () => openModal("about"));

  menuToggle.addEventListener("click", () => openModal("genericNav"));

  const desktopItems = document.querySelectorAll(".nav-item");
  desktopItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      desktopItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
      openModal("genericNav");
    });
  });

  modalClose.addEventListener("click", () =>
    modalOverlay.classList.remove("active"),
  );
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
  });
});
