  //Generieren Shop Page
  
  let productsHTML = '';
  
  products.forEach((product) => {
    productsHTML += `
      <div class="product">
        <img src="${product.image}" alt="">
        <div class="product-description">
          <span>carstensen</span>
          <h5 class="product-name">${product.name}</h5>
          <h4 class="product-price">$${formatCurrency(product.priceCents)}</h4>
          <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">Hinzufügen</button>
        </div>
        <div class="single-page-icon">
          <a href="#"><i class="fas fa-shopping-cart cart" onclick="showSingleProduct(event);" data-product-id="${product.id}"></i></a>
        </div>
      </div>
    `;
  });
  
  var v = document.querySelector('.js-product-container');
  if (v) {
    v.innerHTML = productsHTML;
  }
  
  //Add-to-cart-button Shop-Page
  
  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
  
      let matchingItem;
  
      if (cart) {
        cart.forEach((item) => {
          if (productId === item.productId) {
            matchingItem = item;
          }
        })};
  
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      };
  
      console.log('Produkt hinzugefügt!');
  
      //Localstorage
      safeToStorage();
  
      let w = document.querySelector('.js-cart-quantity');
      
      updateAnzahlProdukte();
    });
  });


  //SINGLE PRODUCT NOT WORKING

  /*
  const singleProductContainer = document.querySelector('.js-single-product');


  function showSingleProduct(event) {
  
    const productId = event.target.dataset.productId;
  
    const matchingProduct = products.find(product => product.id === productId);
  
    
    //let matchingItem;
  
    //if (cart) {
      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      })};
      


  
    if (singleProductContainer) {
      singleProductContainer.innerHTML = `
      <div class="product">
        <img src="${matchingProduct.image}" alt="">
        <div class="product-description">
          <span>carstensen</span>
          <h5 class="product-name">${matchingProduct.name}</h5>
          <h4 class="product-price">$${formatCurrency(matchingProduct.priceCents)}</h4>
        </div>
      </div>
    `};
    window.location.href='single-product-page.html';
  };
  
  */
