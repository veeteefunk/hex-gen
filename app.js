var btn = document.getElementById('change');
var text = document.getElementById('colour');

var generator = function() {
    newColour = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    if(newColour.length < 7) {
        generator();
    }

}

    btn.addEventListener('click', function() {
        generator();
    
        document.body.style.background = newColour;
        btn.style.color = newColour;
        text.innerText = newColour; 
    })