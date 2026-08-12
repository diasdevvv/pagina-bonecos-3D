/* LEGOVERSE 3D - JavaScript Modular (luzes3dstl.shop logic) */

// 1. Data Dinâmica e Ano Dinâmico
document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    document.querySelectorAll(".dynamic-date").forEach(el => {
        el.textContent = `${day}/${month}/${year}`;
    });

    const yearSpan = document.getElementById("dynamic-year");
    if (yearSpan) {
        yearSpan.textContent = year;
    }

    // Purchase Notification Popup Logic
    const names = ["Carlos M.", "Rodrigo S.", "Felipe A.", "Juliana K.", "Marcos P.", "Gabriel T.", "Luciana V.", "Bruno F."];
    const popup = document.getElementById("purchase-popup");
    const popupName = document.getElementById("popup-name");
    const popupViewers = document.getElementById("popup-viewers");
    const popupClose = document.getElementById("popup-close");

    if (popup && popupName && popupViewers) {
        function showRandomPurchase() {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomViewers = Math.floor(Math.random() * 18) + 12;
            
            popupName.textContent = randomName;
            popupViewers.textContent = randomViewers;
            popup.classList.add("show");

            setTimeout(() => {
                popup.classList.remove("show");
            }, 4500);
        }

        // Exibir popup inicial após 3s e repetir a cada 14s
        setTimeout(showRandomPurchase, 3000);
        setInterval(showRandomPurchase, 14000);

        if (popupClose) {
            popupClose.addEventListener("click", () => {
                popup.classList.remove("show");
            });
        }
    }
});

// 2. Lógica do Modal de Upsell
function openUpsellModal() {
    const modal = document.getElementById('upsellModal');
    const content = document.getElementById('upsellModalContent');
    if (!modal || !content) return;
    
    modal.classList.remove('pointer-events-none');
    modal.classList.remove('opacity-0');
    
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeUpsellModal() {
    const modal = document.getElementById('upsellModal');
    const content = document.getElementById('upsellModalContent');
    if (!modal || !content) return;
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('opacity-0');
        modal.classList.add('pointer-events-none');
    }, 300);
}

// 3. Utilitários de Cookies e Tracking Pixel
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; domain=" + window.location.hostname;
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    let fbclid = urlParams.get('fbclid') || getCookie('fbclid') || localStorage.getItem('fbclid');
    if (fbclid) {
        setCookie('fbclid', fbclid, 90);
        localStorage.setItem('fbclid', fbclid);
    }

    let utms = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
        let val = urlParams.get(param) || getCookie(param) || localStorage.getItem(param);
        if (val) {
            utms[param] = val;
            setCookie(param, val, 90);
            localStorage.setItem(param, val);
        }
    });

    document.querySelectorAll('a[href*="checkout.payt.com.br"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            let targetUrl = new URL(this.href);
            if (fbclid) targetUrl.searchParams.set('fbclid', fbclid);
            Object.keys(utms).forEach(key => targetUrl.searchParams.set(key, utms[key]));
            this.href = targetUrl.toString();
        });
    });
});
