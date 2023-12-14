// let randomNames = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace"];

// const container = document.getElementById("nameContainer");

// const updateUI = () => {
//   // Clear the existing content in the container
//   container.innerHTML = "";

//   randomNames.forEach((name, index) => {
//     const nameDiv = document.createElement("div");
//     const paragraph = document.createElement("p");

//     paragraph.textContent = name;

//     nameDiv.appendChild(paragraph);

//     container.appendChild(nameDiv);

//     if (index === randomNames.length - 1) {
//       const input = document.createElement("input");
//       const submitButton = document.createElement("button");

//       input.type = "text";
//       input.placeholder = "Enter something...";

//       submitButton.textContent = "Submit";
//       submitButton.addEventListener("click", () => {
//         const inputValue = input.value;
//         randomNames.push(inputValue);

//         // Update the UI to display the new name along with the existing names v.v.v important
//         updateUI();
//       });

//       container.appendChild(input);
//       container.appendChild(submitButton);
//     }
//   });
// };

// updateUI();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let randomNames = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace"];

// const container = document.getElementById("nameContainer");

// const updateUI = () => {
//   // Clear the existing content in the container
//   container.innerHTML = "";

//   randomNames.forEach((name, index) => {
//     const nameDiv = document.createElement("div");
//     const paragraph = document.createElement("p");

//     paragraph.textContent = name;
//     paragraph.style.marginRight = "10px";
//     paragraph.style.display = "inline-block";

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => {
//       // Remove the name from the array
//       randomNames.splice(index, 1);

//       updateUI();
//     });

//     deleteButton.style.display = "inline-block";

//     nameDiv.appendChild(paragraph);
//     nameDiv.appendChild(deleteButton);

//     container.appendChild(nameDiv);

//     if (index === randomNames.length - 1) {
//       const input = document.createElement("input");
//       const submitButton = document.createElement("button");

//       input.type = "text";
//       input.placeholder = "Enter something...";

//       submitButton.textContent = "Submit";
//       submitButton.addEventListener("click", () => {
//         const inputValue = input.value;
//         randomNames.push(inputValue);

//         // Update the UI to display the new name along with the existing names
//         updateUI();
//       });

//       container.appendChild(input);
//       container.appendChild(submitButton);
//     }
//   });
// };

// updateUI();

// let randomNames = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace"];

// const container = document.getElementById("nameContainer");

// const updateUI = () => {
//   // Clear the existing content in the container
//   container.innerHTML = "";

//   randomNames.forEach((name, index) => {
//     const nameDiv = document.createElement("div");
//     const paragraph = document.createElement("p");

//     paragraph.textContent = name;
//     paragraph.style.marginRight = "10px";
//     paragraph.style.display = "inline-block";

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => {
//       // Remove the name from the array
//       randomNames.splice(index, 1);

//       updateUI();
//     });

//     deleteButton.style.display = "inline-block";

//     nameDiv.appendChild(paragraph);
//     nameDiv.appendChild(deleteButton);

//     container.appendChild(nameDiv);
//   });

//   // Create input box and submit button outside of the loop
//   const input = document.createElement("input");
//   const submitButton = document.createElement("button");

//   input.type = "text";
//   input.placeholder = "Enter something...";

//   submitButton.textContent = "Submit";
//   submitButton.addEventListener("click", () => {
//     const inputValue = input.value;
//     randomNames.push(inputValue);

//     // Update the UI to display the new name along with the existing names
//     updateUI();
//   });

//   container.appendChild(input);
//   container.appendChild(submitButton);
// };

// updateUI();

let randomNames = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace"];

const container = document.getElementById("nameContainer");

const updateUI = () => {
  // Clear the existing content in the container
  container.innerHTML = "";

  randomNames.forEach((name, index) => {
    const nameDiv = document.createElement("div");

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = name;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = name;
    editInput.style.marginRight = "10px";
    editInput.style.display = "none";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      // Toggle between paragraph and input box
      nameParagraph.style.display = "none";
      editInput.style.display = "inline-block";

      // Disable delete button during edit
      deleteButton.disabled = true;

      // Toggle edit and save buttons
      editButton.style.display = "none";
      saveButton.style.display = "inline-block";
    });

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.style.display = "none";
    saveButton.addEventListener("click", () => {
      // Save the edited name and toggle back to paragraph
      randomNames[index] = editInput.value;
      updateUI();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      // Remove the name from the array
      randomNames.splice(index, 1);

      updateUI();
    });

    nameDiv.appendChild(nameParagraph);
    nameDiv.appendChild(editInput);
    nameDiv.appendChild(editButton);
    nameDiv.appendChild(saveButton);
    nameDiv.appendChild(deleteButton);

    container.appendChild(nameDiv);
  });

  // Create input box and submit button outside of the loop
  const input = document.createElement("input");
  const submitButton = document.createElement("button");

  input.type = "text";
  input.placeholder = "Enter something...";

  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", () => {
    const inputValue = input.value;
    randomNames.push(inputValue);

    // Update the UI to display the new name along with the existing names
    updateUI();
  });

  container.appendChild(input);
  container.appendChild(submitButton);
};

updateUI();
