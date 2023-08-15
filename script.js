document.addEventListener("DOMContentLoaded", () => {
  const fetchActivityBtn = document.getElementById("fetchActivityBtn");
  const resultDiv = document.getElementById("result");
  const activityElement = document.getElementById("activity");

  fetchActivityBtn.addEventListener("click", async () => {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const data = await response.json();

    if (response.ok) {
      activityElement.textContent = data.activity;
      resultDiv.classList.remove("hidden");
    } else {
      activityElement.textContent = "Error fetching activity";
      resultDiv.classList.remove("hidden");
    }
  });
});
