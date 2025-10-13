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

// To delete any contact
function deleteContact(name) {
  const index = dataContacts.findIndex(
    (contact) => contact.fullName.toLowerCase() == name.toLowerCase()
  );

  if (index !== -1) {
    const removedContact = dataContacts.splice(index, 1)[0];
    console.log(
      `🗑️ Contact "${removedContact.fullName}" deleted successfully.`
    );
  } else {
    console.log(`❌ No contact found with the name "${name}".`);
  }
  console.log("📋 Updated contacts:", dataContacts);
}

function deleteContactPrompt() {
  const nameToDelete = prompt("Enter the full name to delete: ");
  if (nameToDelete && nameToDelete.trim() !== "") {
    console.log(nameToDelete);
    deleteContact(nameToDelete.trim());
  } else {
    console.log("⚠️ Deletion canceled or invalid input.");
  }
}

// To edit contact
function editContact() {
  const nameToEdit = prompt("Masukkan full name yang ingin di-edit: ");

  if (!nameToEdit || nameToEdit.trim() === "") {
    console.log("⚠️ Input nama tidak valid atau dibatalkan.");
    return;
  }

  // Find contact by full name
  const contact = dataContacts.find(
    (contactFind) =>
      contactFind.fullName.toLowerCase() === nameToEdit.toLowerCase()
  );

  if (!contact) {
    console.log(`❌ Kontak dengan nama "${nameToEdit}" tidak ditemukan.`);
    return;
  }

  console.log("📋 Kontak ditemukan:", contact);

  // View prompt for new data (leave empty if don't wanna edit)
  const newFullName =
    prompt("New full name:", contact.fullName) || contact.fullName;
  const newPhone = prompt("New phone number:", contact.phone) || contact.phone;
  const newEmail = prompt("New e-mail:", contact.email) || contact.email;
  const newStreet =
    prompt("New street address:", contact.address.street) ||
    contact.address.street;
  const newCity =
    prompt("New city:", contact.address.city) || contact.address.city;
  const newZip =
    prompt("New ZIP code:", contact.address.zipCode) || contact.address.zipCode;
  const newCountry =
    prompt("New country:", contact.address.country) || contact.address.country;

  // Update dataContacts
  contact.fullName = newFullName;
  contact.phone = newPhone;
  contact.email = newEmail;
  contact.address = {
    street: newStreet,
    city: newCity,
    zipCode: newZip,
    country: newCountry,
  };

  console.log(`✅ Contact "${nameToEdit}" has succesfully updated!:`, contact);
  console.log("📋 Updated dataContacts:", displayContacts(dataContacts));
}

//displayContacts(dataContacts);

//displayContacts(searchContacts(dataContacts));

//addContact();

//deleteContactPrompt();

//editContact();
