import { students } from "./assets/data/students.js";

const loadStudents = () => {
  let strStudents = "";

  students.forEach((s, index) => {
    strStudents += `
    <tr>
    <td scope="row">${index + 1}</td>
    <td>${s.name}</td>
    <td>${s.puan}</td>
    <td><button class="btn btn-danger btn-delete">Del</button></td>
  </tr>`;
  });
  document.querySelector("#tbody").innerHTML = strStudents;
};

const setStudentBg = () => {
  const rows = document.querySelectorAll("#tblStudents tbody tr");

  for (let row of rows) {
    const point = row.querySelector("td:nth-child(3)").innerText;
    if (point < 50) {
      row.classList.add("table-danger");
    }
  }
};

loadStudents();
setStudentBg();

document.querySelectorAll(".btn-delete").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    const result = confirm(
      // true yada false döndürür..
      `${
        row.querySelector("td:nth-child(2)").innerText
      } isimli öğrenciyi silmek istediğinizden eminmisiniz?`
    );
    if (!result) return;
    row.remove();
  });
});

document.querySelectorAll("#tbody tr").forEach((row) => {
  row.addEventListener("click", (e) => {
    e.target.closest("tr").classList.toggle("bg-warning");
  });
});
