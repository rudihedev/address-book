// Initialize dataContacts in localStorage
let dataContacts = JSON.parse(localStorage.getItem("contacts")) || [];
renderContacts(dataContacts);

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(dataContacts));
}

function renderContacts(contacts) {
  const appElement = document.getElementById("app");

  contacts.sort((a, b) => a.fullName.localeCompare(b.fullName));

  const contactsAsString = contacts
    .map((contact) => renderContact(contact))
    .join("");

  appElement.innerHTML = `<ul id="contacts" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    ${contactsAsString}
  </ul>`;

  // Event listener to Delete button
  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const fullName = e.currentTarget.dataset.fullname;
      deleteContact(dataContacts, fullName);
    });
  });

  // Edit contact (phone, email, city, country)
  document.querySelectorAll(".btn-edit").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const fullName = e.currentTarget.dataset.fullname;
      toggleEditContact(fullName, btn);
    });
  });

  updateContactCount(contacts);
}

function renderContact(contact) {
  return `<li class="relative overflow-visible p-4 border border-gray-300 rounded-xl shadow-md bg-white h-full hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
  
  <div>
    <h2 class="font-bold text-lg text-gray-800">👤 ${contact.fullName}</h2>
    <p>📞 <span class="phone-text">${contact.phone}</span></p>
    <p>✉️ <span class="email-text">${contact.email}</span></p>  
    <p>🏙️ <span class="city-text">${contact.city}</span></p>  
    <p>🌍 <span class="country-text">${contact.country}</span></p>
  </div>  
  
  <div class="absolute bottom-2 right-2 flex gap-1">
    <div class="relative group">
          <button 
            class="btn-edit text-blue-500 hover:text-blue-700 text-xl cursor-pointer"
            data-fullname="${contact.fullName}"
          >
            ✏️
          </button>
          <span class="absolute bottom-8 right-0 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Edit
          </span>
        </div>
    
        <div class="relative group">
    <button class="btn-delete text-red-500 hover:text-red-700 text-xl cursor-pointer" data-fullname = "${contact.fullName}">🗑️</button>  
    <span class="absolute bottom-8 right-0 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      Delete
    </span>  
    </div>
  </div>
  </li>`;
}

function toggleEditContact(fullName, btn) {
  const contact = dataContacts.find((c) => c.fullName === fullName);
  if (!contact) return;

  const li = btn.closest("li");
  const phoneSpan = li.querySelector(".phone-text");
  const emailSpan = li.querySelector(".email-text");
  const citySpan = li.querySelector(".city-text");
  const countrySpan = li.querySelector(".country-text");
  const tooltip = btn.parentElement.querySelector("span"); // ✅ ambil elemen tooltip

  if (btn.dataset.mode === "edit") {
    // Save mode
    const phoneInput = li.querySelector(".phone-input");
    const emailInput = li.querySelector(".email-input");
    const cityInput = li.querySelector(".city-input");
    const countryInput = li.querySelector(".country-input");

    const newPhone = phoneInput.value.trim();
    const newEmail = emailInput.value.trim();
    const newCity = cityInput.value.trim();
    const newCountry = countryInput.value.trim();

    // Simpan perubahan
    if (newPhone) contact.phone = newPhone;
    if (newEmail) contact.email = newEmail;
    if (newCity) contact.city = newCity;
    if (newCountry) contact.country = newCountry;

    renderContacts(dataContacts);
    saveContacts();
  } else {
    const currentPhone = phoneSpan.textContent;
    const currentEmail = emailSpan.textContent;
    const currentCity = citySpan.textContent;
    const currentCountry = countrySpan.textContent;

    phoneSpan.outerHTML = `<input type="text" class="phone-input border border-gray-400 rounded p-1 w-44" value="${currentPhone}" />`;
    emailSpan.outerHTML = `<input type="text" class="email-input border border-gray-400 rounded p-1 w-44 mt-1" value="${currentEmail}" />`;
    citySpan.outerHTML = `<input type="text" class="city-input border border-gray-400 rounded p-1 w-36 mt-1" value="${currentCity}" />`;
    countrySpan.outerHTML = `<input type="text" class="country-input border border-gray-400 rounded p-1 w-36 mt-1" value="${currentCountry}" />`;

    btn.textContent = "💾";
    btn.dataset.mode = "edit";
    tooltip.textContent = "Save";
  }
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

function addContact(contacts, { fullName, phone, email, city, country }) {
  let newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;

  const newContact = {
    fullName,
    phone,
    email,
    city,
    country,
  };

  dataContacts = [...contacts, newContact];
  console.log("✅ New contact added succesfully!");

  renderContacts(dataContacts);
}

function deleteContact(contacts, fullName) {
  const updatedContacts = contacts.filter(
    (contact) => contact.fullName != fullName
  );

  dataContacts = updatedContacts;
  saveContacts();
  renderContacts(dataContacts);
}

function editContact(contacts, fullName, updates) {
  const updatedContacts = contacts.map((contact) => {
    if (contact.fullName === fullName) {
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

renderContacts(dataContacts);

function updateContactCount(contacts) {
  const countElement = document.getElementById("contactCount");
  if (countElement) {
    countElement.textContent = `(${contacts.length})`;
  }
}

// Event handler for searchBox
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", (e) => {
  const keyword = e.target.value.trim();
  if (keyword === "") {
    renderContacts(dataContacts);
  } else {
    const results = searchContacts(dataContacts, keyword);
    renderContacts(results);
  }
});

// Event handler for addContactForm
document
  .getElementById("addContactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // mencegah reload halaman

    // Ambil nilai dari input
    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const city = document.getElementById("city").value.trim();
    const country = document.getElementById("country").value.trim();

    // Validasi sederhana
    if (!fullName || !phone || !email) {
      alert("Please fill in at least full name, phone, and email!");
      return;
    }

    // Tambahkan kontak baru ke dataContacts
    const newContact = { fullName, phone, email, city, country };
    dataContacts.push(newContact);
    saveContacts();

    // Render ulang daftar kontak
    renderContacts(dataContacts);

    // Reset form setelah submit
    e.target.reset();

    console.log("✅ Contact added:", newContact);
  });
