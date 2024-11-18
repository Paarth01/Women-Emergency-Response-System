// Sample data for guardians
const guardians = [
    { id: 1, name: "", number: "" , status: "" },
];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function callEmergency() {
    alert("Dialing Emergency Number (1901)...");
}

function populateGuardians() {
    const select = document.getElementById('guardians');
    guardians.forEach(guardian => {
        const option = document.createElement('option');
        option.value = guardian.id;
        option.text = `${guardian.name} ${guardian.number} (${guardian.status})`;
        select.appendChild(option);
    });
}

function displayContactList() {
    const contactList = document.getElementById('contactList');
    guardians.forEach(guardian => {
        const contact = document.createElement('div');
        contact.innerHTML = `Name- ${guardian.name} Number- ${guardian.number} Status- ${guardian.status}`;
        contactList.appendChild(contact);
    });
}

function sendMessage() {
    const selectedGuardians = Array.from(document.getElementById('guardians').selectedOptions).map(option => option.text);
    const message = document.getElementById('message').value;
    if (selectedGuardians.length > 0 && message) {
        alert(`Message sent to: ${selectedGuardians.join(', ')}\nMessage: ${message}`);
    } else {
        alert('Please select at least one guardian and enter a message.');
    }
}

function addGuardian() {
    const name = prompt("Enter guardian's name:");
    const number = prompt("Enter guardian's number:");
    const status = prompt("Enter guardian's status (Active, Silent, Vibration):");
    if (name && number && status) {
        guardians.push({ id: guardians.length + 1, name, number, status });
        alert("Guardian added successfully!");
        refreshContactList();
        populateGuardians();
    }
}

function updateEmergencyNumber() {
    const number = prompt("Enter new emergency number:");
    if (number) {
        alert(`Emergency number updated to: ${number}`);
    }
}

function refreshContactList() {
    document.getElementById('contactList').innerHTML = '';
    displayContactList();
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    populateGuardians();
    displayContactList();
});

// In script.js
document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.createElement("p");
    const hours = new Date().getHours();
    greeting.textContent = hours < 12 ? "Good Morning!" : hours < 18 ? "Good Afternoon!" : "Good Evening!";
    document.querySelector("header div").appendChild(greeting);
});
