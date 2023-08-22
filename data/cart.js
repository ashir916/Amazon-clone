//Get a variable out of a file 
//#1 Add type='Module'
//Export
//import

// We are creating default value for the checkout page here
export const cart = [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity : 2
},
{
  productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity  : 1
}];

// Making add to cart button reactive using DOM by adding an eventlistener
// This applies to all the add-to-cart button
// The data attribue in HTML can attach any info to an element 
// We 1st attached productName to the button using data attribute
// when we click the button we get the product name out
// and then added the productName to the cart

export function addToCart(productId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  })
  if(matchingItem){
    matchingItem.quantity += 1;
  }else{
    cart.push({
      productId : productId,
      quantity    :     1
    });
  }
};
