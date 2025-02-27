let dateone = prompt("Nhập ngày 1 YYYY-MM-DD");
let datetwo = prompt("Nhập ngày 2 YYYY-MM-DD");
let d1 = new Date(dateone);
let d2 = new Date(datetwo);
let datenow = Math.abs((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
document.write(`Độ lệch là ${datenow} ngày`);

