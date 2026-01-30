export function setupExport(callback) {
  const btn = document.getElementById("exportBtn");
  btn.addEventListener("click", callback);
}