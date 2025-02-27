let num = parseInt(prompt("Nhập một số: "));
if (num || num === 0) {
    document.write(num.toString(2));
} else {
    document.write("Giá trị không hợp lệ");
}
