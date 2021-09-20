function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const divMain = document.getElementById("cardContainer");

var abc;
fetch("projects.json")
    .then(response => response.json())
    .then(data=>{
   
      let projects = data.projects;
      return projects.map(function(project) {
        console.log(project)
        let div = createNode('div')
        let div1 = createNode('div')
        let div2 = createNode('div')
        let h5 = createNode('h5')
        let h6 = createNode('h6')
        let p = createNode('p')
        let a = createNode('a')

        div.classList.add('col-md-4')
        div1.classList.add('card', 'bg-light', 'projectCard')
        div2.classList.add('card-body')
        h5.classList.add('card-title')
        h6.classList.add('card-subtitle', 'mb-2', 'text-muted')
        p.classList.add('card-text')
        a.classList.add('card-link')

        a.href = project.url
        h5.innerHTML = project.title
        h6.innerHTML = project.tools
        p.innerHTML = project.text
        a.innerHTML = "View <i class='bi bi-code'></i>"

        append(div2, h5)
        append(div2, h6)
        append(div2, p)
        append(div2, a)
        append(div1, div2)
        append(div, div1)
        append(divMain, div)

      })
      
    })
    .catch(error=> {
      console.log(error);
    });

 

    
