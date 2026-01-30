export function saveConfig(config) {
  localStorage.setItem("kensheetsConfig", JSON.stringify(config));
}

export function loadConfig() {
  const raw = localStorage.getItem("kensheetsConfig");
  return raw ? JSON.parse(raw) : null;
}