var itemsArray = [ 
    {name: "juice", price: "50", quantity: "3"}, 
    {name: "cookie", price: "30", quantity: "9"}, 
    {name: "shirt", price: "880", quantity: "1"}, 
    {name: "pen", price: "100", quantity: "2"}
  ];
  var allTotalItems = 0;
  itemsArray.forEach(item =>{
    var itemtotal = parseInt(item.price) * parseInt(item.quantity)
    allTotalItems += itemtotal
    document.write(`${item.name}: ${item.price}<br>`)
  })
  document.write(`<br>Total price for all items: ${allTotalItems}`)