const form = document.getElementById('formkontak');
form.addEventListener("submit", function (event) {
	// Mencegah form berpindah ke halaman lain
	event.preventDevault();

	//=====NOMOR WHATSAPP TUJUAN=====================
	const nomorWhatsApp = "6281353611102";

	//================MENGAMBIL DATA DARI FORM==============/
	const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const minat = document.getElementById("minat").value;
    const pesan = document.getElementById("pesan").value;
	//===================MEMBUAT ISI PESAN WHATSAPP=================
	const isiPesan = `Halo, saya menghubungi melalui website CV.

Nama Lengkap : ${nama}
Email        : ${email}
No. Telepon  : ${telepon}
Bidang Minat : ${minat}
Pesan        : ${pesan}`;
	//====================MENGUBAH PESAN MENJADI FORMAT URL=============
	const pesanEncoded =
		encodeURIComponent(isiPesan);

	//====================MEMBUAT LINK WHATSAPP=======================
	const urlWhatsApp =
         `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

		//================MEMBUKA WHATSAPP========================
		

});


