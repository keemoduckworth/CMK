  //Checkout-Page 
  
  let checkoutProducts = document.querySelector('.checkout-products');
  
  let checkoutHTML = '';
  
  //Generieren

  //Total Price
  const checkoutTotalPrice = document.querySelector('.price-total');
  const checkoutTotalPricePlusMwst = document.querySelector('.price-total-plus-mwst')
  let checkoutTotalPriceValue = 0;
  
  cart.forEach((item) => {
  
    const productId = item.productId;
  
    let matchingProduct;
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    //Total Price value bei jeder rotation updaten
    checkoutTotalPriceValue += (matchingProduct.priceCents / 100) * item.quantity;

  
    checkoutHTML += `
      <tr class="checkout-product">
        <td>1</td>
        <td>${matchingProduct.name}</td>
        <td>${item.quantity}</td>
        <td>$${(matchingProduct.priceCents / 100)}</td>
        <td>$${(matchingProduct.priceCents / 100) * item.quantity}</td>
      </tr>
    `;
    if (checkoutProducts) {
      checkoutProducts.innerHTML = checkoutHTML;
    }

    //Total Price aktualisieren
    if (checkoutTotalPrice) {
      checkoutTotalPrice.innerHTML = `Total EUR ${checkoutTotalPriceValue.toFixed(2)}€`;
    }

    if (checkoutTotalPricePlusMwst) {
      checkoutTotalPricePlusMwst.innerHTML = `Total EUR inkl. MwSt. (19%) ${(checkoutTotalPriceValue * 1.19).toFixed(2)}€`;
    }
  });