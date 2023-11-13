//Produkte auf Shop-Page

const products = [{
  id: '34f048f2-756c-11ee-b962-0242ac120002',
  image: 'images/@asia3am.jpeg',
  name: 'Fritz Wlan-Router',
  priceCents: 2999
}, {
  id: '490d2652-756c-11ee-b962-0242ac120002',
  image: 'images/1972 Berlin, Zeitungskiosk Bahnhof Lichtenberg, Ausgang Einbeckerstrasse.jpeg',
  name: 'Wlan-Router',
  priceCents: 4999
}, {
  id: '507bd776-756c-11ee-b962-0242ac120002',
  image: 'images/Kendrick Lamar N95 wallpaper.jpeg',
  name: 'Wlan-RouterS6',
  priceCents: 5999
}, {
  id: '5533972c-756c-11ee-b962-0242ac120002',
  image: 'images/Emily rudd.jpeg',
  name: 'Wlan-Router',
  priceCents: 4999
}, {
  id: '5944d042-756c-11ee-b962-0242ac120002',
  image: 'images/@asia3am.jpeg',
  name: 'Fritz Wlan-Router',
  priceCents: 2999
}, {
  id: '5d305bf4-756c-11ee-b962-0242ac120002',
  image: 'images/1972 Berlin, Zeitungskiosk Bahnhof Lichtenberg, Ausgang Einbeckerstrasse.jpeg',
  name: 'Wlan-Router',
  priceCents: 4999
}, {
  id: '614b75ca-756c-11ee-b962-0242ac120002',
  image: 'images/Kendrick Lamar N95 wallpaper.jpeg',
  name: 'Wlan-RouterS6',
  priceCents: 5999
}, {
  id: '64c52534-756c-11ee-b962-0242ac120002',
  image: 'images/Emily rudd.jpeg',
  name: 'Wlan-Router',
  priceCents: 4999
}, {
  id: 'eab0c0ad-3f50-4fb6-bf20-c3587867841b',
  image: 'images/Emily rudd.jpeg',
  name: 'Switch Ubiquiti USW-24-POE 92W 24p RM 16 x 802.3af/at + 8 x RJ45 + 2 x SFP EAN: 0817882028554 / Hersteller Artikelnr.: USW-24-POE',
  priceCents: 31800
}, {
  id: '139a73f8-b2a2-42b1-8153-ae4cc8a39223',
  image: 'images/Emily rudd.jpeg',
  name: 'Switch Ubiquiti UniFi USW-48-PoE 48 x 10/100/1000 32 x PoE+ 4 x SFP EAN: 0810010072146 / Hersteller Artikelnr.: USW-48-POE',
  priceCents: 46653
}, {
  id: 'b8c6112c-1748-4c5c-96ca-cf4db0e574fa',
  image: 'images/Emily rudd.jpeg',
  name: 'Gateway Pro Ubiquiti UniFi UXG-Pro Dual-WAN Sec. Gatew./Firewall - UCK-G2+ empfohlen EAN: 0810010073525 / Hersteller Artikelnr.: UXG-PRO',
  priceCents: 40985
}, {
  id: '2cd12a96-fc1b-46b2-ade2-93afb1348894',
  image: 'images/Emily rudd.jpeg',
  name: 'AP Ubiquiti UniFi UAP-AC-Pro w/ PoE-Adapter',
  priceCents: 11533
},];

//Cart

let cart = JSON.parse(localStorage.getItem('cart')) || [];

//Functions für jederman

function safeToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};

function formatCurrency(priceCents) {
return (priceCents / 100).toFixed(2);
};

/*Home-to-Shop-Button*/

let homeToShopButton = document.querySelector('.js-home-to-shop-button');

if (homeToShopButton) {
  homeToShopButton.addEventListener('click', () => {
    window.location.href = 'shop.html';
  });
}