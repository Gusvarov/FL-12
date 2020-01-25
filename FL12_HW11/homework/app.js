const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function fillNode(node, element) {
  if (node.folder) {
      element.innerHTML = `<i class="material-icons folder-color">folder</i>${node.title}`
  } else {
      element.innerHTML = `<i class="material-icons gray">insert_drive_file</i>${node.title}`;
  }
}

function onClick(element, node, children) {
  children.classList.toggle('display-none');
  if (children.classList.contains('display-none')) {
      element.innerHTML = `<i class="material-icons folder-color">folder</i>${node.title}`;
  } else {
      element.innerHTML = `<i class="material-icons folder-color">folder_open</i>${node.title}`
  }
}

for (const struct of structure) {
const ul = document.createElement('ul');
rootNode.appendChild(ul);
const li = document.createElement('li');
li.innerHTML = `<i class="material-icons folder-color">folder</i>${struct.title}`
ul.appendChild(li);

const builder = function() {
  struct.children.forEach(element => {
    const secondUl = document.createElement('ul');
    ul.appendChild(secondUl);
    const secondLi = document.createElement('li');
    fillNode(element, secondLi);
    li.innerHTML = `<i class="material-icons folder-color">folder_open</i>${struct.title}`;
    secondUl.appendChild(secondLi);
    if(ul.lastChild === secondUl) {
      li.removeEventListener('click', builder);
      li.addEventListener('click', () => {
        onClick(li, struct, secondUl);
      });
    }

    function secondBuilder(event) {
      if(element.children && element.folder) {
        element.children.forEach(item => {
          const thirdUl = document.createElement('ul');
          const thirdLi = document.createElement('li');
          secondLi.innerHTML = `<i class="material-icons folder-color">folder_open</i>${element.title}`;
          secondUl.appendChild(thirdUl);
          if(event.target.nextSibling === thirdUl || event.target.nextSibling.nextSibling === thirdUl) {
            secondLi.removeEventListener('click', secondBuilder);
            secondLi.addEventListener('click', () => {
              onClick(secondLi, element, thirdUl);
            });
          }
          fillNode(item, thirdLi);
          thirdUl.appendChild(thirdLi);

          function thirdBuilder() {
            if(!item.children && item.folder) {
              const fourthUl = document.createElement('ul');
              const fourthLi = document.createElement('li');
              thirdLi.innerHTML = `<i class="material-icons folder-color">folder_open</i>${item.title}`;
              thirdUl.appendChild(fourthUl);
              fourthLi.innerHTML = `<i>Folder is empty</i>`;
              fourthUl.appendChild(fourthLi);
              if(event.target.nextSibling.nextSibling) {
                thirdUl.removeEventListener('click', thirdBuilder);
                thirdLi.addEventListener('click', () => {
                  onClick(thirdLi, item, fourthUl);
                });
              }
            }
          }
          thirdUl.addEventListener('click', thirdBuilder);
        })
      } else if (!element.folder) {
        '';
      } else {
        const thirdUl = document.createElement('ul');
        const thirdLi = document.createElement('li');
        secondUl.appendChild(thirdUl);
        thirdLi.innerHTML = `<i>Folder is empty</i>`;
        secondLi.innerHTML = `<i class="material-icons folder-color">folder_open</i>${element.title}`;
        thirdUl.appendChild(thirdLi);
        if(event.target.nextSibling === thirdUl || event.target.nextSibling.nextSibling === thirdUl) {
          secondLi.removeEventListener('click', secondBuilder);
          secondLi.addEventListener('click', () => {
            onClick(secondLi, element, thirdUl);
          });
        }
      }
    }
    secondLi.addEventListener('click', secondBuilder);
  })
}
li.addEventListener('click', builder);
}