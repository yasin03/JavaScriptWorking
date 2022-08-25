document.querySelector("#frmLogin").addEventListener("submit", (e) => {
  e.preventDefault(); // formun default davranışını submit'i iptal eder
  try {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!isEmail(email)) throw "Lütfen geçerli bir email adresi giriniz.";

    if (!password) throw "Lütfen parola giriniz.";

    e.target.submit(); // kontroller yapıldıktan sonra submit işlemine devam eder.
  } catch (error) {
    alert(error);
  }
});

const isEmail = (email) => {
  const regex = /\S+@\S+\.\S{2,5}$/;
  // reqular expression -> https://regexr.com/

  return regex.test(email);
};
