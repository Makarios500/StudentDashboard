let maindiv = document.querySelector(".students");
const dashboard = JSON.parse(localStorage.getItem("students")) || [];
let openModall = document.querySelector("#modal");
let values = document.querySelectorAll(".inputs input");

const fields = ["Name", "Age", "Department", "Email"];

const studentDetails = () => {
  let obj = {};

  fields.forEach((el, index) => {
    obj[el] = values[index].value;
  });

  dashboard.push(obj);
  localStorage.setItem("students", JSON.stringify(dashboard));

  values.forEach((el) => {
    el.value = "";
  });
};

const toDashboard = () => {
  window.open("/data.html")
};

const openModal = () => {
  openModall.style.display = "flex";
};

const closeModal = () => {
  openModall.style.display = "none";
};
