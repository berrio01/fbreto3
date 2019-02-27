fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let divRow = document.querySelector(".row");
    let image = "https://semantic-ui.com/images/wireframe/image.png";
    users.forEach(user => {
        let divCol = document.createElement("div");
        divCol.setAttribute("class", "col-12 col-md-6 col-lg-4 card-container");
        divCol.innerHTML = `<div class="card">
                            <img src=${image} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                            </div>
                        </div>`;
        divRow.appendChild(divCol);
    });
})

