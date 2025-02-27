// var product = [
//   {
//     p_id: 1,
//     p_name: "iphone",
//     p_price: "80000",
//     p_description: "lorem ipsum dolor sit amet",
//     p_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhnOf5PmosXNvzIWvICuwAJEyimVqS60MRw&s",
//   },
//   {
//     p_id: 2,
//     p_name: "Samsung Galaxy S24 Ultra",
//     p_price: "150000",
//     p_description: "lorem ipsum dolor sit amet",
//     p_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdim6kkkR37uMOs7dL4GuhVLSlZRIhnaHsTw&s",
//   },
//   {
//     p_id: 3,
//     p_name: "Google Pixel 9",
//     p_price: "120000",
//     p_description: "lorem ipsum dolor sit amet",
//     p_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpM-Nfec2aYgYcjqt9nFofbdt11q-CbJBiA&s",
//   },
// ];
// var getDiv = document.querySelector("#box");
// for (var i = 0; i < product.length; i++) {
//   var getProduct = product[i];
//   getDiv.innerHTML += `<div class='abc'>
//     <p>${getProduct.p_id}</p>
//     <p>${getProduct.p_name}</p>}
//     <p>${getProduct.p_price}</p>
//     <p>${getProduct.p_description}</p>
//     <img src='${getProduct.p_img} width='200'/>
//     </div>`;
// }
// var products = [
//     {
//       p_id: 1,
//       p_name: "samsung",
//       p_price: "70000",
//       p_des: "lorem paragrapgh",
//       p_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhnOf5PmosXNvzIWvICuwAJEyimVqS60MRw&s'
//     },
//     {
//       p_id: 2,
//       p_name: "iPhone",
//       p_price: "170000",
//       p_des: "lorem paragrapgh",
//       p_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdim6kkkR37uMOs7dL4GuhVLSlZRIhnaHsTw&s'
//     },
//     {
//       p_id: 3,
//       p_name: "one Plus",
//       p_price: "7000",
//       p_des: "lorem paragrapgh",
//       p_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpM-Nfec2aYgYcjqt9nFofbdt11q-CbJBiA&s'
//     },
//   ];
  
//   var getDiv = document.querySelector("#box");
  
//   for (var i = 0; i < products.length; i++) {
//     var getProducts = products[i];
  
//     getDiv.innerHTML += `<div class='abc'> 
//       <p> ${getProducts.p_id} </p>
//       <p> ${getProducts.p_name} </p>
//       <p> ${getProducts.p_price} </p>
//       <p> ${getProducts.p_des} </p>
//       <img src=${getProducts.p_img} width='200' />
//       </div>`;
//   }
var products = [

  {
    p_id: 1,
    p_name: 'Samsung Galaxy S24 Ultra',
    p_price: 150000,
    p_description: 'lorem ipsum dolor sit amet',
    p_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdim6kkkR37uMOs7dL4GuhVLSlZRIhnaHsTw&s',
    p_button: `<button class='btn'>Add To Cart</button>`,
  },
  {
    p_id: 2,
    p_name: 'iPhone 12 Pro Max',
    p_price: 120000,
    p_description: 'lorem ipsum dolor sit amet',
    p_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpM-Nfec2aYgYcjqt9nFofbdt11q-CbJBiA&s',
    p_button: `<button class='btn'>Add To Cart</button>`,
  },
  {
    p_id: 3,
    p_name: 'Google Pixel 9',
    p_price: 120000,
    p_description: 'lorem ipsum dolor sit amet',
    p_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpM-Nfec2aYgYcjqt9nFofbdt11q-CbJBiA&s',
    p_button: `<button class='btn'>Add To Cart</button>`,
  },
];

var getDiv = document.querySelector('#box')

for (var i = 0;i < products.length; i++){
  var getProduct = products[i];
  getDiv.innerHTML += `
    <div class='abc'>
      <p>${getProduct.p_id}</p>
      <p>${getProduct.p_name}</p>
      <p>${getProduct.p_price}</p>
      <p>${getProduct.p_description}</p>
      <img src='${getProduct.p_img}' width='200'/>
      <p>${getProduct.p_button}</p>
      </div>`;
}
