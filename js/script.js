const cart = {};
function addToCart(product_name, product_prize){
    if(cart[product_name]){
        cart[product_name].quality +=1;
        cart[product_name].totalPrice += product_prize;
    }else {
        cart[product_name] = {
            quantity: 1,
            totalPrice: product_prize
        };
    }

    function updateCartDisplay() {
        const cartlist = document.getElementById('products');
        cartlist.innerHTML = '';
        for (let product in cart) {
            const listItem = document.createElement('li');
            listItem.innerText = '${product} Quantity: ${cart[product].quantity} Total Price: Php${cart[product].totalPrice.toFixed(2)}';
            cartlist.appendChild(listItem);
        }
    }
}