const items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' }
];

const itemList = document.getElementById('itemList');

itemList.style.backgroundColor = "gray";
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    itemList.appendChild(li);
})