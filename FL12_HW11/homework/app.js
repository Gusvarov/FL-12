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

for(const struct of structure) {
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
      if(element.folder) {
        secondLi.innerHTML = `<i class="material-icons folder-color">folder</i>${element.title}`;
      } else {
        secondLi.innerHTML = `<i class="material-icons gray">insert_drive_file</i>${element.title}`;
      }
      li.innerHTML = `<i class="material-icons folder-color">folder_open</i>${struct.title}`;
      secondUl.appendChild(secondLi);
      if(ul.lastChild === secondUl) {
        li.removeEventListener('click', builder);
        li.addEventListener('click', () => {
          secondUl.classList.toggle('display-none');
          li.classList.remove('active');
          if(secondUl.classList.contains('display-none')) {
            li.innerHTML = `<i class="material-icons folder-color">folder</i>${struct.title}`;
          } else {
            li.innerHTML = `<i class="material-icons folder-color">folder_open</i>${struct.title}`
          }
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
                thirdUl.classList.toggle('display-none');
                if(thirdUl.classList.contains('display-none')) {
                  secondLi.innerHTML = `<i class="material-icons folder-color">folder</i>${element.title}`;
                } else {
                  secondLi.innerHTML = `<i class="material-icons folder-color">folder_open</i>${element.title}`
                }
              })
            }
            if(item.folder) {
              thirdLi.innerHTML = `<i class="material-icons folder-color">folder</i>${item.title}`;
            } else {
              thirdLi.innerHTML = `<i class="material-icons gray">insert_drive_file</i>${item.title}`;
            }
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
                    fourthUl.classList.toggle('display-none');
                    if(fourthUl.classList.contains('display-none')) {
                      thirdLi.innerHTML = `<i class="material-icons folder-color">folder</i>${item.title}`;
                    } else {
                      thirdLi.innerHTML = `<i class="material-icons folder-color">folder_open</i>${item.title}`
                    }
                  })
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
              thirdUl.classList.toggle('display-none');
              if(thirdUl.classList.contains('display-none')) {
                secondLi.innerHTML = `<i class="material-icons folder-color">folder</i>${element.title}`;
              } else {
                secondLi.innerHTML = `<i class="material-icons folder-color">folder_open</i>${element.title}`
              }
            });
          }
        }
      }
      secondLi.addEventListener('click', secondBuilder);
    })
  }
  li.addEventListener('click', builder);
}