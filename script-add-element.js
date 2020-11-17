function addButtonListener() {
    const addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener('click', ($event) => {
        addElement();
    });
}

function addElement() {
    const element = document.querySelector('.container');
    const container = document.createElement('div');
    container.innerHTML = `Login: CustomLogin_${Math.floor(Math.random() * 100)}, ID: ${Math.floor(Math.random() * 100)}`;
    element.append(container);
}

addButtonListener();

console.log('add-element-script');
