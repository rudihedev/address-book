console.log("Address Book");

const dataContacts = [
  {
    id: 1,
    fullName: "Rudi Heriansyah",
    phone: "+62-811-9870-2232",
    email: "rudihe@gmail.com",
    address: {
      street: "Jln. Sudirman, No. 1",
      city: "Palembang",
      zipCode: "30178",
      country: "Indonesia",
    },
  },
  {
    id: 2,
    fullName: "Irwanto Emillio",
    phone: "+60-232-2329-1122",
    email: "emillio@gmail.com",
    address: {
      street: "Jln. Batai 7, No. 5",
      city: "Johor",
      zipCode: "24232",
      country: "Malaysia",
    },
  },
  {
    id: 3,
    fullName: "Devita Agustina",
    phone: "+966-111-3342-1316",
    email: "ita@gmail.com",
    address: {
      street: "Utsman bin Affan St., No. 8",
      city: "Makkah",
      zipCode: "90056",
      country: "Saudi Arabia",
    },
  },
  {
    id: 4,
    fullName: "Minho Herianto",
    phone: "+82-221-1670-1821",
    email: "minho@gmail.com",
    address: {
      street: "Itacheon St.",
      city: "Seoul",
      zipCode: "24232",
      country: "South Korea",
    },
  },
];

// To display contacts
function displayContacts(contacts) {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    console.log(`
    👤 ${contact.fullName}
    📞 ${contact.phone} 
    ✉️ ${contact.email} 
    🏠 ${contact.address.street} 
    🏙️ ${contact.address.city} ${contact.address.zipCode} 
    🌍 ${contact.address.country}
  `);
  }
}

// To search contacts
function searchContacts(contacts) {
  const keyword = prompt("Enter any name to find: ");

  const searchResults = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
  return searchResults;
}

// To add contact
function addContact() {
  const fullName = prompt("Enter full name: ");
  const phone = prompt("Enter phone number: ");
  const email = prompt("Enter e-mail address: ");
  const street = prompt("Enter street address: ");
  const city = prompt("Enter city: ");
  const zipCode = prompt("Enter ZIP code: ");
  const country = prompt("Enter country: ");

  const newId =
    dataContacts.length > 0 ? dataContacts[dataContacts.length - 1].id + 1 : 1;

  const newContact = {
    id: newId,
    fullName,
    phone,
    email,
    address: {
      street,
      city,
      zipCode,
      country,
    },
  };

  dataContacts.push(newContact);
  alert("✅ New contact added succesfully!");

  displayContacts(dataContacts);
}

//displayContacts(dataContacts);

displayContacts(searchContacts(dataContacts));

//addContact();
