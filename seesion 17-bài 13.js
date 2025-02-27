const principal = parseFloat(prompt("Nhập số tiền gửi: "));
const months = parseInt(prompt("Nhập số tháng gửi: "));
const interestRate = 4.3 / 100; // Lãi suất 4.3% / năm

if (principal > 0 && months > 0) {
    const interest = (principal * interestRate * months) / 12;
    console.log(`Số tiền lãi nhận được: ${interest.toLocaleString("vi-VN")} VNĐ`);
} else {
    console.log("Dữ liệu nhập không hợp lệ");
}