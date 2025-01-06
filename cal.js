function calculateCircleArea() {
    var radius = parseFloat(document.getElementById("radius").value);
    if (isNaN(radius) || radius <= 0) {
        document.getElementById("circleResult").innerHTML = "กรุณากรอกข้อมูลให้ครบครับลูกพี่่!";
    } else {
        var area = Math.PI * Math.pow(radius, 2);
        document.getElementById("circleResult").innerHTML = "พื้นที่ของวงกลม = " + area.toFixed(2) + " ตารางหน่วย";
    }
}


function calculateRectangleArea() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
        document.getElementById("rectangleResult").innerHTML = "กรุณากรอกข้อมูลให้ครบครับลูกพี่่!";
    } else {
        var area = length * width;
        document.getElementById("rectangleResult").innerHTML = "พื้นที่ของสี่เหลี่ยม = " + area.toFixed(2) + " ตารางหน่วย";
    }
}


function calculateTriangleArea() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);
    if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
        document.getElementById("triangleResult").innerHTML = "กรุณากรอกข้อมูลให้ครบครับลูกพี่่!";
    } else {
        var area = 0.5 * base * height;
        document.getElementById("triangleResult").innerHTML = "พื้นที่ของสามเหลี่ยม = " + area.toFixed(2) + " ตารางหน่วย";
    }
}