let saldoSekarang = 0;
console.log(`Nilai saldo awal Anda adalah = ${saldoSekarang}`);

function tambahSaldo() {
  let tambahan = +window.prompt("Masukkan jumlah uang yang ingin ditambah");
  if (!isNaN(tambahan) && tambahan > 0) {
    saldoSekarang += tambahan;
  } else {
    window.alert("Jumlah tidak valid. Silahkan memasukkan angka yang benar.");
  }
  return saldoSekarang;
}

function kurangiSaldo() {
  if (saldoSekarang == 0) {
    window.alert("Anda tidak memiliki saldo");
  } else {
    let kurangi = +window.prompt("Masukkan jumlah uang yang ingin dikurangi");
    if (!isNaN(kurangi) && kurangi >= 0) {
      let saldoAkhir = saldoSekarang;
      saldoSekarang -= kurangi;
      if (saldoSekarang < 0) {
        window.alert(
          "Pengurangan saldo melebihi sisa saldo Anda, saldo dikembalikan ke nilai sebelumnya"
        );
        return (saldoSekarang = saldoAkhir);
      } else {
        return saldoSekarang;
      }
    } else {
      window.alert("Jumlah tidak valid. Silahkan memasukkan angka yang benar.");
    }
  }
}
tambahSaldo();
console.log(`Saldo Anda setelah ditambah adalah = ${saldoSekarang}`);
window.alert(`Saldo Anda setelah ditambah adalah ${saldoSekarang}`);
kurangiSaldo();
window.alert(`Saldo Anda setelah dikurangi adalah ${saldoSekarang}`);
console.log(`Saldo Anda setelah dikurangi adalah = ${saldoSekarang}`);
