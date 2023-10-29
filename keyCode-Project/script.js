//my method
// document.body.addEventListener('keypress',e=>{
//     const insert = document.querySelector('#insert');
//     // const div1 = createDiv(e.key === ' ' ? 'Space' : e.key, 'Key')
//     // const div2 = createDiv(e.keyCode, 'KeyCode')
//     // const div3 = createDiv(e.code, 'Code')
//     insert.textContent = '';
//     insert.appendChild(createDiv(e.key === ' ' ? 'Space' : e.key, 'Key'));
//     insert.appendChild(createDiv(e.keyCode, 'KeyCode'));
//     insert.appendChild(createDiv(e.code, 'Code'));

//     // insert.innerHTML = `<h1>Key press: ${e.key} , keyCode: ${e.keyCode} and code: ${e.code}</h1>`;
// })

// function createDiv(head, body){
//     const div = document.createElement('div');
//     const h3 = createHead(head);
//     div.appendChild(h3);
//     const small = createOutput(body);
//     div.appendChild(small);
//     div.className = 'key'
//     return div;
// }

// function createHead(heading){
//     const h3 = document.createElement('h3');
//     h3.textContent = heading;
//     return h3;
// }

// function createOutput(output){
//     const small = document.createElement('small');
//     small.textContent = output;
//     return small;
// }

//brad traversy's method
window.addEventListener('keypress',e =>{
    const insert = document.querySelector('#insert')
    insert.textContent = '';

    const keyCodes ={
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }

    for(let key in keyCodes){
        const div = document.createElement('div');
        div.className = 'key'
        const small = document.createElement('small')
        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        div.appendChild(valueText);
        small.appendChild(keyText);
        div.appendChild(small);
        insert.appendChild(div)
    }
})