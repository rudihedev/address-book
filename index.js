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

displayContacts(dataContacts);
