document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan item keranjang di halaman checkout
    if (window.location.pathname.includes('checkout.html')) {
        const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        const checkoutItems = document.getElementById('checkout-items');
        const subtotalEl = document.getElementById('checkout-subtotal');
        const totalEl = document.getElementById('checkout-total');
        const bankTransferAmount = document.getElementById('bank-transfer-amount');
        let subtotal = 0;
        let html = '';
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            html += `
                <div class="checkout-item">
                    <img src="${item.image}" alt="${item.name}" class="checkout-item-image" style="width:48px;height:48px;border-radius:8px;margin-right:10px;object-fit:cover;">
                    <div class="checkout-item-info">
                        <div class="checkout-item-name">${item.name}</div>
                        <div class="checkout-item-qty">Qty: ${item.quantity}</div>
                        <div class="checkout-item-price">Rp ${item.price.toLocaleString()} x ${item.quantity}</div>
                    </div>
                </div>
            `;
        });
        checkoutItems.innerHTML = html || '<div class="empty-cart">Keranjang belanja kosong</div>';
        subtotalEl.textContent = 'Rp ' + subtotal.toLocaleString();
        // Hitung total dengan ongkir
        const delivery = 15000;
        totalEl.textContent = 'Rp ' + (subtotal + delivery).toLocaleString();
        if (bankTransferAmount) bankTransferAmount.textContent = 'Rp ' + (subtotal + delivery).toLocaleString();
    }
    // Payment method logic for checkout
    if (window.location.pathname.includes('checkout.html')) {
        const paymentRadios = document.querySelectorAll('input[name="payment"]');
        const creditCardDetails = document.getElementById('credit-card-details');
        const bankTransferDetails = document.getElementById('bank-transfer-details');
        const ewalletDetails = document.getElementById('ewallet-details');
        const ewalletName = document.getElementById('ewallet-name');
        const gopayDetails = document.getElementById('gopay-details');
        const ovoDetails = document.getElementById('ovo-details');

        function showPaymentDetails() {
            const selected = document.querySelector('input[name="payment"]:checked').value;
            creditCardDetails.style.display = 'none';
            bankTransferDetails.style.display = 'none';
            ewalletDetails.style.display = 'none';
            gopayDetails.style.display = 'none';
            ovoDetails.style.display = 'none';
            if (selected === 'credit-card') {
                creditCardDetails.style.display = 'block';
            } else if (selected === 'bank-transfer') {
                bankTransferDetails.style.display = 'block';
            } else if (selected === 'gopay') {
                ewalletDetails.style.display = 'block';
                ewalletName.textContent = 'GoPay';
                gopayDetails.style.display = 'block';
            } else if (selected === 'ovo') {
                ewalletDetails.style.display = 'block';
                ewalletName.textContent = 'OVO';
                ovoDetails.style.display = 'block';
            }
        }
        paymentRadios.forEach(radio => {
            radio.addEventListener('change', showPaymentDetails);
        });
        showPaymentDetails(); // initial
    }
});
