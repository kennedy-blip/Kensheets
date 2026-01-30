import { parseCSV, parseExcel } from "./utils/parser.js";
import { calculateStats } from "./utils/stats.js";
import { saveConfig, loadConfig } from "./utils/storage.js";
import { renderChart } from "./components/ChartRenderer.js";
import { setupUploader } from "./components/FileUploader.js";
import { setupExport } from "./components/ExportButton.js";
import { setupThemeSwitcher } from "./components/ThemeSwitcher.js";
import { renderAnalytics } from "./components/AnalyticsPanel.js";

let currentData = [];

function init() {
  setupUploader(onDataParsed);
  setupExport(() => exportChart());
  setupThemeSwitcher();

  const saved = loadConfig();
  if (saved) {
    currentData = saved.data;
    renderChart(currentData, saved.chartType);
    renderAnalytics(currentData);
  }
}

function onDataParsed(data) {
  currentData = data;
  const chartType = document.getElementById("chartType").value;
  renderChart(currentData, chartType);
  renderAnalytics(currentData);
  saveConfig({ data: currentData, chartType });
}

function exportChart() {
  const chartDiv = document.getElementById("chart");
  html2canvas(chartDiv).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
    pdf.save("chart.pdf");
  });
}

init();