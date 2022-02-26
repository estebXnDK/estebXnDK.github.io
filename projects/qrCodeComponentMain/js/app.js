let qrCode = new QRCode( document.querySelector(".qrCode"), {
    text: "https://www.frontendmentor.io/",
    alt: "Código QR que redirige hacia frontendmentor",
    width: 180,
    height: 180,
    colorDark: "#FFFFFF",
    colorLight: "transparent",
    correctLevel : QRCode.CorrectLevel.H
} );