let a = Number(prompt("Nhập hệ số a: "));
let b = Number(prompt("Nhập hệ số b: "));
let c = Number(prompt("Nhập hệ số c: "));

if (a === 0){
    console.log("Đây không phải là phương trình bậc 2");
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        document.write("Phương trình vô nghiệm");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        document.write(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.write(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    }
}