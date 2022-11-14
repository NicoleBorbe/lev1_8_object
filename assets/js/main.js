let studentData = [
    {
      name: "Alex",
      age: 23,
      coop: false,
      address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
      },
      emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
      name: "Sandra",
      age: 22,
      coop: true,
      address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
      },
      emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
  ];

let namen = studentData.map(function (e){
    return e.name
});
console.log(namen);  

let coop = studentData.map(function (e){
    return e.coop
});
console.log(coop);  

studentData.forEach(function (e) {
    console.log(e.address.city);
});

studentData.forEach(function (e) {
    console.log(e.emails.join(", "));
});