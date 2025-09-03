let price = 1000;
let discountPercent = 50;
const calculate = price * (1 - discountPercent/100);

console.log(`ราคาปกติ: ${calculate}`);

if(calculate <=  0) {
    console.log('0');
}
if(calculate <= 500) {
    console.log(`บวกค่าธรรมเนียมจัดส่ง 10 บาท :${calculate + 10}`)
}
if(calculate > 500) {
    console.log(`ส่วนลดพิเศษ 10% :${calculate *(1 - 10/100)}`)
}

