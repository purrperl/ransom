let inputArea;
let outputArea;

function setup() {
    noCanvas();
    inputArea = select('#input-area');
    outputArea = select('#output-area');
    inputArea.input(updateText);
}

function updateText() {
    const text = inputArea.value();
    outputArea.html('');
    
    for (let char of text) {
        const span = createSpan(char);
        span.style('font-family', getRandomFont());
        span.style('font-size', getRandomSize() + 'px');
        span.style('color', getRandomColor());
        span.style('font-weight', getRandomWeight());
        span.style('font-style', getRandomStyle());
        outputArea.child(span);
    }
}

function getRandomFont() {
    const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS'];
    return random(fonts);
}

function getRandomSize() {
    return floor(random(16, 40)); // Random size between 16px and 40px
}

function getRandomColor() {
    return color(random(255), random(255), random(255));
}

function getRandomWeight() {
    const weights = ['normal', 'bold', 'bolder', 'lighter'];
    return random(weights);
}

function getRandomStyle() {
    const styles = ['normal', 'italic', 'oblique'];
    return random(styles);
}
