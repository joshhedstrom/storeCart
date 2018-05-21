$('#submit').on('click', function(event) {
	event.preventDefault();
    let name = $('#item').val().trim();

    let item = {
        product_name: name,
        price: 5,
        stock_quantity: 10,
        in_cart: false,
        cart_quantity: 0
    }

    console.log(item)

    // $.post('/store/new', item, (data)=>{
    // 	console.log('data from app.js: ', data)
    // })


});