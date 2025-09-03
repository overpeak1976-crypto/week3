let products = [
    {nameProduct: "banana", price: 10, discount: 5},
    {nameProduct: "Orange", price: 100, discount: 10},
    {nameProduct: "Grape", price: 1000, discount: 50},
    {nameProduct: "Mango", price: 50, discount: 10},
    {nameProduct: "Apple", price: 500, discount: 20}
];

function calculateTotal() {
    let total = 0; 
    products.forEach((product, index) => {
        let discountedPrice = product.price * (1 - product.discount / 100);
        total += discountedPrice;
        console.log(`ผลไม้ ${index + 1}: ชื่อสินค้า: ${product.nameProduct}, ราคา: ${product.price}, ส่วนลด: ${product.discount}%, ราคาหลังหักส่วนลด: ${discountedPrice} บาท`);
    });
    console.log(`ราคารวมหลังหักส่วนลด: ${total} บาท`);
}

calculateTotal();
