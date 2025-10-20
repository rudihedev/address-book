console.log("Address Book");

let dataContacts = [
  {
    id: 1,
    fullName: "Rudi Heriansyah",
    phone: "+62-811-9870-2232",
    email: "rudihe@gmail.com",
    street: "Jln. Sudirman, No. 1",
    city: "Palembang",
    zipCode: "30178",
    country: "Indonesia",
  },
  {
    id: 2,
    fullName: "Irwanto Emillio",
    phone: "+60-232-2329-1122",
    email: "emillio@gmail.com",
    street: "Jln. Batai 7, No. 5",
    city: "Johor",
    zipCode: "24232",
    country: "Malaysia",
  },
  {
    id: 3,
    fullName: "Devita Agustina",
    phone: "+966-111-3342-1316",
    email: "ita@gmail.com",
    street: "Utsman bin Affan St., No. 8",
    city: "Makkah",
    zipCode: "90056",
    country: "Saudi Arabia",
  },
  {
    id: 4,
    fullName: "Minho Herianto",
    phone: "+82-221-1670-1821",
    email: "minho@gmail.com",
    street: "Itacheon St.",
    city: "Seoul",
    zipCode: "24232",
    country: "South Korea",
  },
];

function renderContacts(contacts) {
  const appElement = document.getElementById("app");

  const contactsAsString = contacts
    .map((contact) => renderContact(contact))
    .join("");

  appElement.innerHTML = `<ul id="contacts" class="space-y-4">
    ${contactsAsString}
  </ul>`;
}

function renderContact(contact) {
  return `<li class="p-2 border border-black rounded">
    <p>😊 ${contact.id}</p>
    <h2 class="font-bold">👤 ${contact.fullName}</h2>
    <p>📞 ${contact.phone}</p>
    <p>✉️ ${contact.email}</p>
    <p>🏠 ${contact.street}</p>
    <p>🏙️ ${contact.city}</p>
    <p>📍 ${contact.zipCode}</p>
    <p>🌍 ${contact.country}</p>
  </li>`;
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
  { fullName, phone, email, street, city, zipCode, country }
) {
  let newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;

  const newContact = {
    id: newId,
    fullName,
    phone,
    email,
    street,
    city,
    zipCode,
    country,
  };

  dataContacts = [...contacts, newContact];
  console.log("✅ New contact added succesfully!");

  renderContacts(dataContacts);
}

function deleteContact(contacts, id) {
  const updatedContacts = contacts.filter((contact) => contact.id != id);

  dataContacts = updatedContacts;
  renderContacts(dataContacts);
}

function editContact(contacts, id, updates) {
  const updatedContacts = contacts.map((contact) => {
    if (contact.id === id) {
      return {
        ...contact,
        ...updates,
      };
    } else {
      return contact;
    }
  });

  dataContacts = updatedContacts;
  renderContacts(dataContacts);
}

// ------------------------------------------------------------

renderContacts(dataContacts);

// showContacts(searchContacts(dataContacts, "syah"));

// addContact(dataContacts, {
//   fullName: "Tikitaka",
//   phone: "+899-2323-3232",
//   email: "ronaldisnho@gmail.com",
//   street: "Alberqueqe St.",
//   city: "Konoha",
//   zipCode: "2323111",
//   country: "Mozambique",
// });

// deleteContact(dataContacts, 1);

// editContact(dataContacts, 3, { country: "KSA", city: "Thaif" });
