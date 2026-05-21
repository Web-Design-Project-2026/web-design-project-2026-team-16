let tabs = document.querySelectorAll(".tab-button");
let panels = document.querySelectorAll(".schedule-panel");
let colors = ["--rock-color", "--pop-color", "--edm-color"];

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Deactivate all tabs and panels
    tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
    panels.forEach((p) => (p.tabIndex = -1));
    panels.forEach((p) => (p.hidden = true));

    // Activate the clicked tab and corresponding panel
    tab.setAttribute("aria-selected", "true");
    localStorage.setItem("selectedTab", index + 1);
    console.log(
      "Selected tab stored in localStorage: " +
        localStorage.getItem("selectedTab"),
    );
    let panelID = tab.getAttribute("aria-controls");
    let panel = document.getElementById(panelID);

    panel.tabIndex = 0;
    panel.hidden = false;

    // Set the color based on the selected tab
    let selected = panel.id[panel.id.length - 1];
    document.documentElement.style.setProperty(
      "--selected-color",
      `var(${colors[selected - 1]})`,
    );
  });
});

function initialTab() {
  if (!localStorage.getItem("selectedTab")) {
    localStorage.setItem("selectedTab", "1");
  }
  //Show the panel corresponding to the selected tab in localStorage
  panels.forEach((panel) => {
    panel.id[panel.id.length - 1] === localStorage.getItem("selectedTab")
      ? (panel.hidden = false)
      : (panel.hidden = true);
  }); 

  // Set the correct color
  document.documentElement.style.setProperty(
    "--selected-color",
    `var(${colors[localStorage.getItem("selectedTab") - 1]})`,
  );

  // Set the correct tab as active
  tabs.forEach((tab, index) => {
    if (index + 1 === parseInt(localStorage.getItem("selectedTab"))) {
      tab.setAttribute("aria-selected", "true");
    } else {
      tab.setAttribute("aria-selected", "false");
    }
  });
}

function checkForHighlight() {
  const urlParams = new URLSearchParams(window.location.search);
  const highlight = urlParams.get("highlight");
  if (highlight) {
    const elementToHighlight = document.querySelector(`#${highlight}`);
    if (elementToHighlight) {
      elementToHighlight.classList.add("highlight");
      //Scroll to the highlighted element
      elementToHighlight.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
}

initialTab();
checkForHighlight();
