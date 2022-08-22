import { students } from "./assets/data/students.js";

const loadStudents = () => {
  let strStudents = "";

  students.forEach((s, index) => {
    strStudents += `
    <tr>
    <td scope="row">${index + 1}</td>
    <td>${s.name}</td>
    <td>${s.puan}</td>
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
