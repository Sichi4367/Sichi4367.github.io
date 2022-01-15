
var chocolate = ['CU', '7 eleven'];
var candy = ['GS25', 'CU'];


function setup() {
    createCanvas(400, 400);
    background(220);
    stroke(0, 0, 0, 255);
    strokeWeight(7);
    line(100, 100, 200, 200);
    line(200, 200, 300, 400);
    line(350, 350, 0, 200);
    line(400, 0, 150, 300);
    line(128, 45, 200, 200);
    line(290,255,362,370);
    stroke(255, 0, 0, 255);
    fill(255,0,0);
    rect(50, 220, 10, 10);

   
    var input = createInput('상품 이름을 입력하세요');

    input.input(handleInput);
}

function draw() {
    //background(220);
}

function handleInput() {
    if (this.value() === '초콜릿') {
        textSize(18);
        noStroke(0);
        fill(0);
        text(chocolate, 150 , 390);
        stroke(255,0,0);
        strokeWeight(20);
        point(100,100);
        noStroke(0);
        fill(0);
        text('CU', 88, 90);
        stroke(255,0,0);
        strokeWeight(20);
        point(255,150);
        noStroke(0);
        fill(0);
        text('CU', 243, 140);
        stroke(255,0,0);
        strokeWeight(20);
        point(350,275);
        noStroke(0);
        fill(0);
        text('7 eleven', 318, 265);
        stroke(0, 0, 0, 255);
    strokeWeight(7);
    line(100, 100, 200, 200);
    line(200, 200, 300, 400);
    line(350, 350, 0, 200);
    line(400, 0, 150, 300);
    line(128, 45, 200, 200);
    line(290,255,362,370);
    stroke(255, 0, 0, 255);
    fill(255,0,0);
    rect(50, 220, 10, 10);
    } else if (this.value() === '사탕') {
        textSize(18);
        noStroke(0);
        fill(0);
        text(candy, 160, 400);
        stroke(255,0,0);
        strokeWeight(20);
        point(200,300);
        noStroke(0);
        fill(0);
        text('CU', 188, 290);
        stroke(255,0,0);
        strokeWeight(20);
        point(150,20);
        noStroke(0);
        fill(0);
        text('GS25', 128, 45);
        stroke(255,0,0);
        strokeWeight(20);
        point(390,390);
        noStroke(0);
        fill(0);
        text('CU', 378, 380);
        stroke(0, 0, 0, 255);
    strokeWeight(7);
    line(100, 100, 200, 200);
    line(200, 200, 300, 400);
    line(350, 350, 0, 200);
    line(400, 0, 150, 300);
    line(128, 45, 200, 200);
    line(290,255,362,370);
    stroke(255, 0, 0, 255);
    fill(255,0,0);
    rect(50, 220, 10, 10);
    } else {
        background(220);
        stroke(0, 0, 0, 255);
    strokeWeight(7);
    line(100, 100, 200, 200);
    line(200, 200, 300, 400);
    line(350, 350, 0, 200);
    line(400, 0, 150, 300);
    line(128, 45, 200, 200);
    line(290,255,362,370);
    stroke(255, 0, 0, 255);
    fill(255,0,0);
    rect(50, 220, 10, 10);
    }
}
