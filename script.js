
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formkontak");

    if (!form) {
        console.error("Form kontak tidak ditemukan.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Nomor WhatsApp tujuan, gunakan kode negara 62
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

        const isiPesan = [
            "Halo, saya menghubungi melalui website CV.",
            "",
            "Nama Lengkap: " + nama,
            "Email: " + email,
            "No. Telepon: " + telepon,
            "Bidang Minat: " + minat,
            "Pesan: " + pesan
        ].join("\n");

        const urlWhatsApp =
            "https://wa.me/" +
            nomorWhatsApp +
            "?text=" +
            encodeURIComponent(isiPesan);

        // Membuka tautan WhatsApp dengan pesan yang sudah disiapkan
        window.location.assign(urlWhatsApp);
    });
});
