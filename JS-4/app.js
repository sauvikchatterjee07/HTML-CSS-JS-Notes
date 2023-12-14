// let obj = {
//   course: "Full Stack Web Development",
//   duration: "One year",
//   student: 2,
//   instructor: {
//     name: {
//       firstName: "Sauvik",
//       lastName: "Chatterjee",
//     },
//   },
// };

// // console.log(obj.instructor.name.firstName);

// // console.log(obj.instructor);

// //Obect De-Structuring

// let { firstName, lastName } = obj.instructor.name;

// console.log(firstName, lastName);

let obj = {
  university: {
    name: "BU",
    dept: {
      number: 19,
      name: ["eqwyhdc", "weiuf", "wiruhfi", "rugf"],
    },
    faculty: {
      designation: {
        name: ["Hod", "Principal", "CH", "Prof", "Asst. Prof", "Librarian"],
      },
    },
  },
};

// console.log(obj.university.faculty.designation.name[4]);

// let { name } = obj.university.faculty.designation;

// console.log(name[4]);

// let getUser = ({ number }) => {
//   console.log(number);
// };

// getUser(obj.university.dept);

// JSON Format => JavaScript Object Notation
