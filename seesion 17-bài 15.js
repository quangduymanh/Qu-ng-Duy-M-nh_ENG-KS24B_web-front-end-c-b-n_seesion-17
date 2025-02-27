let radius = Number(prompt("Nhập bán kính hình cầu: "));
let theTichCau = (4 / 3) * Math.PI * Math.pow(radius, 3);
let dienTichBeMatCau = 4 * Math.PI * Math.pow(radius, 2);
let chuViLonNhatCau = 2 * Math.PI * radius;
console.log(`Thể tích hình cầu: ${theTichCau.toFixed(2)}`);
console.log(`Diện tích bề mặt: ${dienTichBeMatCau.toFixed(2)}`);
console.log(`Chu vi lớn nhất: ${chuViLonNhatCau.toFixed(2)}`);