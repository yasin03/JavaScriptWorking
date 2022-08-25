import { students } from "./assets/data/students.js";
let str = "";
let que = 1;
/*
const loadList = () => {
  let total = 0;
  for (let st of students) {
    str += `<tr>
    <td>${st.id}</td>
    <td>${st.name}</td>
    <td>${st.puan}</td>
    <td><a id="update" href="#"><i class="fa-solid fa-pen"></i></a>&nbsp&nbsp&nbsp
    <a id="delete" href="#"><i class="fa-solid fa-trash-can"></i></a></td>`;
    total += st.puan;
  }
  document.querySelector("#tfoot th:nth-child(3)").innerHTML = total;
  document.querySelector("#tbody").innerHTML = str;
};

loadList();
*/
// tıklandığında satırdaki arka planın rengini değiştirir.
document.querySelectorAll("#tbody tr").forEach((row) => {
  row.addEventListener("click", () => {
    row.classList.toggle("bg-secondary");
    row.classList.toggle("text-light");
  });
});

// ekleme fonksiyonu

document.querySelector("#btnAdd").addEventListener("click", () => {
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
});

const sirala = () => {
  const rows = document.querySelectorAll("#tbody tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].querySelector("td:nth-child(1)").innerHTML = i + 2;
  }
};
