const dashboard = JSON.parse(localStorage.getItem("students")) || [];
let table = document.querySelector("tbody");

const userData = () => {
  dashboard.forEach((el, index) => {
    table.innerHTML += `
         <tr>
            <td>${el.Name}</td>
            <td>${el.Age}</td>
            <td>${el.Department}</td>
            <td>${el.Email}</td>
            <td>
              <div
                class="d-flex align-items-center justify-content-center gap-3">
                <button onclick="deleteAitem(${index})" class="btn-dark">Delete</button>
                <button onclick="editItem(${index})" class="btn-dark">Edit</button>
                <button class="btn-dark">View</button>
              </div>
            </td>
          </tr>`;
  });
};

const deleteAitem = (index) => {
  dashboard.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(dashboard));
};

userData();
