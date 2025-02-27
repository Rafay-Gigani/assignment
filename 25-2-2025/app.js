// let getDiv = document.getElementById('main');

// fetch('https://fakestoreapi.com/products')
// .then(data => data.json())
//   .then(data => {
//     data.map((val, ind)=> {
//         getDiv.innerHTML += `<div class='abc'
//         <p>id: ${val['id']}</p>
//         <p>title: ${val['title']}</p>
//         <p>price: ${val['price']}</p>
//         <p>category: ${val['category']}</p>
//         <p>description: ${val['description']}</p>
//         <p>image: ${val['image']}</p>`
//     })
//   })
//   .catch(err => console.log(err));
let getDiv = document.getElementById('main');

fetch('https://fakestoreapi.com/products')
.then(data => data.json())
.then(data => {
    data.map(val => {
        getDiv.innerHTML += `
            <div class="col-md-3 mb-3">
                <div class="card h-100" style="width: 20rem;">
                    <img src="${val.image}" class="card-img-top p-2" alt="${val.title}">
                    <div class="card-body">
                        <h5 class="card-title">${val.title}</h5>
                        <p class="card-text">${val.description.substring(0, 80)}...</p>
                        <p class="fw-bold">$${val.price}</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>`;
    });
})
.catch(err => console.log(err));
