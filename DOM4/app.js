let arr = [
  {
    name: "Amit Kumar",
    phoneNumber: "9876543210",
    address: "123 Street, Mumbai, Maharashtra",
    email: "amit.kumar@example.com",
  },
  {
    name: "Priya Singh",
    phoneNumber: "8765432109",
    address: "456 Street, Delhi, Delhi",
    email: "priya.singh@example.com",
  },
  {
    name: "Rahul Sharma",
    phoneNumber: "7654321098",
    address: "789 Street, Bangalore, Karnataka",
    email: "rahul.sharma@example.com",
  },
  {
    name: "Pooja Patel",
    phoneNumber: "6543210987",
    address: "101 Street, Ahmedabad, Gujarat",
    email: "pooja.patel@example.com",
  },
  {
    name: "Deepak Verma",
    phoneNumber: "5432109876",
    address: "202 Street, Chennai, Tamil Nadu",
    email: "deepak.verma@example.com",
  },
  {
    name: "Anjali Yadav",
    phoneNumber: "4321098765",
    address: "303 Street, Kolkata, West Bengal",
    email: "anjali.yadav@example.com",
  },
  {
    name: "Rajat Kapoor",
    phoneNumber: "8765432101",
    address: "404 Street, Hyderabad, Telangana",
    email: "rajat.kapoor@example.com",
  },
  {
    name: "Kavita Gupta",
    phoneNumber: "7654321092",
    address: "505 Street, Pune, Maharashtra",
    email: "kavita.gupta@example.com",
  },
  {
    name: "Suresh Nair",
    phoneNumber: "6543210983",
    address: "606 Street, Jaipur, Rajasthan",
    email: "suresh.nair@example.com",
  },
  {
    name: "Anita Reddy",
    phoneNumber: "5432109874",
    address: "707 Street, Lucknow, Uttar Pradesh",
    email: "anita.reddy@example.com",
  },
  {
    name: "Vikram Singh",
    phoneNumber: "9876543211",
    address: "808 Street, Chandigarh, Punjab",
    email: "vikram.singh@example.com",
  },
  {
    name: "Rashmi Tiwari",
    phoneNumber: "8765432102",
    address: "909 Street, Bhopal, Madhya Pradesh",
    email: "rashmi.tiwari@example.com",
  },
  {
    name: "Arjun Rajput",
    phoneNumber: "7654321093",
    address: "111 Street, Kochi, Kerala",
    email: "arjun.rajput@example.com",
  },
  {
    name: "Neha Sharma",
    phoneNumber: "6543210984",
    address: "222 Street, Dehradun, Uttarakhand",
    email: "neha.sharma@example.com",
  },
  {
    name: "Harish Verma",
    phoneNumber: "5432109875",
    address: "333 Street, Guwahati, Assam",
    email: "harish.verma@example.com",
  },
  {
    name: "Smita Kapoor",
    phoneNumber: "8765432103",
    address: "444 Street, Patna, Bihar",
    email: "smita.kapoor@example.com",
  },
  {
    name: "Prakash Patel",
    phoneNumber: "7654321094",
    address: "555 Street, Raipur, Chhattisgarh",
    email: "prakash.patel@example.com",
  },
  {
    name: "Aishwarya Nair",
    phoneNumber: "6543210985",
    address: "666 Street, Shimla, Himachal Pradesh",
    email: "aishwarya.nair@example.com",
  },
  {
    name: "Alok Yadav",
    phoneNumber: "5432109876",
    address: "777 Street, Jammu, Jammu and Kashmir",
    email: "alok.yadav@example.com",
  },
];

function createTable() {
  let tableTag = document.createElement("table");
  tableTag.className = "parent";

  let tableHeadingTag = document.createElement("thead");
  tableHeadingTag.className = "parent";

  let trHeadingTag = document.createElement("tr");
  trHeadingTag.className = "child";

  // Add heading columns
  let thName = document.createElement("th");
  thName.className = "thClass";
  thName.innerText = "Name";

  let thPhoneNumber = document.createElement("th");
  thPhoneNumber.className = "thClass";
  thPhoneNumber.innerText = "Phone Number";

  let thAddress = document.createElement("th");
  thAddress.className = "thClass";
  thAddress.innerText = "Address";

  let thEmail = document.createElement("th");
  thEmail.className = "thClass";
  thEmail.innerText = "Email";

  trHeadingTag.append(thName, thPhoneNumber, thAddress, thEmail);
  tableHeadingTag.append(trHeadingTag);
  tableTag.append(tableHeadingTag);

  // Add rows
  for (let ele of arr) {
    let trTag = document.createElement("tr");
    trTag.className = "child";

    let tdName = document.createElement("td");
    tdName.innerText = ele.name;

    let tdPhoneNumber = document.createElement("td");
    tdPhoneNumber.innerText = ele.phoneNumber;

    let tdAddress = document.createElement("td");
    tdAddress.innerText = ele.address;

    let tdEmail = document.createElement("td");
    tdEmail.innerText = ele.email;

    trTag.append(tdName, tdPhoneNumber, tdAddress, tdEmail);
    tableTag.append(trTag);
  }
  document.body.appendChild(tableTag);
}
