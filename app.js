
const RACE_HANDLERS = {
  governor_VA: window.renderVirginiaGovernor,
  governor_NJ: window.renderNewJerseyGovernor,
  mayor_NYC: window.renderNYCMayoral
};

const raceSelect = document.getElementById("raceSelect");
const aggregateTitle = document.getElementById("aggregateTitle");

function loadRace(key) {
  const handler = RACE_HANDLERS[key];
  if (!handler) {
    console.error("Race not found:", key);
    return;
  }

  d3.select("#bar-chart").selectAll("*").remove();
  d3.select("#trend-chart").selectAll("*").remove();
  d3.select("#poll-source-table").html("");

  const raceNames = {
    governor_VA: "Virginia Governor (2025)",
    governor_NJ: "New Jersey Governor (2025)",
    mayor_NYC: "New York City Mayoral (2025)"
  };
  aggregateTitle.textContent = `Current Polling Aggregate – ${raceNames[key]}`;

  handler();
}

raceSelect.addEventListener("change", (e) => {
  loadRace(e.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
  loadRace("governor_VA"); 
});
