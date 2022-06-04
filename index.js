let id = 0;

document.getElementById('add').addEventListener('click', () => {
	let table = document.getElementById('list');
	let row = table.insertRow(1);

	row.setAttribute('id', `item-${id}`);
	row.insertCell(0).innerHTML = document.getElementById('item-name').value;
	row.insertCell(1).innerHTML = document.getElementById('quantity').value;
	row.insertCell(2).innerHTML = document.getElementById('need-by-date').value;
	let actions = row.insertCell(3);
	actions.appendChild(createDeleteButton(id++));
	document.getElementById('item-name').value = '';
	document.getElementById('quantity').value = '';
    document.getElementById('need-by-date').value = '';

	let date = new Date();
	date = today.getFullYear()+'-'+(('0' + (today.getMonth() + 1)))+'-'+(('0' + today.getDate()));
	document.getElementById('need-by-date').value = date;
});

function createDeleteButton(id){
	let btn = document.createElement('button');
	btn.className = 'btn btn-secondary';
	btn.id = id;
	btn.innerHTML = 'Delete';
	btn.onclick = () => {
		console.log(`Deleting row with id: item-${id}`);
		let elementToDelete = document.getElementById(`item-${id}`);
		elementToDelete.parentNode.removeChild(elementToDelete);
	};
	return btn;
}