

//Erzeugen Cart Page

let cartSummaryHTML = '';

if (cart) {
cart.forEach((item) => {

  const productId = item.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="cart-product js-cart-product-${matchingProduct.id}">
      <img src="${matchingProduct.image}" class="cart-image">
      <div>
        <div class="cart-product-infos"> 
          <p>"${matchingProduct.name}"</p>
          <p>${formatCurrency(matchingProduct.priceCents)}€</p>
          <p class="js-cart-quantity${productId}">Stückzahl (${item.quantity})</p>
        </div>
     
        <div class="span">  

          <input type="number" class="update-quantity-value js-update-quantity-value">

          <span   class="update-quantity-link js-update-link" data-product-id="${matchingProduct.id}">
              Update
          </span>

          <span class="delete-quantity-link js-delete-link" data-product-id="${matchingProduct.id}">
            Löschen
          </span>

        </div>
      </div> 
    </div>`;
})};

if (document.querySelector('.js-cart-products')) {
  document.querySelector('.js-cart-products').innerHTML = cartSummaryHTML;
};


//Funktion Cart Page

  //Bestellübersicht:

  //Anzahl verschiedener Produkte auf der Cart + Endwert
  let w = document.querySelector('.anzahl-produkte');
  let anzahlProdukte = 0;

  //Insgesamte Stückzahl aller Produkte auf der Cart zusammen + Endwert
  let stückzahlInsgesamtValue = document.querySelector('.stückzahl-insgesamt');
  let stückzahlInsgesamt = 0;

  //Die insgesamten Kosten aller Produkte auf der Cart + Endwert
  let kostenTotalValue = document.querySelector('.kosten-total')
  let kostenTotal = 0;

  //Funktionen zum updaten
  function updateStückzahlInsgesamt() {
    stückzahlInsgesamt = 0;
    cart.forEach((item) => {
      stückzahlInsgesamt += item.quantity
    });

    if (stückzahlInsgesamtValue) {
      stückzahlInsgesamtValue.innerHTML = stückzahlInsgesamt;
    };
  };

  function updateAnzahlProdukte() {
    anzahlProdukte = 0;
    cart.forEach((item) => {
      anzahlProdukte++;
    });
    if (w) {
      w.innerHTML = anzahlProdukte;
    }
  };

  function updatePreisTotal() {
    kostenTotal = 0;
    cart.forEach((item) => {
      const matchingProduct = products.find(product => product.id === item.productId);

      if (matchingProduct) {
        kostenTotal += matchingProduct.priceCents * item.quantity;
      }
    });
        
      if (kostenTotalValue) {
        kostenTotalValue.innerHTML =(kostenTotal / 100).toFixed(2);
        }
  };

  updateStückzahlInsgesamt();
  updateAnzahlProdukte();
  updatePreisTotal();

    //Cart-Products

    //Löschen-Link

    //Funktion

    function removeFromCart(productId) {
      const newCart = [];
      
      cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
      cart = newCart;
      safeToStorage();
    };

    //Löschen-Link auf Cart-Product löscht das product bei click

    document.querySelectorAll('.js-delete-link').forEach((link) => {
      link.addEventListener('click', () => { 

        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(`.js-cart-product-${productId}`);
        
        container.remove();
      });
    });

    //Beim Löschen von Cart: Anzahl, Stückzahl, Preis updaten

    document.querySelectorAll('.js-delete-link').forEach((link) => {
      link.addEventListener('click', () => {
          updateAnzahlProdukte();
          updateStückzahlInsgesamt();
          updatePreisTotal();
      });
    });


  //Checkout-Button

  let checkoutButton = document.querySelector('.js-checkout-button');

  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
  };


  //Update-Link 

  document.querySelectorAll('.js-update-link').forEach((link) => {
    link.addEventListener('click', () => { 
      console.log('Quantity geupdated!');
      const productId = link.dataset.productId;
  
      let matchingProduct;
  
      products.forEach((product) => {
        if (product.id === productId) {
          matchingProduct = product;
        }
      });
  
      const inputContainer = link.closest('.span');
      const inputValue = inputContainer.querySelector('.js-update-quantity-value');

      cart.forEach((item) => {
        if (item.productId === productId) {
          if (inputValue.value > 0) {
          item.quantity = parseInt(inputValue.value, 10);
          document.querySelector(`.js-cart-quantity${productId}`).innerHTML = `Stückzahl (${item.quantity})`;
        } else {
          alert('Stückzahl darf nicht negativ sein!')
        }};
      });

      updateStückzahlInsgesamt();
      updatePreisTotal();

      safeToStorage();
      
      inputValue.value = '';
    });
  });
