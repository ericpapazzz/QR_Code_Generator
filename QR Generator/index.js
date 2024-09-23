// selecciona elementos del DOM que se van a manipular 
const qrText = document.querySelector(".qr-text");
const qrCode = document.querySelector("#qr-code");
const qrDownload = document.querySelector(".download.btn");
const sizeSelector = document.querySelector(".sizes");

const defaultText = "https://matias.me/nsfw/";
let qrSize = 400;

// -funciones
function handleSizeChange(e){
    qrSize = parseInt(e.target.value);
    generateQRCode(qrText.value.trim());
}

function generateQRCode(text){
    qrCode.innerHTML = ""; // limpia cualquier QR anterior

// se usa libreria QRCode.js para generar el codigo en el contenedor
new QRCode(qrCode,{
    text: text || defaultText, // se usa un texto predeterminado si no hay texto
    width: qrSize,
    height: qrSize, 
});

// Actualiza el enlace de descarga con el nuevo código QR generado
const canvas = qrCode.querySelector("canvas");
if (canvas) {
    qrDownload.href = canvas.toDataURL();
}
}

function handleQRText(e){
const value = e.target.value.trim(); // obtiene el texto del input
generateQRCode(value);
}
// funciones-

// listeners
qrText.addEventListener("input",handleQRText); // detecta cuando se introduce texto y se genera el QR
sizeSelector.addEventListener("change", handleSizeChange); // Detecta el cambio de tamaño

// genera el QR por default
generateQRCode(defaultText);