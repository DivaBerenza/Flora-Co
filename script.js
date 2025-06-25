document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function checkSlide() {
        sections.forEach(section => {
            const slideInAt = (window.scrollY + window.innerHeight) - section.offsetHeight / 2;
            const sectionBottom = section.offsetTop + section.offsetHeight;
            const isHalfShown = slideInAt > section.offsetTop;
            const isNotScrolledPast = window.scrollY < sectionBottom;

            if (isHalfShown && isNotScrolledPast) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Panggil saat halaman dimuat untuk pertama kali
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0'; // Warna latar belakang saat hover
        });

        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // Kembalikan warna latar belakang asli
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-media img');

    function animateHeroImage() {
        heroImage.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            heroImage.style.transform = 'translateY(0)';
        }, 1000);
    }

    setInterval(animateHeroImage, 3000); // Ulangi setiap 3 detik
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Cek apakah link tujuan adalah internal (pakai #)
            if (href.startsWith('#')) {
                e.preventDefault(); // hanya cegah kalau href internal
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const submenuParents = document.querySelectorAll(".nav-links .has-submenu > a");

    submenuParents.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const submenu = link.nextElementSibling;
            submenu.classList.toggle("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartNotification = document.getElementById('cart-notification');
    const notificationImage = document.getElementById('notification-image');
    const notificationName = document.getElementById('notification-name');
    const closeNotificationButton = document.getElementById('close-notification');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.name;
            const productImage = this.dataset.image;

            notificationName.textContent = productName;
            notificationImage.src = productImage;
            cartNotification.classList.add('show');

            // Sembunyikan notifikasi setelah beberapa detik
            setTimeout(() => {
                cartNotification.classList.remove('show');
            }, 3000);
        });
    });

    closeNotificationButton.addEventListener('click', function() {
        cartNotification.classList.remove('show');
    });
});

// Fungsi untuk menampilkan detail produk
        function showProductDetail(name, price, image, description) {
            const modal = document.getElementById('product-modal');
            document.getElementById('modal-name').textContent = name;
            document.getElementById('modal-price').textContent = 'Rp ' + parseInt(price).toLocaleString('id-ID');
            document.getElementById('modal-image').src = image;
            document.getElementById('modal-description').textContent = description;
            
            // Set data untuk tombol Add to Cart di modal
            const addToCartBtn = document.getElementById('modal-add-to-cart');
            addToCartBtn.dataset.name = name;
            addToCartBtn.dataset.price = price;
            addToCartBtn.dataset.image = image;
            
            modal.style.display = 'flex';
        }
        
        // Fungsi untuk menutup modal
        function closeModal() {
            document.getElementById('product-modal').style.display = 'none';
        }
        
        // Tutup modal ketika klik di luar area konten
        window.onclick = function(event) {
            const modal = document.getElementById('product-modal');
            if (event.target == modal) {
                closeModal();
            }
        }
        
        // Tambahkan event listener untuk tombol Add to Cart di modal
        document.getElementById('modal-add-to-cart').addEventListener('click', function() {
            // Anda bisa menggunakan kode yang sama dengan tombol Add to Cart biasa
            // atau memanggil fungsi yang sama yang digunakan oleh tombol Add to Cart lainnya
            const name = this.dataset.name;
            const price = this.dataset.price;
            const image = this.dataset.image;
            
            // Panggil fungsi addToCart atau logika yang sesuai
            console.log(`Added to cart: ${name}, ${price}, ${image}`);
            
            // Tampilkan notifikasi
            showNotification(name, image);
            
            // Tutup modal
            closeModal();
        });
        
        // Fungsi untuk menampilkan notifikasi (sesuaikan dengan fungsi yang sudah ada)
        function showNotification(name, image) {
            const notification = document.getElementById('cart-notification');
            document.getElementById('notification-name').textContent = name;
            document.getElementById('notification-image').src = image;
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }

        
// let cart = [];
// Di script.js atau file JavaScript untuk checkout.html
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
let cartTotal = 0;

function toggleCart() {
    const cart = document.getElementById('shopping-cart');
    if (cart.style.display === 'block') {
        cart.style.display = 'none';
    } else {
        // Periksa apakah cart kosong
        const cartItems = document.getElementById('cart-items');
        if (cartItems.children.length === 1 && cartItems.children[0].classList.contains('empty-cart')) {
            cart.style.display = 'none'; // Tetap sembunyikan jika kosong
        } else {
            cart.style.display = 'block';
        }
    }
}


function addToCart(name, price, image) {
    // Cek apakah item sudah ada di keranjang
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: parseInt(price),
            image: image,
            quantity: 1
        });
    }
    
    updateCartCount();
    renderCartItems();
    showNotification(name, image);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCartItems();
}

function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) return;
    cart[index].quantity = newQuantity;
    renderCartItems();
}

function renderCartItems() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<div class="empty-cart">Keranjang belanja kosong</div>';
        cartTotalElement.textContent = 'Total: Rp 0';
        return;
    }
    
    let itemsHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        itemsHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">Rp ${item.price.toLocaleString()}</p>
                    <div class="cart-item-actions">
                        <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" min="1" class="cart-item-quantity" 
                               onchange="updateQuantity(${index}, parseInt(this.value))">
                        <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                        <button class="cart-item-remove" onclick="removeFromCart(${index})">Hapus</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItemsElement.innerHTML = itemsHTML;
    cartTotalElement.textContent = `Total: Rp ${total.toLocaleString()}`;
    // Simpan cart ke localStorage setiap kali ada perubahan
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
    // Simpan cart ke localStorage setiap kali ada perubahan
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function showNotification(name, image) {
    const notification = document.getElementById('cart-notification');
    document.getElementById('notification-name').textContent = name;
    document.getElementById('notification-image').src = image;
    
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja kosong!');
        return;
    }
    
    // alert('Terima kasih telah berbelanja! Total pembayaran: Rp ' + 
    //       cart.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString());
    // Hapus baris ini agar cart tidak direset:
    // cart = [];
    // updateCartCount();
    // renderCartItems();
    // toggleCart();

    // Simpan data keranjang ke localStorage sebelum redirect
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    
    // Redirect ke halaman checkout
    window.location.href = 'checkout.html';
}

// Event listener untuk tombol add to cart
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const image = this.getAttribute('data-image');
            addToCart(name, price, image);
        });
    });
    
    // Close notification button
    document.getElementById('close-notification').addEventListener('click', function() {
        document.getElementById('cart-notification').style.display = 'none';
    });
});

// Fungsi untuk modal produk
function showProductDetail(name, price, image, description) {
    const modal = document.getElementById('product-modal');
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-price').textContent = `Rp ${parseInt(price).toLocaleString()}`;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-image').alt = name;
    document.getElementById('modal-description').textContent = description;
    
    // Update tombol add to cart di modal
    const modalButton = document.getElementById('modal-add-to-cart');
    modalButton.onclick = function(e) {
        e.stopPropagation();
        addToCart(name, price, image);
        closeModal();
    };
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// register script
document.getElementById('register-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validasi password
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Simpan data user (simulasi)
            const userData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: password
            };
            
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // Redirect ke halaman setelah registrasi
            window.location.href = 'index.html';
        });

// Toggle profile dropdown
        function toggleProfileDropdown() {
            const dropdown = document.getElementById('profile-dropdown');
            dropdown.classList.toggle('show');
        }

        // Close the dropdown if clicked outside
        window.onclick = function(event) {
            if (!event.target.matches('.profile-icon') && !event.target.matches('.profile-icon *')) {
                const dropdowns = document.getElementsByClassName('profile-dropdown');
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        
        // Script untuk filter dan pencarian
        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.querySelector('.search-filter input');
            const statusFilter = document.querySelector('.search-filter select');
            const transactionCards = document.querySelectorAll('.transaction-card');
            
            function filterTransactions() {
                const searchTerm = searchInput.value.toLowerCase();
                const statusValue = statusFilter.value;
                
                transactionCards.forEach(card => {
                    const id = card.querySelector('.transaction-id').textContent.toLowerCase();
                    const status = card.querySelector('.transaction-status').classList.contains('status-' + statusValue);
                    const productNames = Array.from(card.querySelectorAll('.transaction-product-name')).map(el => el.textContent.toLowerCase());
                    
                    const matchesSearch = id.includes(searchTerm) || productNames.some(name => name.includes(searchTerm));
                    const matchesStatus = statusValue === 'all' || status;
                    
                    if (matchesSearch && matchesStatus) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
            
            searchInput.addEventListener('input', filterTransactions);
            statusFilter.addEventListener('change', filterTransactions);
            
            // Tombol beli lagi
            document.querySelectorAll('.btn-repeat').forEach(button => {
                button.addEventListener('click', function() {
                    // Implementasi logika "Beli Lagi" di sini
                    alert('Produk akan ditambahkan ke keranjang belanja');
                });
            });
            
            // Tombol detail
            document.querySelectorAll('.btn-detail').forEach(button => {
                button.addEventListener('click', function() {
                    const transactionId = this.closest('.transaction-card').querySelector('.transaction-id').textContent;
                    alert('Menampilkan detail transaksi: ' + transactionId);
                    // Bisa diarahkan ke halaman detail transaksi atau menampilkan modal
                });
            });
        });

// Animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
});

// Profile dropdown
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('profile-dropdown');
    if (dropdown && !e.target.closest('.profile-container')) {
        dropdown.style.display = 'none';
    }
});

// AOS.init();

// Article category filtering
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.category;
            const articles = document.querySelectorAll('.article-card');
            
            articles.forEach(article => {
                if (category === 'all' || article.dataset.category === category) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
});
