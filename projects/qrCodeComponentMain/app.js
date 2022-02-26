let qrCode = new QRCode( document.querySelector(".qrCode"), {
    text: "https://www.frontendmentor.io/",
    width: 180,
    height: 180,
    colorDark: "#FFFFFF",
    colorLight: "transparent",
    correctLevel : QRCode.CorrectLevel.H
} );