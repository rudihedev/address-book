console.log("Address Book");

let dataContacts = [
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

function showContacts(contacts) {
  contacts.forEach((contact) => renderContact(contact));
}

function renderContact(contact) {
  console.log(`
    😊 ${contact.id}
    👤 ${contact.fullName}
    📞 ${contact.phone}
    ✉️ ${contact.email}
    🏠 ${contact.address.street}
    🏙️ ${contact.address.city}
    📍 ${contact.address.zipCode}
    🌍 ${contact.address.country}
  `);
}

function searchContacts(contacts, keyword) {
  const searchResults = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );

  if (searchResults.length === 0) {
    console.log("No contacts found matching the keyword!");
  }

  return searchResults;
}

function addContact(
  contacts,
  fullName = "Unknown",
  phone = null,
  email = null,
  street = null,
  city = null,
  zipCode = null,
  country = null
) {
  const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;

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

  dataContacts = [...contacts, newContact];

  console.log("✅ New contact added succesfully!");

  showContacts(dataContacts);
}

function deleteContact(contacts, id) {
  const updatedContacts = contacts.filter((contact) => contact.id != id);

  dataContacts = updatedContacts;
  showContacts(dataContacts);
}

function editContact(contacts, id, newContact) {
  // TODO: Implement

  dataContacts = updatedContacts;
}

// showContacts(dataContacts);

// showContacts(searchContacts(dataContacts, "syah"));

addContact(
  dataContacts,
  "Tikitaka",
  "+899-2323-3232",
  "ronaldisnho@gmail.com",
  "Alberqueqe St.",
  "Konoha",
  "2323111",
  "Mozambique"
);

// TODO: Make this work
// addContact(dataContacts, {
//   fullName: "Tikitaka",
//   phone: "+899-2323-3232",
//   email: "ronaldisnho@gmail.com",
//   address: {
//     street: "Alberqueqe St.",
//     city: "Konoha",
//     zipCode: "2323111",
//     country: "Mozambique",
//   },
// });

// deleteContact(dataContacts, 1);
