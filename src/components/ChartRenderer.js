export function renderChart(data, chartType) {
  const keys = Object.keys(data[0]);
  const x = data.map(row => row[keys[0]]);
  const y = data.map(row => row[keys[1]]);

  Plotly.newPlot("chart", [{
    x,
    y,
    type: chartType
  }], { margin: { t: 20 } });
}