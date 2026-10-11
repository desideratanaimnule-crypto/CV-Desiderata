```javascript
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formkontak");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nomorWhatsApp = "6281353611102";

        const nama = form.querySelector('[name="nama"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const telepon = form.querySelector('[name="telepon"]').value.trim();
        const minat = form.querySelector('[name="minat"]').value;
        const pesan = form.querySelector('[name="pesan"]').value.trim();

        if (!nama || !email || !telepon || !minat || !pesan) {
            alert("Silakan lengkapi semua kolom formulir.");
            return;
        }

        const isiPesan =
            "Halo, saya menghubungi melalui website CV.\n\n" +
            "Nama Lengkap: " + nama + "\n" +
            "Email: " + email + "\n" +
            "No. Telepon: " + telepon + "\n" +
            "Bidang Minat: " + minat + "\n" +
            "Pesan: " + pesan;

        const urlWhatsApp =
            "https://api.whatsapp.com/send?phone=" +
            nomorWhatsApp +
            "&text=" +
            encodeURIComponent(isiPesan);

        window.location.href = urlWhatsApp;
    });
});
```
