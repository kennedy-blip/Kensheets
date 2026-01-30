import { calculateStats } from "../utils/stats.js";

export function renderAnalytics(data) {
  const stats = calculateStats(data);
  const panel = document.getElementById("analytics");
  panel.innerHTML = `
    <h3>Analytics</h3>
    <p>Mean: ${stats.mean.toFixed(2)}</p>
    <p>Median: ${stats.median}</p>
    <p>Variance: ${stats.variance.toFixed(2)}</p>
  `;
}