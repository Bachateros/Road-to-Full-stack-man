let div = document.body.children[0],
    ul = document.body.lastChild,
    secondLi = ul.lastChildren;
let f = item => alert(item);
f(div);
f(ul);
f(secondLi);

let table = document.getElementById('age-table'),
    labels = table.getElementsByTagName('label'),
    td = table.rows[0].firstChildren,//table.rows[0].cells[0]
    form = document.getElementsByName('search')[0],
    
    firstInput = form.getElementsByTagName('input')[0];//form.getElementByTagName('input')
    lastInput = form.querySelectorAll('input');
    lastInput[lastInput.length - 1];
    form = document.querySelector('form[name="search"]');