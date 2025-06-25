// payment.js
// Script untuk menampilkan isi cart di halaman checkout dan menjaga sinkronisasi dengan localStorage

document.addEventListener('DOMContentLoaded', function () {
    // Ambil data cart dari localStorage
    function getCart() {
        return JSON.parse(localStorage.getItem('shoppingCart')) || [];
    }

    // Render ringkasan pesanan di checkout
    function renderCheckout() {
        const cart = getCart();
        const checkoutItems = document.getElementById('checkout-items');
        const subtotalEl = document.getElementById('checkout-subtotal');
        const totalEl = document.getElementById('checkout-total');
        const bankTransferAmount = document.getElementById('bank-transfer-amount');
        const deliveryCost = 15000;

        if (!cart.length) {
            checkoutItems.innerHTML = '<div class="empty-cart">Keranjang belanja kosong</div>';
            subtotalEl.textContent = 'Rp 0';
            totalEl.textContent = 'Rp 0';
            if (bankTransferAmount) bankTransferAmount.textContent = 'Rp 0';
            return;
        }

        let itemsHTML = '';
        let subtotal = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            itemsHTML += `
                <div class="checkout-item">
                    <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
                    <div class="checkout-item-details">
                        <h4 class="checkout-item-name">${item.name}</h4>
                        <p class="checkout-item-price">Rp ${item.price.toLocaleString('id-ID')}</p>
                        <p class="checkout-item-qty">Qty: ${item.quantity}</p>
                        <p class="checkout-item-total">Subtotal: Rp ${(itemTotal).toLocaleString('id-ID')}</p>
                    </div>
                </div>
            `;
        });
        checkoutItems.innerHTML = itemsHTML;
        subtotalEl.textContent = 'Rp ' + subtotal.toLocaleString('id-ID');
        const total = subtotal + deliveryCost;
        totalEl.textContent = 'Rp ' + total.toLocaleString('id-ID');
        if (bankTransferAmount) bankTransferAmount.textContent = 'Rp ' + total.toLocaleString('id-ID');
    }

    // Sinkronisasi jika cart berubah di tab lain
    window.addEventListener('storage', function (e) {
        if (e.key === 'shoppingCart') {
            renderCheckout();
        }
    });

    // Render pertama kali
    renderCheckout();

    // Notifikasi pembayaran sukses
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Tampilkan modal sukses
            const modal = document.getElementById('payment-success');
            if (modal) {
                modal.style.display = 'flex';
                // Generate nomor pesanan acak
                const orderNum = document.getElementById('order-number');
                if (orderNum) orderNum.textContent = 'FLR' + Date.now();
            }
            // Kosongkan cart setelah pembayaran
            localStorage.removeItem('shoppingCart');
        });
    }

    // Fungsi untuk menutup modal sukses
    window.closeSuccessModal = function () {
        const modal = document.getElementById('payment-success');
        if (modal) modal.style.display = 'none';
        window.location.href = 'index.html';
    };

    // Script untuk menampilkan opsi pembayaran sesuai pilihan
    function showPaymentDetails() {
        const creditCard = document.getElementById('credit-card');
        const bankTransfer = document.getElementById('bank-transfer');
        const gopay = document.getElementById('gopay');
        const ovo = document.getElementById('ovo');
        const ccDetails = document.getElementById('credit-card-details');
        const bankDetails = document.getElementById('bank-transfer-details');
        const ewalletDetails = document.getElementById('ewallet-details');
        const gopayDetails = document.getElementById('gopay-details');
        const ovoDetails = document.getElementById('ovo-details');
        const ewalletName = document.getElementById('ewallet-name');

        // Hide all first
        if (ccDetails) ccDetails.style.display = 'none';
        if (bankDetails) bankDetails.style.display = 'none';
        if (ewalletDetails) ewalletDetails.style.display = 'none';
        if (gopayDetails) gopayDetails.style.display = 'none';
        if (ovoDetails) ovoDetails.style.display = 'none';

        if (creditCard && creditCard.checked) {
            if (ccDetails) ccDetails.style.display = 'block';
        } else if (bankTransfer && bankTransfer.checked) {
            if (bankDetails) bankDetails.style.display = 'block';
        } else if (gopay && gopay.checked) {
            if (ewalletDetails) ewalletDetails.style.display = 'block';
            if (gopayDetails) gopayDetails.style.display = 'block';
            if (ovoDetails) ovoDetails.style.display = 'none';
            if (ewalletName) ewalletName.textContent = 'GoPay';
        } else if (ovo && ovo.checked) {
            if (ewalletDetails) ewalletDetails.style.display = 'block';
            if (gopayDetails) gopayDetails.style.display = 'none';
            if (ovoDetails) ovoDetails.style.display = 'block';
            if (ewalletName) ewalletName.textContent = 'OVO';
        }
    }

    // Event listener untuk semua radio
    var radios = document.querySelectorAll('input[name="payment"]');
    if (radios.length > 0) {
        radios.forEach(function(radio) {
            radio.addEventListener('change', showPaymentDetails);
        });
        showPaymentDetails();
    }
});
