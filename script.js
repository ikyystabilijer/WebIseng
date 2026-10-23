const form = document.querySelector("form");
const nama = document.querySelector("#nama");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nama.value === "" || password.value === "") {
    alert("Nama dan Password harus diisi!");
    return;
  }

  console.log("Halo," + nama.value);
  alert("Halo, " + nama.value + "! Anda berhasil login.");
});