const indianDummyArray = [];

let userList = document.getElementById("userList");

function createEditBtn(user, para) {
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "editBtn";

  editBtn.addEventListener("click", () => {
    const index = indianDummyArray.indexOf(user);
    if (index !== -1) {
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = indianDummyArray[index].name;

      const phoneInput = document.createElement("input");
      phoneInput.type = "text";
      phoneInput.value = indianDummyArray[index].phoneNumber;

      const addressInput = document.createElement("input");
      addressInput.type = "text";
      addressInput.value = indianDummyArray[index].address;

      const emailInput = document.createElement("input");
      emailInput.type = "text";
      emailInput.value = indianDummyArray[index].email;

      para.innerHTML = "";
      para.appendChild(document.createTextNode("Name: "));
      para.appendChild(nameInput);
      para.appendChild(document.createTextNode("Phone Number: "));
      para.appendChild(phoneInput);
      para.appendChild(document.createTextNode("Address: "));
      para.appendChild(addressInput);
      para.appendChild(document.createTextNode("Email: "));
      para.appendChild(emailInput);

      editBtn.textContent = "Save";

      editBtn.addEventListener("click", () => {
        indianDummyArray[index].name = nameInput.value;
        indianDummyArray[index].phoneNumber = phoneInput.value;
        indianDummyArray[index].address = addressInput.value;
        indianDummyArray[index].email = emailInput.value;

        editBtn.textContent = "Edit";

        updateUI();
      });
    }
  });

  return editBtn;
}

indianDummyArray.forEach((user) => {
  const userContainer = document.createElement("div");
  userContainer.className = "user-container";

  const para = document.createElement("p");
  para.className = "paragraph";
  para.textContent = `
    Name: ${user.name},
    Phone Number: ${user.phoneNumber},
    Address: ${user.address},
    Email: ${user.email}
  `;

  let editBtn = createEditBtn(user, para);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";
  deleteBtn.addEventListener("click", () => {
    const index = indianDummyArray.indexOf(user);
    if (index !== -1) {
      indianDummyArray.splice(index, 1);
      updateUI();
    }
  });

  userContainer.appendChild(para);
  userContainer.appendChild(editBtn);
  userContainer.appendChild(deleteBtn);

  userList.appendChild(userContainer);
});

document.getElementById("submitBtn").addEventListener("click", () => {
  let newName = document.getElementById("nameInput").value;
  let newPhone = document.getElementById("phoneInput").value;
  let newAddress = document.getElementById("addressInput").value;
  let newEmail = document.getElementById("emailInput").value;

  indianDummyArray.push({
    name: newName,
    phoneNumber: newPhone,
    address: newAddress,
    email: newEmail,
  });

  updateUI();
});

function updateUI() {
  userList.innerHTML = "";

  indianDummyArray.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.className = "user-container";

    const para = document.createElement("p");
    para.className = "paragraph";
    para.textContent = `
      Name: ${user.name},
      Phone Number: ${user.phoneNumber},
      Address: ${user.address},
      Email: ${user.email}
    `;

    let editBtn = createEditBtn(user, para);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", () => {
      const index = indianDummyArray.indexOf(user);
      if (index !== -1) {
        indianDummyArray.splice(index, 1);
        updateUI();
      }
    });

    userContainer.appendChild(para);
    userContainer.appendChild(editBtn);
    userContainer.appendChild(deleteBtn);

    userList.appendChild(userContainer);
  });
}
