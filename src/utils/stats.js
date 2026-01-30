export function calculateStats(data) {
  const numericValues = Object.values(data[0]).map(Number).filter(v => !isNaN(v));
  const mean = numericValues.reduce((a, b) => a + b, 0) / numericValues.length;
  const sorted = [...numericValues].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  const variance = numericValues.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numericValues.length;

  return { mean, median, variance };
}