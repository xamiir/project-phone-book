type Contact = {
	id: number;
	name: string;
	phone: string;
}

const contacts: Contact[] = [];

contacts.push({ id: 1, name: 'Ahmed Abdillahi', phone: '34567' });
contacts.push({ id: 2, name: 'Jama Abdillahi', phone: '34545667' });

renderTable();

function add() {
	const nameInput = document.querySelector('#person-name') as HTMLInputElement;
	const name = nameInput.value;

	const phoneInput = document.querySelector('#phone-number') as HTMLInputElement;
	const phone = phoneInput.value;

	if (name.length < 2 || phone.length < 3) {
		return;
	}

	// TODO: Reject duplicate contacts.

	contacts.push({
		id: contacts.length + 1,
		name: name,
		phone: phone
	});

	renderTable();
	nameInput.value = '';
	phoneInput.value = '';
}

function renderTable() {
	const tbodyElement = document.querySelector('tbody');
	tbodyElement.remove();

	const newTbodyElement = document.createElement('tbody');
	newTbodyElement.className = 'text-center';
	
	for (const contact of contacts) {
		const row = document.createElement('tr');
		const idColumn = document.createElement('td');
		idColumn.textContent = contact.id.toString();
		idColumn.className = 'border border-gray-300 py-2';
	
		const nameColumn = document.createElement('td');
		nameColumn.textContent = contact.name;
		nameColumn.className = 'border border-gray-300 py-2';
	
		const phoneColumn = document.createElement('td');
		phoneColumn.textContent = contact.phone;
		phoneColumn.className = 'border border-gray-300 py-2';
	
		row.appendChild(idColumn);
		row.appendChild(nameColumn);
		row.appendChild(phoneColumn);
	
		newTbodyElement.appendChild(row);
	}

	const tableElement = document.querySelector('table');
	tableElement.appendChild(newTbodyElement);
}