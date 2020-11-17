function getElements() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users');
    xhr.send();
    xhr.onload = function () {
        const data = JSON.parse(xhr.response);
        data.unshift({
            id: 0,
            login: 'user'
        });
        // analyze HTTP status of the response
        if (xhr.status !== 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else {
            processResult(data);
        }
    };
    xhr.onerror = function () {
        console.log("Request failed");
    };
}

function processResult(data) {
    const elements = ['div', 'p', 'span', 'td', 'section', 'footer', 'aside'];
    const element = document.querySelector('.container');

    const mainContainer = document.createElement('div');
    data.forEach((item, index) => {
        const elementName = elements[Math.floor(Math.random() * 10)] || 'div';
        const itemContainer = document.createElement(elementName);

        itemContainer.classList.add('item' + index);
        itemContainer.innerHTML = `Login: ${item.login}, ID: ${item.id}`;
        mainContainer.append(itemContainer);
    });
    element.append(mainContainer);
}

getElements();

console.log('get-element-script');
