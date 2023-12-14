const dummyArray = [
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

function action() {
  //take ref of the container
  let container = document.getElementsByClassName("container")[0];
  let btn = document.getElementById("btn");
  let newElement;
  for (ele of dummyArray) {
    console.log(ele.name);
    newElement = document.createElement("h3");
    newElement.innerText =
      ele.name + " " + ele.address + " " + ele.phoneNumber + " " + ele.email;
    container.append(newElement);
  }
  btn.remove();
}
