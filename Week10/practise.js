document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.shop');

    buttons.forEach(function(shop) {
        var button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.classList.add("add-to-cart");

        // Add click event listener to the button
        button.addEventListener("click", function() {
            var price = shop.querySelector(".price").textContent;
            addToCart(price);
        });

        shop.appendChild(button);
    });

    // Function to add item to cart (you can customize this function as per your requirements)
    function addToCart(price) {
        // Here you can implement your cart functionality, such as adding the item to a shopping cart
        // For now, we'll just display an alert
        alert("Item added to cart: " + price);
    }
});
