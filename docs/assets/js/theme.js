'use strict';

// ---------------------------------------------------------------------------------------------------------------------
// Init.
// ---------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  clipBoard();
  qrCode('bitcoin-qr', 'data-qr', '200');
  qrCode('ethereum-qr', 'data-qr', '200');
  qrCode('bitcoin-cash-qr', 'data-qr', '200');
  qrCode('monero-qr', 'data-qr', '200');
  qrCode('zcash-qr', 'data-qr', '200');
});

// ---------------------------------------------------------------------------------------------------------------------
// ClipBoard.
// ---------------------------------------------------------------------------------------------------------------------

function clipBoard(element = '.ext-clipboard') {
  const clipboard = new ClipboardJS(element);

  clipboard.on('success', function (e) {
    e.clearSelection();
  });
}

// ---------------------------------------------------------------------------------------------------------------------
// QR Code.
// ---------------------------------------------------------------------------------------------------------------------

function qrCode(id, text, width = '150') {
  const element = document.getElementById(id);
  const data = element.getAttribute(text);

  QRCode.toCanvas(element, data, {
    width: width,
  });
}
