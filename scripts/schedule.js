let tabs = document.querySelectorAll(".tab-button");
let panels = document.querySelectorAll(".schedule-panel");
panels.forEach((panel) =>
  panel.id != "schedule-day-1" ? (panel.hidden = true) : "",
); // Hide all panels initially

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Deactivate all tabs and panels
    tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
    panels.forEach((p) => (p.tabIndex = -1));
    panels.forEach((p) => (p.hidden = true));

    // Activate the clicked tab and corresponding panel
    tab.setAttribute("aria-selected", "true");
    let panelID = tab.getAttribute("aria-controls");
    let panel = document.getElementById(panelID);

    panel.tabIndex = 0;
    panel.hidden = false;
    panel.focus();
  });
});
