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

function searchContacts(contacts, keyword) {
  const searchResults = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
  return searchResults;
}

function addContact(
  fullName = "Unknown",
  phone = null,
  email = null,
  street = null,
  city = null,
  zipCode = null,
  country = null
) {
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
  console.log("✅ New contact added succesfully!");

  displayContacts(dataContacts);
}

// displayContacts(dataContacts);

// displayContacts(searchContacts(dataContacts));

addContact(
  "Pak Rudi",
  "+6281234567890",
  "rudi@example.com",
  "Jl. Jalan",
  "Palembang",
  "12345",
  "Indonesia"
);
