import { students } from "./assets/data/students.js";
let str = "";
let que = 1;

const btnAdd = document.querySelector("#btnAdd");
const inpName = document.querySelector("#inputName");
const inpPoint = document.querySelector("#inputPoint");

// buton disable fonksiyonu

btnAdd.setAttribute("disabled", "disabled");

inpName.addEventListener("input", (e) => {
  inpPoint.addEventListener("input", (es) => {
    if (e.target.value.length > 0 && es.target.value.length > 0) {
      btnAdd.removeAttribute("disabled");
    }
  });
});

// ekleme fonksiyonu
btnAdd.addEventListener("click", () => {
  const name = document.querySelector("#inputName").value;
  const point = document.querySelector("#inputPoint").value;

  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const i1 = document.createElement("i");
  const i2 = document.createElement("i");

  td1.innerHTML = 1;
  td2.innerHTML = name;
  td3.innerHTML = point;

  i1.classList.add("fa-solid", "fa-pen");
  i2.classList.add("fa-solid", "fa-trash-can");

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  td4.appendChild(i1);
  td4.appendChild(i2);
  tr.appendChild(td4);
  sirala();

  document.querySelector("#tbody").prepend(tr);
  average();
  input.value = "";
});

// Sıralama Fonksiyonu
const sirala = () => {
  const rows = document.querySelectorAll("#tbody tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].querySelector("td:nth-child(1)").innerHTML = i + 2;
  }
};

// Ortalama Alma Fonksiyonu
const average = () => {
  const avg = document.querySelector("#tfoot tr th:nth-child(3)");
  let total = 0;
  const rows2 = document.querySelectorAll("#tbody tr");

  rows2.forEach((rw) => {
    const pt = document.querySelector("td:nth-child(3)").value;
    total += pt;
  });

  avg.innerHTML = total / rows2.length;
  console.log(avg);
};

// tıklandığında satırdaki arka planın rengini değiştirir.
document.querySelectorAll("#tbody tr").forEach((row) => {
  row.addEventListener("click", () => {
    row.classList.toggle("bg-secondary");
  });
});

// Silme Fonksiyonu
const delBtns = document.querySelectorAll(
  "#tbody tr td:nth-child(4) i:nth-child(2)"
);

delBtns.forEach((btn) => {
  btn.addEventListener("click", (e = {}));
});
