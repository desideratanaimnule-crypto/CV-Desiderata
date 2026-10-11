
<script>
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formkontak");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nomorWhatsApp = "6281353611102";

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const telepon = document.getElementById("telepon").value.trim();
        const minat = document.getElementById("minat").value;
        const pesan = document.getElementById("pesan").value.trim();

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
            "https://wa.me/" + nomorWhatsApp +
            "?text=" + encodeURIComponent(isiPesan);

        // Komputer dapat membuka WhatsApp Web.
        // HP dapat meneruskan tautan ke aplikasi WhatsApp.
        window.open(urlWhatsApp, "_blank");
    });
});
</script>
</body>
</html>
