const root = document.querySelector('#root');
const header = document.createElement('h1');
const button = document.createElement('button');
const ul = document.createElement('ul');
const newSet = '#/add';
const defaultSet = '#';
const modify = '#modify';

let terms = localStorage.terms ? JSON.parse(localStorage.terms) : [];

button.textContent = 'Add new set';
header.textContent = 'Main page';
root.appendChild(header);
root.appendChild(button);
root.appendChild(ul);

function liMaker(text) {
  const label = document.createElement('label');
  let li = document.createElement('li');
  let remove = document.createElement('button');
  let edit = document.createElement('button');
  ul.appendChild(li);  
  label.textContent = text;
  li.appendChild(label);
  li.appendChild(remove);
  li.appendChild(edit);
  remove.textContent = 'Remove';
  edit.textContent = 'Edit';
}

ul.addEventListener('click', () => {
  if (event.target.textContent === 'Remove') {
    event.target.parentNode.remove()
    terms.forEach((task,index) => {
      if(event.target.previousSibling.textContent === task.item) {
        terms.splice(index, 1);
        localStorage.setItem('terms', JSON.stringify(terms));
      }
    })
  }
  if (event.target.textContent === 'Edit') {
    document.location.hash = modify;
    removeChildren(root);
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const input = document.createElement('input');
    const save = document.createElement('button');
    const cancel = document.createElement('button');
    h1.textContent = 'Add new set';
    save.textContent = 'Save changes';
    cancel.textContent = 'Cancel';
    input.placeholder = 'Add term';
    root.appendChild(h1);
    root.appendChild(div);
    div.appendChild(input);
    div.appendChild(save);
    div.appendChild(cancel);
    const secondDiv = document.createElement('div');
    const term = document.createElement('input');
    const definition = document.createElement('input');
    term.placeholder = 'Term';
    definition.placeholder = 'Definiton';
    div.appendChild(secondDiv);
    secondDiv.appendChild(term);
    secondDiv.appendChild(definition);

    terms.forEach(element => {
      if (event.target.previousSibling.previousSibling.textContent === element.item) {
        input.placeholder = element.item;
        term.placeholder = element.term;
        definition.placeholder = element.definition;
        save.addEventListener('click', () => { 
          element.item = input.value;
          element.term = term.value;
          element.definition = definition.value;
          localStorage.terms = JSON.stringify(terms);
          removeChildren(root);
          root.appendChild(header);
          root.appendChild(button);
          root.appendChild(ul);
          ul.firstChild.firstChild.textContent = input.value;
          document.location.hash = defaultSet;  
        })
      }
    })  

    cancel.addEventListener('click', () => {
      removeChildren(root);
      root.appendChild(header);
      root.appendChild(button);
      root.appendChild(ul);
      document.location.hash = defaultSet;  
    })
  }
})

button.addEventListener('click', () => {
    document.location.hash = `${newSet}`
    if (document.location.hash === newSet) {
      removeChildren(root);
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const input = document.createElement('input');
        const addTerm = document.createElement('button');
        const save = document.createElement('button');
        const cancel = document.createElement('button');
        h1.textContent = 'Add new set';
        addTerm.textContent = 'Add term';
        save.textContent = 'Save changes';
        cancel.textContent = 'Cancel';
        input.placeholder = 'Add term';
        root.appendChild(h1);
        root.appendChild(div);
        div.appendChild(input);
        div.appendChild(addTerm);
        div.appendChild(save);
        div.appendChild(cancel);

        cancel.addEventListener('click', () => {
          removeChildren(root);
          root.appendChild(header);
          root.appendChild(button);
          root.appendChild(ul);
          document.location.hash = defaultSet;  
        })

        addTerm.addEventListener('click', () => {
          const secondDiv = document.createElement('div');
          const term = document.createElement('input');
          const definition = document.createElement('input');
          term.placeholder = 'Term';
          definition.placeholder = 'Definiton';
          div.appendChild(secondDiv);
          secondDiv.appendChild(term);
          secondDiv.appendChild(definition);

          save.addEventListener('click', () => { 
            terms.push({'item': input.value, 'term': term.value, 'definition': definition.value});
            localStorage.terms = JSON.stringify(terms);
            liMaker(input.value);
            removeChildren(root);
            root.appendChild(header);
            root.appendChild(button);
            root.appendChild(ul);
            document.location.hash = defaultSet;        
          })
        })
    }
})

terms.forEach(element => {
  liMaker(element.item);
});

function removeChildren(child) {
  while (child.firstChild) {
    child.removeChild(child.firstChild);
  }
}