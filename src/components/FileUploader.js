import { parseCSV, parseExcel } from "../utils/parser.js";

export function setupUploader(callback) {
  const uploader = document.getElementById("uploader");
  uploader.innerHTML = `
    <input type="file" id="fileInput" />
    <div id="dropZone">Drag & Drop File Here</div>
  `;

  const fileInput = document.getElementById("fileInput");
  const dropZone = document.getElementById("dropZone");

  fileInput.addEventListener("change", e => handleFile(e.target.files[0], callback));

  dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    dropZone.style.border = "2px dashed #0077cc";
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.border = "none";
  });

  dropZone.addEventListener("drop", e => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0], callback);
  });
}

function handleFile(file, callback) {
  if (file.name.endsWith(".csv")) {
    parseCSV(file, callback);
  } else if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
    parseExcel(file, callback);
  } else {
    alert("Unsupported file type. Please upload CSV or Excel.");
  }
}