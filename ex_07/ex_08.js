// Stack Overflow

const colors = ['#0D3B66', '#FAF0CA', '#F4D35E', '#EE964B', '#F95738'];

function setupStage(id) {
    return new Konva.Stage({
        container: id,
        width: document.getElementById(id).offsetWidth,
        height: document.getElementById(id).offsetHeight
    });
}

const stage1 = setupStage('art1');
const layer1 = new Konva.Layer();
stage1.add(layer1);

for (let i = 0; i < 3; i++) {
    const triangle = new Konva.RegularPolygon({
        x: stage1.width() * (i + 1) / 4,
        y: stage1.height() / 2,
        sides: 3,
        radius: Math.min(stage1.width(), stage1.height()) / 8,
        fill: colors[i],
    });
    layer1.add(triangle);

    // w3school
    new Konva.Animation(frame => {
        triangle.rotation(frame.time * 90 / 1000);
    }, layer1).start();
}

const stage2 = setupStage('art2');
const layer2 = new Konva.Layer();
stage2.add(layer2);

for (let i = 0; i < 2; i++) {
    const circle = new Konva.Circle({
        x: stage2.width() * (i + 1) / 3,
        y: stage2.height() / 2,
        radius: Math.min(stage2.width(), stage2.height()) / 6,
        fill: colors[i + 3]
    });
    layer2.add(circle);

    new Konva.Animation(frame => {
        const scale = 1 + Math.sin(frame.time * 2 * Math.PI / 2000) * 0.2;
        circle.scale({ x: scale, y: scale });
    }, layer2).start();
}

const stage3 = setupStage('art3');
const layer3 = new Konva.Layer();
stage3.add(layer3);

const rect = new Konva.Rect({
    x: stage3.width() / 4,
    y: stage3.height() / 4,
    width: stage3.width() / 2,
    height: stage3.height() / 2,
    fill: colors[2]
});
layer3.add(rect);

rect.on('click tap', function() {
    this.fill(colors[Math.floor(Math.random() * colors.length)]);
    layer3.draw();
});

const stage4 = setupStage('art4');
const layer4 = new Konva.Layer();
stage4.add(layer4);

const line = new Konva.Line({
    points: [0, stage4.height() / 2, stage4.width(), stage4.height() / 2],
    stroke: colors[0],
    strokeWidth: 4
});
layer4.add(line);

new Konva.Animation(frame => {
    const amplitude = stage4.height() / 4;
    const period = 2000;
    line.points(line.points().map((point, i) => {
        return i % 2 === 1 ? 
            amplitude * Math.sin((frame.time + i * 50) * 2 * Math.PI / period) + stage4.height() / 2 : 
            point;
    }));
}, layer4).start();