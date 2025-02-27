// //QUESTION 1
// var itemsArray = [ 
//     {name: "juice", price: "50", quantity: "3"}, 
//     {name: "cookie", price: "30", quantity: "9"}, 
//     {name: "shirt", price: "880", quantity: "1"}, 
//     {name: "pen", price: "100", quantity: "2"}
//   ];
//   var totalAllItems = 0;
//   itemsArray.forEach(item => {
   
//     var itemTotal = parseInt(item.price) * parseInt(item.quantity);
    
//     totalAllItems += itemTotal;
//     document.write(`${item.name}: ${itemTotal}<br>`);
//   });

//   document.write(`Total price of all items: ${totalAllItems}<br>`);

// //QUESTION 2
  let user = {
    name: "Rafay Gigani",
    email: "rafay@gmail.com",
    password: "Password123",
    age: 21,
    gender: "Male",
    city: "New York",
    country: "USA"
  };
  if ('age' in user && 'country' in user) {
    console.log("Both 'age' and 'country' properties exist in the object.");
  } else {
    console.log("One or both properties do not exist.");
  }

//   //QUESTION 3
//   function User(name, email, password, age, gender, city, country) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.age = age;
//     this.gender = gender;
//     this.city = city;
//     this.country = country;
//   }
//   let user1 = new User("John Doe", "johndoe@example.com", "password123", 30, "Male", "New York", "USA");
//   let user2 = new User("Jane Smith", "janesmith@example.com", "securePassword456", 25, "Female", "London", "UK");
//   let user3 = new User("Alice Johnson", "alicej@example.com", "password789", 28, "Female", "Sydney", "Australia");
//   let user4 = new User("Bob Brown", "bobbrown@example.com", "password321", 35, "Male", "Toronto", "Canada");
//   console.log(user1.name); 
//   console.log(user2.city); 
//   console.log(user3.age);  
     //QUESTION 4 
    //  function Person(name, gender, address, education, profession) {
    //     this.name = name;
    //     this.gender = gender;
    //     this.address = address;
    //     this.education = education;
    //     this.profession = profession;
    //   }
    // function loadRecords() {
    //     const records = JSON.parse(localStorage.getItem('personRecords')) || [];
    //     const recordsDiv = document.getElementById("records");
    //     recordsDiv.innerHTML = '';
      
    //     records.forEach((record, index) => {
    //       const recordDiv = document.createElement("div");
    //       recordDiv.innerHTML = `<strong>Record ${index + 1}</strong>: 
    //                             ${record.name}, ${record.gender}, ${record.address}, 
    //                             ${record.education}, ${record.profession}`;
    //       recordsDiv.appendChild(recordDiv);
    //     });
    //   }
      
    //   function saveRecord(record) {
    //     const records = JSON.parse(localStorage.getItem('personRecords')) || [];
    //     records.push(record);
    //     localStorage.setItem('personRecords', JSON.stringify(records));
    //     loadRecords();
    //   }
      
    //   document.getElementById("personForm").addEventListener("submit", function(event) {
    //     event.preventDefault();
      
    //     const name = document.getElementById("name").value;
    //     const address = document.getElementById("address").value;
    //     const education = document.getElementById("education").value;
    //     const profession = document.getElementById("profession").value;
        
    //     let gender;
    //     if (document.getElementById("male").checked) {
    //       gender = "Male";
    //     } else if (document.getElementById("female").checked) {
    //       gender = "Female";
    //     } else if (document.getElementById("other").checked) {
    //       gender = "Other";
    //     }
      
    //     if (name && address && gender && education && profession) {
    //       const newPerson = new Person(name, gender, address, education, profession);
    //       saveRecord(newPerson);
    //     } else {
    //       alert("Please fill out all fields.");
    //     }
      
    //     document.getElementById("personForm").reset();
    //   });
    
    //   window.onload = loadRecords;