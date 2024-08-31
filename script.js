let text = 'Ben Linton';
var i = 0
function typeWriter() {
    if (i < text.length) {
        document.getElementById('name').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 200);
    }
    }
typeWriter();