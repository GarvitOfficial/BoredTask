document.addEventListener("DOMContentLoaded", () => {
  const fetchActivityBtn = document.getElementById("fetchActivityBtn");
  const btnText = document.getElementById("btnText");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const resultDiv = document.getElementById("result");
  const activityElement = document.getElementById("activity");

  fetchActivityBtn.addEventListener("click", async () => {
    btnText.textContent = "Fetching...";
    loadingSpinner.classList.remove("hidden");
    resultDiv.classList.add("hidden");

    const response = await fetch("https://www.boredapi.com/api/activity?participants=1");
    const data = await response.json();

    btnText.textContent = "Fetch Activity";
    loadingSpinner.classList.add("hidden");

    if (response.ok) {
      activityElement.textContent = data.activity;
      resultDiv.classList.remove("hidden");
    } else {
      activityElement.textContent = "Error fetching activity";
      resultDiv.classList.remove("hidden");
    }
  });
});
